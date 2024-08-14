import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import FormRow from "../components/FormRow";
const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow
          labelTxt="email"
          name="email"
          type="email"
          value="zhengjiawen44@gmail.com"
        />
        <FormRow
          labelTxt="password"
          name="password"
          type="password"
          value="123"
        />
        <button className="btn btn-block">Submit</button>
        <button className="btn btn-block">Explore The App</button>
        <p>
          don't have an account yet?{" "}
          <Link to="/register" className="member-btn">
            register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Login;
