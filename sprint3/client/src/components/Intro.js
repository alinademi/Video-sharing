/*
===================================================
   MAIN VIDEO INTRODUCTION TEXT & STAT COMPONENT
===================================================
*/
import React from "react";
import Likes from "../assets/Icons/SVG/Icon-likes.svg";
import Views from "../assets/Icons/SVG/Icon-views.svg";

const date = (d) => {
  return new Date(d).toLocaleDateString();
};

const Intro = ({ mainVideo }) => {
  const currentVideo = mainVideo.map((video, i) => {
    return (
      <div key={i} className="intro">
        <div className="intro__wrapper">
          <h1 className="intro__title">{video.title}</h1>
          <div className="intro__container">
            <div className="intro__info">
              <h2 className="intro__author">By {video.channel}</h2>
              <h4 className="intro__date">{date(video.timestamp)}</h4>
            </div>
            <div className="intro__counts">
              <img src={Views} className="intro__views" alt="Views" />
              <h4 className="intro__views-num">{video.views}</h4>
              <img src={Likes} className="intro__likes" alt="Likes" />
              <h4 className="intro__likes-num">{video.likes}</h4>
            </div>
          </div>
        </div>
        <p className="intro__description">{video.description}</p>
      </div>
    );
  });
  return currentVideo;
};

export default Intro;
