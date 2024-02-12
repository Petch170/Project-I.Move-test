import React, { useState } from "react";

export default function DeleteConfirm({ handleDelete, id, closeConfirm }) {
  return (
    <div className="bg-[#EADBC8] ">
      <div className="text-center font-bold p-10 text-[#102C57] text-2xl  ">
        <p>Are you sure you want to delete this item?</p>
      </div>
      <div className="flex justify-center gap-20">
        <div className="bg-[#102C57] hover:bg-red-500 rounded-lg border-[#102C57] text-white font-semibold p-4 text-xl border-solid border-2">
          <button onClick={() => handleDelete(id)}>Confirm</button>
        </div>
        <div className="bg-white text-[#102C57] border-[#102C57] font-semibold rounded-lg border-solid border-2 p-4 text-xl hover:bg-sky-100">
          <button onClick={closeConfirm}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
