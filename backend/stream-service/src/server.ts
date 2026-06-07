import express from "express";
import cors from "cors";
import { connectDB, db } from "./db";

const app = express();

app.use(cors());
app.use(express.json());

async function bootstrap() {
  await connectDB();

  const streamsCollection = db.collection("streams");

  app.get("/streams", async (req, res) => {
    const streams = await streamsCollection.find().toArray();
    console.log(streams);

    res.json(streams);
  });

  app.get("/streams/:id", async (req, res) => {
    const stream = await streamsCollection.findOne({
      id: req.params.id,
    });

    if (!stream) {
      return res.status(404).json({
        message: "Stream not found",
      });
    }

    res.json(stream);
  });

  app.listen(5001, () => {
    console.log("🚀 Stream Service running on http://localhost:5001");
  });
}

bootstrap();
