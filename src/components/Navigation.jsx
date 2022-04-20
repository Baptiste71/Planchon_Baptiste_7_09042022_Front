import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink to="/login">
        <a href="src\pages\Login.jsx"></a>
      </NavLink>
      <NavLink to="/register">
        <a href="src\pages\Register.jsx"></a>
      </NavLink>
      <NavLink to="/newpassword">
        <a href="src\pages\NewPassword.jsx"></a>
      </NavLink>
    </div>
  );
};

export default Navigation;
