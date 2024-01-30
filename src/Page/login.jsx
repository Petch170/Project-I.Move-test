import React , { useState } from "react";
import Navbarhome from "../Component/Navbarhome";

function Login() {
  const [getData, setGetData] = useState();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleData = () => {
    const data = {
      userName: userName,
      password: password,
    };
    setGetData(data);
  };

  return (
    // <Nav />
    <>
    <Navbarhome />
    <body class="flex h-screen ">
      {/* left content */}
      <div class="flex-1 h-full w-1/2 border-r-4 ">
        <div
          id="img"
          className="flex items-center content-center items-center "
        >
          <img
            src="https://images.unsplash.com/photo-1705078368218-6252bc56a644?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"
            alt="image left"
          />
        </div>
      </div>

      {/* right content */}
      <div class="flex-1 flex justify-center h-full items-center flex-col ">
        <div class="w-1/2 bg-blue-300 p-4 flex justify-center ">i-move</div>
        <div>Login</div>
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
            className="mt-3 mb-3"
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
            className="mt-3"
          ></input>
        </div>
        <div id="forgotpassword" className="flex flex-row justify-end ">
          <a href="#" className="text-xs flex justify-end">
            Forgot password
          </a>
        </div>
        <div className="mt-3">
          <button type="summit" onClick={handleData} className="mr-5 border-2 border-indigo-600">
            Login
          </button>
          <button type="reset" className="border-2 border-indigo-600">Clear</button>
        </div>
      </div>
    </body>
    </>
  );
}

export default Login;
