import React from "react";
import "./_one_post.scss";

// carte complete d'un post: auteur, image, message, commentaire, like/dislike

const One_post = ({post}) => {

  return (
    <div className="card">
      <p className="userName">by:{post.img}</p>
      <img src={post.img} alt="image du post"/>
      <p className="msg">message:{post.img}</p>
    </div>
  );
};

export default One_post;
