import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="background_groupomania">
        <img className="logo_groupomania" src="img\icon-above-font.webp" alt="logo Groupomania" />
      </div>
      <div className="two_parts">
        <div className="presentation">
          <p>Partagez votre expérience au sein de Groupomania !</p>
        </div>
        <form className="form-home">
          <button className="btn">
            <NavLink className="btn_description" to="/login">
              Connexion
            </NavLink>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
