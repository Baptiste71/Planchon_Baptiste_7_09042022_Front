import React, { useState } from "react";
import axios from "axios";
import "./_add_post.scss";
import PersonIcon from "@material-ui/icons/Person";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useNavigate } from "react-router-dom";

const Add_post = () => {
  const [msg, setMsg] = useState("");
  const [files, setFiles] = useState("");
  const navigate = useNavigate();

  const post = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000", {
        file: files,
        message: msg,
      });
      navigate.push("/forum");
    } catch (error) {
      if (error.response) {
        console.log(error);
      }
    }
  };

  return (
    <div className="add_post">
      <div className="title">
        <h1>Add post</h1>
      </div>
      <div className="profile">
        <div className="circle">
          <PersonIcon className="icon_user" />
        </div>
        <div className="user_name">
          <p>Baptiste</p>
        </div>
      </div>
      <div className="create_post">
        <div className="add_files">
          <button className="add_image">
            <AddPhotoAlternateIcon className="icon_photo" />
          </button>
          <input type="file" accept="image/png, image/jpeg, image/webp" name="add_image" className="input_image" onChange={(e) => setFiles(e.target.value)} />
        </div>
        <div className="msg_post">
          <form className="msg">
            <div className="input_arrow">
              <input className="message" type="text" />
              <div className="arrow_send" onSubmit={post}>
                <button className="add_txt" onChange={(e) => setMsg(e.target.value)}>
                  <ChevronRightIcon className="sent_msg" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add_post;
