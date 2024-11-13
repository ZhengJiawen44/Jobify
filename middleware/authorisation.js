import { Unauthorised } from "../Error/customErrors.js";
import { verify } from "../utils/jwt.js";
export const authorize = (req, res, next) => {
  const { jwt } = req.cookies;
  if (!jwt) {
    throw new Unauthorised("you need to log in first");
  }
  try {
    const credentials = verify(jwt);
    const { userId, role } = credentials;
    req.user = { userId, role };
    next();
  } catch (error) {
    throw new Unauthorised("you need to log in first");
  }
};
