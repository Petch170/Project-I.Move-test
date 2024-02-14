import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import ModalForm from "./ModalForm";
import Accordion from "./Accordion";
import Sidebar from "./Sidebar";
import NavHead from "./NavHead";
import DeleteConfirm from "./DeleteConfirm";
import axios from "axios";
import { enqueueSnackbar } from "notistack";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

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
  const [imageFile, setImageFile] = useState();
  const [confirmDel, setConfirmDel] = useState(false);
  const [initialValue, setInitialValue] = useState(initialValues);
  const [idToDel, setIdtoDel] = useState("");
  const [cardData, setCardData] = useState([]);
  const [reRender, setReRender] = useState(false);
  const [userId, setUserId] = useState();
  const [userInfo, setUserinfo] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      const gettoken = localStorage.getItem("token");
      if (!gettoken){
        navigate("/login");
         enqueueSnackbar("Please login first", { variant: "warning"})
       }
      const decode = jwtDecode(gettoken);
      const email = decode.email;
      const response = await axios.get(
        `http://localhost:8000/user/data/${email}`
      );
      console.log(response);
      const userData = response.data;
      const newUserInfo = userData[0];
      setUserinfo(newUserInfo);
      const userId = userData[0].userId;
      setUserId(userId);
      const res = await axios.get(`http://localhost:8000/post/${userId}/`);
      const data = res.data;
      setCardData(data);
    };
    getData();
  }, [reRender]);
  console.log(userInfo);
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

  const handleDelete = async (cardId) => {
    console.log(cardId);
    try {
      const response = await axios.delete(
        `http://localhost:8000/delete/post/${cardId}`
      );
      if (response.status === 200) {
        enqueueSnackbar("Deleted successfully", { variant: "success" });
        setConfirmDel(false);
        closeModal();
        setReRender((prev) => !prev);
      }
    } catch (error) {
      // If an error occurs during the deletion process, log the error or show an error message to the user
      console.error("Error deleting card:", error.message);
    }
  };

  const handleCreateClick = () => {
    setImageFile(undefined);
    setInitialValue(initialValues);
    setFormType("create");
    openModal(true);
  };

  const handleEditClick = (item) => {
    setInitialValue({
      id: item._id,
      activityName: item.activityName,
      activityType: item.activityType,
      date: item.date,
      durations: item.durations,
      distance: item.distance,
      description: item.description,
      files: undefined,
    });
    setImageFile(item.imageUrl);
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
              <img src="./Pic-home/logo1.png" alt="logo1" />
            </a>
            <p className="text-[#102C57] font-bold">Proflie</p>
            <a href="/setting">
              <span className="material-icons-outlined">settings</span>
            </a>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 p-3 ">
              {userInfo?.imagePath ? (
                <img
                  src={userInfo?.imagePath}
                  alt="Profile picture"
                  className="rounded-full w-full h-full"
                />
              ) : (
                <img src="./Pic-home/user-circle-2.svg" alt="user" />
              )}
            </div>
            <div className="font-bold">
              <p>{userInfo?.fullName}</p>
            </div>
          </div>
        </div>

        <NavHead handleCreateClick={handleCreateClick} />
        <Sidebar userData={userInfo} />

        <div className="col-span-12 sm:col-span-9 p-3 m-5 ">
          <div className="flex justify-between  ">
            <h1 className="sm:text-[36px] text-[20px] text-[#102C57] font-bold">
              Activity
            </h1>
            <button
              onClick={handleCreateClick}
              className="bg-[#102C57] rounded-lg text-white font-medium p-3 hover:bg-cyan-600 hidden sm:block shadow-xl"
            >
              Create Activity
            </button>
          </div>
          <div>
            <div className="text-[#102C57] sm:text-[24px] text-[18px] font-bold pb-2">
              <h1>My Activity</h1>
            </div>
            <Accordion
              activityCardData={cardData}
              handleEditClick={handleEditClick}
              editButtonShow={true}
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
              initialValue={initialValue}
              formType={formType}
              handleConfirmDelete={handleConfirmDelete}
              setReRender={setReRender}
              imageFile={imageFile}
              setImageFile={setImageFile}
              userId={userId}
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
