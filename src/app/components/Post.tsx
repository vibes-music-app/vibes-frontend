"use client";
import { useState, useRef } from "react";
import Modal from "./Modal";
import Image from "next/image";
import { Event } from "nostr-tools";
import { Kind } from "@/lib/nostr";
import CommentBlock from "./CommentBlock";
import { shuffle } from "@/lib/recommendations";

export default function Post({
    data,
    offset,
    index,
    audio,
    isPlaying,
    setIsPlaying,
}: {
    data: NostrPacket | Event | any;
    offset?: boolean;
    index: number;
    audio: React.MutableRefObject<HTMLAudioElement>;
    isPlaying: boolean;
    setIsPlaying: (isPlaying: boolean) => void;
}) {
    const [isOpen, setIsOpen] = useState(false);

    console.log({ data });

    let border = "";

    if (index % 3 === 0) {
        border = "border-blue";
        if (offset) {
            border = "border-yellow";
        }
    } else if (index % 3 === 1) {
        border = "border-yellow";
        if (offset) {
            border = "border-red";
        }
    } else {
        border = "border-red";
        if (offset) {
            border = "border-blue";
        }
    }

    const randomImgHash = Math.floor(Math.random() * 1000000);
    const { kind } = data;

    const comments = shuffle([
        ...Array.from({ length: 2 }, () => ({
            name: "John Doe",
            comment:
                "This is a great song! I really relate to the message behind it.",
            timestamp: "12:01pm",
            profilePic: "/profile_photo.png",
            replies: [
                {
                    name: "Jane Doe",
                    comment: "I agree! I love this song so much.",
                    timestamp: "12:02pm",
                    profilePic: "/profile_photo.png",
                },
                {
                    name: "Jane Doe",
                    comment: "I agree! I love this song so much.",
                    timestamp: "12:02pm",
                    profilePic: "/profile_photo.png",
                },
            ],
        })),
        ...Array.from({ length: 5 }, () => ({
            name: "John Doe",
            comment:
                "This is a great song! I really relate to the message behind it.",
            timestamp: "12:01pm",
            profilePic: "/profile_photo.png",
            replies: [],
        })),
        ...Array.from({ length: 2 }, () => ({
            name: "John Doe",
            comment:
                "This is a great song! I really relate to the message behind it.",
            timestamp: "12:01pm",
            profilePic: "/profile_photo.png",
            replies: [
                {
                    name: "Jane Doe",
                    comment: "I agree! I love this song so much.",
                    timestamp: "12:02pm",
                    profilePic: "/profile_photo.png",
                },
                {
                    name: "Jane Doe",
                    comment: "I agree! I love this song so much.",
                    timestamp: "12:02pm",
                    profilePic: "/profile_photo.png",
                },
                {
                    name: "Jane Doe",
                    comment: "I agree! I love this song so much.",
                    timestamp: "12:02pm",
                    profilePic: "/profile_photo.png",
                },
            ],
        })),
    ]);

    const artists = [
        "Ed Sheeran",
        "Kendrick Lamar",
        "Drake",
        "Taylor Swift",
        "Maneskin",
        "Lil' Yachty",
        "Post Malone",
        "Michael Jackson",
    ];

    function randomArtist() {
        return artists[Math.floor(Math.random() * artists.length)];
    }

    return (
        <>
            <div
                className={`group relative z-10 w-44 cursor-pointer rounded-md bg-white transition-transform duration-100 hover:z-50 hover:scale-105`}
                onClick={() => setIsOpen(true)}
            >
                <div
                    className={`${border} relative h-full w-full overflow-hidden rounded-md border-2 bg-white pb-2`}
                >
                    {Kind.album !== kind && (
                        <div
                            onClick={(e) => {
                                e.stopPropagation();
                                const currentSrc = new URL(audio.current.src)
                                    .pathname;
                                const newSrc = data.audio;

                                if (isPlaying && currentSrc == newSrc) {
                                    audio.current.pause();
                                    setIsPlaying(false);
                                } else if (!isPlaying && currentSrc == newSrc) {
                                    audio.current.play();
                                    setIsPlaying(true);
                                } else if (currentSrc != newSrc) {
                                    audio.current.src = newSrc;
                                    audio.current.play();
                                    setIsPlaying(true);
                                }
                            }}
                            className="absolute left-0 top-0 z-10 flex aspect-square w-full items-center justify-center overflow-hidden opacity-0 transition-all hover:bg-[rgba(0,0,0,30%)] hover:opacity-100"
                        >
                            <Image
                                src="/play.png"
                                alt="play"
                                height={50}
                                width={50}
                            />
                        </div>
                    )}
                    <div className="relative aspect-square w-full overflow-hidden">
                        <img
                            src={data.image}
                            alt="vinyl"
                            className="aspect-square object-cover"
                        />
                    </div>
                    <div className="px-3 pt-2 font-bold">{data.name}</div>
                    <div className="px-3 pb-2 italic leading-none">
                        {data.artist || randomArtist()}
                    </div>
                    <div className="font-secondary px-3 leading-4">
                        {Kind.album == kind
                            ? "This album is important to me."
                            : ""}
                    </div>
                </div>
                {Kind.album == kind && (
                    <div className="pointer-events-none absolute left-0 top-0 -z-10 w-full transition-transform duration-300 group-hover:translate-x-12 group-hover:rotate-180">
                        <div className="relative aspect-square w-full">
                            <Image src="/vinyl.png" alt="vinyl" fill />
                        </div>
                    </div>
                )}
            </div>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <>
                    <div
                        className="flex h-[80%] w-[60%] flex-col justify-start gap-8 rounded-lg bg-white p-12"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <div className="mb-6 flex justify-start">
                            <div className="relative aspect-square h-96 ">
                                <img
                                    src={data.image}
                                    alt="vinyl"
                                    className="rounded-lg"
                                />
                            </div>
                            <div className="ml-6 flex items-center">
                                <div>
                                    <h2 className="text-5xl max-w-[250px]">{data.name}</h2>
                                    <div className="font-secondary text-2xl">
                                        {data.artist}
                                    </div>
                                </div>
                            </div>
                            {data.artist === "Ed Sheeran" && (
                                <div className="ml-36 max-h-96 flex-1 overflow-auto">
                                    <div className="mt-2 flex w-full justify-between border-b-2 border-b-black text-lg font-bold">
                                        <div>One</div>
                                        <div className="text-grey">3:47</div>
                                    </div>
                                    <div className="mt-2 flex w-full justify-between border-b-2 border-b-black text-lg font-bold">
                                        <div>I'm a Mess</div>
                                        <div className="text-grey">3:20</div>
                                    </div>
                                    <div className="mt-2 flex w-full justify-between border-b-2 border-b-black text-lg font-bold">
                                        <div>Sing</div>
                                        <div className="text-grey">3:31</div>
                                    </div>
                                    <div className="mt-2 flex w-full justify-between border-b-2 border-b-black text-lg font-bold">
                                        <div>Don't</div>
                                        <div className="text-grey">3:09</div>
                                    </div>
                                    <div className="mt-2 flex w-full justify-between border-b-2 border-b-black text-lg font-bold">
                                        <div>Nina</div>
                                        <div className="text-grey">4:17</div>
                                    </div>
                                    <div className="mt-2 flex w-full justify-between border-b-2 border-b-black text-lg font-bold">
                                        <div>Photograph</div>
                                        <div className="text-grey">3:01</div>
                                    </div>
                                    <div className="mt-2 flex w-full justify-between border-b-2 border-b-black text-lg font-bold">
                                        <div>Bloodstream</div>
                                        <div className="text-grey">3:58</div>
                                    </div>
                                    <div className="mt-2 flex w-full justify-between border-b-2 border-b-black text-lg font-bold">
                                        <div>Tenerife Sea</div>
                                        <div className="text-grey">2:59</div>
                                    </div>
                                    <div className="mt-2 flex w-full justify-between border-b-2 border-b-black text-lg font-bold">
                                        <div>Runaway</div>
                                        <div className="text-grey">3:23</div>
                                    </div>
                                    <div className="mt-2 flex w-full justify-between border-b-2 border-b-black text-lg font-bold">
                                        <div>The Man</div>
                                        <div className="text-grey">3:39</div>
                                    </div>
                                    <div className="mt-2 flex w-full justify-between border-b-2 border-b-black text-lg font-bold">
                                        <div>Thinking out Loud</div>
                                        <div className="text-grey">3:51</div>
                                    </div>
                                    <div className="mt-2 flex w-full justify-between border-b-2 border-b-black text-lg font-bold">
                                        <div>Afire Love</div>
                                        <div className="text-grey">3:08</div>
                                    </div>
                                    <div className="mt-2 flex w-full justify-between border-b-2 border-b-black text-lg font-bold">
                                        <div>Take it Back</div>
                                        <div className="text-grey">3:12</div>
                                    </div>
                                    <div className="mt-2 flex w-full justify-between border-b-2 border-b-black text-lg font-bold">
                                        <div>Shirtsleeves</div>
                                        <div className="text-grey">3:31</div>
                                    </div>
                                    <div className="mt-2 flex w-full justify-between border-b-2 border-b-black text-lg font-bold">
                                        <div>Even My Dad Does Sometimes</div>
                                        <div className="text-grey">3:39</div>
                                    </div>
                                    <div className="mt-2 flex w-full justify-between border-b-2 border-b-black text-lg font-bold">
                                        <div>I See Fire</div>
                                        <div className="text-grey">3:47</div>
                                    </div>
                                </div>
                            )}
                            {data.artist === "Post Malone" && (
                                <div className="ml-36 max-h-96 flex-1 overflow-auto">
                                    <div className="mt-2 flex w-full justify-between border-b-2 border-b-black text-lg font-bold">
                                        <div>Hollywood's Bleeding</div>
                                        <div className="text-grey">3:47</div>
                                    </div>
                                    <div className="mt-2 flex w-full justify-between border-b-2 border-b-black text-lg font-bold">
                                        <div>Saint-Tropez</div>
                                        <div className="text-grey">3:20</div>
                                    </div>
                                    <div className="mt-2 flex w-full justify-between border-b-2 border-b-black text-lg font-bold">
                                        <div>Enemies</div>
                                        <div className="text-grey">3:31</div>
                                    </div>
                                    <div className="mt-2 flex w-full justify-between border-b-2 border-b-black text-lg font-bold">
                                        <div>Allergic</div>
                                        <div className="text-grey">3:09</div>
                                    </div>
                                    <div className="mt-2 flex w-full justify-between border-b-2 border-b-black text-lg font-bold">
                                        <div>A Thousand Bad Times</div>
                                        <div className="text-grey">4:17</div>
                                    </div>
                                    <div className="mt-2 flex w-full justify-between border-b-2 border-b-black text-lg font-bold">
                                        <div>Circles</div>
                                        <div className="text-grey">3:01</div>
                                    </div>
                                    <div className="mt-2 flex w-full justify-between border-b-2 border-b-black text-lg font-bold">
                                        <div>Die for me (feat. Future & Halsley)</div>
                                        <div className="text-grey">3:58</div>
                                    </div>
                                    <div className="mt-2 flex w-full justify-between border-b-2 border-b-black text-lg font-bold">
                                        <div>One The Road (feat. Meek Mill & Lil Baby)</div>
                                        <div className="text-grey">2:59</div>
                                    </div>
                                    <div className="mt-2 flex w-full justify-between border-b-2 border-b-black text-lg font-bold">
                                        <div>Take What You want (feat. Ozzy Osbourne)</div>
                                        <div className="text-grey">3:23</div>
                                    </div>
                                    <div className="mt-2 flex w-full justify-between border-b-2 border-b-black text-lg font-bold">
                                        <div>I'm Gonna Be</div>
                                        <div className="text-grey">3:39</div>
                                    </div>
                                    <div className="mt-2 flex w-full justify-between border-b-2 border-b-black text-lg font-bold">
                                        <div>Staring At The Sun (feat. SZA)</div>
                                        <div className="text-grey">3:51</div>
                                    </div>
                                    <div className="mt-2 flex w-full justify-between border-b-2 border-b-black text-lg font-bold">
                                        <div>Sunflower - Spider-Man: Into the Spiderverse</div>
                                        <div className="text-grey">3:08</div>
                                    </div>
                                    <div className="mt-2 flex w-full justify-between border-b-2 border-b-black text-lg font-bold">
                                        <div>Internet</div>
                                        <div className="text-grey">3:12</div>
                                    </div>
                                    <div className="mt-2 flex w-full justify-between border-b-2 border-b-black text-lg font-bold">
                                        <div>Goodbyes (feat. Young Thug)</div>
                                        <div className="text-grey">3:31</div>
                                    </div>
                                    <div className="mt-2 flex w-full justify-between border-b-2 border-b-black text-lg font-bold">
                                        <div>Myself</div>
                                        <div className="text-grey">3:39</div>
                                    </div>
                                    <div className="mt-2 flex w-full justify-between border-b-2 border-b-black text-lg font-bold">
                                        <div>I Know</div>
                                        <div className="text-grey">3:47</div>
                                    </div>
                                    <div className="mt-2 flex w-full justify-between border-b-2 border-b-black text-lg font-bold">
                                        <div>Wow.</div>
                                        <div className="text-grey">3:47</div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="">
                            <h2 className="mb-2 text-2xl">Author's Notes</h2>
                            <p className="font-secondary">
                                "Well, 'Thinking Out Loud' is a really special
                                song to me. When I was writing it, I wanted to
                                capture that timeless, everlasting kind of love.
                                You know, the kind of love that just gets
                                stronger with age. I was inspired by my own
                                experiences and feelings, and I wanted to create
                                a song that people could connect with on a deep
                                level.
                            </p>
                            <br />
                            <p className="font-secondary">
                                The melody came to me pretty naturally, and I
                                remember sitting down with my guitar and just
                                strumming those chords. The lyrics flowed from
                                there, and I tried to be as honest and heartfelt
                                as possible. I think that's why the song
                                resonates with so many people. Love is a
                                universal emotion, and I wanted to express it in
                                a way that felt genuine.
                            </p>
                        </div>
                    </div>
                    <div
                        className="absolute right-4 h-[80%] w-[18%] rounded-lg bg-white"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <h2 className="border-b-4 border-b-blue px-3 py-2 text-2xl font-bold">
                            Comments
                        </h2>
                        <div className="flex max-h-[calc(100%-150px)] flex-col gap-2 overflow-auto py-4">
                            {comments.map((commentDetails) => {
                                return (
                                    <CommentBlock
                                        commentDetails={commentDetails}
                                    />
                                );
                            })}
                        </div>
                        <div className="flex items-center border-t-4 border-t-blue">
                            <input className="font-secondary mx-3 my-2 h-12 w-full rounded-md border-4 border-black px-3 py-2" />
                            <button className="absolute bottom-1 right-3 rounded-sm bg-blue px-2 font-bold text-white">
                                Send
                            </button>
                        </div>
                    </div>
                </>
            </Modal>
        </>
    );
}
