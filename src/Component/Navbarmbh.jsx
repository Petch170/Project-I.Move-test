import { useState } from "react"; // import state
import logo1 from "/Pic-home/logo1.png";

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
          <img className="nav w-12 h-12" src={logo1} alt="icon" />
          <a className="Logo hover:cursor-pointer font-bold">I.MOVE</a>
        </div>

        {/* toggle */}
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
          <a
            onClick={() => scrollToSection("contact")}
            className=" text-center py-2 "
          >
            <span className="border-b border-[#102C57] inline-block">
              Contact
            </span>
          </a>
          <p
            onClick={() => scrollToSection("aboutus")}
            className=" text-center  py-2 "
          >
            <span className="border-b border-[#102C57] inline-block">
            About
            </span>
          </p>
          <p className="text-center py-2">
            <a href="/login" className="inline-block border-b border-[#102C57]">
              Login
            </a>
          </p>
          <p className="text-center py-2">
            <a href="/signup" className="inline-block border-b border-[#102C57]">
              Sign up
            </a>
          </p>
        </div>
      ) : null}
    </nav>

  );
}
