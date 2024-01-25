import React, { useState } from "react";
import Modal from "react-modal";
import ModalForm from "./ModalForm";
import Accordion from "./Accordion";
import { userData } from "./mockData";
import Sidebar from "./Sidebar";
import NavHead from "./NavHead";

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
  const [initialValue, setInitialValue] = useState(initialValues);

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
    console.log(mockCard);
  };
  const handleDelete = (id) => {
    const newData = mockCard.filter((item) => item.id !== id);
    setMockCard(newData);
    openModal(false);
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

  return (
    <div className="grid grid-cols-12">
      <NavHead handleCreateClick={handleCreateClick} />
      <Sidebar userData={userData} />

      <div className="col-span-9 p-3 m-5 ">
        <div className="flex justify-between  ">
          <h1 className="text-[36px] text-[#102C57] font-bold">Activity</h1>
          <button
            onClick={handleCreateClick}
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
            handleDelete={handleDelete}
          />
        </Modal>
      </div>
    </div>
  );
}
