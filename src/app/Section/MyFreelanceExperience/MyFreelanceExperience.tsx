import Image from "next/image";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { ProjectArticle } from "./ArticleProyect";
import { MainBg } from "@/app/Main/MainBg";
import bvLogo from "../../../assets/logos/bv-logo.png";
import travelClubLogo from "../../../assets/logos/travel-club.svg";
import toolsIcon from "../../../assets/icons/tools-icon.svg";

export const MyFreelanceExperience = () => {
    return (
        <section className="flex flex-col gap-14 min-h-screen">
            <SectionTitle title="Mis experiencias freelance" />
            <div className="flex-1 flex flex-col gap-10 justify-center items-center flex-wrap relative mt-40">
                <MainBg />
                <div className="z-10 rounded-full bg-[#2A2A2F] -mt-40">
                    <Image className="w-96 mx-auto" src={toolsIcon} alt="" />
                </div>
                <div className="z-10 pb-10 flex flex-wrap justify-center items-center gap-16">
                    <ProjectArticle
                        img={bvLogo}
                        title="Página oficial de Buen Vivir Tecnología"
                        description="Página WEB oficial de la empresa Buen Vivir, dedicada a la consultoría y venta de paneles solares"
                        site="https://www.buenvivirtec.com/"
                    />
                    <ProjectArticle
                        img={travelClubLogo}
                        title="Página miembro In Group International/Incruises"
                        description="Página publicitaria para el miembro Geraldine Solis de In Group International/Incruises"
                        site="https://www.geraldinesolis.com/"
                    />
                </div>
            </div>
        </section>
    );
};