import React from "react";
import { Link } from "react-router-dom";



// import logo1 from './Picture/logo1'

function Navbarhome({liref}) {

  const handleClick = () => {
    liref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="navbar bg-[#EADBC8] h-16 w-full flex justify-between items-center pl-2 pr-16">
      <div className="navlogobar flex  items-center">
        <img
          className="nav w-14 h-14"
          src="public\Picture\logo1.png"
          alt="icon"
        />
        <a className="Logo hover:cursor-pointer">I.MOVE</a>
      </div>
      <ul className="list flex gap-10 ">
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
