import Image from "next/image";
import { FiraCode } from "@/assets/fonts/FiraCode";
import { Input } from "./Input";
import githubIcon from "../../../../assets/icons/github.svg";
import linkedinIcon from "../../../../assets/icons/linkedin.svg";
import emailIcon from "../../../../assets/icons/email.svg";
import cvIcon from "../../../../assets/icons/cv.svg";

export const ContactForm = () => {
    return (
        <div className={`basis-[600px] z-50 p-10 rounded-md bg-[#00000079] shadow-[1rem_1rem_0_0.1rem_rgba(0,0,0,1)] relative ${FiraCode.className} flex flex-col gap-10 py-20 my-36`}>
            {/* <div className="flex gap-5">
                <h2 className={`text-2xl text-[#bd424a]`}>ENVIAME UN EMAIL</h2>
                <Image className="w-8" src={emailIcon} alt="Email" />
            </div>
            <Input placeholder="Nombre/Entidad" />
            <Input placeholder="Tu email (opcional)" />
            <Input type="textarea" placeholder="Mensaje" />
            <input type="submit" value={'ENVIAR'} className={`bg-[#98353c] text-white text-xl py-2 cursor-pointer`} />
            <hr className="m-0 border-4 border-t-[#bd424a] border-dashed" /> */}
            <div>
                <div className="flex justify-start items-center gap-3">
                    <Image src={linkedinIcon} alt="GitHub" className="w-16" />
                    <p className="text-white text-2xl">Ve mi <a className={`text-white border-b-2 border-b-[#bd424a] hover:text-[#bd424a] transition-colors`} href="https://github.com/MathiusSolis" target="_blank">LinkedIn</a></p>
                </div>
                <br />
                <div className="flex justify-start items-center gap-3">
                    <Image src={githubIcon} alt="GitHub" className="w-16" />
                    <p className="text-white text-2xl">Ve mi <a className={`text-white border-b-2 border-b-[#bd424a] hover:text-[#bd424a] transition-colors`} href="https://github.com/MathiusSolis" target="_blank">GitHub</a></p>
                </div>
                <br />
                <div className="flex justify-start items-center gap-3">
                    <Image src={emailIcon} alt="GitHub" className="w-16" />
                    <p className="text-white text-xl">Obtén mi dirección de <a className={`text-white border-b-2 border-b-[#bd424a] hover:text-[#bd424a] transition-colors`} href={'/email.png'} download={true}>Email</a></p>
                </div>
                <br />
                <div className="flex justify-start items-center gap-3">
                    <Image src={cvIcon} alt="GitHub" className="w-16" />
                    <p className="text-white text-xl">Descarga mi <a className={`text-white border-b-2 border-b-[#bd424a] hover:text-[#bd424a] transition-colors`} href={'/mathius-solis-cv.pdf'} download={true}>Currículum</a></p>
                </div>
            </div>
        </div>
    );
};
