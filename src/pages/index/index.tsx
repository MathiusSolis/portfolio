import "./index.css";

import { Header } from "../../components/Header/Header";
import { AboutMe } from "../../components/Sections/AboutMe/AboutMe";
import { Footer } from "../../components/Footer/Footer";
import { MyProyects } from "../../components/Sections/MyProyects/MyProyects";
import { Contact } from "../../components/Contact/Contact";
import { MyKnowledge } from "../../components/Sections/MyKnowledge/BaseKnowledge/MyKnowledge";
import { TechnicalSupport } from "../../components/Sections/TechnicalSupport/TechnicalSupport";

export const Index = () => {
    return <>
        <Header />
        <TechnicalSupport/>
        <AboutMe />
        <MyKnowledge />
        <MyProyects />
        <Contact/>
        <Footer />
    </>
}; 