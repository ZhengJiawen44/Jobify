import Wrapper from "../assets/wrappers/LogoutContainer";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useDashboardContext } from "../pages/DashboardLayout";
import { useState } from "react";
const Login = () => {
  const { user, logoutUser } = useDashboardContext();
  const [logout, setLogout] = useState(false);
  function toggleLogout() {
    setLogout(!logout);
  }
  return (
    <Wrapper>
      <button className="logout-btn btn" onClick={toggleLogout}>
        <FaUserCircle /> {user?.name} <FaCaretDown />
      </button>
      <div className={logout ? "dropdown show-dropdown" : "dropdown"}>
        <button type="button" className="dropdown-btn" onClick={logoutUser}>
          logout
        </button>
      </div>
    </Wrapper>
  );
};
export default Login;
