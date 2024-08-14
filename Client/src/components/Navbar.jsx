import Wrapper from "../assets/wrappers/Navbar";
import { useDashboardContext } from "../pages/DashboardLayout";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import Logo from "./Logo";
import LogoutContainer from "./LogoutContainer";
import BsFillSunFill from "./ThemeToggle";
const Navbar = () => {
  const { user, showSidebar, toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <HiOutlineMenuAlt2 />
        </button>
        <div>
          <h4 className="logo-text">Dashboard</h4>
          <Logo />
        </div>
        <div className="btn-container">
          <BsFillSunFill />
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
