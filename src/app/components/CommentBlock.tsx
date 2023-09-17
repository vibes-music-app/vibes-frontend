import Image from "next/image";

export default function CommentBlock({
    profile,
    comment,
}: {
    profile: Profile;
    comment: string;
}) {
    return (
        <div className="flex">
            <div>
                <Image
                    src={profile.profilePicSrc}
                    alt="profile photo"
                    height={50}
                    width={50}
                />
            </div>
            <div className="">
                <span className="font-bold">{profile.name}</span>
                <span>{comment}</span>
            </div>
        </div>
    );
}
