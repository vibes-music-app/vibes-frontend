import {
    generatePrivateKey,
    getPublicKey,
    validateEvent,
    verifySignature,
    getSignature,
    getEventHash,
    finishEvent,
    VerifiedEvent,
    UnsignedEvent,
    relayInit,
    Relay,
} from "nostr-tools";

// --- Key Management ---
//
export const genKeys = () => {
    let sk = generatePrivateKey();
    let pk = getPublicKey(sk);

    return { sk, pk };
};

const genericEvent = (
    kind: number,
    content: string,
    public_key: string,
    private_key: string,
    tags: string[][]
) => {
    const unsignedEvent: UnsignedEvent<number> = {
        kind: kind,
        pubkey: public_key,
        created_at: Math.floor(Date.now() / 1000),
        tags: tags,
        content: content,
    };

    const id = getEventHash(unsignedEvent);
    const sig = getSignature(unsignedEvent, private_key);

    const signedEvent = {
        ...unsignedEvent,
        id,
        sig,
    };

    let ok = validateEvent(signedEvent);
    let veryOk = verifySignature(signedEvent);

    if (ok) {
        return finishEvent(signedEvent, private_key);
    } else {
        return false;
    }
};

const postEvent = (
    ipfs_link: string,
    public_key: string,
    private_key: string
) => {
    return genericEvent(1, ipfs_link, public_key, private_key, []);
};

export const collectionEvent = (
    ipfs_link: string,
    public_key: string,
    private_key: string
) => {
    return genericEvent(2, ipfs_link, public_key, private_key, []);
};

export const likeEvent = (
    post_id: string,
    public_key: string,
    private_key: string
) => {
    return genericEvent(3, null, public_key, private_key, [["post", post_id]]);
};

export const commentEvent = (
    comment: string,
    post_id: string,
    public_key: string,
    private_key: string,
    replying_to = ""
) => {
    if (replying_to) {
        return genericEvent(4, comment, public_key, private_key, [
            ["post", post_id],
            ["replying_to", replying_to],
        ]);
    } else {
        return genericEvent(4, comment, public_key, private_key, [
            ["post", post_id],
        ]);
    }
};

// --- Relay / Event Management ---

export const initRelay = async (url: string) => {
    // const relay = relayInit('ws://10.33.141.120/relay')

    const relay = relayInit(url);

    relay.on("connect", () => {
        console.log(`connected to ${relay.url}`);
    });
    relay.on("error", () => {
        console.log(`failed to connect to ${relay.url}`);
    });

    await relay.connect();

    return relay;
};

const getEvents = async (relay: Relay, filters: [any]) => {
    const events = await relay.list(filters);
    return events;
};

interface PostsFilter {
    kinds: string[];
    author?: string[];
    limit?: number;
}
// Get posts, optionally from a specific author
export const getPosts = async (
    relay: Relay,
    author: string = "",
    limit = 0
) => {
    let filter: PostsFilter = { kinds: ["song"] };
    if (author) {
        filter["author"] = [author];
    }

    if (limit) {
        filter["limit"] = limit;
    }

    const posts = await getEvents(relay, [filter]);
    return posts;
};

export const getCollections = async (relay: Relay) => {
    const posts = await getEvents(relay, [{ kinds: [2] }]);
    return posts;
};

// DEPRECATED
export const subscribe = async (relay: Relay) => {
    // Example subscription to a relay

    let sub = relay.sub([
        {
            kinds: [1],
        },
    ]);

    sub.on("event", (event) => {
        console.log("new relay event!", event);
    });
};

export const subscribeToAuthor = async (relay: Relay, author: string) => {
    // Example subscription to an author and publishing of an event

    let sub = relay.sub([
        {
            kinds: [1],
            authors: [author],
        },
    ]);

    sub.on("event", (event) => {
        console.log("got this eventaroo", event);
    });
};

export const publishEvent = async (
    relay: Relay,
    event: VerifiedEvent<number>
) => {
    if (event) {
        await relay.publish(event);
    }
};
