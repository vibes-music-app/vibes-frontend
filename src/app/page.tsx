import CollectionsPanel from "./components/CollectionsPanel";
import ContentPanel from "./components/ContentPanel";

export default async function Home() {
    return (
        <main className="flex ">
            <CollectionsPanel />
            {/*<MainContent />*/}
            <ContentPanel />
        </main>
    );
}
