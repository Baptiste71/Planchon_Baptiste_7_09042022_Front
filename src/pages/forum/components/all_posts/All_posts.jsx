import axios from "axios";
import React, { useEffect, useState } from "react";
import "./_all_posts.scss";
import One_post from "../one_post/One_post";

const All_posts = ({ lastPost }) => {
  const [allPosts, setAllPosts] = useState([]);

  const token = localStorage.getItem("token");

  const getAllPosts = () => {
    axios
      .get("http://localhost:5000/api/posts", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((res) => setAllPosts(res.data))
      .catch((err) => console.error(err));
  };

  // aperçu du dernier post
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/posts/last", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((res) => (lastPost = res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="last_post">
      <h1 className="title-forum">All posts</h1>
      <div className="btn-seeAll">
        <button onClick={getAllPosts} className="see_all_post">
          See all
        </button>
      </div>

      <div className="card_post">
        <div className="description_post">
          <p className="userName">by: {[lastPost]}</p>
          <img src="" alt="image du post" />
          <p className="msg">message: {[lastPost]}</p>
        </div>
        {allPosts.map((singlePost, index) => (
          <One_post key={index} post={singlePost} />
        ))}
      </div>
    </div>
  );
};

export default All_posts;
