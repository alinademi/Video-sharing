/*
===================================================
   SIDE VIDEOS (UP NEXT) COMPONENT
===================================================
*/
import React from "react";
import { Link } from "react-router-dom";

const Videos = ({ sideVideos }) => {
  const videosArray = sideVideos.map((video, i) => {
    return (
      <Link
        to={`/video/${video.id}`}
        id={video.id}
        key={i}
        className="video__link"
      >
        <img className="video__image" src={video.image} alt={video.title} />
        <div className="video__sub">
          <h2 className="video__sub-title">{video.title}</h2>
          <h3 className="video__sub-name">{video.channel}</h3>
        </div>
      </Link>
    );
  });
  return (
    <div className="video">
      <h4 className="video__next">NEXT VIDEO</h4>
      {videosArray}
    </div>
  );
};

export default Videos;
