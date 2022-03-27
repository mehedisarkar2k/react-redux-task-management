import React from "react";
import Button from "./Button";
import SelectInput from "./SelectInput";
import TextArea from "./TextArea";
import TextInput from "./TextInput";

const TaskForm = ({ onSubmit, onChange, proceed }) => {
    return (
        <form onSubmit={onSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-4">
                <div className="">
                    <TextInput
                        onChange={onChange}
                        placeholder="Task title..."
                        name="task-title"
                    />
                </div>
                <div className="">
                    <SelectInput
                        options={[
                            { value: "low", label: "Low" },
                            { value: "medium", label: "Medium" },
                            { value: "high", label: "High" },
                        ]}
                        onChange={onChange}
                        placeholder="Select priority"
                        name="task-priority"
                    />
                </div>

                <div className="col-span-2">
                    <TextArea
                        onChange={onChange}
                        placeholder="Task description"
                        name="task-description"
                    />
                </div>
            </div>

            <div className="col-span-2 flex items-center justify-center mt-2">
                <Button disable={!proceed} type="submit" variant="fill">
                    Create Task
                </Button>
            </div>
        </form>
    );
};

export default TaskForm;
