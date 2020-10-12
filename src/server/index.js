const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("dist"));

app.get("/api/getSth", (req, res) =>
  res.send({ data: "sth" })
);

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on: ${process.env.PORT || 8080}!`)
);