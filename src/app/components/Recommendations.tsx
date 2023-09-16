import { getLatestPosts, getRecommendedPosts } from "@/lib/recommendations";
import Masonry from "./Masonry";

export default async function Recommendations() {
    const latestPosts = await getLatestPosts();
    const recommendedPosts = await getRecommendedPosts();

    return (
        <div className="relative flex-1">
            <div className="absolute left-0 top-0 -z-10 h-full w-full border-8 border-b-0 border-red"></div>
            <div className="mx-5 flex h-full translate-y-[20px] gap-6 rounded-t-lg p-6 pt-8 shadow-[0_0_0_8px_#028A9B,_0_0_0_14px_#F8A147,_0_0_0_20px_#DE5A5A]">
                <div>
                    <h2 className="mb-4 text-2xl">What you like.</h2>
                    <Masonry posts={recommendedPosts} />
                </div>
                <div className="bg-black my-4 h-full w-0.5"></div>
                <div>
                    <h2 className="mb-4 text-2xl">Fresh content.</h2>
                    <Masonry posts={latestPosts} />
                </div>
            </div>
        </div>
    );
}
