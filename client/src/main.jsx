import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = localStorage.getItem("theme");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer
      stacked={true}
      theme={theme === "true" ? "dark" : "light"}
    />
    <App />
  </StrictMode>
);
