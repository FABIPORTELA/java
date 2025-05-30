// 1. Variável para armazenar a contagem
let cliques = 0;

// 2. Seleciona os elementos da página
const botao = document.getElementById('botaoClique');
const areaContador = document.getElementById('contador');

// 3. Adiciona o evento de clique ao botão
botao.addEventListener('click', function () {
  // 4. Incrementa o valor e atualiza o contador
  cliques++;
  areaContador.textContent = cliques;
});

