import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { handleLogOut } from "../../helper/LogOut";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [userData, setUserData] =useState();
  useEffect(() => {
    const getData = async () => {
      const gettoken = localStorage.getItem("token");
      const decode = jwtDecode(gettoken);
      const userId = decode.data.userId;
      const response = await axios.get(
        `https://imoveprojectgroup5.onrender.com/user/data/${userId}`
      );
      const data = response.data;
      setUserData(data);
    };
    getData();
  }, []);
  return (
    <div className="flex flex-col justify-between items-center col-span-3 border-r-4 border-[#102C57] p-3 m-5 h-[100vh] max-sm:hidden">
      <div>
        <div className="flex items-center">
          <div className="w-28 h-28 p-3 ">
            {userData?.imagePath ? (
              <img
                src={userData?.imagePath}
                alt="Profile picture"
                className="rounded-full w-full h-full object-cover aspect-square "
              />
            ) : (
              <img src="./Pic-home/user-circle-2.svg" alt="user" className="w-28 h-28 p-3" />
            )}
          </div>
          <div className="font-bold">
            <p>{userData?.fullName}</p>
          </div>
        </div>
        {/* choose direction */}
        <div>
          <div className="text-[#102C57] font-bold text-base flex flex-col gap-6 p-3">
            <Link to="/UserHomePage">
            <div className="flex items-center cursor-pointer">
              <span className="material-icons-outlined">house</span>
              <p>Home</p>
            </div>
            </Link>
            <Link to="/Activity">
            <div className="flex items-center cursor-pointer">
              <span className="material-icons-outlined">snowshoeing</span>
              <p>Activity</p>
            </div>
            </Link>
            <Link to="/user/dashboard">
            <div className="flex items-center cursor-pointer">
              <span class="material-icons-outlined">stacked_bar_chart</span>
              <p>Dashboard</p>
            </div>
            </Link>
            <Link to="/setting">
            <div className="flex items-center cursor-pointer">
              <span class="material-icons-outlined">manage_accounts</span>
              <p>Setting</p>
            </div>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <button className="bg-[#102C57] w-[100px] h-[30px] rounded-lg text-white font-medium " onClick={handleLogOut}>
          Log out
        </button>
      </div>
    </div>
  );
}
