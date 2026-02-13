// ========= PERSONALIZA AQUÍ =========
const CONFIG = {
  noviaNombre: "Tu Novia",
  carreraNombre: "Acea Run Rome The Marathon",
  // Ajusta al día/hora de su edición (hora local de Roma)
  carreraFechaISO: "2026-03-22T08:30:00",
  limiteTexto: "6h30",
  oficialHome: "https://www.runromethemarathon.com/",
  // Imagen del mapa oficial publicada en su web
  mapaURL: "https://www.runromethemarathon.com/wp-content/uploads/2025/10/mappa-orizzontale-scaled.jpg",

  loveNotes: [
    "Hoy entrenas, mañana inspiras. Roma te queda increíble 💚",
    "No tienes que demostrar nada: ya lo estás haciendo.",
    "Cuando lleguen las dudas, acuérdate de lo valiente que eres.",
    "Tú y tu constancia: el dúo más peligroso 😄",
    "Estoy orgulloso de ti, en los días buenos y en los raros."
  ],

  highlights: [
    "Salida: Via dei Fori Imperiali (zona Colosseo)",
    "Piazza Venezia / Vittoriano",
    "Circo Massimo (también la llegada)",
    "San Paolo / Piramide Cestia (zona histórica)",
    "Lungotevere e Isola Tiberina",
    "Castel Sant’Angelo y Via della Conciliazione (San Pietro)",
    "Foro Italico y Ponte Milvio",
    "Auditorium Parco della Musica",
    "Piazza del Popolo, Piazza di Spagna, Piazza Navona",
    "Últimos km: Vittoriano → Bocca della Verità → Circo Massimo"
  ],

  tips: [
    { title: "Hora de salida y oleadas", body: "La salida está prevista a las 08:30 y se realiza por oleadas separadas por unos minutos. Llega con margen y con todo preparado." },
    { title: "Salida y meta", body: "Salida en Via dei Fori Imperiali (zona Colosseo) y llegada en Circo Massimo." },
    { title: "Tiempo límite", body: "Tiempo máximo para finalizar: 6h30 (además suelen comunicar límites intermedios por puntos/kilómetros)." },
    { title: "Guardarropa / bolsa", body: "Hay servicio de bolsa en salida/meta. Normalmente piden usar la bolsa oficial del dorsal y recomiendan no dejar objetos de valor." },
    { title: "Cronometraje y parciales", body: "Se usa chip asociado al dorsal y registran tiempos parciales (p. ej. 10K, media, 30K, etc.)." },
    { title: "Si te retiras", body: "Disponen de transporte para retirados con puntos de recogida aproximados alrededor de km 20.6, 28.3 y 32.8." },
    { title: "Avituallamientos", body: "Habrá avituallamientos/puntos de esponjas según normativa; el detalle exacto lo publican cerca de la carrera (Race Day Info)." },
    { title: "Clima típico", body: "Finales de marzo en Roma suele rondar ~13°C de media (y ~9°C a primera hora). Planifica capas/ropa de espera." }
  ],

  checklist: [
    "Plan de llegada a la salida (metro/taxi) + plan B",
    "Dorsal/chip + imperdibles + vaselina",
    "Outfit probado + ropa de espera",
    "Desayuno probado + geles (sin inventos)",
    "Plan de ritmo (A/B) + mantra para el km 30",
    "Punto de encuentro post-meta",
    "Cargar reloj/móvil y modo no molestar"
  ]
};
// ====================================

// --- Helpers ---
const $ = (id) => document.getElementById(id);

function formatDateTime(iso){
  const d = new Date(iso);
  return d.toLocaleString("es-ES", {
    weekday:"long", year:"numeric", month:"long", day:"numeric",
    hour:"2-digit", minute:"2-digit"
  });
}

function diffParts(targetDate){
  const now = new Date();
  const ms = targetDate - now;
  const sign = ms < 0 ? -1 : 1;
  const abs = Math.abs(ms);

  const s = Math.floor(abs/1000);
  const days = Math.floor(s / 86400);
  const hours = Math.floor((s % 86400) / 3600);
  const mins = Math.floor((s % 3600) / 60);
  const secs = s % 60;

  return { sign, days, hours, mins, secs, ms };
}

// --- Bind basics ---
$("name").textContent = CONFIG.noviaNombre;
$("raceInfo").textContent = `${CONFIG.carreraNombre} · Hora local de Roma`;
$("routeImg").src = CONFIG.mapaURL;
$("officialLink").href = CONFIG.oficialHome;

$("startChip").textContent = `Salida: ${formatDateTime(CONFIG.carreraFechaISO)}`;
$("limitChip").textContent = `Límite: ${CONFIG.limiteTexto}`;

// --- Countdown ---
const target = new Date(CONFIG.carreraFechaISO);
function tick(){
  const { sign, days, hours, mins, secs } = diffParts(target);
  if(sign < 0){
    $("timer").textContent = `¡A por ello! 🏁`;
    return;
  }
  const pad = (n)=> String(n).padStart(2,"0");
  $("timer").textContent = `${days}d ${pad(hours)}:${pad(mins)}:${pad(secs)}`;
}
tick();
setInterval(tick, 1000);

// --- Love notes ---
function setRandomNote(){
  const i = Math.floor(Math.random() * CONFIG.loveNotes.length);
  $("loveNote").textContent = CONFIG.loveNotes[i];
}
setRandomNote();
$("newNoteBtn").addEventListener("click", setRandomNote);

// --- Highlights list ---
const hl = $("highlights");
CONFIG.highlights.forEach(t=>{
  const li = document.createElement("li");
  li.textContent = t;
  hl.appendChild(li);
});

// --- Tips accordion ---
const tipsEl = $("tips");
CONFIG.tips.forEach((t, idx)=>{
  const item = document.createElement("div");
  item.className = "accItem";
  item.innerHTML = `
    <button class="accBtn" type="button" aria-expanded="false" aria-controls="p${idx}">
      <span>${t.title}</span>
      <span class="chev">＋</span>
    </button>
    <div class="accPanel" id="p${idx}" hidden>${t.body}</div>
  `;
  const btn = item.querySelector(".accBtn");
  const panel = item.querySelector(".accPanel");
  const chev = item.querySelector(".chev");

  btn.addEventListener("click", ()=>{
    const open = btn.getAttribute("aria-expanded") === "true";
    btn.setAttribute("aria-expanded", String(!open));
    panel.hidden = open;
    chev.textContent = open ? "＋" : "—";
  });

  tipsEl.appendChild(item);
});

// --- Checklist with localStorage ---
const storageKey = "roadToRomaChecklist_v2";
const saved = JSON.parse(localStorage.getItem(storageKey) || "null");
let state = saved?.state || Array(CONFIG.checklist.length).fill(false);

const list = $("checkList");
const barFill = $("barFill");
const progressText = $("progressText");

function persist(){
  localStorage.setItem(storageKey, JSON.stringify({ state }));
}

function renderProgress(){
  const done = state.filter(Boolean).length;
  const total = state.length;
  const pct = Math.round((done/total)*100);
  barFill.style.width = `${pct}%`;
  progressText.textContent = `${done}/${total} completados (${pct}%)`;
}

function renderChecklist(){
  list.innerHTML = "";
  CONFIG.checklist.forEach((txt, i)=>{
    const li = document.createElement("li");
    li.className = "checkRow";
    li.innerHTML = `
      <input type="checkbox" id="c${i}" ${state[i] ? "checked" : ""} />
      <label for="c${i}">${txt}</label>
    `;
    li.querySelector("input").addEventListener("change", (e)=>{
      state[i] = e.target.checked;
      persist();
      renderProgress();
    });
    list.appendChild(li);
  });
  renderProgress();
}
renderChecklist();

$("resetBtn").addEventListener("click", ()=>{
  state = Array(CONFIG.checklist.length).fill(false);
  persist();
  renderChecklist();
});

// --- Copy link button (WhatsApp friendly) ---
$("shareBtn").addEventListener("click", async ()=>{
  try{
    await navigator.clipboard.writeText(window.location.href);
    $("shareBtn").innerHTML = `<span class="icon">✅</span><span class="hideSm">Copiado</span>`;
    setTimeout(()=> $("shareBtn").innerHTML = `<span class="icon">🔗</span><span class="hideSm">Copiar link</span>`, 1400);
  }catch{
    alert("No pude copiar el link. Copia la URL manualmente 🙏");
  }
});

// --- Mini confetti (canvas) ---
const canvas = $("confetti");
const ctx = canvas.getContext("2d");
let W, H, particles = [], running = false;

function resize(){
  W = canvas.width = window.innerWidth;
  H = canvas.height = window.innerHeight;
}
window.addEventListener("resize", resize);
resize();

function burst(){
  particles = [];
  const n = 140;
  for(let i=0;i<n;i++){
    particles.push({
      x: W/2 + (Math.random()*80-40),
      y: H/2 + (Math.random()*40-20),
      vx: (Math.random()*6-3),
      vy: (Math.random()*-7-2),
      g: 0.14 + Math.random()*0.08,
      s: 3 + Math.random()*4,
      a: 1,
      r: Math.random()*Math.PI
    });
  }
  running = true;
  animate();
}

function animate(){
  if(!running) return;
  ctx.clearRect(0,0,W,H);
  particles.forEach(p=>{
    p.vy += p.g;
    p.x += p.vx;
    p.y += p.vy;
    p.a -= 0.008;
    p.r += 0.1;

    ctx.save();
    ctx.globalAlpha = Math.max(p.a, 0);
    ctx.translate(p.x, p.y);
    ctx.rotate(p.r);
    ctx.fillStyle = "rgba(255,255,255,.85)";
    ctx.fillRect(-p.s/2, -p.s/2, p.s, p.s);
    ctx.restore();
  });

  particles = particles.filter(p=> p.a > 0 && p.y < H + 40);
  if(particles.length === 0){
    running = false;
    ctx.clearRect(0,0,W,H);
    return;
  }
  requestAnimationFrame(animate);
}

$("confettiBtn").addEventListener("click", burst);