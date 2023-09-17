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
                    className={`${border} h-full w-full rounded-md border-2 bg-white pb-2`}
                >
                    <div className="relative aspect-square w-full">
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
                        className="h-[80%] w-[60%] rounded-lg bg-white"
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    ></div>
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
