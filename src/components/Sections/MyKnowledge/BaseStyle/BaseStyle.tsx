import { ReactNode } from "react";
import './BaseStyle.css';

export const BaseStyle = (props: { children: ReactNode }) => {
    return <>
        {props.children}
    </>
};