// PEGA OS ELEMENTOS DECLARADOS NO IDADE.HTML ATRAVÉS DO SEU ID E GUARDA EM CONSTANTES
const inputIdade = document.getElementById("Idade");
const btnVerificar = document.getElementById("Verificar");
const pMensagem = document.getElementById("Mensagem");

// EVENTO DE CLIQUE EXECUTAR QUANDO O BOTÃO FOR CLICADO
btnVerificar.addEventListener("click", function () {
  // CONVERTE TEXT PARA NUMBER
  let Idade = Number(inputIdade.value);
  if (Idade >= 18) {
    pMensagem.innerText = "Acesso LIBERADO!";
    pMensagem.style.color = "green";
  } else {
    pMensagem.innerText = "Acesso NEGADO!";
    pMensagem.style.color = "red";
  }
});