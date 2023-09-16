type Kind = "song" | "album" | "like" | "comment" | "follow";

type IpfsId = string;

interface NostrPacket {
    kind: Kind;
    pubKey: string;
    timestamp: number;
    content: string | null;
    tags: [];
    id: number;
    sig: string;
}

interface IpfsSong {
    name: string;
    audio: IpfsId | string; // ipfs id
    image: IpfsId | string; // ipfs id
    description: string;
};
 
interface IpfsAlbum {
    name: string;
    description: string;
    songs: [IpfsId | string];
};
