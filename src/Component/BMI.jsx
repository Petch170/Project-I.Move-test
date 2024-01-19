import React, { useState } from "react";

const BMI = () => {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBMI] = useState(0);

  const calculateBMI = (e) => {
    e.preventDefault();
    if (!weight || !height) {
      alert("Please enter your weight and height");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / Math.pow(heightInMeters, 2)).toFixed(2);
    setBMI(bmiValue);
  };

  const chekResult = () => {
    if (bmi < 18.5) {
      return "Underweight"; //: น้อยกว่ามาตรฐาน'
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Normal weight"; //: สมส่วน
    } else if (bmi >= 25 && bmi < 29.9) {
      return "Overweight"; //: น้ำหนักเกิน
    } else {
      return "Obese"; //: โรคอ้วน
    }
  };

  return (
    <div className="flex justify-center ">
      {/* className="flex flex-col text-center border px-5 pl-10 border-black bg-blue-500" */}
      <div className="block text-center border p-6 border-green-800 bg-[#EADBC8]">
        <h1 className="text-5xl text-center">BMI Calculator</h1>
        <form className="block items-center m-2 p-8 ">
          <label className="text-xl text-center">
            Weight (kg.)
            <input
              type="text"
              value={weight}
              onChange={(e) => {
                const inputValue = e.target.value;
                const numericValue = inputValue.replace(/[^0-9]/g, "");
                setWeight(numericValue);
              }}
              placeholder="0"
              required
              className="w-[500px] border-b border-black focus:outline-none focus:border-blue-500 flex flex-col pb-4 pt-4 mb-8 text-2xl font-bold text-[#102C57]"
            />
          </label>
          <label className="text-xl text-center">
            Height (cm.)
            <input
              type="text"
              value={height}
              onChange={(e) => {
                const inputValue = e.target.value;
                const numericValue = inputValue.replace(/[^0-9]/g, "");
                setHeight(numericValue);
              }}
              placeholder="0"
              required
              className=" w-[500px] border-b border-black focus:outline-none focus:border-blue-500 flex flex-col pb-4 pt-4 text-2xl font-bold text-[#102C57]"
            />
          </label>
          <button
            type="submit"
            onClick={calculateBMI}
            className=" bg-[#102C57] text-white font-bold w-[500px] h-14 rounded-xl hover:cursor-pointer mt-8"
          >
            Calculator
          </button>
        </form>
        <div className="m-2 px-8 py-2 text-xl text-center">
          <p className=" bg-white pt-8">Your BMI</p>
          <p className=" bg-white font-bold pb-5">{bmi}</p>
        </div>
        <div className="m-2 px-8 py-2 text-center">
          <h2 className="text-xl bg-white pt-8">Result BMI</h2>
          <p className=" text-lg font-bold bg-white pb-5">{chekResult()}</p>
        </div>
        <div className="m-2 px-8 py-2 text-center bg-white">
          <h4 className="text-xl pt-8">BMI Categories</h4>
          <p className="text-lg">Underweight = {"<"}18.5</p>
          <p className="text-lg">Normal weight = 18.5-24.9</p>
          <p className="text-lg">Overweight = 25-29.9</p>
          <p className="text-lg">Obesity = BMI of 30 or greater</p>
        </div>
      </div>
    </div>
  );
};

export default BMI;
