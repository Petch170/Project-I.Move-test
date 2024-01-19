import React, { useState } from "react";

export default function ModalForm({ closeModal, handleCreate }) {
  const [activityName, setActivityName] = useState();
  const [activityType, setActivityType] = useState();
  const [date, setDate] = useState();
  const [durations, setDurations] = useState();
  const [distance, setDistance] = useState();
  const [description, setDescription] = useState();
  return (
    <>
      <div className="flex justify-end cursor-pointer">
        <span class="material-icons-outlined" onClick={closeModal}>
          close
        </span>
      </div>
      <div className="flex flex-col justify-center bg-[#EADBC8]">
        <div className="flex justify-center">
          <h1 className="font-bold text-[#102C57] text-3xl p-4">
            Create Activity
          </h1>
        </div>
        <div className="p-4 text-center	text-[#102C57] font-semibold flex justify-center">
          <label class="bg-[#102C57] hover:bg-cyan-600 duration-150 text-white font-semibold py-2 px-4 rounded cursor-pointer w-1/4 ">
            <input type="file" class="hidden" /> Upload Image
          </label>
        </div>
      </div>
      <div className="grid grid-cols-2 bg-[#EADBC8] ">
        <div className="p-4 text-[#102C57] font-semibold">
          <label for="Activity Name">Activity Name : </label>
          <input
            type="text"
            id="Activity Name"
            placeholder="Enter Activity Name"
            className="rounded-md p-2 peer-invalid:visible"
            onChange={(ev) => setActivityName(ev.target.value)}
          ></input>
        </div>
        <div className="p-4 text-[#102C57] font-semibold flex flex-col">
          <label for="Activity Type">Activity Type : </label>
          <select
            id="Activity Type"
            name="Activity Type"
            className="rounded-md p-2"
            onChange={(ev) => setActivityType(ev.target.value)}
          >
            <option value="Choose Activity">Choose Activity</option>
            <option value="Running">Running</option>
            <option value="Cycling">Cycling</option>
            <option value="Swimming">Swimming</option>
            <option value="Badminton">Badminton</option>
            <option value="Walking">Walking</option>
          </select>
        </div>
        <div className="p-4 text-[#102C57] font-semibold flex flex-col">
          <label for="Date">Date : </label>
          <input
            type="date"
            name="Date"
            id="Date"
            className="rounded-md p-2"
            onChange={(ev) => setDate(ev.target.value)}
          ></input>
        </div>
        <div className="p-4 text-[#102C57] font-semibold flex flex-col">
          <label for="Durations">Durations : </label>

          <select
            id="Durations"
            name="Durations"
            className="rounded-md p-2"
            onChange={(ev) => setDurations(ev.target.value)}
          >
            <option value="Durations">Durations</option>
            <option value="20 minutes">20 minutes</option>
            <option value="30 minutes">30 minutes</option>
            <option value="1 hr">1 hr</option>
            <option value="2 hr">2 hr</option>
            <option value="3 hr">3 hr</option>
            <option value="4 hr">4 hr</option>
            <option value="5 hr">5 hr</option>
          </select>
        </div>
        <div className="p-4 text-[#102C57] font-semibold flex flex-col">
          <label for="Distance">Distance : </label>
          <input
            type="text"
            id="Distance"
            name="Distance"
            placeholder="Distance(KM)"
            className="rounded-md p-2"
            onChange={(ev) => setDistance(ev.target.value)}
          ></input>
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
            onChange={(ev) => setDescription(ev.target.value)}
          ></textarea>
        </div>
      </div>
      <div className="flex justify-center">
        <button
          className="bg-[#102C57] rounded-lg text-white font-medium p-1 m-4 hover:bg-cyan-600 w-1/4"
          onClick={() =>
            handleCreate(
              activityName,
              activityType,
              date,
              durations,
              distance,
              description
            )
          }
        >
          Summit
        </button>
      </div>
    </>
  );
}
