import { useState } from "react";

function Signup() {
  const [getData, setGetData] = useState();
  const [fullName, setFullname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [phoneNumber, setPhoneNumber] = useState();

  const handledata = () => {
    const data = {
      fullName: fullName,
      email: email,
      password: password,
      phoneNumber: phoneNumber,
    };
    setGetData(data);
  };

  return (
    <body className="flex h-screen w-screen ">
      <div className="flex flex-row w-1/2 h-screen aspect-auto">
        <img
          className="w-full"
          src="https://images.unsplash.com/photo-1704999638827-cd0a7fed5c1c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8"
          alt="picture"
        />
      </div>
      <div className="flex flex-col w-1/2 h-screen justify-center">
        <div>i-Move</div>
        <br />
        <div>Sign Up</div>
        <br />
        <div>
          <label
            htmlFor="Fullname"
            className="flex flex-row justify-start ml-10"
          >
            Fullname
          </label>
          <input
            className="flex flex-row justify-start ml-10 w-full"
            type="text"
            id="Fullname"
            name="Fullname"
            placeholder="Enter Your Name"
            onChange={(e) => setFullname(e.target.value)}
          ></input>
          <label htmlFor="e-mail" className="flex flex-row justify-start ml-10">
            E-mail
          </label>
          <input
            className="flex flex-row justify-start ml-10 w-full"
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
            className="flex flex-row justify-start ml-10 w-full"
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
            className="flex flex-row justify-start ml-10 w-screen"
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
  );
}

export default Signup;
