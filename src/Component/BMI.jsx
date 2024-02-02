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

  const checkResult = () => {
    if (bmi < 18.5) {
      return "Underweight"; //: น้อยกว่ามาตรฐาน'
    } else if (bmi >= 18.5 && bmi < 24.9) {
      return "Healthy Weight"; //: สมส่วน
    } else if (bmi >= 25 && bmi < 29.9) {
      return "Overweight"; //: น้ำหนักเกิน
    } else {
      return "Obese"; //: โรคอ้วน
    }
  };

  const classColor = () => {
    if (bmi < 18.5) return "text-gray-500";
    if (bmi <= 24.9) return "text-green-500"; 
    if (bmi <= 29.9) return "text-yellow-500"; 
    return "text-red-500";
  };

  return (
    <div className=" flex justify-center p-8 bg-[#EADBC8]">
      <div className=" ">
        <div className=" card w-[400px] md:w-[650px] lg:max-w-screen-lg">
          <h1 className=" font-bold text-center text-lg md:text-2xl xl:text-5xl text-[#102C57]">
            BMI Calculator
          </h1>
          <form className="mt-4 text-base lg:text-lg xl:text-2xl">
            <label className="">
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
                className="block w-full mt-1 h-14 rounded-lg"
              />
            </label>
            <label className="block mt-4">
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
                className="block w-full mt-1 h-14 rounded-lg"
              />
            </label>
            <button
              type="submit"
              onClick={calculateBMI}
              className="bg-[#102C57] w-full mt-6 text-white py-3 rounded-lg"
            >
              Calculator
            </button>
          </form>
        </div>

        <div className="bmi-calculator">
          <div className="card-block my-10 ">
            <div className="bmi-calculator_result font-bold text-center text-xl md:text-2xl xl:text-4xl text-[#102C57] py-3">
              <h3 className="text-center font-mono ">
                You BMI = <span className="bmi-result">"{bmi}"</span>
              </h3>
            </div>
            <div className="text-center text-base md:text-lg xl:text-2xl ">
              <p>
                You are in the{" "}
                <span className={`weight-range text-md md:text-xl xl:text-3xl font-bold font-mono ${classColor()}`}>
                  "{checkResult()}"
                </span>{" "}
              </p>
            </div>
          </div>
          <div className=" flex justify-center">
            <div className="">
              <p className=" text-center font-bold text-md md:text-xl xl:text-3xl underline pb-5">
                BMI Weight ranges
              </p>
              <ul className=" text-left text-sm md:text-lg xl:text-2xl text-wrap">
                <li>Less than 18.5 = <span className="text-gray-500">Underweight</span> </li>
                <li>Between 18.5 - 24.9 = <span className="text-green-500">Healthy Weight</span> </li>
                <li>Between 25 - 29.9 = <span className="text-yellow-500">Overweight</span></li>
                <li>Over 30 = <span className="text-red-500">Obese</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMI;
