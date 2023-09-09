export default function SubmitButton({ children, extraClasses, ...attributes }) {
    return (
        <button
            {...attributes}
            className={`w-full rounded-md text-sm leading-6 bg-secondary-blue text-white shadow-sm hover:bg-secondary-blue/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-blue ${extraClasses}`}
        >
            {children}
        </button>
    );
}
