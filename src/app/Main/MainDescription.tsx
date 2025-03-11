import { FiraCode } from "@/assets/fonts/FiraCode";

export const MainDescription = () => {
    return (
        <div className='max-[400px]:text-center bg-[#00000034] rounded-sm max-w-[700px] px-5 mr-3 py-9 shadow-[0.7rem_0.7rem_0_0.1rem_rgba(0,0,0,0.5)]'>
            <p className={`${FiraCode.className} text-white text-xl`}>
                Licenciado en Analista Programador, especializado en desarrollo de software a medida, apasionado, autodidacta y comprometido con la evolución del desarrollo tecnológico
            </p>
        </div>
    );
};