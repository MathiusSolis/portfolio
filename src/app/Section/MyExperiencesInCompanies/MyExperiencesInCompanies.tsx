import { MainBg } from "@/app/Main/MainBg";
import { SectionTitle } from "../SectionTitle/SectionTitle";
import { Card } from "./Card";
import mbLogo from "../../../assets/logos/mb.jpg";
import gsServiciosLogo from "../../../assets/logos/gs-servicios.svg";
import { ToolIcons } from "./ToolIcons";

export const MyExperiencesInCompanies = () => {
    return (
        <section className="min-h-screen flex flex-col">
            <SectionTitle title="Mis experiencias en empresas" />
            <div className="flex-1 flex justify-center items-center flex-wrap gap-10 relative mt-16 py-10 px-5">
                <MainBg />
                <ToolIcons />
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
                    date="Sep/Dic 2024 - Ene/Mar 2025 · 7 meses"
                    descrption="Desarrollando software para clientes asociados"
                    tasks={
                        <>
                            <li className="list-disc ml-4">Desarrolando frontend</li>
                            <li className="list-disc ml-4">Desarrolando backend (APIs, servicios de correo, etc.)</li>
                            <li className="list-disc ml-4">
                                Manejo de infraestructura interna del software utilizando Docker, Docker Compose para la contenerización y Nginx (principalmente para balanceo de carga).
                            </li>
                        </>
                    }
                />
            </div>
        </section>
    );
};