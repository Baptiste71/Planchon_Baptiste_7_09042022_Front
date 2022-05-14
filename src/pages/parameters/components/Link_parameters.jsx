import React from "react";

import { NavLink } from "react-router-dom";

const Link_parameters = () => {
  return (
    <div className="link_params">
      <NavLink className="parametersAccount" to="/parameters">
        My Account
      </NavLink>
    </div>
  );
};

export default Link_parameters;
