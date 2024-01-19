import React, { useState } from "react";

export default function Sidebar({ active, setActive, userData }) {
  console.log(userData);
  return (
    // {MockActive.map((item)=>)}
    <div className="flex flex-col justify-between items-center col-span-3 border-r-4 border-[#102C57] p-3 m-5 h-[100vh]">
      <div>
        <div className="flex items-center">
          <div>
            <img
              src={userData[0].profilepic}
              alt="Profile picture"
              class="w-28 h-28 p-3 rounded-full"
            />
          </div>
          <div className="font-bold">
            <p>{userData[0].fullname}</p>
          </div>
        </div>
        {/* choose direction */}
        <div>
          <div className="text-[#102C57] font-bold text-base flex flex-col gap-3 p-3">
            <div className="flex items-center cursor-pointer">
              <img
                src="./Picture/user.png"
                alt="user"
                className={`${
                  active === "home" ? "block" : "hidden"
                } h-[15px] w-[15px]`}
              />
              <a onClick={() => setActive("home")}>Home</a>
            </div>
            <div className="flex items-center cursor-pointer">
              <img
                src="./Picture/user.png"
                alt="user"
                className={`${
                  active === "activity" ? "block" : "hidden"
                } h-[15px] w-[15px]`}
              />
              <a onClick={() => setActive("activity")}>Activity</a>
            </div>
            <div className="flex items-center cursor-pointer">
              <img
                src="./Picture/user.png"
                alt="user"
                className={`${
                  active === "dashboard" ? "block" : "hidden"
                } h-[15px] w-[15px]`}
              />
              <a onClick={() => setActive("dashboard")}>Dash board</a>
            </div>
            <div className="flex items-center cursor-pointer">
              <img
                src="./Picture/user.png"
                alt="user"
                className={`${
                  active === "setting" ? "block" : "hidden"
                } h-[15px] w-[15px]`}
              />
              <a onClick={() => setActive("setting")}>Setting</a>
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
