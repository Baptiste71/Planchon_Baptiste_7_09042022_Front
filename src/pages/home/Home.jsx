import Button_connection from "../../components/Button_connection";

const Home = () => {
  return (
    <div className="home">
      <div className="background_groupomania">
        <img className="logo_groupomania" src="img\icon-above-font.webp" alt="logo Groupomania" />
      </div>
      <div className="two_parts">
        <div className="presentation">
          <p>Partagez votre expérience au sein de Groupmania !</p>
        </div>
        <Button_connection />
      </div>
    </div>
  );
};

export default Home;
