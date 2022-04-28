import React from "react";
import "./_all_posts.scss";

const All_posts = () => {
  return (
    <div className="last_post">
      <div className="title">
        <h1>All posts</h1>
      </div>
      <div className="see_all">
        <a href="#">See all</a>
      </div>
      <div className="card_post">
        <a href="#">
          <div className="img_post">
            <img src="img\grouponamia_rognee.png" alt="Logo groupomania" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default All_posts;
