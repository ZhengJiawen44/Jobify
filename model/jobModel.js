import mongoose, { Schema } from "mongoose";

//create a schema
const jobSchema = new Schema(
  {
    company: String,
    position: String,
    jobStatus: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "internship"],
      default: "internship",
    },
    jobLocation: {
      type: String,
      default: "my city",
    },
  },
  { timestamps: true }
);
//create a model using the blog schema
export const jobModel = mongoose.model("job", jobSchema);
