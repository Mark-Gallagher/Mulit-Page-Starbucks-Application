import express from "express";
import { getCollection } from "./db.js";

const app = express();

// Middleware to parse JSON
app.use(express.json());

// Example form submission route
app.post("/submit", async (req, res) => {
  try {
    const collection = await getCollection("users"); // replace "users" with your collection name
    const result = await collection.insertOne(req.body); // req.body contains form data
    res.status(201).json({ message: "Data saved!", id: result.insertedId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to save data" });
  }
});

// Test route
app.get("/", async (req, res) => {
  res.send("Server is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
