import z from "zod";
import { email, password } from "./core";

export const loginSchema = z.object({
    email: email,
    password: password
});

export type loginFormSchema = z.infer<typeof loginSchema>
