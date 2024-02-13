import axios from "axios";
import { useState } from "react";
import { set } from "react-hook-form";
import { Navbarmember } from "../../Component/Register/Navforregister";

function ForgotPassword() {
  const [email, setEmail] = useState();

  const handleData = async () => {
    const getemail = {
      email: email,
    };



    const responseEmail = await axios.post("http://127.0.0.1:8000/data", getemail);
    console.log(responseEmail);
    try {
      if (responseEmail.status === 200 && responseEmail.data) {
        console.log(responseEmail);
      } else {
        //
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbarmember />
      <form>
        <div className="flex flex-col h-screen justify-start pt-40">
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row">
              <img
                className="nav w-14 h-14"
                src="public\Pic-home\logo1.png"
                alt="icon"
              />
              <div className=" flex flex-col justify-center font-bold text-xl">
                i-move
              </div>
            </div>
            <div className="flex flex-col justify-center font-bold text-base">
              FORGOT PASSWORD
            </div>
            <br />
          </div>
          <div className="flex flex-row justify-center">
            <label
              htmlFor="forgotpassword"
              className="flex flex-col justify-center"
            >
              E-Mail :
            </label>
            <input
              type="email"
              id="forgotpassword"
              name="forgotpassword"
              className="border-solid border-2 border-[#c7c7c7] rounded-md"
              placeholder="example@example.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mt-2 flex flex-row justify-center ">
          <button
            type="summit"
            className="bg-[#102C57] text-white hover:bg-[#c7c7c7] pt-1 pb-1 pr-2 pl-2 border-2 rounded-md"
            onClick={handleData}
          >
            Summit
          </button>
          </div>
        </div>
      </form>
    </>
  );
}

export default ForgotPassword;
