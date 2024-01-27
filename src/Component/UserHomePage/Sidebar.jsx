import React, { useState } from "react";

export default function Sidebar({ userData }) {
  console.log(userData);
  return (
    <div className="flex flex-col justify-between items-center col-span-3 border-r-4 border-[#102C57] p-3 m-5 h-[100vh] max-sm:hidden">
      <div>
        <div className="flex items-center">
          <div className="w-28 h-28 p-3 rounded-full">
            <img src={userData[0].profilepic} alt="Profile picture" />
          </div>
          <div className="font-bold">
            <p>{userData[0].fullname}</p>
          </div>
        </div>
        {/* choose direction */}
        <div>
          <div className="text-[#102C57] font-bold text-base flex flex-col gap-3 p-3">
            <div className="flex items-center cursor-pointer">
              <span class="material-icons-outlined">house</span>
              <a href="/UserHomePage">Home</a>
            </div>
            <div className="flex items-center cursor-pointer">
              <span class="material-icons-outlined">snowshoeing</span>
              <a href="/Activity">Activity</a>
            </div>
            <div className="flex items-center cursor-pointer">
              <span class="material-icons-outlined">stacked_bar_chart</span>
              <a href="/user/dashboard">Dashboard</a>
            </div>
            <div className="flex items-center cursor-pointer">
              <span class="material-icons-outlined">manage_accounts</span>
              <a href="/setting">Setting</a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button className="bg-[#102C57] w-[100px] h-[30px] rounded-lg text-white font-medium ">
          Log out
        </button>
      </div>
    </div>
  );
}
