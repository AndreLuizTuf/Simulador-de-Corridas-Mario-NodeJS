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
};

async function playRaceEngine(character1, character2) {} // Declara uma função assíncrona chamada playRaceEngine

// Esta função está vazia, mas foi declarada como assíncrona
// Ela espera receber dois parâmetros: character1 e character2
// Ambos devem ser objetos com propriedades como NOME, VELOCIDADE, etc.

// A função não contém nenhuma lógica implementada
// Provavelmente deve conter código para simular uma corrida entre dois personagens
// Podemos esperar encontrar operações assíncronas dentro dela, como chamadas a APIs ou promessas


// Função auto invocável
(async function main() { // Declara uma função assíncrona chamada main
    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando... \n`); // Imprime uma mensagem formatada na consola
    
    // Esta linha imprime uma string que inclui:
    // - Um emoji de bandeira 🏁
    // - Um sinal de alerta 🚨
    // - O nome dos dois jogadores separados por "e"
    // - A frase "correndo..."
    // - Uma quebra de linha \n

    // A função usa template literals (backticks ``) para criar strings multilineares
    // e inserir variáveis diretamente na string usando ${variavel}

    await playRaceEngine(player1, player2) // Chama a função playRaceEngine com os jogadores

// Esta linha chama a função playRaceEngine passando os objetos player1 e player2 como argumentos
// A palavra-chave await indica que esta linha deve aguardar a conclusão da função playRaceEngine antes de continuar
// Isso é útil quando a função playRaceEngine contiver operações assíncronas ou promessas

// Se a função playRaceEngine retornar uma Promise, esta linha irá esperar que ela seja resolvida antes de prosseguir
// Caso contrário, se a função não retornar nada, esta linha simplesmente continuará sem aguardar
})();

// A função é imediatamente invocada após sua definição
// Isso significa que a mensagem será impressa assim que a função for definida