import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import Logo from "../components/Logo";
import FormRow from "../components/FormRow";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h5>Login</h5>
        <FormRow
          name="email"
          value="zhengjiawen44@gmail.com"
          label="Email"
          type="email"
        />
        <FormRow
          name="password"
          value="123456789"
          label="Password"
          type="password"
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <button type="submit" className="btn btn-block">
          Demo
        </button>

        <p>
          Don't have an account yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Login;
