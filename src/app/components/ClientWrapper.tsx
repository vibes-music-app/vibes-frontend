"use client";

import Recommendations from "./Recommendations";
import CollectionsPanel from "./CollectionsPanel";
import ContentPanel from "./ContentPanel";
import MusicPlayer from "./MusicPlayer";

import { useEffect, useRef, useState } from "react";

export default function ClientWrapper({
    collectionNames,
    recommendedPosts,
    newestPosts,
}: {
    collectionNames: { name: string }[];
    recommendedPosts: any;
    newestPosts: any;
}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audio = useRef(new Audio("/thinking_out_loud.mp3"));

    useEffect(() => {}, []);

    return (
        <>
            <CollectionsPanel collectionNames={collectionNames} />
            <Recommendations
                recommendedPosts={recommendedPosts}
                newestPosts={newestPosts}
                audio={audio}
                setIsPlaying={setIsPlaying}
                isPlaying={isPlaying}
            />
            <ContentPanel />
            <MusicPlayer
                isPlaying={isPlaying}
                setIsPlaying={setIsPlaying}
                audio={audio}
            />
        </>
    );
}
