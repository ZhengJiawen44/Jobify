import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { Navbar, BigSidebar, SmallSidebar } from "../components";
import { useState, createContext, useContext } from "react";
const DashboardLayout = () => {
  const [isDarktheme, setDarkTheme] = useState(false);
  const [sidebar, setSidebar] = useState(false);
  const logoutUser = () => {
    console.log("user is logged out");
  };
  const toggleDarkTheme = () => {
    setDarkTheme(!isDarktheme);
  };
  const DashBoardContext = createContext([
    isDarktheme,
    sidebar,
    logoutUser,
    toggleDarkTheme,
  ]);
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};
export const useDashboardContext = () => useContext(DashBoardContext);
export default DashboardLayout;
