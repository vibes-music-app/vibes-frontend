import { getLatestPosts, getRecommendedPosts } from "@/lib/recommendations";

export default async function Recommendations() {
    const latestPosts = await getLatestPosts();
    const recommendedPosts = await getRecommendedPosts();

    return (
        <div className="relative flex-1">
            <div className="absolute left-0 top-0 -z-10 h-full w-full border-8 border-b-0 border-red"></div>
            <div className="mx-5 h-full translate-y-[20px] rounded-t-lg shadow-[0_0_0_8px_#028A9B,_0_0_0_14px_#F8A147,_0_0_0_20px_#DE5A5A]"></div>
        </div>
    );
}
