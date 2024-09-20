import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "email is required bruh!"
    }),
    password: z.string().min(1, {
        message: "password is required bruh!"
    })
});

export const RegisterSchema = z.object({
    email: z.string().email({
        message: "email is required bruh!"
    }),
    password: z.string().min(6, {
        message: "password should be longer than 6!"
    }),
    name: z.string().min(1, {
        message: "name is required bruh!"
    })
});





