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
} from "../lib/nostr";

import { uploadSong } from "../lib/ipfs";

import Recommendations from "./components/Recommendations";
import MusicPlayer from "./components/MusicPlayer";
import { getAllCollectionNames } from "@/lib/collections";
import { getLatestPosts, getRecommendedPosts } from "@/lib/recommendations";

export default async function Home() {
    const collectionNames = await getAllCollectionNames();
    // const relay = await initRelay("ws://10.33.141.120/relay/");
    // const newestPosts = await latestPosts(relay, 5);
    // const recommendedPosts = (await getPosts(relay, "", 5)) as any;
    const recommendedPosts = await getRecommendedPosts();
    const newestPosts = await getLatestPosts();

    return (
        <main className="flex">
            <CollectionsPanel collectionNames={collectionNames} />
            <Recommendations
                recommendedPosts={recommendedPosts}
                newestPosts={newestPosts}
            />
            <ContentPanel />
            <MusicPlayer />
        </main>
    );
}
