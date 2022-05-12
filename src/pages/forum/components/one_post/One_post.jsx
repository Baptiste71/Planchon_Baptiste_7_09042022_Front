import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./_one_post.scss";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";

// carte complete d'un post: auteur, image, message, commentaire, like/dislike

const One_post = ({ post }) => {
  const { register, handleSubmit } = useForm();
  const token = localStorage.getItem("token");
  let [like, setLike] = useState(+1);
  let [dislike, setDislike] = useState(+1);

  const likePost = async (e) => {
    try {
      e.preventDefault();
      const postId = post.id;

      if (setLike) {
        like = true;
        dislike = false;
      } else if (setDislike) {
        like = false;
        dislike = true;
      }

      const dataToSend = [postId, like, dislike];
      await axios.post("http://localhost:5000/api/posts/:id/like", dataToSend, {
        headers: {
          authorization: "Bearer " + token,
        },
      });
    } catch (error) {
      if (error.response) {
        console.log(error);
      }
    }
  };

  const createComment = async (data) => {
    try {
      let dataToSend = new FormData();

      dataToSend.append("comment", data.content);

      await axios
        .post("http://localhost:5000/api/comments/:id/comment", dataToSend, {
          headers: {
            authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          if (res.status === 201) {
            data.content = null;
            alert("Comment created");
            post = res.data;
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

  return (
    <div className="card">
      <p className="userName">by:{post.username}</p>
      <img src={post.image} alt="image du post" />
      <p className="msg">{post.message}</p>
      <div className="likesAndComments">
        <form className="likesAndDislikes" onSubmit={likePost}>
          <button className="likes" onSubmit={setLike}>
            <ThumbUpAltIcon /> {like}
          </button>
          <button className="dislikes" onSubmit={setDislike}>
            <ThumbDownIcon /> {dislike}
          </button>
        </form>
        <p className="commentsCounter">comments:{post.commentscounter}</p>
        <form className="comments" onSubmit={handleSubmit(createComment)}>
          <input
            type="text"
            name="comments"
            placeholder="What do you think about this post?"
            className="inputComment"
            {...register("content", {
              required: true,
            })}
          />
          <input type="submit" value="Send" className="btnComment" onSubmit={createComment} />
        </form>
      </div>
    </div>
  );
};

export default One_post;
