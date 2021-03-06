import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = ({ logo, navOptions = [{ name: "Home", link: "home" }] }) => {
    const [scrollY, setScrollY] = useState(false);

    //    calculate window scroll position
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScrollY(window.scrollY > 200);
        });
    }, [scrollY]);

    return (
        <nav
            className={`bg-white ${
                scrollY ? "sticky top-0 py-3 shadow-md" : "py-6"
            } border-gray-200 px-2 sm:px-4 rounded dark:bg-gray-800 transition-all duration-200 ease-linear`}
        >
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <Link to="/" className="flex items-center">
                    <img
                        src={
                            logo ||
                            "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                        }
                        className="mr-3 w-6 h-6 sm:w-9 sm:h-9 rounded-full"
                        alt="Logo"
                    />
                </Link>
                <div className="flex items-center md:order-2">
                    <button
                        id="triggerEl"
                        data-collapse-toggle="mobile-menu-2"
                        type="button"
                        className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-2"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <svg
                            className="hidden w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </div>
                <div
                    className="hidden ml-auto justify-between items-center w-full md:flex md:w-auto md:order-1"
                    id="mobile-menu-2"
                >
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                        {navOptions.map(({ name, link }) => (
                            <li key={name}>
                                <NavLink
                                    to={link}
                                    className={({ isActive }) =>
                                        `block w-full py-2 pr-4 pl-3 bg-blue-100 rounded md:bg-transparent md:text-blue-700 md:py-1 md:px-3 ${
                                            isActive &&
                                            "bg-blue-400 text-[#fff] md:bg-blue-100"
                                        } text-blue-700`
                                    }
                                >
                                    {name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
