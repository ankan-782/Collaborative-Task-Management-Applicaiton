import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LinkButton from "../../../components/common/LinkButton";
import SubmitButton from "../../../components/common/SubmitButton";
import DashboardLogo from "../../../components/common/logo/DashboardLogo";
import { storage } from "../../../storage";
import useAuthValues from "../../authentication/hooks/useAuthValues";

export default function DashboardSidebar() {
    const { logout } = useAuthValues();
    const [teams, setTeams] = useState([]);
    const location = useLocation();

    useEffect(() => {
        const teams = storage.getItem("teams");
        setTeams(teams);
    }, [location.pathname]);



    return (
        <aside
            aria-label="Sidebar"
            className="fixed w-60 h-full p-4 bg-gray-900 flex flex-col justify-between"
        >
            <div className="mb-10">
                {/* logo */}
                <DashboardLogo extraClasses="w-auto h-20" />
            </div>

            <div className="mb-auto">
                <div className="space-y-5 mb-10">
                    <LinkButton
                        to="/dashboard"
                        type="button"
                        extraClasses="px-2 py-2 font-semibold"
                    >
                        <div className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                            </svg>
                            <span>Dashboard</span>
                        </div>
                    </LinkButton>
                    <LinkButton
                        to="/dashboard/createTeam"
                        type="button"
                        extraClasses="px-2 py-2 font-semibold"
                    >
                        <div className="flex items-center gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                            </svg>
                            <span>Create Team</span>
                        </div>
                    </LinkButton>
                </div>

                <div>
                    <p className="pl-2 mb-4 font-semibold text-gray-400 text-sm border-b border-gray-700 pb-4">Your Teams</p>
                    <div className="flex flex-col justify-between gap-2">
                        {teams?.map((team) => <LinkButton
                            key={team.id}
                            to={`/dashboard/teams/${team.id}`}
                            type="button"
                            extraClasses="px-2 py-2 font-semibold"
                        >
                            {team.teamName}
                        </LinkButton>)}
                        {/* <LinkButton
                            to="/dashboard/teams/2"
                            type="button"
                            extraClasses="px-2 py-2 font-semibold"
                        >
                            Holiday Planner
                        </LinkButton>
                        <LinkButton
                            to="/dashboard/teams/3"
                            type="button"
                            extraClasses="px-2 py-2 font-semibold"
                        >
                            Camsta
                        </LinkButton> */}
                    </div>
                </div>
            </div>

            <div>
                <SubmitButton
                    type="button"
                    onClick={logout}
                    extraClasses="px-2 py-2 font-semibold"
                >
                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                        </svg>
                        <span>Logout</span>
                    </div>
                </SubmitButton>
            </div>
        </aside>
    );
}
