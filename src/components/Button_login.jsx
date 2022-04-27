import React from "react";
import { NavLink } from "react-router-dom";

const Button_login = () => {
  return (
    <div className="button_login">
      <div className="connection">
        <div className="form-home">
          <button className="btn">
            <NavLink className="btn_description" to="/login">
              Back to login !
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Button_login;
