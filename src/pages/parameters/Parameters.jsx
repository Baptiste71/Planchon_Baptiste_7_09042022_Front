import React from "react";
import "../parameters/components/headers/HeadersParams";
import HeadersParams from "../parameters/components/headers/HeadersParams";
import ChangePassword from "./components/routes/change_password/ChangePassword";
import DeleteAccount from "./components/routes/delete_account/DeleteAccount";
import "./_parameters.scss";

const Parameters = () => {
  return (
    <div className="params-page">
      <div className="allElements"></div>
      <HeadersParams />
      <ChangePassword />
      <DeleteAccount />
    </div>
  );
};

export default Parameters;
