import z from "zod";
import {
    confirmPassword,
    email, password
} from "./core";

export const registrationSchema = z.object({
    password: password,
    confirmPassword: password,
    email: email,
})
    .superRefine(confirmPassword);

export type registrationFormSchema = z.infer<typeof registrationSchema>
