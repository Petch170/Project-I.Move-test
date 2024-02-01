import React, { useState } from "react";
import NavHead from "./NavHead";
import Sidebar from "./Sidebar";
import { mockActivity, mockUserData } from "./mockData";
import Accordion from "./Accordion";
import Modal from "react-modal";
import BMI from "../BMI";

export default function UserHomePage() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

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
    <div>
      <div className="grid grid-cols-12 ">
        {/* mobile */}
        <div className=" sm:hidden col-span-12 bg-cream">
          <div className="flex justify-between px-6 py-2 items-center bg-cream">
            <a href="/" className="h-[40px] w-[40px]">
              <img
                src="./src/assets/Pic-home/logo1.png"
                alt="logo1"
                className="relative "
              />
            </a>
            <p className="text-[#102C57] font-bold">Activity</p>
            <a href="/setting">
              <span className="material-icons-outlined">settings</span>
            </a>
          </div>
        </div>
        <NavHead />
        <Sidebar userData={mockUserData} />
        <div className="col-span-12 sm:col-span-9 p-3 m-5 ">
          <div className="flex justify-between">
            <div>
              <h1 className="text-[20px] text-[#102C57] font-bold sm:text-[36px]">
                Home
              </h1>
              <h2 className="text-[18px] text-[#102C57] font-bold pb-2 sm:text-[24px]">
                Latest Activity
              </h2>
            </div>
            <div className=" sm:hidden col-span-12 flex justify-end pb-8">
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
          </div>
          <div>
            <Accordion activityCardData={mockActivity} />
          </div>
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
  );
}
