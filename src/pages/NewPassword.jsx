import React from "react";
import { NavLink } from "react-router-dom";

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
              <form className="form-home">
                <button className="btn">
                  <NavLink className="btn_description" to="/login">
                    Connexion
                  </NavLink>
                </button>
              </form>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
