import { FiraCode } from "@/assets/fonts/FiraCode";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { ReactNode } from "react";

interface CardProps {
    companyLogo: StaticImport;
    title: string;
    date: string;
    descrption: string;
    tasks?: ReactNode;
}

export const Card = (props: CardProps) => {
    return (
        <div className="flex-1 basis-[700px] relative z-10 flex justify-center items-center max-w-[650px]">
            <article className={`bg-[#0000007c] p-10 ${FiraCode.className} text-white rounded-lg min-h-[600px] flex`}>
                <div className="flex flex-col gap-5 border-l-4 border-l-[#98353c] pl-5 max-[600px]:border-l-0 max-[600px]:pl-0">
                    <div className="flex flex-wrap justify-start max-[600px]:justify-center items-center gap-5">
                        <Image className="w-28 border-l-4" src={props.companyLogo} alt="" />
                        <div>
                            <h2 className="text-white text-xl pb-3 max-[600px]:text-center">{props.title}</h2>
                            <h3 className="text-white text-xl max-[600px]:text-center">{props.date}</h3>
                        </div>
                    </div>
                    <p>
                        {props.descrption}
                    </p>
                    {
                        props.tasks && (
                            <ul>
                                {props.tasks}
                            </ul>
                        )
                    }
                </div>
            </article>
        </div>
    );
};