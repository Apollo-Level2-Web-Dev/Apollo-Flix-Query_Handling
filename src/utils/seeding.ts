/* eslint-disable no-console */
import config from "../config";
import { USER_ROLE, USER_STATUS } from "../modules/user/user.constant";
import { User } from "../modules/user/user.model";

export const seed = async () => {
  //atfirst check if the superadmin exist of not
  const superAdmin = await User.findOne({
    role: USER_ROLE.SUPER_ADMIN,
    email: config.super_admin_email,
    status: USER_STATUS.ACTIVE,
  });

  if (!superAdmin) {
    console.log("Seeding started...");

    await User.create({
      name: "Super Admin",
      role: USER_ROLE.SUPER_ADMIN,
      email: config.super_admin_email,
      password: config.super_admin_password,
      status: USER_STATUS.ACTIVE,
    });
    console.log("Super Admin created successfully...");
    console.log("Seeding completed...");
  }
};
