import Image from 'next/image';
import bannerIcon from '../../assets/icons/banner-icon.svg';
import { FiraCode } from '@/assets/fonts/FiraCode';
import { MainTitle } from './MainTitle';
import { MainDescription } from './MainDescription';
import { MainBtn } from './MainBtn';

export const MainBanner = () => {
    return (
        <main className={`flex-1 flex justify-center flex-wrap items-center gap-x-20 ${FiraCode.className} relative`}>
            <div
                className='basis-[600px] flex-1 flex flex-col justify-center items-center gap-y-10 -translate-y-14 max-[1192px]:translate-y-0'
            >
                <div className='px-5 pt-5 flex flex-col gap-y-16 justify-center items-start max-[600px]:items-center'>
                    <MainTitle />
                    <MainDescription />
                    <MainBtn />
                </div>
            </div>
            <Image
                className='basis-80 flex-1 max-w-2xl max-[1666px]:max-w-xl max-[1375px]:max-w-lg max-[900px]:max-w-xs z-10'
                src={bannerIcon}
                alt='Banner Logo'
            />
        </main>
    );
};