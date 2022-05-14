import axios from "axios";
import React, { useState } from "react";
import "./_changePassword.scss";

const ChangePassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [msg, setMsg] = useState("Le mot de passe n'a pas pu être modifié, les champs ne correspondent pas !!");
  const token = localStorage.getItem("token");

  const newUserPassword = async (e) => {
    e.preventDefault();
    const dataToSend = {
      newpassword: newPassword,
      confirmpassword: confirmNewPassword,
    };
    try {
      await axios.put("http://localhost:5000/api/auth/update", dataToSend, {
        headers: {
          authorization: "Bearer " + token,
        },
      });
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="passwordUpdate">
      <div className="allElementsPasswordSection">
        <h1 className="passwordSection">Create my new password</h1>
        <div className="formParams">
          <form className="accountParams" onSubmit={newUserPassword}>
            <div className="password">
              <input className="input_password" type="password" name="user_password" placeholder="New Password" required onChange={(e) => setNewPassword(e.target.value)} />
              <input className="input_password" type="password" name="user_password" placeholder=" Confirm New Password" required onChange={(e) => setConfirmNewPassword(e.target.value)} />
            </div>
            <div className="submitChange">
              <button className="btn">Change my password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
