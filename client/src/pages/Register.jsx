import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import Logo from "../components/Logo";
import FormRow from "../components/FormRow";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h5>Register</h5>
        <FormRow name="Fname" value="Zheng" label="First name" type="text" />
        <FormRow name="Lname" value="Jiawen" label="Last name" type="text" />
        <FormRow
          name="location"
          value="Holy Roman Empire"
          label="Location"
          type="text"
        />
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
        <p>
          already have an account yet?{" "}
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
