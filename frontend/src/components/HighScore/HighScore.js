import { useEffect, useState } from "react";
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

  const [itens, setItens] = useState(undefined);

  useEffect(function () {
    // Declaração da função
    async function carregarPontuacoes() {
      // Fazemos a requisição e recebemos a resposta
      const response = await fetch("http://localhost:3333/pontuacoes");

      // Extraímos o JSON do Corpo da Resposta
      const body = await response.json();

      // Atualizamos o estado `itens` com os valores recebido
      // Ao atualizar o estado, o React renderiza o componente
      // novamente
      setItens(body);
    }

    // Executamos a função
    carregarPontuacoes();
  }, []);

  console.log(itens);

  const itensEstaoCarregando = itens === undefined;

  return (
    <div className="HighScore">
      <div>
        Você fez <b>{props.pontos}</b> pontos!
      </div>

      <div>
        <h1>HighScore</h1>

        {itensEstaoCarregando ? (
          <div>Carregando...</div>
        ) : (
          <div>
            {itens.map((item) => (
              <div>
                {item.nome} - {item.pontos}
              </div>
            ))}
          </div>
        )}
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
