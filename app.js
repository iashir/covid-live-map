const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5000;
app.use(express.static(path.join(__dirname, "client", "build")));

app.use(cors());
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
app.listen(port, () => {
  console.log("Server is up!");
});
