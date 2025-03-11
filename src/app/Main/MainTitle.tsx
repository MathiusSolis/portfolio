export const MainTitle = () => {
    return (
        <div className='pt-7 pb-16 border-l-8 border-l-[#98353c] max-[600px]:border-l-0 max-[600px]:py-0 flex flex-col gap-y-14'>
            <div>
                <h1 className='px-5 text-white text-center text-6xl max-[1666px]:text-5xl max-[1270px]:text-4xl relative max-[600px]:p-0'>
                    ¡Hola!, ¡Soy Mathius!
                    <div className='absolute bottom-[-40%] left-0 block w-full h-2 border-b-8 border-b-[#98353c] border-dashed'></div>
                    <div className='max-[700px]:hidden absolute bottom-[-65%] right-[-3%] block w-10 h-10 rotate-45 bg-[#98353c]'></div>
                </h1>
            </div>
            <div>
                <h2 className='px-5 text-white text-center text-3xl max-[1666px]:text-2xl max-[1375px]:text-xl relative inline-block max-[700px]:block max-[600px]:p-0'>
                    Y, soy <span className='text-[#98353c]'>desarrollador de software</span>
                    <div className='absolute bottom-[-55%] left-0 block w-full h-2 border-b-8 border-b-[#98353c] border-dashed'></div>
                    <div className='max-[700px]:hidden absolute bottom-[-100%] right-[-9%] block w-10 h-10 rotate-45 bg-[#98353c]'></div>
                </h2>
            </div>
        </div>
    );
};