// Definindo os jogadores com seus atributos (velocidade, manobrabilidade, poder e pontos)
const player1 = {
  NOME: "Mario",
  VELOCIDADE: 4, // Atributo de velocidade do jogador
  MANOBRABILIDADE: 3, // Atributo de manobrabilidade do jogador
  PODER: 3, // Atributo de poder do jogador (usado em confrontos)
  PONTOS: 0, // Pontos acumulados na corrida
};

const player2 = {
  NOME: "Luigi",
  VELOCIDADE: 3, 
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};

// Função para rolar um dado (simula um número aleatório entre 1 e 6)
async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

// Função para definir aleatoriamente o tipo de bloco da pista (RETA, CURVA ou CONFRONTO)
async function getRandomBlock() {
  let random = Math.random(); // Gera um número aleatório entre 0 e 1
  let result;

  switch (true) {
      case random < 0.33: // Se o número for menor que 0.33, o bloco é "RETA"
          result = "RETA";
          break;
      case random < 0.66: // Se o número estiver entre 0.33 e 0.66, o bloco é "CURVA"
          result = "CURVA";
          break;
      default: // Se for maior que 0.66, o bloco é "CONFRONTO"
          result = "CONFRONTO";
  }

  return result; // Retorna o tipo de bloco
}

// Função para exibir no console o resultado da rolagem do dado e o total do teste
async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
      `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${diceResult + attribute}`
  );
}

// Função principal que controla a lógica da corrida
async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) { // Loop que controla as 5 rodadas da corrida
      console.log(`🏁 Rodada ${round}`);

      // Sorteia um bloco da pista (RETA, CURVA ou CONFRONTO)
      let block = await getRandomBlock();
      console.log(`Bloco: ${block}`);

      // Rola os dados para os dois jogadores
      let diceResult1 = await rollDice();
      let diceResult2 = await rollDice();

      // Variáveis para armazenar os resultados dos testes de habilidade
      let totalTestSkill1 = 0;
      let totalTestSkill2 = 0;

      // Se o bloco for uma "RETA", a habilidade testada é "velocidade"
      if (block === "RETA") {
          totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
          totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

          // Exibe no console o resultado da rolagem de cada jogador
          await logRollResult(
              character1.NOME,
              "velocidade",
              diceResult1,
              character1.VELOCIDADE
          );

          await logRollResult(
              character2.NOME,
              "velocidade",
              diceResult2,
              character2.VELOCIDADE
          );
      }

      // Se o bloco for uma "CURVA", a habilidade testada é "manobrabilidade"
      if (block === "CURVA") {
          totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
          totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

          await logRollResult(
              character1.NOME,
              "manobrabilidade",
              diceResult1,
              character1.MANOBRABILIDADE
          );

          await logRollResult(
              character2.NOME,
              "manobrabilidade",
              diceResult2,
              character2.MANOBRABILIDADE
          );
      }

      // Se o bloco for "CONFRONTO", a habilidade testada é "poder"
      if (block === "CONFRONTO") {
          let powerResult1 = diceResult1 + character1.PODER;
          let powerResult2 = diceResult2 + character2.PODER;

          console.log(`${character1.NOME} confrontou com ${character2.NOME}! 🥊`);

          await logRollResult(
              character1.NOME,
              "poder",
              diceResult1,
              character1.PODER
          );

          await logRollResult(
              character2.NOME,
              "poder",
              diceResult2,
              character2.PODER
          );

          // Verifica quem venceu o confronto e subtrai pontos do perdedor
          if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
              console.log(
                  `${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto 🐢`
              );
              character2.PONTOS--; // Subtrai 1 ponto do perdedor
          }

          if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
              console.log(
                  `${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto 🐢`
              );
              character1.PONTOS--; // Subtrai 1 ponto do perdedor
          }

          // Se o confronto empatar, ninguém perde pontos
          console.log(
              powerResult2 === powerResult1
                  ? "Confronto empatado! Nenhum ponto foi perdido"
                  : ""
          );
      }

      // Verifica o vencedor da rodada com base nos resultados dos testes de habilidade
      if (totalTestSkill1 > totalTestSkill2) {
          console.log(`${character1.NOME} marcou um ponto!`);
          character1.PONTOS++; // Adiciona 1 ponto ao vencedor da rodada
      } else if (totalTestSkill2 > totalTestSkill1) {
          console.log(`${character2.NOME} marcou um ponto!`);
          character2.PONTOS++; // Adiciona 1 ponto ao vencedor da rodada
      }

      console.log("-----------------------------");
  }
}

// Função para declarar o vencedor da corrida após as 5 rodadas
async function declareWinner(character1, character2) {
  console.log("Resultado final:");
  console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
  console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

  // Compara os pontos de cada jogador e declara o vencedor ou empate
  if (character1.PONTOS > character2.PONTOS)
      console.log(`\n${character1.NOME} venceu a corrida! Parabéns! 🏆`);
  else if (character2.PONTOS > character1.PONTOS)
      console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆`);
  else console.log("A corrida terminou em empate");
}

// Função auto-invocável para iniciar o jogo
(async function main() {
  console.log(
      `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`
  );

  await playRaceEngine(player1, player2); // Inicia o motor da corrida
  await declareWinner(player1, player2); // Declara o vencedor após as rodadas
})();
