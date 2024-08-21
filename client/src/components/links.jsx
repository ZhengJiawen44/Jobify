import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";

const links = [
  { path: ".", text: "Add Job", icon: <FaWpforms /> },
  { path: "alljobs", text: "All Jobs", icon: <MdQueryStats /> },

  { path: "stats", text: "Stats", icon: <IoBarChartSharp /> },
  { path: "profile", text: "Profile", icon: <ImProfile /> },
  { path: "admin", text: "Admin", icon: <MdAdminPanelSettings /> },
];

export default links;
