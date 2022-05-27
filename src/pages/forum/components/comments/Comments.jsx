import React from "react";
import "./_comments.scss";
import axios from "axios";
import CloseIcon from "@material-ui/icons/Close";

const Comments = ({ post, comments }) => {
  const token = localStorage.getItem("token");

  const deleteComment = () => {
    axios
      .post(
        process.env.REACT_APP_BDD_LINK + "/api/comments/delete",
        { id: comments.id },
        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          alert("Comment deleted");
        } else {
          alert("Comment not deleted");
        }
      });
  };

  return (
    <div id="commentsOfThePost">
      <p className="autor">by: {comments.username} </p>
      <p className="theComment">{comments.comments}</p>
      <div className="deletecomment">
        <CloseIcon className="deleteCross" onClick={deleteComment} />
      </div>
    </div>
  );
};

export default Comments;
