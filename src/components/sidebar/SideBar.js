import React, { useState } from "react";
import { MdOutlineDashboard } from "react-icons/md";
import { AiOutlineFile } from "react-icons/ai";
import { GiSandsOfTime } from "react-icons/gi";
import { LiaCalendarWeekSolid } from "react-icons/lia";
import { IoSettingsOutline } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import peter from "./assets/peter.jpg";
import EventCalender from "../EventCalender";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  // const [close, setClose] = useState(false);
  return (
    <div className=" flex">
      <div
        className={` z-auto w-64 h-screen bg-white-500 border-r-2 border-gray-100 ${
          open ? "block" : "hidden"
        } md:flex  `}
      >
        <div className="  p-5 w-6/6  pt-10  flex ml-4   ">
          <ul className=" space-y-10 w-6/5 mt-7   ">
            <li className=" ">
              <a href="#" className=" w-7  ">
                <div className="flex space-x-2">
                  <MdOutlineDashboard className="flex mt-1 mr-2 " />
                  Over view
                </div>
              </a>
            </li>
            <li>
              <a href="#" className=" w-7  ">
                <div className="flex space-x-2">
                  <AiOutlineFile className="flex mt-1 mr-2 " />
                  Projects
                </div>
              </a>
            </li>
            <li>
              <a href="#" className=" w-7  ">
                <div className="flex space-x-2">
                  <GiSandsOfTime className="flex mt-1 mr-2 " />
                  Time Log
                </div>
              </a>
            </li>
            <li>
              <a href="#" className=" w-7  ">
                <div className="flex space-x-2">
                  <LiaCalendarWeekSolid className="flex mt-1 mr-2 " />
                  Weekly Seminar
                </div>
              </a>
            </li>
            <div className=" absolute bottom-0 space-y-5">
              <li>
                <a href="#" className=" w-7  ">
                  <div className="flex space-x-2">
                    <IoSettingsOutline className="flex mt-1 mr-2 " />
                    Settings
                  </div>
                </a>
              </li>
              <li>
                <a href="#" className=" w-7  ">
                  <div className="flex space-x-2">
                    <FiLogOut className="flex mt-1 mr-2 " />
                    Log Out
                  </div>
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>
      {/* nav bar */}
      <div className=" bg-[#F9F9F9] w-full h-screen overflow-y-auto ">
        <div className=" bg-white py-5 text-black flex sticky top-0 ">
          <div className="ml-4 p-2 flex md:hidden ">
            {open ? (
              <button
                className={` font-bold rounded-full mr-3 duration-150 ${
                  open ? "block" : "hidden"
                }`}
                onClick={() => setOpen(false)}
              >
                <MdOutlineArrowBackIosNew />
              </button>
            ) : (
              <button className="" onClick={() => setOpen(true)}>
                <GiHamburgerMenu />
              </button>
            )}
          </div>
          <div className=" flex justify-center items-center">
            <button
              className={`hover:text-gray-800 font-bold py-2 px-4 rounded-full hidden md:block`}
            >
              <MdOutlineArrowBackIosNew />
            </button>
            <div className={`hidden md:block`}>Time Log</div>
            <div className=" absolute right-7 flex space-x-5 items-center ">
              <span className=" hidden md:block">Sivasankar</span>
              <img
                className="w-15 h-10 rounded-full"
                src={peter}
                alt="Rounded avatar"
              />
            </div>
          </div>
        </div>
        {/* main div */}
        <div>
          <EventCalender />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
