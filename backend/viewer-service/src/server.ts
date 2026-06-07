import express from "express";
import cors from "cors";
import { connectDB, db } from "./db";

const app = express();

app.use(cors());
app.use(express.json());

async function bootstrap() {
  await connectDB();

  const viewersCollection = db.collection("viewers");

  app.get("/viewers", async (req, res) => {
    const viewers = await viewersCollection.find().toArray();
    res.json(viewers);
  });

  app.get("/viewers/:streamId", async (req, res) => {
    const viewer = await viewersCollection.findOne({
      streamId: req.params.streamId,
    });

    if (!viewer) {
      return res.status(404).json({
        message: "Viewer data not found",
      });
    }

    res.json(viewer);
  });

  app.listen(5002, () => {
    console.log("🚀 Viewer Service running on http://localhost:5002");
  });
}

bootstrap();
