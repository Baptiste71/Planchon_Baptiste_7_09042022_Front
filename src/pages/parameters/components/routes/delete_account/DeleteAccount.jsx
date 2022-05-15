import React from "react";
import axios from "axios";
import "./_delete_account.scss";
import { useNavigate } from "react-router-dom";

const DeleteAccount = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const deleteMyAccount = () => {
    let deleteButton = document.getElementById("buttonChoice");
    const lastChance = document.getElementById("yesOrNo");
    deleteButton.addEventListener("click", () => {
      if (getComputedStyle(lastChance).display === "none") {
        lastChance.style.display = "block";
        lastChance.style.visibility = "visible";
        lastChance.style.opacity = 1;
      } else {
        lastChance.style.display = "none";
      }
    });
  };

  const goodbye = () => {
    axios
      .delete("http://localhost:5000/api/auth/delete", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        if (res.status === 200) {
          localStorage.clear("token");
          navigate.push("/home");
          alert("User deleted");
        } else {
          alert("User not deleted");
        }
      });
  };

  return (
    <div className="deleteAccount">
      <div className="allElementDeleteSection">
        <h1 className="questionDelete">Delete Account</h1>
        <div className="btnDelete">
          <button className="deleteButton" id="buttonChoice" onClick={deleteMyAccount}>
            Delete Account
          </button>
        </div>
        <div className="lastChance" id="yesOrNo">
          <form className="booleanChoice">
            <label className="theQuestion">Are you sure to delete your account?</label>
            <div className="boolean">
              <button className="btn_choice" id="yes" onClick={goodbye}>
                Yes
              </button>
              <button className="btn_choice" id="no">
                No
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
