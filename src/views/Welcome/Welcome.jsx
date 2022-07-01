import ImgMeLi from "../../images/MeLi.png";
import "./Welcome.scss";

const Home = () => {
  return (
    <div className="containerWelcome">
      <h1>Bienvenid@...</h1>
      <img className="imgMeLi" src={ImgMeLi} alt="imgMeLi" />
    </div>
  );
};

export default Home;
