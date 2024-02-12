import React, { useEffect, useState } from "react";
import { logo } from "../assets/Picture";
import dash from "/Pic-home/Dashboard.png"
import run from "/Pic-home/run1.jpg"

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate()
  //สถานะการเข้าระบบ
  const [logIn, setLogin] = useState(false);
  //ตรวจสอบสถานะตอนโหลด component
  useEffect(() => {
    const userLogIn = localStorage.getItem("login");//loginกับหลังบ้าน
    if (userLogIn) {
      setLogin(true);
      console.log(userLogIn);
    }

  }, []);

  //ตรวจสถานะเมื่อกดstart
  const handleClick = () => {
    //ตรวจผู้ใช้ว่าเคยเข้าระบบไหม
    if (logIn) {
      return navigate("/UserHomePage");
    } else {
      return  navigate("/login");
    }
    
  };
  
  return (
    <div className="">
      <div className="homepage relative">
        <div className="Picbox relative h-[638px]">
          <img
            className="banner h-full w-full object-cover opacity-2"
            src={run}
            alt="run"
          />
        </div>

        <div className="homewelcome flex flex-col items-center absolute top-[5%] right-0 left-0 md:top-1/3 md:right-0 md:left-1/2 md:-translate-y-1/2 m-[7.5px] md:m-[30px]">
          {/* <img
            src={logo}
            alt="logo"
            className=" grid grid-cols-3 items-center"
          /> */}
          <h1 className="text-xl md:text-4xl font-bold text-center">
            Welcome to I.Move
          </h1>
          <p className="text-lg md:text-2xl text-center py-5">
            <em>A healthy outside starts from the inside</em>
          </p>
          <button
            onClick={handleClick}
            className="bg-[#102C57] text-white font-bold  w-full md:w-[325px] lg:w-[400px] h-14 rounded-xl"
          >
            Start
          </button>
        </div>
      </div>

      <div className="content text-center flex flex-col items-center m-[7.5px] md:m-[30px]">
        <h2 className="content-wellcome font-bold text-center text-xl md:text-4xl text-[#102C57]-5">
          <em>
            Track your progress, celebrate your success. Our app, your journey.
          </em>
        </h2>
        <img
          className="max-w-[350px] h-auto pt-6"
          src={dash}
          alt="Dashboard"
        />
      </div>
    </div>
  );
};

export default Home;
