// CAMBIA AQUÍ LA FECHA CUANDO LA TENGÁIS
// Formato: AÑO-MES-DÍA T HORA:MINUTOS:SEGUNDOS
const weddingDate = new Date("2027-06-15T17:30:00");

// CAMBIA AQUÍ EL EMAIL DONDE QUERÉIS RECIBIR CONFIRMACIONES
const confirmationEmail = "TU_EMAIL_AQUI@ejemplo.com";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const audio = $("#music");
const intro = $("#intro");
const toast = $("#toast");

function updateCountdown() {
  const diff = Math.max(weddingDate - new Date(), 0);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
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
    console.log("El navegador necesita interacción del usuario para reproducir música.");
  }
}

function toggleMusic() {
  if (audio.paused) {
    playMusic();
  } else {
    audio.pause();
  }
}

$("#enterWithMusic").addEventListener("click", () => {
  intro.classList.add("hidden");
  playMusic();
});

$("#enterWithoutMusic").addEventListener("click", () => {
  intro.classList.add("hidden");
});

$("#musicBtn").addEventListener("click", toggleMusic);

$("#rsvpForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(event.target).entries());

  const body = encodeURIComponent(`Confirmación boda

Asistencia: ${data.asistencia || ""}
Nombre: ${data.nombre || ""}
Código invitación: ${data.codigo || ""}
Acompañante: ${data.acompanante || ""}
Nombre acompañante: ${data.nombreAcompanante || ""}
Niños: ${data.ninos || ""}
Menú: ${data.menu || ""}
Transporte: ${data.transporte || ""}
Hotel: ${data.hotel || ""}
Alergias/intolerancias: ${data.alergias || ""}
Canción sugerida: ${data.cancion || ""}
Teléfono: ${data.telefono || ""}
Mensaje: ${data.mensaje || ""}`);

  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);

  window.location.href = `mailto:${confirmationEmail}?subject=RSVP boda&body=${body}`;
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.15 });

$$(".reveal").forEach(el => observer.observe(el));

updateCountdown();
setInterval(updateCountdown, 1000);
