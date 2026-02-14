// ========= PERSONALIZA AQUÍ =========
const CONFIG = {
  noviaNombre: "Ana",
  carreraNombre: "Acea Run Rome The Marathon",
  carreraFechaISO: "2026-03-22T08:30:00", // hora local Roma
  limiteTexto: "6h30",
  oficialHome: "https://www.runromethemarathon.com/",
  mapaURL: "https://www.runromethemarathon.com/wp-content/uploads/2025/10/mappa-orizzontale-scaled.jpg",

  loveNotes: [
    "Hoy entrenas, mañana inspiras. Roma te queda increíble 💚",
    "No tienes que demostrar nada: ya lo estás haciendo.",
    "Cuando lleguen las dudas, acuérdate de lo valiente que eres.",
    "Tú y tu constancia: el dúo más peligroso 😄",
    "Estoy orgulloso de ti, en los días buenos y en los raros."
  ],

  nerviosLetter: [
    "Si estás leyendo esto es porque los nervios están hablando.",
    "Pero escucha esto: **yo te conozco**.",
    "Sé cómo eres cuando decides algo: constante, valiente y cabezona (de la buena).",
    "",
    "El día de la carrera no necesitas sentirte segura…",
    "solo necesitas **dar el siguiente paso**.",
    "",
    "Y cuando llegues al **km 20** y salga el clásico “me cago”…",
    "te acuerdas de nuestra broma, sonríes… y sigues.",
    "",
    "**Roma no te va a romper. Roma te va a coronar.** 👑🏛️",
    "",
    "Estoy contigo en cada km. 💚"
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
  ],

  simEvents: [
    { km: 1,  msg: "Respira. Hoy es aventura. Hoy es historia." },
    { km: 5,  msg: "Vas cómoda. Suave y controlada. Sonríe un segundo." },
    { km: 10, msg: "Ritmo sólido. No regales energía. Guarda para más tarde." },
    { km: 15, msg: "Aquí ya estás trabajando. Pero tú entrenaste para esto." },
    { km: 20, msg: "💩 **ALERTA KM 20**: Nivel de “me cago” detectado. Sonríe por la broma… y sigue. Eres una diosa romana." },
    { km: 25, msg: "Mitad larga. Hidratación. Un gel. Y cabeza fría." },
    { km: 30, msg: "Ahora empieza la maratón. Un paso. Otro paso. Eso es todo." },
    { km: 35, msg: "Esto es coraje puro. Ya nadie te quita lo que eres." },
    { km: 40, msg: "YA LO TIENES. Mira Roma. Es tuya." },
    { km: 42, msg: "🏁 META: Primera maratón. Te has coronado. 💚👑" }
  ],

  weekPlan: [
    { offset: 7, title: "7 días", tasks: ["Revisar zapatillas/ropa (sin estrenar)", "Ver ruta a salida + plan B", "Dormir bien (prioridad)"] },
    { offset: 6, title: "6 días", tasks: ["Último rodaje suave", "Hidratación constante", "Visualizar el km 20 con sonrisa 😄"] },
    { offset: 5, title: "5 días", tasks: ["Check geles/sales (los que ya usas)", "Preparar imperdibles/vaselina", "No inventos"] },
    { offset: 4, title: "4 días", tasks: ["Cena simple (carbos normales)", "Revisar dorsal/chip si aplica", "Paseo suave"] },
    { offset: 3, title: "3 días", tasks: ["Subir carbos un poco (sin atracón)", "Evitar comidas raras", "Plan de ritmo A/B revisado"] },
    { offset: 2, title: "2 días", tasks: ["Recoger dorsal (si toca)", "Dejar bolsa lista", "Cargar reloj/móvil"] },
    { offset: 1, title: "1 día", tasks: ["Desayuno decidido y probado", "Ropa de espera lista", "Acostarse pronto (aunque cueste)"] },
    { offset: 0, title: "Race Day", tasks: ["Desayuno + hidratación", "Vaselina + geles", "Sonrisa en la salida. Roma."] }
  ]
};
// ====================================

document.addEventListener("DOMContentLoaded", () => {
  // --- Helpers ---
  const $ = (id) => document.getElementById(id);
  const on = (id, event, handler) => {
    const el = $(id);
    if (el) el.addEventListener(event, handler);
  };
  const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

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
  function pad2(n){ return String(n).padStart(2,"0"); }

  function parseHHMM(str){
    if(!str) return null;
    const cleaned = String(str).trim().replace(".",":").replace(" ",":");
    const m = cleaned.match(/^(\d{1,2})\s*:\s*(\d{1,2})$/);
    if(!m) return null;
    const h = Number(m[1]);
    const mm = Number(m[2]);
    if(Number.isNaN(h)||Number.isNaN(mm)||mm>=60) return null;
    return h*3600 + mm*60;
  }
  function formatTimeFromSeconds(totalSec){
    const h = Math.floor(totalSec/3600);
    const m = Math.floor((totalSec%3600)/60);
    const s = Math.floor(totalSec%60);
    if(h>0) return `${pad2(h)}:${pad2(m)}:${pad2(s)}`;
    return `${pad2(m)}:${pad2(s)}`;
  }
  function paceFrom(totalSec, distanceKm){
    const secPerKm = totalSec / distanceKm;
    const m = Math.floor(secPerKm/60);
    const s = Math.round(secPerKm%60);
    return `${m}:${pad2(s)}/km`;
  }
  function splitTime(totalSec, splitKm, distanceKm){
    const secPerKm = totalSec / distanceKm;
    return secPerKm * splitKm;
  }

  // --- Safe binds (won't crash if missing) ---
  if($("name")) $("name").textContent = CONFIG.noviaNombre;
  if($("raceInfo")) $("raceInfo").textContent = `${CONFIG.carreraNombre} · Hora local de Roma`;
  if($("routeImg")) $("routeImg").src = CONFIG.mapaURL;
  if($("officialLink")) $("officialLink").href = CONFIG.oficialHome;

  if($("startChip")) $("startChip").textContent = `Salida: ${formatDateTime(CONFIG.carreraFechaISO)}`;
  if($("limitChip")) $("limitChip").textContent = `Límite: ${CONFIG.limiteTexto}`;

  // --- Countdown ---
  const target = new Date(CONFIG.carreraFechaISO);
  let lastDaysLeft = null;

  function updateWeekUI(daysLeft){
    const weekStatus = $("weekStatus");
    const weekList = $("weekList");
    if(!weekStatus || !weekList) return;

    let status = "";
    if(daysLeft > 7) status = `Faltan <strong>${daysLeft}</strong> días. Aún hay margen: constancia + calma.`;
    else if(daysLeft > 1) status = `Estamos en la <strong>semana de carrera</strong>. Menos es más.`;
    else if(daysLeft === 1) status = `Mañana es el día. Nada de inventos. Tú mandas.`;
    else status = `Hoy es el día. Respira. Sonríe. Roma. 🏁`;
    weekStatus.innerHTML = status;

    const weekKey = "roadToRoma_week_v1";
    let weekState = JSON.parse(localStorage.getItem(weekKey) || "null") || {};

    const showAll = daysLeft >= 7;
    const planToRender = showAll
      ? CONFIG.weekPlan.slice().sort((a,b)=> b.offset-a.offset)
      : CONFIG.weekPlan.filter(x => x.offset <= clamp(daysLeft, 0, 999)).sort((a,b)=> b.offset-a.offset);

    weekList.innerHTML = "";
    planToRender.forEach(day=>{
      const whenText =
        day.offset === 0 ? "hoy" :
        day.offset === 1 ? "mañana" :
        `en ${day.offset} días`;

      const row = document.createElement("li");
      row.className = "tlRow";

      const tasksHtml = day.tasks.map((t, idx)=>{
        const key = `${day.offset}:${idx}`;
        const checked = weekState[key] ? "checked" : "";
        return `
          <div class="tlTask">
            <input type="checkbox" id="w_${day.offset}_${idx}" ${checked} />
            <label for="w_${day.offset}_${idx}">${t}</label>
          </div>
        `;
      }).join("");

      row.innerHTML = `
        <div class="tlLeft">
          <div class="tlDay">${day.title}</div>
          <div class="tlWhen">${whenText}</div>
        </div>
        <div class="tlMain">
          <div class="tlTasks">${tasksHtml}</div>
        </div>
      `;

      row.querySelectorAll("input[type=checkbox]").forEach((cb, idx)=>{
        cb.addEventListener("change", (e)=>{
          const key = `${day.offset}:${idx}`;
          weekState[key] = e.target.checked;
          localStorage.setItem(weekKey, JSON.stringify(weekState));
        });
      });

      weekList.appendChild(row);
    });

    // reset button (safe)
    const weekResetBtn = $("weekResetBtn");
    if(weekResetBtn && !weekResetBtn.__bound){
      weekResetBtn.__bound = true;
      weekResetBtn.addEventListener("click", ()=>{
        localStorage.setItem(weekKey, JSON.stringify({}));
        burst(110);
        updateWeekUI(lastDaysLeft ?? diffParts(target).days);
      });
    }
  }

  function tick(){
    const { sign, days, hours, mins, secs } = diffParts(target);
    const timer = $("timer");
    if(timer){
      if(sign < 0){
        timer.textContent = `¡A por ello! 🏁`;
      } else {
        timer.textContent = `${days}d ${pad2(hours)}:${pad2(mins)}:${pad2(secs)}`;
      }
    }

    if(sign < 0){
      updateWeekUI(0);
      return;
    }
    if(lastDaysLeft !== days){
      lastDaysLeft = days;
      updateWeekUI(days);
    }
  }
  tick();
  setInterval(tick, 1000);

  // --- Love notes ---
  function setRandomNote(){
    const love = $("loveNote");
    if(!love) return;
    const i = Math.floor(Math.random() * CONFIG.loveNotes.length);
    love.textContent = CONFIG.loveNotes[i];
  }
  setRandomNote();
  on("newNoteBtn", "click", setRandomNote);

  // --- Highlights list ---
  const highlights = $("highlights");
  if(highlights){
    highlights.innerHTML = "";
    CONFIG.highlights.forEach(t=>{
      const li = document.createElement("li");
      li.textContent = t;
      highlights.appendChild(li);
    });
  }

  // --- Tips accordion ---
  const tipsEl = $("tips");
  if(tipsEl){
    tipsEl.innerHTML = "";
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
  }

  // --- Checklist general (FIXED + safe) ---
  const storageKey = "roadToRomaChecklist_v4";
  const saved = JSON.parse(localStorage.getItem(storageKey) || "null");
  let state = saved?.state || Array(CONFIG.checklist.length).fill(false);

  const list = $("checkList");
  const barFill = $("barFill");
  const progressText = $("progressText");
  const hasChecklist = !!(list && barFill && progressText);

  function persistChecklist(){
    localStorage.setItem(storageKey, JSON.stringify({ state }));
  }
  function renderProgress(){
    if(!hasChecklist) return;
    const done = state.filter(Boolean).length;
    const total = state.length;
    const pct = Math.round((done/total)*100);
    barFill.style.width = `${pct}%`;
    progressText.textContent = `${done}/${total} completados (${pct}%)`;
  }
  function renderChecklist(){
    if(!hasChecklist) return;
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
        persistChecklist();
        renderProgress();
      });
      list.appendChild(li);
    });
    renderProgress();
  }
  renderChecklist();

  on("resetBtn", "click", ()=>{
    state = Array(CONFIG.checklist.length).fill(false);
    persistChecklist();
    renderChecklist();
  });

  // --- Copy link button ---
  on("shareBtn", "click", async ()=>{
    try{
      await navigator.clipboard.writeText(window.location.href);
      const b = $("shareBtn");
      if(b){
        b.innerHTML = `<span class="icon">✅</span><span class="hideSm">Copiado</span>`;
        setTimeout(()=> b.innerHTML = `<span class="icon">🔗</span><span class="hideSm">Copiar link</span>`, 1400);
      }
    }catch{
      alert("No pude copiar el link. Copia la URL manualmente 🙏");
    }
  });

  // =================== MODALES + KM20 + SIM ===================
  function openModal(id){
    const el = $(id);
    if(!el) return;
    el.classList.add("open");
    el.setAttribute("aria-hidden", "false");
  }
  function closeModal(id){
    const el = $(id);
    if(!el) return;
    el.classList.remove("open");
    el.setAttribute("aria-hidden", "true");
  }
  document.addEventListener("click", (e)=>{
    const closeId = e.target?.getAttribute?.("data-close");
    if(closeId) closeModal(closeId);
    if(e.target.classList?.contains("modal")) closeModal(e.target.id);
  });
  document.addEventListener("keydown", (e)=>{
    if(e.key === "Escape"){
      ["modalNervios","modalSim"].forEach(id => closeModal(id));
    }
  });

  // 💌 Nervios letter
  const nerviosText = $("nerviosText");
  if(nerviosText){
    nerviosText.innerHTML = CONFIG.nerviosLetter
      .map(line => line === "" ? "<br/>" : line.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"))
      .join("<br/>");
  }
  on("nerviosBtn", "click", ()=> openModal("modalNervios"));
  on("nerviosOk", "click", ()=>{
    closeModal("modalNervios");
    burst(120);
  });

  // ⚠️ KM20 mode
  on("km20Btn", "click", ()=>{
    document.body.classList.add("km20");
    const love = $("loveNote");
    if(love){
      love.innerHTML =
        "⚠️ <strong>ALERTA:</strong> Se aproxima el <strong>KM 20</strong>…<br/>" +
        "Nivel de “me cago” aumentando… 😄<br/><br/>" +
        "Respira. Sonríe por nuestra broma.<br/>" +
        "<strong>Y sigues.</strong> Porque eres una <strong>diosa romana</strong> 💚🏛️";
    }
    burst(160);
    setTimeout(()=> document.body.classList.remove("km20"), 7000);
  });

  // 🏁 Simulador
  let simRunning = false;
  let simKm = 0;
  let simSec = 0;
  let simTimer = null;

  function simRender(){
    if($("simKm")) $("simKm").textContent = String(simKm);
    if($("simTime")) $("simTime").textContent = `${pad2(Math.floor(simSec/60))}:${pad2(simSec%60)}`;
    const ev = CONFIG.simEvents.find(x => x.km === simKm);
    const msg = $("simMsg");
    if(ev && msg) msg.innerHTML = ev.msg.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>");
  }
  function simStart(){
    simRunning = true;
    simKm = 0;
    simSec = 0;
    const next = $("simNext");
    const start = $("simStart");
    if(next) next.disabled = false;
    if(start) start.disabled = true;

    const msg = $("simMsg");
    if(msg) msg.textContent = "Salida. Control. Disfruta el principio.";
    simRender();
    if(simTimer) clearInterval(simTimer);
    simTimer = setInterval(()=>{ simSec++; simRender(); }, 1000);
  }
  function simStop(){
    simRunning = false;
    const next = $("simNext");
    const start = $("simStart");
    if(next) next.disabled = true;
    if(start) start.disabled = false;

    if(simTimer) clearInterval(simTimer);
    simTimer = null;

    const msg = $("simMsg");
    if(msg) msg.textContent = "Simulación parada. Cuando quieras, volvemos a la salida.";
    simRender();
  }
  function simNextKm(){
    if(!simRunning) return;
    simKm++;
    if(simKm === 20){
      document.body.classList.add("km20");
      setTimeout(()=> document.body.classList.remove("km20"), 4500);
      burst(180);
    }
    if(simKm >= 42){
      simKm = 42;
      simRender();
      burst(220);
      simStop();
      return;
    }
    simRender();
  }

  on("simBtn", "click", ()=> openModal("modalSim"));
  on("simStart", "click", simStart);
  on("simStop", "click", ()=> { simStop(); closeModal("modalSim"); });
  on("simNext", "click", simNextKm);

  // =================== PLAN KM20 ===================
  const planKey = "roadToRoma_km20plan_v1";
  const planPreview = $("planPreview");

  function loadPlan(){
    const saved = JSON.parse(localStorage.getItem(planKey) || "null");
    if(!saved) return;
    if($("planGelKm")) $("planGelKm").value = saved.gelKm ?? "";
    if($("planWaterKm")) $("planWaterKm").value = saved.waterKm ?? "";
    if($("planB")) $("planB").value = saved.planB ?? "";
    if($("planMantra")) $("planMantra").value = saved.mantra ?? "";
  }
  function getPlan(){
    return {
      gelKm: Number(($("planGelKm")?.value) || 0),
      waterKm: Number(($("planWaterKm")?.value) || 0),
      planB: ($("planB")?.value || "").trim(),
      mantra: ($("planMantra")?.value || "").trim(),
    };
  }
  function savePlan(){
    const p = getPlan();
    localStorage.setItem(planKey, JSON.stringify(p));
    if(planPreview){
      planPreview.hidden = false;
      planPreview.innerHTML = `✅ Plan guardado. Cuando llegue el <strong>KM 20</strong>, pulsa “Estoy en el KM 20”.`;
    }
    burst(90);
  }
  function showKm20(){
    const p = JSON.parse(localStorage.getItem(planKey) || "null") || getPlan();
    if(planPreview){
      planPreview.hidden = false;
      planPreview.innerHTML =
        `🧱 <strong>KM 20</strong> — modo control<br/><br/>` +
        `🍯 Gel: <strong>${p.gelKm ? "km " + p.gelKm : "—"}</strong><br/>` +
        `💧 Agua: <strong>${p.waterKm ? "km " + p.waterKm : "—"}</strong><br/>` +
        `🅱️ Plan B: <strong>${p.planB || "—"}</strong><br/>` +
        `🧠 Mantra: <strong>${p.mantra || "—"}</strong><br/><br/>` +
        `Y sí… si toca “me cago”, te ríes y sigues 😄`;
    }
    document.body.classList.add("km20");
    setTimeout(()=> document.body.classList.remove("km20"), 3500);
  }

  on("savePlanBtn", "click", savePlan);
  on("showKm20Btn", "click", ()=>{ showKm20(); burst(120); });
  loadPlan();

  // =================== PACE CALC ===================
  const paceKey = "roadToRoma_pace_v1";
  const paceOut = $("paceOut");

  function renderPace(totalSecA, distanceKm, plusMin){
    if(!paceOut) return;
    const totalSecB = totalSecA + (plusMin*60);

    const splits = [
      { name:"5K", km:5 },
      { name:"10K", km:10 },
      { name:"Media", km: distanceKm >= 21 ? 21.0975 : distanceKm/2 },
      { name:"30K", km: distanceKm >= 30 ? 30 : null },
      { name:"Meta", km: distanceKm }
    ].filter(s => s.km !== null && s.km <= distanceKm + 1e-9);

    const rows = (sec) => splits.map(s=>{
      const t = (s.name === "Meta") ? sec : splitTime(sec, s.km, distanceKm);
      return `<tr><td>${s.name}</td><td>${formatTimeFromSeconds(t)}</td></tr>`;
    }).join("");

    const paceA = paceFrom(totalSecA, distanceKm);
    const paceB = paceFrom(totalSecB, distanceKm);

    paceOut.hidden = false;
    paceOut.innerHTML = `
      <div>
        <span class="paceBadge">Plan A</span>
        <strong style="margin-left:8px">${paceA}</strong>
        <span class="muted" style="margin-left:8px">(${formatTimeFromSeconds(totalSecA)})</span>
      </div>
      <div style="margin-top:6px">
        <span class="paceBadge">Plan B</span>
        <strong style="margin-left:8px">${paceB}</strong>
        <span class="muted" style="margin-left:8px">(${formatTimeFromSeconds(totalSecB)})</span>
      </div>

      <div class="paceGrid">
        <div>
          <div class="muted small" style="margin:10px 0 8px; font-weight:900">Parciales Plan A</div>
          <table class="paceTable">
            <thead><tr><th>Split</th><th>Tiempo</th></tr></thead>
            <tbody>${rows(totalSecA)}</tbody>
          </table>
        </div>
        <div>
          <div class="muted small" style="margin:10px 0 8px; font-weight:900">Parciales Plan B</div>
          <table class="paceTable">
            <thead><tr><th>Split</th><th>Tiempo</th></tr></thead>
            <tbody>${rows(totalSecB)}</tbody>
          </table>
        </div>
      </div>
    `;
  }

  function loadPace(){
    const saved = JSON.parse(localStorage.getItem(paceKey) || "null");
    if(!saved) return;

    if($("goalTime")) $("goalTime").value = saved.goalTime ?? "";
    if($("goalPlus")) $("goalPlus").value = saved.goalPlus ?? "";
    if($("distance")) $("distance").value = String(saved.distance ?? "42.195");

    const base = parseHHMM($("goalTime")?.value);
    const dist = Number($("distance")?.value || "42.195");
    const plus = Number($("goalPlus")?.value || 0);
    if(base) renderPace(base, dist, plus);
  }

  function calcPace(){
    const base = parseHHMM($("goalTime")?.value);
    const dist = Number($("distance")?.value || "42.195");
    const plus = clamp(Number($("goalPlus")?.value || 0), 0, 240);

    if(!base){
      if(paceOut){
        paceOut.hidden = false;
        paceOut.innerHTML = `Pon el objetivo como <strong>hh:mm</strong> (ej: <strong>04:30</strong>).`;
      }
      return;
    }
    renderPace(base, dist, plus);
  }

  function savePace(){
    const payload = {
      goalTime: ($("goalTime")?.value || "").trim(),
      goalPlus: $("goalPlus")?.value || "",
      distance: Number($("distance")?.value || "42.195")
    };
    localStorage.setItem(paceKey, JSON.stringify(payload));
    burst(90);
  }

  on("calcBtn", "click", calcPace);
  on("savePaceBtn", "click", savePace);
  loadPace();
// =================== LOGROS ===================
const achievementKey = "roadToRoma_achievements_v1";
let achievements = JSON.parse(localStorage.getItem(achievementKey) || "[]");

const achievementsEl = $("achievements");

function saveAchievements(){
  localStorage.setItem(achievementKey, JSON.stringify(achievements));
}

function renderAchievements(){
  if(!achievementsEl) return;
  achievementsEl.innerHTML = "";

  if(achievements.length === 0){
    achievementsEl.innerHTML = `<div class="muted">Aún no hay logros desbloqueados.</div>`;
    return;
  }

  achievements.forEach(a=>{
    const div = document.createElement("div");
    div.className = "achievement";
    div.innerHTML = `
      <div class="achievementTitle">🏅 ${a.title}</div>
      <div>${a.text}</div>
      <div class="achievementDate">${a.date}</div>
    `;
    achievementsEl.appendChild(div);
  });
}
// =================== HISTORIA ===================
const milestonesData = [
  { id:"10k", title:"Primer 10K", unlocked:true },
  { id:"media", title:"Primera Media Maratón", unlocked:true },
  { id:"20k", title:"Primer 20K", unlocked:true },
  { id:"25k", title:"Primer 25K", unlocked:true },
  { id:"maraton", title:"Primera Maratón", unlocked:false }
];

function renderMilestones(){
  const el = $("milestones");
  if(!el) return;
  el.innerHTML = "";

  const today = new Date();
  const raceDate = new Date(CONFIG.carreraFechaISO);

  milestonesData.forEach(m=>{
    let unlocked = m.unlocked;

    if(m.id === "maraton" && today >= raceDate){
      unlocked = true;
    }

    const li = document.createElement("li");
    li.className = unlocked ? "tlRow" : "tlRow locked";
    li.innerHTML = `
      <div class="tlLeft">
        <div class="tlDay">${unlocked ? "🏅" : "🔒"}</div>
      </div>
      <div class="tlMain">
        <strong>${m.title}</strong>
      </div>
    `;
    el.appendChild(li);
  });
}
renderMilestones();


// =================== CAMBIO DÍA ANTES ===================
(function(){
  const today = new Date();
  const raceDate = new Date(CONFIG.carreraFechaISO);
  const diff = Math.floor((raceDate - today)/(1000*60*60*24));

  if(diff === 1){
    $("loveNote").innerHTML =
      "Mañana no se trata de tiempo.<br/><br/>Se trata de quién eres.<br/><br/>Y yo lo tengo clarísimo.";
  }
})();


// =================== MODO DUDAS ===================
const doubtTexts = {
  noPuedo: "Claro que puedes. Ya has hecho cosas más difíciles que 42 km. Esto no va de fuerza. Va de constancia. Y eso te sobra.",
  meParo: "Si te paras… respiras. Y sigues. No necesitas heroísmo. Solo un paso más.",
  meCago: "Te ríes. Porque sabemos que el 20 es teatro. Después del 20 viene tu mejor versión."
};

document.querySelectorAll(".doubtBtn").forEach(btn=>{
  btn.addEventListener("click", ()=>{
    const type = btn.dataset.doubt;
    const box = $("doubtResponse");
    box.hidden = false;
    box.innerHTML = doubtTexts[type];
    burst(80);
  });
});


// =================== CONTADOR KM ===================
(function(){
  const targetKm = 620; // CAMBIA SI QUIERES
  const el = $("kmCounter");
  if(!el) return;

  let current = 0;
  const step = Math.ceil(targetKm/100);

  const interval = setInterval(()=>{
    current += step;
    if(current >= targetKm){
      current = targetKm;
      clearInterval(interval);
    }
    el.textContent = current;
  }, 20);
})();


// =================== EASTER EGG TÍTULO ===================
(function(){
  const title = document.querySelector(".badge");
  if(!title) return;
  let clicks = 0;

  title.addEventListener("click", ()=>{
    clicks++;
    if(clicks === 5){
      alert("CONFESIÓN: En el km 20 no te cagas. Te conviertes en emperatriz.");
      clicks = 0;
    }
  });
})();

function unlock25k(){
  // evitar duplicado
  if(achievements.some(a => a.id === "25k")) return;

  const today = new Date().toLocaleDateString("es-ES", {
    weekday:"long",
    day:"numeric",
    month:"long",
    year:"numeric"
  });

  achievements.unshift({
    id: "25k",
    title: "Primer 25K",
    text: "Has cruzado una barrera mental enorme. Ya sabes que puedes ir más allá de lo cómodo. Roma empieza a parecer inevitable.",
    date: today
  });

  saveAchievements();
  renderAchievements();
  burst(180);
}

on("unlock25kBtn", "click", unlock25k);

renderAchievements();
  // =================== Confetti (canvas) ===================
  const canvas = $("confetti");
  const ctx = canvas ? canvas.getContext("2d") : null;
  let W = 0, H = 0, particles = [], running = false;

  function resize(){
    if(!canvas) return;
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  function burst(n = 140){
    if(!canvas || !ctx) return;
    particles = [];
    for(let i=0;i<n;i++){
      particles.push({
        x: W/2 + (Math.random()*140-70),
        y: H/2 + (Math.random()*60-30),
        vx: (Math.random()*7-3.5),
        vy: (Math.random()*-8-2),
        g: 0.15 + Math.random()*0.10,
        s: 3 + Math.random()*5,
        a: 1,
        r: Math.random()*Math.PI
      });
    }
    running = true;
    animate();
  }

  function animate(){
    if(!running || !ctx) return;
    ctx.clearRect(0,0,W,H);

    particles.forEach(p=>{
      p.vy += p.g;
      p.x += p.vx;
      p.y += p.vy;
      p.a -= 0.010;
      p.r += 0.12;

      ctx.save();
      ctx.globalAlpha = Math.max(p.a, 0);
      ctx.translate(p.x, p.y);
      ctx.rotate(p.r);
      ctx.fillStyle = "rgba(255,255,255,.88)";
      ctx.fillRect(-p.s/2, -p.s/2, p.s, p.s);
      ctx.restore();
    });

    particles = particles.filter(p=> p.a > 0 && p.y < H + 50);
    if(particles.length === 0){
      running = false;
      ctx.clearRect(0,0,W,H);
      return;
    }
    requestAnimationFrame(animate);
  }

  // expose burst to other handlers in this scope
  window.__burst = burst;

  // wire confetti button
  on("confettiBtn", "click", ()=> burst(180));

  // make burst available to functions above (they call burst)
  // (by hoisting, burst is already in scope here)
});