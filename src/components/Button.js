import React from "react";

const Button = ({ disable, children, onClick, type, variant, title }) => {
    const changeHandler = onClick || (() => {});

    return (
        <button
            disabled={disable}
            title={title}
            onClick={changeHandler}
            type={type || "button"}
            className={`font-medium rounded-lg text-sm px-5 ${
                disable ? "cursor-not-allowed" : "cursor-pointer"
            } ${
                variant === "fill"
                    ? "bg-blue-500 text-white px-3 py-2"
                    : "bg-transparent border-2 border-blue-500"
            }`}
        >
            {children}
        </button>
    );
};

export default Button;
