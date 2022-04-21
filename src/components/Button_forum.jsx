import React from "react";
import { NavLink } from "react-router-dom";

const Button_forum = () => {
  return (
    <div className="login_btn">
      <button className="login-btn-red">
        <NavLink className="btn_description" to="/forum">
          Login
        </NavLink>
      </button>
    </div>
  );
};

export default Button_forum;
