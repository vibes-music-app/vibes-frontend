import Post from "./Post";

export default function Mosaic({ posts }: { posts: NostrPacket[] }) {
    const oddPosts = posts.filter((_, i) => i % 2 == 0);
    const evenPosts = posts.filter((_, i) => i % 2 == 1);

    return (
        <div className="flex gap-6">
            <div className="flex flex-col gap-6">
                {oddPosts.map((post, index) => {
                    return <Post data={post} index={index} />;
                })}
            </div>
            <div className="flex flex-col gap-6">
                {evenPosts.map((post, index) => {
                    return <Post data={post} offset={true} index={index} />;
                })}
            </div>
        </div>
    );
}
