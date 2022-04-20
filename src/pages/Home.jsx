const Home = () => {
  return (
    <div className="home">
      <img className="logo_groupomania" src="..\public\img\icon-above-font.webp" alt="logo Groupomania" />

      <p>Partager votre expérience au sein de Groupomania !</p>
      <div className="connection">
        <form className="form-home" action="./Login.jsx">
          <button className="btn" type="submit" name="Connexion">
            Connexion
          </button>
        </form>
      </div>
    </div>
  );
};

export default Home;
