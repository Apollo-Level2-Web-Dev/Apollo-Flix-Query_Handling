import httpStatus from "http-status";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import { JwtPayload } from "jsonwebtoken";
import AppError from "../../errors/AppError";

const createAdminIntoDB = async (payload: TUser) => {
  // const { password, ...ramainingData } = payload;

  // const hashedPassword = await bcryptjs.hash(
  //   password,
  //   Number(config.bcrypt_salt_rounds)
  // );

  // const dataWithHashedPassword = {
  //   hashedPassword,
  //   ...ramainingData,
  // };

  // const admin = await User.create(dataWithHashedPassword);

  const admin = await User.create(payload);

  return admin;
};

const updateUserIntoDB = async (_id: string, payload: Partial<TUser>) => {
  const user = await User.findByIdAndUpdate({ _id }, payload);

  return user;
};

const getSingleUserFromDB = async (_id: string) => {
  const user = await User.findById({ _id });

  return user;
};

const updateMe = async (userData: JwtPayload, payload: Partial<TUser>) => {
  // checking if the user is exist
  const user = await User.isUserExistsByEmail(userData.email);

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, "This user is not found !");
  }

  // checking if the user is blocked

  const userStatus = user?.status;

  if (userStatus === "BLOCKED") {
    throw new AppError(httpStatus.FORBIDDEN, "This user is blocked ! !");
  }

  const updatedUser = await User.findByIdAndUpdate(userData._id, payload, {
    new: true,
  });

  return updatedUser;
};

export const userServices = {
  createAdminIntoDB,
  updateUserIntoDB,
  getSingleUserFromDB,
  updateMe,
};
