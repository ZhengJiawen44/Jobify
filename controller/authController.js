import { userModel } from "../model/userModel.js";
import { hashPassword, validatePassword } from "../utils/password.js";
import { BadRequest } from "../Error/customErrors.js";
import { sign } from "../utils/jwt.js";

export const register = async (req, res) => {
  const isFirstUser = (await userModel.countDocuments({})) === 0;
  isFirstUser ? (req.body.roles = "admin") : null;
  const hashedPassword = await hashPassword(req.body.password);
  req.body.password = hashedPassword;
  await userModel.create(req.body);
  res.status(201).json({ msg: "succesfully registered" });
};

export const login = async (req, res) => {
  const user = await userModel.findOne({ email: req.body.email });
  const validPassword = await validatePassword(
    req.body.password,
    user.password
  );
  if (!validPassword) {
    throw new BadRequest("invalid credentials P");
  }

  const jwt = sign({ userId: user._id, role: user.roles });
  //send jwt to frontend using http-only cookies
  res.cookie("jwt", jwt, {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
    secure: process.env.MODE === "production",
  });
  res.status(200).json({ msg: "you are logged in" });
};

export const logout = (req, res) => {
  res.cookie("jwt", "logout", { maxAge: 0, httpOnly: true });
  res.status(200).json({ msg: "logged out" });
};
