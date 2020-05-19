/*
===================================================
   COMMENT FORM COMPONENT
===================================================
*/
import React from "react";

const CommentsForm = () => {
  return (
    <div className="comment-form">
      <h3 className="comment-form__count">3 Comments</h3>
      <div className="comment-form__title-wrapper">
        <div className="comment-form__avatar"></div>
        <form className="comment-form__form">
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
  );
};

export default CommentsForm;
