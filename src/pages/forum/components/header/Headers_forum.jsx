import React from "react";

import "./_header_forum.scss";
import "../../../parameters/components/headers/HeadersParams";

const Headers_forum = () => {
  return (
    <div className="header">
      <div className="icons_connection">
        <button className="params">
          <img className="icons_groupomania_profile" src="img\icon.svg" alt=" logo Groupomania" />
          {/*<div className="badge"></div>*/}
        </button>
      </div>
    </div>
  );
};

export default Headers_forum;
