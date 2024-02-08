import { Link } from "react-router-dom";
import {
  dashboardIcon,
  dumbbellIcon,
  homeIcon,
  plusCircleIcon,
  userIcon,
} from "../assets/Icon";

const Navbarmbh = ({ handleCreateClick }) => {

  return (
    <div>
      {/* mobile */}
      <nav className="sm:hidden grid grid-cols-5 items-center bg-cream py-2 fixed inset-x-0 bottom-0 ">
        <Link to="/">
          <div className="flex flex-col justify-center items-center ">
            <img src={homeIcon} alt="home" />
            <p>Home</p>
          </div>
        </Link>
        <Link to="/UserHomePage">
          <div className="flex flex-col justify-center items-center ">
            <img src={dumbbellIcon} alt="activity" />
            <p>Activity</p>
          </div>
        </Link>

        <div className="flex flex-col justify-center items-center" onClick={handleCreateClick}>
          <img
            src={plusCircleIcon}
            alt="add activity"
            onClick={handleCreateClick}
          />
        </div>

        <Link to="/user/dashboard">
          <div className="flex flex-col justify-center items-center">
            <img src={dashboardIcon} alt="dashboard" />
            <p>Dashboard</p>
          </div>
        </Link>
        <Link to="/Activity">
          <div className="flex flex-col justify-center items-center ">
            <img src={userIcon} alt="profile" />
            <p>Profile</p>
          </div>
        </Link>
      </nav>
    </div>
  );
};
export default Navbarmbh;
