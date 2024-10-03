interface ListProps {
    items: string[];
    onClick: (e: any) => void;
}

export default function List(props: ListProps) {  
    return (
        <ul className="flex flex-col items-start mt-8 w-full gap-3">
            {props.items.map((item, index) => (
                <li key={index} className="flex flex-row items-center justify-between pl-2 border border-gray-300 rounded-sm w-full lg:w-fit">
                    {item}
                    <button onClick={() => props.onClick(index)} className="ml-2 p-2 border-red-800 hover:bg-red-500 text-white rounded-sm transition-all duration-200">
                        -
                    </button>
                </li>
            ))}
        </ul>
    ) 
}