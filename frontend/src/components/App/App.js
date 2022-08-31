import { useState } from "react";
import HighScore from "../HighScore/HighScore";
import Jogo from "../Jogo/Jogo";
import "./App.css";

function App() {
  const [gameOver, setGameOver] = useState(false);

  function onMorrer() {
    setGameOver(true);
  }

  return (
    <div className="App">
      <Jogo onMorrer={onMorrer} />
      {gameOver && <HighScore />}
    </div>
  );
}

export default App;
