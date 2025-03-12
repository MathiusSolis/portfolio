export const Divisor = (props: { className?: string }) => {
    return (
        <div className={`w-full h-2 border-b-8 border-b-white border-dashed mx-auto relative ${props.className || ''}`}>
            <div className='max-[600px]:hidden absolute -bottom-6 right-0 block w-10 h-10 rounded-full bg-white'></div>
            <div className='max-[600px]:hidden absolute -bottom-6 left-0 block w-10 h-10 rounded-full bg-white'></div>
        </div>
    );
};