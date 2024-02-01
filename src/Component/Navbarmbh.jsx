import { Link } from "react-router-dom";
import {
  dashboardIcon,
  dumbbellIcon,
  homeIcon,
  plusCircleIcon,
  userIcon,
} from "../assets/Icon";

const Navbarmbh = () => {
  return (
    <>
      {/* mobile */}
      <nav className="sm:hidden grid grid-cols-5 items-center bg-cream py-1 fixed inset-x-0 bottom-0 rounded-t-md ">
        <Link to="/">
          <div className="flex flex-col justify-center items-center text-sm">
            <img src={homeIcon} alt="home" />
            <p>Home</p>
          </div>
        </Link>
        <Link to="/UserHomePage">
        <div className="flex flex-col justify-center items-center text-sm">
          <img src={dumbbellIcon} alt="activity" />
          <p>Activity</p>
        </div>
        </Link>
        <Link to="/ModalForm">
        <div className="flex flex-col justify-center items-center text-sm">
          <img src={plusCircleIcon} alt="add activity" />
        </div>
        </Link>
        <Link to="/user/dashboard">
          <div className="flex flex-col justify-center items-center text-sm">
            <img src={dashboardIcon}  alt="dashboard" />
            <p>Dashboard</p>
          </div>
        </Link>
        <Link to="/Activity">
        <div className="flex flex-col justify-center items-center text-sm">
          <img src={userIcon} alt="profile" />
          <p>Profile</p>
        </div>
        </Link>
      </nav>
    </>
  );
};
export default Navbarmbh;
