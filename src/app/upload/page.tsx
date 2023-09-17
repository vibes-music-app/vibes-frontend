"use client";

import { uploadSong } from "../../lib/ipfs";

export default async function Upload() {
    // test push song
    //const resp = await uploadSong({
    //name: 'test',
    //audio: '/home/stef/test_file',
    //image: '/home/stef/test_file',
    //description: 'this is a test file upload'
    //});
    //console.log(resp);

    // TODO text fields
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
