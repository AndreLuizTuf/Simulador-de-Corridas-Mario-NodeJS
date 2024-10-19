// Definindo os jogadores
const player1 = {
  NOME: "Mario", // Nome do jogador 1
  VELOCIDADE: 4, // Velocidade do Mario
  MANOBRABILIDADE: 3, // Nível de habilidade de manobras do Mario
  PODER: 3, // Nível de poder do Mario
  PONTOS: 0, // Pontuação inicial do Mario
};

const player2 = {
  NOME: "Luigi", // Nome do jogador 2
  VELOCIDADE: 5, // Velocidade do Luigi
  MANOBRABILIDADE: 2, // Nível de habilidade de manobras do Luigi
  PODER: 2, // Nível de poder do Luigi
  PONTOS: 0, // Pontuação inicial do Luigi
};

// Função para rolar o dado
async function rollDice() {
  return Math.floor(Math.random() * 6) + 1; // Gera um número aleatório entre 1 e 6
}

// Função para obter um tipo de bloco aleatório
async function getRandomBlock() {
  // Gera um número aleatório entre 0 e 1
  let random = Math.random();

  // Variável para armazenar o resultado
  let result;

  // Usa uma estrutura switch para determinar o tipo de bloco com base no valor aleatório
  switch (true) {
    // Se o valor aleatório for menor que 0.33, é um bloco RETA
    case random < 0.33:
      result = "RETA";
      break;
    // Se o valor aleatório estiver entre 0.33 e 0.66, é um bloco CURVA
    case random < 0.66:
      result = "CURVA";
      break;
    // Caso contrário, é um bloco CONFRONTO
    default:
      result = "CONFRONTO";
      break;
  }

  // Retorna o tipo de bloco aleatoriamente determinado
  return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁Rodada ${round}`);

    // sortear bloco
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    // rolar os dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    // teste de habilidade
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "META") {
      // habilidade de meta: rolar dois dados e somar os resultados
      totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
      totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

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
    if (block === "CURVA") {
      // habilidade de curva: rolar dois dados e somar os resultados
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

      if (powerResult1 > powerResult2 && character2.PONTOS > 0) {
        console.log(
            `${character1.NOME} venceu o confronto! ${character2.NOME} perdeu 1 ponto 🐢`
        );
        character2.PONTOS--;
    }

    if (powerResult2 > powerResult1 && character1.PONTOS > 0) {
        console.log(
            `${character2.NOME} venceu o confronto! ${character1.NOME} perdeu 1 ponto 🐢`
        );
        character1.PONTOS--;
    }

        console.log(
          powerResult2 === powerResult1
              ? "Confronto empatado! Nenhum ponto foi perdido"
              : ""
      );
    }

    // verificando o vencedor
    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${character1.NOME} marcou um ponto!`);
      character1.PONTOS++;
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`${character2.NOME} marcou um ponto!`);
      character2.PONTOS++;
    }
    console.log("------------------------");
  }
}
// Esta função está vazia, mas foi declarada como assíncrona
// Ela espera receber dois parâmetros: character1 e character2
// Ambos devem ser objetos com propriedades como NOME, VELOCIDADE, etc.

// A função não contém nenhuma lógica implementada
// Provavelmente deve conter código para simular uma corrida entre dois personagens
// Podemos esperar encontrar operações assíncronas dentro dela, como chamadas a APIs ou promessas

// Função auto invocável
(async function main() {
  // Declara uma função assíncrona chamada main
  console.log(
    `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando... \n`
  ); // Imprime uma mensagem formatada na consola

  // Esta linha imprime uma string que inclui:
  // - Um emoji de bandeira 🏁
  // - Um sinal de alerta 🚨
  // - O nome dos dois jogadores separados por "e"
  // - A frase "correndo..."
  // - Uma quebra de linha \n

  // A função usa template literals (backticks ``) para criar strings multilineares
  // e inserir variáveis diretamente na string usando ${variavel}

  await playRaceEngine(player1, player2); // Chama a função playRaceEngine com os jogadores

  // Esta linha chama a função playRaceEngine passando os objetos player1 e player2 como argumentos
  // A palavra-chave await indica que esta linha deve aguardar a conclusão da função playRaceEngine antes de continuar
  // Isso é útil quando a função playRaceEngine contiver operações assíncronas ou promessas

  // Se a função playRaceEngine retornar uma Promise, esta linha irá esperar que ela seja resolvida antes de prosseguir
  // Caso contrário, se a função não retornar nada, esta linha simplesmente continuará sem aguardar
})();

// A função é imediatamente invocada após sua definição
// Isso significa que a mensagem será impressa assim que a função for definida
