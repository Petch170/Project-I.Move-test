import { Link } from "react-router-dom";
import { leftArrowIcon } from "../../assets/Icon";
import { logo } from "../../assets/Picture";

const HeaderMobile = () => {
  return (
    <nav className="sm:hidden grid grid-cols-3 items-center px-4">
      <Link to="/setting">
        <img
          src={leftArrowIcon}
          alt="leftArrowIcon"
          className="object-contain"
        />
      </Link>
      <div className="flex flex-row items-center relative">
        <img src={logo} alt="logo" />
        <p className="font-bold absolute left-[55px]">I.MOVE</p>
      </div>
    </nav>
  );
};
export default HeaderMobile;
