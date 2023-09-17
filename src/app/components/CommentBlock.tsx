import Image from "next/image";

interface commentDetails {
    name: string;
    profilePic: string;
    comment: string;
    timestamp: string;
    replies?: commentDetails[];
}

export default function CommentBlock({
    commentDetails,
}: {
    commentDetails: commentDetails;
}) {
    return (
        <>
            <div className="font-secondary flex gap-3 px-3">
                <div className="relative aspect-square h-8">
                    <Image
                        src={commentDetails.profilePic}
                        alt="profile photo"
                        fill
                    />
                </div>
                <div className="leading-5">
                    <span className="font-bold">{commentDetails.name}</span>{" "}
                    <span>{commentDetails.comment}</span>
                </div>
            </div>
            {commentDetails.replies?.map((reply, index) => (
                <>
                    <div className="font-secondary relative ml-12 flex gap-3 px-3">
                        <div className="relative aspect-square h-8">
                            <Image
                                src={reply.profilePic}
                                alt="profile photo"
                                fill
                            />
                        </div>
                        <div className="leading-5">
                            <span className="font-bold">{reply.name}</span>{" "}
                            <span>{reply.comment}</span>
                        </div>
                        <div
                            className={`absolute -left-6 w-8 rounded border-b-4 border-l-4 border-black ${
                                index === 0
                                    ? "-top-8 h-12"
                                    : "-top-20 h-[calc(100%+40px)]"
                            }`}
                        ></div>
                    </div>
                </>
            ))}
        </>
    );
}
