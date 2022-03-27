import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

const SingleTaskCard = ({ header, task = {}, border }) => {
    const { sl, id, title, description, priority, action } = task;

    return header ? (
        <div className="bg-gray-50 block p-4 w-full border-b border-gray-200">
            <div className="grid grid-cols-12 gap-1 text-center">
                {header.map((h, i) => (
                    <div
                        key={i}
                        className={`text-center text-lg font-bold text-slate-800 ${
                            h.toLowerCase() === "title" ? "col-span-3" : ""
                        }
                ${h.toLowerCase() === "description" ? "col-span-4" : ""}
                ${
                    h.toLowerCase() === ("priority" || "action")
                        ? "col-span-2"
                        : ""
                }
                `}
                    >
                        {h}
                    </div>
                ))}
            </div>
        </div>
    ) : (
        <Link
            to={`/task-details/${id}`}
            className={`block p-6 w-full ${
                border ? "border-b" : ""
            } border-gray-200 hover:bg-gray-100`}
        >
            <div className="grid grid-cols-12 gap-1 text-center">
                <div className="col-span-1">{sl}</div>
                <div className="col-span-3">
                    <p>{title}</p>
                </div>
                <div className="col-span-4">
                    <p>{description}</p>
                </div>
                <div className="col-span-2">
                    <p
                        className={`capitalize ${
                            priority === "high"
                                ? "text-red-500"
                                : priority === "low"
                                ? "text-gray-700"
                                : "text-green-500"
                        }`}
                    >
                        {priority}
                    </p>
                </div>

                {action ? (
                    <div className="col-span-2">
                        <p>{action}</p>
                    </div>
                ) : (
                    <div className="col-span-1 flex items-center justify-around text-2xl">
                        <MdEdit className="cursor-pointer text-slate-700" />
                        <MdDelete className="cursor-pointer text-red-700" />
                    </div>
                )}
            </div>
        </Link>
    );
};

export default SingleTaskCard;
