import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";

import Wrapper from "../assets/wrappers/BigSidebar";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import links from "./links";

const BigSidebar = () => {
  return (
    <Wrapper>
      <div className="sidebar-container show-sidebar">
        <div className="content">
          <header>
            <Logo />
          </header>

          <div className="nav-links">
            {links.map((link) => {
              const { text, path, icon } = link;
              return (
                <NavLink to={path} key={text} className="nav-link">
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
export default BigSidebar;
