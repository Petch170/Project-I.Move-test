import { Link } from "react-router-dom";
import {
  dashboardIcon,
  dumbbellIcon,
  homeIcon,
  userIcon,
} from "../../assets/Icon";
import { logo } from "../../assets/Picture";
import BMI from "../BMI";
import Modal from "react-modal";
import { useState } from "react";
const NavBar = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%) scale(0.75)",
      padding: "30px",
      backgroundColor: "#EADBC8",
    },
    overlay: { zIndex: 1000 },
  };
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      {/* desktop */}
      <nav className="flex flex-row justify-between bg-cream desktop px-4">
        <div className="flex flex-row  items-center relative">
          <img src={logo} alt="logo" />
          <p className="font-black absolute left-[55px]">I.MOVE</p>
        </div>
        <div className="flex flex-row  items-center gap-8 px-4 py-2">
          <Link to="/">
            <p className="font-bold">Contact</p>
          </Link>
          <Link to="/">
            <p className="font-bold">About</p>
          </Link>
          <div
            className="flex flex-col bg-[#E8E8E8] rounded-full justify-center items-center p-2 border-4 border-[#CE9F9F] w-[75px] aspect-square cursor-pointer"
            onClick={openModal}
          >
            <span className="material-icons-outlined">volunteer_activism</span>
            <p className="text-xs font-bold">BMI</p>
          </div>
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <BMI />
        </Modal>
      </nav>

      {/* mobile */}
      <nav className="sm:hidden grid grid-cols-4 items-center bg-cream py-1 fixed inset-x-0 bottom-0 ">
        <Link to="/">
          <div className="flex flex-col justify-center items-center">
            <img src={homeIcon} alt="home" />
            <p>Home</p>
          </div>
        </Link>
        <Link to="/UserHomePage">
          <div className="flex flex-col justify-center items-center">
            <img src={dumbbellIcon} alt="activity" />
            <p>Activity</p>
          </div>
        </Link>
        <Link to="/user/dashboard">
          <div className="flex flex-col justify-center items-center">
            <img src={dashboardIcon} alt="dashboard" />
            <p>Dashboard</p>
          </div>
        </Link>
        <Link to="/Activity">
          <div className="flex flex-col justify-center items-center">
            <img src={userIcon} alt="profile" />
            <p>Profile</p>
          </div>
        </Link>
      </nav>
    </>
  );
};
export default NavBar;
