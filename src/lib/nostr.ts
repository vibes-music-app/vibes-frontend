import {
    generatePrivateKey,
    getPublicKey,
    validateEvent,
    verifySignature,
    getSignature,
    getEventHash,
    finishEvent,
    UnsignedEvent,
    relayInit,
    Relay,
} from "nostr-tools";

export const genKeys = () => {
    let sk = generatePrivateKey();
    let pk = getPublicKey(sk);

    return { sk, pk };
};

const genEvent = (ipfs_url: string, user: string, private_key: string) => {
    const unsignedEvent: UnsignedEvent<number> = {
        kind: 1,
        pubkey: user,
        created_at: Math.floor(Date.now() / 1000),
        tags: [],
        content: ipfs_url,
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

    return relay
};

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
    ipfs_url: string,
    demo_public_key: string,
    demo_private_key: string
) => {
    let newEvent = genEvent(ipfs_url, demo_public_key, demo_private_key);
    if (newEvent) {
        await relay.publish(newEvent);
    }
};
