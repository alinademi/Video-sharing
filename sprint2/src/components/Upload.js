import React from "react";
import thumbnail from "../assets/Images/Upload-video-preview.jpg";
const Upload = () => {
  return (
    <div className="upload">
      <div className="upload__margin">
        <h1 className="upload__title">Upload Video</h1>
        <form className="upload__flex">
          <div>
            <h4 className="upload__description">VIDEO THUMBNAIL</h4>
            <img className="upload__image" src={thumbnail} alt="thumbnail" />
          </div>
          <div className="upload__flex-two">
            <p className="upload__description">TITLE YOUR VIDEO</p>
            <input
              className="upload__form-title"
              name="title"
              placeholder="Add a title to your video"
              autoComplete="off"
            />
            <p className="upload__description">ADD A VIDEO DESCRIPTION</p>
            <textarea
              className="upload__form-description"
              name="description"
              rows="10"
              cols="50"
              placeholder="Add a description of your video"
            ></textarea>
          </div>
        </form>
        <div className="upload__button-container">
          <button className="upload__button-publish">PUBLISH</button>
          <button className="upload__button-cancel">CANCEL</button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
