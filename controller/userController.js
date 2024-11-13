import { jobModel } from "../model/jobModel.js";
import { userModel } from "../model/userModel.js";
import { destroyImage, uploadToCLoudinary } from "../utils/cloudinary.js";
import {promises as fs} from "fs"


export const user = async (req, res) => {
  try {
    const user = await userModel.findOne({ _id: req.user.userId });

    res.status(200).json({ user: user.toJSON() });
  } catch (error) {
    throw new Unauthorized("please login to complete this action");
  }
};

export const updateUser = async (req, res) => {
  const content = { ...req.body };
  delete content.password;
  delete content.roles;
  if(req.file){
    const cloudinaryRes = await uploadToCLoudinary(req.file.path)
    await fs.unlink(req.file.path)
    content.avatar_id = cloudinaryRes.public_id
    content.avatar_link = cloudinaryRes.secure_url
  }
  const oldUser = await userModel.findByIdAndUpdate(req.user.userId, content);

  if(req.file && oldUser.avatar_id){
    await destroyImage(oldUser.avatar_id)
  }
  
  res.status(202).json({ msg: "user is updated" });
};

export const deleteUser = async (req, res) => {
  await userModel.findByIdAndDelete(req.user.userId);
  res.cookie("jwt", "delete user", {
    httpOnly: true,
    secure: process.env.MODE === "production",
    maxAge: 0,
  });
  res.status(202).json({ msg: "user is deleted" });
};

export const stats = async (req, res) => {
  const userCount = await userModel.countDocuments({});
  const jobCount = await jobModel.countDocuments({});
  res.status(200).json({ jobCount: jobCount, userCount: userCount });
};
