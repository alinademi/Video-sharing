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

//ROUTE FOR POSTING COMMENT BY SELECTING SPECIFIC VIDEO BY ID
router.post("/:id/comments", (req, res) => {
  const video = videos.find((video) => {
    return video.id === req.params.id;
  });
  console.log(video);
  if (video) {
    const newComment = {
      id: helper.getNewId(),
      name: req.body.name,
      comment: req.body.comment,
      timestamp: new Date().getTime(),
    };
    if (!newComment.name || !newComment.comment) {
      return res.status(400).json({
        errorMessage: " Please fill in all the fields",
      });
    }
    //ADDING A NEW COMMENT TO THE ARRAY OF COMMENTS BY ID
    video.comments.push(newComment);
    videos.forEach((newVideo) => {
      if (newVideo.id === video.id) {
        newVideo = video;
      }
    });
    helper.writeJSONFile(data, videos);
    res.json(video);
  } else {
    res.status(404).json({
      error: `Sorry!! The video ${req.params.id} not found`,
    });
  }
});
module.exports = router;
