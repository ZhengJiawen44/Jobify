import { Router } from "express";
import {
  updateUser,
  deleteUser,
  stats,
  user,
} from "../controller/userController.js";
import { validateUpdateUser } from "../middleware/validation.js";
import { perms } from "../middleware/permissions.js";
import { upload } from "../middleware/multerMiddleware.js";

const userRouter = new Router();
userRouter
  .route("/")
  .patch(upload.single("picture"), validateUpdateUser, updateUser)
  .delete(deleteUser)
  .get(user);
userRouter.route("/admin/stats/").get(perms(["admin"]), stats);
export { userRouter };
