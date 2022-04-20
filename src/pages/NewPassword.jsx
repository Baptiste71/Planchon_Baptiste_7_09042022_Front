import React from "react";

const NewPassword = () => {
  return (
    <div className="login_section">
      <div className="all_elements">
        <h1>Create new password</h1>
        <div className="form_login">
          <form className="account" action="#" method="get">
            <div className="login">
              <input className="input_account" type="email" name="user_email" placeholder="Email" required />
            </div>
            <div className="login">
              <input className="input_account" type="password" name="user_password" placeholder="New Password" required />
            </div>
            <div className="login">
              <input className="input_account" type="password" name="user_password" placeholder=" Confirm New Password" required />
            </div>
            <div className="btn_login-page">
              <div className="login_btn">
                <input className="login-btn-red" type="submit" value=" Back to Login" />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
