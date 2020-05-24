import React from "react";
import MainVideo from "./MainVideo";
import Intro from "./Intro";
import Comments from "./Comments";
import Videos from "./Videos";
import axios from "axios";

const API_KEY = "?api_key=ff56bb61-7021-48f0-8297-e241d5d54256";
const base_URL = "https://project-2-api.herokuapp.com/videos";
const currentVideoId = "1af0jruup5gu";

class Home extends React.Component {
  state = {
    sideVideos: [],
    mainVideo: [],
    comments: [],
    upNext: [],
  };

  componentDidMount() {
    axios.get(`${base_URL}${API_KEY}`).then((res) => {
      const upNext = res.data;

      axios.get(`${base_URL}/${currentVideoId}${API_KEY}`).then((res) => {
        let sideVideos = upNext.filter(
          (video) => video.id !== { currentVideoId }
        );
        const mainVideo = res.data;
        const comments = res.data.comments;
        this.setState({
          sideVideos,
          mainVideo: [mainVideo],
          comments,
          upNext,
        });
      });
    });
  }

  //SWITCHING VIDEOS
  componentDidUpdate(prevProps) {
    if (prevProps.match !== this.props.match) {
      axios
        .get(`${base_URL}/${this.props.match.params.id}${API_KEY}`)
        .then((res) => {
          const mainVideo = res.data;
          const comments = res.data.comments;
          let sideVideos = this.state.upNext.filter(
            (video) => video.id !== this.props.match.params.id
          );
          this.setState({ sideVideos, mainVideo: [mainVideo], comments });
        });
    }
  }

  //HTML RENDER/RETURN
  render() {
    if (this.state.mainVideo.length === 0) {
      return <div>Please wait for the video to display</div>;
    }
    return (
      <section>
        <MainVideo mainVideo={this.state.mainVideo[0].image} />
        <section className="main-wrapper">
          <div className="main__column--right">
            <Intro mainVideo={this.state.mainVideo} />
            <Comments comments={this.state.mainVideo[0].comments} />
          </div>
          <aside className="upnext">
            <Videos
              sideVideos={this.state.sideVideos}
              mainVideo={this.state.mainVideo}
            />
          </aside>
        </section>
      </section>
    );
  }
}

export default Home;
