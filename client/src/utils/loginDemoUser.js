import { toast } from "react-toastify";
import { customFetch as axios } from "./customFetch";
import { useNavigate } from "react-router-dom";

export const loginDemoUser = async () => {
  const navigate = useNavigate();
  try {
    await axios.post("/auth/login/", {
      email: "test@gmail.com",
      password: "123",
    });
    toast("logged in as test user");
    navigate("/dashboard");
  } catch (error) {
    toast.error("something wrong happened");
  }
};
