import { Link } from "react-router-dom";
export default function LinkButton({ children, extraClasses, ...attributes }) {
    return (
        <Link
            {...attributes}
            className={`w-full rounded-md text-sm leading-6 text-gray-400 shadow-sm hover:bg-gray-300/10 hover:text-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-300 ${extraClasses}`}
        >
            {children}
        </Link>
    );
}
