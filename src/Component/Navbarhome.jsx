import React from "react";
import logo1 from "/Pic-home/logo1.png";

function Navbarhome() {


 const scrollToSection = (sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    };

  return (
    <div className="navbar bg-[#EADBC8] h-16 w-full sticky flex justify-between items-center desktop pl-2 pr-16 text-base md:text-xl">
      <div className="navlogobar flex  items-center">
        <img
          className="nav w-14 h-14"
          src={logo1}
          alt="icon"
        />
        <a className="Logo hover:cursor-pointer font-bold">I.MOVE</a>
      </div>
      <ul className="list flex gap-10 text-sm md:text-lg">
        <li onClick={()=>scrollToSection("contact")} className="hover:cursor-pointer ">
            Contact
        </li>
        <li onClick={()=>scrollToSection("aboutus")} className="hover:cursor-pointer ">
            About
        </li>
        <li>
          <a className="hover:cursor-pointer" href="/login">
            Login
          </a>
        </li>
        <li>
          <a className="hover:cursor-pointer" href="/signup">
            Sign up
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbarhome;
