type IpfsId = string;

interface NostrPacket {
    kind: number;
    pubKey: string;
    timestamp: number;
    content: string | null;
    tags: [];
    id: number;
    sig: string;
};

interface IpfsSong {
    name: string;
    audio: IpfsId;
    image: IpfsId;
    description: string;
};
 
interface IpfsAlbum {
    name: string;
    description: string;
    songs: [IpfsId];
};
