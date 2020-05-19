/*
===================================================
   POSTED COMMENTS LIST COMPONENT
===================================================
*/
import React from "react";
import moment from "moment";

const PostedComments = ({ postedComments }) => {
  const commentArray = postedComments.map((comment, i) => {
    return (
      <li key={i} className="posted-comments">
        <div className="posted-comments__image"></div>
        <div className="posted-comments__container">
          <h2 className="posted-comments__name">{comment.name}</h2>
          <div className="posted-comments__time">
            {moment(comment.date).startOf("hour").fromNow()}
          </div>
          <p className="posted-comments__comment">{comment.comment}</p>
        </div>
      </li>
    );
  });
  return commentArray;
};

export default PostedComments;
