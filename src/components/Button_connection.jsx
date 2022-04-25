import React from "react";
import { NavLink } from "react-router-dom";

const Button_connection = () => {
  return (
    <div className="button_login">
      <div className="connection">
        <form className="form-home">
          <button className="btn">
            <NavLink className="btn_description" to="/login">
              Back to login
            </NavLink>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Button_connection;
