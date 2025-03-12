import { FiraCode } from "@/assets/fonts/FiraCode";
import Image from "next/image";

export const LanguageTag = (props: { src?: string, className: string, text: string, w?: string }) => {
    return (
        <div className={`rounded-full flex justify-center items-center gap-2 text-2xl px-5 py-2 text-white ${FiraCode.className} ${props.className}`}>
            <span className="text-4xl">#</span>
            {props.src && <Image className={`${props.w || 'w-10'}`} src={props.src} alt={props.text} />}
            {props.text}
        </div>
    );
};