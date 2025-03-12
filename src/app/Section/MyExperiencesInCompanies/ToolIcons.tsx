import Image from "next/image";
import "./ToolIcons.css";

import searchIcon from "../../../assets/icons/search.svg";
import pencilIcon from "../../../assets/icons/pencil.svg";
import clockIcon from "../../../assets/icons/clock.svg";

export const ToolIcons = () => {
    return (
        <>
            <Image
                className='section__search-icon'
                src={searchIcon}
                alt='Search Icon'
            />
            <Image
                className='section__pencil-icon'
                src={pencilIcon}
                alt='Pencil Icon'
            />
            <Image
                className='section__clock-icon'
                src={clockIcon}
                alt='Clock Icon'
            />
        </>
    );
};