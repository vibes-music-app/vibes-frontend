export const getLatestPosts: () => Promise<NostrPacket[]> = async () => {
    return Array.from({ length: 20 }, () => ({
        kind: "song",
        pubKey: "pubKey",
        timestamp: 123,
        content: "ipfs_key",
        tags: [],
        id: 123,
        sig: "sig",
    }));
};

export const getRecommendedPosts: () => Promise<NostrPacket[]> = async () => {
    return Array.from({ length: 20 }, () => ({
        kind: "song",
        pubKey: "pubKey",
        timestamp: 123,
        content: "ipfs_key",
        tags: [],
        id: 123,
        sig: "sig",
    }));
};
