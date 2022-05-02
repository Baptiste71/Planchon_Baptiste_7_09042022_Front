import React from "react";
import "../parameters/components/headers/HeadersParams";
import HeadersParams from "../parameters/components/headers/HeadersParams";
import "./_parameters.scss";

const Parameters = () => {
  return (
    <div className="params">
      <div className="allElements"></div>
      <HeadersParams />
    </div>
  );
};

export default Parameters;
