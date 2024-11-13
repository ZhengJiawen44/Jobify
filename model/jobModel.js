import { Schema, model } from "mongoose";
import { STATUS, TYPES } from "../utils/constants.js";
const jobSchema = new Schema(
  {
    position: String,
    company: String,
    type: {
      type: String,
      enum: Object.values(TYPES),
      default: "Full time",
    },
    status: {
      type: String,
      enum: Object.values(STATUS),
      default: "Pending",
    },
    location: {
      type: String,
      default: "Raccoon city",
    },
    createdBy: {
      type: Schema.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export const jobModel = model("job", jobSchema);
