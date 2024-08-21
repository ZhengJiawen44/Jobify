import express from "express";
import "dotenv/config";
import morgan from "morgan";
import { nanoid } from "nanoid";

const app = express();
app.use(express.json());
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const jobs = [
  { id: nanoid(), company: "logitech", position: "designer" },
  { id: nanoid(), company: "sentify", position: "fullstack" },
  { id: nanoid(), company: "npm", position: "developer" },
];

//get all job
app.get("/api/v1/jobs", (req, res) => {
  try {
    return res.status(200).json({ jobs: jobs });
  } catch (error) {
    return res.status(404).json({ msg: "404 error, resource not found" });
  }
});

//get single job
app.get("/api/v1/jobs/:id", (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res
      .status(404)
      .json({ msg: "no job listing found with matching id!" });
  }
  return res.status(200).json({ job: job });
});

//create a job
app.post("/api/v1/jobs", (req, res) => {
  const { company } = req.body;
  const { position } = req.body;
  if (!company || !position) {
    return res
      .status(404)
      .json({ msg: "the company or position fields are required" });
  }
  const job = { id: nanoid(), company: company, position: position };
  jobs.push(job);
  return res.status(200).json({ jobs: jobs });
});

//edit a job
app.patch("/api/v1/jobs/:id", (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: "no jobs with the id found!" });
  }
  job.company = req.body.company;
  job.position = req.body.position;
  res.status(200).json({ msg: "edited succesfully", jobs: jobs });
});

//delete a job
app.delete("/api/v1/jobs/:id", (req, res) => {
  const id = parseInt(req.params.id, 10); // Convert id to number
  const index = jobs.findIndex((job) => job.id === id);
  if (index === -1) {
    return res.status(404).json({ msg: "Job not found" });
  }
  jobs.splice(index, 1); // Remove the job from the array

  return res.status(200).json({ msg: "Deleted successfully", jobs });
});

app.listen(process.env.PORT, () => {
  console.log(
    `server is running on port ${process.env.PORT} in ${process.env.NODE_ENV} mode`
  );
});
