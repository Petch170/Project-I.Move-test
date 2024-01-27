import React, { useState } from "react";
import NavHead from "./NavHead";
import Sidebar from "./Sidebar";
import { mockActivity, mockUserData } from "./mockData";
import Accordion from "./Accordion";

export default function UserHomePage() {
  return (
    <div>
      <div className="grid grid-cols-12 ">
        {/* mobile */}
        <div className=" sm:hidden col-span-12 bg-cream">
          <div className="flex justify-between px-6 py-2 items-center bg-cream">
            <a href="/" className="h-[40px] w-[40px]">
              <img
                src="./Picture/logo1.png"
                alt="logo1"
                className="relative "
              />
            </a>
            <p className="text-[#102C57] font-bold">Activity</p>
            <a href="/setting">
              <span className="material-icons-outlined">settings</span>
            </a>
          </div>
        </div>
        <NavHead />
        <Sidebar userData={mockUserData} />
        <div className="col-span-12 sm:col-span-9 p-3 m-5 ">
          <div>
            <h1 className="text-[20px] text-[#102C57] font-bold sm:text-[36px]">
              Home
            </h1>
            <h2 className="text-[18px] text-[#102C57] font-bold pb-2 sm:text-[24px]">
              Latest Activity
            </h2>
          </div>
          <div>
            <Accordion activityCardData={mockActivity} />
          </div>
        </div>
      </div>
    </div>
  );
}
