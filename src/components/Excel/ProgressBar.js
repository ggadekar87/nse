import React, { useState, useEffect } from "react";
import "./ProgressBar.css";

const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
];

const ProgressBar = () => {
    const [currentMonthIndex, setCurrentMonthIndex] = useState(new Date().getMonth());
    const highlightedStartMonths = ["Jan", "Apr", "Jul", "Oct"];
    const highlightedEndMonths = ["Mar", "Jun", "Sep", "Dec"];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentMonthIndex(new Date().getMonth());
        }, 1000 * 60 * 60); // Update every hour

        return () => clearInterval(timer); // Cleanup on unmount
    }, []);

    return (
        <div className="progress-bar-container">
            {months.map((month, index) => (
                <div
                    key={index}
                    className={`month-box ${index <= currentMonthIndex ? "highlighted" : ""
                        } ${highlightedStartMonths.includes(month) ? "highlightedStart" : ""
                        } ${highlightedEndMonths.includes(month) ? "highlightedEnd" : ""
                        } `}
                >
                    {month}
                </div>
            ))}
        </div>
    );
};

export default ProgressBar;
