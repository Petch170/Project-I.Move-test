import { Link } from "react-router-dom";
import { NavBar, SettingAside } from "../Component";
import { cogIcon, leftArrowIcon, userIcon } from "../assets/Icon";

const Setting = () => {
  return (
    <>
      <header>
        <NavBar />
        {/* mobile */}
        <div className="sm:hidden flex justify-between py-2 px-4">
          <div className="flex flex-row justify-center items-center">
            <img src={leftArrowIcon} alt="leftArrowIcon" />
          </div>
          <h1 className="text-2xl font-bold">Settings</h1>
          <div className="flex flex-row justify-center items-center">
            <img src={cogIcon} alt="cogIcon" />
          </div>
        </div>
      </header>
      <main className="sm:grid sm:grid-cols-3 ">
        {/* desktop */}
        <SettingAside />

        {/* mobile */}
        <div className="sm:hidden flex flex-col px-8 ">
          <div className="flex justify-center gap-2 my-2">
            <img src={userIcon} alt="userIcon" />
            <p className="font-bold text-lg">Account</p>
          </div>
          <Link to="/setting/password">
            <button className="w-full border border-gray-400 rounded-lg py-2 my-2 font-bold">
              Change Password
            </button>
          </Link>
          <Link to="/setting/profile">
            <button className="w-full border border-gray-400 rounded-lg py-2 my-2 font-bold">
              Edit Profile
            </button>
          </Link>
          <div className="flex justify-center gap-2 my-2">
            <img src={userIcon} alt="userIcon" />
            <p className="font-bold text-lg">Other</p>
          </div>
          <button className="border border-gray-400 rounded-lg py-2 my-2 font-bold">
            Policy
          </button>
          <button className="border border-gray-400 rounded-lg py-2 my-2 font-bold">
            About Us
          </button>
          <button className="border border-gray-400 rounded-lg py-2 my-2 font-bold">
            Contact
          </button>
          <button className="border border-gray-400 rounded-lg py-2 my-2 font-bold bg-gray-300">
            Log Out
          </button>
        </div>
      </main>
    </>
  );
};
export default Setting;
