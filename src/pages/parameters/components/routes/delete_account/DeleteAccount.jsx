import React from "react";
import "./_delete_account.scss";

const DeleteAccount = () => {
  return (
    <div className="deleteAccount">
      <div className="allElementDeleteSection">
        <h1 className="questionDelete">Delete Account</h1>
        <div className="btnDelete">
          <button className="btn deleteButton">Delete Account</button>
        </div>
        <div className="lastChance">
          <form className="booleanChoice">
            <label className="theQuestion">Are you sure to delete your account?</label>
            <div className="boolean">
              <button className="btn_choice">Yes</button>
              <button className="btn_choice">No</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DeleteAccount;
