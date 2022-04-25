import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import "./styles/main.scss";
import axios from "axios";

axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
