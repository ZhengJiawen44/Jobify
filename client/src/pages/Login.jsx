import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo } from "../components";
import { Link, Form, redirect, useNavigate } from "react-router-dom";
import { FormRow } from "../components/";
import { customFetch as axios } from "../utils/customFetch";
import { toast } from "react-toastify";
import { SubmitBtn } from "../components";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await axios.post("/auth/login/", data);
    toast("you have logged in");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.err);
    return error;
  }
};

const Login = () => {
  const navigate = useNavigate();
  const loginDemoUser = async () => {
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
  return (
    <Wrapper>
      <Form method="POST">
        <div className="form">
          <Logo />
          <h4>Login</h4>

          <FormRow
            id="email"
            type="email"
            label="Email"
            value="Micah@gmail.com"
          />
          <FormRow
            id="password"
            type="password"
            label="Password"
            value="zjwhamzaak"
          />

          <SubmitBtn original="log in" loading="logging in" />

          <button
            type="button"
            className=" btn btn-block"
            onClick={loginDemoUser}
          >
            login as guest
          </button>

          <p>
            Don&apos;t have an account? <Link to="/Register">register</Link>
          </p>
        </div>
      </Form>
    </Wrapper>
  );
};
export default Login;
