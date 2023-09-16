"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
    const [currentTimeInSeconds, setCurrentTimeInSeconds] = useState(0);
    const [totalTimeInSeconds, setTotalTimeInSeconds] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audio = useRef<HTMLAudioElement>();
    const progressBarRef = useRef<HTMLDivElement>(null);
    const timeToString = (time: number) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);

        return `${minutes}:${
            seconds.toString().length == 1 ? "0" + seconds : seconds
        }`;
    };

    useEffect(() => {
        audio.current = new Audio("/thinking_out_loud.mp3");
        audio.current.addEventListener("loadedmetadata", () => {
            setTotalTimeInSeconds(audio.current?.duration || 0);
        });

        audio.current.addEventListener("timeupdate", () => {
            updateProgressBar(audio.current?.currentTime || 0);
            setCurrentTimeInSeconds(audio.current?.currentTime || 0);
        });

        return () => {
            audio.current?.removeEventListener("loadedmetadata", () => {});
            audio.current?.removeEventListener("timeupdate", () => {});
        };
    }, []);

    const updateProgressBar = (time: number) => {
        if (!progressBarRef.current) return;

        const progressPercentage = (time / totalTimeInSeconds) * 100;

        progressBarRef.current.style.width = `${progressPercentage}%`;
    };

    const handlePlayButtonClick = () => {
        if (isPlaying) {
            audio.current?.pause();
        } else {
            audio.current?.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handlePreviousTrackButtonClick = () => {
        // TODO
        console.log("previous track");
    };

    const handleNextTrackButtonClick = () => {
        // TODO
        console.log("next track");
    };

    return (
        <div className="bg-black fixed bottom-0 left-[50%] -translate-x-[50%] rounded-t-3xl px-4 py-2">
            <div className="flex items-center justify-center gap-4">
                <button onClick={handlePreviousTrackButtonClick}>
                    <Image
                        src="/previous_track.png"
                        alt="go back a track"
                        height={15}
                        width={15}
                    />
                </button>
                <button onClick={handlePlayButtonClick}>
                    {isPlaying ? (
                        <Image
                            src="/pause_button.png"
                            alt="pause/play"
                            height={30}
                            width={30}
                        />
                    ) : (
                        <Image
                            src="/play_button.png"
                            alt="pause/play"
                            height={30}
                            width={30}
                        />
                    )}
                </button>
                <button onClick={handleNextTrackButtonClick}>
                    <Image
                        src="/next_track.png"
                        alt="skip a track"
                        height={15}
                        width={15}
                    />
                </button>
            </div>
            <div className="text-white flex items-center justify-center gap-6">
                <div className="min-w-[55px] text-end">
                    {timeToString(currentTimeInSeconds)}
                </div>
                <div className="relative h-2 w-[500px]">
                    <div className="bg-white h-full rounded-full"></div>
                    <div
                        className="absolute left-0 top-0 h-full rounded-full bg-yellow"
                        ref={progressBarRef}
                    ></div>
                </div>
                <div className="min-w-[55px]">
                    {timeToString(totalTimeInSeconds)}
                </div>
            </div>
        </div>
    );
}
