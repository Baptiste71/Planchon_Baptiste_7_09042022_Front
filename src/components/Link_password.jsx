import React from "react";
import { NavLink } from "react-router-dom";

const Link_password = () => {
  return (
    <div className="link_password">
      <NavLink className="link_forgot" to="/newpassword">
        Forgot Password ?
      </NavLink>
    </div>
  );
};

export default Link_password;
