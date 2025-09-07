
const btn = document.getElementById("btnSobreMim");
const texto = document.getElementById("textoSobreMim");

window.onload = () => {
  texto.classList.remove("mostrar");
};

btn.addEventListener("click", () => {
  const arrow = btn.querySelector(".arrow");

  if (texto.classList.contains("mostrar")) {
    texto.classList.remove("mostrar");
    btn.classList.remove("open");
  } else {
    texto.classList.add("mostrar");
    btn.classList.add("open");
  }
});
