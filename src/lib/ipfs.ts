import {
    genKeys,
    postEvent,
    initRelay,
    publishEvent,
} from "./nostr";

const IPFS_URL = 'http://10.33.136.17/ipfs_api/api/v0';
const RELAY_URL = 'ws://10.33.143.156:5000/';

interface IpfsResponse {
    Name: string;
    Hash: string;
    Size: number;
}

const uploadFile = async (f: File) => {
    let data = new FormData();
    data.append('files', f, f.name);

    const res = await fetch(`${IPFS_URL}/add`, {
        method: 'POST',
        body: data
    });

    return (await res.json() as IpfsResponse).Hash;
};

export const uploadSong = async (e: FormEvent) => {
    e.preventDefault();

    let audioElem = document.getElementById("formSong") as HTMLFormElement;
    let audioFile: File = audioElem.files[0] || null;
    let audio: IpfsId = await uploadFile(audioFile);

    let picElem = document.getElementById("formSong") as HTMLFormElement;
    let picFile: File = picElem.files[0] || null;
    let pic: IpfsId = await uploadFile(picFile);

    let nameElem = document.getElementById("formName") as HTMLFormElement;
    let name: string = nameElem.value;

    let descElem = document.getElementById("formDesc") as HTMLFormElement;
    let description: string = descElem.value;

    let ipfsSong: IpfsSong = {
        name: name,
        audio: audio,
        image: pic,
        description: description,
    };

    let data = new FormData();
    data.append('file', JSON.stringify(ipfsSong));

    const res = await fetch(`${IPFS_URL}/add`, {
        method: 'POST',
        body: data,
    });

    const {sk, pk} = genKeys();
    let ipfsHash: string = (await res.json() as IpfsResponse).Hash;

    let event = postEvent(ipfsHash, pk, sk);
    console.log(event) 
    let relay = await initRelay(RELAY_URL);
    console.log(relay) 
    publishEvent(relay, event);
};
