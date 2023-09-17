type Kind = "song" | "album" | "like" | "comment" | "follow";

interface NostrPacket {
    kind: Kind;
    pubKey: string;
    timestamp: number;
    content: string | null;
    tags: [];
    id: number;
    sig: string;
}

interface Profile {
    profilePicSrc: string;
    name: string;
}