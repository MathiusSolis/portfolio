import Image from "next/image";
import headerBg from "../../assets/imgs/header-bg.svg";

export const MainBg = () => {
    return (
        <div className='absolute top-0 left-0 w-full h-full'>
            <Image src={headerBg} alt='banner-icon' className='w-full h-full object-cover object-center' />
        </div>
    );
};