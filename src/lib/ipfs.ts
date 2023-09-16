
const IPFS_URL = '10.33.136.17/ipfs_api/api/v0';

interface IpfsResponse {
    Name: string;
    Hash: string;
    Size: number;
}

const uploadFile = async (filePath: string) => {
    let data = new FormData();
    data.append('file', `@${filePath}`);

    const res = await fetch(`${IPFS_URL}/add`, {
        method: 'POST',
        body: data
    });

    return (await res.json() as IpfsResponse).Hash;
};

const uploadSong = async (data: IpfsSong) => {
    let audioPath: string = data.audio;
    data.audio = await uploadFile(audioPath);

    let imgPath: string = data.image;
    data.image = await uploadFile(imgPath);

    console.log(data);
    const res = await fetch(`${IPFS_URL}/add`, {
        method: 'POST',
        body: data as unknown as undefined
    });

    let songHash: string = (await res.json() as IpfsResponse).Hash;

};
