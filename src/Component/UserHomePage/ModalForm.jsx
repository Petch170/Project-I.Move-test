import axios from "axios";
import { enqueueSnackbar } from "notistack";
import React, { useState } from "react";

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
export default function ModalForm({
  closeModal,
  initialValue,
  formType,
  handleConfirmDelete,
  setReRender,
  imageFile,
  setImageFile,
  userId,
}) {
  const [inputData, setInputData] = useState(initialValue);
  const [validate, setValidate] = useState({
    activityName: "",
    activityType: "",
    date: "",
    durations: "",
    distance: "",
    files: "",
  });

  const handleOnChangeInputData = (key, value) => {
    setInputData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async () => {
    if (
      !inputData.activityName ||
      !inputData.activityType ||
      !inputData.date ||
      !inputData.durations ||
      !inputData.distance
    ) {
      setValidate({
        activityName: !inputData.activityName ? "Activity Name is required" : "",
        activityType: !inputData.activityType ? "Activity Type is required" : "",
        date: !inputData.date ? "Date is required" : "",
        durations: !inputData.durations ? "Durations is required" : "",
        distance: !inputData.distance ? "Distance is required" : "",
        files: !inputData.files ? "Image is required" : "",
      });
      return;
    }
    if (formType === "edit") {
      const formData = new FormData();
      formData.append("activityName", inputData.activityName);
      formData.append("activityType", inputData.activityType);
      formData.append("date", inputData.date);
      formData.append("durations", inputData.durations);
      formData.append("distance", inputData.distance);
      formData.append("description", inputData.description);
      if (inputData.files) {
        formData.append("imageUrl", inputData.files);
      }
      formData.append("oldImageUrl", imageFile);
      const res = await axios.put(
        `http://localhost:8000/edit/post/${inputData.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (res.status === 200) {
        enqueueSnackbar("Edited successfully", { variant: "success" });
        console.log("Create Complete!");
      }
      setInputData(initialValues);
      closeModal();
      setReRender((prev) => !prev);
    } else if (formType === "create") {
      const formData = new FormData();
      formData.append("userId", userId);
      formData.append("activityName", inputData.activityName);
      formData.append("activityType", inputData.activityType);
      formData.append("date", inputData.date);
      formData.append("durations", inputData.durations);
      formData.append("distance", inputData.distance);
      formData.append("description", inputData.description);
      formData.append("imageUrl", inputData.files);
      const res = await axios.post(`http://localhost:8000/post/`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      if (res.status === 201) {
        enqueueSnackbar("Create activity successfully", { variant: "success" });
        console.log("Create Complete!");
      }
     
      setInputData(initialValues);
      closeModal();
      setReRender((prev) => !prev);
    }
  };

  return (
    <div className=" sm:grid-cols-2 p-4 ">
      <div className="flex justify-end cursor-pointer ">
        <span class="material-icons-outlined" onClick={closeModal}>
          close
        </span>
      </div>
      <div className="flex flex-col justify-center bg-[#EADBC8]">
        <div className="flex justify-center">
          {formType === "edit" ? (
            <h1 className="font-bold text-[#102C57] text-3xl p-4">
              Edit Activity
            </h1>
          ) : (
            <h1 className="font-bold text-[#102C57] text-3xl p-4 ">
              Create Activity
            </h1>
          )}
        </div>
        <div className="p-4 text-center	text-[#102C57] font-semibold flex flex-col items-center">
          {imageFile ? (
            <div className="w-[300px] h-[200px] flex justify-center">
              <img src={imageFile} className="object-scale-down h-full  " />
            </div>
          ) : null}
          <label class="bg-[#102C57] hover:bg-cyan-600 duration-150 text-white font-semibold py-2 px-4 rounded cursor-pointer sm:w-1/4 ">
            <input
              type="file"
              class="inputfile"
              accept="image/png, image/gif, image/jpeg"
              onChange={(ev) => {
                if (ev) {
                  handleOnChangeInputData("files", ev.target.files[0]);
                  setImageFile(URL.createObjectURL(ev.target.files[0]));
                  console.log(ev.target.files[0]);
                }
              }}
            />{" "}
            Upload Image
          </label>
          {validate.files ? (<span className="text-red-500">{validate.files}</span>):null}
        </div>
      </div>
      <div className="grid sm:grid-cols-2  bg-[#EADBC8] ">
        <div className="p-4 text-[#102C57] font-semibold">
          <label for="Activity Name">Activity Name : </label>

          <input
            type="text"
            id="Activity Name"
            placeholder="Enter Activity Name"
            className="rounded-md p-2 peer-invalid:visible"
            onChange={(ev) =>
              handleOnChangeInputData("activityName", ev.target.value)
            }
            defaultValue={inputData.activityName}
          ></input>
          {validate.activityName ? (<span className="text-red-500">{validate.activityName}</span>):null}
        </div>
        <div className="p-4 text-[#102C57] font-semibold flex flex-col">
          <label for="Activity Type">Activity Type : </label>
          <select
            id="Activity Type"
            name="Activity Type"
            className="rounded-md p-2"
            onChange={(ev) =>
              handleOnChangeInputData("activityType", ev.target.value)
            }
            defaultValue={inputData.activityType}
          >
            <option value="Choose Activity">Choose Activity</option>
            <option value="Running">Running</option>
            <option value="Cycling">Cycling</option>
            <option value="Swimming">Swimming</option>
            <option value="Badminton">Badminton</option>
            <option value="Walking">Walking</option>
          </select>
          {validate.activityType ? (<span className="text-red-500">{validate.activityType}</span>):null}
        </div>
        <div className="p-4 text-[#102C57] font-semibold flex flex-col">
          <label for="Date">Date : </label>
          <input
            type="date"
            name="Date"
            id="Date"
            className="rounded-md p-2"
            onChange={(ev) => handleOnChangeInputData("date", ev.target.value)}
            defaultValue={inputData.date}
          ></input>
          {validate.date ? (<span className="text-red-500">{validate.date}</span>):null}
        </div>
        <div className="p-4 text-[#102C57] font-semibold flex flex-col">
          <label for="Durations">Durations : </label>

          <select
            id="Durations"
            name="Durations"
            className="rounded-md p-2"
            onChange={(ev) =>
              handleOnChangeInputData("durations", ev.target.value)
            }
            defaultValue={inputData.durations}
          >
            <option value="Durations">Durations</option>
            <option value={20}>20 minutes</option>
            <option value={30}>30 minutes</option>
            <option value={60}>1 hr</option>
            <option value={120}>2 hr</option>
            <option value={180}>3 hr</option>
            <option value={240}>4 hr</option>
            <option value={350}>5 hr</option>
          </select>
          {validate.durations ? (<span className="text-red-500">{validate.durations}</span>):null}
        </div>
        <div className="p-4 text-[#102C57] font-semibold flex flex-col">
          <label for="Distance">Distance : </label>
          <select
            id="Distance"
            name="Distance"
            className="rounded-md p-2"
            onChange={(ev) =>
              handleOnChangeInputData("distance", ev.target.value)
            }
            defaultValue={inputData.distance}
          >
            <option value="Distance">Distance</option>
            <option value={0}>-</option>
            <option value={1000}>1 km</option>
            <option value={2000}>2 km</option>
            <option value={3000}>3 km</option>
            <option value={4000}>4 km</option>
            <option value={5000}>5 km</option>
            <option value={6000}>6 km</option>
            <option value={7000}>7 km</option>
            <option value={8000}>8 km</option>
            <option value={10000}>10 km</option>
            <option value={20000}>20 km</option>
          </select>
          {validate.distance ? (<span className="text-red-500">{validate.distance}</span>):null}
        </div>
        <div className="p-4 text-[#102C57] font-semibold flex flex-col">
          <label for="Description" className="">
            Description :
          </label>
          <textarea
            id="Description"
            name="Description"
            className="rounded-md"
            placeholder="How you feeling today? 😊"
            onChange={(ev) =>
              handleOnChangeInputData("description", ev.target.value)
            }
            defaultValue={inputData.description}
          ></textarea>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-[#102C57] rounded-lg text-white font-medium p-1 m-4 hover:bg-cyan-600 w-1/4 shadow-xl"
          onClick={handleSubmit}
        >
         Submit
        </button>
        
      </div>
      {formType === "edit" ? (
        <div className="flex justify-end cursor-pointer ">
          <span
            className="material-icons-outlined"
            onClick={() => handleConfirmDelete(inputData.id)}
          >
            delete_sweep
          </span>
        </div>
      ) : null}
    </div>
  );
}
