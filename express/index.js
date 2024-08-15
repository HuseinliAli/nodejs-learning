import express from "express";

const cfg = {
  port: process.env.PORT || 3000,
};
const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});
app.listen(cfg.port, () => {
  console.log(`hello from ${cfg.port}`);
});
