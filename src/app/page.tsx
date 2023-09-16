import CollectionsPanel from "./components/CollectionsPanel";
import ContentPanel from "./components/ContentPanel";

//import 'websocket-polyfill'
import { initRelay, publishEvent, subscribe, subscribeToAuthor, genKeys } from '../lib/nostr'
export default async function Home() {

    const relay = await initRelay('ws://10.33.141.120/relay/')
    console.log("We have these posts already!")

    // -- This method returns all posts matching the filter in a list --
    //const posts = await relay.list([{ kinds: [0,1] }])
    //posts.forEach(post => {
    //    console.log(post)
    //})

    // -- This method calls a function on each event returned --
    subscribe(relay)

    const { sk, pk } = genKeys()
    //publishEvent(relay, "Another event", pk, sk)

    return (
        <main className="flex ">
            <CollectionsPanel />

            <ContentPanel />
        </main>
    );
}
