import {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  deleteAll,
} from "../controller/jobController.js";
import { Router } from "express";

const router = new Router();

router.route("/").get(getAllJobs).post(createJob).delete(deleteAll);

router.route("/:id").get(getJob).patch(updateJob).delete(deleteJob);

export default router;
