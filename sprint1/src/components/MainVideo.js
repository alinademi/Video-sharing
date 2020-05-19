/*
===================================================
   MAIN VIDEO COMPONENT
===================================================
*/
import React from "react";
import Video from "../assets/Video/BrainStation Sample Video.mp4";
import Poster from "../assets/Images/video-list-0.jpg";
import Play from "../assets/Icons/SVG/Icon-play.svg";
import Fullscreen from "../assets/Icons/SVG/Icon-fullscreen.svg";
import Volume from "../assets/Icons/SVG/Icon-volume.svg";
// import Scrubber from ".icons/Icon-scrubber-control.svg";

const MainVideo = () => {
  return (
    <div className="main-video">
      <div className="video-player">
        <div className="video-player__controls">
          <button className="video-player__btn">
            <img src={Play} alt="Play control" />
          </button>

          <div className="video-player__progress-bar">
            <div className="video-player__progress-timeline">
              <div className="video-player__progress-scrubber"></div>
            </div>
            <div className="video-player__progress-text">0:00 / 0:42</div>
          </div>

          <div className="video-player__btn-group">
            <button className="video-player__btn">
              <img src={Fullscreen} alt="Fullscreen control" />
            </button>
            <button className="video-player__btn">
              <img src={Volume} alt="Volume control" />
            </button>
          </div>
        </div>
        <video className="main-video__video" poster={Poster}>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default MainVideo;
