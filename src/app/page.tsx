import CollectionsPanel from "./components/CollectionsPanel";
import ContentPanel from "./components/ContentPanel";

import {
    postEvent,
    initRelay,
    genKeys,
    latestPosts,
    getEvent,
} from "../lib/nostr";

import {
    uploadSong
} from "../lib/ipfs";

import Recommendations from "./components/Recommendations";
import MusicPlayer from "./components/MusicPlayer";
export default async function Home() {
    // const relay = await initRelay("ws://10.33.141.120/relay/");
    // console.log("We have these posts already!");

    // const posts = await latestPosts(relay, 8)

    // test push song
    //const resp = await uploadSong({
        //name: 'test',
        //audio: '/home/stef/test_file',
        //image: '/home/stef/test_file',
        //description: 'this is a test file upload'
    //});
    //console.log(resp);

    // const special_post = await getEvent(relay, '358af654de2c88ce6cc78d24be5e6565cd1f85e6ee51dee58023b9782dd2cc7c')
    // console.log('special_post', special_post)

    // const { sk, pk } = genKeys();
    // let newPost = postEvent("another (not) ipfs link", pk, sk);
    //publishEvent(relay, newPost)

    return (
        <main className="flex ">
            <CollectionsPanel />
            <Recommendations />
            <ContentPanel />
            <MusicPlayer />
        </main>
    );
}
