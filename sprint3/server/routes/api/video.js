const express = require("express");
const data = __dirname + "/../../models/data/videos.json";
const videos = require(data);
const router = express.Router();

//get all videos
router.get("/", (req, res) => {
  const videoList = videos.map((video) => {
    return {
      id: video.id,
      title: video.title,
      channel: video.channel,
      image: video.image,
    };
  });
  res.json(videoList);
});

//get specific video by id
router.get("/:id", (req, res) => {
  const isVideoFound = videos.some((video) => video.id === req.params.id);
  if (isVideoFound) {
    res.json(videos.filter((video) => video.id === req.params.id));
  } else {
    res
      .status(400)
      .json({ errorMessage: `Video ID:${req.params.id} not found` });
  }
});

module.exports = router;
