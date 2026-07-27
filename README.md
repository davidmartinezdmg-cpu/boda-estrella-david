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

$("#rsvpForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const btn=event.target.querySelector('button[type="submit"]');
  const old=btn.textContent;
  btn.disabled=true;btn.textContent="Enviando...";
  const data=Object.fromEntries(new FormData(event.target).entries());
  try {
    const res=await fetch("https://script.google.com/macros/s/AKfycbwsAvykXVlYEHh8Ym5lpokUaJA0kL4E53Xu5JFXNGP60aWqMSwBIPOA0jKNqOTf8M05/exec",{method:"POST",headers:{"Content-Type":"text/plain;charset=utf-8"},body:JSON.stringify(data)});
    if(!res.ok) throw new Error();
    showToast("¡Gracias por confirmar vuestra asistencia!");
    event.target.reset();
  } catch(err) {
    showToast("Error al enviar.");
  } finally {
    btn.disabled=false;btn.textContent=old;
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.15 });

$$(".reveal").forEach((element) => observer.observe(element));

updateCountdown();
setInterval(updateCountdown, 1000);
