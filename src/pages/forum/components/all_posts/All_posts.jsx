import axios from "axios";
import React from "react";
import "./_all_posts.scss";

const All_posts = () => {
  const everyPosts = async (data) => {
    const token = localStorage.getItem("token");

    axios
      .get("http://localhost:5000/api/posts", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((res) => console.log(res));
  };

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
            <img src="img\grouponamia_rognee.png" alt="Logo groupomania" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default All_posts;
