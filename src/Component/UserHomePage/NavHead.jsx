import React from "react";

export default function NavHead() {
  return (
    <div className="bg-[#EADBC8] flex justify-between col-span-12 ">
      <div className="flex items-center">
        <div className="h-[93px] w-[100px] flex justify-start">
          <a href="/">
            <img src="./Picture/logo1.png" alt="logo1" />
          </a>
        </div>
        <div>
          <h1 className="text-[#102C57] font-bold">I.MOVE</h1>
        </div>
      </div>
      <div className="flex items-center px-3">
        <div className="flex justify-center">
          <a href="/" className="px-6  text-[#102C57] font-bold">
            Contact
          </a>
          <a href="/" className="px-6  text-[#102C57] font-bold">
            About
          </a>
        </div>
        <div className="rounded-full border-4 border-[#CE9F9F] bg-[#E8E8E8] p-3 pr-3 flex flex-col items-center w-[75px] h-[75px] cursor-pointer">
          <span class="material-icons-outlined">volunteer_activism</span>
          <p className="text-xs/[10px] whitespace-nowrap text-[#102C57] font-bold p-1">
            BMI
          </p>
        </div>
      </div>
    </div>
  );
}
