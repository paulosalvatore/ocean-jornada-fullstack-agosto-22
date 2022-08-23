import "./Jogo.css";
import nuvens from "../../assets/clouds.png";
import cano from "../../assets/pipe.png";
import mario from "../../assets/mario.gif";
import React, { useRef, useState } from "react";

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

  // Criamos as referências para `mario` e `cano`
  const marioRef = useRef();
  const canoRef = useRef();

  function marioEstaNoCano() {
    // Acessamos as referências do mario e do cano
    const mario = marioRef.current;
    const cano = canoRef.current;

    // Se por acaso `mario` ou `cano` não forem encontrados,
    // encerra essa função
    if (!mario || !cano) {
      return;
    }

    // Retorna o valor da lógica que determinar se o mário
    // está na mesma posição do cano ou não (com as checagens
    // que consideram toda a área do cano)
    return (
      cano.offsetLeft > mario.offsetLeft &&
      cano.offsetLeft < mario.offsetLeft + mario.offsetWidth &&
      mario.offsetTop + mario.offsetHeight > cano.offsetTop
    );
  }

  // Implementação temporária para exibir se o mário está no cano
  // ou não
  setInterval(function () {
    const valor = marioEstaNoCano();

    console.log("Mário está no cano?", valor);
  }, 100);

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

      <img ref={canoRef} className="cano" src={cano} alt="Cano" />

      <img ref={marioRef} className={marioClassName} src={mario} alt="Mário" />

      <div className="chao"></div>
    </div>
  );
}

export default Jogo;
