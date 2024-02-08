import React, { useState } from "react";
import Navbarhome from "../../Component/Navbarhome";
import axios from "axios";
import { redirect } from "react-router-dom";
import Login from "../login";
import { Navbarmember } from "../../Component/Register/Navforregister";

function Signup() {
  const [fullName, setFullname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [gender, setGender] = useState();
  const [dob, setDob] = useState("");



  const handledata = async () => {
    if (!fullName || !email || !password || !gender || !dob || !phoneNumber) {
      alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
      return;
    }

    // ตรวจสอบ pattern ของอีเมล
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    // ตรวจสอบ pattern ของพาสเวิร์ด
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    // ตรวจสอบ pattern ของเบอร์โทรศัพท์
    const phonePattern = /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/;

    switch (true) {
      case !emailPattern.test(email):
        alert("รูปแบบอีเมลไม่ถูกต้อง");
        return;
      case !passwordPattern.test(password):
        alert("รูปแบบพาสเวิร์ดไม่ถูกต้อง");
        return;
      case !phonePattern.test(phoneNumber):
        alert("รูปแบบเบอร์โทรศัพท์ไม่ถูกต้อง");
        return;
      default:
        // Continue with the rest of your code
        break;
    };

    const data = {
      fullName: fullName,
      email: email,
      password: password,
      gender: gender,
      dob: dob,
      phoneNumber: phoneNumber,
      typemem: "individual",
    };

        try {
      const response = await axios.post(
        "https://immove.onrender.com/signup",
        data
      );
      console.log(response);

      // Redirect to login page after successful signup
      // history.push("/login");
    } catch (error) {
      console.error("Signup error:", error);
      // Handle signup error, show appropriate message to user
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <>
      <Navbarmember />
      <div className="flex h-screen w-screen mb-5">
        <div className="flex flex-row w-1/2 h-screen aspect-auto">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1704999638827-cd0a7fed5c1c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8"
            alt="picture"
          />
        </div>

        {/* right side */}

        <div className="flex flex-col w-1/2 h-screen justify-center items-center">
          <div className="flex flex-row">
            <img
              className="nav w-14 h-14"
              src="src\assets\Pic-home\logo1.png"
              alt="icon"
            />{" "}
            <div className="pt-5 flex justify-center font-bold">i-move</div>
          </div>
          <div className="font-bold">Sign Up</div>
          <br />
          <form>
            <div className="flex flex-col items-start ">
              <label htmlFor="Fullname" className="flex flex-row justify-start">
                Full name
              </label>
              <input
                type="text"
                id="Fullname"
                name="Fullname"
                placeholder="Enter Your Name"
                className="border-solid border-2 border-[#c7c7c7] rounded-md"
                onChange={(e) => setFullname(e.target.value)}
                required
              ></input>
              <label
                htmlFor="e-mail"
                className="flex flex-row justify-start mt-1"
              >
                E-mail
              </label>
              <input
                type="email"
                id="e-mail"
                name="e-mail"
                placeholder="Enter Your E-mail"
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                title="Please enter a valid email address"
                className="border-solid border-2 border-[#c7c7c7] rounded-md"
                onChange={(e) => setEmail(e.target.value)}
                required
              ></input>
              <label
                htmlFor="password"
                className="flex flex-row justify-start mt-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Your Password"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                title="Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, and one number."
                className="border-solid border-2 border-[#c7c7c7] rounded-md"
                onChange={(e) => setPassword(e.target.value)}
                required
              ></input>
              <div className="mt-2">Gender </div>
              <div className="flex flex-row">
                <label htmlFor="male" className="flex flex-row justify-start ">
                  Male
                </label>
                <input
                  type="radio"
                  id="male"
                  name="gender"
                  value="male"
                  onChange={(e) => setGender(e.target.value)}
                  required
                ></input>
                <label
                  htmlFor="female"
                  className="flex flex-row justify-start ml-3 "
                >
                  Female
                </label>
                <input
                  type="radio"
                  id="female"
                  name="gender"
                  value="female"
                  onChange={(e) => setGender(e.target.value)}
                  required
                ></input>
              </div>
              <label className="mt-2" htmlFor="dob">
                Date of Birth:
              </label>
              <input
                type="date"
                id="dob"
                name="dob"
                onChange={(e) => setDob(e.target.value)}
                required
              />
              <label
                htmlFor="phonenumber"
                className="flex flex-row justify-start mt-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phonenumber"
                name="phonenumber"
                placeholder="Phone number"
                className="border-solid border-2 border-[#c7c7c7] rounded-md"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                title="Please enter phone number in the format xxx-xxx-xxxx"
                onChange={(e) => setPhoneNumber(e.target.value)}
                required
              ></input>

              <div className="mt-5 flex flex-col justify-center">
                <button
                  className="bg-[#102C57] text-white hover:bg-[#c7c7c7] pt-1 pb-1 border-2 rounded-md"
                  type="summit"
                  onClick={handledata}
                >
                  Register
                </button>

                <p className="mt-1 font-bold text-center">
                  Already have an account
                </p>
                <a
                  className="mt-1 text-center bg-[#102C57] text-white hover:bg-[#c7c7c7] pt-1 pb-1 border-2 rounded-md"
                  href="/login"
                >
                  Login
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
