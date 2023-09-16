import { getContent } from "@/lib/content";
import Image from "next/image";
import { text } from "stream/consumers";

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
                    <div>
                        <div
                            className={`title text-white mb-2 px-3 py-2 text-2xl shadow-[3px_12px_30px_-19px_rgba(0,0,0,0.72)] ${backgroundColour} ${backgroundTranslation}`}
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
                                    <div>{data.description}</div>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}
