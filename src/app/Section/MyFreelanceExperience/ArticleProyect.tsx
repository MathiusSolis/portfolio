import { FiraCode } from "@/assets/fonts/FiraCode";
import Image, { StaticImageData } from "next/image";
import { ReactNode } from "react";

interface ProjectArticleProps {
    img: StaticImageData;
    title: string;
    description: string;
    site: string;
    repository?: string;
    technologies?: ReactNode;
}

export const ProjectArticle = (props: ProjectArticleProps) => {
    return (
        <article className={`ml-5 mr-10 ${FiraCode.className} min-h-[520px] text-white bg-[#1D1D21] shadow-[1rem_1rem_0_0.2rem_black] max-w-96 rounded-lg pb-5`}>
            <header>
                <div className="bg-[#23232A] py-5 rounded-lg min-h-[233px] flex justify-center items-center">
                    <Image className="w-36 mx-auto" src={props.img} alt="" />
                </div>
                <h2 className="pt-3 px-3 text-center text-xl">{props.title}</h2>
            </header>
            <hr className="w-[60%] mx-auto my-5" />
            <div className="px-5 text-center">
                <p>{props.description}</p>
            </div>
            <hr className="w-[60%] mx-auto my-5" />
            <div className="flex justify-center items-center">
                <div className="flex justify-center items-center gap-2 group">
                    <p className="group-hover:text-[#98353c]">
                        -{'>'}
                    </p>
                    <a className="text-center underline group-hover:text-[#98353c] transition-colors" href={props.site} target="_blank">Ir al sitio</a>
                </div>
            </div>
        </article>
    );
};