import { Outlet } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { Navbar, BigSidebar, SmallSidebar } from "../components";
import { useState, createContext, useContext } from "react";

const DashboardContext = createContext();

const DashboardLayout = ({ checkDefaultTheme }) => {
  const user = { name: "john" };
  const [isDarktheme, setDarkTheme] = useState(checkDefaultTheme());
  const [sidebar, setSidebar] = useState(false);

  const toggleDarkTheme = () => {
    const newTheme = !isDarktheme;
    setDarkTheme(newTheme);
    document.body.classList.toggle("dark-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };
  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  const logoutUser = async () => {
    console.log("user is logged out");
  };
  return (
    <Wrapper>
      <DashboardContext.Provider
        value={{
          isDarktheme,
          sidebar,
          user,
          logoutUser,
          toggleDarkTheme,
          toggleSidebar,
        }}
      >
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
      </DashboardContext.Provider>
    </Wrapper>
  );
};
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
