import axios from "axios";
import { useState } from "react";
import { Navbarmember } from "../../Component/Register/Navforregister";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [showInput, setShowInput] = useState(false); // สร้าง state เพื่อเก็บค่าเพื่อแสดงหรือซ่อน ID
  const [submitted, setSubmitted] = useState(false); // สร้าง state เพื่อติดตามว่า "Submit" ถูกกดหรือไม่

  const handleData = async () => {
    const getemail = {
      email: email,
    };

    const responseEmail = await axios.post("#", getemail);
    console.log(responseEmail);
    try {
      if (responseEmail.status === 200 && responseEmail.data) {
        console.log(responseEmail);
        setShowInput(true); // เปลี่ยนค่า state เมื่ออีเมลถูกต้อง
        setSubmitted(true); // เปลี่ยนค่า state เมื่อ "Submit" ถูกกด
      } else {
        setShowInput(false); // เปลี่ยนค่า state เมื่ออีเมลไม่ถูกต้อง
        setSubmitted(true); // เปลี่ยนค่า state เมื่อ "Submit" ถูกกด
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
          <div className={`flex-col justify-center items-center ${showInput ? "" : "hidden"}`} id="changpassword">
            <div>
              <label htmlFor="date">Date of Birth:</label>
              <input type="date" id="date" name="date" className="ml-2 mt-2"></input>
            </div>
            <div className="mt-2">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter Your Password"
                className="ml-2"
              ></input>
            </div>
            <div className="mt-2">
              <label htmlFor="confirmpassword">Confirm Password:</label>
              <input
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                placeholder="Enter Your Password"
                className="ml-2"
              ></input>
            </div>
          </div>
          {/* show when correct email */}
          <div className="mt-2 flex flex-row justify-center ">
            {!submitted && (
              <button
                type="submit"
                className="bg-[#102C57] text-white hover:bg-[#c7c7c7] pt-1 pb-1 pr-2 pl-2 border-2 rounded-md"
                onClick={handleData}
              >
                Submit
              </button>
            )}
            {showInput && (
              <button
                type="button"
                className="bg-[#102C57] text-white hover:bg-[#c7c7c7] pt-1 pb-1 pr-2 pl-2 border-2 rounded-md"
                onClick={() => setShowInput(false)}
              >
                New Submit
              </button>
            )}
          </div>
        </div>

      </form>
    </>
  );
}

export default ForgotPassword;
