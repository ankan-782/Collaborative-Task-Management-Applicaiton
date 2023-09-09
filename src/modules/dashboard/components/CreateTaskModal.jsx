import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import SubmitButton from '../../../components/common/SubmitButton';
import { storage } from '../../../storage';
import CreateTaskForm from './CreateTaskForm';
import Tasks from './Tasks';

export default function CreateTaskModal() {
    const modalRef = useRef(null);
    const { teamId } = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const [allTask, setAllTask] = useState([]);
    const [selectedTaskDetails, setSelectedTaskDetails] = useState({});

    useEffect(() => {
        const teamTasks = storage.getItem("tasks").filter(task => task.team_id === teamId);
        setAllTask(teamTasks);
    }, [teamId]);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setSelectedTaskDetails({});
        setIsOpen(false);
    };

    const handleOverlayClick = (e) => {
        // Check if the click is outside the modal using the ref
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            closeModal();
        }
    };

    // Add an event listener to handle clicks outside the modal
    useEffect(() => {
        document.addEventListener('mousedown', handleOverlayClick);
        return () => {
            document.removeEventListener('mousedown', handleOverlayClick);
        };
    }, []);

    const handleDeleteTask = (id) => {
        const tasks = storage.getItem("tasks");
        const updatedTasks = tasks.filter(task => task.id !== id);

        const saveUpdatedTasks = storage.setItem("tasks", updatedTasks);
        if (saveUpdatedTasks.status === 201) {
            setAllTask(allTask.filter(task => task.id !== id));
        }

    };

    const handleEditTask = (taskDetails) => {
        setSelectedTaskDetails(taskDetails);
        setIsOpen(true);
    };

    return (
        <div>
            <div className="w-44">

                <SubmitButton
                    type="button"
                    extraClasses="px-2 py-2 font-semibold"
                    onClick={openModal}
                >
                    Create Task
                </SubmitButton>
            </div>

            <Tasks allTask={allTask} handleDeleteTask={handleDeleteTask}
                handleEditTask={handleEditTask} />


            {isOpen && (
                <div
                    onClick={handleOverlayClick}
                    className="fixed inset-0 flex items-center justify-center bg-opacity-50 bg-gray-900 z-50"
                >
                    <div
                        className="bg-white p-4 rounded-md"
                        ref={modalRef}
                    >
                        <div className="flex justify-between items-center border-b border-gray-300 pb-2 mb-4">
                            <h2 className="text-xl font-semibold">Gym-nation Task</h2>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none" viewBox="0 0 24 24"
                                strokeWidth="1.5" stroke="currentColor"
                                className="w-6 h-6 cursor-pointer hover:stroke-secondary-blue"
                                onClick={closeModal}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>

                        <CreateTaskForm setIsOpen={setIsOpen} allTask={allTask} setAllTask={setAllTask} teamId={teamId} selectedTaskDetails={selectedTaskDetails} />
                    </div>
                </div>
            )}
        </div>
    );
}