import { FaCaretDown } from "react-icons/fa";
import Wrapper from "../assets/wrappers/LogoutContainer";
import { useDashboardContext } from "../pages/DashboardLayout";
import { useState } from "react";

export const LogoutContainer = () => {
  const [showDropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!showDropdown);
  };
  const { user, logoutUser,avatarLink } = useDashboardContext();
  return (
    <Wrapper>
      <button type="button" className="btn logout-btn" onClick={toggleDropdown}>
      {avatarLink?<img className = "img" alt="profile" src={avatarLink}></img>:<FaCaretDown/>}Logout
        <FaCaretDown />
      </button>
      <button
        className={showDropdown ? "btn dropdown show-dropdown" : "btn dropdown"}
        onClick={() => {
          logoutUser();
        }}
      >
        {user.name}
      </button>
    </Wrapper>
  );
};
