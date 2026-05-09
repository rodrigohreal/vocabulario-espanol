/* ═══════════════════════════════════════════════════════════
   VOCABULARIO ESPAÑOL — Telegram Mini App
   ════════════════════════════════════════════════════════ */

// ── Telegram WebApp bootstrap ─────────────────────────────
const tg = window.Telegram?.WebApp;
if (tg) {
  tg.ready();
  tg.expand();
}

// ── Exercise catalogue ─────────────────────────────────────
const EXERCISES = [
  // Hogar
  { file: 'casa.json',              name: 'La Casa',              emoji: '🏠', cat: 'Hogar' },
  { file: 'habitacion.json',        name: 'La Habitación',        emoji: '🛏️', cat: 'Hogar' },
  { file: 'dormitorio.json',        name: 'El Dormitorio',        emoji: '😴', cat: 'Hogar' },
  { file: 'sala.json',              name: 'La Sala 1',            emoji: '🛋️', cat: 'Hogar' },
  { file: 'sala2.json',             name: 'La Sala 2',            emoji: '🛋️', cat: 'Hogar' },
  { file: 'comedor.json',           name: 'El Comedor',           emoji: '🍽️', cat: 'Hogar' },
  { file: 'cocina.json',            name: 'La Cocina 1',          emoji: '🍳', cat: 'Hogar' },
  { file: 'cocina2.json',           name: 'La Cocina 2',          emoji: '🍳', cat: 'Hogar' },
  { file: 'cocina3.json',           name: 'La Cocina 3',          emoji: '🍳', cat: 'Hogar' },
  { file: 'baño.json',              name: 'El Baño 1',            emoji: '🚿', cat: 'Hogar' },
  { file: 'baño2.json',             name: 'El Baño 2',            emoji: '🚿', cat: 'Hogar' },
  { file: 'baño3.json',             name: 'El Baño 3',            emoji: '🚿', cat: 'Hogar' },
  { file: 'electrodomesticos.json', name: 'Electrodomésticos 1',  emoji: '🔌', cat: 'Hogar' },
  { file: 'electrodomesticos2.json',name: 'Electrodomésticos 2',  emoji: '🔌', cat: 'Hogar' },
  // Cuerpo
  { file: 'cara.json',                  name: 'La Cara',              emoji: '😊', cat: 'Cuerpo' },
  { file: 'cuerpo.json',                name: 'El Cuerpo',            emoji: '🧍', cat: 'Cuerpo' },
  { file: 'Partes de la cara.json',     name: 'Partes de la Cara',   emoji: '👁️', cat: 'Cuerpo' },
  { file: 'Partes del cuerpo.json',     name: 'Partes del Cuerpo',   emoji: '🦴', cat: 'Cuerpo' },
  // Comida
  { file: 'comida.json',   name: 'La Comida 1',   emoji: '🍕', cat: 'Comida' },
  { file: 'comida2.json',  name: 'La Comida 2',   emoji: '🥘', cat: 'Comida' },
  { file: 'comida3.json',  name: 'La Comida 3',   emoji: '🍱', cat: 'Comida' },
  { file: 'verduras.json', name: 'Las Verduras',  emoji: '🥦', cat: 'Comida' },
  // Ropa
  { file: 'ropa1.json', name: 'La Ropa 1', emoji: '👔', cat: 'Ropa' },
  { file: 'ropa2.json', name: 'La Ropa 2', emoji: '👗', cat: 'Ropa' },
  // Lugares
  { file: 'escuela.json',   name: 'La Escuela',    emoji: '🏫', cat: 'Lugares' },
  { file: 'compras1.json',  name: 'Las Compras 1', emoji: '🛒', cat: 'Lugares' },
  { file: 'compras2.json',  name: 'Las Compras 2', emoji: '🛒', cat: 'Lugares' },
  { file: 'compras3.json',  name: 'Las Compras 3', emoji: '🛒', cat: 'Lugares' },
  { file: 'compras4.json',  name: 'Las Compras 4', emoji: '🛒', cat: 'Lugares' },
  { file: 'elevador.json',  name: 'El Elevador',   emoji: '🛗', cat: 'Lugares' },
  // Profesiones
  { file: 'profesiones1.json', name: 'Profesiones 1', emoji: '👩‍⚕️', cat: 'Profesiones' },
  { file: 'profesiones2.json', name: 'Profesiones 2', emoji: '👨‍🍳', cat: 'Profesiones' },
  { file: 'profesiones3.json', name: 'Profesiones 3', emoji: '👩‍🏫', cat: 'Profesiones' },
  { file: 'profesiones4.json', name: 'Profesiones 4', emoji: '👷',   cat: 'Profesiones' },
  { file: 'profesiones5.json', name: 'Profesiones 5', emoji: '👩‍💼', cat: 'Profesiones' },
  { file: 'profesiones6.json', name: 'Profesiones 6', emoji: '👨‍🔧', cat: 'Profesiones' },
  // Tecnología
  { file: 'computadora.json',  name: 'La Computadora 1', emoji: '💻', cat: 'Tecnología' },
  { file: 'computadora2.json', name: 'La Computadora 2', emoji: '🖥️', cat: 'Tecnología' },
  // Deporte
  { file: 'deporte.json',  name: 'El Deporte 1', emoji: '⚽', cat: 'Deporte' },
  { file: 'deporte2.json', name: 'El Deporte 2', emoji: '🏀', cat: 'Deporte' },
  { file: 'deporte3.json', name: 'El Deporte 3', emoji: '🎾', cat: 'Deporte' },
  { file: 'deporte4.json', name: 'El Deporte 4', emoji: '🏊', cat: 'Deporte' },
  { file: 'deporte5.json', name: 'El Deporte 5', emoji: '🚴', cat: 'Deporte' },
  // Naturaleza / Educación
  { file: 'arbol.json',   name: 'El Árbol',    emoji: '🌳', cat: 'Naturaleza' },
  { file: 'libros.json',  name: 'Los Libros 1',emoji: '📚', cat: 'Educación' },
  { file: 'libros2.json', name: 'Los Libros 2',emoji: '📖', cat: 'Educación' },
  { file: 'eli1.json',    name: 'Eli 1',       emoji: '📝', cat: 'Educación' },
];

// ── State ─────────────────────────────────────────────────
const state = {
  exercise:        null,   // current exercise meta object
  rects:           [],     // all rectangles from JSON
  wordRects:       [],     // only type==="word"
  image:           null,   // HTMLImageElement
  scaleFactor:     1,
  selectedTileId:  null,   // currently highlighted tile id
  solved:          new Set(),
  showing:         false,  // toggled "reveal original" mode
  exercisePhase:   false,  // false = memorize (overlays hidden), true = play (overlays visible)
  countdownId:     null,   // interval handle for countdown
  completed:       new Set(JSON.parse(localStorage.getItem('completed') || '[]')),
};

// ── Haptic helpers ─────────────────────────────────────────
const haptic = {
  light:   () => tg?.HapticFeedback?.impactOccurred('light'),
  medium:  () => tg?.HapticFeedback?.impactOccurred('medium'),
  success: () => tg?.HapticFeedback?.notificationOccurred('success'),
  error:   () => tg?.HapticFeedback?.notificationOccurred('error'),
};

// ── DOM refs ───────────────────────────────────────────────
const $ = id => document.getElementById(id);
const screens      = { home: $('home-screen'), game: $('game-screen'), results: $('results-screen') };
const categoryList = $('category-list');
const imageWrapper = $('image-wrapper');
const vocabImage   = $('vocab-image');
const tilesContainer=$('tiles-container');
const scoreEl      = $('score-badge');
const progressBar  = $('progress-bar');
const gameTitleEl  = $('game-title');
const revealBtn      = $('reveal-btn');
const revealIcon     = $('reveal-icon');
const resetBtn       = $('reset-btn');
const backBtn        = $('back-btn');
const resultsMsg     = $('results-msg');
const resultsStars   = $('results-stars');
const countdownBanner= $('countdown-banner');
const countdownText  = $('countdown-text');
const countdownNum   = $('countdown-num');

// ── Screen navigation ──────────────────────────────────────
function showScreen(name) {
  Object.entries(screens).forEach(([key, el]) => {
    if (key === name) {
      el.classList.remove('slide-out');
      el.classList.add('active');
    } else {
      el.classList.remove('active');
      el.classList.add('slide-out');
    }
  });
}

// ── HOME ──────────────────────────────────────────────────
function renderHome() {
  showScreen('home');
  categoryList.innerHTML = '';

  // Group by category
  const cats = {};
  EXERCISES.forEach(ex => {
    if (!cats[ex.cat]) cats[ex.cat] = [];
    cats[ex.cat].push(ex);
  });

  Object.entries(cats).forEach(([catName, exList]) => {
    const block = document.createElement('div');
    block.className = 'category-block';
    block.innerHTML = `<div class="category-name">${catName}</div>`;

    const grid = document.createElement('div');
    grid.className = 'exercise-cards';

    exList.forEach(ex => {
      const card = document.createElement('div');
      card.className = 'ex-card' + (state.completed.has(ex.file) ? ' done' : '');
      card.innerHTML = `<span class="ex-emoji">${ex.emoji}</span><span class="ex-name">${ex.name}</span>`;
      card.addEventListener('click', () => startExercise(ex));
      grid.appendChild(card);
    });

    block.appendChild(grid);
    categoryList.appendChild(block);
  });
}

// ── LOAD EXERCISE ─────────────────────────────────────────
async function startExercise(ex) {
  haptic.light();
  showScreen('game');
  gameTitleEl.textContent = ex.name;
  state.exercise = ex;
  state.solved.clear();
  state.selectedTileId = null;
  state.showing = false;
  state.exercisePhase = false;
  revealIcon.textContent = '👁';
  clearCountdown();

  // Show loading overlay
  const overlay = showLoading();

  try {
    // Fetch JSON
    const res = await fetch(encodeFilePath(ex.file));
    if (!res.ok) throw new Error('No se pudo cargar el ejercicio');
    const data = await res.json();

    // Load image
    const img = await loadImage(data.image_file);
    state.image = img;
    state.rects = data.rectangles;
    state.wordRects = data.rectangles.filter(r => r.type === 'word');

    overlay.remove();
    renderGame();
  } catch (err) {
    overlay.remove();
    alert('Error: ' + err.message);
    renderHome();
  }
}

function encodeFilePath(filename) {
  // encode spaces etc. but keep slashes
  return filename.split('/').map(encodeURIComponent).join('/');
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload  = () => resolve(img);
    img.onerror = () => reject(new Error('No se pudo cargar la imagen: ' + src));
    img.src = encodeFilePath(src);
    // Safety timeout — if neither onload nor onerror fires within 15 s
    setTimeout(() => reject(new Error('Tiempo de carga agotado: ' + src)), 15000);
  });
}

function showLoading() {
  const el = document.createElement('div');
  el.className = 'loading-overlay';
  el.innerHTML = '<div class="spinner"></div><p class="loading-text">Cargando…</p>';
  $('game-screen').appendChild(el);
  return el;
}

// ── RENDER GAME ────────────────────────────────────────────
function renderGame() {
  // Determine display scale after inserting the image
  vocabImage.src = state.image.src;
  imageWrapper.style.width = '100%';

  // Clear old overlays
  imageWrapper.querySelectorAll('.cover-overlay, .word-zone').forEach(el => el.remove());

  // We must wait for the image to paint so we know its displayed width
  requestAnimationFrame(() => {
    const displayW = vocabImage.clientWidth || vocabImage.offsetWidth;
    const naturalW = state.image.naturalWidth;
    const scale    = displayW / naturalW;
    state.scaleFactor = scale;

    buildOverlays(scale);
    setOverlaysVisible(false);   // hide so student sees the full image
    buildTiles(scale);
    updateScore();
    startCountdown();
  });
}

// ── OVERLAYS ON IMAGE ──────────────────────────────────────
function buildOverlays(scale) {
  state.rects.forEach((rc, idx) => {
    const el = document.createElement('div');
    applyPosition(el, rc, scale);

    if (rc.type === 'cover') {
      el.className = 'cover-overlay';
      el.style.background = rc.color || '#ffffff';
    } else {
      // word zone
      el.className = 'word-zone';
      el.dataset.id = rc.id;
      el.innerHTML = `<span class="zone-q">?</span>`;
      if (state.solved.has(rc.id)) {
        renderSolvedZone(el, rc, scale);
      }
      el.addEventListener('click', () => handleZoneTap(rc.id));
    }

    imageWrapper.appendChild(el);
  });
}

function applyPosition(el, rc, scale) {
  el.style.left   = Math.round(rc.x * scale) + 'px';
  el.style.top    = Math.round(rc.y * scale) + 'px';
  el.style.width  = Math.round(rc.width  * scale) + 'px';
  el.style.height = Math.round(rc.height * scale) + 'px';
}

function renderSolvedZone(zoneEl, rc, scale) {
  zoneEl.classList.add('solved');
  zoneEl.innerHTML = '';
  const thumb = cropImageToElement(state.image, rc, scale);
  zoneEl.appendChild(thumb);
}

// ── TILES ──────────────────────────────────────────────────
function buildTiles(scale) {
  tilesContainer.innerHTML = '';

  // Shuffle a copy of wordRects
  const shuffled = [...state.wordRects].sort(() => Math.random() - 0.5);

  shuffled.forEach((rc, idx) => {
    const tile = document.createElement('div');
    tile.className = 'word-tile';
    tile.dataset.id = rc.id;

    const num = document.createElement('span');
    num.className = 'tile-num';
    num.textContent = (EXERCISES.indexOf(state.exercise) + 1) + '·' + (idx + 1);
    // hide the internal label number — use a simpler counter
    num.textContent = '';
    tile.appendChild(num);

    const img = cropImageToElement(state.image, rc, scale * 1.5); // 1.5× for readability
    tile.appendChild(img);

    if (state.solved.has(rc.id)) {
      tile.classList.add('placed');
    }

    tile.addEventListener('click', () => handleTileTap(rc.id));
    tilesContainer.appendChild(tile);
  });
}

function cropImageToElement(sourceImg, rc, scale) {
  const canvas = document.createElement('canvas');
  const dw = Math.round(rc.width  * scale);
  const dh = Math.round(rc.height * scale);
  canvas.width  = dw;
  canvas.height = dh;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(sourceImg, rc.x, rc.y, rc.width, rc.height, 0, 0, dw, dh);

  const img = new Image();
  img.src = canvas.toDataURL('image/png');
  img.style.width  = dw + 'px';
  img.style.height = dh + 'px';
  img.draggable = false;
  return img;
}

// ── COUNTDOWN ─────────────────────────────────────────────
const MEMORIZE_SECONDS = 15;

function setOverlaysVisible(visible) {
  imageWrapper.querySelectorAll('.cover-overlay, .word-zone').forEach(el => {
    el.style.display = visible ? '' : 'none';
  });
  // Keep solved zones always visible
  if (visible) return;
  imageWrapper.querySelectorAll('.word-zone.solved').forEach(el => {
    el.style.display = '';
  });
}

function clearCountdown() {
  if (state.countdownId !== null) {
    clearInterval(state.countdownId);
    state.countdownId = null;
  }
}

function startCountdown() {
  clearCountdown();
  state.exercisePhase = false;

  // Disable reveal during memorize (image is already visible)
  revealBtn.disabled = true;
  revealBtn.style.opacity = '0.35';

  // Show banner
  countdownBanner.classList.remove('hidden-banner');
  countdownText.textContent = '¡Mira dónde están las palabras!';
  countdownNum.classList.remove('cd-urgent');

  let remaining = MEMORIZE_SECONDS;
  countdownNum.textContent = remaining;

  state.countdownId = setInterval(() => {
    remaining--;

    // Tick animation
    countdownNum.classList.remove('tick');
    void countdownNum.offsetWidth;
    countdownNum.classList.add('tick');
    countdownNum.textContent = remaining;

    if (remaining <= 5) countdownNum.classList.add('cd-urgent');

    if (remaining <= 0) {
      clearCountdown();
      showExercise();
    }
  }, 1000);
}

function showExercise() {
  state.exercisePhase = true;

  // Now show the opaque word zones — they cover the labels in the image
  setOverlaysVisible(true);

  // Re-enable reveal button
  revealBtn.disabled = false;
  revealBtn.style.opacity = '';

  // Brief "Go!" message then hide banner
  countdownText.textContent = '¡Ahora coloca las palabras!';
  countdownNum.textContent = '';
  countdownNum.classList.remove('cd-urgent');
  setTimeout(() => countdownBanner.classList.add('hidden-banner'), 1800);
}

// ── INTERACTION ────────────────────────────────────────────
function handleTileTap(id) {
  if (state.solved.has(id)) return;
  haptic.light();

  // Toggle selection
  if (state.selectedTileId === id) {
    deselectTile();
    return;
  }

  selectTile(id);

  // If a zone was already "pre-selected" (not applicable here, but safe)
}

function selectTile(id) {
  // Deselect previous
  if (state.selectedTileId) {
    const prev = tilesContainer.querySelector(`[data-id="${state.selectedTileId}"]`);
    prev?.classList.remove('selected');
  }
  state.selectedTileId = id;
  const el = tilesContainer.querySelector(`[data-id="${id}"]`);
  el?.classList.add('selected');

  // Highlight matching zone with a pulsing ring
  imageWrapper.querySelectorAll('.word-zone').forEach(z => z.classList.remove('accepting'));
}

function deselectTile() {
  if (state.selectedTileId) {
    const prev = tilesContainer.querySelector(`[data-id="${state.selectedTileId}"]`);
    prev?.classList.remove('selected');
  }
  state.selectedTileId = null;
  imageWrapper.querySelectorAll('.word-zone').forEach(z => z.classList.remove('accepting'));
}

function handleZoneTap(zoneId) {
  // Zone is already solved — ignore taps
  if (state.solved.has(zoneId)) return;

  if (!state.selectedTileId) {
    // No tile selected — highlight this zone to prompt user
    haptic.light();
    const zoneEl = imageWrapper.querySelector(`.word-zone[data-id="${zoneId}"]`);
    zoneEl?.classList.toggle('accepting');
    return;
  }

  if (state.selectedTileId === zoneId) {
    // Correct match!
    markCorrect(zoneId);
  } else {
    // Wrong match
    markWrong(zoneId);
  }
}

function markCorrect(id) {
  haptic.success();
  state.solved.add(id);

  // Update tile → vanish
  const tileEl = tilesContainer.querySelector(`[data-id="${id}"]`);
  if (tileEl) {
    tileEl.classList.remove('selected');
    tileEl.classList.add('placed');
  }

  // Update zone → show image crop
  const zoneEl = imageWrapper.querySelector(`.word-zone[data-id="${id}"]`);
  if (zoneEl) {
    zoneEl.classList.remove('accepting');
    const rc = state.wordRects.find(r => r.id === id);
    renderSolvedZone(zoneEl, rc, state.scaleFactor);
  }

  state.selectedTileId = null;
  updateScore();

  if (state.solved.size === state.wordRects.length) {
    setTimeout(showResults, 500);
  }
}

function markWrong(zoneId) {
  haptic.error();
  const zoneEl = imageWrapper.querySelector(`.word-zone[data-id="${zoneId}"]`);
  zoneEl?.classList.remove('wrong-flash');
  void zoneEl?.offsetWidth; // reflow to restart animation
  zoneEl?.classList.add('wrong-flash');
  zoneEl?.addEventListener('animationend', () => zoneEl.classList.remove('wrong-flash'), { once: true });
  deselectTile();
}

// ── SCORE ──────────────────────────────────────────────────
function updateScore() {
  const total = state.wordRects.length;
  const done  = state.solved.size;
  scoreEl.textContent = `${done} / ${total}`;
  progressBar.style.width = total ? `${(done / total) * 100}%` : '0%';
}

// ── REVEAL TOGGLE ──────────────────────────────────────────
revealBtn?.addEventListener('click', () => {
  if (!state.exercisePhase) return;
  haptic.light();
  state.showing = !state.showing;
  revealIcon.textContent = state.showing ? '🙈' : '👁';
  setOverlaysVisible(!state.showing);
});

// ── RESET ──────────────────────────────────────────────────
resetBtn?.addEventListener('click', () => {
  haptic.medium();
  state.solved.clear();
  state.selectedTileId = null;
  state.showing = false;
  state.exercisePhase = false;
  revealIcon.textContent = '👁';

  const scale = state.scaleFactor;
  imageWrapper.querySelectorAll('.cover-overlay, .word-zone').forEach(el => el.remove());
  buildOverlays(scale);
  setOverlaysVisible(false);
  buildTiles(scale);
  updateScore();
  startCountdown();
});

// ── BACK BUTTON ────────────────────────────────────────────
backBtn?.addEventListener('click', () => {
  haptic.light();
  clearCountdown();
  renderHome();
});

// ── RESULTS ────────────────────────────────────────────────
function showResults() {
  haptic.success();

  // Mark as completed
  state.completed.add(state.exercise.file);
  localStorage.setItem('completed', JSON.stringify([...state.completed]));

  const total = state.wordRects.length;
  resultsMsg.textContent = `¡Colocaste ${total} de ${total} palabras!`;

  // Stars rating (always 3 on completion)
  resultsStars.textContent = '⭐⭐⭐';

  spawnConfetti();
  showScreen('results');
}

$('play-again-btn')?.addEventListener('click', () => {
  haptic.light();
  startExercise(state.exercise);
});
$('home-from-results-btn')?.addEventListener('click', () => {
  haptic.light();
  renderHome();
});

// ── CONFETTI ───────────────────────────────────────────────
function spawnConfetti() {
  const colors = ['#7c4dff','#00e5ff','#ffd740','#00e676','#ff4081','#ff6d00'];
  const wrap = document.createElement('div');
  wrap.className = 'confetti-wrap';
  document.body.appendChild(wrap);

  for (let i = 0; i < 60; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-particle';
    p.style.left    = Math.random() * 100 + 'vw';
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.width   = (6 + Math.random() * 8) + 'px';
    p.style.height  = (6 + Math.random() * 8) + 'px';
    p.style.animationDuration  = (1.5 + Math.random() * 2) + 's';
    p.style.animationDelay     = (Math.random() * 0.8) + 's';
    p.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    wrap.appendChild(p);
  }

  setTimeout(() => wrap.remove(), 4000);
}

// ── RESIZE: re-scale overlays when window resizes ──────────
let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if ($('game-screen').classList.contains('active') && state.image) {
      const displayW = vocabImage.clientWidth || vocabImage.offsetWidth;
      const scale    = displayW / state.image.naturalWidth;
      state.scaleFactor = scale;

      imageWrapper.querySelectorAll('.cover-overlay, .word-zone').forEach(el => el.remove());
      buildOverlays(scale);
      setOverlaysVisible(state.exercisePhase);
      buildTiles(scale);
    }
  }, 150);
});

// ── INIT ──────────────────────────────────────────────────
renderHome();
