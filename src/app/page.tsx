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
import { getAllCollectionNames } from "@/lib/collections";
import { getLatestPosts, getRecommendedPosts } from "@/lib/recommendations";
import ClientWrapper from "./components/ClientWrapper";

export default async function Home() {
    const collectionNames = await getAllCollectionNames();
    // const relay = await initRelay("ws://10.33.141.120/relay/");
    // const newestPosts = await latestPosts(relay, 5);
    // const recommendedPosts = (await getPosts(relay, "", 5)) as any;
    const recommendedPosts = await getRecommendedPosts();
    const newestPosts = await getLatestPosts();

    return (
        <main className="flex">
            <ClientWrapper
                collectionNames={collectionNames}
                recommendedPosts={recommendedPosts}
                newestPosts={newestPosts}
            />
        </main>
    );
}
