"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function MusicPlayer() {
    const [currentTimeInSeconds, setCurrentTimeInSeconds] = useState(0);
    const totalTimeInSeconds = useRef(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audio = useRef<HTMLAudioElement>();
    const progressBarRef = useRef<HTMLDivElement>(null);
    const outerProgressBarRef = useRef<HTMLDivElement>(null);
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
            totalTimeInSeconds.current = audio.current?.duration || 0;
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

        const progressPercentage = (time / totalTimeInSeconds.current) * 100;

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

    const setProgressBarPosition = (e: MouseEvent) => {
        if (!outerProgressBarRef.current || !audio.current) return;
        const progressBarWidth = outerProgressBarRef.current.clientWidth;
        const rect = outerProgressBarRef.current.getBoundingClientRect();

        const clickPosition = e.screenX - rect.left;
        const percentage = clickPosition / progressBarWidth;
        const time = percentage * totalTimeInSeconds.current;

        audio.current.currentTime = time;
    };

    const handleProgressBarMouseDown = (e: React.MouseEvent) => {
        if (!outerProgressBarRef.current || !audio.current) return;

        window.addEventListener("mousemove", setProgressBarPosition);
        window.addEventListener("mouseup", () => {
            window.removeEventListener("mousemove", setProgressBarPosition);
        });

        setProgressBarPosition(e.nativeEvent);
    };

    return (
        <div className="bg-black group fixed bottom-0 left-[50%] -translate-x-[50%] select-none rounded-t-3xl px-4 py-2">
            <div className="flex items-center justify-center gap-4">
                <button
                    onClick={handlePreviousTrackButtonClick}
                    className="active:scale-90"
                >
                    <Image
                        src="/previous_track.png"
                        alt="go back a track"
                        height={15}
                        width={15}
                    />
                </button>
                <button
                    onClick={handlePlayButtonClick}
                    className="relative h-8 w-8 transition-all active:scale-90 group-hover:h-12 group-hover:w-12"
                >
                    {isPlaying ? (
                        <Image src="/pause_button.png" alt="pause/play" fill />
                    ) : (
                        <Image src="/play_button.png" alt="pause/play" fill />
                    )}
                </button>
                <button
                    onClick={handleNextTrackButtonClick}
                    className="active:scale-90"
                >
                    <Image
                        src="/next_track.png"
                        alt="skip a track"
                        height={15}
                        width={15}
                    />
                </button>
            </div>
            <div className="text-white flex items-center justify-center gap-6">
                <div className="min-w-[55px] text-end font-secondary">
                    {timeToString(currentTimeInSeconds)}
                </div>
                <div
                    className="relative h-2 w-[500px] cursor-pointer"
                    onMouseDown={handleProgressBarMouseDown}
                    ref={outerProgressBarRef}
                >
                    <div className="bg-white h-full rounded-full"></div>
                    <div
                        className="absolute left-0 top-0 h-full rounded-full bg-yellow"
                        ref={progressBarRef}
                    ></div>
                </div>
                <div className="min-w-[55px] font-secondary">
                    {timeToString(totalTimeInSeconds.current)}
                </div>
            </div>
        </div>
    );
}
