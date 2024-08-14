import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/LandingPage";
import { Link } from "react-router-dom";
import mainImage from "../assets/images/main.svg";
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>Tracking</span> App
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            quod veniam voluptate voluptates ullam harum, est dolorum, minus
            nesciunt voluptatem quos reiciendis possimus illum sunt iure beatae
            architecto sapiente perferendis?
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            login
          </Link>
        </div>
        <img src={mainImage} className="img main-img"></img>
      </div>
    </Wrapper>
  );
};
export default Landing;
