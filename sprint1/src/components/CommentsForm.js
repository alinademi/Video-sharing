import React from "react";

const CommentsForm = () => {
  return (
    <div className="comment-form">
      <h3 className="comment-form__count">3 Comments</h3>
      <div className="comment-form__title-wrapper">
        <div className="comment-form__avatar"></div>
        <div className="comment-form__title">
          <form className="comment-form__form">
            <div className="comment-form__input-title">
              <p>JOIN THE CONVERSATION</p>
              <textarea
                className="comment-form__input"
                name="comment"
                rows="10"
                cols="50"
                placeholder="Add a new comment"
              ></textarea>
            </div>
            <div className="comment-form__submit-container">
              <button className="comment-form__submit">COMMENT</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CommentsForm;
