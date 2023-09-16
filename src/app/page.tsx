import CollectionsPanel from "./components/CollectionsPanel";
import ContentPanel from "./components/ContentPanel";

import {
    getPosts,
    postEvent,
    initRelay,
    publishEvent,
    subscribe,
    subscribeToAuthor,
    genKeys,
} from "../lib/nostr";
import Recommendations from "./components/Recommendations";
export default async function Home() {
    const relay = await initRelay("ws://10.33.141.120/relay/");
    console.log("We have these posts already!");

    // -- This method returns all posts matching the filter in a list --
    //const posts = await relay.list([{ kinds: [0,1] }])
    const posts = await getPosts(relay);

    posts.forEach(post => {
        console.log(post)
    })

    const { sk, pk } = genKeys()
    let newPost = postEvent("another (not) ipfs link", pk, sk)
    //publishEvent(relay, newPost)

    return (
        <main className="flex ">
            <CollectionsPanel />
            <Recommendations />
            <ContentPanel />
        </main>
    );
}
