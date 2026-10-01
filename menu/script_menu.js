const nomeCompleto = localStorage.getItem("nomeUsuarioCompleto");

if (nomeCompleto) {
  const partes = nomeCompleto.split(" ").filter(p => p !== "");
  const primeiroNome = partes[0];
  const ultimoNome = partes[partes.length - 1];

  const h1 = document.getElementById("boasVindas");
  h1.innerHTML = `<strong>${primeiroNome} ${ultimoNome}</strong>, seja bem-vindo ao jogo dos Felinos!`;
}

document.getElementById("btnConvidado").addEventListener("click", () => {
  window.location.href = "../felino/felino.html";
});