import React, { useState } from "react";
import Navbarhome from "../../Component/Navbarhome";
import axios from "axios";

function Signup() {
  const [fullName, setFullname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const handledata = async () => {
    const data = {
      fullName: fullName,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
    };
    const response = await axios.post("#", data);
    console.log(response);

    // dont forget encryp password before send data
    // waiting for check something from backend

    try {
      if (response.status === 200 && response.data) {
        await response(data);
        // redirect here
      } else {
        //
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbarhome />
      <body className="flex h-screen w-screen">
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
          <div className="flex flex-col items-center ">
            <label
              htmlFor="Fullname"
              className="flex flex-row justify-start ml-10"
            >
              Fullname
            </label>  
            <input
              type="text"
              id="Fullname"
              name="Fullname"
              placeholder="Enter Your Name"
              onChange={(e) => setFullname(e.target.value)}
            ></input>
            <label
              htmlFor="e-mail"
              className="flex flex-row justify-start ml-10"
            >
              E-mail
            </label>
            <input
              type="email"
              id="e-mail"
              name="e-mail"
              placeholder="Enter Your E-mail"
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label
              htmlFor="password"
              className="flex flex-row justify-start ml-10"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <label
              htmlFor="phonenumber"
              className="flex flex-row justify-start ml-10"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phonenumber"
              name="phonenumber"
              placeholder="Enter Your Phone number"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              title="Please enter phone number in the format xxx-xxx-xxxx"
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            ></input>
            <button type="summit" onClick={handledata}>
              Register
            </button>
            <p>Already have an account</p>
            <a href="#">Login</a>
          </div>
        </div>
      </body>
    </>
  );
}

export default Signup;
