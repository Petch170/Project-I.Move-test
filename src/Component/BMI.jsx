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
      return "Normal weight"; //: สมส่วน
    } else if (bmi >= 25 && bmi < 29.9) {
      return "Overweight"; //: น้ำหนักเกิน
    } else {
      return "Obese"; //: โรคอ้วน
    }
  };

  const classColor = () => {
    if (bmi < 18.5) return "text-gray-500";
    if (bmi < 22.9) return "text-green-500";
    if (bmi < 24.9) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div className="grid place-items-center col-span-12 md:col-span-8 lg:col-span-6 2xl:col-span-2 bg-[#EADBC8]  mx-[7.5px] md:mx-[30px]">
      <div className=" ">
        <div className=" card">
          <h1 className=" font-bold text-center text-lg md:text-2xl text-[#102C57]">
            BMI Calculator
          </h1>
          <form className="mt-4 text-base lg:text-lg xl:text-2xl">
            <label className="block">
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
                className="block w-full mt-1 h-10 rounded-lg"
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
                className="block w-full mt-1 h-10 rounded-lg"
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
          <div className="card-block  ">
            <div className="bmi-calculator_result font-bold text-center text-md md:text-xl xl:text-3xl text-[#102C57] py-3">
              <h3 className="text-center font-mono ">
                You BMI = <span className="bmi-result">"{bmi}"</span>
              </h3>
            </div>
            <div className="text-center text-base md:text-lg xl:text-2xl ">
              <p>
                You are in the{" "}
                <span
                  className={`weight-range text-md md:text-xl xl:text-3xl ${classColor()}`}
                >
                  {checkResult()}
                </span>{" "}
              </p>
            </div>
          </div>
          <div className=" flex justify-center">
            <div className="py-5">
              <p className=" text-center font-bold text-md md:text-xl underline">
                BMI weight ranges
              </p>
              <ul className=" text-left  text-base  text-md md:text-xl text-wrap">
                <li>Less than 18.5 = Underweight</li>
                <li>Between 18.5 - 24.9 = Healthy Weight</li>
                <li>Between 25 - 29.9 = Overweight</li>
                <li>Over 30 = Obese</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMI;
