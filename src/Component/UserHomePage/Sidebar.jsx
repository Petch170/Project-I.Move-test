import axios from "axios";
import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { handleLogOut } from "../../helper/LogOut";

export default function Sidebar() {
  const [userData, setUserData] = useState();
  useEffect(() => {
    const getData = async () => {
      const gettoken = localStorage.getItem("token");
      const decode = jwtDecode(gettoken);
      const email = decode.email;
      const response = await axios.get(
        `http://localhost:8000/user/data/${email}`
      );
      const data = response.data;
      setUserData(data[0]);
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
                className="rounded-full "
              />
            ) : (
              <img src="./Pic-home/user-circle-2.svg" alt="user" />
            )}
          </div>
          <div className="font-bold">
            <p>{userData?.fullName}</p>
          </div>
        </div>
        {/* choose direction */}
        <div>
          <div className="text-[#102C57] font-bold text-base flex flex-col gap-6 p-3">
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
        <button className="bg-[#102C57] w-[100px] h-[30px] rounded-lg text-white font-medium " onClick={handleLogOut}>
          Log out
        </button>
      </div>
    </div>
  );
}
