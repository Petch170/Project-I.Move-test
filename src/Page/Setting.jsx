import { Link } from "react-router-dom";
import { NavBar, SettingAside } from "../Component";
import { cogIcon, leftArrowIcon, userIcon } from "../assets/Icon";
import { useNavigate } from "react-router-dom";

const Setting = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <header>
        <NavBar />

        {/* mobile */}
        <div className="sm:hidden flex justify-between py-2 px-4">
          <div className="flex flex-row justify-center items-center">
            <Link to="/UserHomePage">
              <img src={leftArrowIcon} alt="leftArrowIcon" />
            </Link>
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
          <Link to="/UserHomePage">
            <button className=" w-full border border-gray-400 rounded-lg py-2 my-2 font-bold">
              Home
            </button>
          </Link>
          <Link to="/">
            <button className=" w-full border border-gray-400 rounded-lg py-2 my-2 font-bold">
              About Us
            </button>
          </Link>
          <Link to="/">
            <button className=" w-full border border-gray-400 rounded-lg py-2 my-2 font-bold">
              Contact
            </button>
          </Link>
          <button
            className="border border-gray-400 rounded-lg py-2 my-2 font-bold bg-gray-300"
            onClick={() => logout()}
          >
            Log Out
          </button>
        </div>
      </main>
    </>
  );
};
export default Setting;
