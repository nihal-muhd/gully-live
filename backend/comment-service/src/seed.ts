import { connectDB, db } from "./db";

async function seed() {
  await connectDB();

  const commentsCollection = db.collection("comments");

  await commentsCollection.deleteMany({});

  await commentsCollection.insertMany([
    {
      id: "1",
      streamId: "1",
      message: "What a shot!",
    },
    {
      id: "2",
      streamId: "1",
      message: "Six runs!",
    },
    {
      id: "3",
      streamId: "2",
      message: "Nice goal!",
    },
  ]);

  console.log("✅ Comments seeded successfully");

  process.exit(0);
}

seed();
