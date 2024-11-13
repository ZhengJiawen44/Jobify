import { Unauthorised } from "../Error/customErrors.js";
export const perms = (roles) => {
  return (req, res, next) => {
    const userAccess = req.user.role;

    if (!roles.includes(userAccess)) {
      throw new Unauthorised(
        "you do not have permission to access this resource"
      );
    }
    next();
  };
};
