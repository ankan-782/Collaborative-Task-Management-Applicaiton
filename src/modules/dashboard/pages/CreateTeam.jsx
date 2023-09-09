import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../../../components/common/SubmitButton";
import { storage } from "../../../storage";

export default function CreateTeam() {
    const navigate = useNavigate();
    const [teamDetails, setTeamDetails] = useState({
        teamName: '',
        teamMembers: ''
    });

    const handleCreateTeam = (e) => {
        e.preventDefault();
        const prevTasks = storage.getItem("teams");
        if (prevTasks?.length) {
            const saveTask = storage.setItem("teams", [...prevTasks, { id: new Date().getTime(), ...teamDetails }]);
            if (saveTask.status === 201) {
                navigate(`../`);
            }
        }
        else {
            const saveTask = storage.setItem("teams", [{ id: new Date().getTime(), ...teamDetails }]);
            if (saveTask.status === 201) {
                navigate(`../`);
            }
        }
    };


    const handleLoadTeamDetails = (e) => {
        const currentData = { ...teamDetails };
        currentData[`${e.target.id}`] = e.target.value;
        setTeamDetails(currentData);
    };


    return (
        <section
            aria-label="Dashboard create team page"
        >
            <h2 className="mt-10 text-3xl font-extrabold leading-none tracking-tight text-gray-900">
                Create Team
            </h2>

            <div className="flex">
                <div className="flex-none mt-10 mobile-sm:w-full mobile-sm:max-w-xl">
                    <form className="space-y-6"
                        onSubmit={handleCreateTeam}
                    >
                        <div>
                            <label htmlFor="teamName" className="block text-sm font-medium leading-6 text-gray-900">
                                Team name
                            </label>
                            <div className="mt-2">
                                <input
                                    id="teamName"
                                    name="teamName"
                                    type="text"
                                    // value={email}
                                    onChange={handleLoadTeamDetails}
                                    required
                                    className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-blue sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="teamMembers" className="block text-sm font-medium leading-6 text-gray-900">
                                Add team members
                            </label>
                            <div className="mt-2">
                                <textarea
                                    id="teamMembers"
                                    name="teamMembers"
                                    rows={3}
                                    onChange={handleLoadTeamDetails}
                                    className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-blue sm:text-sm sm:leading-6"
                                />
                            </div>
                            <div className="flex flex-wrap mt-3 mb-2 gap-2">
                                {teamDetails?.teamMembers.split(",").map((member, i) => <div key={i} className="w-auto bg-gray-200 px-3 py-0.5 rounded-full">{member}</div>)}
                            </div>
                            <p className="mt-3 text-sm leading-6 text-gray-600">Write email addresses of team members separated by comma (,)</p>
                        </div>

                        <SubmitButton
                            type="submit"
                            extraClasses="px-2 py-2 font-semibold"
                        >
                            Create
                        </SubmitButton>
                    </form>
                </div>

                <div className="flex-none mx-10 border-l border-gray-300 h-[500px]"></div>

                <div className="flex-auto min-w-xl w-96 space-y-10">
                    <div className="space-y-6">
                        <h3 className="font-semibold font-lg">How it works ?</h3>
                        <div>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/fYq5PXgSsbE?si=1iazjsuGtThebLTV" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold font-lg">Related things</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}
