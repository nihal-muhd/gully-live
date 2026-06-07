import express from "express";
import cors from "cors";
import { connectDB, db } from "./db";

const app = express();

app.use(cors());
app.use(express.json());

async function bootstrap() {
  await connectDB();

  const commentsCollection = db.collection("comments");

  app.get("/comments/:streamId", async (req, res) => {
    const comments = await commentsCollection
      .find({
        streamId: req.params.streamId,
      })
      .toArray();

    res.json(comments);
  });

  app.listen(5003, () => {
    console.log("🚀 Comment Service running on http://localhost:5003");
  });
}

bootstrap();
