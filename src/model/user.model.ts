import { z } from "zod";

export const User = z.object({
  personid: z.string(),
  name: z.string(),
  email: z.string(),
  uid: z.string(),
  phone_number: z
    .string()
    .min(8, { message: "Phone number is too short" })
    .max(12, { message: "Phone number is too long" }),
  password: z
    .string()
    .min(6, { message: "Password is too short" })
    .max(20, { message: "Password is too long" })
    .optional(),
});

export type User = z.infer<typeof User>;
