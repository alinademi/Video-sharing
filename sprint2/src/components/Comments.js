// /*
// ===================================================
//    POSTED COMMENTS LIST COMPONENT
// ===================================================
// */
// import React from "react";
// import moment from "moment";

// const PostedComments = ({ postedComments }) => {
//   const commentArray = postedComments.map((comment, i) => {
//     return (
//       <li key={i} className="posted-comments">
//         <div className="posted-comments__image"></div>
//         <div className="posted-comments__container">
//           <h2 className="posted-comments__name">{comment.name}</h2>
//           <div className="posted-comments__time">
//             {moment(comment.date).startOf("hour").fromNow()}
//           </div>
//           <p className="posted-comments__comment">{comment.comment}</p>
//         </div>
//       </li>
//     );
//   });
//   return commentArray;
// };

// export default PostedComments;

// /*
// ===================================================
//    COMMENT FORM COMPONENT
// ===================================================
// */

// const CommentsForm = (props) => {
//   return (
//     <div className="comment-form">
//       <h3 className="comment-form__count">{props.comments.length}</h3>
//       <div className="comment-form__title-wrapper">
//         <div className="comment-form__avatar"></div>
//         <form className="comment-form__form">
//           <label className="comment-form__label" htmlFor="comment">
//             JOIN THE CONVERSATION
//           </label>
//           <br />
//           <textarea
//             className="comment-form__input"
//             name="comment"
//             rows="10"
//             cols="50"
//             placeholder="Write comment here"
//           ></textarea>
//           <button className="comment-form__submit">COMMENT</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CommentsForm;
