import Wrapper from "../assets/wrappers/SmallSidebar";
import { IoMdClose } from "react-icons/io";
import Logo from "./Logo";
import { useDashboardContext } from "../pages/DashboardLayout";
import NavLinks from "./NavLinks";
const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button className="close-btn" onClick={toggleSidebar}>
            <IoMdClose />
          </button>
          <Logo />
          <div className="nav-links">
            <NavLinks />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;
