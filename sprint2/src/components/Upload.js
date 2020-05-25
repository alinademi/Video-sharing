import React from "react";
import thumbnail from "../assets/Images/Upload-video-preview.jpg";
const Upload = () => {
  return (
    <section className="upload">
      <div className="upload__container">
        <h1 className="upload__heading">Upload Video</h1>
        <form className="upload__form">
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
        </form>
        <div className="upload__button-wrapper">
          <button className="upload__button-publish">PUBLISH</button>
          <button className="upload__button-cancel">CANCEL</button>
        </div>
      </div>
    </section>
  );
};

export default Upload;
