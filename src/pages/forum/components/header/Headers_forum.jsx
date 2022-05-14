import React from "react";

import "./_header_forum.scss";
import "../../../parameters/components/headers/HeadersParams";
import "../../../parameters/components/Link_parameters";
import Link_parameters from "../../../parameters/components/Link_parameters";

const Headers_forum = () => {
  return (
    <div className="header">
      <div className="icons_connection">
        <button className="params">
          <Link_parameters className="accountParams" />
          <img className="icons_groupomania_profile" src="img\icon.svg" alt=" logo Groupomania" />
          {/*<div className="badge"></div>*/}
        </button>
      </div>
    </div>
  );
};

export default Headers_forum;
