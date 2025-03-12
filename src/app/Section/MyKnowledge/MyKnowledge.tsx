import { LanguageTag } from "./LanguageTag";
import { SectionTitle } from "../SectionTitle/SectionTitle";

import htmlIcon from "../../../assets/icons/html.svg";
import cssIcon from "../../../assets/icons/css.svg";
import javascriptIcon from "../../../assets/icons/javascript.svg";
import typescriptIcon from "../../../assets/icons/typescript.svg";
import nodeIcon from "../../../assets/icons/node.svg";
import expressIcon from "../../../assets/icons/express.svg";
import nestIcon from "../../../assets/icons/nest.svg";
import nextIcon from "../../../assets/icons/next.svg";
import reactIcon from "../../../assets/icons/react.svg";
import redux from "../../../assets/icons/redux.svg";
import reactNativeIcon from "../../../assets/icons/react-native.svg";
import springIcon from "../../../assets/icons/spring.svg";
import transbankWebpayIcon from "../../../assets/icons/transbank-webpay.svg";
import javaIcon from "../../../assets/icons/java.svg";
import mySqlIcon from "../../../assets/icons/mysql.svg";
import mariaDBIcon from "../../../assets/icons/mariadb.svg";
import nginxIcon from "../../../assets/icons/nginx.svg";
import dockerIcon from "../../../assets/icons/docker.svg";
import gitIcon from "../../../assets/icons/git.svg";
import githubIcon from "../../../assets/icons/github-actions.svg";
import tailwindCssIcon from "../../../assets/icons/tailwindcss.svg";

export const MyKnowledge = () => {
    return (
        <section id="my-knowledge" className="flex flex-col gap-y-5 min-h-screen">
            <SectionTitle title="Mis conocimientos" />
            <div className="flex-1 flex flex-wrap justify-center items-center gap-5">
                <LanguageTag className="bg-[#98353c]" src={htmlIcon} text="HTML" />
                <LanguageTag className="bg-[#98353c]" src={cssIcon} text="CSS" />
                <LanguageTag className="bg-[#98353c]" src={javascriptIcon} text="JavaScript" />
                <LanguageTag className="bg-[#98353c]" src={typescriptIcon} text="TypeScript" />
                <LanguageTag className="bg-[#98353c]" src={nodeIcon} text="Node.js" />
                <LanguageTag className="bg-[#98353c]" src={javaIcon} text="Java" />
            </div>
            <div className="flex-1 flex flex-wrap justify-center items-center gap-5">
                <LanguageTag className="bg-[#2D577A]" src={reactIcon} text="React" />
                <LanguageTag className="bg-[#2D577A]" src={redux} text="Redux" />
                <LanguageTag className="bg-[#2D577A]" text="Zustand" />
                <LanguageTag className="bg-[#2D577A]" w="w-16" src={reactNativeIcon} text="React Native" />
                <LanguageTag className="bg-[#2D577A]" src={tailwindCssIcon} text="Tailwind CSS" />
            </div>
            <div className="flex-1 flex flex-wrap justify-center items-center gap-5">
                <LanguageTag className="bg-[#2D7A6D]" w="w-24" src={expressIcon} text="" />
                <LanguageTag className="bg-[#2D7A6D]" src={nestIcon} text="Nest.js" />
                <LanguageTag className="bg-[#2D7A6D]" src={nextIcon} text="Next.js" />
                <LanguageTag className="bg-[#2D7A6D]" src={springIcon} text="Spring" />
                <LanguageTag className="bg-[#2D7A6D]" src={nginxIcon} text="Nginx" />
                <LanguageTag className="bg-[#2D7A6D]" w="w-28" src={transbankWebpayIcon} text="" />
            </div>
            <div className="flex-1 flex flex-wrap justify-center items-center gap-5">
                <LanguageTag className="bg-[#512B67]" src={gitIcon} text="Git" />
                <LanguageTag className="bg-[#512B67]" src={githubIcon} text="Github Actions" />
                <LanguageTag className="bg-[#512B67]" src={dockerIcon} text="Docker/Compose" />
            </div>
            <div className="flex-1 flex flex-wrap justify-center items-center gap-5">
                <LanguageTag className="bg-[#978526]" src={mySqlIcon} text="MySQL" />
                <LanguageTag className="bg-[#978526]" src={mariaDBIcon} text="MariaDB" />
            </div>
        </section>
    );
};