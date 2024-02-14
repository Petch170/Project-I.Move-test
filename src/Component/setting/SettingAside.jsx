import { Link } from "react-router-dom";
import { homeIcon, lockIcon, policyIcon, userIcon } from "../../assets/Icon";
import { useNavigate } from "react-router-dom";

const SettingAside = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <aside className="desktop flex flex-row justify-center">
      <div>
        <h2 className="text-2xl font-bold my-4 text-center">Settings</h2>
        <div className="grid grid-cols-2 gap-3 mb-3 items-center">
          <div className="flex justify-end">
            <img src={lockIcon} alt="lockIcon" />
          </div>
          <Link to="/setting/password">
            <p className="font-bold">Change Password</p>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-3 items-center">
          <div className="flex justify-end">
            <img src={userIcon} alt="userIcon" />
          </div>
          <Link to="/setting/profile">
            <p className="font-bold">Edit Profile</p>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-3 items-center">
          <div className="flex justify-end">
            <img src={homeIcon} alt="homeIcon" />
          </div>
          <Link to="/UserHomePage">
            <p className="font-bold">Home</p>
          </Link>
        </div>
        <div className="grid grid-cols-2">
          <div></div>
          <button className="btn mt-2" onClick={() => logout()}>
            Log out
          </button>
        </div>
      </div>
    </aside>
  );
};
export default SettingAside;
