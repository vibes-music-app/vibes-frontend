"use client";

import { uploadSong } from "../../lib/ipfs";
import { RELAY_URL, initRelay } from "../../lib/nostr";

export default function Upload() {
    return (
        <main className="flex ">
            <form onSubmit={uploadSong}>
                <h2>Song</h2>
                <input type="file" id="formSong" name="song" />
                <h2>Icon</h2>

                <input type="file" id="formPic" name="icon" />
                <h2>Song Name</h2>

                <input type="text" id="formName" name="name" />
                <h2>Song Desc</h2>

                <input type="text" id="formDesc" name="name" />
                <button type="submit">Upload</button>
            </form>
        </main>
    );
}
