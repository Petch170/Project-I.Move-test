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
export default Navbarmbh;
