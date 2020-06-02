// /*
// ===================================================
//    POSTED COMMENTS LIST COMPONENT + COMMENT FORM
// ===================================================
// */

import React from "react";
import moment from "moment";
import axios from "axios";

const base_URL = "/api/video";

export default function Comments(props) {
  console.log(props);
  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = {
      name: "User",
      comment: e.target.comment.value,
    };
    //SENDING COMMENTS TO API
    axios
      .post(`${base_URL}/${props.commentId}/comments`, comment)
      .then((res) => {
        props.apiCall();
      })
      .catch((error) => console.log(error));

    e.target.reset();
  };

  return (
    <>
      <div className="comment-form">
        <h3 className="comment-form__count">
          {props.comments.length} Comments
        </h3>
        <div className="comment-form__title-wrapper">
          <div className="comment-form__avatar"></div>
          <form className="comment-form__form" onSubmit={handleSubmit}>
            <label className="comment-form__label" htmlFor="comment">
              JOIN THE CONVERSATION
            </label>
            <br />
            <textarea
              className="comment-form__input"
              name="comment"
              rows="10"
              cols="50"
              placeholder="Write comment here"
            ></textarea>
            <button className="comment-form__submit">COMMENT</button>
          </form>
        </div>
      </div>
      <ul className="comment__container">
        {props.comments
          .sort((a, b) => {
            return b.timestamp - a.timestamp;
          })
          .map((comment) => {
            return (
              <li key={comment.id} className="posted-comments">
                <div className="posted-comments__image"></div>
                <div className="posted-comments__container">
                  <h2 className="posted-comments__name">{comment.name}</h2>
                  <div className="posted-comments__time">
                    {moment(comment.timestamp).startOf("seconds").fromNow()}
                  </div>
                  <p className="posted-comments__comment">{comment.comment}</p>
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
}
