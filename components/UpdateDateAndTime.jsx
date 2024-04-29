"use client"
import React, { useEffect, useState } from 'react'

const UpdateDateAndTime = () => {
    const [currentTime, setCurrentTime] = useState("");
    const [currentDate, setCurrentDate] = useState("");

    const updateDateTime = () => {
        const date = new Date();
        setCurrentTime(
            date.toLocaleTimeString("en-US", {
                hour: "2-digit",
                minute: "2-digit",
            })
        );
        setCurrentDate(
            new Intl.DateTimeFormat("en-US", {
                dateStyle: "full",
            }).format()
        );
    }
    useEffect(() => {
        updateDateTime();
        const intervalId = setInterval(updateDateTime, 60000);
        return () => clearInterval(intervalId);
    }, []);
    return (
        <div className="flex flex-col gap-2 glassmorphism w-fit rounded-xl p-6">
            <h1 className="text-4xl font-extrabold lg:text-7xl">{currentTime}</h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">{currentDate}</p>
        </div>
    );
}

export default UpdateDateAndTime
