import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import { useDashboardContext } from "../pages/DashboardLayout";
import Logo from "../components/Logo";
import Login from "../components/Login";
const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <h4 className="logo-text">Dashboard</h4>
          <Logo />
        </div>
        <div className="btn-container">
          <ThemeToggle />
          <Login />
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
