import React from "react";
import Button_forum from "../components/Button_forum";
import Button_register from "../components/Button_register";
import Link_password from "../components/Link_password";

const Login = () => {
  return (
    <div className="login_section">
      <div className="all_elements">
        <h1>Login</h1>
        <div className="form_login">
          <form className="account" action="#" method="get">
            <div className="login">
              <input className="input_account" type="email" name="user_email" placeholder="Email" required />
            </div>
            <div className="login">
              <input className="input_account" type="password" name="user_password" placeholder="Password" required />
            </div>
            <div className="btn_login-page">
              <Button_register />
              <Button_forum />
            </div>
          </form>
        </div>
        <div className="link">
          <Link_password />
        </div>
      </div>
    </div>
  );
};

export default Login;
