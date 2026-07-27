:root{
  --cream:#f8f4ea;
  --cream2:#eef3ea;
  --soft:#eef2ea;
  --rose:#6f8b67;
  --sage:#5f7755;
  --sage-dark:#243323;
  --gold:#a8b58b;
  --text:#303329;
  --muted:#756f63;
  --line:#eadfd2;
  --shadow:0 30px 80px rgba(70,51,31,.14);
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;
  font-family:Montserrat,system-ui,sans-serif;
  color:var(--text);
  background:
    radial-gradient(circle at 50% 0, rgba(255,255,255,.8), transparent 42%),
    linear-gradient(180deg,var(--cream),var(--cream2));
  overflow-x:hidden;
}
body:before{
  content:"";
  position:fixed;
  inset:0;
  pointer-events:none;
  z-index:-4;
  opacity:.6;
  background-image:url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23c99b43' fill-opacity='.055'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3Ccircle cx='80' cy='70' r='1.5'/%3E%3C/g%3E%3C/svg%3E");
}
a{color:inherit}
.topbar{
  position:fixed;top:0;left:0;right:0;z-index:50;height:64px;
  display:flex;align-items:center;justify-content:space-between;
  padding:12px clamp(16px,4vw,58px);
  background:rgba(255,248,239,.76);
  backdrop-filter:blur(18px);
  border-bottom:1px solid rgba(234,223,210,.8);
}
.brand{font-family:"Great Vibes",cursive;font-size:32px;text-decoration:none;color:var(--sage-dark)}
.topbar nav{display:flex;gap:22px;font-size:12px;text-transform:uppercase;letter-spacing:.15em;font-weight:800}
.topbar nav a{text-decoration:none;color:var(--sage-dark)}
.music{width:42px;height:42px;border-radius:50%;border:1px solid var(--line);background:#fff;color:var(--sage-dark);cursor:pointer}

.loader{
  position:fixed;inset:0;z-index:200;display:grid;place-items:center;padding:22px;
  background:radial-gradient(circle at 50% 35%,rgba(255,255,255,.8),transparent 45%),linear-gradient(180deg,#fff9f1,#fdeee8);
  overflow:hidden;
}
.loader.hidden{animation:fadeOut .65s ease forwards}
@keyframes fadeOut{to{opacity:0;visibility:hidden}}
.envelope{
  width:min(650px,100%);
  text-align:center;
  padding:clamp(30px,6vw,58px);
  border-radius:42px;
  background:rgba(255,255,255,.78);
  border:1px solid rgba(234,223,210,.88);
  box-shadow:var(--shadow);
  backdrop-filter:blur(5px);
  position:relative;z-index:5;
  animation:letterIn 1s ease both;
}
@keyframes letterIn{from{opacity:0;transform:translateY(28px) scale(.96)}to{opacity:1;transform:none}}
.seal{width:56px;height:56px;border-radius:50%;display:grid;place-items:center;margin:0 auto 16px;background:var(--sage-dark);color:#fff;font-family:"Cormorant Garamond",serif;font-weight:700;letter-spacing:.12em}
.overline{text-transform:uppercase;letter-spacing:.3em;font-weight:800;font-size:12px;color:var(--gold)}
.envelope h1{
  font-family:"Cormorant Garamond",serif;
  font-size:clamp(40px,8vw,74px);
  line-height:1;
  color:var(--sage-dark);
  margin:20px 0 12px;
  font-weight:600;
}
.envelope h1 span{color:var(--sage-dark)}
.date,.hero-date{font-family:"Cormorant Garamond",serif;text-transform:uppercase;letter-spacing:.18em;font-size:19px;font-weight:700;color:var(--sage-dark)}
.place{font-family:"Cormorant Garamond",serif;text-transform:uppercase;letter-spacing:.16em;color:var(--sage-dark);font-weight:700}
.actions,.hero-buttons{display:flex;justify-content:center;gap:12px;flex-wrap:wrap;margin-top:28px}
.btn{border:0;border-radius:999px;padding:15px 24px;font-weight:800;letter-spacing:.09em;text-transform:uppercase;font-size:12px;cursor:pointer;display:inline-flex;justify-content:center;align-items:center;text-decoration:none;min-height:48px}
.btn.primary{background:var(--sage-dark);color:#fff;box-shadow:0 16px 32px rgba(45,57,37,.22)}
.btn.ghost{background:#fff;color:var(--sage-dark);border:1px solid var(--line)}

.bouquet{
  position:absolute;
  width:330px;height:330px;
  z-index:1;pointer-events:none;
  opacity:.75;
  filter:saturate(.95);
  animation:flowerDrift 7s ease-in-out infinite;
}
.bouquet:before{
  content:"";
  position:absolute;inset:0;
  background:
    radial-gradient(circle at 30% 48%, #f4e5d4 0 34px, transparent 35px),
    radial-gradient(circle at 42% 38%, #fff8ef 0 26px, transparent 27px),
    radial-gradient(circle at 25% 28%, #f1c5bc 0 20px, transparent 21px),
    radial-gradient(circle at 50% 60%, #f1b9ad 0 18px, transparent 19px),
    radial-gradient(ellipse at 70% 28%, #c4d3b7 0 20px, transparent 21px),
    radial-gradient(ellipse at 72% 55%, #dce8d2 0 22px, transparent 23px),
    radial-gradient(ellipse at 15% 72%, #adc39f 0 15px, transparent 16px),
    radial-gradient(ellipse at 82% 75%, #e6d2b1 0 10px, transparent 11px);
}
.bouquet:after{
  content:"";
  position:absolute;
  left:40px;right:40px;bottom:55px;height:2px;
  background:linear-gradient(90deg,transparent,var(--gold),transparent);
  transform:rotate(-16deg);
}
@keyframes flowerDrift{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-15px) rotate(3deg)}}
.intro-bouquet-left{left:-80px;top:34px}
.intro-bouquet-right{right:-90px;bottom:30px;transform:scaleX(-1);animation-delay:-3s}
.hero-bouquet-left{left:-60px;top:80px}
.hero-bouquet-right{right:-70px;bottom:80px;animation-delay:-3s}
.mini-bouquet-left{left:-95px;top:50px;width:220px;height:220px;opacity:.4}
.mini-bouquet-right{right:-95px;top:50px;width:220px;height:220px;opacity:.4;animation-delay:-2s}
.mini-bouquet-left.lower{top:auto;bottom:50px}

.side{
  position:fixed;z-index:0;pointer-events:none;width:170px;height:520px;opacity:.32;
}
.side-left{left:-70px;top:150px}
.side-right{right:-78px;bottom:120px;transform:scaleX(-1)}
.side:before{
  content:"";position:absolute;left:86px;top:30px;width:6px;height:440px;border-radius:999px;background:linear-gradient(var(--sage),transparent);transform:rotate(-9deg)
}
.side:after{
  content:"";position:absolute;inset:0;
  background:
    radial-gradient(ellipse at 52% 10%, #f6e4d2 0 22px, transparent 23px),
    radial-gradient(ellipse at 40% 24%, #f1c5bc 0 16px, transparent 17px),
    radial-gradient(ellipse at 65% 40%, #dce8d2 0 17px, transparent 18px),
    radial-gradient(ellipse at 36% 55%, #fff4e9 0 18px, transparent 19px),
    radial-gradient(ellipse at 60% 70%, #c4d3b7 0 17px, transparent 18px);
  animation:sideMove 8s ease-in-out infinite;
}
@keyframes sideMove{0%,100%{transform:translateY(0) rotate(-2deg)}50%{transform:translateY(-18px) rotate(3deg)}}

.horse{
  position:absolute;
  pointer-events:none;
  z-index:3;
  width:170px;height:130px;
  opacity:.86;
  animation:horseFloat 5.8s ease-in-out infinite;
}
.horse:before{
  content:"🐎";
  position:absolute;
  font-size:112px;
  filter:sepia(.25) saturate(.9) drop-shadow(0 14px 20px rgba(70,51,31,.16));
}
.horse-intro{right:8%;top:22%}
.hero-horse{right:7%;top:20%;width:230px;height:190px}
.hero-horse:before{font-size:160px}
.horse-small-left{left:4%;top:22%;width:150px;height:110px;opacity:.5}
.horse-small-left:before{font-size:98px}
@keyframes horseFloat{0%,100%{transform:translateY(0) rotate(-4deg)}50%{transform:translateY(-18px) rotate(3deg)}}

.controller{
  position:absolute;
  z-index:4;
  pointer-events:none;
  font-size:42px;
  filter:drop-shadow(0 12px 14px rgba(70,51,31,.18));
  animation:controllerMove 4.6s ease-in-out infinite;
}
.controller-intro{left:14%;bottom:25%}
.controller-one{left:13%;top:36%}
.controller-two{right:12%;bottom:24%;animation-delay:-2s}
.controller-three{right:8%;top:28%;animation-delay:-1s}
.controller-rsvp{right:10%;top:10%;animation-delay:-2.6s}
@keyframes controllerMove{0%,100%{transform:translateY(0) rotate(-8deg)}50%{transform:translateY(-22px) rotate(10deg)}}

.floaters span,.falling span{position:absolute;pointer-events:none;color:var(--rose);opacity:.75}
.floaters span:nth-child(1){left:18%;top:20%;font-size:28px;animation:bob 4s ease-in-out infinite}
.floaters span:nth-child(2){right:25%;top:16%;font-size:26px;color:var(--gold);animation:bob 5s ease-in-out infinite}
.floaters span:nth-child(3){right:18%;bottom:18%;font-size:28px;animation:bob 4.4s ease-in-out infinite}
.floaters span:nth-child(4){left:20%;bottom:18%;font-size:34px;animation:bob 5.2s ease-in-out infinite}
@keyframes bob{0%,100%{transform:translateY(0) rotate(-6deg)}50%{transform:translateY(-18px) rotate(8deg)}}

.hero{
  min-height:100svh;display:grid;place-items:center;padding:110px 18px 70px;position:relative;overflow:hidden;
  background:
    radial-gradient(circle at 50% 35%, rgba(255,255,255,.75), transparent 38%),
    radial-gradient(circle at 13% 74%, rgba(241,185,173,.18), transparent 30%),
    radial-gradient(circle at 90% 70%, rgba(226,236,215,.22), transparent 30%);
}
.hero-card{
  width:min(760px,100%);text-align:center;
  padding:clamp(38px,8vw,78px);
  border-radius:46px;
  background:rgba(255,255,255,.74);
  border:1px solid rgba(234,223,210,.88);
  box-shadow:var(--shadow);position:relative;z-index:5;
  backdrop-filter:blur(5px);
}
.hero h2{
  font-family:"Cormorant Garamond",serif;
  font-weight:600;
  font-size:clamp(38px,7.4vw,76px);
  line-height:1.05;
  margin:18px 0 14px;
  color:var(--sage-dark);
}
.divider{display:flex;align-items:center;justify-content:center;gap:12px;color:var(--gold);margin:8px 0}
.divider i{width:64px;height:1px;background:var(--gold);opacity:.55}
.script{font-family:"Great Vibes",cursive;font-size:38px;color:var(--sage)}
.thanks{color:var(--gold);font-size:34px;margin:4px 0 18px}
.falling span{top:-50px;animation:fall 13s linear infinite}
.falling span:nth-child(even){width:10px;height:14px;border-radius:70% 30% 70% 30%;background:rgba(241,185,173,.75);color:transparent}
.falling span:nth-child(1){left:8%;font-size:22px;animation-delay:0s}.falling span:nth-child(2){left:22%;animation-delay:2s}.falling span:nth-child(3){left:35%;font-size:24px;color:var(--gold);animation-delay:4s}.falling span:nth-child(4){left:50%;animation-delay:1s}.falling span:nth-child(5){left:62%;font-size:22px;animation-delay:5s}.falling span:nth-child(6){left:76%;font-size:28px;animation-delay:3s}.falling span:nth-child(7){left:88%;animation-delay:6s}.falling span:nth-child(8){left:43%;font-size:20px;animation-delay:8s}
@keyframes fall{to{transform:translateY(112vh) rotate(360deg);opacity:.08}}

.section{padding:86px 18px;position:relative;z-index:1;overflow:hidden}
.soft{background:rgba(253,236,231,.34)}
.wrap{width:min(1120px,100%);margin:0 auto;text-align:center;position:relative;z-index:4}
.section h2{font-family:"Cormorant Garamond",serif;font-size:clamp(34px,6vw,58px);text-transform:uppercase;letter-spacing:.1em;margin:8px 0 16px;color:var(--sage-dark)}
.lead{max-width:760px;margin:0 auto 34px;color:var(--muted);line-height:1.85}
.countdown{margin-top:24px;display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
.countdown div,.card,.timeline-grid article,.dress-card,.gift-card,.info-grid article{background:rgba(255,255,255,.82);border:1px solid var(--line);box-shadow:0 18px 50px rgba(71,54,35,.08)}
.countdown div{border-radius:28px;padding:24px 10px}
.countdown strong{display:block;font-family:"Cormorant Garamond",serif;font-size:clamp(38px,6vw,56px);color:var(--sage-dark)}
.countdown span{text-transform:uppercase;letter-spacing:.16em;color:var(--muted);font-size:11px;font-weight:800}
.timeline-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:34px}
.timeline-grid article{border-radius:26px;padding:26px 18px}
.agenda-icon{font-size:34px;margin-bottom:10px}
.timeline-grid strong{display:block;font-family:"Cormorant Garamond",serif;font-size:28px;color:var(--sage-dark)}
.cards{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;margin-top:30px}
.card{border-radius:30px;padding:32px;text-align:left;position:relative;overflow:hidden}
.card.featured:before{content:"";position:absolute;right:-60px;top:-60px;width:180px;height:180px;border-radius:50%;background:rgba(241,185,173,.18)}
.icon{font-size:38px}
h3{font-family:"Cormorant Garamond",serif;font-size:25px;text-transform:uppercase;letter-spacing:.1em;margin:10px 0 12px;color:var(--sage-dark)}
p{line-height:1.75}
.card a{display:inline-flex;margin-top:8px;color:var(--sage-dark);font-weight:800;text-transform:uppercase;letter-spacing:.1em;font-size:12px}
.dress-card{max-width:660px;margin:34px auto 0;border-radius:34px;padding:32px;text-align:center}
.dress-icon{font-size:52px;display:flex;gap:30px;justify-content:center;margin-bottom:10px}
.gifts{background:radial-gradient(circle at 30% 20%,rgba(241,185,173,.18),transparent 32%),var(--cream)}
.gift-card{max-width:680px;margin:34px auto 0;border-radius:40px;padding:38px;position:relative;overflow:hidden}
.gift-icon{font-size:44px}
.account-label{text-transform:uppercase;letter-spacing:.16em;color:var(--muted);font-size:12px;font-weight:800;margin-bottom:0}
.iban{font-family:"Cormorant Garamond",serif;font-size:clamp(25px,5vw,42px);color:var(--sage-dark);letter-spacing:.08em;margin:8px 0;word-break:break-word}
.info-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:30px}
.info-grid article{border-radius:28px;padding:26px;text-align:left}
.form{display:grid;grid-template-columns:1fr 1fr;gap:18px;background:linear-gradient(135deg,#fff,var(--soft));border:1px solid var(--line);border-radius:38px;box-shadow:var(--shadow);padding:clamp(24px,5vw,48px);text-align:left}
.full{grid-column:1/-1}
label{display:block;text-transform:uppercase;letter-spacing:.13em;font-size:11px;font-weight:800;color:var(--sage-dark);margin-bottom:8px}
input,select,textarea{width:100%;border:1px solid var(--line);border-radius:18px;background:#fff;padding:15px 16px;font:inherit;outline:none}
textarea{min-height:105px;resize:vertical}
.pills{display:flex;gap:12px;flex-wrap:wrap}
.pills input{display:none}
.pills span{display:inline-flex;padding:14px 20px;border:1px solid var(--line);border-radius:999px;background:#fff;cursor:pointer}
.pills input:checked+span{background:var(--sage-dark);color:#fff}
.footer{background:var(--sage-dark);color:#fff;text-align:center;padding:55px 22px}
.footer .script{font-size:58px;color:#fff;margin:0}
.toast{position:fixed;left:50%;bottom:24px;z-index:80;transform:translateX(-50%) translateY(120px);background:var(--sage-dark);color:#fff;padding:14px 22px;border-radius:999px;transition:.3s}
.toast.show{transform:translateX(-50%) translateY(0)}
.reveal{opacity:0;transform:translateY(34px) scale(.985);transition:opacity .85s ease, transform .85s cubic-bezier(.2,.8,.2,1)}
.reveal.visible{opacity:1;transform:none}

@media(max-width:820px){
  .topbar nav{display:none}
  .topbar{height:58px;padding:10px 16px}
  .brand{font-size:30px}
  .hero{padding:86px 14px 52px}
  .hero-card{border-radius:34px;padding:38px 18px;width:min(560px,100%)}
  .hero h2{font-size:42px;line-height:1.06}
  .date,.hero-date{font-size:14px;letter-spacing:.12em}
  .place{font-size:13px}
  .section{padding:68px 14px}
  .countdown{grid-template-columns:repeat(2,1fr);gap:12px}
  .countdown div{padding:20px 6px;border-radius:22px}
  .timeline-grid,.cards,.form,.info-grid{grid-template-columns:1fr}
  .btn{width:100%}
  .envelope{border-radius:34px;padding:36px 18px}
  .envelope h1{font-size:42px}
  .bouquet{width:230px;height:230px;opacity:.58}
  .intro-bouquet-left{left:-98px;top:25px}
  .intro-bouquet-right{right:-110px;bottom:32px}
  .hero-bouquet-left{left:-98px;top:70px}
  .hero-bouquet-right{right:-108px;bottom:50px}
  .hero-horse{right:-6%;top:16%;opacity:.38}
  .hero-horse:before{font-size:110px}
  .horse-intro{right:-5%;top:18%;opacity:.42}
  .horse-intro:before{font-size:90px}
  .controller-one{left:8%;top:42%;font-size:30px}
  .controller-two{right:6%;bottom:19%;font-size:30px}
  .controller-three,.controller-rsvp{font-size:28px;opacity:.6}
  .side{display:none}
  .mini-bouquet-left,.mini-bouquet-right{width:155px;height:155px;opacity:.32}
  .pills span{width:100%;justify-content:center}
}
