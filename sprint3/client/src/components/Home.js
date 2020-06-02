import React from "react";
import MainVideo from "./MainVideo";
import Intro from "./Intro";
import Comments from "./Comments";
import Videos from "./Videos";
import axios from "axios";

const base_URL = "/api/video";
const currentVideoId = "1af0jruup5gu";

class Home extends React.Component {
  state = {
    sideVideos: [],
    mainVideo: [],
    comments: [],
    upNext: [],
  };
  //
  // MOUNTING RETRIEVED DATA
  componentDidMount() {
    this.apiCall();
  }
  //
  // STORING THE WHOLE REQUEST IN A VARIABLE TO BE ABLE TO PASS IT AS PROPS
  // THIS CAN BE USED TO GET THE LATEST DATA AFTER CRUD OPERATIONS LIKE DELETE
  // OR POST E.G COMMENTS.
  apiCall = () =>
    axios.get(`${base_URL}`).then((res) => {
      const upNext = res.data;
      //RETRIEVING CURRENT VIDEO
      axios.get(`${base_URL}/${currentVideoId}`).then((res) => {
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
  //
  // SWITCHING MAIN VIDEO WITH ANOTHER FROM VIDEO LIST BASED ON ID
  componentDidUpdate(prevProps) {
    if (prevProps.match !== this.props.match) {
      axios.get(`${base_URL}/${this.props.match.params.id}`).then((res) => {
        const mainVideo = res.data;
        const comments = res.data.comments;
        let sideVideos = this.state.upNext.filter(
          (video) => video.id !== this.props.match.params.id
        );
        this.setState({ sideVideos, mainVideo: [mainVideo], comments });
      });
    }
  }
  //
  // HTML RENDER METHOD FOR THE RECEIVED DATA
  render() {
    if (this.state.mainVideo.length === 0) {
      return <div>Please wait for the video to display...</div>;
    }
    return (
      <section>
        <MainVideo mainVideo={this.state.mainVideo[0][0]} />
        <section className="main-wrapper">
          <div className="main__column--right">
            <Intro mainVideo={this.state.mainVideo[0]} />
            <Comments
              comments={this.state.mainVideo[0][0].comments}
              commentId={this.state.mainVideo[0][0].id}
              apiCall={this.apiCall}
            />
          </div>
          <aside className="upnext">
            <Videos
              sideVideos={this.state.sideVideos}
              mainVideo={this.state.mainVideo[0]}
            />
          </aside>
        </section>
      </section>
    );
  }
}

export default Home;
