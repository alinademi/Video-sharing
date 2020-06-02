const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const { PORT, SERVER_URL } = process.env;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(cors());

const videosRoute = require("./routes/api/video");
app.use("/api/video", videosRoute);

app.listen(PORT, () => {
  console.log(`server is listening at: ${SERVER_URL}:${PORT}`);
});
