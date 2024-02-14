import React, { useState, useEffect } from "react";
import axios from "axios";
import Login from "../login";
import { Navbarmember } from "../../Component/Register/Navforregister";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";


function Signup() {
  const [fullName, setFullname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [gender, setGender] = useState();
  const [dob, setDob] = useState("");
  // const [saveData, setSaveData] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const gettoken = localStorage.getItem("token");
      // console.log(gettoken);
      const decode = jwtDecode(gettoken);
      // console.log(decode);
      const email = decode.email;
      const lala = { email: email };
      // console.log(lala);
      try {
        if (gettoken != null) {
          const response = await axios.post(
            "https://immove.onrender.com/data",
            lala
          );
          // console.log(response.data); // Example of processing data

          // setSaveData(response.data);
          navigate("/UserHomePage");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handledata = async (e) => {
    e.preventDefault();
    if (!fullName || !email || !password || !confirmPassword || !gender || !dob || !phoneNumber) {
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
        console.log("pass");
        break;
    }

    if (password !== confirmPassword) {
      alert("Password and Confirm Password do not match");
      return;
    }
  
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
      const response = await axios.post("http://127.0.0.1:8000/signup", data);
      console.log(response);
      if (response.status === 200 && response.data) {
        navigate("/login");
      }
    } catch (error) {
      console.error("Signup error:", error);
      if (error.response.status === 400 && error.response.data.error === 'Email already exists') {
        alert("error: Email already exists");
      } else {
        alert("Signup failed. Please try again.");
      }
    }
  };
  

  return (
    <>
      <Navbarmember />
      <div className="flex h-screen w-screen mb-5">
      <div className="flex-1 h-full w-1/2 border-r-4 hidden md:flex">
          <div
            id="img"
            className="items-center content-center w-screen h-screen aspect-auto"
          >
            <img
              src="https://images.unsplash.com/photo-1704999638827-cd0a7fed5c1c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8"
              alt="image left"
              className="min-w-full min-h-full"
            />
          </div>
        </div>

        {/* right side */}

        <div className="flex-1 flex justify-center h-full items-center flex-col">
          <div className="flex flex-row">
            <img
              className="nav w-14 h-14"
              src="public\Pic-home\logo1.png"
              alt="icon"
            />
            <div className=" flex flex-col justify-center font-bold text-xl">i-move</div>
          </div>
          <div className="font-bold">Sign Up</div>
          <br />
          <form onSubmit={handledata}>
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
              <label
                htmlFor="confirm-password"
                className="flex flex-row justify-start mt-1"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
                placeholder="Confirm Password"
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
                title="Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, and one number."
                className="border-solid border-2 border-[#c7c7c7] rounded-md"
                onChange={(e) => setConfirmPassword(e.target.value)}
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
