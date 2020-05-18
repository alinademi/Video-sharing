import React from "react";
import Video from "../assets/Video/BrainStation Sample Video.mp4";
import Poster from "../assets/Images/video-list-0.jpg";

const MainVideo = () => {
  return (
    <div className="main-video">
      <video className="main-video__video" controls poster={Poster}>
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
};

export default MainVideo;
