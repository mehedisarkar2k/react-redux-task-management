import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import notFound from "../assets/404.svg";

const NotFound = () => {
    const navigate = useNavigate();
    const [remindTime, setRemindTime] = useState(10);

    useEffect(() => {
        document.title = "404 | Not Found";

        setTimeout(() => {
            navigate(-1);
        }, 10000);
    }, [navigate]);

    useEffect(() => {
        const handler = setInterval(() => {
            setRemindTime((prevState) => +prevState - 1);
        }, 1000);

        return () => clearInterval(handler);
    }, []);

    return (
        <div className="min-h-[75vh] flex items-center justify-center">
            <div className="px-10 py-12 h-[450px]">
                <img src={notFound} alt="Not found" className="w-auto h-full" />

                <div className="mt-2 text-center">
                    <p>Returning in {remindTime} seconds</p>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
