// Animação de entrada no texto principal
window.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  header.style.opacity = 0;
  header.style.transform = "translateY(-30px)";
  setTimeout(() => {
    header.style.transition = "all 0.8s ease-out";
    header.style.opacity = 1;
    header.style.transform = "translateY(0)";
  }, 100);
});

// Botão de entrada com alerta
const discordBtn = document.querySelector(".discord-btn");
if (discordBtn) {
  discordBtn.addEventListener("click", () => {
    alert("Você será redirecionado para o Discord. Bora jogar!");
  });
}
