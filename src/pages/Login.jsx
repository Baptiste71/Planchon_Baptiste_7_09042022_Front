import React from "react";

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
              <div className="login_btn_white">
                <input className="register-btn" type="button" value="Register" />
              </div>
              <div className="login_btn">
                <input className="login-btn-red" type="submit" value="Login" />
              </div>
            </div>
          </form>
        </div>
        <div className="link">
          <div className="link_password">
            <a className="link_forgot" href="./new_password.html">
              Forgot Password ?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
