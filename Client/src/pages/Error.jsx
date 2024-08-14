import { useRouteError, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import image from "../assets/images/not-found.svg";
const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={image}></img> <h3>{error.statusText}</h3>
          <a>
            <Link to="/dashboard">back</Link>
          </a>
        </div>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <div>
          <a>
            <h3>Oops! Something went wrong</h3>
            <Link to="/dashboard">back</Link>
          </a>
        </div>
      </Wrapper>
    );
  }
};
export default Error;
