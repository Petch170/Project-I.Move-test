import React, { useState } from "react";
import Modal from "react-modal";
import ModalForm from "./ModalForm";
import Accordion from "./Accordion";
import { mockUserData, userData } from "./mockData";
import Sidebar from "./Sidebar";
import NavHead from "./NavHead";
import DeleteConfirm from "./DeleteConfirm";

const initialValues = {
  id: undefined,
  activityName: "",
  activityType: "",
  date: "",
  durations: "",
  distance: "",
  description: "",
  files: undefined,
};

export default function ActivityPage() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [formType, setFormType] = useState();
  const [mockCard, setMockCard] = useState(userData);
  const [imageFile, setImageFile] = useState("");
  const [confirmDel, setConfirmDel] = useState(false);
  const [initialValue, setInitialValue] = useState(initialValues);
  const [idToDel, setIdtoDel] = useState("");

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      padding: "30px",
      backgroundColor: "#EADBC8",
    },
    overlay: { zIndex: 1000 },
  };
  const customDelStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%) scale(0.75)",
      padding: "30px",
      backgroundColor: "#EADBC8",
    },
    overlay: { zIndex: 1001 },
  };
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  function closeConfirm() {
    setConfirmDel(false);
  }
  const handleCreate = (
    activityName,
    activityType,
    date,
    durations,
    distance,
    description
  ) => {
    const newUser = {
      activityName: activityName,
      activityType: activityType,
      date: date,
      durations: durations,
      distance: distance,
      description: description,
      imageUrl:
        "https://fittoplay.org/globalassets/pictures/badminton/badminton_pho10254241_crop.jpg",
    };
    setMockCard([...mockCard, newUser]);
    console.log(mockCard);
  };
  const handleDelete = (id) => {
    const newData = mockCard.filter((item) => item.id !== id);
    setMockCard(newData);
    setConfirmDel(false);
    closeModal();
  };

  const handleCreateClick = () => {
    setInitialValue(initialValues);
    setFormType("create");
    openModal(true);
  };

  const handleEditClick = (item) => {
    setInitialValue({
      id: item.id,
      activityName: item.activityName,
      activityType: item.activityType,
      date: item.date,
      durations: item.durations,
      distance: item.distance,
      description: item.description,
      files: undefined,
    });
    console.log(item);
    setIsOpen(true);
    setFormType("edit");
  };

  const handleConfirmDelete = (id) => {
    setConfirmDel((prev) => !prev);
    setIdtoDel(id);
  };

  return (
    <div>
      <div className="grid grid-cols-12 ">
        {/* Mobile */}
        <div className=" sm:hidden col-span-12">
          <div className="flex justify-between px-6 py-2 items-center bg-cream">
            <a href="/" className="w-[40px] h-[40px]">
              <img
                src="./src/assets/Pic-home/logo1.png"
                alt="logo1"
                className=""
              />
            </a>
            <p className="text-[#102C57] font-bold">Proflie</p>
            <a href="/setting">
              <span className="material-icons-outlined">settings</span>
            </a>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 p-3 ">
              <img
                src={mockUserData.profilepic}
                alt="Profile picture"
                className="rounded-full w-full h-full"
              />
            </div>
            <div className="font-bold">
              <p>{mockUserData.fullname}</p>
            </div>
          </div>
        </div>

        <NavHead handleCreateClick={handleCreateClick} />
        <Sidebar userData={mockUserData} />

        <div className="col-span-12 sm:col-span-9 p-3 m-5 ">
          <div className="flex justify-between  ">
            <h1 className="sm:text-[36px] text-[20px] text-[#102C57] font-bold">
              Activity
            </h1>
            <button
              onClick={handleCreateClick}
              className="bg-[#102C57] rounded-lg text-white font-medium p-3 hover:bg-cyan-600 hidden sm:block"
            >
              Create Activity
            </button>
          </div>
          <div>
            <div className="text-[#102C57] sm:text-[24px] text-[18px] font-bold pb-2">
              <h1>My Activity</h1>
            </div>
            <Accordion
              activityCardData={mockCard}
              handleEditClick={handleEditClick}
            />
          </div>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <ModalForm
              closeModal={closeModal}
              handleCreate={handleCreate}
              initialValue={initialValue}
              formType={formType}
              setMockCard={setMockCard}
              mockCard={mockCard}
              handleConfirmDelete={handleConfirmDelete}
            />
          </Modal>
          <Modal
            isOpen={confirmDel}
            style={customDelStyles}
            onRequestClose={closeConfirm}
          >
            <DeleteConfirm
              handleDelete={handleDelete}
              id={idToDel}
              closeConfirm={closeConfirm}
            />
          </Modal>
        </div>
      </div>
    </div>
  );
}
