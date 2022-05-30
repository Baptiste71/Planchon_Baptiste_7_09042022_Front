import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import CloseIcon from "@material-ui/icons/Close";
import "./_one_post.scss";
import Comments from "../comments/Comments";

// carte complete d'un post: auteur, image, message, commentaire, like/dislike

const One_post = (props) => {
  const { register, handleSubmit } = useForm();
  const token = localStorage.getItem("token");
  const [allCommentsOfPosts, setAllCommentsOfPosts] = useState([]);

  const createComment = async (data) => {
    try {
      let dataToSend = new FormData();

      dataToSend.append("comment", data.content);
      dataToSend.append("postId", props.post.id);

      await axios
        .post(process.env.REACT_APP_BDD_LINK + "/api/comments/:id/comment", dataToSend, {
          headers: {
            authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          if (res.status === 201) {
            alert("Comment created");
            getComments();
            data.content = "";
            props.post.comments = res.comments;
          } else {
            alert("Comment not created");
          }
        });
    } catch (error) {
      if (error.response) {
        console.log(error);
      }
    }
  };

  // Suppression d'un post

  const deletePost = () => {
    axios
      .post(
        process.env.REACT_APP_BDD_LINK + "/api/posts/delete",
        { id: props.post.id },
        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        if (res.status === 200) {
          props.post.visibility = "hidden";
          alert("Post deleted");
          props.getAllPosts();
          props.getLastPost();
        } else {
          alert("Post not deleted");
        }
      });
  };

  const getComments = async () => {
    await axios
      .post(
        process.env.REACT_APP_BDD_LINK + "/api/comments",
        { id: props.post.id },
        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => setAllCommentsOfPosts(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div id="cardPost" className="card" onClick={getComments}>
      <div className="deletePost">
        <CloseIcon className="deleteCross" onClick={deletePost} />
      </div>
      <p className="userName">by: {props.post.username}</p>
      <img src={props.post.image} alt="image du post" />
      <p className="msg">{props.post.message}</p>

      <form className="comments" onSubmit={handleSubmit(createComment)}>
        <input
          type="text"
          name="comments"
          placeholder="What do you think about this post?"
          className="messageComment"
          {...register("content", {
            required: true,
          })}
        />
        <input type="submit" value="Send" className="arrow_sendComments" onSubmit={createComment} />
      </form>
      {allCommentsOfPosts.map((singleComment, index) => (
        <Comments key={index} comments={singleComment} />
      ))}
    </div>
  );
};

export default One_post;
