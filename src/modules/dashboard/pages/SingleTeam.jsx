import { useParams } from "react-router-dom";
import CreateTaskModal from "../components/CreateTaskModal";

export default function SingleTeam() {
    const { teamId } = useParams();
    console.log(teamId);
    return (
        <section
            aria-label="Dashboard home page"
        >
            <h2 className="mt-10 text-3xl font-extrabold leading-none tracking-tight text-gray-900">
                Team Gym-Nation
            </h2>
            <div className="mt-12 w-full">
                <CreateTaskModal />
            </div>
        </section>
    );
}
