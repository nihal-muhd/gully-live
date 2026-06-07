import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const viewers = [
  {
    streamId: "1",
    viewerCount: 128,
  },
  {
    streamId: "2",
    viewerCount: 43,
  },
];

app.get("/viewers/:streamId", (req, res) => {
  const viewer = viewers.find((v) => v.streamId === req.params.streamId);

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
