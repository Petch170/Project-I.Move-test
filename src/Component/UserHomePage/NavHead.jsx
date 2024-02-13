import React from "react";
import BMI from "../BMI";
import Modal from "react-modal";
import {
  dashboardIcon,
  dumbbellIcon,
  homeIcon,
  plusCircleIcon,
  userIcon,
} from "../../assets/Icon";
import { Link } from "react-router-dom";
export default function NavHead({ handleCreateClick }) {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const pathName = window.location.pathname;

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%) scale(0.75)",
      // padding: "",
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
      <div className="bg-[#EADBC8] flex justify-between col-span-12 max-sm:hidden">
        <div className="flex items-center">
          <div className="h-[85px] w-[100px] flex justify-start">
            <a href="/" className="h-[80px] w-[80px]">
              <img
                src="./Pic-home/logo1.png"
                alt="logo1"
                className="relative "
              />
            </a>
          </div>
          <div>
            <h1 className="text-[#102C57] font-bold absolute left-[55px] top-[40px]">
              I.MOVE
            </h1>
          </div>
        </div>
        <div className="flex items-center px-3">
          <div className="flex justify-center">
            <a href="/" className="px-6  text-[#102C57] font-bold">
              Contact
            </a>
            <a href="/" className="px-6  text-[#102C57] font-bold">
              About
            </a>
          </div>
          <div
            className="rounded-full border-4 border-[#CE9F9F] bg-[#E8E8E8] p-3 pr-3 flex flex-col items-center w-[75px] h-[75px] cursor-pointer"
            onClick={openModal}
          >
            <span class="material-icons-outlined">volunteer_activism</span>
            <p className="text-xs/[10px] whitespace-nowrap text-[#102C57] font-bold p-1">
              BMI
            </p>
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
      </div>
      {/* mobile */}
      <nav className="sm:hidden grid grid-cols-5 items-center bg-cream py-2 fixed inset-x-0 bottom-0 z-[2]">
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
        {pathName === "/Activity" ? (
          <div
            className="flex flex-col justify-center items-center"
            onClick={handleCreateClick}
          >
            <img src={plusCircleIcon} alt="add activity" />
          </div>
        ) : (
          <div className="flex justify-center">
            <span className="material-icons-outlined">directions_bike</span>
          </div>
        )}
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
}
