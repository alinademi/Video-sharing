// /*
// ===================================================
//    POSTED COMMENTS LIST COMPONENT + COMMENT FORM
// ===================================================
// */

import React from "react";
import moment from "moment";
import axios from "axios";

const API_KEY = "?api_key=ff56bb61-7021-48f0-8297-e241d5d54256";
const base_URL = "https://project-2-api.herokuapp.com/videos";

export default function Comments(props) {
  console.log(props);
  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = {
      name: "BrainStation Man",
      comment: e.target.comment.value,
    };
    //SENDING COMMENTS TO API
    axios
      .post(`${base_URL}/${props.commentId}/comments${API_KEY}`, comment)
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
                    {moment(comment.timestamp).startOf("minutes").fromNow()}
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
