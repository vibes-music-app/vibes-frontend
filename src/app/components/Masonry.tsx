import Post from "./Post";

export default function Mosaic({ posts }: { posts: NostrPacket[] | Event[] }) {
    const firstPosts = posts.filter((_, i) => i % 3 == 0);
    const secondPosts = posts.filter((_, i) => i % 3 == 1);
    const thirdPosts = posts.filter((_, i) => i % 3 == 2);

    return (
        <div className="flex gap-6">
            <div className="flex flex-col gap-6">
                {firstPosts.map((post, index) => {
                    return <Post data={post} index={index} />;
                })}
            </div>
            <div className="flex flex-col gap-6">
                {secondPosts.map((post, index) => {
                    return <Post data={post} offset={true} index={index} />;
                })}
            </div>
            <div className="flex flex-col gap-6">
                {thirdPosts.map((post, index) => {
                    return <Post data={post} index={index} />;
                })}
            </div>
        </div>
    );
}
