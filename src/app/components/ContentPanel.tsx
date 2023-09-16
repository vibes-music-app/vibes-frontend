import { getContent } from "@/lib/content";
import Image from "next/image";

export default function ContentPanel() {
    const content = getContent();

    return (
        <div>
            {content.map((content, index) => {
                let backgroundColour = "";

                if (index % 3 === 0) {
                    backgroundColour = "bg-red";
                } else if (index % 3 === 1) {
                    backgroundColour = "bg-yellow";
                } else {
                    backgroundColour = "bg-blue";
                }

                return (
                    <div>
                        <div
                            className={`title text-white px-3 text-2xl py-2 mb-2 ${backgroundColour}`}
                        >
                            {content.title}
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
