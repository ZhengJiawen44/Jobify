import Wrapper from "../assets/wrappers/LogoutContainer";
import { useDashboardContext } from "../pages/DashboardLayout";
import { IoPersonCircle } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { useState } from "react";
const LogoutContainer = () => {
  const { user, logoutUser } = useDashboardContext();
  const [showLogout, setShowLogout] = useState(false);
  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };
  return (
    <Wrapper>
      <button className=" btn logout-btn" type="button" onClick={toggleLogout}>
        <IoPersonCircle />
        {user.name || "Login"}
        <IoMdArrowDropdown />
      </button>
      <div className={showLogout ? "  dropdown show-dropdown" : " dropdown "}>
        <button className="dropdown-btn" onClick={logoutUser}>
          logout
        </button>
      </div>
    </Wrapper>
  );
};
export default LogoutContainer;
