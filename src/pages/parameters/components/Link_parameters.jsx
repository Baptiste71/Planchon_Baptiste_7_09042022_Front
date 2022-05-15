import React from "react";

import { NavLink } from "react-router-dom";
import SettingsIcon from "@material-ui/icons/Settings";

const Link_parameters = () => {
  return (
    <div className="link_params">
      <NavLink className="parametersAccount" to="/parameters">
        <SettingsIcon className="iconSetting" />
      </NavLink>
    </div>
  );
};

export default Link_parameters;
