"use client"
import React, { useState, useEffect } from "react";
import MeetingTypeList from "@/components/MeetingTypeList";

const Home = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  // Function to update current time and date
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
  };

  
  useEffect(() => {
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 60000); 
    return () => clearInterval(intervalId); 
  }, []);

  return (
    <section className="flex size-full flex-col gap-8 text-white-1">
      <div className="h-[303px] w-full rounded-[20px] bg-hero bg-cover flip">
        <div className="flex h-full max-md:px-5 max-md:p-8 max-lg:p-11 max-sm:p-8 justify-between flex-col p-11 ">
          <h2 className="glassmorphism max-w-[276px]  rounded py-2 text-center text-base font-normal">
            Upcoming Meeting at: 12:30 PM
          </h2>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">
              {currentTime}
            </h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">
              {currentDate}
            </p>
          </div>
        </div>
      </div>

      <MeetingTypeList />
    </section>
  );
};

export default Home;
