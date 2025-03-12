import { FiraCode } from "@/assets/fonts/FiraCode";
import { Divisor } from "./Divisor";

export const SectionTitle = (props: { title: string }) => {
    return (
        <div className="z-50 px-5">
            <Divisor className="max-w-[600px] mt-16" />
            <h2 className={`text-white text-center py-10 text-4xl ${FiraCode.className}`}>{props.title}</h2>
            <Divisor className="max-w-[800px]" />
        </div>
    );
};