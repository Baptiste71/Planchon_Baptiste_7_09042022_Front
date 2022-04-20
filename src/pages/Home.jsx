const Home = () => {
  return (
    <div className="home">
      <div class="background_groupomania">
        <img class="logo_groupomania" src="img\icon-above-font.webp" alt="logo Groupomania" />
      </div>
      <div class="two_parts">
        <div class="presentation">
          <p>Partagez votre expérience au sein de Groupmania !</p>
        </div>
        <div class="connection">
          <form class="form-home" action="pages_groupomania\Login.html">
            <button class="btn" type="submit" name="Connexion">
              Connexion
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
