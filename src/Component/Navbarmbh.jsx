import { useState } from "react"; // import state
import { logo } from "../assets/Picture";
import { bar3 } from "../assets/Icon";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      1;
    }
  };

  return (
    <div className="flex items-center justify-around bg-[#EADBC8] sm:hidden">
      <img className="nav w-14 h-14" src={logo} alt="icon" />
      <a className="Logo font-bold">I.MOVE</a>
      <nav>
        <section className="MOBILE-MENU flex sm:hidden">
          <div
            className="HAMBURGER-ICON space-y-[5px]"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w- animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="CROSS-ICON absolute top-0 right-0 px-2 py-5"
              onClick={() => setIsNavOpen(false)}
            >
              <img className="nav w-14 h-14" src={bar3} alt="icon" />
              {/* <svg className="h-8 w-8 text-[#102C57]" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
              </svg> */}
              <svg>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div className="flex flex-col gap-1 text-sm md:text-lg ">
              <p
                onClick={() => scrollToSection("contact")}
                className="border-b border-[#102C57] my-2 uppercase"
              >
                Contact
              </p>
              <p
                onClick={() => scrollToSection("aboutus")}
                className="border-b border-[#102C57] my-2 uppercase"
              >
                About
              </p>
              <a
                className="border-b border-[#102C57] my-2 uppercase"
                href="/login"
              >
                Login
              </a>
              <a
                className="border-b border-[#102C57] my-2 uppercase"
                href="/signup"
              >
                Sign up
              </a>
            </div>
          </div>
        </section>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>
  );
}
