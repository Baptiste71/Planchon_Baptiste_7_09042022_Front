import axios from "axios";
import React, { useEffect, useState } from "react";
import "./_all_posts.scss";
import One_post from "../one_post/One_post";

const All_posts = () => {
  const [allPosts, setAllPosts] = useState([]);
  let [lastPost, setlastPost] = useState("");
  let [noPost, setNoPost] = useState("Il n'y a aucun post(s) pour l'instant");

  const token = localStorage.getItem("token");

  // Récuperation de tous les posts

  const getAllPosts = () => {
    axios
      .get(process.env.REACT_APP_BDD_LINK + "/api/posts", {
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
      .get(process.env.REACT_APP_BDD_LINK + "/api/posts/last", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        if (res.data) {
          setlastPost(res.data);
        } else {
          setNoPost(noPost);
        }
      })
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
          <p className="userNameLastPost">by: {lastPost.username}</p>
          {lastPost.image ? <img src={lastPost.image} alt="image du post" /> : "" || noPost}
          <p className="msgLastPost">{lastPost.message}</p>
        </div>
        {allPosts.map((singlePost, index) => (
          <One_post key={index} post={singlePost} />
        ))}
      </div>
    </div>
  );
};

export default All_posts;
