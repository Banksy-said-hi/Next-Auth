import * as z from "zod";

export const LoginSchema = z.object({
    email: z.string().email({
        message: "email is required bruh!"
    }),
    password: z.string().min(1, {
        message: "password is required bruh!"
    })
});



