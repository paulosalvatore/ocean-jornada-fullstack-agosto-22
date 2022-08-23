import "./Jogo.css";
import nuvens from "../../assets/clouds.png";
import cano from "../../assets/pipe.png";
import mario from "../../assets/mario.gif";

function Jogo() {
  return (
    <div className="jogo">
      <img className="nuvens" src={nuvens} alt="Nuvens" />

      <img className="cano" src={cano} alt="Cano" />

      <img className="mario mario-pulo" src={mario} alt="Mário" />

      <div className="chao"></div>
    </div>
  );
}

export default Jogo;
