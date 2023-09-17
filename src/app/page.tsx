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

export default function Home() {
    return (
        <main className="flex">
            <CollectionsPanel />
            <Recommendations />
            <ContentPanel />
            <MusicPlayer />
        </main>
    );
}
