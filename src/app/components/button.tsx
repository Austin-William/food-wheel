interface ButtonProps {
    text: string;
    classname?: string;
    type: "button" | "submit" | "reset";
    onClick?: (e: any) => void;
}

export default function Button(props: ButtonProps) {
    return (
        <button
            type={props.type}
            className={props.classname || "p-2 text-xl bg-red-800 text-white rounded-sm"}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    );
}