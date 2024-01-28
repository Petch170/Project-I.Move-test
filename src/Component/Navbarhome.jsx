import React from "react";
import { logo } from "../assets/Picture";

function Navbarhome({liref}) {

  const handleClick = () => {
    liref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="navbar bg-[#EADBC8] h-16 w-full flex justify-between items-center desktop pl-2 pr-16 text-base md:text-xl">
      <div className="navlogobar flex  items-center">
        <img
          className="nav w-14 h-14"
          src={logo}
          alt="icon"
        />
        <a className="Logo hover:cursor-pointer font-bold">I.MOVE</a>
      </div>
      <ul className="list flex gap-10 text-sm md:text-lg">
        <li onClick={handleClick} className="hover:cursor-pointer ">
            Contact
        </li>
        <li onClick={handleClick} className="hover:cursor-pointer ">
            About
        </li>
        <li>
          <a className="hover:cursor-pointer" href="/UserHomePage">
            Login
          </a>
        </li>
        <li>
          <a className="hover:cursor-pointer" href="#">
            Sign up
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbarhome;
