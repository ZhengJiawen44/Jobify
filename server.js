import "express-async-errors";
import express from "express";
import "dotenv/config";
import morgan from "morgan";
import routes from "./routes/jobRoutes.js";
import mongoose from "mongoose";
import { StatusCodes } from "http-status-codes";
import errorHandlerMiddleWare from "./middleWare/errorHandlerMiddleWare.js";
const app = express();
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use("/api/v1/jobs", routes);
//404 errors
app.use("*", (req, res) => {
  res
    .status(StatusCodes.NOT_FOUND)
    .json({ msg: "error 404: no resource found for the id" });
});

//error handler
app.use(errorHandlerMiddleWare);

try {
  await mongoose.connect(process.env.DB_URI);
  app.listen(process.env.PORT, () => {
    console.log(
      `server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`
    );
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
