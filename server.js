import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import mongoose from "mongoose";
import { jobRouter } from "./router/jobRouter.js";
import { authRouter } from "./router/authRouter.js";
import { authorize } from "./middleware/authorisation.js";
import { userRouter } from "./router/userRouter.js";
import cookieParser from "cookie-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();
const app = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname, "./public")));

//job CRUD
app.use("/api/v1/jobs/", authorize, jobRouter);

//auth CRUD
app.use("/api/v1/auth/", authRouter);

//user CRUD
app.use("/api/v1/user/", authorize, userRouter);

app.get("/api/v1/test", (req, res) => {
  res.status(200).json({ msg: "this is a swanking hot new message" });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});

//Not found
app.use("*", (req, res) => {
  return res.status(404).json({ msg: "not found" });
});

//error handling
app.use((err, req, res, next) => {
  return res
    .status(err.status || 500)
    .json({ err: err.message || "something went wrong" });
});

try {
  cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API,
    api_secret: process.env.CLOUD_SECRET,
  });
  await mongoose.connect(process.env.DB_KEY);
  app.listen(process.env.PORT, () => {
    console.log(
      `server started on port ${process.env.PORT} in ${process.env.MODE} mode`
    );
  });
} catch (error) {
  console.log(error);
}
