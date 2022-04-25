import { Axios } from "axios";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Button_forum from "../components/Button_forum";
import Button_register from "../components/Button_register";
import Link_password from "../components/Link_password";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/login", {
        email: email,
        password: password,
      });
      navigate.push("/forum");
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
