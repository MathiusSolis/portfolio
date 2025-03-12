import { FiraCode } from "@/assets/fonts/FiraCode";
import { HeaderNavItem } from "./HeaderNavItem";
import { MouseEventHandler } from "react";

export const HeaderNav = (props: { className?: string, col?: boolean, onClick?: MouseEventHandler<HTMLAnchorElement> }) => {
    return (
        <nav className={`${props.className || ''} z-10`}>
            <ul className={`h-full flex justify-center items-center ${props.col ? 'flex-col' : ''} gap-x-24 gap-y-8 flex-wrap ${FiraCode.className} text-2xl max-[1200px]:text-xl p-8 pb-0`}>
                <HeaderNavItem onClick={props.onClick} text="Mi experiencia" href="#myexperience" />
                <HeaderNavItem onClick={props.onClick} text="Mis proyectos" href="#myproyects" />
                <HeaderNavItem onClick={props.onClick} text="Mi Currículum" href="/mathius-solis-cv.pdf" isDownload={true} />
                <HeaderNavItem onClick={props.onClick} text="Contáctame" href="#contactme" />
                <HeaderNavItem onClick={props.onClick} text="Soporte técnico" href="#tech-support" />
            </ul>
        </nav>
    );
};