// /*
// ===================================================
//    POSTED COMMENTS LIST COMPONENT + COMMENT FORM
// ===================================================
// */

import React from "react";
import moment from "moment";
import axios from "axios";

export default function Comments(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const comment = {
      name: "BrainStation Man",
      comment: e.target.comment.value,
    };

    axios
      .post(
        `https://project-2-api.herokuapp.com/videos/${this.props.match.params.id}/comments?api_key=ff56bb61-7021-48f0-8297-e241d5d54256`,
        comment
      )
      .then((res) => {
        console.log(res.data);
        e.target.reset();
      });
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
        {props.comments.map((comment) => {
          return (
            <li key={comment.id} className="posted-comments">
              <div className="posted-comments__image"></div>
              <div className="posted-comments__container">
                <h2 className="posted-comments__name">{comment.name}</h2>
                <div className="posted-comments__time">
                  {moment(comment.date).startOf("minutes").fromNow()}
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
