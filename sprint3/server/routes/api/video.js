const express = require("express");
const data = __dirname + "/../../models/data/videos.json";
const videos = require(data);
const helper = require("../../helper/helper");
const router = express.Router();

//get all videos
router.get("/", (req, res) => {
  const videoList = videos.map((video) => {
    return {
      id: video.id,
      title: video.title,
      channel: video.channel,
      image: video.image,
      description: video.description,
      comments: video.comments,
      likes: video.likes,
      duration: video.duration,
      video: video.video,
      timestamp: video.timestamp,
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

// Route to upload video
router.post("/", (req, res) => {
  const newVideo = {
    id: helper.getNewId(),
    title: req.body.title,
    description: req.body.description,
    channel: "Ali Nademi",
    image: req.body.image,
    comments: [],
  };
  if (!newVideo.title || !newVideo.description || !newVideo.image) {
    return res.status(400).json({
      errorMessage:
        "Please provide title, description, and image for the video",
    });
  }
  videos.push(newVideo);
  helper.writeJSONFile(data, videos);
  res.json(videos);
});
module.exports = router;
