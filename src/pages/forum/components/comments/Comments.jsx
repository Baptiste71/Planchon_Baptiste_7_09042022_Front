import React from "react";
import "./_comments.scss";

const Comments = ({ post, comments }) => {
  return (
    <div id="commentsOfThePost">
      <p className="autor">by: {comments.username} </p>
      <p className="theComment">{comments.comments}</p>
    </div>
  );
};

export default Comments;
