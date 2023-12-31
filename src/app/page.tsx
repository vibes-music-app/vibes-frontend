import CollectionsPanel from "./components/CollectionsPanel";
import ContentPanel from "./components/ContentPanel";

import {
    getPosts,
    getEvent,
    getPoolEvents,
    latestPosts,
    postEvent,
    initRelay,
    genKeys,
    RELAY_URL,
    Kind,
} from "../lib/nostr";

import { getAllCollectionNames } from "@/lib/collections";
import { getLatestPosts, getRecommendedPosts } from "@/lib/recommendations";
import { uploadSong, getSong } from "../lib/ipfs";
import ClientWrapper from "./components/ClientWrapper";

export default async function Home() {
    const collectionNames = await getAllCollectionNames();
    // const newestPosts = await latestPosts(relay, 5);
    // const recommendedPosts = (await getPosts(relay, "", 5)) as any;
    const recommendedPosts = await getRecommendedPosts();
    const newestPosts = await getLatestPosts();

    const posts = await getPosts();

    let songs = [];

    for (let i = 0; i < posts.length; i++) {
        songs.push(await getSong(posts[i].content));
    }

    songs.push({
        kind: Kind.album,
        name: "Multiply",
        artist: "Ed Sheeran",
        image: "/multiply.png",
        audio: "/thinking_out_loud.mp3",
    });
    songs.push({
        kind: Kind.album,
        name: "Hollywood's Bleeding",
        artist: "Post Malone",
        image: "/hollywood.webp",
        audio: "/thinking_out_loud.mp3",
    });

    return (
        <main className="flex">
            <ClientWrapper
                collectionNames={collectionNames}
                recommendedPosts={songs}
                newestPosts={songs}
            />
        </main>
    );
}
