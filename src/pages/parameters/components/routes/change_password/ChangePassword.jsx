import axios from "axios";
import React, { useState } from "react";
import "./_changePassword.scss";

const ChangePassword = ({ User }) => {
  const [newFirstname, setNewFirstname] = useState("");
  const [newLastname, setNewLastname] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [msg, setMsg] = useState("Le mot de passe n'a pas pu être modifié, les champs ne correspondent pas !!");
  const token = localStorage.getItem("token");

  const newUserPassword = (e) => {
    e.preventDefault();

    const dataToSend = {
      newfirstname: newFirstname,
      newlastname: newLastname,
      newemail: newEmail,
      newpassword: newPassword,
      confirmpassword: confirmNewPassword,
    };
    try {
      axios
        .put(process.env.REACT_APP_BDD_LINK + "/api/auth/update", dataToSend, {
          headers: {
            authorization: "Bearer " + token,
          },
        })
        .then((res) => {
          if (res.status === 200) {
            User = res.data;
            alert("Vos coordonnées ont bien été changées");
          } else {
            alert("Une erreur c'est produite pendant le changement de vos coordonnées! ");
          }
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
        <h1 className="passwordSection">Change my contact details </h1>
        <div className="formParams">
          <form className="accountParams" onSubmit={newUserPassword}>
            <div className="password">
              <input className="input_password" type="text" name="user_firstname" placeholder="New Firstname" required onChange={(e) => setNewFirstname(e.target.value)} />
              <input className="input_password" type="text" name="user_lastname" placeholder="New Lastname" required onChange={(e) => setNewLastname(e.target.value)} />
              <input className="input_password" type="email" name="user_email" placeholder="New Email" required onChange={(e) => setNewEmail(e.target.value)} />
              <input className="input_password" type="password" name="user_password" placeholder="New Password" required onChange={(e) => setNewPassword(e.target.value)} />
              <input className="input_password" type="password" name="user_password" placeholder=" Confirm New Password" required onChange={(e) => setConfirmNewPassword(e.target.value)} />
            </div>
            <div className="submitChange">
              <button className="btn-chg-password">Validate</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
