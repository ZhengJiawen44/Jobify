import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { BigSidebar, SmallSidebar, Navbar } from "../components";
import { useState, createContext, useContext } from "react";
import { customFetch as axios } from "../utils/customFetch";

export const loader = async () => {
  try {
    const { data } = await axios.get("/user");
    return data;
  } catch (error) {
    return redirect("/");
  }
};

const dashboardContext = createContext();
const getUserTheme = () => {
  const theme = localStorage.getItem("theme") === "true";
  document.body.classList.toggle("dark-theme", theme);
  return theme;
};
const theme = getUserTheme();

const DashboardLayout = () => {
  const navigate = useNavigate();
  const data = useLoaderData();

  const [isNightTheme, setIsNightTheme] = useState(theme);
  const [isShowSidebar, setSidebar] = useState(false);
  const user = { name: data.user.name };
  const role = data.user.roles;

  const logoutUser = async () => {
    try {
      await axios.post("/auth/logout");
      navigate("/login");
    } catch (error) {
      return error;
    }
  };
  const toggleSidebar = () => {
    setSidebar(!isShowSidebar);
  };
  const toggleNightTheme = () => {
    const theme = !isNightTheme;
    localStorage.setItem("theme", theme);
    setIsNightTheme(theme);
    document.body.classList.toggle("dark-theme", theme);
  };
  const userData = useLoaderData();
  const avatarLink = userData.user.avatar_link;

  return (
    <dashboardContext.Provider
      value={{
        isShowSidebar,
        toggleSidebar,
        isNightTheme,
        toggleNightTheme,
        user,
        logoutUser,
        role,
        avatarLink,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <BigSidebar />
          <SmallSidebar />
          <div>
            <Navbar />
            <div className="dashboard-page">
              <Outlet />
            </div>
          </div>
        </main>
      </Wrapper>
    </dashboardContext.Provider>
  );
};
export default DashboardLayout;

export const useDashboardContext = () => useContext(dashboardContext);
