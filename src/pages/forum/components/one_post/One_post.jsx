import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./_one_post.scss";
import Comments from "../comments/Comments";

// carte complete d'un post: auteur, image, message, commentaire, like/dislike

const One_post = ({ post, comments }) => {
  const { register, handleSubmit } = useForm();
  const token = localStorage.getItem("token");
  const [allCommentsOfPosts, setAllCommentsOfPosts] = useState([]);

  const createComment = async (data) => {
    try {
      let dataToSend = new FormData();

      dataToSend.append("comment", data.content);
      dataToSend.append("postId", post.id);

      await axios
        .post(process.env.REACT_APP_BDD_LINK + "/api/comments/:id/comment", dataToSend, {
          headers: {
            authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          if (res.status === 201) {
            data.content = null;
            alert("Comment created");
            post.comments = res.comments;
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

  const getComments = async () => {
    let getAllComments = document.getElementById("cardPost");
    const allComments = document.getElementById("commentsOfThePost");
    getAllComments.addEventListener("click", () => {
      if (getComputedStyle(allComments).display === "none") {
        allComments.style.display = "block";
        allComments.style.visibility = "visible";
        allComments.style.opacity = 1;
      } else {
        allComments.style.display = "none";
      }
      let postId = post.id;
      localStorage.setItem(postId);
    });

    await axios
      .get(process.env.REACT_APP_BDD_LINK + "/api/comments/:id", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((res) => setAllCommentsOfPosts(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div id="cardPost" className="card" onClick={getComments}>
      <p className="userName">by: {post.username}</p>
      <img src={post.image} alt="image du post" />
      <p className="msg">{post.message}</p>

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
