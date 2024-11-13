import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  Admin,
  Login,
  Landing,
  HomeLayout,
  Register,
  DashboardLayout,
  AddJob,
  Stats,
  AllJob,
  Profile,
  Error,
  EditJob,
} from "./pages/index";
import { action as registerAction } from "./pages/Register";
import { action as loginAction } from "./pages/Login";
import { action as createJob } from "./pages/AddJob";
import { action as findJob } from "./pages/AllJobs";
import { action as editJob } from "./pages/EditJob";
import { action as deleteJob } from "./components/DeleteModal";
import { action as profileAction } from "./pages/Profile";

import { loader as DashboardLoader } from "./pages/DashboardLayout";
import { loader as jobLoader } from "./pages/AllJobs";
import { loader as editLoader } from "./pages/EditJob";
import { loader as adminLoader } from "./pages/Admin";
import { loader as profileLoader } from "./pages/Profile";
import { loader as statsLoader } from "./pages/Stats";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Landing /> },
        { path: "/login", element: <Login />, action: loginAction },
        {
          path: "/register",
          element: <Register />,
          action: registerAction,
        },
        {
          path: "/dashboard",
          element: <DashboardLayout />,
          loader: DashboardLoader,
          children: [
            {
              index: true,
              element: <AllJob />,
              action: findJob,
              loader: jobLoader,
            },
            { path: "admin", element: <Admin />, loader: adminLoader },
            { path: "stats", element: <Stats />, loader: statsLoader },
            { path: "add-job", element: <AddJob />, action: createJob },
            {
              path: "profile",
              element: <Profile />,
              loader: profileLoader,
              action: profileAction,
            },
            {
              path: "edit-job/:id",
              element: <EditJob />,
              action: editJob,
              loader: editLoader,
            },
            { path: "delete-job/:id", action: deleteJob },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router}>App</RouterProvider>;
};
export default App;
