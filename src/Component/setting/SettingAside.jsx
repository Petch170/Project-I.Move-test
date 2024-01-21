import { Link } from "react-router-dom";
import { lockIcon, policyIcon, userIcon } from "../../assets/Icon";

const SettingAside = () => {
  return (
    <aside className="desktop flex flex-row justify-center">
      <div>
        <h2 className="text-2xl font-bold my-4 text-center">Settings</h2>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="flex justify-end">
            <img src={lockIcon} alt="lockIcon" />
          </div>
          <Link to="/setting/password">
            <p className="font-bold">Change Password</p>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="flex justify-end">
            <img src={userIcon} alt="userIcon" />
          </div>
          <Link to="/setting/profile">
            <p className="font-bold">Edit Profile</p>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div className="flex justify-end">
            <img src={policyIcon} alt="policyIcon" />
          </div>
          <Link to="/setting">
            <p className="font-bold">Policy</p>
          </Link>
        </div>
        <div className="grid grid-cols-2">
          <div></div>
          <button className="btn mt-2">Log out</button>
        </div>
      </div>
    </aside>
  );
};
export default SettingAside;
