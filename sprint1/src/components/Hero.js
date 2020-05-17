import React from "react";
import Video from "../assets/Video/BrainStation Sample Video.mp4";
import Poster from "../assets/Images/video-list-0.jpg";

const Hero = () => {
  return (
    <div className="hero">
      <video className="hero__video" controls poster={Poster}>
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Hero;
