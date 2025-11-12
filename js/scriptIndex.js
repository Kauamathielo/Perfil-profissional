const frases = [
  "Você é capaz de mais do que imagina!",
  "Cada linha de código é um passo rumo ao seu futuro.",
  "Erros são apenas degraus no caminho do aprendizado.",
  "A persistência transforma o impossível em realidade.",
  "A melhor maneira de aprender é criando!",
  "Deus te deu dons — use-os com propósito e paixão.",
  "Hoje é o dia perfeito para fazer algo incrível!",
  "Não pare quando estiver cansado. Pare quando terminar."
];

window.addEventListener('load', () => {
  const mensagem = document.querySelector('.mensagem');
  const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
  mensagem.textContent = fraseAleatoria;
});
