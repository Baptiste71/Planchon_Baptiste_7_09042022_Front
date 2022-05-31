import React, { useState, useEffect } from "react";
import axios from "axios";
import Headers_forum from "./components/header/Headers_forum";
import Groupomania_news from "./components/groupomania_news/Groupomania_news";
import All_posts from "./components/all_posts/All_posts";
import Add_post from "./components/add_post/Add_post";
import "./_forum.scss";

const Forum = () => {
  const [allPosts, setAllPosts] = useState([]);
  let [lastPost, setlastPost] = useState("");
  let [noPost, setNoPost] = useState("Il n'y a aucun post(s) pour l'instant");
  let [noImage, setNoImage] = useState("Il n'y pas d'image pour ce post");

  const token = localStorage.getItem("token");

  // Récuperation de tous les posts

  function getAllPosts() {
    axios
      .get(process.env.REACT_APP_BDD_LINK + "/api/posts", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((res) => setAllPosts(res.data))
      .catch((err) => console.error(err));
  }

  // aperçu du dernier post

  function getLastPost() {
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
          setNoImage();
        }
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getLastPost();
  }, []);

  const createPost = async (data) => {
    try {
      let dataToSend = new FormData();
      dataToSend.append("image", data.image[0]);
      dataToSend.append("message", data.content);

      await axios
        .post(process.env.REACT_APP_BDD_LINK + "/api/posts", dataToSend, {
          headers: {
            authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          if (res.status === 201) {
            alert("Post created");
            dataToSend.delete("image", "message");

            getLastPost();
            if (allPosts.length) {
              getAllPosts();
            }
          } else {
            alert("Post not created");
          }
        });
    } catch (error) {
      if (error.response) {
        console.log(error);
      }
    }
  };

  return (
    <div className="all_elements_forum">
      <Headers_forum />
      <div className="sections_forum">
        <div className="posts">
          <Groupomania_news />
          <All_posts lastPost={lastPost} allPosts={allPosts} noPost={noPost} noImage={noImage} getAllPosts={getAllPosts} getLastPost={getLastPost} />
        </div>
        <Add_post createPost={createPost} />
      </div>
    </div>
  );
};

export default Forum;
