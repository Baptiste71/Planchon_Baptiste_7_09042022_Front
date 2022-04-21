import React from "react";
import Button_forum from "../components/Button_forum";

const Register = () => {
  return (
    <div className="login_section">
      <div className="all_elements">
        <h1>Register</h1>
        <div className="form_login">
          <form className="account" action="#" method="get">
            <div className="login">
              <input className="input_account" type="text" name="firstname" placeholder="Firstname" required />
            </div>
            <div className="login">
              <input className="input_account" type="text" name="lastname" placeholder="Lastname" required />
            </div>
            <div className="login">
              <input className="input_account" type="email" name="user_email" placeholder="Email" required />
            </div>
            <div className="login">
              <input className="input_account" type="password" name="user_password" placeholder="Password" required />
            </div>
            <div className="btn_login-page">
              <Button_forum />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
