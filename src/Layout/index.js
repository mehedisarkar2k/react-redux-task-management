import React from "react";
import logo from "../assets/logo.png";
import NavBar from "../components/NavBar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    const navOptions = [
        { name: "Home", link: "/home" },
        { name: "Task List", link: "/task-list" },
        { name: "About", link: "/about" },
    ];
    return (
        <div className="flex flex-col min-h-screen">
            <NavBar logo={logo} navOptions={navOptions} />
            <div className="container mx-auto px-5 md:py-10 lg:px-20">
                {children}
            </div>

            <Footer />
        </div>
    );
};

export default Layout;
