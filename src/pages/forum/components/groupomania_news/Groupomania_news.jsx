import React, {useState} from "react";
import "./_groupomania_news.scss";

const Groupomania_news = () => {

  const [printText, setPrintText] = useState(false);

  return (
    <div className="last_pinned_msg">
      <h1>Groupomania news</h1>
      <div className="card_post" onClick={setPrintText(!printText)}>
        <div className="img_post">
          <img src="img\grouponamia_rognee.png" alt="Logo groupomania" />
          <p hidden={printText}>Groupomania</p>
        </div>
      </div>
    </div>
  );
};

export default Groupomania_news;
