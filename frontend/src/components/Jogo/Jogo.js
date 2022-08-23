import "./Jogo.css";
import nuvens from "../../assets/clouds.png";
import cano from "../../assets/pipe.png";
import mario from "../../assets/mario.gif";
import React, { useState } from "react";

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
  // Primeiro valor é apenas para ler (GET)
  // Segundo valor é para atualizar o estado (SET)
  // No momento que um estado é atualizado, o componente atualiza
  // tudo o que está sendo renderizado
  const [estaPulando, setEstaPulando] = useState(false);

  document.onkeydown = function () {
    // Atualizamos o estado para true
    setEstaPulando(true);

    // 700ms = 0.7s
    setTimeout(function () {
      // Voltamos o estado para o valor inicial
      setEstaPulando(false);
    }, 700);
  };

  // Por padrão, o elemento tem a classe `.mario`
  let marioClassName = "mario";

  // Caso esteja pulando (valor true), a classe será `.mario`
  // e `.mario-pulo`
  if (estaPulando) {
    marioClassName = "mario mario-pulo";
  }

  return (
    <div className="jogo">
      <img className="nuvens" src={nuvens} alt="Nuvens" />

      <img className="cano" src={cano} alt="Cano" />

      <img className={marioClassName} src={mario} alt="Mário" />

      <div className="chao"></div>
    </div>
  );
}

export default Jogo;
