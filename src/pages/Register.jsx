import React, { useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const createUser = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post("http://localhost:5000/api/auth/user", {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
        })
        .then((res) => {
          if (res.status === 201) {
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
        <h1>Register</h1>
        <div className="form_login">
          <form className="account" onSubmit={createUser}>
            <div className="login">
              <input className="input_account" type="text" name="firstname" placeholder="Firstname" required onChange={(e) => setFirstname(e.target.value)} />
            </div>
            <div className="login">
              <input className="input_account" type="text" name="lastname" placeholder="Lastname" required onChange={(e) => setLastname(e.target.value)} />
            </div>
            <div className="login">
              <input className="input_account" type="email" name="user_email" placeholder="Email" required onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="login">
              <input className="input_account" type="password" name="user_password" placeholder="Password" required onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="btn_login-page">
              <div className="login_btn">
                <button className="login-btn-red-register">
                  <NavLink className="btn_description" to="/forum">
                    Login
                  </NavLink>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
