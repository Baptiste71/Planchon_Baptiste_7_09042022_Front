import axios from "axios";
import React, { useEffect } from "react";

const connexionAPi = () => {
  useEffect(() => {
    axios.get("http://localhost:5000").then((res) => console.log(res));
  }, []);
};

export default connexionAPi;
