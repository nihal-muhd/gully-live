import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const streams = [
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
];

app.get("/streams/:id", (req, res) => {
  const stream = streams.find((s) => s.id === req.params.id);

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
