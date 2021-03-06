import React, { useEffect, useState } from "react";
import axios from "axios";
import "./_add_post.scss";
import PersonIcon from "@material-ui/icons/Person";

import ChevronRightIcon from "@material-ui/icons/ChevronRight";

import { useForm } from "react-hook-form";

const Add_post = (props) => {
  const { register, handleSubmit } = useForm();
  const token = localStorage.getItem("token");
  let [profileName, setProfileName] = useState("");

  // profil utilisateur

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BDD_LINK + "/api/auth/profile", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          setProfileName(res.data.firstname);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="add_post">
      <h1 className="title-forum">Add post</h1>
      <div className="profile">
        <div className="circle">
          <PersonIcon className="icon_user" />
        </div>
        <p className="userNameAddPost">{profileName}</p>
      </div>
      <form onSubmit={handleSubmit((data) => props.createPost(data))} className="create_post">
        <div className="add_files">
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
          <input
            className="message"
            type="text"
            name="message"
            {...register("content", {
              required: true,
            })}
          />
          {/*<textarea className="add_txt message" />*/}
          <button type="submit" className="arrow_send">
            <ChevronRightIcon className="sent_msg" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add_post;
