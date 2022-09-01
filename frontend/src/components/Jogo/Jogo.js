import "./Jogo.css";
import nuvens from "../../assets/clouds.png";
import cano from "../../assets/pipe.png";
import mario from "../../assets/mario.gif";
import gameOver from "../../assets/game-over.png";
import React, { useEffect, useRef, useState } from "react";

function Jogo(props) {
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

  const [estaMorto, setEstaMorto] = useState(false);

  const [pontos, setPontos] = useState(0);

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

  useEffect(
    // Effect
    function () {
      // Implementação temporária para exibir se o mário
      // está no cano ou não
      const interval = setInterval(function () {
        // Pegamos o valor que determinar se o Mario
        // está no cano ou não
        const estaNoCano = marioEstaNoCano();

        // Se o Mario não estiver no cano, encerramos a função com `return`
        if (!estaNoCano || estaMorto) {
          return;
        }

        // Caso esteja no cano, atualizamos o estado
        // `estaMorto` para `true`
        setEstaMorto(true);

        props.onMorrer();
      }, 100);

      // (Opcional) Return mecanismo que desfaz o Effect anterior
      return () => clearInterval(interval);
    },
    // Lista de dependências
    [estaMorto, props]
  );

  // UseEffect
  useEffect(
    function () {
      // Salvar a pontuação
      const interval = setInterval(function () {
        if (estaMorto) {
          return;
        }

        setPontos(pontos + 1);
        props.onPontos(pontos + 1);
      }, 500);

      return () => clearInterval(interval);
    },
    [estaMorto, pontos, props]
  );

  /*
  - Exibir pontos em tempo real (DESAFIO)
  - Quando der GameOver, exibir o HighScore
  */

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

  // Outra forma de simplificar, usando ternário
  // const marioClassName = "mario " + (estaPulando ? "mario-pulo" : "");

  // No lugar de declarar uma variável e mudar o valor dela em um caso de `if`,
  // como fizemos com o className do Mario, podemos criar uma variável
  // com dois valores, um para caso a condição seja verdadeira, outro para
  // caso a condição seja false
  // Esse é o Operador Ternário!
  const marioImage = estaMorto ? gameOver : mario;

  const pararAnimacao = estaMorto ? "parar-animacao" : "";

  return (
    <div className="jogo">
      <div>Pontos: {pontos}</div>

      <img className="nuvens" src={nuvens} alt="Nuvens" />

      <img
        ref={canoRef}
        className={"cano " + pararAnimacao}
        src={cano}
        alt="Cano"
      />

      <img
        ref={marioRef}
        className={marioClassName}
        src={marioImage}
        alt="Mário"
      />

      <div className="chao"></div>
    </div>
  );
}

export default Jogo;
