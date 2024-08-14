import { NavLink } from "react-router-dom";
import Links from "../utils/Links";
import { useDashboardContext } from "../pages/DashboardLayout";

const NavLinks = ({ isBigSideBar }) => {
  const { toggleSidebar, user } = useDashboardContext();

  return (
    <div className="nav-links">
      {Links.map((link) => {
        const { text, path, icon } = link;
        return (
          <NavLink
            to={path}
            key={text}
            className="nav-link"
            onClick={!isBigSideBar ? toggleSidebar : null}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
