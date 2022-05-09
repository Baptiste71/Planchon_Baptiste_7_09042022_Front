import axios from "axios";
import React, { useEffect, useState } from "react";
import "./_all_posts.scss";
import { useNavigate } from "react-router-dom";
import One_post from "../one_post/One_post";

const All_posts = () => {
  const [data, setData] = useState([]);
  const [post, setlastPost] = useState([]);
  const everyPosts = async (data) => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:5000/api/posts", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((res) => setData(res.data));
  };

  // aperçu du dernier post

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:5000/api/posts/last", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((res) => setlastPost(res.data));
  });

  return (
    <div className="last_post">
      <div className="title">
        <h1>All posts</h1>
      </div>
      <div className="see_all">
        <button onClick={everyPosts} className="see_all_post">
          <a>See all</a>
        </button>
      </div>
      <div className="card_post">
        <a>
          <div className="img_post">
            <div className="userName">by:{post.userId} </div>
            <img src={post.image} alt="image du post" />
            <div className="msg">message: {post.message}</div>
          </div>
        </a>
        {data.map((posts) => (
          <One_post key={posts.id} post={posts} />
        ))}
      </div>
    </div>
  );
};

export default All_posts;
