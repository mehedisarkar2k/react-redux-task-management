const TextArea = ({ label, placeholder, name, onChange }) => {
    const changeHandler = onChange || (() => {});
    return (
        <>
            {label && (
                <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-gray-900"
                >
                    {label}
                </label>
            )}
            <textarea
                id={`textarea-${name}`}
                rows="4"
                name={name}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder={placeholder}
                onChange={changeHandler}
            ></textarea>
        </>
    );
};

export default TextArea;
