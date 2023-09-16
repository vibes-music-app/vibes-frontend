import { getAllCollectionNames } from "@/lib/collections";
import Image from "next/image";
import Link from "next/link";

export default async function CollectionsPanel() {
    const collectionNames = await getAllCollectionNames();

    return (
        <div>
            <div className="bg-black flex gap-3 px-3 py-1 ">
                <h2 className="text-white  text-2xl font-bold">Collections </h2>
                <div className="flex items-center justify-center">
                    <Image
                        src="/collections_icon.png"
                        width={20}
                        height={20}
                        alt="collections icon"
                    />
                </div>
            </div>
            {collectionNames.map((collectionName) => {
                return (
                    <div className="border-b px-3 py-1">
                        <Link href={`/collections/${collectionName.name}`}>
                            {collectionName.name}
                        </Link>
                    </div>
                );
            })}
            <div className="px-3 py-1">
                {" "}
                <div>New collection</div>
                <div><Image src="" width="25" height="25"/></div>
            </div>
        </div>
    );
}
