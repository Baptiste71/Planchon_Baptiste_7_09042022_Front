import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Forum from "./pages/forum/Forum";
import Home from "./pages/home/Home";
import Login from "./pages/Login";
import NewPassword from "./pages/NewPassword";
import Register from "./pages/Register";
import Parameters from "./pages/parameters/Parameters";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/newpassword" element={<NewPassword />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/parameters" element={<Parameters />} />
        {/*Le path * fonctionne si aucun url n'est valide*/}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
