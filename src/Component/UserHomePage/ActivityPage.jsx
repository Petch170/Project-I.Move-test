import React, { useState } from "react";
import Modal from "react-modal";
import ModalForm from "./ModalForm";
import Accordion from "./Accordion";
import { userData } from "./mockData";
export default function ActivityPage() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [formType, setFormType] = useState();
  const [mockCard, setMockCard] = useState(userData);
  const [imageFile, setImageFile] = useState("");
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
  };
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
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
  };
  const handleDelete = (id) => {
    const newData = mockCard.filter((item) => item.id !== id);
    setMockCard(newData);
  };

  const handleUpdate = (
    id,
    activityName,
    activityType,
    date,
    durations,
    distance,
    description
  ) => {
    const updateData = {
      id: id,
      activityName: activityName,
      activityType: activityType,
      date: date,
      durations: durations,
      distance: distance,
      description: description,
      imageUrl:
        "https://fittoplay.org/globalassets/pictures/badminton/badminton_pho10254241_crop.jpg",
    };
    setMockCard([...mockCard, updateData]);
  };

  return (
    <>
      <div className="col-span-9 p-3 m-5 ">
        <div className="flex justify-between  ">
          <h1 className="text-[36px] text-[#102C57] font-bold">Activity</h1>
          <button
            onClick={openModal}
            className="bg-[#102C57] rounded-lg text-white font-medium p-3 hover:bg-cyan-600"
          >
            Create Activity
          </button>
        </div>
        <div>
          <div className="text-[#102C57] text-[24px] font-bold pb-2">
            <h1>My Activity</h1>
          </div>
          <Accordion
            activityCardData={mockCard}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          />
        </div>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <ModalForm closeModal={closeModal} handleCreate={handleCreate} />
        </Modal>
      </div>
    </>
  );
}
