import React, { useEffect } from "react";
import "./_headersParams.scss";
import { useNavigate } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";

const HeadersParams = () => {
  const navigate = useNavigate();

  const goToForum = () => {
    navigate("/forum");
  };

  const logout = () => {
    localStorage.clear("token");
    navigate("/home");
  };

  return (
    <div className="headerParams">
      <img className="groupomania" src="img\icon-left-font-monochrome-white.webp" alt="logo Groupomania" onClick={goToForum} />
      <div className="logoutButton">
        <button className="logout" onClick={logout}>
          <ExitToAppIcon />
        </button>
      </div>
    </div>
  );
};

export default HeadersParams;
