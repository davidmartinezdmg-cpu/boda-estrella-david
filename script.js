const menuBtn=document.querySelector('.menu-btn');
const navLinks=document.querySelector('.nav-links');
menuBtn?.addEventListener('click',()=>navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const target=new Date(document.querySelector('.countdown-grid').dataset.date).getTime();
function updateCountdown(){
  const distance=target-Date.now();
  if(distance<=0)return;
  const d=Math.floor(distance/86400000);
  const h=Math.floor((distance%86400000)/3600000);
  const m=Math.floor((distance%3600000)/60000);
  const s=Math.floor((distance%60000)/1000);
  document.getElementById('days').textContent=String(d).padStart(3,'0');
  document.getElementById('hours').textContent=String(h).padStart(2,'0');
  document.getElementById('minutes').textContent=String(m).padStart(2,'0');
  document.getElementById('seconds').textContent=String(s).padStart(2,'0');
}
updateCountdown();setInterval(updateCountdown,1000);

document.getElementById('rsvp-form').addEventListener('submit',e=>{
  e.preventDefault();
  document.getElementById('form-status').textContent='Formulario de demostración. Cuando me pases tu Google Sheets, quedará conectado para guardar y enviar las respuestas.';
});
