import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
  AddJob,
  Stats,
  AllJobs,
  Profile,
  Admin,
} from "./pages";
function App() {
  function checkDefaultTheme() {
    const theme = localStorage.getItem("theme") === "true";
    document.body.classList.toggle("dark-theme", theme);
    return theme;
  }
  const isDarkTheme = checkDefaultTheme();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Landing /> },
        { path: "register", element: <Register /> },
        { path: "login", element: <Login /> },
        {
          path: "dashboard",
          element: <DashboardLayout enabledTheme={isDarkTheme} />,
          children: [
            { index: true, element: <AddJob /> },
            { path: "stats", element: <Stats /> },
            { path: "alljobs", element: <AllJobs /> },
            { path: "profile", element: <Profile /> },
            { path: "admin", element: <Admin /> },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
