import { useState } from "react";
import SubmitButton from "../../../components/common/SubmitButton";
import { storage } from "../../../storage";
import { initialTaskDetails } from "../constants";

export default function CreateTaskForm({ setIsOpen, allTask, setAllTask, selectedTaskDetails, teamId }) {
    const [taskDetails, setTaskDetails] = useState(selectedTaskDetails ? selectedTaskDetails : initialTaskDetails);

    const handleLoadTaskDetails = (e) => {
        console.log(e);
        const currentData = { ...taskDetails };
        currentData[`${e.target.id}`] = e.target.value;
        setTaskDetails(currentData);
    };

    const handleSubmitTask = (e) => {
        e.preventDefault();
        if (selectedTaskDetails.id) {
            const prevTasks = storage.getItem("tasks");

            const tasks = prevTasks.map((task) => {
                if (task.id === selectedTaskDetails.id) {
                    return { id: selectedTaskDetails.id, team_id: teamId, ...taskDetails };
                }
                else {
                    return task;
                }
            });

            const saveTask = storage.setItem("tasks", tasks);
            if (saveTask.status === 201) {
                setAllTask(tasks);
                setIsOpen(false);
            }
        } else {
            const prevTasks = storage.getItem("tasks");
            if (prevTasks?.length) {
                const saveTask = storage.setItem("tasks", [...prevTasks, { id: new Date().getTime(), team_id: teamId, ...taskDetails }]);
                if (saveTask.status === 201) {
                    setAllTask([...allTask, { id: new Date().getTime(), team_id: teamId, ...taskDetails }]);
                    setIsOpen(false);
                }
            }
            else {
                const saveTask = storage.setItem("tasks", [{ id: new Date().getTime(), team_id: teamId, ...taskDetails }]);
                if (saveTask.status === 201) {
                    setAllTask([...allTask, { id: new Date().getTime(), team_id: teamId, ...taskDetails }]);
                    setIsOpen(false);
                }
            }
        }
    };

    return (
        <form
            onSubmit={handleSubmitTask}
            className="space-y-3"
        >
            <div>
                <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                    Task Title
                </label>
                <div className="mt-2">
                    <input
                        id="title"
                        name="title"
                        type="text"
                        value={taskDetails.title}
                        onChange={handleLoadTaskDetails}
                        required
                        className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-blue sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="des" className="block text-sm font-medium leading-6 text-gray-900">
                    Task Description
                </label>
                <div className="mt-2">
                    <textarea
                        id="des"
                        name="des"
                        rows={3}
                        value={taskDetails.des}
                        onChange={handleLoadTaskDetails}
                        className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-blue sm:text-sm sm:leading-6"
                    />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about task description.</p>
            </div>

            <div>
                <label htmlFor="due_date" className="block text-sm font-medium leading-6 text-gray-900">
                    Due Date
                </label>
                <div className="mt-2">
                    <input
                        id="due_date"
                        name="due_date"
                        type="date"
                        value={taskDetails.due_date}
                        onChange={handleLoadTaskDetails}
                        required
                        className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-blue sm:text-sm sm:leading-6"
                    />
                </div>
            </div>

            <div>
                <label htmlFor="status" className="block text-sm font-medium leading-6 text-gray-900">
                    Task Status
                </label>
                <div className="mt-2">
                    <select
                        id="status"
                        name="status"
                        value={taskDetails.status}
                        onChange={handleLoadTaskDetails}
                        required
                        className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-blue sm:text-sm sm:leading-6"
                    >
                        <option value="----">Select Status</option>
                        <option value="working">Working on it</option>
                        <option value="stuck">Stuck</option>
                        <option value="done">Done</option>
                    </select>
                </div>
            </div>

            <div>
                <label htmlFor="priority" className="block text-sm font-medium leading-6 text-gray-900">
                    Priority
                </label>
                <div className="mt-2">
                    <select
                        id="priority"
                        name="priority"
                        value={taskDetails.priority}
                        onChange={handleLoadTaskDetails}
                        required
                        className="pl-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-secondary-blue sm:text-sm sm:leading-6"
                    >
                        <option value="----">Select Priority</option>
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
            </div>

            <SubmitButton type="submit" extraClasses="px-2 py-2 font-semibold">{selectedTaskDetails?.id ? "Update" : "Create"}</SubmitButton>
        </form>
    );
}
