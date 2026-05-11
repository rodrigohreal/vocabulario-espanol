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
  user:            null,   // currently logged-in username
  users:           [],     // loaded from users.json
  completed:       new Set(),  // per-user progress (loaded after login)
  pet:             null,   // axolotl pet data (loaded after login)
  currentNav:      'home', // 'home' | 'pet'
  decayTimer:      null,   // timer that periodically decays hunger/happiness
};

// ── Pet config ────────────────────────────────────────────
const PET_DEFAULT = {
  name:        'Axolito',
  color:       'pink',
  hat:         null,
  level:       1,
  xp:          0,
  happiness:   80,
  hunger:      70,
  streak:      0,
  lastDay:     null,    // YYYY-MM-DD of last activity
  totalXp:     0,
  createdAt:   null,
};

const PET_COLORS = [
  { id: 'pink',    name: 'Rosa',       body: '#ffb6cf', belly: '#ffd5e3', gill: '#ff7aa1', cheek: '#ff5e8e', requires: 0  },
  { id: 'gold',    name: 'Dorado',     body: '#ffd86b', belly: '#fff1b8', gill: '#ff9a00', cheek: '#e07a00', requires: 3  },
  { id: 'mint',    name: 'Menta',      body: '#a3f0d3', belly: '#d5f9ec', gill: '#3ec9a1', cheek: '#1da882', requires: 5  },
  { id: 'blue',    name: 'Azul',       body: '#8fc8ff', belly: '#cee4ff', gill: '#3a8de0', cheek: '#1d6bc0', requires: 8  },
  { id: 'lilac',   name: 'Lila',       body: '#cfaaff', belly: '#e7d4ff', gill: '#9a6cff', cheek: '#6b3fc7', requires: 12 },
  { id: 'shadow',  name: 'Sombra',     body: '#3a3550', belly: '#5a5478', gill: '#9a8ad9', cheek: '#c0a8ff', requires: 18 },
];

const PET_HATS = [
  { id: null,        emoji: '—',   name: 'Sin sombrero', requires: 0  },
  { id: 'graduate',  emoji: '🎓', name: 'Graduación',   requires: 3  },
  { id: 'wizard',    emoji: '🧙', name: 'Mago',         requires: 7  },
  { id: 'crown',     emoji: '👑', name: 'Corona',       requires: 14 },
  { id: 'party',     emoji: '🎉', name: 'Fiesta',       requires: 5  },
  { id: 'flower',    emoji: '🌸', name: 'Flor',         requires: 2  },
];

const STAGE_FOR_LEVEL = (lvl) => {
  if (lvl >= 20) return 'Legendario';
  if (lvl >= 10) return 'Adulto';
  if (lvl >= 5)  return 'Juvenil';
  if (lvl >= 2)  return 'Joven';
  return 'Bebé';
};

// XP needed to reach next level (cumulative growth)
const xpForLevel = (lvl) => Math.round(80 + (lvl - 1) * 40);

// XP awarded per word placed correctly
const XP_PER_WORD = 5;
// XP bonus on full exercise completion
const XP_PER_COMPLETION = 30;
// XP for daily streak bonus
const XP_PER_STREAK_DAY = 15;

// ── Haptic helpers ─────────────────────────────────────────
const haptic = {
  light:   () => tg?.HapticFeedback?.impactOccurred('light'),
  medium:  () => tg?.HapticFeedback?.impactOccurred('medium'),
  success: () => tg?.HapticFeedback?.notificationOccurred('success'),
  error:   () => tg?.HapticFeedback?.notificationOccurred('error'),
};

// ── DOM refs ───────────────────────────────────────────────
const $ = id => document.getElementById(id);
const screens      = { login: $('login-screen'), home: $('home-screen'), game: $('game-screen'), results: $('results-screen'), pet: $('pet-screen') };
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
  // Bottom nav: visible on home/pet, hidden elsewhere
  const nav = document.getElementById('bottom-nav');
  if (nav) {
    if (state.user && (name === 'home' || name === 'pet')) {
      nav.classList.remove('hidden');
    } else {
      nav.classList.add('hidden');
    }
  }
}

// ── HOME ──────────────────────────────────────────────────
function renderHome(view) {
  // Default to lessons if no view specified, or use last selected
  view = view || state.homeView || 'lessons';
  state.homeView = view;
  showScreen('home');
  setNav(view);
  updateTopbarStats();
  updateNavBadge();

  // Apply view to home-screen so CSS can hide the inactive panel
  const homeScreen = $('home-screen');
  if (homeScreen) homeScreen.dataset.view = view;

  // Update header title/subtitle/logo per view
  const logo  = $('home-logo');
  const title = $('home-title');
  const sub   = $('home-subtitle');
  const lbl   = $('progress-label');
  if (view === 'vocab') {
    if (logo)  logo.textContent  = '🖼️';
    if (title) title.textContent = 'Vocabulario';
    if (sub)   sub.textContent   = 'Imágenes con vocabulario';
    if (lbl)   lbl.textContent   = 'imágenes completadas';
  } else {
    if (logo)  logo.textContent  = '🎓';
    if (title) title.textContent = 'Lecciones';
    if (sub)   sub.textContent   = 'Aprende paso a paso';
    if (lbl)   lbl.textContent   = 'lecciones completadas';
  }

  // User pill + progress summary — use the right counter for the active view
  const userNameEl = $('user-name');
  if (userNameEl) userNameEl.textContent = state.user || '';
  let total, done;
  if (view === 'lessons') {
    const prog = getLessonProgress();
    total = LESSONS.length;
    done  = LESSONS.filter(l => prog[l.id]?.completed).length;
  } else {
    total = EXERCISES.length;
    done  = state.completed.size;
  }
  const cnt = $('progress-count');     if (cnt) cnt.textContent = done;
  const tot = $('progress-total');     if (tot) tot.textContent = total;
  const bar = $('mini-progress-bar');  if (bar) bar.style.width = total ? ((done / total) * 100) + '%' : '0%';

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
    // Fetch JSON (no-store: prevents stale image_file refs surviving deploys)
    const res = await fetch(encodeFilePath('data/' + ex.file), { cache: 'no-store' });
    if (!res.ok) throw new Error('No se pudo cargar el ejercicio');
    const data = await res.json();

    // Load image
    const img = await loadImage('images/' + data.image_file);
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

  // Reward axolotl: each correct word feeds & happifies the pet a little
  petAwardForWord();

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

  // Mark as completed (per user)
  const wasNew = !state.completed.has(state.exercise.file);
  state.completed.add(state.exercise.file);
  saveProgress();

  const total = state.wordRects.length;
  resultsMsg.textContent = `¡Colocaste ${total} de ${total} palabras!`;

  // Stars rating (always 3 on completion)
  resultsStars.textContent = '⭐⭐⭐';

  // Reward pet for completing the whole exercise
  petAwardForCompletion(wasNew);

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

// ── AUTH / USERS ──────────────────────────────────────────
async function loadUsers() {
  try {
    const res = await fetch('users.json?_=' + Date.now());
    if (!res.ok) throw new Error('http ' + res.status);
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (e) {
    console.warn('users.json not found, using fallback');
    return [{ user: 'demo', pass: 'demo' }];
  }
}

function loadProgress(username) {
  try {
    return new Set(JSON.parse(localStorage.getItem('progress_' + username) || '[]'));
  } catch {
    return new Set();
  }
}

function saveProgress() {
  if (!state.user) return;
  localStorage.setItem('progress_' + state.user, JSON.stringify([...state.completed]));
}

function loginAs(username) {
  state.user = username;
  state.completed = loadProgress(username);
  state.pet = loadPet(username);
  localStorage.setItem('currentUser', username);
  petCheckDailyStreak();
  startPetDecayTimer();
  $('bottom-nav').classList.remove('hidden');
  renderHome('lessons');
  applyPetVisuals();
  updateTopbarStats();
}

function logout() {
  stopPetDecayTimer();
  state.user = null;
  state.completed = new Set();
  state.pet = null;
  localStorage.removeItem('currentUser');
  $('bottom-nav').classList.add('hidden');
  $('login-user').value = '';
  $('login-pass').value = '';
  $('login-error').textContent = ' ';
  showScreen('login');
}

// Login form submit
$('login-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const u = $('login-user').value.trim();
  const p = $('login-pass').value;
  const errEl = $('login-error');

  const found = state.users.find(x =>
    x.user.toLowerCase() === u.toLowerCase() && x.pass === p
  );
  if (!found) {
    errEl.textContent = 'Usuario o contraseña incorrectos';
    errEl.classList.remove('shake');
    void errEl.offsetWidth;
    errEl.classList.add('shake');
    haptic.error();
    return;
  }

  errEl.textContent = ' ';
  haptic.success();
  loginAs(found.user);
});

// Logout button
$('logout-btn')?.addEventListener('click', () => {
  haptic.light();
  logout();
});

// ══════════════════════════════════════════════════════════
//  AXOLOTL PET SYSTEM
// ══════════════════════════════════════════════════════════

function petKey(username) { return 'pet_' + username; }

function loadPet(username) {
  try {
    const raw = localStorage.getItem(petKey(username));
    if (raw) {
      const data = { ...PET_DEFAULT, ...JSON.parse(raw) };
      return data;
    }
  } catch {}
  return { ...PET_DEFAULT, createdAt: todayStr() };
}

function savePet() {
  if (!state.user || !state.pet) return;
  localStorage.setItem(petKey(state.user), JSON.stringify(state.pet));
}

function todayStr() {
  const d = new Date();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${d.getFullYear()}-${m}-${dd}`;
}

function dayDiff(aStr, bStr) {
  if (!aStr || !bStr) return null;
  const a = new Date(aStr + 'T00:00:00');
  const b = new Date(bStr + 'T00:00:00');
  return Math.round((b - a) / 86400000);
}

// ── Daily streak check on login ─────────────────────────
function petCheckDailyStreak() {
  if (!state.pet) return;
  const today = todayStr();
  const last  = state.pet.lastDay;
  if (!last) {
    state.pet.lastDay = today;
    savePet();
    return;
  }
  const diff = dayDiff(last, today);
  if (diff === 0) return;            // same day, no change
  if (diff === 1) {
    // yesterday: do nothing yet, the streak only increments after activity today
    return;
  }
  // >1 day gap → streak broken; happiness drops
  state.pet.streak = 0;
  state.pet.happiness = Math.max(15, state.pet.happiness - 30 * Math.min(diff - 1, 3));
  state.pet.hunger    = Math.max(5,  state.pet.hunger    - 25 * Math.min(diff - 1, 3));
  savePet();
}

// Called when the user does activity that should count toward a streak
function petTouchActivity() {
  if (!state.pet) return;
  const today = todayStr();
  const last  = state.pet.lastDay;
  if (last !== today) {
    const diff = dayDiff(last, today);
    if (diff === 1)       state.pet.streak += 1;
    else if (diff === null || diff > 1) state.pet.streak = 1;
    state.pet.lastDay = today;

    // streak bonus XP
    petAddXp(XP_PER_STREAK_DAY + Math.min(state.pet.streak * 2, 30), { silent: true });
  }
}

// ── XP / leveling ───────────────────────────────────────
function petAddXp(amount, opts = {}) {
  if (!state.pet || amount <= 0) return;
  state.pet.xp += amount;
  state.pet.totalXp += amount;

  let leveled = false;
  while (state.pet.xp >= xpForLevel(state.pet.level)) {
    state.pet.xp -= xpForLevel(state.pet.level);
    state.pet.level += 1;
    leveled = true;
  }

  if (!opts.silent) spawnXpParticle('+' + amount);
  savePet();

  if (leveled) showLevelUp();
  refreshPetUI();
  updateTopbarStats();
}

function petAwardForWord() {
  if (!state.pet) return;
  petTouchActivity();
  state.pet.hunger    = Math.min(100, state.pet.hunger + 3);
  state.pet.happiness = Math.min(100, state.pet.happiness + 2);
  petAddXp(XP_PER_WORD);
}

function petAwardForCompletion(isNew) {
  if (!state.pet) return;
  petTouchActivity();
  const bonus = isNew ? XP_PER_COMPLETION : Math.round(XP_PER_COMPLETION / 2);
  state.pet.hunger    = Math.min(100, state.pet.hunger + 15);
  state.pet.happiness = Math.min(100, state.pet.happiness + 10);
  petAddXp(bonus);
}

function showLevelUp() {
  haptic.success();
  const modal = $('levelup-modal');
  $('levelup-text').textContent = 'Nivel ' + state.pet.level + ' — ' + STAGE_FOR_LEVEL(state.pet.level);
  // Reveal newly-unlocked rewards
  const newColor = PET_COLORS.find(c => c.requires === state.pet.level);
  const newHat   = PET_HATS.find(h => h.requires === state.pet.level && h.id);
  const rewards = [];
  if (newColor) rewards.push('🎨 Nuevo color: ' + newColor.name);
  if (newHat)   rewards.push(newHat.emoji + ' Nuevo sombrero: ' + newHat.name);
  $('levelup-reward').textContent = rewards.join('  ·  ');
  modal.classList.remove('hidden');
  spawnConfetti();
  // Big celebration animation on the axolotl itself
  const svg = $('axolotl-svg');
  const wrap = $('axolotl-wrap');
  if (svg && wrap) {
    wrap.classList.add('is-celebrating');
    pulseClass(svg, 'is-celebrate', 2200);
    setTimeout(() => wrap.classList.remove('is-celebrating'), 2200);
  }
}

$('levelup-close')?.addEventListener('click', () => {
  $('levelup-modal').classList.add('hidden');
});

// ── Decay over time (idle-degradation, very gentle) ─────
function startPetDecayTimer() {
  stopPetDecayTimer();
  state.decayTimer = setInterval(() => {
    if (!state.pet) return;
    state.pet.hunger    = Math.max(0, state.pet.hunger    - 1);
    state.pet.happiness = Math.max(0, state.pet.happiness - 0.5);
    savePet();
    if (state.currentNav === 'pet') refreshPetUI();
  }, 60000); // every minute
}
function stopPetDecayTimer() {
  if (state.decayTimer) { clearInterval(state.decayTimer); state.decayTimer = null; }
}

// ── Render / refresh pet UI ─────────────────────────────
function refreshPetUI() {
  if (!state.pet) return;
  $('pet-name').textContent = state.pet.name;
  $('pet-level').textContent = state.pet.level;
  $('pet-stage').textContent = STAGE_FOR_LEVEL(state.pet.level);
  $('pet-streak-num').textContent = state.pet.streak;

  $('pet-happy-bar').style.width  = state.pet.happiness + '%';
  $('pet-hunger-bar').style.width = state.pet.hunger    + '%';

  const need = xpForLevel(state.pet.level);
  $('pet-xp-num').textContent  = Math.floor(state.pet.xp);
  $('pet-xp-need').textContent = need;
  $('pet-xp-fill').style.width = ((state.pet.xp / need) * 100) + '%';

  // Mood
  const svg = $('axolotl-svg');
  const wrap = $('axolotl-wrap');
  svg.classList.remove('is-sad');
  wrap.classList.remove('is-sleepy');
  svg.classList.remove('is-sleepy');
  if (state.pet.happiness < 30 || state.pet.hunger < 20) {
    svg.classList.add('is-sad');
  } else if (state.pet.hunger < 5) {
    svg.classList.add('is-sleepy');
    wrap.classList.add('is-sleepy');
  }

  // Message
  $('pet-message').textContent = petMessage();

  updateNavBadge();
}

function updateNavBadge() {
  const badge = $('nav-pet-badge');
  if (!badge) return;
  if (!state.pet) { badge.classList.add('hidden'); return; }
  if (state.pet.hunger < 25 || state.pet.happiness < 30) badge.classList.remove('hidden');
  else badge.classList.add('hidden');
}

function petMessage() {
  const p = state.pet;
  if (p.hunger < 15)     return '¡' + p.name + ' tiene mucha hambre! Aprende palabras para alimentarlo.';
  if (p.happiness < 25)  return p.name + ' está triste. ¡Acarícialo y juega un rato!';
  if (p.streak >= 7)     return '🔥 ¡Racha de ' + p.streak + ' días! ' + p.name + ' está orgulloso de ti.';
  if (p.level >= 10)     return '¡' + p.name + ' es todo un experto en español!';
  if (p.hunger > 85 && p.happiness > 85) return '¡' + p.name + ' está feliz y satisfecho! ✨';
  return '¡Hola! Aprende palabras para que ' + p.name + ' crezca.';
}

function applyPetVisuals() {
  if (!state.pet) return;
  const svg = $('axolotl-svg');
  if (!svg) return;
  const c = PET_COLORS.find(x => x.id === state.pet.color) || PET_COLORS[0];
  svg.style.setProperty('--ax-body',  c.body);
  svg.style.setProperty('--ax-belly', c.belly);
  svg.style.setProperty('--ax-gill',  c.gill);
  svg.style.setProperty('--ax-cheek', c.cheek);

  // Hat — render via foreignObject
  const hatGroup = $('ax-hat');
  hatGroup.innerHTML = '';
  if (state.pet.hat) {
    const hat = PET_HATS.find(h => h.id === state.pet.hat);
    if (hat && hat.id) {
      // Use SVG <text> for emoji hat
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', '140');
      text.setAttribute('y', '54');
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('font-size', '38');
      text.textContent = hat.emoji;
      hatGroup.appendChild(text);
    }
  }
}

// ── Pet screen interactions ─────────────────────────────
function spawnHearts(count = 4) {
  const wrap = $('heart-particles');
  for (let i = 0; i < count; i++) {
    const h = document.createElement('div');
    h.className = 'heart-p';
    h.textContent = '💖';
    h.style.left = (30 + Math.random() * 60) + '%';
    h.style.top  = (30 + Math.random() * 30) + '%';
    h.style.animationDelay = (i * 0.08) + 's';
    wrap.appendChild(h);
    setTimeout(() => h.remove(), 1600);
  }
}

function spawnXpParticle(label) {
  const wrap = $('xp-particles');
  if (!wrap) return;
  const p = document.createElement('div');
  p.className = 'xp-p';
  p.textContent = label + ' XP';
  p.style.left = (35 + Math.random() * 30) + '%';
  p.style.top  = '50%';
  wrap.appendChild(p);
  setTimeout(() => p.remove(), 1800);
}

// Helper: trigger a one-shot animation class on an element
function pulseClass(el, className, duration) {
  if (!el) return;
  el.classList.remove(className);
  void el.offsetWidth; // force reflow so the animation restarts
  el.classList.add(className);
  setTimeout(() => el.classList.remove(className), duration);
}

// "Acariciar" — give happiness, trigger wiggle reaction
$('pet-action-pet')?.addEventListener('click', () => {
  if (!state.pet) return;
  haptic.light();
  state.pet.happiness = Math.min(100, state.pet.happiness + 5);
  spawnHearts(3);
  const wrap = $('axolotl-wrap');
  const svg = $('axolotl-svg');
  wrap.classList.add('is-petting');
  pulseClass(svg, 'is-happy', 850);
  setTimeout(() => wrap.classList.remove('is-petting'), 850);
  savePet();
  refreshPetUI();
});

// "Alimentar" — feed: spin + chomp animation
$('pet-action-feed')?.addEventListener('click', () => {
  if (!state.pet) return;
  if (state.pet.hunger >= 95) {
    haptic.error();
    flashMessage('¡Ya está lleno! Aprende palabras para darle más comida.');
    return;
  }
  haptic.light();
  state.pet.hunger    = Math.min(100, state.pet.hunger + 12);
  state.pet.happiness = Math.min(100, state.pet.happiness + 3);
  spawnHearts(2);
  spawnFoodFlakes(6);
  const svg = $('axolotl-svg');
  pulseClass(svg, 'is-spin',   1150);
  pulseClass(svg, 'is-eating', 900);
  savePet();
  refreshPetUI();
});

// Sprinkle little food flakes that drift down past the axolotl when fed
function spawnFoodFlakes(count = 6) {
  const tank = document.querySelector('.pet-tank');
  if (!tank) return;
  const foods = ['🦐', '🐟', '✨'];
  for (let i = 0; i < count; i++) {
    const f = document.createElement('div');
    f.className = 'food-flake';
    f.textContent = foods[Math.floor(Math.random() * foods.length)];
    f.style.left = (20 + Math.random() * 60) + '%';
    f.style.animationDelay = (i * 0.08) + 's';
    tank.appendChild(f);
    setTimeout(() => f.remove(), 2200);
  }
}

// Click axolotl directly = pet it
$('axolotl-wrap')?.addEventListener('click', () => {
  $('pet-action-pet').click();
});

// ── Random dash scheduler — axolotl darts around occasionally ──
function scheduleNextDash() {
  // Random delay between 8s and 22s
  const delay = 8000 + Math.random() * 14000;
  setTimeout(() => {
    const wrap = $('axolotl-wrap');
    const svg = $('axolotl-svg');
    // Only dash when visible, awake, and not mid-reaction
    if (
      wrap && svg && state.currentNav === 'pet' &&
      !svg.classList.contains('is-sleepy') &&
      !svg.classList.contains('is-spin') &&
      !svg.classList.contains('is-celebrate') &&
      !wrap.classList.contains('is-petting')
    ) {
      pulseClass(wrap, 'is-dashing', 1200);
      // Spawn a tiny bubble trail behind it
      spawnDashBubbles(5);
    }
    scheduleNextDash();
  }, delay);
}
scheduleNextDash();

function spawnDashBubbles(count = 5) {
  const wrap = $('axolotl-wrap');
  const tank = document.querySelector('.pet-tank');
  if (!wrap || !tank) return;
  for (let i = 0; i < count; i++) {
    const b = document.createElement('div');
    b.className = 'dash-bubble';
    const size = 3 + Math.random() * 5;
    b.style.width = size + 'px';
    b.style.height = size + 'px';
    b.style.left = (40 + Math.random() * 30) + '%';
    b.style.top  = (45 + Math.random() * 20) + '%';
    b.style.animationDelay = (i * 0.06) + 's';
    tank.appendChild(b);
    setTimeout(() => b.remove(), 1100);
  }
}

// ── Tank water-ripple on click anywhere ──
document.querySelector('.pet-tank')?.addEventListener('click', (e) => {
  const tank = e.currentTarget;
  const rect = tank.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  const r = document.createElement('div');
  r.className = 'tank-ripple';
  r.style.left = x + 'px';
  r.style.top = y + 'px';
  tank.appendChild(r);
  setTimeout(() => r.remove(), 850);
});

function flashMessage(msg) {
  const el = $('pet-message');
  const original = el.textContent;
  el.textContent = msg;
  setTimeout(() => { if (state.currentNav === 'pet') el.textContent = petMessage(); }, 1800);
}

// ── Rename pet ──────────────────────────────────────────
$('rename-pet-btn')?.addEventListener('click', () => {
  if (!state.pet) return;
  const next = prompt('Nombre de tu axolote:', state.pet.name);
  if (next && next.trim()) {
    state.pet.name = next.trim().slice(0, 16);
    savePet();
    refreshPetUI();
  }
});

// ── Customize modal ─────────────────────────────────────
$('pet-action-customize')?.addEventListener('click', () => {
  buildColorPicker();
  buildHatPicker();
  $('customize-modal').classList.remove('hidden');
});
$('customize-close')?.addEventListener('click', () => {
  $('customize-modal').classList.add('hidden');
});

function buildColorPicker() {
  const wrap = $('color-picker');
  wrap.innerHTML = '';
  PET_COLORS.forEach(c => {
    const sw = document.createElement('div');
    sw.className = 'color-swatch';
    sw.style.background = `radial-gradient(circle at 30% 30%, ${c.belly}, ${c.body} 60%, ${c.gill})`;
    sw.title = c.name + (state.pet.level < c.requires ? ` (Nv. ${c.requires})` : '');
    if (state.pet.level < c.requires) sw.classList.add('locked');
    if (state.pet.color === c.id) sw.classList.add('selected');
    sw.addEventListener('click', () => {
      if (state.pet.level < c.requires) { haptic.error(); return; }
      haptic.light();
      state.pet.color = c.id;
      savePet();
      buildColorPicker();
      applyPetVisuals();
    });
    wrap.appendChild(sw);
  });
}

function buildHatPicker() {
  const wrap = $('hat-picker');
  wrap.innerHTML = '';
  PET_HATS.forEach(h => {
    const op = document.createElement('div');
    op.className = 'hat-option';
    if (h.id === null) {
      const span = document.createElement('span');
      span.className = 'hat-none';
      span.textContent = 'Sin';
      op.appendChild(span);
    } else {
      op.textContent = h.emoji;
    }
    if (h.requires > 0 && state.pet.level < h.requires) {
      op.classList.add('locked');
      op.dataset.req = 'Nv. ' + h.requires;
    }
    if (state.pet.hat === h.id) op.classList.add('selected');
    op.addEventListener('click', () => {
      if (h.requires > 0 && state.pet.level < h.requires) { haptic.error(); return; }
      haptic.light();
      state.pet.hat = h.id;
      savePet();
      buildHatPicker();
      applyPetVisuals();
    });
    wrap.appendChild(op);
  });
}

// ── Bottom navigation ───────────────────────────────────
function setNav(name) {
  state.currentNav = name;
  document.querySelectorAll('#bottom-nav .nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.nav === name);
  });
}

document.querySelectorAll('#bottom-nav .nav-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    haptic.light();
    const target = btn.dataset.nav;
    if (target === 'lessons' || target === 'vocab') {
      clearCountdown();
      renderHome(target);
    } else if (target === 'pet') {
      setNav('pet');
      showScreen('pet');
      refreshPetUI();
      applyPetVisuals();
    }
  });
});

// ── Topbar stats refresh ────────────────────────────────
function updateTopbarStats() {
  if (!state.pet) return;
  const sn = $('topbar-streak-num'); if (sn) sn.textContent = state.pet.streak;
  const xn = $('topbar-xp-num');     if (xn) xn.textContent = state.pet.totalXp;
}

// ══════════════════════════════════════════════════════════
//  DUOLINGO-STYLE LESSONS
// ══════════════════════════════════════════════════════════

// Exercise types:
//   t='pick'       — show prompt + 4 options (emoji+text), pick correct
//   t='translate'  — show source sentence, build target with tiles
//   t='match'      — match 4 Spanish words with their L1 translations
//   t='fill'       — fill blank in sentence by picking the right word

const LESSONS = [
  // ── 1. Saludos ────────────────────────────────────────
  {
    id: 'l1', name: 'Saludos', emoji: '👋', desc: 'Saluda en español',
    exercises: [
      { t: 'pick', q: '«Привет»', opts: [
        { txt: 'hola',    em: '👋' },
        { txt: 'adiós',   em: '🙋' },
        { txt: 'gracias', em: '🙏' },
        { txt: 'perdón',  em: '🙇' },
      ], correct: 0 },
      { t: 'pick', q: '«Пока»', opts: [
        { txt: 'hola',  em: '👋' },
        { txt: 'adiós', em: '🙋' },
        { txt: 'sí',    em: '✅' },
        { txt: 'no',    em: '❌' },
      ], correct: 1 },
      { t: 'translate', from: 'Доброе утро', tiles: ['buenos', 'días', 'noches', 'tardes'], answer: ['buenos', 'días'] },
      { t: 'translate', from: 'Добрый день',  tiles: ['buenas', 'tardes', 'noches', 'hola'], answer: ['buenas', 'tardes'] },
      { t: 'match', pairs: [
        ['hola',   'привет'],
        ['adiós',  'пока'],
        ['bien',   'хорошо'],
        ['mal',    'плохо'],
      ]},
      { t: 'fill', sentence: ['Buenas', null, '.'], target: 'noches', opts: ['noches', 'días', 'mal'], hint: '«Спокойной ночи»' },
      { t: 'pick', q: '«Как дела?»', opts: [
        { txt: '¿cómo estás?',  em: '🤔' },
        { txt: 'me llamo Ana',  em: '👤' },
        { txt: 'gracias',       em: '🙏' },
        { txt: 'adiós',         em: '🙋' },
      ], correct: 0 },
      { t: 'translate', from: 'Я в порядке', tiles: ['estoy', 'bien', 'mal', 'soy'], answer: ['estoy', 'bien'] },
    ],
  },

  // ── 2. Yo soy ─────────────────────────────────────────
  {
    id: 'l2', name: 'Yo soy', emoji: '🙋', desc: 'Pronombres y verbo ser',
    exercises: [
      { t: 'pick', q: '«Я»', opts: [
        { txt: 'yo',  em: '👤' },
        { txt: 'tú',  em: '👉' },
        { txt: 'él',  em: '👨' },
        { txt: 'ella',em: '👩' },
      ], correct: 0 },
      { t: 'pick', q: '«Она»', opts: [
        { txt: 'él',   em: '👨' },
        { txt: 'ella', em: '👩' },
        { txt: 'yo',   em: '👤' },
        { txt: 'tú',   em: '👉' },
      ], correct: 1 },
      { t: 'match', pairs: [
        ['yo',       'я'],
        ['tú',       'ты'],
        ['él',       'он'],
        ['nosotros', 'мы'],
      ]},
      { t: 'translate', from: 'Меня зовут Ана', tiles: ['me', 'llamo', 'Ana', 'soy', 'tú'], answer: ['me', 'llamo', 'Ana'] },
      { t: 'fill', sentence: ['Yo', null, 'María.'], target: 'soy', opts: ['soy', 'eres', 'es'], hint: '«Я» Мария' },
      { t: 'fill', sentence: ['¿Cómo te', null, '?'], target: 'llamas', opts: ['llamas', 'llamo', 'llama'], hint: 'Как тебя зовут?' },
      { t: 'translate', from: 'Я Денис', tiles: ['yo', 'soy', 'Denis', 'eres'], answer: ['yo', 'soy', 'Denis'], answers: [['yo', 'soy', 'Denis'], ['soy', 'Denis']] },
    ],
  },

  // ── 3. Familia ────────────────────────────────────────
  {
    id: 'l3', name: 'Familia', emoji: '👨‍👩‍👧', desc: 'Miembros de la familia',
    exercises: [
      { t: 'pick', q: '«Мама»', opts: [
        { txt: 'madre',  em: '👩' },
        { txt: 'padre',  em: '👨' },
        { txt: 'hermana',em: '👧' },
        { txt: 'abuela', em: '👵' },
      ], correct: 0 },
      { t: 'pick', q: '«Папа»', opts: [
        { txt: 'hermano',em: '👦' },
        { txt: 'hijo',   em: '🧒' },
        { txt: 'padre',  em: '👨' },
        { txt: 'abuelo', em: '👴' },
      ], correct: 2 },
      { t: 'pick', q: '«Сестра»', opts: [
        { txt: 'hermano', em: '👦' },
        { txt: 'hermana', em: '👧' },
        { txt: 'hija',    em: '👶' },
        { txt: 'madre',   em: '👩' },
      ], correct: 1 },
      { t: 'match', pairs: [
        ['madre',   'мама'],
        ['padre',   'папа'],
        ['hijo',    'сын'],
        ['hija',    'дочь'],
      ]},
      { t: 'match', pairs: [
        ['hermano', 'брат'],
        ['hermana', 'сестра'],
        ['abuelo',  'дедушка'],
        ['abuela',  'бабушка'],
      ]},
      { t: 'translate', from: 'Моя сестра', tiles: ['mi', 'hermana', 'hermano', 'su'], answer: ['mi', 'hermana'] },
      { t: 'fill', sentence: ['Mi', null, 'es alta.'], target: 'madre', opts: ['madre', 'padre', 'hermano'], hint: 'Моя мама высокая' },
    ],
  },

  // ── 4. Números 1-10 ───────────────────────────────────
  {
    id: 'l4', name: 'Números', emoji: '🔢', desc: 'Cuenta del 1 al 10',
    exercises: [
      { t: 'pick', q: '«1» (один)', opts: [
        { txt: 'uno',    em: '1️⃣' },
        { txt: 'dos',    em: '2️⃣' },
        { txt: 'tres',   em: '3️⃣' },
        { txt: 'cuatro', em: '4️⃣' },
      ], correct: 0 },
      { t: 'pick', q: '«5» (пять)', opts: [
        { txt: 'tres',   em: '3️⃣' },
        { txt: 'cuatro', em: '4️⃣' },
        { txt: 'cinco',  em: '5️⃣' },
        { txt: 'seis',   em: '6️⃣' },
      ], correct: 2 },
      { t: 'pick', q: '«10» (десять)', opts: [
        { txt: 'siete',  em: '7️⃣' },
        { txt: 'ocho',   em: '8️⃣' },
        { txt: 'nueve',  em: '9️⃣' },
        { txt: 'diez',   em: '🔟' },
      ], correct: 3 },
      { t: 'match', pairs: [
        ['uno',  'один'],
        ['dos',  'два'],
        ['tres', 'три'],
        ['cuatro','четыре'],
      ]},
      { t: 'match', pairs: [
        ['seis',  'шесть'],
        ['siete', 'семь'],
        ['ocho',  'восемь'],
        ['nueve', 'девять'],
      ]},
      { t: 'translate', from: 'Два кота', tiles: ['dos', 'tres', 'gatos', 'gato'], answer: ['dos', 'gatos'] },
      { t: 'fill', sentence: ['Tengo', null, 'años.'], target: 'siete', opts: ['siete', 'ocho', 'sí'], hint: 'Мне 7 лет' },
    ],
  },

  // ── 5. Colores ────────────────────────────────────────
  {
    id: 'l5', name: 'Colores', emoji: '🎨', desc: 'Aprende los colores',
    exercises: [
      { t: 'pick', q: '«Красный»', opts: [
        { txt: 'rojo',     em: '🔴' },
        { txt: 'azul',     em: '🔵' },
        { txt: 'verde',    em: '🟢' },
        { txt: 'amarillo', em: '🟡' },
      ], correct: 0 },
      { t: 'pick', q: '«Синий»', opts: [
        { txt: 'verde',    em: '🟢' },
        { txt: 'azul',     em: '🔵' },
        { txt: 'rosa',     em: '🌸' },
        { txt: 'rojo',     em: '🔴' },
      ], correct: 1 },
      { t: 'pick', q: '«Жёлтый»', opts: [
        { txt: 'naranja',  em: '🟠' },
        { txt: 'amarillo', em: '🟡' },
        { txt: 'blanco',   em: '⚪' },
        { txt: 'negro',    em: '⚫' },
      ], correct: 1 },
      { t: 'match', pairs: [
        ['rojo',   'красный'],
        ['azul',   'синий'],
        ['verde',  'зелёный'],
        ['negro',  'чёрный'],
      ]},
      { t: 'match', pairs: [
        ['amarillo','жёлтый'],
        ['blanco',  'белый'],
        ['rosa',    'розовый'],
        ['naranja', 'оранжевый'],
      ]},
      { t: 'translate', from: 'Красная роза', tiles: ['una', 'rosa', 'roja', 'azul'], answer: ['una', 'rosa', 'roja'], answers: [['una', 'rosa', 'roja'], ['rosa', 'roja']] },
      { t: 'fill', sentence: ['El cielo es', null, '.'], target: 'azul', opts: ['azul', 'verde', 'rojo'], hint: 'Небо синее' },
    ],
  },

  // ── 6. Comida ─────────────────────────────────────────
  {
    id: 'l6', name: 'Comida', emoji: '🍎', desc: 'Comida básica',
    exercises: [
      { t: 'pick', q: '«Хлеб»', opts: [
        { txt: 'pan',     em: '🍞' },
        { txt: 'queso',   em: '🧀' },
        { txt: 'huevo',   em: '🥚' },
        { txt: 'manzana', em: '🍎' },
      ], correct: 0 },
      { t: 'pick', q: '«Вода»', opts: [
        { txt: 'leche',   em: '🥛' },
        { txt: 'café',    em: '☕' },
        { txt: 'agua',    em: '💧' },
        { txt: 'té',      em: '🍵' },
      ], correct: 2 },
      { t: 'pick', q: '«Яблоко»', opts: [
        { txt: 'pollo',   em: '🍗' },
        { txt: 'manzana', em: '🍎' },
        { txt: 'arroz',   em: '🍚' },
        { txt: 'queso',   em: '🧀' },
      ], correct: 1 },
      { t: 'match', pairs: [
        ['pan',     'хлеб'],
        ['agua',    'вода'],
        ['leche',   'молоко'],
        ['queso',   'сыр'],
      ]},
      { t: 'match', pairs: [
        ['café',    'кофе'],
        ['té',      'чай'],
        ['huevo',   'яйцо'],
        ['manzana', 'яблоко'],
      ]},
      { t: 'translate', from: 'Я пью воду', tiles: ['yo', 'bebo', 'agua', 'como'], answer: ['yo', 'bebo', 'agua'], answers: [['yo', 'bebo', 'agua'], ['bebo', 'agua']] },
      { t: 'fill', sentence: ['Como una', null, '.'], target: 'manzana', opts: ['manzana', 'agua', 'leche'], hint: 'Я ем яблоко' },
    ],
  },

  // ── 7. Animales ───────────────────────────────────────
  {
    id: 'l7', name: 'Animales', emoji: '🐶', desc: 'Animales comunes',
    exercises: [
      { t: 'pick', q: '«Собака»', opts: [
        { txt: 'gato',  em: '🐱' },
        { txt: 'perro', em: '🐶' },
        { txt: 'pez',   em: '🐟' },
        { txt: 'pájaro',em: '🐦' },
      ], correct: 1 },
      { t: 'pick', q: '«Кот»', opts: [
        { txt: 'gato',   em: '🐱' },
        { txt: 'caballo',em: '🐴' },
        { txt: 'oveja',  em: '🐑' },
        { txt: 'conejo', em: '🐰' },
      ], correct: 0 },
      { t: 'pick', q: '«Лошадь»', opts: [
        { txt: 'vaca',   em: '🐮' },
        { txt: 'oveja',  em: '🐑' },
        { txt: 'caballo',em: '🐴' },
        { txt: 'perro',  em: '🐶' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['perro',  'собака'],
        ['gato',   'кот'],
        ['pájaro', 'птица'],
        ['pez',    'рыба'],
      ]},
      { t: 'match', pairs: [
        ['caballo','лошадь'],
        ['vaca',   'корова'],
        ['oveja',  'овца'],
        ['conejo', 'кролик'],
      ]},
      { t: 'translate', from: 'У меня есть собака', tiles: ['tengo', 'un', 'perro', 'gato'], answer: ['tengo', 'un', 'perro'] },
      { t: 'fill', sentence: ['El', null, 'maúlla.'], target: 'gato', opts: ['gato', 'perro', 'pez'], hint: 'Кот мяукает' },
    ],
  },

  // ── 8. Días de la semana ──────────────────────────────
  {
    id: 'l8', name: 'Días', emoji: '📅', desc: 'Días de la semana',
    exercises: [
      { t: 'pick', q: '«Понедельник»', opts: [
        { txt: 'lunes',     em: '1️⃣' },
        { txt: 'martes',    em: '2️⃣' },
        { txt: 'jueves',    em: '4️⃣' },
        { txt: 'domingo',   em: '7️⃣' },
      ], correct: 0 },
      { t: 'pick', q: '«Суббота»', opts: [
        { txt: 'viernes', em: '5️⃣' },
        { txt: 'sábado',  em: '6️⃣' },
        { txt: 'domingo', em: '7️⃣' },
        { txt: 'lunes',   em: '1️⃣' },
      ], correct: 1 },
      { t: 'pick', q: '«Воскресенье»', opts: [
        { txt: 'lunes',    em: '1️⃣' },
        { txt: 'sábado',   em: '6️⃣' },
        { txt: 'domingo',  em: '7️⃣' },
        { txt: 'miércoles',em: '3️⃣' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['lunes',     'понедельник'],
        ['martes',    'вторник'],
        ['miércoles', 'среда'],
        ['jueves',    'четверг'],
      ]},
      { t: 'match', pairs: [
        ['viernes', 'пятница'],
        ['sábado',  'суббота'],
        ['domingo', 'воскресенье'],
        ['hoy',     'сегодня'],
      ]},
      { t: 'translate', from: 'Сегодня понедельник', tiles: ['hoy', 'es', 'lunes', 'martes'], answer: ['hoy', 'es', 'lunes'] },
      { t: 'fill', sentence: ['Mañana es', null, '.'], target: 'sábado', opts: ['sábado', 'lunes', 'hoy'], hint: 'Завтра суббота' },
    ],
  },

  // ── 9. Verbos básicos ─────────────────────────────────
  {
    id: 'l9', name: 'Verbos', emoji: '🏃', desc: 'Verbos básicos',
    exercises: [
      { t: 'pick', q: '«Есть/Кушать»', opts: [
        { txt: 'comer',  em: '🍽️' },
        { txt: 'beber',  em: '🥤' },
        { txt: 'hablar', em: '💬' },
        { txt: 'vivir',  em: '🏠' },
      ], correct: 0 },
      { t: 'pick', q: '«Пить»', opts: [
        { txt: 'comer',  em: '🍽️' },
        { txt: 'beber',  em: '🥤' },
        { txt: 'ir',     em: '🚶' },
        { txt: 'tener',  em: '✋' },
      ], correct: 1 },
      { t: 'pick', q: '«Говорить»', opts: [
        { txt: 'ir',     em: '🚶' },
        { txt: 'vivir',  em: '🏠' },
        { txt: 'hablar', em: '💬' },
        { txt: 'tener',  em: '✋' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['ser',    'быть'],
        ['tener',  'иметь'],
        ['ir',     'идти'],
        ['hablar', 'говорить'],
      ]},
      { t: 'match', pairs: [
        ['comer',  'есть'],
        ['beber',  'пить'],
        ['vivir',  'жить'],
        ['estar',  'находиться'],
      ]},
      { t: 'translate', from: 'Я ем хлеб', tiles: ['yo', 'como', 'pan', 'bebo'], answer: ['yo', 'como', 'pan'], answers: [['yo', 'como', 'pan'], ['como', 'pan']] },
      { t: 'fill', sentence: ['Yo', null, 'español.'], target: 'hablo', opts: ['hablo', 'como', 'tengo'], hint: 'Я говорю по-испански' },
    ],
  },

  // ── 10. Frases útiles ─────────────────────────────────
  {
    id: 'l10', name: 'Frases útiles', emoji: '💬', desc: 'Frases del día a día',
    exercises: [
      { t: 'pick', q: '«Спасибо»', opts: [
        { txt: 'gracias',   em: '🙏' },
        { txt: 'por favor', em: '🤲' },
        { txt: 'perdón',    em: '🙇' },
        { txt: 'salud',     em: '🥂' },
      ], correct: 0 },
      { t: 'pick', q: '«Пожалуйста»', opts: [
        { txt: 'gracias',   em: '🙏' },
        { txt: 'por favor', em: '🤲' },
        { txt: 'sí',        em: '✅' },
        { txt: 'no',        em: '❌' },
      ], correct: 1 },
      { t: 'pick', q: '«Извини»', opts: [
        { txt: 'gracias',   em: '🙏' },
        { txt: 'salud',     em: '🥂' },
        { txt: 'perdón',    em: '🙇' },
        { txt: 'mucho gusto',em: '🤝' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['gracias',   'спасибо'],
        ['por favor', 'пожалуйста'],
        ['sí',        'да'],
        ['no',        'нет'],
      ]},
      { t: 'match', pairs: [
        ['perdón',     'извини'],
        ['hasta luego','до свидания'],
        ['mucho gusto','приятно познакомиться'],
        ['lo siento',  'мне жаль'],
      ]},
      { t: 'translate', from: 'Большое спасибо', tiles: ['muchas', 'gracias', 'por', 'favor'], answer: ['muchas', 'gracias'] },
      { t: 'fill', sentence: ['Mucho', null, '.'], target: 'gusto', opts: ['gusto', 'gracias', 'favor'], hint: 'Приятно познакомиться' },
    ],
  },

  // ── 11. La Casa ───────────────────────────────────────
  {
    id: 'l11', name: 'La Casa', emoji: '🏠', desc: 'Habitaciones de la casa',
    exercises: [
      { t: 'pick', q: '«Кухня»', opts: [
        { txt: 'cocina',     em: '🍳' },
        { txt: 'baño',       em: '🚿' },
        { txt: 'sala',       em: '🛋️' },
        { txt: 'dormitorio', em: '🛏️' },
      ], correct: 0 },
      { t: 'pick', q: '«Спальня»', opts: [
        { txt: 'comedor',    em: '🍽️' },
        { txt: 'cocina',     em: '🍳' },
        { txt: 'dormitorio', em: '🛏️' },
        { txt: 'jardín',     em: '🌳' },
      ], correct: 2 },
      { t: 'pick', q: '«Ванная»', opts: [
        { txt: 'sala',  em: '🛋️' },
        { txt: 'baño',  em: '🚿' },
        { txt: 'casa',  em: '🏠' },
        { txt: 'puerta',em: '🚪' },
      ], correct: 1 },
      { t: 'match', pairs: [
        ['casa',       'дом'],
        ['cocina',     'кухня'],
        ['baño',       'ванная'],
        ['dormitorio', 'спальня'],
      ]},
      { t: 'match', pairs: [
        ['sala',     'гостиная'],
        ['comedor',  'столовая'],
        ['puerta',   'дверь'],
        ['ventana',  'окно'],
      ]},
      { t: 'translate', from: 'Моя кухня', tiles: ['mi', 'cocina', 'tu', 'baño'], answer: ['mi', 'cocina'] },
      { t: 'fill', sentence: ['Duermo en el', null, '.'], target: 'dormitorio', opts: ['dormitorio', 'baño', 'comedor'], hint: 'Я сплю в спальне' },
    ],
  },

  // ── 12. El Cuerpo ─────────────────────────────────────
  {
    id: 'l12', name: 'El Cuerpo', emoji: '🧍', desc: 'Partes del cuerpo',
    exercises: [
      { t: 'pick', q: '«Голова»', opts: [
        { txt: 'cabeza', em: '👤' },
        { txt: 'mano',   em: '✋' },
        { txt: 'pie',    em: '🦶' },
        { txt: 'brazo',  em: '💪' },
      ], correct: 0 },
      { t: 'pick', q: '«Глаз»', opts: [
        { txt: 'boca',  em: '👄' },
        { txt: 'nariz', em: '👃' },
        { txt: 'ojo',   em: '👁️' },
        { txt: 'oreja', em: '👂' },
      ], correct: 2 },
      { t: 'pick', q: '«Рука» (кисть)', opts: [
        { txt: 'pierna', em: '🦵' },
        { txt: 'mano',   em: '✋' },
        { txt: 'pelo',   em: '💇' },
        { txt: 'diente', em: '🦷' },
      ], correct: 1 },
      { t: 'match', pairs: [
        ['cabeza', 'голова'],
        ['ojo',    'глаз'],
        ['boca',   'рот'],
        ['nariz',  'нос'],
      ]},
      { t: 'match', pairs: [
        ['mano',    'рука'],
        ['pie',     'нога/стопа'],
        ['brazo',   'рука (плечо)'],
        ['pierna',  'нога'],
      ]},
      { t: 'translate', from: 'Мои глаза', tiles: ['mis', 'ojos', 'mi', 'ojo'], answer: ['mis', 'ojos'] },
      { t: 'fill', sentence: ['Tengo dos', null, '.'], target: 'manos', opts: ['manos', 'mano', 'cabeza'], hint: 'У меня две руки' },
    ],
  },

  // ── 13. La Ropa ───────────────────────────────────────
  {
    id: 'l13', name: 'La Ropa', emoji: '👕', desc: 'Prendas de vestir',
    exercises: [
      { t: 'pick', q: '«Рубашка»', opts: [
        { txt: 'camisa',    em: '👔' },
        { txt: 'pantalón',  em: '👖' },
        { txt: 'zapatos',   em: '👟' },
        { txt: 'sombrero',  em: '🎩' },
      ], correct: 0 },
      { t: 'pick', q: '«Брюки»', opts: [
        { txt: 'falda',     em: '👗' },
        { txt: 'pantalón',  em: '👖' },
        { txt: 'calcetín',  em: '🧦' },
        { txt: 'abrigo',    em: '🧥' },
      ], correct: 1 },
      { t: 'pick', q: '«Туфли/обувь»', opts: [
        { txt: 'gorra',     em: '🧢' },
        { txt: 'guantes',   em: '🧤' },
        { txt: 'zapatos',   em: '👟' },
        { txt: 'bufanda',   em: '🧣' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['camisa',    'рубашка'],
        ['pantalón',  'брюки'],
        ['vestido',   'платье'],
        ['falda',     'юбка'],
      ]},
      { t: 'match', pairs: [
        ['zapatos',   'туфли'],
        ['calcetines','носки'],
        ['abrigo',    'пальто'],
        ['gorra',     'кепка'],
      ]},
      { t: 'translate', from: 'Чёрная рубашка', tiles: ['una', 'camisa', 'negra', 'roja'], answer: ['una', 'camisa', 'negra'], answers: [['una', 'camisa', 'negra'], ['camisa', 'negra']] },
      { t: 'fill', sentence: ['Llevo', null, 'azules.'], target: 'pantalones', opts: ['pantalones', 'camisa', 'falda'], hint: 'Я ношу синие брюки' },
    ],
  },

  // ── 14. El Tiempo ─────────────────────────────────────
  {
    id: 'l14', name: 'El Tiempo', emoji: '🌤️', desc: 'Clima y estaciones',
    exercises: [
      { t: 'pick', q: '«Солнце»', opts: [
        { txt: 'sol',    em: '☀️' },
        { txt: 'luna',   em: '🌙' },
        { txt: 'lluvia', em: '🌧️' },
        { txt: 'viento', em: '💨' },
      ], correct: 0 },
      { t: 'pick', q: '«Дождь»', opts: [
        { txt: 'nieve',  em: '❄️' },
        { txt: 'lluvia', em: '🌧️' },
        { txt: 'nube',   em: '☁️' },
        { txt: 'calor',  em: '🥵' },
      ], correct: 1 },
      { t: 'pick', q: '«Холодно»', opts: [
        { txt: 'calor',  em: '🥵' },
        { txt: 'sol',    em: '☀️' },
        { txt: 'frío',   em: '🥶' },
        { txt: 'lluvia', em: '🌧️' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['sol',     'солнце'],
        ['lluvia',  'дождь'],
        ['nieve',   'снег'],
        ['viento',  'ветер'],
      ]},
      { t: 'match', pairs: [
        ['verano',    'лето'],
        ['invierno',  'зима'],
        ['primavera', 'весна'],
        ['otoño',     'осень'],
      ]},
      { t: 'translate', from: 'Сегодня жарко', tiles: ['hoy', 'hace', 'calor', 'frío'], answer: ['hoy', 'hace', 'calor'] },
      { t: 'fill', sentence: ['En invierno hace', null, '.'], target: 'frío', opts: ['frío', 'calor', 'sol'], hint: 'Зимой холодно' },
    ],
  },

  // ── 15. Los Meses ─────────────────────────────────────
  {
    id: 'l15', name: 'Meses', emoji: '📆', desc: 'Meses del año',
    exercises: [
      { t: 'pick', q: '«Январь»', opts: [
        { txt: 'enero',   em: '1️⃣' },
        { txt: 'febrero', em: '2️⃣' },
        { txt: 'marzo',   em: '3️⃣' },
        { txt: 'abril',   em: '4️⃣' },
      ], correct: 0 },
      { t: 'pick', q: '«Май»', opts: [
        { txt: 'marzo', em: '3️⃣' },
        { txt: 'abril', em: '4️⃣' },
        { txt: 'mayo',  em: '5️⃣' },
        { txt: 'junio', em: '6️⃣' },
      ], correct: 2 },
      { t: 'pick', q: '«Декабрь»', opts: [
        { txt: 'octubre',   em: '🎃' },
        { txt: 'noviembre', em: '🍂' },
        { txt: 'diciembre', em: '🎄' },
        { txt: 'septiembre',em: '📚' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['enero',   'январь'],
        ['febrero', 'февраль'],
        ['marzo',   'март'],
        ['abril',   'апрель'],
      ]},
      { t: 'match', pairs: [
        ['julio',     'июль'],
        ['agosto',    'август'],
        ['septiembre','сентябрь'],
        ['octubre',   'октябрь'],
      ]},
      { t: 'translate', from: 'В июне', tiles: ['en', 'junio', 'julio', 'enero'], answer: ['en', 'junio'] },
      { t: 'fill', sentence: ['Mi cumpleaños es en', null, '.'], target: 'mayo', opts: ['mayo', 'lunes', 'rojo'], hint: 'Мой день рождения в мае' },
    ],
  },

  // ── 16. La Hora ───────────────────────────────────────
  {
    id: 'l16', name: 'La Hora', emoji: '🕐', desc: 'Decir la hora',
    exercises: [
      { t: 'pick', q: '«Час»', opts: [
        { txt: 'hora',    em: '⏰' },
        { txt: 'minuto',  em: '⏱️' },
        { txt: 'día',     em: '☀️' },
        { txt: 'noche',   em: '🌙' },
      ], correct: 0 },
      { t: 'pick', q: '«Сейчас»', opts: [
        { txt: 'después', em: '➡️' },
        { txt: 'ahora',   em: '⏰' },
        { txt: 'antes',   em: '⬅️' },
        { txt: 'tarde',   em: '🌆' },
      ], correct: 1 },
      { t: 'pick', q: '«Утро»', opts: [
        { txt: 'noche',   em: '🌙' },
        { txt: 'tarde',   em: '🌆' },
        { txt: 'mañana',  em: '🌅' },
        { txt: 'medio',   em: '🕛' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['hora',    'час'],
        ['minuto',  'минута'],
        ['mañana',  'утро'],
        ['noche',   'ночь'],
      ]},
      { t: 'match', pairs: [
        ['ahora',     'сейчас'],
        ['después',   'потом'],
        ['temprano',  'рано'],
        ['tarde',     'поздно/вечер'],
      ]},
      { t: 'translate', from: 'Который час?', tiles: ['qué', 'hora', 'es', 'son'], answer: ['qué', 'hora', 'es'] },
      { t: 'fill', sentence: ['Son las', null, '.'], target: 'tres', opts: ['tres', 'tarde', 'lunes'], hint: 'Сейчас три часа' },
    ],
  },

  // ── 17. Lugares ───────────────────────────────────────
  {
    id: 'l17', name: 'Lugares', emoji: '🏙️', desc: 'Lugares de la ciudad',
    exercises: [
      { t: 'pick', q: '«Школа»', opts: [
        { txt: 'escuela',  em: '🏫' },
        { txt: 'tienda',   em: '🏪' },
        { txt: 'hospital', em: '🏥' },
        { txt: 'parque',   em: '🌳' },
      ], correct: 0 },
      { t: 'pick', q: '«Больница»', opts: [
        { txt: 'banco',    em: '🏦' },
        { txt: 'hospital', em: '🏥' },
        { txt: 'iglesia',  em: '⛪' },
        { txt: 'mercado',  em: '🛒' },
      ], correct: 1 },
      { t: 'pick', q: '«Магазин»', opts: [
        { txt: 'parque',  em: '🌳' },
        { txt: 'museo',   em: '🏛️' },
        { txt: 'tienda',  em: '🏪' },
        { txt: 'estación',em: '🚉' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['escuela',  'школа'],
        ['hospital', 'больница'],
        ['tienda',   'магазин'],
        ['parque',   'парк'],
      ]},
      { t: 'match', pairs: [
        ['banco',    'банк'],
        ['iglesia',  'церковь'],
        ['museo',    'музей'],
        ['estación', 'станция'],
      ]},
      { t: 'translate', from: 'Я иду в школу', tiles: ['voy', 'a', 'la', 'escuela', 'casa'], answer: ['voy', 'a', 'la', 'escuela'] },
      { t: 'fill', sentence: ['El médico trabaja en el', null, '.'], target: 'hospital', opts: ['hospital', 'parque', 'banco'], hint: 'Врач работает в больнице' },
    ],
  },

  // ── 18. Profesiones ───────────────────────────────────
  {
    id: 'l18', name: 'Profesiones', emoji: '👷', desc: 'Trabajos y oficios',
    exercises: [
      { t: 'pick', q: '«Учитель»', opts: [
        { txt: 'profesor', em: '👩‍🏫' },
        { txt: 'médico',   em: '👨‍⚕️' },
        { txt: 'cocinero', em: '👨‍🍳' },
        { txt: 'policía',  em: '👮' },
      ], correct: 0 },
      { t: 'pick', q: '«Врач»', opts: [
        { txt: 'cocinero', em: '👨‍🍳' },
        { txt: 'médico',   em: '👨‍⚕️' },
        { txt: 'bombero',  em: '🧑‍🚒' },
        { txt: 'piloto',   em: '✈️' },
      ], correct: 1 },
      { t: 'pick', q: '«Повар»', opts: [
        { txt: 'pintor',   em: '🎨' },
        { txt: 'músico',   em: '🎵' },
        { txt: 'cocinero', em: '👨‍🍳' },
        { txt: 'escritor', em: '📝' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['profesor', 'учитель'],
        ['médico',   'врач'],
        ['policía',  'полицейский'],
        ['bombero',  'пожарный'],
      ]},
      { t: 'match', pairs: [
        ['cocinero', 'повар'],
        ['piloto',   'пилот'],
        ['músico',   'музыкант'],
        ['pintor',   'художник'],
      ]},
      { t: 'translate', from: 'Я учитель', tiles: ['soy', 'profesor', 'yo', 'eres'], answer: ['soy', 'profesor'], answers: [['soy', 'profesor'], ['yo', 'soy', 'profesor']] },
      { t: 'fill', sentence: ['El', null, 'cura a los enfermos.'], target: 'médico', opts: ['médico', 'piloto', 'pintor'], hint: 'Врач лечит больных' },
    ],
  },

  // ── 19. Sentimientos ──────────────────────────────────
  {
    id: 'l19', name: 'Sentimientos', emoji: '😊', desc: 'Cómo te sientes',
    exercises: [
      { t: 'pick', q: '«Счастливый»', opts: [
        { txt: 'feliz',   em: '😊' },
        { txt: 'triste',  em: '😢' },
        { txt: 'enojado', em: '😠' },
        { txt: 'cansado', em: '😴' },
      ], correct: 0 },
      { t: 'pick', q: '«Грустный»', opts: [
        { txt: 'enfermo', em: '🤒' },
        { txt: 'triste',  em: '😢' },
        { txt: 'feliz',   em: '😊' },
        { txt: 'asustado',em: '😨' },
      ], correct: 1 },
      { t: 'pick', q: '«Уставший»', opts: [
        { txt: 'feliz',   em: '😊' },
        { txt: 'enojado', em: '😠' },
        { txt: 'cansado', em: '😴' },
        { txt: 'enfermo', em: '🤒' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['feliz',    'счастливый'],
        ['triste',   'грустный'],
        ['enojado',  'злой'],
        ['cansado',  'уставший'],
      ]},
      { t: 'match', pairs: [
        ['enfermo',   'больной'],
        ['asustado',  'испуганный'],
        ['aburrido',  'скучающий'],
        ['emocionado','взволнованный'],
      ]},
      { t: 'translate', from: 'Я счастлив', tiles: ['estoy', 'feliz', 'triste', 'soy'], answer: ['estoy', 'feliz'] },
      { t: 'fill', sentence: ['Estoy muy', null, '.'], target: 'cansado', opts: ['cansado', 'lunes', 'mesa'], hint: 'Я очень устал' },
    ],
  },

  // ── 20. Naturaleza ────────────────────────────────────
  {
    id: 'l20', name: 'Naturaleza', emoji: '🌳', desc: 'Naturaleza y paisajes',
    exercises: [
      { t: 'pick', q: '«Дерево»', opts: [
        { txt: 'árbol',   em: '🌳' },
        { txt: 'flor',    em: '🌸' },
        { txt: 'piedra',  em: '🪨' },
        { txt: 'río',     em: '🏞️' },
      ], correct: 0 },
      { t: 'pick', q: '«Цветок»', opts: [
        { txt: 'hoja',  em: '🍃' },
        { txt: 'flor',  em: '🌸' },
        { txt: 'sol',   em: '☀️' },
        { txt: 'mar',   em: '🌊' },
      ], correct: 1 },
      { t: 'pick', q: '«Гора»', opts: [
        { txt: 'lago',    em: '🏞️' },
        { txt: 'bosque',  em: '🌲' },
        { txt: 'montaña', em: '⛰️' },
        { txt: 'playa',   em: '🏖️' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['árbol', 'дерево'],
        ['flor',  'цветок'],
        ['hoja',  'лист'],
        ['hierba','трава'],
      ]},
      { t: 'match', pairs: [
        ['mar',     'море'],
        ['río',     'река'],
        ['montaña', 'гора'],
        ['bosque',  'лес'],
      ]},
      { t: 'translate', from: 'Зелёное дерево', tiles: ['un', 'árbol', 'verde', 'rojo'], answer: ['un', 'árbol', 'verde'], answers: [['un', 'árbol', 'verde'], ['árbol', 'verde']] },
      { t: 'fill', sentence: ['El', null, 'es azul.'], target: 'mar', opts: ['mar', 'árbol', 'flor'], hint: 'Море синее' },
    ],
  },

  // ── 21. Verbos II ─────────────────────────────────────
  // Reinforces ser/estar/tener from L9 + introduces querer, poder, ir
  {
    id: 'l21', name: 'Verbos II', emoji: '💪', desc: 'Más verbos esenciales',
    exercises: [
      { t: 'pick', q: '«Хотеть»', opts: [
        { txt: 'querer', em: '💖' },
        { txt: 'poder',  em: '💪' },
        { txt: 'saber',  em: '🧠' },
        { txt: 'venir',  em: '⬅️' },
      ], correct: 0 },
      { t: 'pick', q: '«Идти»', opts: [
        { txt: 'venir', em: '⬅️' },
        { txt: 'ir',    em: '🚶' },
        { txt: 'ver',   em: '👀' },
        { txt: 'estar', em: '📍' },
      ], correct: 1 },
      { t: 'pick', q: '«Иметь»', opts: [
        { txt: 'ser',    em: '🧬' },
        { txt: 'estar',  em: '📍' },
        { txt: 'tener',  em: '✋' },
        { txt: 'hacer',  em: '🔨' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['querer', 'хотеть'],
        ['poder',  'мочь'],
        ['saber',  'знать'],
        ['ver',    'видеть'],
      ]},
      { t: 'match', pairs: [
        ['hacer',  'делать'],
        ['decir',  'говорить (сказать)'],
        ['venir',  'приходить'],
        ['dar',    'давать'],
      ]},
      // Reuse: «yo como pan» pattern from L9
      { t: 'translate', from: 'Я хочу воду', tiles: ['quiero', 'agua', 'yo', 'como'], answer: ['yo', 'quiero', 'agua'], answers: [['yo', 'quiero', 'agua'], ['quiero', 'agua']] },
      { t: 'fill', sentence: ['No', null, 'hablar inglés.'], target: 'puedo', opts: ['puedo', 'tengo', 'soy'], hint: 'Я не могу говорить по-английски' },
    ],
  },

  // ── 22. Adjetivos ─────────────────────────────────────
  {
    id: 'l22', name: 'Adjetivos', emoji: '📏', desc: 'Grande, pequeño, alto…',
    exercises: [
      { t: 'pick', q: '«Большой»', opts: [
        { txt: 'grande',   em: '⬛' },
        { txt: 'pequeño',  em: '◽' },
        { txt: 'alto',     em: '🔼' },
        { txt: 'bajo',     em: '🔽' },
      ], correct: 0 },
      { t: 'pick', q: '«Маленький»', opts: [
        { txt: 'gordo',    em: '🐖' },
        { txt: 'pequeño',  em: '◽' },
        { txt: 'largo',    em: '➡️' },
        { txt: 'corto',    em: '↔️' },
      ], correct: 1 },
      { t: 'pick', q: '«Новый»', opts: [
        { txt: 'viejo',    em: '👴' },
        { txt: 'feo',      em: '🤢' },
        { txt: 'nuevo',    em: '✨' },
        { txt: 'malo',     em: '👎' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['grande',  'большой'],
        ['pequeño', 'маленький'],
        ['alto',    'высокий'],
        ['bajo',    'низкий'],
      ]},
      { t: 'match', pairs: [
        ['bonito',  'красивый'],
        ['feo',     'некрасивый'],
        ['nuevo',   'новый'],
        ['viejo',   'старый'],
      ]},
      // Reuse: rosa roja (L5)
      { t: 'translate', from: 'Большой дом', tiles: ['una', 'casa', 'grande', 'pequeña'], answer: ['una', 'casa', 'grande'], answers: [['una', 'casa', 'grande'], ['casa', 'grande']] },
      { t: 'fill', sentence: ['El elefante es muy', null, '.'], target: 'grande', opts: ['grande', 'pequeño', 'corto'], hint: 'Слон очень большой' },
    ],
  },

  // ── 23. Repaso 1 (revisión de L1-L5) ──────────────────
  // REVIEW LESSON: mixes Saludos / Yo soy / Familia / Números / Colores
  {
    id: 'l23', name: 'Repaso 1', emoji: '🔁', desc: 'Repasa lo aprendido (1-5)',
    exercises: [
      // From L1
      { t: 'pick', q: '«Привет»', opts: [
        { txt: 'hola',    em: '👋' },
        { txt: 'gracias', em: '🙏' },
        { txt: 'adiós',   em: '🙋' },
        { txt: 'perdón',  em: '🙇' },
      ], correct: 0 },
      // From L4
      { t: 'pick', q: '«7» (семь)', opts: [
        { txt: 'cinco',  em: '5️⃣' },
        { txt: 'seis',   em: '6️⃣' },
        { txt: 'siete',  em: '7️⃣' },
        { txt: 'ocho',   em: '8️⃣' },
      ], correct: 2 },
      // From L5
      { t: 'pick', q: '«Зелёный»', opts: [
        { txt: 'azul',  em: '🔵' },
        { txt: 'verde', em: '🟢' },
        { txt: 'rojo',  em: '🔴' },
        { txt: 'negro', em: '⚫' },
      ], correct: 1 },
      // Mix family + colors
      { t: 'match', pairs: [
        ['madre',  'мама'],
        ['padre',  'папа'],
        ['rojo',   'красный'],
        ['azul',   'синий'],
      ]},
      // Mix numbers + greetings
      { t: 'match', pairs: [
        ['hola',   'привет'],
        ['adiós',  'пока'],
        ['uno',    'один'],
        ['dos',    'два'],
      ]},
      // From L2 (with multi-answer)
      { t: 'translate', from: 'Я Денис', tiles: ['yo', 'soy', 'Denis', 'eres'], answer: ['yo', 'soy', 'Denis'], answers: [['yo', 'soy', 'Denis'], ['soy', 'Denis']] },
      // From L1
      { t: 'fill', sentence: ['Buenos', null, '.'], target: 'días', opts: ['días', 'tardes', 'noches'], hint: 'Доброе утро' },
    ],
  },

  // ── 24. Preguntas ─────────────────────────────────────
  {
    id: 'l24', name: 'Preguntas', emoji: '❓', desc: 'Qué, quién, dónde, cuándo',
    exercises: [
      { t: 'pick', q: '«Что?»', opts: [
        { txt: '¿qué?',     em: '❓' },
        { txt: '¿quién?',   em: '👤' },
        { txt: '¿dónde?',   em: '📍' },
        { txt: '¿cuándo?',  em: '⏰' },
      ], correct: 0 },
      { t: 'pick', q: '«Где?»', opts: [
        { txt: '¿cómo?',   em: '🤔' },
        { txt: '¿dónde?',  em: '📍' },
        { txt: '¿por qué?',em: '🧐' },
        { txt: '¿cuánto?', em: '🔢' },
      ], correct: 1 },
      { t: 'pick', q: '«Кто?»', opts: [
        { txt: '¿qué?',   em: '❓' },
        { txt: '¿cuál?',  em: '🔀' },
        { txt: '¿quién?', em: '👤' },
        { txt: '¿cómo?',  em: '🤔' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['qué',     'что'],
        ['quién',   'кто'],
        ['dónde',   'где'],
        ['cuándo',  'когда'],
      ]},
      { t: 'match', pairs: [
        ['cómo',    'как'],
        ['por qué', 'почему'],
        ['cuánto',  'сколько'],
        ['cuál',    'какой'],
      ]},
      // Reuse "¿Cómo te llamas?" pattern (L2)
      { t: 'translate', from: 'Где ты?', tiles: ['dónde', 'estás', 'tú', 'cómo'], answer: ['dónde', 'estás'], answers: [['dónde', 'estás'], ['dónde', 'estás', 'tú']] },
      { t: 'fill', sentence: ['¿', null, 'te llamas?'], target: 'cómo', opts: ['cómo', 'qué', 'dónde'], hint: 'Как тебя зовут?' },
    ],
  },

  // ── 25. Frutas ────────────────────────────────────────
  // Reuses manzana from L6
  {
    id: 'l25', name: 'Frutas', emoji: '🍎', desc: 'Frutas comunes',
    exercises: [
      // Reuse from L6
      { t: 'pick', q: '«Яблоко»', opts: [
        { txt: 'manzana',  em: '🍎' },
        { txt: 'plátano',  em: '🍌' },
        { txt: 'naranja',  em: '🍊' },
        { txt: 'uva',      em: '🍇' },
      ], correct: 0 },
      { t: 'pick', q: '«Банан»', opts: [
        { txt: 'pera',     em: '🍐' },
        { txt: 'plátano',  em: '🍌' },
        { txt: 'fresa',    em: '🍓' },
        { txt: 'sandía',   em: '🍉' },
      ], correct: 1 },
      { t: 'pick', q: '«Апельсин»', opts: [
        { txt: 'limón',    em: '🍋' },
        { txt: 'piña',     em: '🍍' },
        { txt: 'naranja',  em: '🍊' },
        { txt: 'cereza',   em: '🍒' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['manzana', 'яблоко'],
        ['plátano', 'банан'],
        ['naranja', 'апельсин'],
        ['uva',     'виноград'],
      ]},
      { t: 'match', pairs: [
        ['fresa',   'клубника'],
        ['limón',   'лимон'],
        ['sandía',  'арбуз'],
        ['piña',    'ананас'],
      ]},
      // Reuse "Como una manzana" pattern (L6)
      { t: 'translate', from: 'Я ем банан', tiles: ['yo', 'como', 'un', 'plátano', 'manzana'], answer: ['como', 'un', 'plátano'], answers: [['como', 'un', 'plátano'], ['yo', 'como', 'un', 'plátano']] },
      { t: 'fill', sentence: ['La', null, 'es roja.'], target: 'manzana', opts: ['manzana', 'plátano', 'limón'], hint: 'Яблоко красное' },
    ],
  },

  // ── 26. Transporte ────────────────────────────────────
  {
    id: 'l26', name: 'Transporte', emoji: '🚗', desc: 'Vehículos y viajes',
    exercises: [
      { t: 'pick', q: '«Машина»', opts: [
        { txt: 'coche',    em: '🚗' },
        { txt: 'autobús',  em: '🚌' },
        { txt: 'tren',     em: '🚆' },
        { txt: 'avión',    em: '✈️' },
      ], correct: 0 },
      { t: 'pick', q: '«Самолёт»', opts: [
        { txt: 'barco',  em: '🚢' },
        { txt: 'avión',  em: '✈️' },
        { txt: 'moto',   em: '🏍️' },
        { txt: 'taxi',   em: '🚕' },
      ], correct: 1 },
      { t: 'pick', q: '«Велосипед»', opts: [
        { txt: 'tren',     em: '🚆' },
        { txt: 'autobús',  em: '🚌' },
        { txt: 'bicicleta',em: '🚲' },
        { txt: 'metro',    em: '🚇' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['coche',    'машина'],
        ['autobús',  'автобус'],
        ['tren',     'поезд'],
        ['avión',    'самолёт'],
      ]},
      { t: 'match', pairs: [
        ['bicicleta','велосипед'],
        ['barco',    'корабль'],
        ['moto',     'мотоцикл'],
        ['taxi',     'такси'],
      ]},
      // Reuse "voy a la escuela" (L17)
      { t: 'translate', from: 'Я еду на машине', tiles: ['voy', 'en', 'coche', 'a'], answer: ['voy', 'en', 'coche'] },
      { t: 'fill', sentence: ['El', null, 'es rápido.'], target: 'tren', opts: ['tren', 'casa', 'pan'], hint: 'Поезд быстрый' },
    ],
  },

  // ── 27. Repaso 2 (revisión de L6-L10) ─────────────────
  // REVIEW LESSON
  {
    id: 'l27', name: 'Repaso 2', emoji: '🔁', desc: 'Repasa lo aprendido (6-10)',
    exercises: [
      // From L6
      { t: 'pick', q: '«Вода»', opts: [
        { txt: 'leche', em: '🥛' },
        { txt: 'agua',  em: '💧' },
        { txt: 'café',  em: '☕' },
        { txt: 'té',    em: '🍵' },
      ], correct: 1 },
      // From L7
      { t: 'pick', q: '«Кот»', opts: [
        { txt: 'perro', em: '🐶' },
        { txt: 'pez',   em: '🐟' },
        { txt: 'gato',  em: '🐱' },
        { txt: 'vaca',  em: '🐮' },
      ], correct: 2 },
      // From L8
      { t: 'pick', q: '«Пятница»', opts: [
        { txt: 'viernes',  em: '5️⃣' },
        { txt: 'sábado',   em: '6️⃣' },
        { txt: 'lunes',    em: '1️⃣' },
        { txt: 'jueves',   em: '4️⃣' },
      ], correct: 0 },
      // Mix verbs + food
      { t: 'match', pairs: [
        ['comer',  'есть'],
        ['beber',  'пить'],
        ['pan',    'хлеб'],
        ['agua',   'вода'],
      ]},
      // Mix days + phrases
      { t: 'match', pairs: [
        ['gracias',   'спасибо'],
        ['por favor', 'пожалуйста'],
        ['hoy',       'сегодня'],
        ['lunes',     'понедельник'],
      ]},
      // Reuse from L6 (with multi-answer)
      { t: 'translate', from: 'Я пью воду', tiles: ['yo', 'bebo', 'agua', 'como'], answer: ['yo', 'bebo', 'agua'], answers: [['yo', 'bebo', 'agua'], ['bebo', 'agua']] },
      // From L7
      { t: 'fill', sentence: ['Tengo un', null, '.'], target: 'perro', opts: ['perro', 'lunes', 'pan'], hint: 'У меня собака' },
    ],
  },

  // ── 28. Posiciones ────────────────────────────────────
  // Where things are: en/sobre/debajo/al lado
  {
    id: 'l28', name: 'Posiciones', emoji: '📍', desc: 'Dónde está…',
    exercises: [
      { t: 'pick', q: '«В / внутри»', opts: [
        { txt: 'en',     em: '📦' },
        { txt: 'sobre',  em: '⬆️' },
        { txt: 'debajo', em: '⬇️' },
        { txt: 'cerca',  em: '↔️' },
      ], correct: 0 },
      { t: 'pick', q: '«Под»', opts: [
        { txt: 'sobre',   em: '⬆️' },
        { txt: 'debajo',  em: '⬇️' },
        { txt: 'detrás',  em: '🔙' },
        { txt: 'delante', em: '🔜' },
      ], correct: 1 },
      { t: 'pick', q: '«Между»', opts: [
        { txt: 'lejos',  em: '🌍' },
        { txt: 'cerca',  em: '↔️' },
        { txt: 'entre',  em: '↔️' },
        { txt: 'aquí',   em: '📍' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['en',     'в'],
        ['sobre',  'на'],
        ['debajo', 'под'],
        ['entre',  'между'],
      ]},
      { t: 'match', pairs: [
        ['cerca',   'близко'],
        ['lejos',   'далеко'],
        ['aquí',    'здесь'],
        ['allí',    'там'],
      ]},
      // Reuse: cocina from L11
      { t: 'translate', from: 'Кот в кухне', tiles: ['el', 'gato', 'está', 'en', 'la', 'cocina'], answer: ['el', 'gato', 'está', 'en', 'la', 'cocina'] },
      { t: 'fill', sentence: ['El libro está', null, 'la mesa.'], target: 'sobre', opts: ['sobre', 'aquí', 'lejos'], hint: 'Книга на столе' },
    ],
  },

  // ── 29. Conversación ──────────────────────────────────
  // Reuses L1 (saludos), L2 (yo soy), L3 (familia)
  {
    id: 'l29', name: 'Conversación', emoji: '💬', desc: 'Frases para conocer gente',
    exercises: [
      // Reuse from L10
      { t: 'pick', q: '«Приятно познакомиться»', opts: [
        { txt: 'mucho gusto',  em: '🤝' },
        { txt: 'lo siento',    em: '😔' },
        { txt: 'salud',        em: '🥂' },
        { txt: 'hasta luego',  em: '👋' },
      ], correct: 0 },
      { t: 'pick', q: '«Откуда ты?»', opts: [
        { txt: '¿adónde vas?',  em: '➡️' },
        { txt: '¿de dónde eres?',em: '🌍' },
        { txt: '¿qué haces?',   em: '🤔' },
        { txt: '¿cómo estás?',  em: '😊' },
      ], correct: 1 },
      { t: 'pick', q: '«Сколько тебе лет?»', opts: [
        { txt: '¿qué hora es?',         em: '⏰' },
        { txt: '¿cómo te llamas?',      em: '👤' },
        { txt: '¿cuántos años tienes?', em: '🎂' },
        { txt: '¿dónde vives?',         em: '🏠' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['mucho gusto',     'приятно познакомиться'],
        ['¿de dónde eres?', 'откуда ты?'],
        ['¿cómo estás?',    'как дела?'],
        ['hasta luego',     'до свидания'],
      ]},
      { t: 'match', pairs: [
        ['¿cómo te llamas?', 'как тебя зовут?'],
        ['me llamo',         'меня зовут'],
        ['soy de',           'я из'],
        ['vivo en',          'я живу в'],
      ]},
      // Reuse: «Меня зовут Ана» (L2) — now also accepts "Soy Ana"
      { t: 'translate', from: 'Меня зовут Ана', tiles: ['me', 'llamo', 'Ana', 'soy', 'tú'], answer: ['me', 'llamo', 'Ana'], answers: [['me', 'llamo', 'Ana'], ['soy', 'Ana']] },
      { t: 'fill', sentence: ['Soy', null, 'Rusia.'], target: 'de', opts: ['de', 'en', 'a'], hint: 'Я из России' },
    ],
  },

  // ── 30. Repaso final (L11-L20) ────────────────────────
  // REVIEW LESSON: mixes Casa, Cuerpo, Ropa, Tiempo, Meses, Hora, Lugares, Profesiones, Sentimientos, Naturaleza
  {
    id: 'l30', name: 'Repaso 3', emoji: '🔁', desc: 'Repasa lecciones 11-20',
    exercises: [
      // From L11
      { t: 'pick', q: '«Кухня»', opts: [
        { txt: 'cocina',     em: '🍳' },
        { txt: 'baño',       em: '🚿' },
        { txt: 'sala',       em: '🛋️' },
        { txt: 'jardín',     em: '🌳' },
      ], correct: 0 },
      // From L14
      { t: 'pick', q: '«Дождь»', opts: [
        { txt: 'sol',     em: '☀️' },
        { txt: 'lluvia',  em: '🌧️' },
        { txt: 'nieve',   em: '❄️' },
        { txt: 'viento',  em: '💨' },
      ], correct: 1 },
      // From L18
      { t: 'pick', q: '«Учитель»', opts: [
        { txt: 'cocinero', em: '👨‍🍳' },
        { txt: 'médico',   em: '👨‍⚕️' },
        { txt: 'profesor', em: '👩‍🏫' },
        { txt: 'piloto',   em: '✈️' },
      ], correct: 2 },
      // Mix house + clothes
      { t: 'match', pairs: [
        ['casa',     'дом'],
        ['cocina',   'кухня'],
        ['camisa',   'рубашка'],
        ['zapatos',  'туфли'],
      ]},
      // Mix nature + body
      { t: 'match', pairs: [
        ['árbol',  'дерево'],
        ['flor',   'цветок'],
        ['cabeza', 'голова'],
        ['mano',   'рука'],
      ]},
      // Reuse from L19
      { t: 'translate', from: 'Я счастлив', tiles: ['estoy', 'feliz', 'triste', 'soy'], answer: ['estoy', 'feliz'] },
      // From L16
      { t: 'fill', sentence: ['¿Qué', null, 'es?'], target: 'hora', opts: ['hora', 'casa', 'mar'], hint: 'Который час?' },
    ],
  },

  // ── 31. Números 11-20 ─────────────────────────────────
  {
    id: 'l31', name: 'Números 11-20', emoji: '🔢', desc: 'Cuenta hasta veinte',
    exercises: [
      { t: 'pick', q: '«11» (одиннадцать)', opts: [
        { txt: 'once',     em: '1️⃣1️⃣' },
        { txt: 'doce',     em: '1️⃣2️⃣' },
        { txt: 'trece',    em: '1️⃣3️⃣' },
        { txt: 'catorce',  em: '1️⃣4️⃣' },
      ], correct: 0 },
      { t: 'pick', q: '«15» (пятнадцать)', opts: [
        { txt: 'doce',       em: '1️⃣2️⃣' },
        { txt: 'quince',     em: '1️⃣5️⃣' },
        { txt: 'dieciséis',  em: '1️⃣6️⃣' },
        { txt: 'diecisiete', em: '1️⃣7️⃣' },
      ], correct: 1 },
      { t: 'pick', q: '«20» (двадцать)', opts: [
        { txt: 'dieciocho',  em: '1️⃣8️⃣' },
        { txt: 'diecinueve', em: '1️⃣9️⃣' },
        { txt: 'veinte',     em: '2️⃣0️⃣' },
        { txt: 'treinta',    em: '3️⃣0️⃣' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['once',    'одиннадцать'],
        ['doce',    'двенадцать'],
        ['trece',   'тринадцать'],
        ['catorce', 'четырнадцать'],
      ]},
      { t: 'match', pairs: [
        ['quince',     'пятнадцать'],
        ['dieciséis',  'шестнадцать'],
        ['diecisiete', 'семнадцать'],
        ['veinte',     'двадцать'],
      ]},
      { t: 'translate', from: 'У меня двенадцать яблок', tiles: ['tengo', 'doce', 'manzanas', 'dos'], answer: ['tengo', 'doce', 'manzanas'] },
      { t: 'fill', sentence: ['Tengo', null, 'años.'], target: 'quince', opts: ['quince', 'rojo', 'mesa'], hint: 'Мне 15 лет' },
    ],
  },

  // ── 32. Acciones diarias ──────────────────────────────
  {
    id: 'l32', name: 'Acciones', emoji: '🏃', desc: 'Acciones del día a día',
    exercises: [
      { t: 'pick', q: '«Спать»', opts: [
        { txt: 'dormir',  em: '😴' },
        { txt: 'caminar', em: '🚶' },
        { txt: 'correr',  em: '🏃' },
        { txt: 'saltar',  em: '🤸' },
      ], correct: 0 },
      { t: 'pick', q: '«Читать»', opts: [
        { txt: 'escribir', em: '✍️' },
        { txt: 'leer',     em: '📖' },
        { txt: 'ver',      em: '👀' },
        { txt: 'oír',      em: '👂' },
      ], correct: 1 },
      { t: 'pick', q: '«Бежать»', opts: [
        { txt: 'caminar', em: '🚶' },
        { txt: 'nadar',   em: '🏊' },
        { txt: 'correr',  em: '🏃' },
        { txt: 'saltar',  em: '🤸' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['dormir',   'спать'],
        ['leer',     'читать'],
        ['escribir', 'писать'],
        ['ver',      'видеть'],
      ]},
      { t: 'match', pairs: [
        ['correr',  'бежать'],
        ['caminar', 'ходить'],
        ['saltar',  'прыгать'],
        ['nadar',   'плавать'],
      ]},
      { t: 'translate', from: 'Я читаю книгу', tiles: ['yo', 'leo', 'un', 'libro', 'como'], answer: ['yo', 'leo', 'un', 'libro'], answers: [['yo', 'leo', 'un', 'libro'], ['leo', 'un', 'libro']] },
      { t: 'fill', sentence: ['Por la noche yo', null, '.'], target: 'duermo', opts: ['duermo', 'corro', 'salto'], hint: 'Ночью я сплю' },
    ],
  },

  // ── 33. Salud ─────────────────────────────────────────
  {
    id: 'l33', name: 'Salud', emoji: '🩺', desc: 'Médico y enfermedades',
    exercises: [
      { t: 'pick', q: '«Больной»', opts: [
        { txt: 'enfermo', em: '🤒' },
        { txt: 'sano',    em: '💪' },
        { txt: 'fuerte',  em: '🦾' },
        { txt: 'débil',   em: '🥱' },
      ], correct: 0 },
      { t: 'pick', q: '«Лекарство»', opts: [
        { txt: 'venda',     em: '🩹' },
        { txt: 'medicina',  em: '💊' },
        { txt: 'inyección', em: '💉' },
        { txt: 'fiebre',    em: '🌡️' },
      ], correct: 1 },
      { t: 'pick', q: '«Температура»', opts: [
        { txt: 'tos',    em: '😷' },
        { txt: 'gripe',  em: '🤧' },
        { txt: 'fiebre', em: '🌡️' },
        { txt: 'dolor',  em: '😣' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['enfermo', 'больной'],
        ['sano',    'здоровый'],
        ['dolor',   'боль'],
        ['fiebre',  'температура'],
      ]},
      { t: 'match', pairs: [
        ['medicina', 'лекарство'],
        ['tos',      'кашель'],
        ['gripe',    'грипп'],
        ['venda',    'бинт'],
      ]},
      // Reuse: cabeza from L12
      { t: 'translate', from: 'У меня болит голова', tiles: ['me', 'duele', 'la', 'cabeza', 'mano'], answer: ['me', 'duele', 'la', 'cabeza'] },
      { t: 'fill', sentence: ['Tomo la', null, '.'], target: 'medicina', opts: ['medicina', 'casa', 'flor'], hint: 'Я принимаю лекарство' },
    ],
  },

  // ── 34. Países ────────────────────────────────────────
  {
    id: 'l34', name: 'Países', emoji: '🌍', desc: 'Países y nacionalidades',
    exercises: [
      { t: 'pick', q: '«Россия»', opts: [
        { txt: 'Rusia',   em: '🇷🇺' },
        { txt: 'España',  em: '🇪🇸' },
        { txt: 'México',  em: '🇲🇽' },
        { txt: 'Francia', em: '🇫🇷' },
      ], correct: 0 },
      { t: 'pick', q: '«Испания»', opts: [
        { txt: 'Italia', em: '🇮🇹' },
        { txt: 'España', em: '🇪🇸' },
        { txt: 'Brasil', em: '🇧🇷' },
        { txt: 'China',  em: '🇨🇳' },
      ], correct: 1 },
      { t: 'pick', q: '«Я русский»', opts: [
        { txt: 'soy español',  em: '🇪🇸' },
        { txt: 'soy mexicano', em: '🇲🇽' },
        { txt: 'soy ruso',     em: '🇷🇺' },
        { txt: 'soy alemán',   em: '🇩🇪' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['Rusia',    'Россия'],
        ['España',   'Испания'],
        ['Francia',  'Франция'],
        ['Alemania', 'Германия'],
      ]},
      { t: 'match', pairs: [
        ['ruso',     'русский'],
        ['español',  'испанец'],
        ['mexicano', 'мексиканец'],
        ['inglés',   'англичанин'],
      ]},
      // Reuse «Я из России» pattern (L29 used "Soy de Rusia")
      { t: 'translate', from: 'Я из России', tiles: ['soy', 'de', 'Rusia', 'en'], answer: ['soy', 'de', 'Rusia'] },
      { t: 'fill', sentence: ['Vivo en', null, '.'], target: 'España', opts: ['España', 'rojo', 'tres'], hint: 'Я живу в Испании' },
    ],
  },

  // ── 35. Repaso 4 (revisión de L21-L30) ────────────────
  // REVIEW LESSON: mixes Verbos II, Adjetivos, Preguntas, Frutas, Transporte, Posiciones, Conversación
  {
    id: 'l35', name: 'Repaso 4', emoji: '🔁', desc: 'Repasa lecciones 21-30',
    exercises: [
      // From L24 (preguntas)
      { t: 'pick', q: '«Где?»', opts: [
        { txt: '¿qué?',   em: '❓' },
        { txt: '¿dónde?', em: '📍' },
        { txt: '¿quién?', em: '👤' },
        { txt: '¿cómo?',  em: '🤔' },
      ], correct: 1 },
      // From L25 (frutas)
      { t: 'pick', q: '«Клубника»', opts: [
        { txt: 'fresa',   em: '🍓' },
        { txt: 'uva',     em: '🍇' },
        { txt: 'pera',    em: '🍐' },
        { txt: 'naranja', em: '🍊' },
      ], correct: 0 },
      // From L26 (transporte)
      { t: 'pick', q: '«Самолёт»', opts: [
        { txt: 'tren',  em: '🚆' },
        { txt: 'avión', em: '✈️' },
        { txt: 'barco', em: '🚢' },
        { txt: 'moto',  em: '🏍️' },
      ], correct: 1 },
      // Mix preguntas + posiciones
      { t: 'match', pairs: [
        ['qué',   'что'],
        ['dónde', 'где'],
        ['en',    'в'],
        ['sobre', 'на'],
      ]},
      // Mix verbos II + adjetivos
      { t: 'match', pairs: [
        ['querer', 'хотеть'],
        ['poder',  'мочь'],
        ['grande', 'большой'],
        ['nuevo',  'новый'],
      ]},
      // From L29 (conversación)
      { t: 'translate', from: 'Меня зовут Ана', tiles: ['me', 'llamo', 'Ana', 'soy'], answer: ['me', 'llamo', 'Ana'], answers: [['me', 'llamo', 'Ana'], ['soy', 'Ana']] },
      // From L24
      { t: 'fill', sentence: ['¿', null, 'te llamas?'], target: 'cómo', opts: ['cómo', 'qué', 'dónde'], hint: 'Как тебя зовут?' },
    ],
  },

  // ── 36. Música y Arte ─────────────────────────────────
  {
    id: 'l36', name: 'Música y Arte', emoji: '🎵', desc: 'Música, pintura, instrumentos',
    exercises: [
      { t: 'pick', q: '«Музыка»', opts: [
        { txt: 'música',  em: '🎵' },
        { txt: 'pintura', em: '🎨' },
        { txt: 'canción', em: '🎤' },
        { txt: 'baile',   em: '💃' },
      ], correct: 0 },
      { t: 'pick', q: '«Гитара»', opts: [
        { txt: 'piano',    em: '🎹' },
        { txt: 'guitarra', em: '🎸' },
        { txt: 'violín',   em: '🎻' },
        { txt: 'tambor',   em: '🥁' },
      ], correct: 1 },
      { t: 'pick', q: '«Картина»', opts: [
        { txt: 'lápiz',  em: '✏️' },
        { txt: 'pincel', em: '🖌️' },
        { txt: 'cuadro', em: '🖼️' },
        { txt: 'cámara', em: '📷' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['música',   'музыка'],
        ['canción',  'песня'],
        ['baile',    'танец'],
        ['cantante', 'певец'],
      ]},
      { t: 'match', pairs: [
        ['guitarra', 'гитара'],
        ['piano',    'пианино'],
        ['violín',   'скрипка'],
        ['cuadro',   'картина'],
      ]},
      { t: 'translate', from: 'Я играю на гитаре', tiles: ['toco', 'la', 'guitarra', 'piano'], answer: ['toco', 'la', 'guitarra'] },
      { t: 'fill', sentence: ['Escucho la', null, '.'], target: 'música', opts: ['música', 'casa', 'mano'], hint: 'Я слушаю музыку' },
    ],
  },

  // ── 37. Tecnología ────────────────────────────────────
  {
    id: 'l37', name: 'Tecnología', emoji: '📱', desc: 'Teléfono, internet, redes',
    exercises: [
      { t: 'pick', q: '«Телефон»', opts: [
        { txt: 'teléfono',  em: '📱' },
        { txt: 'ordenador', em: '💻' },
        { txt: 'pantalla',  em: '📺' },
        { txt: 'teclado',   em: '⌨️' },
      ], correct: 0 },
      { t: 'pick', q: '«Интернет»', opts: [
        { txt: 'correo',   em: '📧' },
        { txt: 'internet', em: '🌐' },
        { txt: 'archivo',  em: '📁' },
        { txt: 'red',      em: '🕸️' },
      ], correct: 1 },
      { t: 'pick', q: '«Сообщение»', opts: [
        { txt: 'llamada', em: '📞' },
        { txt: 'video',   em: '📹' },
        { txt: 'mensaje', em: '💬' },
        { txt: 'foto',    em: '📷' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['teléfono',  'телефон'],
        ['ordenador', 'компьютер'],
        ['internet',  'интернет'],
        ['pantalla',  'экран'],
      ]},
      { t: 'match', pairs: [
        ['mensaje',   'сообщение'],
        ['llamada',   'звонок'],
        ['correo',    'почта'],
        ['contraseña','пароль'],
      ]},
      // Reuse «nuevo» from L22
      { t: 'translate', from: 'У меня новый телефон', tiles: ['tengo', 'un', 'teléfono', 'nuevo', 'viejo'], answer: ['tengo', 'un', 'teléfono', 'nuevo'] },
      { t: 'fill', sentence: ['Mando un', null, '.'], target: 'mensaje', opts: ['mensaje', 'árbol', 'queso'], hint: 'Я отправляю сообщение' },
    ],
  },

  // ── 38. Tiempo libre ──────────────────────────────────
  {
    id: 'l38', name: 'Tiempo libre', emoji: '🎮', desc: 'Hobbies y diversión',
    exercises: [
      { t: 'pick', q: '«Игра»', opts: [
        { txt: 'juego',    em: '🎮' },
        { txt: 'película', em: '🎬' },
        { txt: 'libro',    em: '📖' },
        { txt: 'viaje',    em: '✈️' },
      ], correct: 0 },
      { t: 'pick', q: '«Фильм»', opts: [
        { txt: 'canción',  em: '🎵' },
        { txt: 'película', em: '🎬' },
        { txt: 'pintura',  em: '🎨' },
        { txt: 'baile',    em: '💃' },
      ], correct: 1 },
      { t: 'pick', q: '«Путешествие»', opts: [
        { txt: 'fiesta', em: '🎉' },
        { txt: 'paseo',  em: '🚶' },
        { txt: 'viaje',  em: '✈️' },
        { txt: 'sueño',  em: '💤' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['juego',    'игра'],
        ['película', 'фильм'],
        ['viaje',    'путешествие'],
        ['fiesta',   'вечеринка'],
      ]},
      { t: 'match', pairs: [
        ['jugar',  'играть'],
        ['mirar',  'смотреть'],
        ['viajar', 'путешествовать'],
        ['bailar', 'танцевать'],
      ]},
      { t: 'translate', from: 'Я смотрю фильм', tiles: ['veo', 'una', 'película', 'libro'], answer: ['veo', 'una', 'película'] },
      { t: 'fill', sentence: ['Me gusta', null, '.'], target: 'bailar', opts: ['bailar', 'casa', 'verde'], hint: 'Мне нравится танцевать' },
    ],
  },

  // ── 39. Pasado simple ─────────────────────────────────
  {
    id: 'l39', name: 'Pasado', emoji: '⏪', desc: 'Hablar del ayer',
    exercises: [
      { t: 'pick', q: '«Вчера»', opts: [
        { txt: 'ayer',   em: '⏪' },
        { txt: 'hoy',    em: '📅' },
        { txt: 'mañana', em: '⏩' },
        { txt: 'ahora',  em: '⏰' },
      ], correct: 0 },
      { t: 'pick', q: '«Я был / пошёл»', opts: [
        { txt: 'soy',  em: '🧬' },
        { txt: 'fui',  em: '⏪' },
        { txt: 'era',  em: '🕰️' },
        { txt: 'eres', em: '👉' },
      ], correct: 1 },
      { t: 'pick', q: '«Я ел / съел»', opts: [
        { txt: 'como',   em: '🍽️' },
        { txt: 'comeré', em: '⏩' },
        { txt: 'comí',   em: '⏪' },
        { txt: 'comer',  em: '🍴' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['ayer',     'вчера'],
        ['anteayer', 'позавчера'],
        ['anoche',   'вчера ночью'],
        ['antes',    'раньше'],
      ]},
      { t: 'match', pairs: [
        ['fui',   'я был / я пошёл'],
        ['comí',  'я ел'],
        ['bebí',  'я пил'],
        ['hablé', 'я говорил'],
      ]},
      { t: 'translate', from: 'Вчера я ел хлеб', tiles: ['ayer', 'comí', 'pan', 'como'], answer: ['ayer', 'comí', 'pan'] },
      { t: 'fill', sentence: ['Ayer', null, 'al parque.'], target: 'fui', opts: ['fui', 'voy', 'eres'], hint: 'Вчера я пошёл в парк' },
    ],
  },

  // ── 40. Repaso 5 (revisión de L31-L39) ────────────────
  // REVIEW LESSON: mixes Números, Acciones, Salud, Países, Música, Tecnología, Tiempo libre, Pasado
  {
    id: 'l40', name: 'Repaso 5', emoji: '🏆', desc: 'Repaso final (31-39)',
    exercises: [
      // From L31
      { t: 'pick', q: '«13» (тринадцать)', opts: [
        { txt: 'doce',    em: '1️⃣2️⃣' },
        { txt: 'trece',   em: '1️⃣3️⃣' },
        { txt: 'catorce', em: '1️⃣4️⃣' },
        { txt: 'quince',  em: '1️⃣5️⃣' },
      ], correct: 1 },
      // From L33
      { t: 'pick', q: '«Лекарство»', opts: [
        { txt: 'fiebre',   em: '🌡️' },
        { txt: 'tos',      em: '😷' },
        { txt: 'medicina', em: '💊' },
        { txt: 'venda',    em: '🩹' },
      ], correct: 2 },
      // From L36
      { t: 'pick', q: '«Гитара»', opts: [
        { txt: 'guitarra', em: '🎸' },
        { txt: 'piano',    em: '🎹' },
        { txt: 'violín',   em: '🎻' },
        { txt: 'tambor',   em: '🥁' },
      ], correct: 0 },
      // Mix países + tecnología
      { t: 'match', pairs: [
        ['Rusia',    'Россия'],
        ['España',   'Испания'],
        ['teléfono', 'телефон'],
        ['internet', 'интернет'],
      ]},
      // Mix acciones + tiempo libre
      { t: 'match', pairs: [
        ['dormir',   'спать'],
        ['leer',     'читать'],
        ['película', 'фильм'],
        ['juego',    'игра'],
      ]},
      // From L39
      { t: 'translate', from: 'Вчера я ел хлеб', tiles: ['ayer', 'comí', 'pan', 'como'], answer: ['ayer', 'comí', 'pan'] },
      // From L34
      { t: 'fill', sentence: ['Soy de', null, '.'], target: 'Rusia', opts: ['Rusia', 'mesa', 'tres'], hint: 'Я из России' },
    ],
  },

  // ── 41. Posesivos ─────────────────────────────────────
  {
    id: 'l41', name: 'Posesivos', emoji: '🔑', desc: 'Mi, tu, su, nuestro…',
    exercises: [
      { t: 'pick', q: '«Мой»', opts: [
        { txt: 'mi',       em: '👤' },
        { txt: 'tu',       em: '👉' },
        { txt: 'su',       em: '👨' },
        { txt: 'nuestro',  em: '👥' },
      ], correct: 0 },
      { t: 'pick', q: '«Твой»', opts: [
        { txt: 'mi',       em: '👤' },
        { txt: 'tu',       em: '👉' },
        { txt: 'su',       em: '👨' },
        { txt: 'vuestro',  em: '👥' },
      ], correct: 1 },
      { t: 'pick', q: '«Наш»', opts: [
        { txt: 'mi',       em: '👤' },
        { txt: 'su',       em: '👨' },
        { txt: 'nuestro',  em: '👥' },
        { txt: 'vuestro',  em: '👥' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['mi',       'мой'],
        ['tu',       'твой'],
        ['su',       'его/её'],
        ['nuestro',  'наш'],
      ]},
      // Reuse familia from L3
      { t: 'match', pairs: [
        ['mi madre',    'моя мама'],
        ['mi padre',    'мой папа'],
        ['mi hermano',  'мой брат'],
        ['mi hermana',  'моя сестра'],
      ]},
      { t: 'translate', from: 'Моя мама', tiles: ['mi', 'madre', 'padre', 'tu'], answer: ['mi', 'madre'] },
      { t: 'fill', sentence: ['Esta es', null, 'casa.'], target: 'mi', opts: ['mi', 'tu', 'su'], hint: 'Это мой дом' },
    ],
  },

  // ── 42. Bebidas ───────────────────────────────────────
  {
    id: 'l42', name: 'Bebidas', emoji: '🥤', desc: 'Agua, café, leche, té…',
    exercises: [
      { t: 'pick', q: '«Вода»', opts: [
        { txt: 'agua',    em: '💧' },
        { txt: 'leche',   em: '🥛' },
        { txt: 'café',    em: '☕' },
        { txt: 'té',      em: '🍵' },
      ], correct: 0 },
      { t: 'pick', q: '«Кофе»', opts: [
        { txt: 'agua',    em: '💧' },
        { txt: 'café',    em: '☕' },
        { txt: 'té',      em: '🍵' },
        { txt: 'jugo',    em: '🧃' },
      ], correct: 1 },
      { t: 'pick', q: '«Молоко»', opts: [
        { txt: 'cerveza', em: '🍺' },
        { txt: 'vino',    em: '🍷' },
        { txt: 'leche',   em: '🥛' },
        { txt: 'té',      em: '🍵' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['agua',   'вода'],
        ['leche',  'молоко'],
        ['café',   'кофе'],
        ['té',     'чай'],
      ]},
      { t: 'match', pairs: [
        ['jugo',     'сок'],
        ['vino',     'вино'],
        ['cerveza',  'пиво'],
        ['refresco', 'газировка'],
      ]},
      // Reuse «beber» from L9
      { t: 'translate', from: 'Я пью воду', tiles: ['yo', 'bebo', 'agua', 'como'], answer: ['yo', 'bebo', 'agua'], answers: [['yo', 'bebo', 'agua'], ['bebo', 'agua']] },
      { t: 'fill', sentence: ['Tomo un', null, 'con leche.'], target: 'café', opts: ['café', 'pan', 'gato'], hint: 'Я пью кофе с молоком' },
    ],
  },

  // ── 43. Negación ──────────────────────────────────────
  {
    id: 'l43', name: 'Negación', emoji: '🚫', desc: 'No, nada, nunca, nadie',
    exercises: [
      { t: 'pick', q: '«Нет»', opts: [
        { txt: 'no',      em: '❌' },
        { txt: 'sí',      em: '✅' },
        { txt: 'nada',    em: '🚫' },
        { txt: 'nunca',   em: '🚷' },
      ], correct: 0 },
      { t: 'pick', q: '«Ничего»', opts: [
        { txt: 'nada',    em: '🚫' },
        { txt: 'nadie',   em: '🙅' },
        { txt: 'nunca',   em: '🚷' },
        { txt: 'no',      em: '❌' },
      ], correct: 0 },
      { t: 'pick', q: '«Никогда»', opts: [
        { txt: 'nadie',   em: '🙅' },
        { txt: 'nada',    em: '🚫' },
        { txt: 'nunca',   em: '🚷' },
        { txt: 'tampoco', em: '⛔' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['no',     'нет'],
        ['nada',   'ничего'],
        ['nadie',  'никто'],
        ['nunca',  'никогда'],
      ]},
      { t: 'match', pairs: [
        ['tampoco', 'тоже не'],
        ['jamás',   'никогда'],
        ['ninguno', 'никакой'],
        ['ni…ni',   'ни…ни'],
      ]},
      { t: 'translate', from: 'Я ничего не хочу', tiles: ['no', 'quiero', 'nada', 'algo'], answer: ['no', 'quiero', 'nada'] },
      { t: 'fill', sentence: ['Hoy no como', null, '.'], target: 'nada', opts: ['nada', 'nadie', 'nunca'], hint: 'Сегодня я ничего не ем' },
    ],
  },

  // ── 44. Me gusta ──────────────────────────────────────
  {
    id: 'l44', name: 'Me gusta', emoji: '❤️', desc: 'El verbo gustar',
    exercises: [
      { t: 'pick', q: '«Мне нравится»', opts: [
        { txt: 'me gusta',  em: '❤️' },
        { txt: 'te gusta',  em: '💛' },
        { txt: 'le gusta',  em: '💚' },
        { txt: 'me llamo',  em: '👤' },
      ], correct: 0 },
      { t: 'pick', q: '«Тебе нравится»', opts: [
        { txt: 'me gusta',   em: '❤️' },
        { txt: 'te gusta',   em: '💛' },
        { txt: 'le gusta',   em: '💚' },
        { txt: 'te llamas',  em: '👉' },
      ], correct: 1 },
      { t: 'pick', q: '«Мне нравятся (мн.ч.)»', opts: [
        { txt: 'me gusta',   em: '❤️' },
        { txt: 'me gustan',  em: '💖' },
        { txt: 'te gusta',   em: '💛' },
        { txt: 'te gustan',  em: '💕' },
      ], correct: 1 },
      { t: 'match', pairs: [
        ['me gusta',  'мне нравится'],
        ['te gusta',  'тебе нравится'],
        ['le gusta',  'ему/ей нравится'],
        ['nos gusta', 'нам нравится'],
      ]},
      { t: 'match', pairs: [
        ['me gusta el café',     'мне нравится кофе'],
        ['me gustan los gatos',  'мне нравятся коты'],
        ['te gusta la música',   'тебе нравится музыка'],
        ['le gustan los libros', 'ему нравятся книги'],
      ]},
      { t: 'translate', from: 'Мне нравится кофе', tiles: ['me', 'gusta', 'el', 'café', 'gustan'], answer: ['me', 'gusta', 'el', 'café'] },
      { t: 'fill', sentence: ['Me', null, 'los gatos.'], target: 'gustan', opts: ['gustan', 'gusta', 'gustas'], hint: 'Мне нравятся коты (мн.ч.)' },
    ],
  },

  // ── 45. Repaso 6 (revisión de L41-L44) ────────────────
  // REVIEW LESSON: mixes Posesivos, Bebidas, Negación, Gustar
  {
    id: 'l45', name: 'Repaso 6', emoji: '🔁', desc: 'Repasa lecciones 41-44',
    exercises: [
      // From L41
      { t: 'pick', q: '«Мой»', opts: [
        { txt: 'mi',       em: '👤' },
        { txt: 'tu',       em: '👉' },
        { txt: 'su',       em: '👨' },
        { txt: 'nuestro',  em: '👥' },
      ], correct: 0 },
      // From L42
      { t: 'pick', q: '«Чай»', opts: [
        { txt: 'agua',    em: '💧' },
        { txt: 'leche',   em: '🥛' },
        { txt: 'té',      em: '🍵' },
        { txt: 'café',    em: '☕' },
      ], correct: 2 },
      // From L43
      { t: 'pick', q: '«Никогда»', opts: [
        { txt: 'nadie',   em: '🙅' },
        { txt: 'nada',    em: '🚫' },
        { txt: 'nunca',   em: '🚷' },
        { txt: 'no',      em: '❌' },
      ], correct: 2 },
      // Mix L41 + L42
      { t: 'match', pairs: [
        ['mi',     'мой'],
        ['tu',     'твой'],
        ['agua',   'вода'],
        ['café',   'кофе'],
      ]},
      // Mix L43 + L44
      { t: 'match', pairs: [
        ['nada',     'ничего'],
        ['nadie',    'никто'],
        ['me gusta', 'мне нравится'],
        ['te gusta', 'тебе нравится'],
      ]},
      // From L44
      { t: 'translate', from: 'Мне нравится кофе', tiles: ['me', 'gusta', 'el', 'café', 'gustan'], answer: ['me', 'gusta', 'el', 'café'] },
      // From L43
      { t: 'fill', sentence: ['Hoy no como', null, '.'], target: 'nada', opts: ['nada', 'mesa', 'siete'], hint: 'Сегодня я ничего не ем' },
    ],
  },

  // ── 46. Demostrativos ─────────────────────────────────
  {
    id: 'l46', name: 'Demostrativos', emoji: '👉', desc: 'Este, ese, aquel',
    exercises: [
      { t: 'pick', q: '«Этот»', opts: [
        { txt: 'este',     em: '👉' },
        { txt: 'ese',      em: '👈' },
        { txt: 'aquel',    em: '🫵' },
        { txt: 'mi',       em: '👤' },
      ], correct: 0 },
      { t: 'pick', q: '«Та» (близко к тебе)', opts: [
        { txt: 'esta',    em: '👉' },
        { txt: 'esa',     em: '👈' },
        { txt: 'aquella', em: '🫵' },
        { txt: 'ese',     em: '👈' },
      ], correct: 1 },
      { t: 'pick', q: '«Эти»', opts: [
        { txt: 'estos',     em: '👉' },
        { txt: 'esos',      em: '👈' },
        { txt: 'aquellos',  em: '🫵' },
        { txt: 'este',      em: '👉' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['este',   'этот'],
        ['esta',   'эта'],
        ['ese',    'тот'],
        ['esa',    'та'],
      ]},
      { t: 'match', pairs: [
        ['estos',     'эти'],
        ['aquellos',  'те (там)'],
        ['esto',      'это'],
        ['eso',       'то'],
      ]},
      { t: 'translate', from: 'Этот кот', tiles: ['este', 'gato', 'esta', 'perro'], answer: ['este', 'gato'] },
      { t: 'fill', sentence: ['Quiero', null, 'gato.'], target: 'este', opts: ['este', 'esa', 'aquellos'], hint: 'Я хочу этого кота' },
    ],
  },

  // ── 47. Números 21-100 ────────────────────────────────
  {
    id: 'l47', name: 'Números 21-100', emoji: '💯', desc: 'Veinte, treinta… cien',
    exercises: [
      { t: 'pick', q: '«21»', opts: [
        { txt: 'veintiuno', em: '2️⃣1️⃣' },
        { txt: 'veinte',    em: '2️⃣0️⃣' },
        { txt: 'treinta',   em: '3️⃣0️⃣' },
        { txt: 'doce',      em: '1️⃣2️⃣' },
      ], correct: 0 },
      { t: 'pick', q: '«50»', opts: [
        { txt: 'cuarenta',   em: '4️⃣0️⃣' },
        { txt: 'cincuenta',  em: '5️⃣0️⃣' },
        { txt: 'sesenta',    em: '6️⃣0️⃣' },
        { txt: 'quince',     em: '1️⃣5️⃣' },
      ], correct: 1 },
      { t: 'pick', q: '«100»', opts: [
        { txt: 'mil',     em: '🔢' },
        { txt: 'diez',    em: '🔟' },
        { txt: 'cien',    em: '💯' },
        { txt: 'ciento',  em: '💯' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['veinte',     '20'],
        ['treinta',    '30'],
        ['cuarenta',   '40'],
        ['cincuenta',  '50'],
      ]},
      { t: 'match', pairs: [
        ['sesenta',    '60'],
        ['setenta',    '70'],
        ['ochenta',    '80'],
        ['noventa',    '90'],
      ]},
      // Reuse «tengo … años» from L4
      { t: 'translate', from: 'Мне тридцать лет', tiles: ['tengo', 'treinta', 'años', 'veinte'], answer: ['tengo', 'treinta', 'años'] },
      { t: 'fill', sentence: ['Mi abuela tiene', null, 'años.'], target: 'ochenta', opts: ['ochenta', 'cinco', 'doce'], hint: 'Бабушке 80 лет' },
    ],
  },

  // ── 48. Dinero ────────────────────────────────────────
  {
    id: 'l48', name: 'Dinero', emoji: '💰', desc: 'Comprar, precio, caro, barato',
    exercises: [
      { t: 'pick', q: '«Покупать»', opts: [
        { txt: 'comprar', em: '🛒' },
        { txt: 'vender',  em: '💵' },
        { txt: 'pagar',   em: '💳' },
        { txt: 'vivir',   em: '🏠' },
      ], correct: 0 },
      { t: 'pick', q: '«Дорого»', opts: [
        { txt: 'caro',     em: '💸' },
        { txt: 'barato',   em: '🪙' },
        { txt: 'nuevo',    em: '✨' },
        { txt: 'viejo',    em: '👴' },
      ], correct: 0 },
      { t: 'pick', q: '«Сколько стоит?»', opts: [
        { txt: '¿qué es?',          em: '❓' },
        { txt: '¿dónde está?',      em: '📍' },
        { txt: '¿cuánto cuesta?',   em: '💰' },
        { txt: '¿cómo estás?',      em: '🤔' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['comprar',  'покупать'],
        ['vender',   'продавать'],
        ['pagar',    'платить'],
        ['dinero',   'деньги'],
      ]},
      { t: 'match', pairs: [
        ['caro',     'дорогой'],
        ['barato',   'дешёвый'],
        ['euro',     'евро'],
        ['tarjeta',  'карта'],
      ]},
      { t: 'translate', from: 'Сколько стоит хлеб?', tiles: ['cuánto', 'cuesta', 'el', 'pan', 'dónde'], answer: ['cuánto', 'cuesta', 'el', 'pan'] },
      { t: 'fill', sentence: ['Este coche es muy', null, '.'], target: 'caro', opts: ['caro', 'barato', 'nuevo'], hint: 'Эта машина очень дорогая' },
    ],
  },

  // ── 49. Restaurante ───────────────────────────────────
  {
    id: 'l49', name: 'Restaurante', emoji: '🍴', desc: 'Pedir comida y la cuenta',
    exercises: [
      { t: 'pick', q: '«Меню»', opts: [
        { txt: 'menú',     em: '📜' },
        { txt: 'plato',    em: '🍽️' },
        { txt: 'cuenta',   em: '🧾' },
        { txt: 'mesa',     em: '🪑' },
      ], correct: 0 },
      { t: 'pick', q: '«Счёт»', opts: [
        { txt: 'cuenta',   em: '🧾' },
        { txt: 'plato',    em: '🍽️' },
        { txt: 'menú',     em: '📜' },
        { txt: 'mesa',     em: '🪑' },
      ], correct: 0 },
      { t: 'pick', q: '«Официант»', opts: [
        { txt: 'camarero',  em: '🤵' },
        { txt: 'cocinero',  em: '👨‍🍳' },
        { txt: 'médico',    em: '🩺' },
        { txt: 'profesor',  em: '👨‍🏫' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['camarero', 'официант'],
        ['menú',     'меню'],
        ['plato',    'блюдо'],
        ['cuenta',   'счёт'],
      ]},
      { t: 'match', pairs: [
        ['pedir',    'заказывать'],
        ['beber',    'пить'],
        ['mesa',     'стол'],
        ['propina',  'чаевые'],
      ]},
      // Reuse «por favor» from L10
      { t: 'translate', from: 'Воду, пожалуйста', tiles: ['agua', 'por', 'favor', 'gracias'], answer: ['agua', 'por', 'favor'] },
      { t: 'fill', sentence: ['La', null, ', por favor.'], target: 'cuenta', opts: ['cuenta', 'mesa', 'menú'], hint: 'Счёт, пожалуйста' },
    ],
  },

  // ── 50. Repaso 7 (revisión de L46-L49) ────────────────
  // REVIEW LESSON: mixes Demostrativos, Números 21-100, Dinero, Restaurante
  {
    id: 'l50', name: 'Repaso 7', emoji: '🔁', desc: 'Repasa lecciones 46-49',
    exercises: [
      // From L46
      { t: 'pick', q: '«Этот»', opts: [
        { txt: 'este',   em: '👉' },
        { txt: 'ese',    em: '👈' },
        { txt: 'aquel',  em: '🫵' },
        { txt: 'mi',     em: '👤' },
      ], correct: 0 },
      // From L47
      { t: 'pick', q: '«50»', opts: [
        { txt: 'cuarenta',   em: '4️⃣0️⃣' },
        { txt: 'cincuenta',  em: '5️⃣0️⃣' },
        { txt: 'sesenta',    em: '6️⃣0️⃣' },
        { txt: 'cien',       em: '💯' },
      ], correct: 1 },
      // From L49
      { t: 'pick', q: '«Официант»', opts: [
        { txt: 'camarero',  em: '🤵' },
        { txt: 'cocinero',  em: '👨‍🍳' },
        { txt: 'médico',    em: '🩺' },
        { txt: 'profesor',  em: '👨‍🏫' },
      ], correct: 0 },
      // Mix L46 + L48
      { t: 'match', pairs: [
        ['este',    'этот'],
        ['ese',     'тот'],
        ['comprar', 'покупать'],
        ['vender',  'продавать'],
      ]},
      // Mix L47 + L49
      { t: 'match', pairs: [
        ['treinta',    '30'],
        ['cincuenta',  '50'],
        ['menú',       'меню'],
        ['cuenta',     'счёт'],
      ]},
      // From L48
      { t: 'translate', from: 'Сколько стоит хлеб?', tiles: ['cuánto', 'cuesta', 'el', 'pan', 'dónde'], answer: ['cuánto', 'cuesta', 'el', 'pan'] },
      // From L49
      { t: 'fill', sentence: ['La', null, ', por favor.'], target: 'cuenta', opts: ['cuenta', 'noche', 'mesa'], hint: 'Счёт, пожалуйста' },
    ],
  },

  // ── 51. Direcciones ───────────────────────────────────
  {
    id: 'l51', name: 'Direcciones', emoji: '🧭', desc: 'Izquierda, derecha, recto',
    exercises: [
      { t: 'pick', q: '«Налево»', opts: [
        { txt: 'a la izquierda', em: '⬅️' },
        { txt: 'a la derecha',   em: '➡️' },
        { txt: 'recto',          em: '⬆️' },
        { txt: 'atrás',          em: '⬇️' },
      ], correct: 0 },
      { t: 'pick', q: '«Направо»', opts: [
        { txt: 'a la izquierda', em: '⬅️' },
        { txt: 'a la derecha',   em: '➡️' },
        { txt: 'cerca',          em: '📍' },
        { txt: 'lejos',          em: '🛫' },
      ], correct: 1 },
      { t: 'pick', q: '«Прямо»', opts: [
        { txt: 'recto',     em: '⬆️' },
        { txt: 'lejos',     em: '🛫' },
        { txt: 'derecha',   em: '➡️' },
        { txt: 'esquina',   em: '📐' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['izquierda', 'налево'],
        ['derecha',   'направо'],
        ['recto',     'прямо'],
        ['atrás',     'назад'],
      ]},
      { t: 'match', pairs: [
        ['cerca',    'близко'],
        ['lejos',    'далеко'],
        ['esquina',  'угол'],
        ['calle',    'улица'],
      ]},
      { t: 'translate', from: 'Поверни направо', tiles: ['gira', 'a', 'la', 'derecha', 'izquierda'], answer: ['gira', 'a', 'la', 'derecha'] },
      { t: 'fill', sentence: ['Sigue', null, 'por la calle.'], target: 'recto', opts: ['recto', 'cerca', 'lejos'], hint: 'Иди прямо по улице' },
    ],
  },

  // ── 52. Verbos modales ────────────────────────────────
  // Reinforces poder/querer (L21) + introduces deber, tener que + infinitive
  {
    id: 'l52', name: 'Verbos modales', emoji: '🎯', desc: 'Poder, querer, deber, tener que',
    exercises: [
      { t: 'pick', q: '«Я могу плавать»', opts: [
        { txt: 'puedo nadar',  em: '💪' },
        { txt: 'quiero nadar', em: '💖' },
        { txt: 'debo nadar',   em: '☝️' },
        { txt: 'soy nadar',    em: '❌' },
      ], correct: 0 },
      { t: 'pick', q: '«Я хочу есть»', opts: [
        { txt: 'puedo comer',  em: '💪' },
        { txt: 'quiero comer', em: '💖' },
        { txt: 'voy comer',    em: '❌' },
        { txt: 'soy comer',    em: '❌' },
      ], correct: 1 },
      { t: 'pick', q: '«Я должен учиться»', opts: [
        { txt: 'debo estudiar',    em: '☝️' },
        { txt: 'puedo estudiar',   em: '💪' },
        { txt: 'quiero estudiar',  em: '💖' },
        { txt: 'soy estudiar',     em: '❌' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['poder',     'мочь'],
        ['querer',    'хотеть'],
        ['deber',     'быть должным'],
        ['tener que', 'надо / нужно'],
      ]},
      { t: 'match', pairs: [
        ['puedo',     'я могу'],
        ['quiero',    'я хочу'],
        ['debo',      'я должен'],
        ['tengo que', 'я должен (обязан)'],
      ]},
      // Reuse «agua» from L42, «beber» from L9
      { t: 'translate', from: 'Я хочу пить воду', tiles: ['quiero', 'beber', 'agua', 'puedo'], answer: ['quiero', 'beber', 'agua'] },
      { t: 'fill', sentence: ['Tengo', null, 'trabajar.'], target: 'que', opts: ['que', 'a', 'de'], hint: 'Я должен работать (tengo que…)' },
    ],
  },

  // ── 53. Futuro: ir a + infinitivo ─────────────────────
  {
    id: 'l53', name: 'Futuro: ir a', emoji: '🗓️', desc: 'Voy a + infinitivo',
    exercises: [
      { t: 'pick', q: '«Я собираюсь есть»', opts: [
        { txt: 'voy a comer', em: '⏩' },
        { txt: 'voy comer',   em: '❌' },
        { txt: 'como',        em: '🍽️' },
        { txt: 'comí',        em: '⏪' },
      ], correct: 0 },
      { t: 'pick', q: '«Ты будешь читать»', opts: [
        { txt: 'voy a leer',   em: '⏩' },
        { txt: 'vas a leer',   em: '⏩' },
        { txt: 'va a leer',    em: '⏩' },
        { txt: 'vamos a leer', em: '⏩' },
      ], correct: 1 },
      { t: 'pick', q: '«Мы будем гулять»', opts: [
        { txt: 'voy a pasear',    em: '⏩' },
        { txt: 'vais a pasear',   em: '⏩' },
        { txt: 'vamos a pasear',  em: '⏩' },
        { txt: 'van a pasear',    em: '⏩' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['voy a',   'я собираюсь'],
        ['vas a',   'ты собираешься'],
        ['va a',    'он/она собирается'],
        ['vamos a', 'мы собираемся'],
      ]},
      { t: 'match', pairs: [
        ['voy a comer',   'я буду есть'],
        ['voy a beber',   'я буду пить'],
        ['voy a dormir',  'я буду спать'],
        ['voy a leer',    'я буду читать'],
      ]},
      { t: 'translate', from: 'Завтра я буду учиться', tiles: ['mañana', 'voy', 'a', 'estudiar', 'ayer'], answer: ['mañana', 'voy', 'a', 'estudiar'] },
      { t: 'fill', sentence: ['Esta noche', null, 'a dormir temprano.'], target: 'voy', opts: ['voy', 'vas', 'va'], hint: 'Сегодня вечером я буду спать рано' },
    ],
  },

  // ── 54. Reflexivos ────────────────────────────────────
  // Anchors on «me llamo» from L2, then expands to daily routine
  {
    id: 'l54', name: 'Reflexivos', emoji: '🪞', desc: 'Me llamo, me levanto, me ducho',
    exercises: [
      { t: 'pick', q: '«Меня зовут»', opts: [
        { txt: 'me llamo',     em: '👤' },
        { txt: 'te llamas',    em: '👉' },
        { txt: 'se llama',     em: '👨' },
        { txt: 'nos llamamos', em: '👥' },
      ], correct: 0 },
      { t: 'pick', q: '«Я встаю»', opts: [
        { txt: 'me levanto', em: '⏰' },
        { txt: 'me ducho',   em: '🚿' },
        { txt: 'me lavo',    em: '🧼' },
        { txt: 'me acuesto', em: '🛏️' },
      ], correct: 0 },
      { t: 'pick', q: '«Я ложусь спать»', opts: [
        { txt: 'me levanto', em: '⏰' },
        { txt: 'me acuesto', em: '🛏️' },
        { txt: 'me ducho',   em: '🚿' },
        { txt: 'me lavo',    em: '🧼' },
      ], correct: 1 },
      { t: 'match', pairs: [
        ['me llamo',   'меня зовут'],
        ['me levanto', 'я встаю'],
        ['me ducho',   'я принимаю душ'],
        ['me acuesto', 'я ложусь спать'],
      ]},
      { t: 'match', pairs: [
        ['me lavo',  'я моюсь'],
        ['me visto', 'я одеваюсь'],
        ['me peino', 'я причёсываюсь'],
        ['me siento','я сажусь'],
      ]},
      // Reuse «me llamo Ana» from L2
      { t: 'translate', from: 'Меня зовут Ана', tiles: ['me', 'llamo', 'Ana', 'te'], answer: ['me', 'llamo', 'Ana'] },
      { t: 'fill', sentence: ['Por la mañana', null, 'levanto.'], target: 'me', opts: ['me', 'te', 'se'], hint: 'Утром я встаю' },
    ],
  },

  // ── 55. Repaso 8 Final (revisión de L51-L54) ──────────
  // REVIEW LESSON: mixes Direcciones, Modales, Futuro ir a, Reflexivos
  {
    id: 'l55', name: 'Repaso 8', emoji: '🏆', desc: 'Repaso final (51-54)',
    exercises: [
      // From L51
      { t: 'pick', q: '«Налево»', opts: [
        { txt: 'a la izquierda', em: '⬅️' },
        { txt: 'a la derecha',   em: '➡️' },
        { txt: 'recto',          em: '⬆️' },
        { txt: 'cerca',          em: '📍' },
      ], correct: 0 },
      // From L52
      { t: 'pick', q: '«Я хочу есть»', opts: [
        { txt: 'puedo comer',    em: '💪' },
        { txt: 'quiero comer',   em: '💖' },
        { txt: 'debo comer',     em: '☝️' },
        { txt: 'voy a comer',    em: '⏩' },
      ], correct: 1 },
      // From L53
      { t: 'pick', q: '«Я буду читать»', opts: [
        { txt: 'voy a leer',    em: '⏩' },
        { txt: 'leo',           em: '📖' },
        { txt: 'leí',           em: '⏪' },
        { txt: 'vamos a leer',  em: '⏩' },
      ], correct: 0 },
      // Mix L51 + L52
      { t: 'match', pairs: [
        ['izquierda', 'налево'],
        ['derecha',   'направо'],
        ['puedo',     'я могу'],
        ['quiero',    'я хочу'],
      ]},
      // Mix L53 + L54
      { t: 'match', pairs: [
        ['voy a',      'я собираюсь'],
        ['vamos a',    'мы собираемся'],
        ['me llamo',   'меня зовут'],
        ['me levanto', 'я встаю'],
      ]},
      // From L53
      { t: 'translate', from: 'Завтра я буду спать', tiles: ['mañana', 'voy', 'a', 'dormir', 'ayer'], answer: ['mañana', 'voy', 'a', 'dormir'] },
      // From L51
      { t: 'fill', sentence: ['Sigue', null, 'por la calle.'], target: 'recto', opts: ['recto', 'casa', 'noche'], hint: 'Иди прямо по улице' },
    ],
  },
];

// ── Lesson runtime state ─────────────────────────────────
const lessonState = {
  lessonId:    null,
  exercises:   [],   // copy of current lesson exercises
  current:     0,    // index of current exercise
  hearts:      3,
  wrong:       0,    // mistakes counter (for accuracy)
  pendingOk:   false,// last check was correct
  // Per-exercise inputs:
  pickChoice:  null,    // 'pick'
  buildAnswer: [],      // 'translate'
  buildBank:   [],
  matchPicks:  [],      // 'match' — currently selected tile { side, idx }
  matchPairs:  0,       // count solved
  fillChoice:  null,    // 'fill'
};

function getLessonProgress() {
  if (!state.user) return {};
  try {
    return JSON.parse(localStorage.getItem('lesson_prog_' + state.user) || '{}');
  } catch { return {}; }
}
function saveLessonProgress(prog) {
  if (!state.user) return;
  localStorage.setItem('lesson_prog_' + state.user, JSON.stringify(prog));
}

function lessonIsUnlocked(idx, prog) {
  if (idx === 0) return true;
  return !!prog[LESSONS[idx - 1].id]?.completed;
}

// ── Render lessons path on home ──────────────────────────
function renderLessonsPath() {
  const wrap = $('lessons-path');
  if (!wrap) return;
  wrap.innerHTML = '';

  const title = document.createElement('div');
  title.className = 'lessons-path-title';
  title.textContent = '🎓 Lecciones';
  wrap.appendChild(title);

  const prog = getLessonProgress();
  const firstUnfinished = LESSONS.findIndex((l, i) => lessonIsUnlocked(i, prog) && !prog[l.id]?.completed);

  LESSONS.forEach((lesson, idx) => {
    const node = document.createElement('div');
    const unlocked = lessonIsUnlocked(idx, prog);
    const completed = !!prog[lesson.id]?.completed;
    node.className = 'lesson-node' + (unlocked ? '' : ' locked') + (completed ? ' completed' : '');
    if (idx === firstUnfinished && !completed) node.classList.add('start-here');

    if (unlocked) {
      const em = document.createElement('span');
      em.className = 'lesson-node-emoji';
      em.textContent = lesson.emoji;
      node.appendChild(em);
    } else {
      const lock = document.createElement('span');
      lock.className = 'lock-ico';
      lock.textContent = '🔒';
      node.appendChild(lock);
    }

    const lbl = document.createElement('span');
    lbl.className = 'lesson-node-label';
    lbl.textContent = lesson.name;
    node.appendChild(lbl);

    node.addEventListener('click', () => {
      haptic.light();
      if (!unlocked) {
        flashLessonLocked(lesson, idx);
        return;
      }
      showLessonPreview(lesson, completed);
    });

    wrap.appendChild(node);
  });
}

function flashLessonLocked(lesson, idx) {
  const prev = LESSONS[idx - 1];
  showLessonPreview(lesson, false, { locked: true, prevName: prev?.name });
}

function showLessonPreview(lesson, completed, opts = {}) {
  // Build a transient preview overlay
  const prev = document.createElement('div');
  prev.className = 'lesson-preview';
  const ctaLabel = opts.locked
    ? 'Entendido'
    : (completed ? 'Practicar de nuevo' : '¡Empezar!');
  prev.innerHTML = `
    <div class="lesson-preview-card">
      <button class="lesson-preview-close" id="lp-close" aria-label="Cerrar">×</button>
      <div class="lesson-preview-emoji">${opts.locked ? '🔒' : lesson.emoji}</div>
      <div class="lesson-preview-name">${lesson.name}</div>
      <div class="lesson-preview-desc">${
        opts.locked
          ? 'Completa "' + (opts.prevName || '...') + '" primero'
          : (completed ? '¡Ya completaste esta lección!' : lesson.desc)
      }</div>
      <button class="act-btn" id="lp-cta">${ctaLabel}</button>
    </div>
  `;
  document.body.appendChild(prev);
  // Close handlers: X button, backdrop click, Escape key
  const close = () => prev.remove();
  prev.querySelector('#lp-close').addEventListener('click', close);
  prev.addEventListener('click', e => { if (e.target === prev) close(); });
  const onKey = e => { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', onKey); } };
  document.addEventListener('keydown', onKey);
  // CTA: start lesson if unlocked, otherwise just close
  prev.querySelector('#lp-cta').addEventListener('click', () => {
    close();
    if (!opts.locked) startLesson(lesson.id);
  });
}

// ── Start / restart lesson ───────────────────────────────
function startLesson(lessonId) {
  const lesson = LESSONS.find(l => l.id === lessonId);
  if (!lesson) return;
  haptic.medium();
  lessonState.lessonId = lessonId;
  lessonState.exercises = shuffleExercises(lesson.exercises);
  lessonState.current = 0;
  lessonState.hearts = 3;
  lessonState.wrong = 0;
  lessonState.pendingOk = false;
  showScreen('lesson');
  renderHearts();
  renderCurrentExercise();
}

function shuffleExercises(list) {
  // Shuffle order; for match exercises also shuffle pair display
  return list.map(ex => {
    if (ex.t === 'pick') {
      // shuffle options but track new correct index
      const correctOpt = ex.opts[ex.correct];
      const opts = [...ex.opts].sort(() => Math.random() - 0.5);
      return { ...ex, opts, correct: opts.indexOf(correctOpt) };
    }
    return ex;
  });
}

function renderHearts() {
  const el = $('lesson-hearts');
  el.innerHTML = '';
  for (let i = 0; i < 3; i++) {
    const h = document.createElement('span');
    h.className = 'heart' + (i >= lessonState.hearts ? ' lost' : '');
    h.textContent = '❤️';
    el.appendChild(h);
  }
}

function updateLessonProgressBar() {
  const total = lessonState.exercises.length;
  const cur   = lessonState.current;
  $('lesson-progress').style.width = ((cur / total) * 100) + '%';
}

function renderCurrentExercise() {
  const ex = lessonState.exercises[lessonState.current];
  if (!ex) return completeLesson();
  updateLessonProgressBar();

  // Reset feedback
  $('lesson-feedback').classList.add('hidden');
  $('lesson-feedback').classList.remove('correct', 'wrong');
  // Reset check button (back to "Verificar" mode)
  const checkBtn = $('lesson-check-btn');
  checkBtn.disabled = true;
  checkBtn.textContent = 'Verificar';
  checkBtn.dataset.mode = 'check';
  checkBtn.classList.remove('continue-correct', 'continue-wrong');

  // Reset per-exercise state
  lessonState.pickChoice = null;
  lessonState.buildAnswer = [];
  lessonState.buildBank = [];
  lessonState.matchPicks = [];
  lessonState.matchPairs = 0;
  lessonState.fillChoice = null;

  const root = $('lesson-exercise');
  root.innerHTML = '';

  if (ex.t === 'pick')        renderPickExercise(root, ex);
  else if (ex.t === 'translate') renderTranslateExercise(root, ex);
  else if (ex.t === 'match')     renderMatchExercise(root, ex);
  else if (ex.t === 'fill')      renderFillExercise(root, ex);
}

// ── Exercise: pick (multiple choice) ─────────────────────
function renderPickExercise(root, ex) {
  const inst = document.createElement('p');
  inst.className = 'lex-instruction';
  inst.textContent = '¿Cuál de estos es...?';
  root.appendChild(inst);

  const prompt = document.createElement('div');
  prompt.className = 'lex-translation';
  prompt.textContent = ex.q;
  root.appendChild(prompt);

  const grid = document.createElement('div');
  grid.className = 'lex-pick-options';
  ex.opts.forEach((opt, i) => {
    const card = document.createElement('div');
    card.className = 'lex-option';
    card.innerHTML = `
      <span class="lex-option-num">${i + 1}</span>
      <span class="lex-option-emoji">${opt.em}</span>
      <span class="lex-option-text">${opt.txt}</span>
    `;
    card.addEventListener('click', () => {
      haptic.light();
      grid.querySelectorAll('.lex-option').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      lessonState.pickChoice = i;
      $('lesson-check-btn').disabled = false;
    });
    grid.appendChild(card);
  });
  root.appendChild(grid);
}

// ── Exercise: translate (build sentence) ─────────────────
function renderTranslateExercise(root, ex) {
  const inst = document.createElement('p');
  inst.className = 'lex-instruction';
  inst.textContent = 'Traduce al español';
  root.appendChild(inst);

  const bubble = document.createElement('div');
  bubble.className = 'lex-bubble';
  bubble.innerHTML = `
    <div class="lex-bubble-avatar">🦎</div>
    <div class="lex-bubble-text">${ex.from}</div>
  `;
  root.appendChild(bubble);

  const ans = document.createElement('div');
  ans.className = 'lex-answer-area';
  ans.id = 'lex-answer-area';
  root.appendChild(ans);

  const bank = document.createElement('div');
  bank.className = 'lex-bank';
  bank.id = 'lex-bank';
  root.appendChild(bank);

  const tiles = [...ex.tiles].sort(() => Math.random() - 0.5);
  lessonState.buildBank = tiles.map((word, i) => ({ word, i, used: false }));
  drawTranslateBank();
  drawTranslateAnswer();
}

function drawTranslateBank() {
  const bank = $('lex-bank');
  bank.innerHTML = '';
  lessonState.buildBank.forEach((entry, idx) => {
    const tile = document.createElement('div');
    tile.className = 'lex-tile' + (entry.used ? ' used' : '');
    tile.textContent = entry.word;
    tile.addEventListener('click', () => {
      if (entry.used) return;
      haptic.light();
      entry.used = true;
      lessonState.buildAnswer.push(idx);
      drawTranslateBank();
      drawTranslateAnswer();
    });
    bank.appendChild(tile);
  });
}

function drawTranslateAnswer() {
  const ans = $('lex-answer-area');
  ans.innerHTML = '';
  lessonState.buildAnswer.forEach((bankIdx) => {
    const entry = lessonState.buildBank[bankIdx];
    const tile = document.createElement('div');
    tile.className = 'lex-tile in-answer';
    tile.textContent = entry.word;
    tile.addEventListener('click', () => {
      haptic.light();
      entry.used = false;
      lessonState.buildAnswer = lessonState.buildAnswer.filter(i => i !== bankIdx);
      drawTranslateBank();
      drawTranslateAnswer();
    });
    ans.appendChild(tile);
  });
  $('lesson-check-btn').disabled = lessonState.buildAnswer.length === 0;
}

// ── Exercise: match pairs ────────────────────────────────
function renderMatchExercise(root, ex) {
  const inst = document.createElement('p');
  inst.className = 'lex-instruction';
  inst.textContent = 'Empareja las palabras';
  root.appendChild(inst);

  const grid = document.createElement('div');
  grid.className = 'lex-match-grid';
  root.appendChild(grid);

  // Build two columns of tiles
  const left  = ex.pairs.map((p, i) => ({ side: 'L', idx: i, text: p[0] }));
  const right = ex.pairs.map((p, i) => ({ side: 'R', idx: i, text: p[1] }));
  shuffleArray(left);
  shuffleArray(right);

  // Interleave in 2-col grid: L1 R1 L2 R2 ... (so columns mix)
  const interleaved = [];
  for (let i = 0; i < left.length; i++) {
    interleaved.push(left[i], right[i]);
  }

  interleaved.forEach((item) => {
    const tile = document.createElement('div');
    tile.className = 'lex-match-tile';
    tile.textContent = item.text;
    tile.dataset.side = item.side;
    tile.dataset.idx = item.idx;
    tile.addEventListener('click', () => handleMatchTap(tile, item, ex));
    grid.appendChild(tile);
  });

  // For match, the button stays disabled until all pairs are matched, then we auto-check.
  $('lesson-check-btn').disabled = true;
}

function handleMatchTap(tile, item, ex) {
  if (tile.classList.contains('matched')) return;
  haptic.light();

  // Find currently selected tile on the same side and clear it
  const grid = tile.parentElement;
  const sameSide = grid.querySelector(`.lex-match-tile.selected[data-side="${item.side}"]`);
  if (sameSide && sameSide !== tile) sameSide.classList.remove('selected');

  if (tile.classList.contains('selected')) {
    tile.classList.remove('selected');
    return;
  }
  tile.classList.add('selected');

  // Check if there's a tile selected on the other side
  const otherSelected = grid.querySelector(`.lex-match-tile.selected[data-side="${item.side === 'L' ? 'R' : 'L'}"]`);
  if (!otherSelected) return;

  const a = tile;
  const b = otherSelected;
  if (a.dataset.idx === b.dataset.idx) {
    // Match!
    a.classList.add('flash-correct');
    b.classList.add('flash-correct');
    a.classList.remove('selected');
    b.classList.remove('selected');
    haptic.success();
    setTimeout(() => {
      a.classList.add('matched');
      b.classList.add('matched');
    }, 350);
    lessonState.matchPairs++;
    if (lessonState.matchPairs === ex.pairs.length) {
      // All matched — auto-advance
      $('lesson-check-btn').disabled = false;
      setTimeout(() => onCheckPressed(), 600);
    }
  } else {
    // Wrong
    a.classList.add('flash-wrong');
    b.classList.add('flash-wrong');
    haptic.error();
    setTimeout(() => {
      a.classList.remove('flash-wrong', 'selected');
      b.classList.remove('flash-wrong', 'selected');
    }, 500);
    lessonState.wrong++;
    loseHeart();
  }
}

function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// ── Exercise: fill in the blank ──────────────────────────
function renderFillExercise(root, ex) {
  const inst = document.createElement('p');
  inst.className = 'lex-instruction';
  inst.textContent = 'Completa la oración';
  root.appendChild(inst);

  if (ex.hint) {
    const hint = document.createElement('div');
    hint.className = 'lex-bubble';
    hint.innerHTML = `
      <div class="lex-bubble-avatar">🦎</div>
      <div class="lex-bubble-text">${ex.hint}</div>
    `;
    root.appendChild(hint);
  }

  const sentence = document.createElement('div');
  sentence.className = 'lex-fill-sentence';
  sentence.id = 'lex-fill-sentence';
  drawFillSentence(sentence, ex);
  root.appendChild(sentence);

  const opts = document.createElement('div');
  opts.className = 'lex-fill-options';
  const shuffled = [...ex.opts].sort(() => Math.random() - 0.5);
  shuffled.forEach(opt => {
    const tile = document.createElement('div');
    tile.className = 'lex-tile';
    tile.textContent = opt;
    tile.addEventListener('click', () => {
      haptic.light();
      lessonState.fillChoice = opt;
      opts.querySelectorAll('.lex-tile').forEach(t => t.classList.remove('in-answer'));
      tile.classList.add('in-answer');
      drawFillSentence(sentence, ex);
      $('lesson-check-btn').disabled = false;
    });
    opts.appendChild(tile);
  });
  root.appendChild(opts);
}

function drawFillSentence(el, ex) {
  el.innerHTML = '';
  ex.sentence.forEach((piece) => {
    if (piece === null) {
      const blank = document.createElement('span');
      blank.className = 'lex-blank' + (lessonState.fillChoice ? '' : ' empty');
      blank.textContent = lessonState.fillChoice || '     ';
      el.appendChild(blank);
    } else {
      const text = document.createElement('span');
      text.textContent = ' ' + piece + ' ';
      el.appendChild(text);
    }
  });
}

// ── Check / continue ─────────────────────────────────────
// Single button morphs between "Verificar" (check answer) and "Continuar" (advance).
$('lesson-check-btn')?.addEventListener('click', () => {
  const btn = $('lesson-check-btn');
  if (btn.dataset.mode === 'continue') return onContinuePressed();
  onCheckPressed();
});

function onCheckPressed() {
  const ex = lessonState.exercises[lessonState.current];
  if (!ex) return;
  let correct = false;
  let userAnswerText = '';
  let correctText = '';

  if (ex.t === 'pick') {
    correct = lessonState.pickChoice === ex.correct;
    userAnswerText = ex.opts[lessonState.pickChoice]?.txt || '';
    correctText = ex.opts[ex.correct].txt;
  } else if (ex.t === 'translate') {
    const userWords = lessonState.buildAnswer.map(i => lessonState.buildBank[i].word);
    const validAnswers = ex.answers || [ex.answer];
    correct = validAnswers.some(a => arraysEqual(userWords, a));
    userAnswerText = userWords.join(' ');
    correctText = (ex.answer || validAnswers[0]).join(' ');
  } else if (ex.t === 'match') {
    correct = lessonState.matchPairs === ex.pairs.length;
    correctText = ''; // no detail needed
  } else if (ex.t === 'fill') {
    const validTargets = ex.targets || [ex.target];
    correct = validTargets.includes(lessonState.fillChoice);
    userAnswerText = lessonState.fillChoice || '';
    correctText = ex.target || validTargets[0];
  }

  showFeedback(correct, correctText);
  if (!correct) {
    lessonState.wrong++;
    loseHeart();
  }
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false;
  return true;
}

function showFeedback(correct, correctText) {
  const fb = $('lesson-feedback');
  fb.classList.remove('hidden');
  fb.classList.toggle('correct', correct);
  fb.classList.toggle('wrong', !correct);
  $('feedback-title').textContent = correct ? '¡Correcto!' : 'Incorrecto';
  $('feedback-detail').innerHTML = correct
    ? '¡Bien hecho! 🎉'
    : (correctText ? `Respuesta: <strong>${correctText}</strong>` : 'Inténtalo de nuevo en la próxima.');
  // Morph the check button into a "Continuar" button colored by result
  const btn = $('lesson-check-btn');
  btn.textContent = 'Continuar';
  btn.dataset.mode = 'continue';
  btn.disabled = false;
  btn.classList.toggle('continue-correct', correct);
  btn.classList.toggle('continue-wrong', !correct);
  lessonState.pendingOk = correct;
  if (correct) haptic.success(); else haptic.error();
}

function onContinuePressed() {
  haptic.light();
  if (lessonState.hearts <= 0) return failLesson();
  // If they got it wrong, they could re-try the same exercise — keep simple, advance
  lessonState.current++;
  if (lessonState.current >= lessonState.exercises.length) {
    completeLesson();
  } else {
    renderCurrentExercise();
  }
}

function loseHeart() {
  lessonState.hearts = Math.max(0, lessonState.hearts - 1);
  renderHearts();
  if (lessonState.hearts === 0) {
    setTimeout(() => failLesson(), 700);
  }
}

// ── Lesson result ────────────────────────────────────────
function completeLesson() {
  const lesson = LESSONS.find(l => l.id === lessonState.lessonId);
  if (!lesson) return renderHome();

  // Save progress
  const prog = getLessonProgress();
  const prev = prog[lesson.id] || {};
  const baseXp   = 50;
  const heartXp  = lessonState.hearts * 10;
  const earned   = baseXp + heartXp;
  prog[lesson.id] = {
    completed: true,
    bestHearts: Math.max(prev.bestHearts || 0, lessonState.hearts),
    plays: (prev.plays || 0) + 1,
  };
  saveLessonProgress(prog);

  // Award pet XP
  if (state.pet) {
    petTouchActivity();
    state.pet.hunger    = Math.min(100, state.pet.hunger + 18);
    state.pet.happiness = Math.min(100, state.pet.happiness + 12);
    petAddXp(earned);
  }

  // Compute stats
  const total = lessonState.exercises.length;
  const acc   = Math.round(((total - lessonState.wrong) / total) * 100);
  $('lesson-result-xp').textContent     = '+' + earned;
  $('lesson-result-hearts').textContent = lessonState.hearts;
  $('lesson-result-acc').textContent    = acc + '%';
  showScreen('lesson-results');
  spawnConfetti();
}

function failLesson() {
  showScreen('lesson-fail');
}

// ── Lesson nav buttons ───────────────────────────────────
$('lesson-quit-btn')?.addEventListener('click', () => {
  haptic.light();
  if (confirm('¿Salir de la lección? Perderás tu progreso actual.')) {
    renderHome();
  }
});

$('lesson-results-continue')?.addEventListener('click', () => {
  haptic.light();
  renderHome();
});

$('lesson-retry-btn')?.addEventListener('click', () => {
  haptic.light();
  startLesson(lessonState.lessonId);
});

$('lesson-fail-home-btn')?.addEventListener('click', () => {
  haptic.light();
  renderHome();
});

// Add 'lesson' and 'lesson-results' / 'lesson-fail' screens to the screens map
screens.lesson           = $('lesson-screen');
screens['lesson-results']= $('lesson-results-screen');
screens['lesson-fail']   = $('lesson-fail-screen');

// Hook into renderHome so the lessons path is rendered/refreshed
const _origRenderHomeLessons = renderHome;
renderHome = function(...args) {
  _origRenderHomeLessons(...args);
  renderLessonsPath();
};

// ── INIT ──────────────────────────────────────────────────
(async () => {
  state.users = await loadUsers();
  const savedUser = localStorage.getItem('currentUser');
  const stillValid = savedUser && state.users.find(x => x.user === savedUser);
  if (stillValid) {
    loginAs(savedUser);
  } else {
    $('bottom-nav').classList.add('hidden');
    showScreen('login');
  }
})();
