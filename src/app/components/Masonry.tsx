import Post from "./Post";

export default function Mosaic({ posts }: { posts: NostrPacket[] }) {
    const oddPosts = posts.filter((_, i) => i % 2 == 0);
    const evenPosts = posts.filter((_, i) => i % 2 == 1);

    return (
        <div className="flex gap-6">
            <div className="flex flex-col gap-6">
                {oddPosts.map((post) => {
                    return <Post data={post} />;
                })}
            </div>
            <div className="flex flex-col gap-6">
                {evenPosts.map((post) => {
                    return <Post data={post} offset={true} />;
                })}
            </div>
        </div>
    );
}
