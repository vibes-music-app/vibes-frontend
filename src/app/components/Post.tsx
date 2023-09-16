export default function Post({
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

    const randomHeight = Math.floor(Math.random() * 300) + 100;

    return (
        <div
            className={`w-44 rounded-md border-2 ${borders}`}
            style={{ height: randomHeight + "px" }}
        ></div>
    );
}
