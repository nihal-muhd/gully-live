import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const mongoUrl = process.env.MONGO_URL;

if (!mongoUrl) {
  throw new Error("MONGO_URL is missing in .env");
}

const client = new MongoClient(mongoUrl);

export const db = client.db("gullylive");

export async function connectDB() {
  await client.connect();
  console.log("✅ Stream Service connected to MongoDB");
}
