import { connectDB, db } from "./db";

async function seed() {
  await connectDB();

  const viewersCollection = db.collection("viewers");

  await viewersCollection.deleteMany({});

  await viewersCollection.insertMany([
    {
      streamId: "1",
      viewerCount: 128,
    },
    {
      streamId: "2",
      viewerCount: 43,
    },
  ]);

  console.log("✅ Viewers seeded successfully");
  process.exit(0);
}

seed();
