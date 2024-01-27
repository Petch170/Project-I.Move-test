// import React from "react";
// import Navbarhome from "./Navbarhome";

const Home = () => {
  return (
    <div className="">
      <div className="homepage relative">
        <div className="Picbox relative h-[638px]">
          <img
            className="banner h-full w-full object-cover opacity-2"
            src="public\Picture\run1.jpg"
            alt="run"
          />
        </div>

        <div className="homewelcome flex flex-col items-center absolute top-1/4 right-0 left-0 md:top-1/3 md:right-0 md:left-1/2 md:-translate-y-1/2 m-[7.5px] md:m-[30px]">
          <h1 className="text-xl md:text-4xl font-bold text-center">Welcome to I.Move</h1>
          <p className="text-lg md:text-2xl text-center py-5">
            A healthy outside starts from the inside
          </p>
          <button className="bg-[#102C57] text-white font-bold  w-full md:w-[325px] lg:w-[400px] h-14 rounded-xl">
            Start 
          </button>
        </div>
      </div>

      <div className="content text-center flex flex-col items-center m-[7.5px] md:m-[30px]">
        <h2 className="content-wellcome font-bold pttext-center text-lg md:text-4xl text-[#102C57]-5">
          <em>
            Track your progress, celebrate your success. Our app, your journey.
          </em>
        </h2>
        <img
          className="max-w-full h-auto pt-6"
          src="src/assets/Pic-home/Dashboard-pic.PNG"
          alt="Dashboard"
        />
      </div>
    </div>
  );
};

export default Home;
