import bcrypt from "bcryptjs";

export const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt();
  return await bcrypt.hash(password, salt);
};

export const validatePassword = async (password, originalPassword) => {
  return await bcrypt.compare(password, originalPassword);
};
