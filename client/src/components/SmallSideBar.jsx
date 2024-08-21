import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";
import links from "./links";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { useDashboardContext } from "../pages/DashboardLayout";

const SmallSideBar = () => {
  const { sidebar, toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div
        className={
          sidebar ? "sidebar-container show-sidebar" : "sidebar-container "
        }
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            {links.map((link) => {
              const { path, text, icon } = link;
              return (
                <NavLink
                  to={path}
                  key={text}
                  className="nav-link"
                  onClick={toggleSidebar}
                >
                  <div className="nav-link">
                    <span className="icon">{icon}</span>
                    {text}
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default SmallSideBar;
