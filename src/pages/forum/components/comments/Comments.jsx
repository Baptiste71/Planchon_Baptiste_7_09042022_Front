import React from "react";

const Comments = ({ post, comments }) => {
  const postComments = () => {
    const theComment = comments.comments;
    if (post.id === comments.postid) {
      return [theComment];
    }
  };

  return (
    <div id="commentsOfThePost" onClick={postComments}>
      <p className="autor">by: {comments.username} </p>
      <p className="theComment">{comments.comment}</p>
    </div>
  );
};

export default Comments;
