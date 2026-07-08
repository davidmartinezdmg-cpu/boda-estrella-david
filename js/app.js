const weddingDate = new Date("2026-10-03T13:00:00");
const confirmationEmail = "TU_EMAIL_AQUI@ejemplo.com";
const ibanText = "ES56 1465 0100 9820 5050 2922";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const audio = $("#music");
const intro = $("#intro");
const toast = $("#toast");

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

function updateCountdown() {
  const diff = Math.max(weddingDate - new Date(), 0);
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  $("[data-days]").textContent = String(days).padStart(2, "0");
  $("[data-hours]").textContent = String(hours).padStart(2, "0");
  $("[data-minutes]").textContent = String(minutes).padStart(2, "0");
  $("[data-seconds]").textContent = String(seconds).padStart(2, "0");
}

async function playMusic() {
  try {
    await audio.play();
  } catch (error) {
    showToast("Subid la canción a assets/audio/entrada.mp3");
  }
}

function toggleMusic() {
  audio.paused ? playMusic() : audio.pause();
}

$("#enterWithMusic").addEventListener("click", () => {
  intro.classList.add("hidden");
  playMusic();
});

$("#enterWithoutMusic").addEventListener("click", () => {
  intro.classList.add("hidden");
});

$("#musicBtn").addEventListener("click", toggleMusic);
$("#iban").textContent = ibanText;

$("#copyIban").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(ibanText.replaceAll(" ", ""));
    showToast("Número de cuenta copiado");
  } catch (error) {
    showToast("No se pudo copiar");
  }
});

$("#rsvpForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(event.target).entries());

  const body = encodeURIComponent(`Confirmación boda David & Estrella

Asistencia: ${data.asistencia || ""}
Nombre: ${data.nombre || ""}
Acompañante: ${data.acompanante || ""}
Nombre acompañante: ${data.nombreAcompanante || ""}
Niños: ${data.ninos || ""}
Tipo de menú: ${data.menu || ""}
Transporte: ${data.transporte || ""}
Alergias/intolerancias: ${data.alergias || ""}
Teléfono: ${data.telefono || ""}
Email: ${data.email || ""}
Mensaje: ${data.mensaje || ""}`);

  showToast("Preparando confirmación");
  window.location.href = `mailto:${confirmationEmail}?subject=RSVP boda David y Estrella&body=${body}`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.15 });

$$(".reveal").forEach((element) => observer.observe(element));

updateCountdown();
setInterval(updateCountdown, 1000);
