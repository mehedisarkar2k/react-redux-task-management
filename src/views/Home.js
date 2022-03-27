import { useEffect, useState } from "react";
import { MdAdd, MdClear } from "react-icons/md";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import SingleTaskCard from "../components/SingleTaskCard";
import TaskForm from "../components/TaskForm";
import Layout from "../Layout";

const Home = () => {
    const [isCreatingTask, setIsCreatingTask] = useState(false);
    const [formData, setFormData] = useState({});
    const [pageTitle, setPageTitle] = useState("Home");

    const handleCreateTask = () => {
        setIsCreatingTask((prevState) => !prevState);
        if (!isCreatingTask) {
            setPageTitle("Create Task");
        } else {
            setPageTitle("Home");
        }
    };

    const handleFormData = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    useEffect(() => {
        // change the title of the page
        document.title = pageTitle;
    }, [pageTitle]);

    return (
        <Layout>
            <div className="flex w-full justify-end mb-4">
                <Button
                    onClick={handleCreateTask}
                    icon
                    title={isCreatingTask ? "Cancel" : "Add New Task"}
                >
                    {!isCreatingTask ? (
                        <MdAdd className="text-3xl text-blue-500" />
                    ) : (
                        <MdClear className="text-3xl text-blue-500" />
                    )}
                </Button>
            </div>

            {isCreatingTask && (
                <div className="py-8 px-6 shadow-md rounded-xl border border-gray-200">
                    <h2 className="text-slate-700 text-3xl mb-3 text-center">
                        Create new task
                    </h2>
                    <TaskForm
                        onChange={handleFormData}
                        onSubmit={handleSubmit}
                    />
                </div>
            )}

            <h3
                className={`text-3xl text-gray-700 ${
                    isCreatingTask ? "mt-10" : "mt-5"
                } mb-2`}
            >
                Recent Task
            </h3>
            <div className="mt-5 rounded-lg border border-gray-200 overflow-hidden">
                <SingleTaskCard
                    header={[
                        "Sl. No.",
                        "Title",
                        "Description",
                        "Priority",
                        "Action",
                    ]}
                />
                <SingleTaskCard
                    task={{
                        sl: 1,
                        title: "Task 1",
                        description: "a b c d",
                        priority: "high",
                    }}
                    border
                />
                <SingleTaskCard
                    task={{
                        sl: 1,
                        title: "Task 1",
                        description: "a b c d",
                        priority: "low",
                    }}
                    border
                />
                <SingleTaskCard
                    task={{
                        sl: 1,
                        title: "Task 1",
                        description: "a b c d",
                        priority: "medium",
                    }}
                />

                <div className="text-right p-4">
                    <Link
                        to="/task-list"
                        className="text-blue-500 hover:text-blue-400 transition"
                    >
                        {" "}
                        View All
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
