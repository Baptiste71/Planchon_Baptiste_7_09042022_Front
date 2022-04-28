import React from "react";
import "./_add_post.scss";
import PersonIcon from "@material-ui/icons/Person";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const Add_post = () => {
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
          <AddPhotoAlternateIcon className="icon_photo" />
        </div>
        <div className="msg_post">
          <form className="msg" /*onSubmit={createUser}*/>
            <div className="input_arrow">
              <input className="message" type="text" required onChange={(e) => /*setFirstname*/ e.target.value} />
              <div className="arrow_send" /*onSubmit={*/>
                <ChevronRightIcon className="sent_msg" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Add_post;
