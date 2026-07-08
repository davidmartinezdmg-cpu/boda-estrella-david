const weddingDate=new Date("2026-10-03T17:30:00");
const confirmationEmail="TU_EMAIL_AQUI@ejemplo.com";
const ibanText="ES00 0000 0000 0000 0000 0000";
const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s);
const audio=$("#music"),intro=$("#intro"),toast=$("#toast");
function showToast(m){toast.textContent=m;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),2500)}
function updateCountdown(){const d=Math.max(weddingDate-new Date,0),days=Math.floor(d/864e5),h=Math.floor(d/36e5%24),m=Math.floor(d/6e4%60),s=Math.floor(d/1e3%60);$("[data-days]").textContent=String(days).padStart(2,"0");$("[data-hours]").textContent=String(h).padStart(2,"0");$("[data-minutes]").textContent=String(m).padStart(2,"0");$("[data-seconds]").textContent=String(s).padStart(2,"0")}
async function playMusic(){try{await audio.play()}catch(e){showToast("Subid la canción a assets/audio/entrada.mp3")}}
function toggleMusic(){audio.paused?playMusic():audio.pause()}
$("#enterWithMusic").addEventListener("click",()=>{intro.classList.add("hidden");playMusic()});
$("#enterWithoutMusic").addEventListener("click",()=>intro.classList.add("hidden"));
$("#musicBtn").addEventListener("click",toggleMusic);
$("#iban").textContent=ibanText;
$("#copyIban").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(ibanText);showToast("Número de cuenta copiado")}catch(e){showToast("No se pudo copiar")}});
$("#rsvpForm").addEventListener("submit",e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.target).entries());const body=encodeURIComponent(`Confirmación boda David & Estrella

Asistencia: ${data.asistencia||""}
Nombre: ${data.nombre||""}
Código invitación: ${data.codigo||""}
Acompañante: ${data.acompanante||""}
Nombre acompañante: ${data.nombreAcompanante||""}
Niños: ${data.ninos||""}
Menú: ${data.menu||""}
Transporte: ${data.transporte||""}
Alergias/intolerancias: ${data.alergias||""}
Canción sugerida: ${data.cancion||""}
Teléfono: ${data.telefono||""}
Email: ${data.email||""}
Mensaje: ${data.mensaje||""}`);showToast("Preparando confirmación");window.location.href=`mailto:${confirmationEmail}?subject=RSVP boda David y Estrella&body=${body}`});
const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("visible")})},{threshold:.15});
$$(".reveal").forEach(el=>observer.observe(el));
updateCountdown();setInterval(updateCountdown,1000);