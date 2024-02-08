import { useState } from "react"; // import state
import { logo } from "../assets/Picture";

export default function Navbarmbh() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      1;
    }
  };

  return (
    <nav className="bg-[#EADBC8] sticky p-2 sm:hidden">
      <div className="flex items-center justify-between">
        <div className="navlogobar flex items-center">
          <img className="nav w-12 h-12" src={logo} alt="icon" />
          <a className="Logo hover:cursor-pointer font-bold">I.MOVE</a>
        </div>

        {/* troggle */}
        <div className="sm:hidden">
          <button id="menu-toggle" className="" onClick={toggleMenu}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile */}
      {isMenuOpen ? (
        <div className="flex flex-col sm:hidden">
          <p onClick={()=>scrollToSection("contact")} className=" text-center py-1">
              Contact
          </p>
          <p onClick={()=>scrollToSection("aboutus")} className=" text-center  py-1">
              About
          </p>
            <p className=" text-center  py-1"><a href="/login">
              Login
            </a></p>
            <p className=" text-center py-1"><a href="/signup">
              Sign up
            </a></p>
        
        </div>
      ) : null}
    </nav>
  );
}
