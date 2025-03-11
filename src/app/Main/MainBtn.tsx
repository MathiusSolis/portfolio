import Link from "next/link";

export const MainBtn = () => {
    return (
        <div>
            <Link
                href="#"
                className='text-center shadow-[0.7rem_0.7rem_0_0.1rem_rgba(0,0,0,0.3)] hover:shadow-[0_0_0_0_none] inline-block bg-[#98353cd8] transition-shadow text-white rounded-sm p-3 pl-7 pr-7 text-xl'>
                ¡Ve mi experiencia!
            </Link>
        </div>
    );
};