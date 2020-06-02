import React, { Component } from "react";
import thumbnail from "../assets/Images/Upload-video-preview.jpg";
import axios from "axios";

class Upload extends Component {
  state = {
    videos: [],
  };
  componentDidMount() {
    axios.get("/api/video").then((res) => {
      this.setState({
        videos: res.data,
      });
    });
  }
  //POSTING NEW VIDEOS
  handleFormSubmit = (event) => {
    axios
      .post("/api/video", {
        title: event.target.title.value,
        description: event.target.description.value,
        image: "https://i.imgur.com/CyD0XmE.jpg",
      })
      .then((res) => {
        this.setState({
          videos: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    event.target.reset();
  };

  render() {
    if (!this.state.videos) {
      return <p>Loading</p>;
    }

    return (
      <section className="upload">
        <div className="upload__container">
          <h1 className="upload__heading">Upload Video</h1>
          <form className="upload__form" onSubmit={this.handleFormSubmit}>
            <div>
              <p className="upload__field-title">VIDEO THUMBNAIL</p>
              <img
                className="upload__video-thumbnail"
                src={thumbnail}
                alt="thumbnail"
              />
            </div>
            <div className="upload__input-wrapper">
              <p className="upload__field-title">TITLE YOUR VIDEO</p>
              <input
                className="upload__title-input"
                name="title"
                placeholder="Add a title to your video"
                autoComplete="off"
              />
              <p className="upload__field-title">ADD A VIDEO DESCRIPTION</p>
              <textarea
                className="upload__description-input"
                name="description"
                rows="10"
                cols="50"
                placeholder="Add a description of your video"
              ></textarea>
            </div>

            <div className="upload__button-wrapper">
              <button className="upload__button-publish">PUBLISH</button>
              <button className="upload__button-cancel">CANCEL</button>
            </div>
          </form>
        </div>
      </section>
    );
  }
}

export default Upload;
