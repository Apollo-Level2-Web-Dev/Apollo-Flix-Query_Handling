import { USER_ROLE } from "../user/user.constant";

export type TLoginUser = {
  email: string;
  password: string;
};

export type TRegisterUser = {
  name: string;
  email: string;
  password: string;
  role: keyof typeof USER_ROLE;
};
