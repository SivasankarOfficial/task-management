import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./EventCalender.css";
import moment from "moment";
import { event } from "../data/dummy";

const EventCalender = () => {
  const localizer = momentLocalizer(moment);

  const eventItem = (schedulerData) => {
    return (
      <div
        style={{
          backgroundColor: "red",
          border: "1px solid green",
          padding: "5px",
        }}
      >
        {schedulerData.title}
      </div>
    );
  };

  const customEvent = (eventData) => {
    return (
      <div className=" bg-red-400">
        <h4
          style={{
            zIndex: 2,
            position: "absolute",
          }}
        >
          {eventData.title}{" "}
        </h4>
        <div style={{ width: "100%", height: "100%" }}>
          {/* <img
            style={{ objectFit: "fill", width: "100%", height: "100%" }}
            alt=""
            src={
              "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
            }
          /> */}
        </div>
      </div>
    );
  };
  const evens = {
    event: customEvent,
  };
  return (
    <div className="">
      <div className="flex justify-between w-5/6 m-auto bg-[#FFF] px-5 py-4 mt-10  ">
        <div className="flex">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
          <div>June 23 - June 27 , 2023</div>
        </div>
        <div>
          <button className=" bg-[#E9F2FF] px-7 py-1 rounded" type="button">
            + Add Task
          </button>
        </div>
      </div>
      <div>
        <div>
          <h1>My Calendar</h1>
          <Calendar
            //schedulerData={{ events }}
            localizer={localizer}
            events={event}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
            timeZone="America/New_York"
            components={evens}
            drilldownView="day"
            // Pass the custom event item style function
          />
        </div>
      </div>
    </div>
  );
};

export default EventCalender;
