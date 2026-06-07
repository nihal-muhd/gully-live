import express from "express";
import cors from "cors";

const app = express();

app.use(cors());

const comments = [
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
];

app.get("/comments/:streamId", (req, res) => {
  const streamComments = comments.filter(
    (c) => c.streamId === req.params.streamId,
  );

  res.json(streamComments);
});

app.listen(5003, () => {
  console.log("🚀 Comment Service running on http://localhost:5003");
});
