import Image from "next/image";
import { MainBg } from "@/app/Main/MainBg";
import { SectionTitle } from "../SectionTitle/SectionTitle";

import moon from "../../../assets/icons/moon.svg";
import searchIcon from "../../../assets/icons/search.svg";

import "./ContactMe.css";
import { ContactForm } from "./ContactForm/ContactForm";
import { PlanetIcon } from "./PlanetIcon/PlanetIcon";

export const ContactMe = () => {
    return (
        <section id="contactme" className="flex flex-col gap-5 min-h-screen">
            <SectionTitle title="Contáctame" />
            <div className="flex-1 relative flex flex-wrap justify-center items-center py-10 mt-10 gap-16 pl-5 pr-10">
                <MainBg />
                <div className="my-10 relative max-[1315px]:absolute max-[1315px]:top-0 max-[1315px]:left-0 max-[1315px]:bottom-0 max-[1315px]:right-0 max-[1315px]:m-auto max-[1315px]:w-full max-[1315px]:h-[68%]" >
                    <Image className="basis-[500px] max-[1315px]:mx-auto moon-anim z-10" src={moon} alt="Luna" />
                    <PlanetIcon className="delay1 bg-[#98353c] left-[-5%] max-[1315px]:left-[10%] bottom-5 w-10 h-10" />
                    <PlanetIcon className="bg-[#2D577A] left-[70%] max-[1315px]:left-[78%] bottom-[-15%] w-16 h-16" />
                    <PlanetIcon className="delay05 bg-[#512B67] top-[-20%] left-[-10%] max-[1315px]:left-[5%] w-24 h-24" />
                    <PlanetIcon className="delay1 bg-[#978526] top-[23%] left-[65%] max-[1315px]:left-[80%] w-16 h-16" />
                    <Image className="section__search-icon absolute top-[45%] left-[20%] max-[1315px]:left-[45%] z-10" src={searchIcon} alt="Search" />
                </div>
                <ContactForm />
            </div>
        </section>
    );
};