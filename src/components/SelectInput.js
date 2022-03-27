import { useState } from "react";

const SelectInput = ({ label, name, options, placeholder, onChange }) => {
    const [value, setValue] = useState("");

    const changeHandler = (e) => {
        onChange(e);
        setValue(e.target.value);
    };

    return (
        <>
            {label && (
                <label
                    htmlFor={`select-input-${name}`}
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                    {label}
                </label>
            )}
            <select
                id={`select-input-${name}`}
                name={name}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={value}
                onChange={changeHandler}
            >
                <option disabled value="">
                    {placeholder}
                </option>
                {options?.map((option) => {
                    return (
                        <option
                            className="text-gray-700"
                            key={option.value}
                            value={option.value}
                        >
                            {option.label}
                        </option>
                    );
                })}
            </select>
        </>
    );
};

export default SelectInput;
