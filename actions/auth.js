// export function register() {
//     console.log("Register action called!");
// }

"use server";
import bcrypt from "bcrypt"
import { getCollection } from "@/lib/db";
import { RegisterFormSchema } from "@/lib/rules";

//Server Actions
export async function registerAction(formData) {
  // Validate form fields
  // 1. Convert formData → JS object
  const data = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
  };

  // 2. Validate with Zod schema
  const parsed = RegisterFormSchema.safeParse(data);

  if (!parsed.success) {
    return {
      success: false,
      fieldErrors: parsed.error.flatten().fieldErrors,
      // errors: parsed.error.flatten().fieldErrors,
    };
  }

  const { firstName, lastName, email, password } = parsed.data;

  // 3. Check if user already exists
  const userCollection = await getCollection("users");

  if (!userCollection) {
    return {
      error: { email: "Server Error!" },
    };
  }

  // 4. Check if email exists
  const existingUser = await userCollection.findOne({ email });

  if (existingUser) {
    return {
      success: false,
      fieldErrors: {
        email: ["Email is already registered"],
      },
    };
  }

  // 5. Hash password
  const hashedPassword = await bcrypt.hash(password, 12);

  // 6. Insert user
  await userCollection.insertOne({
    firstName,
    lastName,
    email,
    password: hashedPassword,
    createdAt: new Date(),
  });

  return { success: true };
}