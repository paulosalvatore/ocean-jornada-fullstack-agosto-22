import "./HighScore.css";

/*
- Exibir a pontuação que o jogador fez
- Pegar os HighScores do Backend e exibir as pontuações recebidas
- A pessoa irá digitar o nome e clicar no botão "Enviar" para submeter
um novo score
- Depois que submeteu um novo score, vamos recarregar a lista
de scores
*/

function HighScore(props) {
  // Fazer uma solicitação para o backend trazer as maiores pontuações
  // Endpoint: [GET] http://localhost:3333/pontuacoes
  // Solicitação = Requisição HTTP
  // Para fazer requisições HTTP, temos algumas bibliotecas:
  // Fetch
  // Axios
  // entre outras

  fetch("http://localhost:3333/pontuacoes").then(console.log);

  return (
    <div className="HighScore">
      <div>
        Você fez <b>{props.pontos}</b> pontos!
      </div>

      <div>
        <h1>HighScore</h1>

        <div>Paulo - 90 pontos</div>
        <div>João - 50 pontos</div>
        <div>Ana - 32 pontos</div>
      </div>

      <div>
        <h1>Registre sua pontuação!</h1>
        <form>
          <input type="text" placeholder="Digite o seu nome..." />
          <input type="submit" value="Enviar" />
        </form>
      </div>
    </div>
  );
}

export default HighScore;
