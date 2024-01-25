// import React from "react";
// import Navbarhome from "./Navbarhome";
import Contact from "./Contact";
import Aboutus from "./Aboutus";
import Footer from "./Footer";

const Home = () => {
  return (
    <div >
      {/* <Navbarhome/> */}
      <div className="homepage relative ">
        <div className="Picbox relative h-[638px]">
          <img
            className="banner h-full w-full object-cover opacity-2"
            src="public\Picture\run1.jpg"
            alt="run"
          />
        </div>

        <div className="homewelcome flex flex-col items-center absolute top-1/2 right-0 -translate-y-1/2 mr-60 p-8">
          {/* <img
            className="logowelcome w-16 h-16"
            src="src\Picture\logo1.png"
            alt="logo"
          /> */}
          <h1 className="text-3xl pt-5">Welcome to I.Move</h1>
          <p className="text-2xl pb-8 pt-2">
            A healthy outside starts from the inside
          </p>
          <button className=" bg-[#102C57] text-white font-bold w-[325px] h-14 rounded-xl">
            Start
          </button>
        </div>
      </div>
      <br></br>
      <div className="content text-center flex flex-col items-center">
        <h2 className="content-wellcome text-4xl font-bold pt-5">
          <em>
            Track your progress, celebrate your success. Our app, your journey.
          </em>
        </h2>
        <img
          className=" max-w-full h-auto pt-6"
          src="src/assets/Pic-home/Dashboard-pic.PNG"
          alt="Dashboard"
        />
      </div>
      <Aboutus/>
      <Contact/>
      <Footer/>

    </div>
  );
};

export default Home;
