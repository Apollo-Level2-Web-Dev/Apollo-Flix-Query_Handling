import httpStatus from "http-status";
import { catchAsync } from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { userServices } from "./user.service";

const createAdmin = catchAsync(async (req, res) => {
  const result = await userServices.createAdminIntoDB(req.body);

  res.status(200).json({
    success: true,
    message: "Admin created successfully",
    data: result,
  });
});
const updateUser = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const result = await userServices.updateUserIntoDB(userId, req.body);

  res.status(200).json({
    success: true,
    message: "Admin created successfully",
    data: result,
  });
});
const updateMe = catchAsync(async (req, res) => {
  const result = await userServices.updateMe(req.user, req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Password is updated succesfully!",
    data: result,
  });
});

const SingleUser = catchAsync(async (req, res) => {
  const { userId } = req.params;
  const result = await userServices.getSingleUserFromDB(userId);

  res.status(200).json({
    success: true,
    message: "Admin created successfully",
    data: result,
  });
});

export const userControllers = {
  createAdmin,
  updateUser,
  SingleUser,
  updateMe,
};
