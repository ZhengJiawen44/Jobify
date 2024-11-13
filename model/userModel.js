import { model, Schema } from "mongoose";
const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  location: { type: String, default: "raccoon city" },
  roles: { type: String, enum: ["user", "admin"], default: "user" },
  avatar_id: String,
  avatar_link: String
});
userSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};
export const userModel = model("User", userSchema);
