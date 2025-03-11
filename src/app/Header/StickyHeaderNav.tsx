'use client'

import { useState } from "react";
import { HeaderNav } from "./HeaderNav";

const Line = (props: { className?: string }) => {
    return (
        <div className={`bg-white group-hover:bg-red-400 transition-colors duration-500 h-1 w-full rounded-xl ${props.className || ''}`}></div>
    );
};

export const StickyHeaderNav = () => {
    const [isHidden, show] = useState('hidden');

    const onClick = () => {
        show(isHidden ? '' : 'hidden');
    };

    return (
        <>
            <button onClick={onClick} className="group rounded-full p-5 bg-black  -mt-[80px] sticky top-[90%] left-[5%] min-[700px]:hidden z-[99] flex flex-col justify-center items-center h-20 w-20 gap-2">
                <Line className={`${!isHidden ? 'rotate-45 translate-y-2' : ''}`} />
                <Line className={`${!isHidden ? '-rotate-45 -translate-y-1' : ''}`} />
                {isHidden && <Line />} 
            </button>
            <HeaderNav onClick={onClick} className={`${isHidden} min-[700px]:hidden absolute top-0 left-0 z-[98] bg-[#000000ce] w-full h-full`} col={true}></HeaderNav>
        </>
    )
};