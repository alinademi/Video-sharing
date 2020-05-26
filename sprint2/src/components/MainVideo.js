/*
===================================================
   MAIN VIDEO COMPONENT
===================================================
*/
import React from "react";
import Video from "../assets/Video/BrainStation Sample Video.mp4";
import Play from "../assets/Icons/SVG/Icon-play.svg";
import Fullscreen from "../assets/Icons/SVG/Icon-fullscreen.svg";
import Volume from "../assets/Icons/SVG/Icon-volume.svg";

class MainVideo extends React.Component {
  constructor(props) {
    super(props);
    this.currentVideo = React.createRef();
  }

  render() {
    return (
      <div className="main-video">
        <div className="video-player">
          <div className="video-player__controls">
            <button
              className="video-player__btn video-player__btn-play"
              onClick={() =>
                this.currentVideo.current.paused
                  ? this.currentVideo.current.play()
                  : this.currentVideo.current.pause()
              }
            >
              <img src={Play} alt="Play control" />
            </button>

            <div className="video-player__progress-bar">
              <div className="video-player__progress-timeline">
                <div className="video-player__progress-scrubber"></div>
              </div>
              <div className="video-player__progress-text">
                {this.props.mainVideo.duration}
              </div>
            </div>
            <div className="video-player__btn-group">
              <button className="video-player__bt">
                <img src={Fullscreen} alt="Fullscreen control" />
              </button>
              <button className="video-player__btn">
                <img src={Volume} alt="Volume control" />
              </button>
            </div>
          </div>
          <video
            id={this.props.mainVideo.id}
            ref={this.currentVideo}
            className="main-video__video"
            poster={this.props.mainVideo.image}
          >
            <source src={Video} type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }
}
export default MainVideo;
