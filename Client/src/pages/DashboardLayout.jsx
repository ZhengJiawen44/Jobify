import { Outlet } from "react-router-dom";
import { useState, createContext, useContext } from "react";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSidebar, SmallSidebar, Navbar } from "../components/index";

const DashboardContext = createContext();
const DashboardLayout = ({ enabledTheme }) => {
  //temp
  const user = { name: "John" };
  const [isDarkTheme, setIsDarkTheme] = useState(enabledTheme);
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleDarkTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.body.classList.toggle("dark-theme", !isDarkTheme);
    localStorage.setItem("theme", !isDarkTheme);
  };
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    console.log(showSidebar);
  };
  async function logoutUser() {
    console.log("user is logged out ");
  }
  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        toggleSidebar,
        isDarkTheme,
        toggleDarkTheme,
        logoutUser,
      }}
    >
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
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
