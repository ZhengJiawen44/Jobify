import Wrapper from "../assets/wrappers/ErrorPage";
import img from "../assets/images/not-found.svg";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} />
          <h3>{error.error.message}</h3>
          <p>
            Go back to <Link to="/">Home</Link>
          </p>
        </div>
      </Wrapper>
    );
  } else {
    return (
      <Wrapper>
        <div>
          <h3>{error.status}</h3>
          <h3>{error.error.message}</h3>
          <p>
            Go back to <Link to="/">Home</Link>
          </p>
        </div>
      </Wrapper>
    );
  }
};
export default Error;
