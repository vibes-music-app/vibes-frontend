"use client";

import Image from "next/image";

export default function SearchBar() {
    return (
        <div className="relative">
            <div className="absolute left-2 top-[50%] -translate-y-[50%]">
                <Image
                    src="/magnifying_glass.png"
                    height="15"
                    width="15"
                    alt="magnifying glass"
                />
            </div>
            <input type="text" className="rounded-md border px-2" />
        </div>
    );
}
