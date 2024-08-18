import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft } from "react-icons/fa";
import Logo from "../components/Logo";
const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn">
          <FaAlignLeft />
        </button>
        <div>
          <h4 className="logo-text">Dashboard</h4>
          <Logo />
        </div>

        <p>log in/out</p>
      </div>
    </Wrapper>
  );
};
export default Navbar;
