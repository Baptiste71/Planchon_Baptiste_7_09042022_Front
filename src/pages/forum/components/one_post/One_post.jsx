import React, { useState } from "react";
import axios from "axios";
import "./_one_post.scss";

// carte complete d'un post: auteur, image, message, commentaire, like/dislike

const One_post = ({ posts }) => {
  const [data, setData] = useState([]);
  const cardPost = async (data) => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:5000/api/posts/:id", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((res) => setData(res.data));
  };
  return (
    <div className="cards">
      <div className="infoPosts card_post">
        <a>
          <div className="userName">by:</div>
          <img src={posts} alt="image du post" />
          <div className="msg">message:</div>
        </a>
      </div>
    </div>
  );
};

export default One_post;
