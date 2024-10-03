interface InputProps {
    type: string;
    placeholder: string;
    id?: string;
    value?: string;
    onChange?: (e: any) => void;
    onKeyPress?: (e: any) => void;
}

export default function Input(props: InputProps) {
    return (
        <input
            className="p-2 border 
                    border-gray-300
                    bg-black
                    rounded-sm
                    mr-2
                    w-full
                    h-10
                    focus:outline-none
                    focus:ring-2
                    focus:ring-white
                    focus:border-transparent
                    transition
                    duration-200
                    ease-in-out
                    focus:shadow-md
                    focus:ring-opacity"
            type={props.type}
            id={props.id}
            value={props.value}
            placeholder={props.placeholder}
            onChange={props.onChange}
            onKeyPress={props.onKeyPress}
        />
    );
}