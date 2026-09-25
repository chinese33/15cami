const fechaFiesta = new Date("2026-10-17T22:00:00-03:00").getTime();

const dias = document.getElementById("dias");
const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");

function actualizarReloj() {
  const tiempoRestante = Math.max(0, fechaFiesta - Date.now());

  const totalSegundos = Math.floor(tiempoRestante / 1000);
  const diasRestantes = Math.floor(totalSegundos / 86400);
  const horasRestantes = Math.floor((totalSegundos % 86400) / 3600);
  const minutosRestantes = Math.floor((totalSegundos % 3600) / 60);
  const segundosRestantes = totalSegundos % 60;

  dias.textContent = String(diasRestantes).padStart(2, "0");
  horas.textContent = String(horasRestantes).padStart(2, "0");
  minutos.textContent = String(minutosRestantes).padStart(2, "0");
  segundos.textContent = String(segundosRestantes).padStart(2, "0");

  if (tiempoRestante === 0) {
    clearInterval(intervaloReloj);
  }
}

actualizarReloj();
const intervaloReloj = setInterval(actualizarReloj, 1000);
const musica = document.getElementById("musica");
const botonMusica = document.getElementById("boton-musica");

botonMusica.addEventListener("click", async () => {
  if (musica.paused) {
    try {
      await musica.play();
      botonMusica.textContent = "Ⅱ";
      botonMusica.setAttribute("aria-label", "Pausar música");
      botonMusica.setAttribute("aria-pressed", "true");
    } catch (error) {
      console.error("No se pudo reproducir la música:", error);
    }
  } else {
    musica.pause();
    botonMusica.textContent = "♪";
    botonMusica.setAttribute("aria-label", "Activar música");
    botonMusica.setAttribute("aria-pressed", "false");
  }
});