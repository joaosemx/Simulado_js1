alert("Olá, seja bem-vindo!");

document.getElementById("btnEntrar").addEventListener("click", () => {
  const nomeInput = document.getElementById("nomeCompleto").value.trim();

  if (!nomeInput) {
    alert("Informe o seu nome!");
    return;
  }

  const partes = nomeInput.split(" ").filter(p => p !== "");

  if (partes.length < 2) {
    alert("Informe pelo menos NOME + SOBRENOME.");
    return;
  }

  localStorage.setItem("nomeUsuarioCompleto", nomeInput);
  window.location.href = "./menu/menu.html";
});