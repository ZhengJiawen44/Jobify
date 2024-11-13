import { validationResult, body, param } from "express-validator";
import { STATUS, TYPES } from "../utils/constants.js";
import { BadRequest } from "../Error/customErrors.js";
import mongoose from "mongoose";
import { jobModel } from "../model/jobModel.js";
import { userModel } from "../model/userModel.js";

const withValidateErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        console.log(errorMessages);

        throw new BadRequest(errorMessages);
      }
      next();
    },
  ];
};

const validateJob = withValidateErrors([
  body("position").notEmpty().withMessage("position is missing"),
  body("company").notEmpty().withMessage("company is missing"),
  body("location").notEmpty().withMessage("location is missing"),
  body("status")
    .isIn(Object.values(STATUS))
    .withMessage("status is not correct"),
  body("type").isIn(Object.values(TYPES)).withMessage("types is not correct"),
]);

const validateJobID = withValidateErrors([
  param("id")
    .custom((id) => mongoose.Types.ObjectId.isValid(id))
    .withMessage("Got an invalid ID!")
    .custom(async (id) => {
      const job = await jobModel.findById(id);
      if (!job) {
        throw new BadRequest("ID does not exist yet");
      }
    }),
]);

const validateRegistration = withValidateErrors([
  body("name").notEmpty().withMessage("name is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("email is incorrect format")
    .custom(async (email) => {
      const userExists = await userModel.findOne({ email });
      if (userExists) {
        throw new BadRequest("user already exists");
      }
    }),
  body("location").notEmpty().withMessage("location is required"),
  body("password").notEmpty().withMessage("password is required"),
]);

const validateLogin = withValidateErrors([
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("email is incorrect format")
    .custom(async (email) => {
      const userExists = await userModel.findOne({ email });
      if (!userExists) {
        throw new BadRequest("invalid credentials E!");
      }
    }),
  body("password").notEmpty().withMessage("password is required"),
]);

const validateUpdateUser = withValidateErrors([
  body("name").notEmpty().withMessage("name is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("email is incorrect format")
    .custom(async (email, { req }) => {
      const userExists = await userModel.findOne({ email });
      const user = await userModel.findById(req.user.userId);

      if (userExists && !(user.email === email)) {
        throw new BadRequest("user already exists");
      }
    }),
  body("location").notEmpty().withMessage("location is required"),
]);
export {
  validateJob,
  validateJobID,
  validateRegistration,
  validateLogin,
  validateUpdateUser,
};
