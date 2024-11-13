import Wrapper from "../assets/wrappers/SmallSidebar";
import { Logo } from "../components/index";
import { Navlinks } from "./Navlinks";
import { FaTimes } from "react-icons/fa";
import { useDashboardContext } from "../pages/DashboardLayout";

const SmallSidebar = () => {
  const { isShowSidebar, toggleSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div
        className={
          isShowSidebar ? "show-sidebar sidebar-container" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" onClick={toggleSidebar}>
            <FaTimes className="close-btn" />
          </button>
          <header>
            <Logo />
          </header>
          <Navlinks />
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSidebar;
