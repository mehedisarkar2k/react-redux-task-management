import React from "react";

const TextInput = ({ label, placeholder, name, onChange }) => {
    const changeHandler = onChange || (() => {});

    return (
        <>
            {label && (
                <label
                    htmlFor="base-input"
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    {label}
                </label>
            )}
            <input
                placeholder={placeholder}
                type="text"
                id={`text-input-${name}`}
                name={name}
                onChange={changeHandler}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            />
        </>
    );
};

export default TextInput;
