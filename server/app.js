import express from "express";
import unwind from "./unwind";
import unwindRs from "./unwind-rs";
const app = express();

const raw = (req, res, next) => {
  const body = [];
  req.on("data", (chunk) => {
    body.push(chunk);
  });
  req.on("end", () => {
    req.rawBody = Buffer.concat(body);
    next();
  });
};

app.post("/api/unwind", raw, (req, res) => {
  res.end(unwind(req.rawBody.toString()));
});
app.post("/api/unwind-rs", raw, (req, res) => {
  res.end(unwindRs(req.rawBody.toString()));
});

app.listen(3080);
