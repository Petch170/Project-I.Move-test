import React, { useEffect, useState } from "react";
import Navbarhome from "../Component/Navbarhome";
import axios from "axios";
import { Navbarmember } from "../Component/Register/Navforregister";
import { useNavigate } from "react-router-dom";

import { jwtDecode } from "jwt-decode";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [saveData, setSaveData] = useState("");
  // console.log(saveData);

  const navigate = useNavigate();

  const handleData = async () => {
    const data = {
      email: email,
      password: password,
    };
    // get data
    // console.log(data);
    try {
      const resposedata = await axios.post("http://127.0.0.1:8000/login", data);
      if (resposedata.status === 200 && resposedata.data.token != null) {
        localStorage.setItem("token", resposedata.data.token);
        navigate("/UserHomePage");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          const response = await axios.post("http://127.0.0.1:8000/data", lala);
          // console.log(response.data); // Example of processing data

          setSaveData(response.data);
          navigate("/UserHomePage");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbarmember />
      <div className="flex h-screen">
        {/* left content */}
        <div className="flex-1 h-full w-1/2 border-r-4 hidden md:flex">
          <div
            id="img"
            className="items-center content-center w-screen h-screen aspect-auto"
          >
            <img
              src="https://images.unsplash.com/photo-1705078368218-6252bc56a644?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"
              alt="image left"
              className="min-w-full min-h-full"
            />
          </div>
        </div>

        {/* right content */}
        <div className="flex-1 flex justify-center h-full items-center flex-col ">
          <div className="flex flex-row">
            <img
              className="nav w-14 h-14"
              src="public\Pic-home\logo1.png"
              alt="icon"
            />{" "}
            <div className=" flex flex-col justify-center font-bold text-xl">
              i-move
            </div>
          </div>
          <div className="font-bold">Login</div>
          <div id="input" className="mt-3">
            <label htmlFor="email" className="mt-3">
              E-Mail:
            </label>{" "}
            <br />
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Enter your E-Mail"
              onChange={(e) => setEmail(e.target.value)}
              className="mt-2 mb-2 border-solid border-2 border-[#c7c7c7] rounded-md"
            ></input>{" "}
            <br />
            <label htmlFor="password" className="mt-3">
              Password:
            </label>{" "}
            <br />
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="mt-2 border-solid border-2 border-[#c7c7c7] rounded-md"
            ></input>
            <div id="forgotpassword" className="flex flex-row justify-end ">
              <a href="/forgotpassword" className="text-xs flex justify-end">
                Forgot password
              </a>
            </div>
          </div>

          <div className="mt-3 flex justify-center">
            <button
              type="summit"
              onClick={handleData}
              className="bg-[#102C57] text-white hover:bg-[#c7c7c7] mr-5 border-2 rounded-md"
            >
              <div className="pl-5 pr-5 pt-1 pb-1">Login</div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
