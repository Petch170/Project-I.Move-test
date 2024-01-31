import React, { useState } from "react";
import Navbarhome from "../Component/Navbarhome";
import axios from "axios";
import { redirect } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleData = async () => {
    const data = {
      userName: userName,
      password: password,
    };
    // get data
    // console.log(data);
    try {
      const resposedata = await axios.post("http://127.0.0.1:3001/login", data);
      if (resposedata.status === 200 && resposedata.data) {
        redirect("/UserHomePage")
      } else {
      }
    } catch (error) {console.log(error);}
  };

  return (
    // <Nav />
    <>
      <Navbarhome />
      <body class="flex h-screen">
        {/* left content */}
        <div class="flex-1 h-full w-1/2 border-r-4 ">
          <div
            id="img"
            className="flex items-center content-center w-full h-full aspect-auto "
          >
            <img
              src="https://images.unsplash.com/photo-1705078368218-6252bc56a644?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"
              alt="image left" 
            />
          </div>
        </div>

        {/* right content */}
        <div className="flex-1 flex justify-center h-full items-center flex-col ">
          <div className="flex flex-row">
        <img className="nav w-14 h-14" src="src\assets\Pic-home\logo1.png" alt="icon" /> <div className="pt-5 flex justify-center font-bold">i-move</div></div>
            <div className="font-bold">Login</div>
          <div id="input" className="mt-3">
            <label for="username" className="mt-3">
              Username:
            </label>{" "}
            <br />
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              onChange={(e) => setUserName(e.target.value)}
              className="mt-2 mb-2 border-solid border-2 border-[#c7c7c7] rounded-md"
            ></input>{" "}
            <br />
            <label for="password" className="mt-3">
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
            <a href="#" className="text-xs flex justify-end">
              Forgot password
            </a>
          </div>
          </div>
          
          <div className="mt-3 flex justify-center">
            <button
              type="summit"
              onClick={handleData}
              className="bg-[#102C57] text-white hover:bg-[#c7c7c7] mr-5 border-2 rounded-md"
            ><div className="pl-5 pr-5 pt-1 pb-1">Login</div>
              
            </button>
            <button type="reset" className="bg-[#102C57] text-white hover:bg-[#c7c7c7] mr-5 border-2 rounded-md">
            <div className="pl-5 pr-5 pt-1 pb-1">Clear</div>
              
            </button>
          </div>
        </div>
      </body>
    </>
  );
}

export default Login;
