import React, { useState } from "react";
import NavHead from "./NavHead";
import Sidebar from "./Sidebar";
import { mockActivity, mockUserData } from "./mockData";
import Accordion from "./Accordion";

export default function UserHomePage() {
  return (
    <div className="grid grid-cols-12">
      <NavHead />
      <Sidebar userData={mockUserData} />
      <div className="col-span-9 p-3 m-5 ">
        <div>
          <h1 className="text-[36px] text-[#102C57] font-bold">Home</h1>
          <h2 className="text-[24px] text-[#102C57] font-bold pb-2">
            Latest Activity
          </h2>
        </div>
        <div>
          <Accordion activityCardData={mockActivity} />
        </div>
      </div>
    </div>
  );
}
