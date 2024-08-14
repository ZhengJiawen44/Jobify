import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow labelTxt="first name" name="fname" type="text" value="Zheng" />
        <FormRow labelTxt="last name" name="lname" type="text" value="Jiawen" />
        <FormRow
          labelTxt="location"
          name="location"
          type="text"
          value="Holy roman empire"
        />
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
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          have an Account?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
