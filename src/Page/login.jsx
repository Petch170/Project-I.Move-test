// import Nav from './Nav';

import { useState } from "react";

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
        <div id="input">
          <label for="username">Username:</label> <br />
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Enter your username"
            onChange={(e) => setUserName(e.target.value)}
          ></input>{" "}
          <br />
          <label for="password">Password:</label> <br />
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div id="forgotpassword" className="flex flex-row justify-end ">
          <a href="#">Forgot password</a>
        </div>
        <div className="#">
          <button type="summit" onClick={handleData}>
            Login
          </button>
          <button type="reset">Clear</button>
        </div>
      </div>
    </body>
  );
}

export default Login;
