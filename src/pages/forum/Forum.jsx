import React, { useEffect, useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Headers_forum from "./components/header/Headers_forum";
import Groupomania_news from "./components/groupomania_news/Groupomania_news";
import All_posts from "./components/all_posts/All_posts";
import Add_post from "./components/add_post/Add_post";
import "./_forum.scss";

const Forum = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [expire, setExpire] = useState("");
  const [user, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setUsers(response.data);
  };

  return (
    <div className="all_elements_forum">
      <Headers_forum />
      <div className="sections_forum">
        <div className="posts">
          <Groupomania_news />
          <All_posts />
        </div>
        <Add_post />
      </div>
    </div>
  );
};

export default Forum;
