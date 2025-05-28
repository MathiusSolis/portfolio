import { MainBg } from "@/app/Main/MainBg";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { Card } from "./Card";
import mbLogo from "../../../assets/logos/mb.jpg";
import gsServiciosLogo from "../../../assets/logos/gs-servicios.svg";
import bvLogo from "../../../assets/logos/bv-logo.png";
import { ToolIcons } from "./ToolIcons";
import osadsGroupLogo from "../../../assets/logos/osads-group.svg";

export const MyExperiencesInCompanies = () => {
    return (
        <section id="my-experience-in-companies" className="min-h-screen flex flex-col">
            <SectionTitle title="Mis experiencias en empresas" />
            <div className="flex-1 flex justify-center items-center flex-wrap gap-10 relative mt-16 py-10 px-5">
                <MainBg />
                <ToolIcons />
                <Card
                    companyLogo={bvLogo}
                    title="Buen Vivir Tecnología"
                    date="Jun/Ago 2022 · 3 meses"
                    descrption="Desarrollé paginas WEBs, incluido la administración de:"
                    tasks={
                        <>
                            <li className="list-disc ml-4">Desarrollo y mantención frontend.</li>
                            <li className="list-disc ml-4">Desarrollo y mantención backend.</li>
                            <li className="list-disc ml-4">Despliegue de las paginas.</li>
                        </>
                    }
                />
                <Card
                    companyLogo={osadsGroupLogo}
                    title="Osads Groups"
                    date="Nov 2022/Dic 2023 · 1 año y 2 meses"
                    descrption="Administrando áreas como:"
                    tasks={
                        <>
                            <li className="list-disc ml-4">Desarrollo y mantención frontend.</li>
                            <li className="list-disc ml-4">Desarrollo y mantención backend.</li>
                            <li className="list-disc ml-4">Desplieges (CI/CD).</li>
                            <li className="list-disc ml-4">Gestor de módulos del proyecto.</li>
                            <li className="list-disc ml-4">Encargado de la toma de requerimientos.</li>
                            <li className="list-disc ml-4">Realizar análisis de procesos de negocio.</li>
                            <li className="list-disc ml-4">Proponer mejoras.</li>
                            <li className="list-disc ml-4">Soporte al cliente.</li>
                            <li className="list-disc ml-4">Redactor técnico (documentación).</li>
                            <li className="list-disc ml-4">Responsable de control de calidad.</li>
                        </>
                    }
                />
                <Card
                    companyLogo={mbLogo}
                    title="MásBlue SPA"
                    date="Mar/Ago 2024 · 6 meses"
                    descrption="Desarrollé y di mantención de software para MasBlue y asociados, gestionando áreas como:"
                    tasks={
                        <>
                            <li className="list-disc ml-4">Desarrollo y mantención frontend.</li>
                            <li className="list-disc ml-4">Desarrollo y mantención backend.</li>
                            <li className="list-disc ml-4">Gestor de módulos del proyecto.</li>
                            <li className="list-disc ml-4">Encargado de la toma de requerimientos.</li>
                            <li className="list-disc ml-4">Realizar análisis de procesos de negocio.</li>
                            <li className="list-disc ml-4">Proponer mejoras.</li>
                            <li className="list-disc ml-4">Soporte al cliente.</li>
                            <li className="list-disc ml-4">Redactor técnico (documentación).</li>
                            <li className="list-disc ml-4">Responsable de control de calidad.</li>
                        </>
                    }
                />
                <Card
                    companyLogo={gsServiciosLogo}
                    title="GS Servicios transdisciplinarios"
                    date="Sep/Dic 2024 - Ene/May 2025 · 9 meses"
                    descrption="Desarrollando software para clientes asociados"
                    tasks={
                        <>
                            <li className="list-disc ml-4">Desarrollando frontend.</li>
                            <li className="list-disc ml-4">Desarrollando backend.</li>
                            <li className="list-disc ml-4">Desplieges (CI/CD).</li>
                            <li className="list-disc ml-4">
                                Manejo de infraestructura interna del software utilizando Docker, Docker Compose para la contenerización y comunicación entre servicios/servidores y Nginx (principalmente para balanceo de carga).
                            </li>
                        </>
                    }
                />
            </div>
        </section>
    );
};