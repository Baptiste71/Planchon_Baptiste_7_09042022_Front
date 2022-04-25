import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Badge = () => {
  return (
    <div className="badge_connection">
      <div className="connection_indicator">
        <FontAwesomeIcon icon="fa-solid fa-circle" />
      </div>
    </div>
  );
};

export default Badge;
