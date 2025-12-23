//Form Validation
import { z } from "zod";

export const RegisterFormSchema = z
  .object({
    firstName: z
      .string()
      .min(2, { message: "First name must be at least 2 characters long" })
      .max(50, { message: "First name is too long" }),

    lastName: z
      .string()
      .min(2, { message: "Last name must be at least 2 characters long" })
      .max(50, { message: "Last name is too long"}),

    email: z
      .string()
      .regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        {message: "Please enter a valid email address"}
    ).trim(),

    password: z
      .string()
      .min(1, "Password must not be empty")
      .min(8, "Password must be at least 8 characters long")
      .max(25, "Password must be at most 25 characters long")
      .regex(/[a-zA-Z]/, {message:"Password must contain at least one uppercase letter"})
      .regex(/[0-9]/, {message:"Password must contain at least one number"})
      .regex(
        /[!@#$%^&*]/,
        {message:"Password must contain at least one special character"}
      ).trim(),

    confirmPassword: z.string().trim(),

  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match",
  });

