import axios from "axios";
import React, { useEffect, useState } from "react";
import "./_all_posts.scss";

const All_posts = () => {
  const [msg, setMsg] = useState("");
  const [files, setFiles] = useState("");

  const everything = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/posts", {
        file: files,
        message: msg,
      });
    } catch (error) {
      if (error.response) {
        console.log(error);
      }
    }
  };

  const onePost = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/posts/:id", {
        file: files,
        message: msg,
      });
    } catch (error) {
      if (error.response) {
        console.log(error);
      }
    }
  };

  return (
    <div className="last_post">
      <div className="title">
        <h1>All posts</h1>
      </div>
      <div className="see_all">
        <button className="see_all_post">
          <a onSubmit={everything}>See all</a>
        </button>
      </div>
      <div className="card_post">
        <a onSubmit={onePost}>
          <div className="img_post">
            <img src="img\grouponamia_rognee.png" alt="Logo groupomania" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default All_posts;
