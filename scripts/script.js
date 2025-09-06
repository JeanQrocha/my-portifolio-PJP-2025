
  const btn = document.getElementById("btnSobreMim");
  const texto = document.getElementById("textoSobreMim");
  window.onload = () => {
    texto.style.display = "none";
  }

  btn.addEventListener("click", () => {
    if (texto.style.display === "none") {
      texto.style.display = "block";
      btn.textContent = "Esconder ▲";
      btn.classList.add("ativo");
    } else {
      texto.style.display = "none";
      btn.textContent = "Sobre mim ▼";
       btn.classList.remove("ativo");
    }
  });