import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";

export const navItems = [
  { label: "All Jobs", Icon: <MdQueryStats />, path: "." },
  { label: "Admin", Icon: <MdAdminPanelSettings />, path: "admin" },
  { label: "stats", Icon: <IoBarChartSharp />, path: "stats" },
  { label: "Add Jobs", Icon: <FaWpforms />, path: "add-job" },
  { label: "Profile", Icon: <ImProfile />, path: "profile" },
];
