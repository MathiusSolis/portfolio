interface InputProps {
    placeholder: string;
    type?: 'textarea'
}

export const Input = (props: InputProps) => {
    return (
        props.type === 'textarea'
            ? <textarea className={`outline-0 w-full text-xl min-h-52 text-white py-3 border-b-2 border-b-[#bd424a]`} placeholder={props.placeholder}></textarea>
            : <label><input type="text" className={`outline-0 w-full text-white text-xl border-b-2 border-b-[#bd424a] py-2`} placeholder={props.placeholder} /></label>
    );
};