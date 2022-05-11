import React, { useState } from "react";
import Headers_forum from "./components/header/Headers_forum";
import Groupomania_news from "./components/groupomania_news/Groupomania_news";
import All_posts from "./components/all_posts/All_posts";
import Add_post from "./components/add_post/Add_post";
import "./_forum.scss";

const Forum = () => {
  const [lastPost, setlastPost] = useState();

  return (
    <div className="all_elements_forum">
      <Headers_forum />
      <div className="sections_forum">
        <div className="posts">
          <Groupomania_news />
          <All_posts lastPost={lastPost} />
        </div>
        <Add_post lastPost={lastPost} />
      </div>
    </div>
  );
};

export default Forum;
