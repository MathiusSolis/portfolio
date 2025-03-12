interface PlanetIconProps {
    className: string;
}

export const PlanetIcon = (props: PlanetIconProps) => {
    return (
        <div className={`mini-moon-anim w-10 h-10 rounded-full absolute z-50 ${props.className}`}></div>
    );
};
