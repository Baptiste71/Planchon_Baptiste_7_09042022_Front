import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const auth = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/api/auth/login", {
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("token", res.data.accessToken);
            navigate("/forum");
          }
        });
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  return (
    <div className="login_section">
      <div className="all_elements">
        <h1>Login</h1>
        <div className="form_login">
          <form className="account" onSubmit={auth}>
            <div className="login">
              <input className="input_account" type="email" name="user_email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="login">
              <input className="input_account" type="password" name="user_password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="btn_login-page">
              <div className="login_btn_white">
                <button className="btn-register">
                  <NavLink className="btn_description_register" to="/register">
                    Register
                  </NavLink>
                </button>
              </div>
              <div className="login_btn">
                <button className="login-btn-red">
                  <NavLink className="btn_description" to="/forum">
                    Login
                  </NavLink>
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="link">
          <div className="link_password">
            <NavLink className="link_forgot" to="/newpassword">
              Forgot Password ?
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
