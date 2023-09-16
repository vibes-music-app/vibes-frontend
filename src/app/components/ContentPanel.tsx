import { getContent } from "@/lib/content";
import Image from "next/image";

export default function ContentPanel() {
    const content = getContent();

    return (
        <div>
            {content.map((content) => {
                return (
                    <div>
                        <div>{content.title}</div>
                        {content.data.map((data) => {
                            return (
                                <div>
                                    <div>
                                        <Image
                                            src={data.imgSrc}
                                            alt="random image"
                                            height="200"
                                            width="250"
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                );
            })}
        </div>
    );
}
