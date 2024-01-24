import { useState } from "react";

function Changpassword() {

  const [olePassword , setOldPassword] = useState();
  const [newPassword , setNewPassword] = useState();
  const [confirmnewPassword , setConfirmNewPassword] = useState();
  const [getData , setGetData] = useState();
  
  const handleData = () => {
    const data = {
      newPassword: newPassword,
      confirmnewPassword: confirmnewPassword,
    }
    if (newPassword === confirmnewPassword) {
      setGetData(data)
    } else {
      alert("Newpassword and Confirm Password did't match")
    }
  }

  return (
    <body className="flex flex-col h-screen w-screen justify-start">
      <div className="flex flex-col w-full justify-center items-center mt-20 font-bold">
        <div>i-Move</div>
        <div>Chang Password</div>
        <br />
      </div>
      <div className="flex flex-col justify-center items-center">
        <label htmlFor="currentpassword" className="font-bold">
          Current Password:
        </label>
        <input
          id="currentpassword"
          name="currentpassword"
          type="password"
          placeholder="Current Password"
          className="mt-2 text-center border-gray-300 border rounded border-solid"
          onChange={(e) => setOldPassword(e.target.value)}
          required
        ></input>
        <label htmlFor="currentpassword" className="mt-2 font-bold">
          New Password:
        </label>
        <input
          id="currentpassword"
          name="currentpassword"
          type="password"
          placeholder="New Password"
          className="mt-2 text-center border-gray-300 border rounded border-solid"
          onChange={(e) => setNewPassword(e.target.value)}
          required
        ></input>
        <input
          id="currentpassword"
          name="currentpassword"
          type="password"
          placeholder="Confirm New Password"
          className="mt-2 text-center border-gray-300 border rounded border-solid"
          onChange={(e) => setConfirmNewPassword(e.target.value)}
          required
        ></input>
        <button
          type="summit"
          id="summit"
          className="bg-slate-400 w-32 font-bold mt-5"
          onClick={handleData}
        >
          Summit
        </button>
      </div>
    </body>
  );
}

export default Changpassword;
