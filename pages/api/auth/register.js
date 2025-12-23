//This turns auth.js into an API route to avoid converting the signupform to a client side component.
// import bcrypt from "bcrypt";
// import clientPromise from "@/lib/mongodb";

// export default async function handler(req, res) {

//   if (req.method !== "POST") {
//     return res.status(405).end();
//   }

//    const formData = req.body;

//    const hashedPassword = await bcrypt.hash(formData.password, 10);

//   const client = await clientPromise;
//   const db = client.db("StarbucksDB");

//   await db.collection("users").insertOne({
//     ...formData,
//     password: hashedPassword,
//   });

//   res.status(201).json({ success: true });
// }

import { getCollection } from "@/lib/db";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false });
  }

  try {
    const { firstName, lastName, email, password } = req.body;

    const users = await getCollection("users");

    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        fieldErrors: {
          email: ["Email already exists"],
        },
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await users.insertOne({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    });

    return res.status(201).json({ success: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ success: false });
  }
}

