import { FiraCode } from "@/assets/fonts/FiraCode";
import { HeaderNavItem } from "./HeaderNavItem";
import { MouseEventHandler } from "react";

export const HeaderNav = (props: { className?: string, col?: boolean, onClick?: MouseEventHandler<HTMLAnchorElement> }) => {
    return (
        <nav className={`${props.className || ''} z-10`}>
            <ul className={`h-full flex justify-center items-center ${props.col ? 'flex-col' : ''} gap-x-24 gap-y-8 flex-wrap ${FiraCode.className} text-2xl max-[1200px]:text-xl p-8 pb-0`}>
                <HeaderNavItem onClick={props.onClick} text="Mis conocimientos" href="#my-knowledge" />
                <HeaderNavItem onClick={props.onClick} text="Mis experiencias freelance" href="#my-freelance-experience" />
                <HeaderNavItem onClick={props.onClick} text="Mi experiencias en empresas" href="#my-experience-in-companies" />
                <HeaderNavItem onClick={props.onClick} text="Mi Currículum" href="/mathius-solis-cv.pdf" isDownload={true} />
                <HeaderNavItem onClick={props.onClick} text="Contáctame" href="#contactme" />
                {/* <HeaderNavItem onClick={props.onClick} text="Soporte técnico" href="#tech-support" /> */}
            </ul>
        </nav>
    );
};