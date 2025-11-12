const form = document.getElementById("formContato");
const mensagemDiv = document.getElementById("mensagemConfirmacao");

form.addEventListener("submit", function(event) {
  event.preventDefault(); // Impede envio real

  const nome = document.getElementById("nome").value;

  // Mensagem personalizada
  mensagemDiv.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
  mensagemDiv.classList.add("visivel");

  // Limpa o formulário
  form.reset();

  // Remove mensagem após 4 segundos
  setTimeout(() => {
    mensagemDiv.classList.remove("visivel");
    mensagemDiv.textContent = '';
  }, 4000);
});
