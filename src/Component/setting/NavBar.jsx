import { Link } from "react-router-dom";
import {
  dashboardIcon,
  dumbbellIcon,
  homeIcon,
  plantIcon,
  plusCircleIcon,
  userIcon,
} from "../../assets/Icon";
import { logo } from "../../assets/Picture";
const NavBar = () => {
  return (
    <>
      {/* desktop */}
      <nav className="flex flex-row justify-between bg-cream desktop px-4">
        <div className="flex flex-row  items-center relative">
          <img src={logo} alt="logo" />
          <p className="font-black absolute left-[55px]">I.MOVE</p>
        </div>
        <div className="flex flex-row  items-center gap-4 p-4">
          <p>Contact</p>
          <p>About</p>
          <p>Home</p>
          <div className="flex flex-col bg-white rounded-full justify-center items-center p-2 border border-orange-600">
            <img src={plantIcon} alt="plant" />
            <p className="text-xs">Grow up</p>
          </div>
        </div>
      </nav>

      {/* mobile */}
      <nav className="sm:hidden grid grid-cols-5 items-center bg-cream py-2 fixed inset-x-0 bottom-0 ">
        <Link to="/">
          <div className="flex flex-col justify-center items-center">
            <img src={homeIcon} alt="home" />
            <p>Home</p>
          </div>
        </Link>
        <div className="flex flex-col justify-center items-center">
          <img src={dumbbellIcon} alt="activity" />
          <p>Activity</p>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img src={plusCircleIcon} alt="add activity" />
        </div>
        <Link to="/user/dashboard">
          <div className="flex flex-col justify-center items-center">
            <img src={dashboardIcon} alt="dashboard" />
            <p>Dashboard</p>
          </div>
        </Link>
        <div className="flex flex-col justify-center items-center">
          <img src={userIcon} alt="profile" />
          <p>Profile</p>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
