import React from "react";
import { NavLink } from "react-router-dom";

const Button_register = () => {
  return (
    <div className="button_register">
      <div className="login_btn_white">
        <button className="btn-register">
          <NavLink className="btn_description_register" to="/register">
            Register
          </NavLink>
        </button>
      </div>
    </div>
  );
};

export default Button_register;
