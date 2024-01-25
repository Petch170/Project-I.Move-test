import React from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

// import logo1 from './Picture/logo1'

function Navbarhome() {

  
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
        <li>
          {/* <Link to="/Contact" className="hover:cursor-pointer " >
            Contact
          </Link> */}
          <ScrollLink
            to="contactSection"
            className="hover:cursor-pointer"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </ScrollLink>
        </li>
        <li>
          <Link to="/Aboutus" className="hover:cursor-pointer">
            About
          </Link>
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
