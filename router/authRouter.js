import { Router } from "express";
import { register, login, logout } from "../controller/authController.js";
import {
  validateRegistration,
  validateLogin,
} from "../middleware/validation.js";

const authRouter = new Router();
authRouter.route("/register").post(validateRegistration, register);
authRouter.route("/login").post(validateLogin, login);
authRouter.route("/logout").post(logout);

export { authRouter };
