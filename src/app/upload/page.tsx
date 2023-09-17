"use client";

import { uploadSong } from "../../lib/ipfs";
import { RELAY_URL, initRelay } from "../../lib/nostr";

export default function Upload() {
    return (
        <main className="flex ">
            <form onSubmit={uploadSong}>
                <input type="file" id="formSong" name="song" />
                <input type="file" id="formPic" name="icon" />
                <input type="text" id="formName" name="name" />
                <input type="text" id="formDesc" name="name" />
                <button type="submit">Upload</button>
            </form>
        </main>
    );
}
