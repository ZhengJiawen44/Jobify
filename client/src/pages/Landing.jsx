import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage";
import Logo from "../components/Logo";
import image from "../assets/images/main.svg";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div>
          <h1>
            Job <span>Tracking </span>App
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            aliquid optio doloremque ex debitis dignissimos esse dicta similique
            quo ipsam? Obcaecati facilis mollitia quo voluptas odit autem, iste
            perferendis quae?
          </p>

          <Link to="/register" className="btn  register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login
          </Link>
        </div>
        <img src={image} alt="" className="img main-img" />
      </div>
    </Wrapper>
  );
};
export default Landing;
