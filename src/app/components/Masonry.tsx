import Post from "./Post";
import { Event } from "nostr-tools";

export default function Mosaic({
    posts,
    audio,
    isPlaying,
    setIsPlaying,
}: {
    posts: NostrPacket[] | Event[];
    audio: React.MutableRefObject<HTMLAudioElement>;
    isPlaying: boolean;
    setIsPlaying: (isPlaying: boolean) => void;
}) {
    const firstPosts = posts.filter((_, i) => i % 3 == 0);
    const secondPosts = posts.filter((_, i) => i % 3 == 1);
    const thirdPosts = posts.filter((_, i) => i % 3 == 2);

    // const unpack = async (ipfs_url: string) => {
    //     const response = await fetch(ipfs_url, {
    //         method: "GET",
    //         headers: {
    //             Accept: "application/json",
    //         },
    //     });
    //     return await response.json();
    // };

    // // this URL needs to be passed in from the nostr object
    // //const content = await unpack(data.content)
    // const content = await unpack(
    //     "http://bafybeiggesonfbntocaovb4xdimakgkv4dj7any7kfkpqlnf5hn3s3htwq.ipfs.localhost:8080/"
    // );
    // console.log("content", data);

    return (
        <div className="flex gap-6">
            <div className="flex flex-col gap-6">
                {firstPosts.map((post, index) => {
                    return (
                        <Post
                            data={post}
                            index={index}
                            audio={audio}
                            isPlaying={isPlaying}
                            setIsPlaying={setIsPlaying}
                        />
                    );
                })}
            </div>
            <div className="flex flex-col gap-6">
                {secondPosts.map((post, index) => {
                    return (
                        <Post
                            data={post}
                            offset={true}
                            index={index}
                            audio={audio}
                            isPlaying={isPlaying}
                            setIsPlaying={setIsPlaying}
                        />
                    );
                })}
            </div>
            <div className="flex flex-col gap-6">
                {thirdPosts.map((post, index) => {
                    return (
                        <Post
                            data={post}
                            index={index}
                            audio={audio}
                            isPlaying={isPlaying}
                            setIsPlaying={setIsPlaying}
                        />
                    );
                })}
            </div>
        </div>
    );
}
