import { connectDB, db } from "./db";

async function seed() {
  await connectDB();

  const streamsCollection = db.collection("streams");

  await streamsCollection.deleteMany({});

  await streamsCollection.insertMany([
    {
      id: "1",
      title: "Gully Cricket Match",
      status: "LIVE",
    },
    {
      id: "2",
      title: "Football Evening Match",
      status: "ENDED",
    },
  ]);

  console.log("✅ Streams seeded successfully");
  process.exit(0);
}

seed();
