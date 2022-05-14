import React from "react";
import "./_changePassword.scss";

const ChangePassword = () => {
  return (
    <div className="passwordUpdate">
      <div className="allElementsPasswordSection">
        <h1 className="passwordSection">Create my new password</h1>
        <div className="formParams">
          <form className="accountParams" action="#" method="post">
            <div className="password">
              <input className="input_password" type="password" name="user_password" placeholder="New Password" required />
              <input className="input_password" type="password" name="user_password" placeholder=" Confirm New Password" required />
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
