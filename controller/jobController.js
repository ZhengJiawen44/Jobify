import "express-async-errors";
import { jobModel } from "../model/jobModel.js";
import day from "dayjs";
import { query } from "express";

export const getJobs = async (req, res) => {
  const { Search, JobType, JobStatus, Sort } = req.query;

  const queryObject = {};
  if (Search) {
    queryObject.$or = [
      { company: { $regex: Search, $options: "i" } },
      { position: { $regex: Search, $options: "i" } },
    ];
  }
  if (JobType && JobType !== "all") {
    queryObject.type = JobType;
  }
  if (JobStatus && JobStatus !== "all") {
    queryObject.status = JobStatus;
  }

  const sortOptions = {
    "a-z": "+position",
    "z-a": "-position",
    latest: "-createdAt",
    oldest: "+createdAt",
  };

  const sortKey = sortOptions[Sort] || sortOptions["latest"];
  const Page = req.query.Page || 1;

  const jobs = await jobModel
    .find(queryObject)
    .sort(sortKey)
    .skip((Page - 1) * 5)
    .limit(5);
  const jobCount = await jobModel.countDocuments(queryObject);
  const totalPage = Math.ceil(jobCount / 5);
  return res.status(200).json({ jobCount, Page, jobs, totalPage });
};

export const getJob = async (req, res) => {
  const job = await jobModel.findById(req.params.id);
  return res.status(200).json({ job });
};

export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  console.log(req);

  console.log(req.body);

  const job = await jobModel.create(req.body);
  return res.status(201).json({ job });
};

export const updateJob = async (req, res) => {
  const job = await jobModel.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  return res.status(201).json({ job });
};

export const deleteJob = async (req, res) => {
  await jobModel.findByIdAndDelete(req.params.id);
  return res.status(201).json({ msg: "deleted successfully" });
};

export const showStats = async (req, res) => {
  let stats = await jobModel.aggregate([
    {
      $group: { _id: "$status", count: { $sum: 1 } },
    },
  ]);

  stats = stats.reduce((acc, curr) => {
    const { _id, count } = curr;
    acc[_id] = count;
    return acc;
  }, {});

  let monthlyApplication = await jobModel.aggregate([
    {
      $group: {
        _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
        count: { $sum: 1 },
      },
    },
    { $limit: 6 },
    {
      $sort: {
        "_id.year": -1,
        "_id.month": -1,
      },
    },
  ]);

  monthlyApplication = monthlyApplication.map(
    ({ _id: { year, month }, count }) => {
      const date = day().month(month).year(year).format("MMM YYYY");
      return { date, count };
    }
  );

  return res.status(200).json({ stats, monthlyApplication });
};
