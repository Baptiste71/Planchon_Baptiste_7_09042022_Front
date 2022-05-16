import React from "react";
import axios from "axios";
import "./_add_post.scss";
import PersonIcon from "@material-ui/icons/Person";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import { useForm } from "react-hook-form";

const Add_post = ({ lastPost }) => {
  const { register, handleSubmit } = useForm();

  const createPost = async (data) => {
    try {
      const token = localStorage.getItem("token");
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
            data.image = null;
            data.content = null;
            alert("Post created");
            lastPost = res.data;
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
    <div className="add_post">
      <h1>Add post</h1>
      <div className="profile">
        <div className="circle">
          <PersonIcon className="icon_user" />
        </div>
        <p>Baptiste</p>
      </div>
      <form onSubmit={handleSubmit(createPost)} className="create_post">
        <div className="add_files">
          <button className="add_image">
            <AddPhotoAlternateIcon className="icon_photo" />
          </button>
          <input
            type="file"
            accept="image/*"
            className="input_image"
            {...register("image", {
              required: false,
            })}
          />
        </div>
        <div className="input_arrow">
          <input className="message" type="text" name="message" />
          <textarea
            className="add_txt message"
            {...register("content", {
              required: true,
            })}
          />
          <button type="submit" className="arrow_send" onSubmit={createPost}>
            <ChevronRightIcon className="sent_msg" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add_post;
