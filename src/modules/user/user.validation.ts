import { z } from "zod";
import { USER_ROLE, USER_STATUS } from "./user.constant";

const createAdminValidation = z.object({
  name: z.string().nonempty("Name is required"),
  role: z.nativeEnum(USER_ROLE).default(USER_ROLE.ADMIN),
  email: z.string().email("Invalid email format"),
  password: z.string().nonempty("Password is required"),
  status: z.nativeEnum(USER_STATUS).default(USER_STATUS.ACTIVE).optional(),
});
const updateAdminValidation = z.object({
  name: z.string().optional(),
  role: z.nativeEnum(USER_ROLE).default(USER_ROLE.ADMIN).optional(),
  status: z.nativeEnum(USER_STATUS).default(USER_STATUS.ACTIVE).optional(),
});

export const UserValidations = {
  createAdminValidation,
  updateAdminValidation,
};
