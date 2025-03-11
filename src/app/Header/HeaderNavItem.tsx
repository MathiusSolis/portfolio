import { MouseEventHandler } from "react";

interface HeaderNavItemProps {
    text: string;
    href: string;
    className?: string;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export const HeaderNavItem = (props: HeaderNavItemProps) => {
    return (
        <li className={`text-center flex items-center justify-center gap-5 border-b-4 text-white hover:border-b-[#98353c] hover:text-[#98353c] transition-colors ${props.className || ''}`}>
            <a onClick={props.onClick} href={props.href}>{props.text}</a>
        </li>
    );
};
