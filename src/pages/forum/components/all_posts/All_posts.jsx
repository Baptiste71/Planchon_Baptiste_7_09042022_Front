import React from "react";
import "./_all_posts.scss";
import One_post from "../one_post/One_post";

const All_posts = (props) => {
  return (
    <div className="last_post">
      <h1 className="title-forum">All posts</h1>
      <div className="btn-seeAll">
        {!props.allPosts.length ? (
          <button onClick={() => props.getAllPosts()} className="see_all_post">
            See all
          </button>
        ) : (
          ""
        )}
      </div>

      <div className="card_post">
        {!props.allPosts.length ? (
          <div className="description_post">
            <p className="userNameLastPost">{props.lastPost.username || props.noPost}</p>
            {props.lastPost.image ? <img src={props.lastPost.image} alt="image du post" /> : ""}
            <p className="msgLastPost">{props.lastPost.message}</p>
          </div>
        ) : (
          ""
        )}

        {props.allPosts.map((singlePost, index) => (
          <One_post key={index} post={singlePost} getAllPosts={props.getAllPosts} getLastPost={props.getLastPost} />
        ))}
      </div>
    </div>
  );
};

export default All_posts;
