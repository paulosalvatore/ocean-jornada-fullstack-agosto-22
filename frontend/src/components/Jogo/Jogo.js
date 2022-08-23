import "./Jogo.css";
import nuvens from "../../assets/clouds.png";
import cano from "../../assets/pipe.png";
import mario from "../../assets/mario.gif";
import { useState } from "react";

function Jogo() {
  /*
  const estaPulando = useState(false);
  const estado = estaPulando[0];
  const dispatch = estaPulando[1];

  // Desconstrução de array
  // const lista = [10, 20, 30];
  // const [numero1, numero2, numero3] = lista;
  const [numero1, numero2, numero3] = [10, 20, 30];
  */

  // Criamos o estado `estaPulando`, com o valor padrão `false`.
  // Primeiro valor é apenas para ler
  // Segundo valor é para atualizar o estado
  const [estaPulando, setEstaPulando] = useState(false);

  document.onkeydown = function () {
    console.log("On Key Down");

    estaPulando = true;
  };

  console.log(15, { estaPulando });

  return (
    <div className="jogo">
      <img className="nuvens" src={nuvens} alt="Nuvens" />

      <img className="cano" src={cano} alt="Cano" />

      <img className="mario" src={mario} alt="Mário" />

      <div className="chao"></div>
    </div>
  );
}

export default Jogo;
