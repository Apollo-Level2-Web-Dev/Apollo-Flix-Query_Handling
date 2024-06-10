/**
 * /user/create-admin [POST] for admin only
 * /user/:id [PUT] for admin only
 * /user/:id [DELETE] for admin only
 * /user [GET] for admin only
 * /user/:id [GET] for admin only
 *
 */
import express from "express";
import { userControllers } from "./user.controller";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidations } from "./user.validation";
import auth from "../../middlewares/auth";
import { USER_ROLE } from "./user.constant";

const router = express.Router();

router.post(
  "/create-admin",
  auth(USER_ROLE.SUPER_ADMIN, USER_ROLE.ADMIN),
  validateRequest(UserValidations.createAdminValidation),
  userControllers.createAdmin
);
router.put(
  "/:userId",
  auth(USER_ROLE.SUPER_ADMIN, USER_ROLE.ADMIN),
  validateRequest(UserValidations.updateAdminValidation),
  userControllers.updateUser
);
router.put(
  "/me",
  auth(USER_ROLE.USER),
  validateRequest(UserValidations.updateAdminValidation),
  userControllers.updateMe
);

router.get(
  "/:userId",
  auth(USER_ROLE.SUPER_ADMIN, USER_ROLE.ADMIN),
  userControllers.SingleUser
);

export const UserRoutes = router;
