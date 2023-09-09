import useAuthValues from "../../authentication/hooks/useAuthValues";

export default function DashboardNavbar() {
    const { user } = useAuthValues();
    return (
        <header
            aria-label="header"
            className="bg-white fixed ml-60 top-0 w-[calc(100%_-_240px)] z-10 | flex justify-between items-center | px-6 py-3 | border-b border-gray-300"
        >
            <div className="flex items-center justify-between gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-secondary-blue">
                    <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clipRule="evenodd" />
                </svg>
                <input
                    type="search"
                    placeholder="Search..."
                    className="border-none outline-none"
                />
            </div>

            <div className="flex items-center justify-between divide-x">
                <div className="shrink-0 px-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 stroke-secondary-blue">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                    </svg>
                </div>

                <div className="flex justify-center items-center gap-4 px-4">
                    <div>
                        <img src={user?.selectedFile} alt="" className="w-10 h-10 rounded-full" />
                    </div>
                    <div className="flex justify-between items-center gap-2">
                        <p className="font-semibold">{user?.username}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 fill-secondary-blue">
                            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    );
}
