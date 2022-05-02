import React, { useState } from "react";
import axios from "axios";
import "./_add_post.scss";
import PersonIcon from "@material-ui/icons/Person";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Add_post = () => {
  const [msg, setMsg] = useState("");
  const [files, setFiles] = useState("");
  const { register, handleSubmit } = useForm();

  const post = async (data) => {
    try {
      const token = localStorage.getItem("token");
      let dataToSend = new FormData();
      dataToSend.append("file", data.image[0]);
      dataToSend.append("message", data.content);

      await axios.post("http://localhost:5000/api/posts", dataToSend, {
        headers: {
          authorization: "Bearer " + token,
        },
      });
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
      <form onSubmit={handleSubmit(post)} className="create_post">
        <div className="add_files">
          <button className="add_image">
            <AddPhotoAlternateIcon className="icon_photo" />
          </button>
          <input
            type="file"
            accept="image/png, image/jpeg, image/webp"
            className="input_image"
            {...register("image", {
              required: false,
            })}
          />
        </div>
        <div className="msg_post">
          <div className="input_arrow">
            <input className="message" type="text" name="message" />
            <textarea
              className="add_txt"
              {...register("content", {
                required: true,
              })}
            ></textarea>
            <button type="submit" className="arrow_send" onSubmit={post}>
              <ChevronRightIcon className="sent_msg" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Add_post;
