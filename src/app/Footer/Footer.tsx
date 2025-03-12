'use client'

import { FiraCode } from "@/assets/fonts/FiraCode";
import { MainBg } from "../Main/MainBg"

export const Footer = () => {
    return (
        <footer className="relative">
            <MainBg />
            <div className="absolute top-0 left-0 h-full w-[40%] bg-[rgba(73,25,29,0.35)]"></div>
            <div className="absolute top-0 left-0 h-full w-[30%] bg-[rgba(109,39,44,0.35)]"></div>
            <div className="absolute top-0 left-0 h-full w-[20%] bg-[rgba(152,53,60,0.35)]"></div>
            <p className={`${FiraCode.className} text-white z-50 relative text-center text-xl py-7`}>Mathius Solis - {new Date().getFullYear()}</p>
            <div className="absolute top-0 right-0 h-full w-[40%] bg-[rgba(73,25,29,0.35)]"></div>
            <div className="absolute top-0 right-0 h-full w-[30%] bg-[rgba(109,39,44,0.35)]"></div>
            <div className="absolute top-0 right-0 h-full w-[20%] bg-[rgba(152,53,60,0.35)]"></div>
        </footer>
    );
};