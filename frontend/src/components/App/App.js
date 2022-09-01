import { useState } from "react";
import HighScore from "../HighScore/HighScore";
import Jogo from "../Jogo/Jogo";
import "./App.css";

function App() {
  const [gameOver, setGameOver] = useState(false);
  const [pontos, setPontos] = useState(0);

  function onMorrer() {
    setGameOver(true);
  }

  function onPontos(novosPontos) {
    setPontos(novosPontos);
  }

  return (
    <div className="App">
      <Jogo onMorrer={onMorrer} onPontos={onPontos} />
      {gameOver && <HighScore pontos={pontos} />}
    </div>
  );
}

export default App;
