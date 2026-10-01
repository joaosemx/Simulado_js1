const nomeCompleto = localStorage.getItem("nomeUsuarioCompleto");
const primeiroNome = nomeCompleto ? nomeCompleto.split(" ")[0] : "Usuário";

document.getElementById("gato01").addEventListener("click", () => {
  alert(`Oi ${primeiroNome}, tudo bem com você?`);
});

let carinhos = 0;
document.getElementById("gato02").addEventListener("click", () => {
  carinhos++;
  document.getElementById("textoGato02").innerHTML = `Clique sobre mim várias vezes!<br>Carinhos: ${carinhos}`;
});

const gato03 = document.getElementById("gato03");
gato03.addEventListener("mouseover", () => {
  gato03.src = "../Imagens/gato06.gif";
});
gato03.addEventListener("mouseout", () => {
  gato03.src = "../Imagens/gato03.gif";
});

const gato04 = document.getElementById("gato04");
const textoGato04 = document.getElementById("textoGato04");
gato04.addEventListener("mouseover", () => {
  textoGato04.textContent = "Ai, pare de fazer cócegas!";
});
gato04.addEventListener("mouseout", () => {
  textoGato04.textContent = "lá lá lá lá lá ...";
});

document.getElementById("btnSorte").addEventListener("click", () => {
  const numero = Math.floor(Math.random() * 100) + 1;
  document.getElementById("caixaSorte").value = numero;
});