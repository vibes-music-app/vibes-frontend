import { getContent } from "@/lib/content";
import Image from "next/image";

export default function ContentPanel() {
    const content = getContent();

    return (
        <div className="pb-12">
            {content.map((content, index) => {
                let backgroundColour = "";
                let backgroundTranslation = "";
                let textTranslation = "";

                if (index % 3 === 0) {
                    backgroundColour = "bg-red";
                } else if (index % 3 === 1) {
                    backgroundColour = "bg-yellow";
                    backgroundTranslation = "-translate-x-[6px]";
                    textTranslation = "translate-x-[6px]";
                } else {
                    backgroundColour = "bg-blue";
                    backgroundTranslation = "-translate-x-[12px]";
                    textTranslation = "translate-x-[12px]";
                }

                return (
                    <div className="min-w-[275px]">
                        <div
                            className={`title mb-2 mr-8 rounded-r-full px-3 py-2 text-2xl font-bold text-white  ${backgroundColour} ${backgroundTranslation}`}
                        >
                            <div className={textTranslation}>
                                {content.title}
                            </div>
                        </div>
                        {content.data.map((data) => {
                            return (
                                <div className="px-3 py-2">
                                    <div className="">
                                        <Image
                                            src={data.imgSrc}
                                            alt="random image"
                                            height="200"
                                            width="250"
                                            className="aspect-video"
                                        />
                                    </div>
                                    <div className="font-bold">{data.name}</div>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}
