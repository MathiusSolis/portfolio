import { Header } from "../../components/Header/Header";
import { AboutMe } from "../../components/Sections/AboutMe/AboutMe";
import { MyKnowledge } from "../../components/Sections/MyKnowledge/MyKnowledge";
import { Footer } from "../../components/Footer/Footer";
import { MyProyects } from "../../components/Sections/MyProyects/MyProyects";
import { Contact } from "../../components/Contact/Contact";

export const Index = () => {
    return <>
        <Header />
        <AboutMe />
        <MyKnowledge />
        <MyProyects />
        <Contact/>
        <Footer />
    </>
}; 