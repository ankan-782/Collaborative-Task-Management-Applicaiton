import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { storage } from "../../../storage";

export default function DashboardHome() {
    const [teams, setTeams] = useState([]);

    useEffect(() => {
        const allteams = storage.getItem("teams");
        setTeams(allteams);
    }, []);



    return (
        <section
            aria-label="Dashboard home page"
        >
            <h2 className="mt-10 text-3xl font-extrabold leading-none tracking-tight text-gray-900">
                Dashboard
            </h2>
            <div className="mt-10 grid grid-cols-4 gap-4">
                {teams.map((team, i) => (
                    <Link to={`teams/${team.id}`} title="Click To View" key={i} className="w-60 h-40 hover:bg-opacity-80 font-semibold flex justify-center items-center text-white text-2xl shadow rounded-md bg-violet-400">
                        <span>
                            {team.teamName}
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
