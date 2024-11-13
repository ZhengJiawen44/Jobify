import { Router } from "express";
import {
  getJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  showStats,
} from "../controller/jobController.js";
import { validateJob, validateJobID } from "../middleware/validation.js";
const jobRouter = new Router();

jobRouter.route("/").get(getJobs).post(validateJob, createJob);
jobRouter.route("/stats").get(showStats);
jobRouter
  .route("/:id")
  .get(validateJobID, getJob)
  .patch(validateJob, validateJobID, updateJob)
  .delete(validateJobID, deleteJob);

export { jobRouter };
