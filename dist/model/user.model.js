"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const zod_1 = require("zod");
exports.User = zod_1.z.object({
    personid: zod_1.z.string(),
    name: zod_1.z.string(),
    email: zod_1.z.string(),
    uid: zod_1.z.string(),
    phone_number: zod_1.z
        .string()
        .min(8, { message: "Phone number is too short" })
        .max(12, { message: "Phone number is too long" }),
    password: zod_1.z
        .string()
        .min(6, { message: "Password is too short" })
        .max(20, { message: "Password is too long" })
        .optional(),
});
