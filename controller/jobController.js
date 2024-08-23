import { jobModel } from "../model/jobModel.js";
import { StatusCodes } from "http-status-codes";
import { NotFoundError } from "../error/customErrors.js";
//get all jobs
export const getAllJobs = async (req, res) => {
  const jobs = await jobModel.find();
  return res.status(StatusCodes.OK).json({ jobs });
};

//get a single job
export const getJob = async (req, res) => {
  throw new NotFoundError("could not find resource with id}");
  const { id } = req.params;
  const job = await jobModel.findById(id);
  if (!job) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: `no job listing found with matching ${id}` });
  }
  return res.status(StatusCodes.OK).json({ job });
};

//create a job
export const createJob = async (req, res) => {
  const { company, position } = req.body;

  if (!company || !position) {
    return res
      .status(404)
      .json({ msg: "the company or position fields are required" });
  }
  const job = await jobModel.create({ company, position });
  res.status(StatusCodes.OK).json({ job });
};

//edit a job
export const updateJob = async (req, res) => {
  const { id } = req.params;
  const updateJob = await jobModel.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  if (!updateJob) {
    return res.status(StatusCodes.NOT_FOUND).json({ msg: `no job with ${id}` });
  }
  res
    .status(StatusCodes.OK)
    .json({ msg: "edited succesfully", job: updateJob });
};

//delete a job
export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const removedJob = await jobModel.findByIdAndDelete(id);

  if (!removedJob) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: `no job with id ${id}` });
  }
  res.status(StatusCodes.OK).json({ job: removedJob });
};

//delete all jobs
export const deleteAll = async (req, res) => {
  await jobModel.deleteMany({});
  return res.status(StatusCodes.OK).json({ msg: "all deleted" });
};
