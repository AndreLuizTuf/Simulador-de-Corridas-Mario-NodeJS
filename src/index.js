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

// Função auto invocável
(async function main() { // Declara uma função assíncrona chamada main
    console.log(`🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando... \n`); // Imprime "Hello!" na consola
    
})(); // Fecha a declaração da função

// A função é imediatamente invocada após sua definição
// Isso significa que "Hello!" será impresso assim que a função for definida