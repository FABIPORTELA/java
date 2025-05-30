let cliques = 0;

// Lista de flores emoji
const flores = ["🌸", "🌼", "🌻", "🌷", "🌹", "💐", "🌺"];
let florAtual = null; // Para evitar repetir a mesma flor

// Elementos da página
const botao = document.getElementById('botaoClique');
const contador = document.getElementById('contador');
const flor = document.getElementById('flor');

// Função de clique
botao.addEventListener('click', () => {
  cliques++;
  contador.textContent = cliques;

  // Escolher uma flor diferente da anterior
  let novaFlor;
  do {
    novaFlor = flores[Math.floor(Math.random() * flores.length)];
  } while (novaFlor === florAtual);

  florAtual = novaFlor;
  flor.textContent = novaFlor;

  // Animação leve (aumenta e volta ao normal)
  flor.style.transform = "scale(1.3)";
  setTimeout(() => {
    flor.style.transform = "scale(1)";
  }, 150);
});
