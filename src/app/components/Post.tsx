"use client";
import { useState } from "react";
import Modal from "./Modal";
import Image from "next/image";
import { Event } from "nostr-tools";
import { Kind } from "@/lib/nostr";

export default function Post({
    data,
    offset,
    index,
}: {
    data: NostrPacket | Event;
    offset?: boolean;
    index: number;
}) {
    const [isOpen, setIsOpen] = useState(false);

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

    return (
        <>
            <div
                className={`group relative z-10 w-44 cursor-pointer rounded-md bg-white transition-transform duration-100 hover:z-50 hover:scale-105`}
                onClick={() => setIsOpen(true)}
            >
                <div
                    className={`${border} h-full w-full overflow-hidden rounded-md border-2 bg-white pb-2`}
                >
                    <div className="relative aspect-square w-full overflow-hidden">
                        <Image
                            src={`https://source.unsplash.com/random/?album_cover&id=${randomImgHash}`}
                            alt="vinyl"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="px-3 pt-2 font-bold">
                        {Kind.album == kind ? "Album" : "Song"}
                    </div>
                    <div className="px-3 pb-2 italic leading-none">
                        {Kind.album == kind ? "Ed Sheeran" : "Kendrick Lamar"}
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
                        className="flex h-[80%] w-[60%] flex-col justify-center gap-8 rounded-lg bg-white px-16 py-8"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <div className="mb-6 flex justify-start">
                            <div className="relative aspect-square h-96">
                                <Image src="/vinyl.png" alt="vinyl" fill />
                            </div>
                            <div>
                                <h2 className="text-5xl">Thinking Out Loud</h2>
                                <div className="font-secondary text-2xl">
                                    Ed Sheeran
                                </div>
                            </div>
                        </div>
                        <div>
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
                    <div className="absolute right-4 h-[80%] w-[18%] rounded-lg bg-white">
                        <h2 className="px-3 py-2 text-2xl font-bold">
                            Comments
                        </h2>
                        <div></div>
                    </div>
                </>
            </Modal>
        </>
    );
}
