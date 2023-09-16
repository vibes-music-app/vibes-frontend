export default async function Post({
    data,
    offset,
}: {
    data: NostrPacket;
    offset?: boolean;
}) {
    let borders = "";

    if (!offset) {
        borders = `[&:nth-child(3n)]:border-blue [&:nth-child(3n+1)]:border-yellow [&:nth-child(3n+2)]:border-red`;
    } else if (offset) {
        borders = `[&:nth-child(3n)]:border-yellow [&:nth-child(3n+1)]:border-red [&:nth-child(3n+2)]:border-blue`;
    }

    const unpack = async (ipfs_url) => {
        const response = await fetch(ipfs_url, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }})
            return await response.json()
    }

    // this URL needs to be passed in from the nostr object
    //const content = await unpack(data.content)
    const content = await unpack('http://bafybeiggesonfbntocaovb4xdimakgkv4dj7any7kfkpqlnf5hn3s3htwq.ipfs.localhost:8080/')
    console.log('content', data)

    const randomHeight = Math.floor(Math.random() * 300) + 100;

    return (
        <div
            className={`w-44 rounded-md border-2 ${borders}`}
            style={{ height: randomHeight + "px" }}
        >
        <p> { content.description } </p>
        </div>
    );
}
