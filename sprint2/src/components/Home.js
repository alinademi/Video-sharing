import React from "react";
import MainVideo from "./MainVideo";
import Intro from "./Intro";
// import PostedComments from "./PostedComments";
// import CommentsForm from "./CommentsForm";
import Videos from "./Videos";
import axios from "axios";

// "api_key": "ff56bb61-7021-48f0-8297-e241d5d54256"

class Home extends React.Component {
  state = {
    sideVideos: [],
    mainVideo: [],
    comments: [],
    allVideos: [],
  };

  componentDidMount() {
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos?api_key=ff56bb61-7021-48f0-8297-e241d5d54256"
      )
      .then((res) => {
        const allVideos = res.data;

        axios
          .get(
            "https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=ff56bb61-7021-48f0-8297-e241d5d54256"
          )
          .then((res) => {
            let sideVideos = allVideos.filter(
              (video) => video.id !== "1af0jruup5gu"
            );
            const mainVideo = res.data;
            const comments = res.data.comments;
            this.setState({
              sideVideos,
              mainVideo: [mainVideo],
              comments,
              allVideos,
            });
          });
      });
  }

  //SWITCHING VIDEOS
  componentDidUpdate(prevProps) {
    if (prevProps.match !== this.props.match) {
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}?api_key=ff56bb61-7021-48f0-8297-e241d5d54256`
        )
        .then((res) => {
          const mainVideo = res.data;
          const comments = res.data.comments;
          let sideVideos = this.state.allVideos.filter(
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
        {/* <Header /> */}
        <MainVideo mainVideo={this.state.mainVideo[0].image} />
        <section className="main-wrapper">
          <div className="main__column--right">
            <Intro mainVideo={this.state.mainVideo} />

            {/* <CommentsForm /> */}
            <ul className="comment__container">
              {/* <Comments postedComments={this.state.currentVideo[0].comments} /> */}
            </ul>
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
