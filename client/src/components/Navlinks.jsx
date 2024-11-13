import { navItems } from "../utils/navItems";
import { NavLink } from "react-router-dom";
import { useDashboardContext } from "../pages/DashboardLayout";
export const Navlinks = ({ isBigSidebar = false }) => {
  const { toggleSidebar, role } = useDashboardContext();

  return (
    <div className="nav-links">
      {navItems.map((item) => {
        const { path, label, Icon } = item;
        if (role === "user" && label !== "Admin") {
          return (
            <NavLink
              to={path}
              className="nav-link"
              key={label}
              onClick={isBigSidebar ? null : toggleSidebar}
            >
              <span className="icon">{Icon}</span>
              {label}
            </NavLink>
          );
        } else if (role === "admin") {
          return (
            <NavLink
              to={path}
              className="nav-link"
              key={label}
              onClick={isBigSidebar ? null : toggleSidebar}
            >
              <span className="icon">{Icon}</span>
              {label}
            </NavLink>
          );
        }
      })}
    </div>
  );
};
