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
  user:            null,   // storage key for the current user (tg_<id> in production, raw username in dev mode)
  userDisplayName: null,   // human-friendly name shown in the UI (Telegram first_name or dev username)
  users:           [],     // dev-mode only — loaded from users.json when ?dev=1
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
  accessory:   null,
  background:  'ocean',
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
  // ── Classics ─────────────────────────────────────────────
  { id: 'pink',     name: 'Rosa',       body: '#ffb6cf', belly: '#ffd5e3', gill: '#ff7aa1', cheek: '#ff5e8e', requires: 0  },
  { id: 'gold',     name: 'Dorado',     body: '#ffd86b', belly: '#fff1b8', gill: '#ff9a00', cheek: '#e07a00', requires: 3  },
  { id: 'mint',     name: 'Menta',      body: '#a3f0d3', belly: '#d5f9ec', gill: '#3ec9a1', cheek: '#1da882', requires: 5  },
  { id: 'blue',     name: 'Azul',       body: '#8fc8ff', belly: '#cee4ff', gill: '#3a8de0', cheek: '#1d6bc0', requires: 8  },
  { id: 'lilac',    name: 'Lila',       body: '#cfaaff', belly: '#e7d4ff', gill: '#9a6cff', cheek: '#6b3fc7', requires: 12 },
  { id: 'shadow',   name: 'Sombra',     body: '#3a3550', belly: '#5a5478', gill: '#9a8ad9', cheek: '#c0a8ff', requires: 18 },
  // ── New flat colors ──────────────────────────────────────
  { id: 'coral',    name: 'Coral',      body: '#ff8a72', belly: '#ffc6b3', gill: '#ff5a3f', cheek: '#c93b1f', requires: 2  },
  { id: 'lemon',    name: 'Limón',      body: '#f4f08c', belly: '#fffabf', gill: '#bdb524', cheek: '#8a8210', requires: 4  },
  { id: 'sky',      name: 'Cielo',      body: '#bfe6ff', belly: '#e3f2ff', gill: '#6fb6f2', cheek: '#3a8bcc', requires: 6  },
  { id: 'cherry',   name: 'Cereza',     body: '#ff6b9a', belly: '#ffb1c8', gill: '#e02d72', cheek: '#a40e4d', requires: 7  },
  { id: 'jade',     name: 'Jade',       body: '#5fd9a7', belly: '#b8f2d8', gill: '#1ea76a', cheek: '#0a663e', requires: 9  },
  { id: 'amethyst', name: 'Amatista',   body: '#a78bff', belly: '#d6c8ff', gill: '#6c45d6', cheek: '#3f1eaa', requires: 10 },
  { id: 'snow',     name: 'Nieve',      body: '#f5f9ff', belly: '#ffffff', gill: '#bcd1e8', cheek: '#7a96b3', requires: 11 },
  { id: 'obsidian', name: 'Obsidiana',  body: '#1c1830', belly: '#322a52', gill: '#7563c4', cheek: '#b09cff', requires: 15 },
  // ── Premium animated patterns (use CSS animation, marked with `pattern`) ──
  { id: 'galaxy',   name: 'Galaxia',    body: '#5a3aa8', belly: '#a47cff', gill: '#ff9ad0', cheek: '#ffd86b', pattern: 'galaxy',  requires: 16 },
  { id: 'sunset',   name: 'Atardecer',  body: '#ff8a5b', belly: '#ffc89e', gill: '#ff4d8d', cheek: '#7c2bff', pattern: 'sunset',  requires: 13 },
  { id: 'rainbow',  name: 'Arcoíris',   body: '#ffb6cf', belly: '#ffd5e3', gill: '#ff7aa1', cheek: '#ff5e8e', pattern: 'rainbow', requires: 20 },
  { id: 'aurora',   name: 'Aurora',     body: '#5be0bf', belly: '#bff5e8', gill: '#80b9ff', cheek: '#c08bff', pattern: 'aurora',  requires: 17 },
];

const PET_HATS = [
  { id: null,         emoji: '—',   name: 'Sin sombrero', requires: 0  },
  { id: 'flower',     emoji: '🌸', name: 'Flor',         requires: 2  },
  { id: 'graduate',   emoji: '🎓', name: 'Graduación',   requires: 3  },
  { id: 'party',      emoji: '🎉', name: 'Fiesta',       requires: 5  },
  { id: 'wizard',     emoji: '🧙', name: 'Mago',         requires: 7  },
  { id: 'cap',        emoji: '🧢', name: 'Gorra',        requires: 4  },
  { id: 'tophat',     emoji: '🎩', name: 'Sombrero',     requires: 9  },
  { id: 'sombrero',   emoji: '🪖', name: 'Casco',        requires: 6  },
  { id: 'crown',      emoji: '👑', name: 'Corona',       requires: 14 },
  { id: 'leaves',     emoji: '🍃', name: 'Hojas',        requires: 8  },
  { id: 'star',       emoji: '⭐', name: 'Estrella',     requires: 11 },
  { id: 'halo',       emoji: '😇', name: 'Aureola',      requires: 16 },
];

const PET_ACCESSORIES = [
  { id: null,         emoji: '—',   name: 'Ninguno',      requires: 0  },
  { id: 'shades',     emoji: '🕶️', name: 'Gafas',        requires: 2  },
  { id: 'glasses',    emoji: '👓', name: 'Lentes',       requires: 3  },
  { id: 'bowtie',     emoji: '🎀', name: 'Lazo',         requires: 5  },
  { id: 'medal',      emoji: '🏅', name: 'Medalla',      requires: 6  },
  { id: 'scarf',      emoji: '🧣', name: 'Bufanda',      requires: 8  },
  { id: 'headphones', emoji: '🎧', name: 'Auriculares',  requires: 10 },
  { id: 'mustache',   emoji: '〰️', name: 'Bigote',       requires: 12 },
];

const PET_BACKGROUNDS = [
  { id: 'ocean',    name: 'Océano',      grad: ['#4ec3df 0%', '#2a8fc4 18%', '#1a5d9c 45%', '#0e3a73 78%', '#061d44 100%'],  requires: 0  },
  { id: 'sunset',   name: 'Atardecer',   grad: ['#ffb47a 0%', '#ff7d8a 25%', '#a85ec2 60%', '#3b2370 100%'],                  requires: 4  },
  { id: 'reef',     name: 'Arrecife',    grad: ['#86f0d4 0%', '#3bd1c2 25%', '#1f8eb5 60%', '#0d3a6e 100%'],                  requires: 7  },
  { id: 'volcano',  name: 'Volcán',      grad: ['#ffb37a 0%', '#ff5b3a 30%', '#8a1a4a 65%', '#28091f 100%'],                  requires: 10 },
  { id: 'aurora',   name: 'Aurora',      grad: ['#5be0bf 0%', '#5a8df0 30%', '#7c4dd1 60%', '#1a0e3d 100%'],                  requires: 13 },
  { id: 'night',    name: 'Noche',       grad: ['#22335e 0%', '#11214a 30%', '#091433 65%', '#02061d 100%'],                  requires: 16 },
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
  if (userNameEl) userNameEl.textContent = state.userDisplayName || state.user || '';
  let total, done;
  if (view === 'lessons') {
    const prog = getLessonProgress();
    total = MANIFEST.length;
    done  = MANIFEST.filter(l => prog[l.id]?.completed).length;
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
// Production: identity comes from Telegram (initDataUnsafe.user.id).
// Dev mode (?dev=1 in URL): legacy username/password login against users.json.
//
// TODO: the current Telegram identity check is client-side only. For full
// security, validate `tg.initData` HMAC against the bot token via a server
// endpoint before trusting the user id for cross-device sync (Phase 2).
const IS_DEV_MODE = new URLSearchParams(location.search).has('dev');

function getTelegramUser() {
  const u = tg?.initDataUnsafe?.user;
  if (!u || typeof u.id !== 'number') return null;
  return { id: u.id, firstName: u.first_name || 'Usuario' };
}

async function loadUsers() {
  // Dev mode only — legacy users.json for browser testing without Telegram.
  if (!IS_DEV_MODE) return [];
  try {
    const res = await fetch('users.json?_=' + Date.now());
    if (!res.ok) throw new Error('http ' + res.status);
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch {
    return [{ user: 'demo', pass: 'demo' }];
  }
}

function loadProgress() {
  // Reads from the Storage in-memory cache (populated by Storage.init in loginAs).
  return new Set(Storage.getJSON('vocab_progress', []));
}

function saveProgress() {
  if (!state.user) return;
  Storage.setJSON('vocab_progress', [...state.completed]);
}

async function loginAs(userKey, displayName) {
  state.user = userKey;
  state.userDisplayName = displayName || userKey;

  // Hydrate the Storage cache from CloudStorage (or localStorage fallback)
  // and load the lesson manifest in parallel — both are needed before render.
  await Promise.all([
    Storage.init(userKey, ['vocab_progress', 'lesson_progress', 'pet_state', 'srs', 'hearts_state']),
    loadManifest(),
  ]);

  state.completed = loadProgress();
  state.pet = loadPet();
  SRS.init();
  loadHearts();
  localStorage.setItem('currentUser', userKey);
  petCheckDailyStreak();
  startPetDecayTimer();
  $('bottom-nav').classList.remove('hidden');
  renderHome('lessons');
  applyPetVisuals();
  updateTopbarStats();
}

function logout() {
  // Logout is only meaningful in dev mode. In Telegram the user is auto-bound
  // to their Telegram account and the logout button is hidden.
  if (!IS_DEV_MODE) return;
  stopPetDecayTimer();
  state.user = null;
  state.userDisplayName = null;
  state.completed = new Set();
  state.pet = null;
  localStorage.removeItem('currentUser');
  $('bottom-nav').classList.add('hidden');
  $('login-user').value = '';
  $('login-pass').value = '';
  $('login-error').textContent = ' ';
  showScreen('login');
}

// Login form submit (dev mode only)
$('login-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!IS_DEV_MODE) return;
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
  await loginAs(found.user, found.user);
});

// Logout button (hidden in production — see init)
$('logout-btn')?.addEventListener('click', () => {
  haptic.light();
  logout();
});

// ══════════════════════════════════════════════════════════
//  HEARTS — global pool with time-based regen
// ══════════════════════════════════════════════════════════
// Hearts are no longer per-lesson. They live in a single pool that
// regenerates one heart every 30 minutes (capped at 5). A wrong answer
// in ANY lesson costs one heart. Running out blocks starting new lessons
// until at least one regens. lastUpdate is "the moment regen begins" —
// when the user is at full, it floats with Date.now() so we don't bank
// regen progress for a full pool.
const HEART_MAX       = 5;
const HEART_REGEN_MS  = 30 * 60 * 1000;

function loadHearts() {
  state.heartsState = Storage.getJSON('hearts_state', null) || {
    count: HEART_MAX,
    lastUpdate: Date.now(),
    max: HEART_MAX,
  };
  regenHearts();
}

function regenHearts() {
  const hs = state.heartsState;
  if (!hs) return;
  if (hs.count >= hs.max) {
    hs.lastUpdate = Date.now();
    Storage.setJSON('hearts_state', hs);
    return;
  }
  const elapsed = Date.now() - hs.lastUpdate;
  const gained = Math.floor(elapsed / HEART_REGEN_MS);
  if (gained > 0) {
    hs.count = Math.min(hs.max, hs.count + gained);
    hs.lastUpdate += gained * HEART_REGEN_MS;
    Storage.setJSON('hearts_state', hs);
  }
}

function loseGlobalHeart() {
  const hs = state.heartsState;
  if (!hs) return;
  // Loss from a full pool starts a fresh regen clock; otherwise keep the
  // existing partial-regen progress.
  if (hs.count === hs.max) hs.lastUpdate = Date.now();
  hs.count = Math.max(0, hs.count - 1);
  Storage.setJSON('hearts_state', hs);
}

function heartsMsToNext() {
  const hs = state.heartsState;
  if (!hs || hs.count >= hs.max) return 0;
  return Math.max(0, HEART_REGEN_MS - (Date.now() - hs.lastUpdate));
}

function fmtCountdown(ms) {
  const total = Math.ceil(ms / 1000);
  const m = Math.floor(total / 60);
  const s = total % 60;
  return m + ':' + (s < 10 ? '0' + s : s);
}

// Returns true if the user has at least one heart and can start a lesson.
// On empty pool, flashes a transient banner with the time-to-next regen.
function ensureHeartsForStart() {
  regenHearts();
  if (state.heartsState && state.heartsState.count > 0) return true;
  showHeartsEmptyToast();
  return false;
}

function showHeartsEmptyToast() {
  const existing = document.querySelector('.hearts-toast');
  if (existing) existing.remove();
  const t = document.createElement('div');
  t.className = 'hearts-toast';
  t.innerHTML = `
    <span class="ht-ico">💔</span>
    <span class="ht-body">
      <span class="ht-title">¡Sin vidas!</span>
      <span class="ht-sub">Próxima vida en <b>${fmtCountdown(heartsMsToNext())}</b></span>
    </span>
  `;
  document.body.appendChild(t);
  haptic.error();
  setTimeout(() => t.classList.add('hearts-toast-out'), 2400);
  setTimeout(() => t.remove(), 3000);
}

// Topbar chip showing current heart pool + regen countdown.
let _heartsTicker = null;
function syncHeartsChip() {
  const chip = $('topbar-hearts');
  const num  = $('topbar-hearts-num');
  const cd   = $('topbar-hearts-cd');
  if (!chip || !num || !cd) return;
  regenHearts();
  const hs = state.heartsState;
  if (!hs) { chip.classList.add('hidden'); return; }
  chip.classList.remove('hidden');
  num.textContent = hs.count;
  if (hs.count >= hs.max) {
    cd.textContent = '';
    stopHeartsTicker();
  } else {
    cd.textContent = fmtCountdown(heartsMsToNext());
    startHeartsTicker();
  }
}

function startHeartsTicker() {
  if (_heartsTicker) return;
  _heartsTicker = setInterval(syncHeartsChip, 1000);
}

function stopHeartsTicker() {
  if (_heartsTicker) { clearInterval(_heartsTicker); _heartsTicker = null; }
}

// ══════════════════════════════════════════════════════════
//  AXOLOTL PET SYSTEM
// ══════════════════════════════════════════════════════════

function loadPet() {
  // Reads from the Storage in-memory cache (populated by Storage.init in loginAs).
  const raw = Storage.getJSON('pet_state', null);
  if (raw) return { ...PET_DEFAULT, ...raw };
  return { ...PET_DEFAULT, createdAt: todayStr() };
}

function savePet() {
  if (!state.user || !state.pet) return;
  Storage.setJSON('pet_state', state.pet);
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
    pulseClass(svg, 'is-star-eyes', 2200);
    spawnSparkleBurst(14);
    setTimeout(() => spawnSparkleBurst(10), 700);
    setTimeout(() => spawnSparkleBurst(8),  1300);
    setTimeout(() => wrap.classList.remove('is-celebrating'), 2200);
  }
}

$('levelup-close')?.addEventListener('click', () => {
  $('levelup-modal').classList.add('hidden');
});

// ── Decay over time (idle-degradation, very gentle) ─────
// The pet decays even while the app is closed. On every render we catch up
// based on how long the user was away (capped at 24h of decay so a week-long
// absence doesn't tank the bars to zero across the board). While the screen
// is open, a 60s interval continues to nudge the bars down so the UI feels
// alive — but the source of truth is pet.lastSeen + elapsed time.
const PET_DECAY_CAP_MS = 24 * 60 * 60 * 1000;     // 24h
const PET_DECAY_TICK_MS = 60 * 1000;              // one tick per minute
const PET_HUNGER_PER_TICK    = 1;
const PET_HAPPINESS_PER_TICK = 0.5;

function petCatchUpDecay() {
  if (!state.pet) return;
  const now = Date.now();
  const last = state.pet.lastSeen || now;
  const elapsed = Math.min(PET_DECAY_CAP_MS, Math.max(0, now - last));
  const ticks = Math.floor(elapsed / PET_DECAY_TICK_MS);
  if (ticks > 0) {
    state.pet.hunger    = Math.max(0, state.pet.hunger    - PET_HUNGER_PER_TICK    * ticks);
    state.pet.happiness = Math.max(0, state.pet.happiness - PET_HAPPINESS_PER_TICK * ticks);
    state.pet.lastSeen  = last + ticks * PET_DECAY_TICK_MS;
    savePet();
  } else if (!state.pet.lastSeen) {
    state.pet.lastSeen = now;
    savePet();
  }
}

function startPetDecayTimer() {
  stopPetDecayTimer();
  petCatchUpDecay();
  state.decayTimer = setInterval(() => {
    if (!state.pet) return;
    state.pet.hunger    = Math.max(0, state.pet.hunger    - PET_HUNGER_PER_TICK);
    state.pet.happiness = Math.max(0, state.pet.happiness - PET_HAPPINESS_PER_TICK);
    state.pet.lastSeen  = Date.now();
    savePet();
    if (state.currentNav === 'pet') refreshPetUI();
  }, PET_DECAY_TICK_MS);
}
function stopPetDecayTimer() {
  if (state.decayTimer) { clearInterval(state.decayTimer); state.decayTimer = null; }
}

// When the app comes back to foreground after the OS suspended us (phone
// asleep, tab in background), the 60s interval may have skipped many ticks.
// Run a catch-up + refresh visible UI so the bars look right immediately.
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState !== 'visible' || !state.pet) return;
  petCatchUpDecay();
  regenHearts();
  if (state.currentNav === 'pet') refreshPetUI();
  syncHeartsChip();
});

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

  // Pattern: clear all then add the active one (animated skin)
  ['has-galaxy','has-sunset','has-rainbow','has-aurora'].forEach(cls => svg.classList.remove(cls));
  if (c.pattern) svg.classList.add('has-' + c.pattern);

  // Hat — render via SVG text
  const hatGroup = $('ax-hat');
  hatGroup.innerHTML = '';
  if (state.pet.hat) {
    const hat = PET_HATS.find(h => h.id === state.pet.hat);
    if (hat && hat.id) {
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      text.setAttribute('x', '140');
      text.setAttribute('y', '54');
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('font-size', '38');
      text.textContent = hat.emoji;
      hatGroup.appendChild(text);
    }
  }

  // Accessory (glasses/scarves/etc.) — render as SVG text overlay
  let accGroup = svg.querySelector('#ax-accessory');
  if (!accGroup) {
    accGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    accGroup.setAttribute('id', 'ax-accessory');
    accGroup.setAttribute('class', 'ax-accessory');
    svg.appendChild(accGroup);
  }
  accGroup.innerHTML = '';
  if (state.pet.accessory) {
    const acc = PET_ACCESSORIES.find(a => a.id === state.pet.accessory);
    if (acc && acc.id) {
      const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
      // Position varies by accessory type
      const pos = ACCESSORY_POS[acc.id] || { x: 140, y: 92, size: 22 };
      text.setAttribute('x', pos.x);
      text.setAttribute('y', pos.y);
      text.setAttribute('text-anchor', 'middle');
      text.setAttribute('font-size', pos.size);
      text.textContent = acc.emoji;
      accGroup.appendChild(text);
    }
  }

  // Tank background theme
  const tank = document.querySelector('.pet-tank');
  if (tank) {
    const bg = PET_BACKGROUNDS.find(b => b.id === state.pet.background) || PET_BACKGROUNDS[0];
    tank.style.background = 'linear-gradient(180deg, ' + bg.grad.join(', ') + ')';
  }
}

// Where each accessory sits relative to the axolotl head (viewBox 0 0 220 180)
const ACCESSORY_POS = {
  shades:     { x: 140, y: 94, size: 26 },
  glasses:    { x: 140, y: 94, size: 26 },
  bowtie:     { x: 112, y: 134, size: 22 },
  medal:      { x: 112, y: 134, size: 22 },
  scarf:      { x: 112, y: 132, size: 26 },
  headphones: { x: 140, y: 74, size: 32 },
  mustache:   { x: 140, y: 112, size: 22 },
};

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

// "Acariciar" — give happiness, trigger wiggle reaction.
// Track quick repeat-clicks to escalate into a heart-eyed bounce.
let _petClickCount = 0;
let _petClickTimer = null;
$('pet-action-pet')?.addEventListener('click', () => {
  if (!state.pet) return;
  haptic.light();
  state.pet.happiness = Math.min(100, state.pet.happiness + 5);
  const wrap = $('axolotl-wrap');
  const svg = $('axolotl-svg');
  wrap.classList.add('is-petting');

  // Escalating affection: 1st click → wiggle, 2nd → bounce, 3+ → heart-eyes & sparkles
  _petClickCount++;
  clearTimeout(_petClickTimer);
  _petClickTimer = setTimeout(() => { _petClickCount = 0; }, 1500);

  if (_petClickCount >= 3) {
    spawnHearts(6);
    spawnSparkleBurst(8);
    pulseClass(svg, 'is-heart-eyes', 1500);
    pulseClass(svg, 'is-bounce', 900);
    setTimeout(() => wrap.classList.remove('is-petting'), 1500);
  } else if (_petClickCount === 2) {
    spawnHearts(4);
    pulseClass(svg, 'is-bounce', 900);
    setTimeout(() => wrap.classList.remove('is-petting'), 900);
  } else {
    spawnHearts(3);
    pulseClass(svg, 'is-happy', 850);
    setTimeout(() => wrap.classList.remove('is-petting'), 850);
  }
  savePet();
  refreshPetUI();
});

// "Alimentar" — feed: spin + chomp animation, with a star-eyed flourish
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
  // Brief star-eyes after the spin lands
  setTimeout(() => pulseClass(svg, 'is-star-eyes', 900), 1100);
  savePet();
  refreshPetUI();
});

// "Jugar" — toss a ball that the axolotl chases, giving happiness
$('pet-action-play')?.addEventListener('click', () => {
  if (!state.pet) return;
  haptic.light();
  state.pet.happiness = Math.min(100, state.pet.happiness + 6);
  spawnPlayBall();
  const svg = $('axolotl-svg');
  // Chase the ball: dash, then bounce in happiness
  pulseClass($('axolotl-wrap'), 'is-dashing', 1200);
  pulseClass(svg, 'is-star-eyes', 1400);
  setTimeout(() => {
    pulseClass(svg, 'is-bounce', 900);
    spawnHearts(3);
    spawnSparkleBurst(6);
  }, 1100);
  savePet();
  refreshPetUI();
});

// Bounce a tennis ball across the tank — the axolotl "chases" it via is-dashing
function spawnPlayBall() {
  const tank = document.querySelector('.pet-tank');
  if (!tank) return;
  const ball = document.createElement('div');
  ball.className = 'play-ball';
  tank.appendChild(ball);
  setTimeout(() => ball.remove(), 1800);
}

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

// ── Tiny aquarium bubbles to scatter inside a mini-axolotl frame ──
function renderLexBubbleParticles() {
  return `
    <span class="lex-mini-bubble" style="width:4px;height:4px;left:14%;animation-duration:3.2s;animation-delay:0.2s;"></span>
    <span class="lex-mini-bubble" style="width:3px;height:3px;left:34%;animation-duration:4.1s;animation-delay:1.4s;"></span>
    <span class="lex-mini-bubble" style="width:5px;height:5px;left:60%;animation-duration:3.5s;animation-delay:0.7s;"></span>
    <span class="lex-mini-bubble" style="width:3px;height:3px;left:82%;animation-duration:4.6s;animation-delay:2.1s;"></span>
    <span class="lex-mini-bubble" style="width:2px;height:2px;left:48%;animation-duration:3s;  animation-delay:2.6s;"></span>
  `;
}

// ── Mini axolotl renderer (used inside lesson speech bubbles) ──
function renderMiniAxolotlSVG() {
  const pet  = state.pet;
  const c    = (pet && PET_COLORS.find(x => x.id === pet.color)) || PET_COLORS[0];
  const hat  = pet && pet.hat ? PET_HATS.find(h => h.id === pet.hat) : null;
  const acc  = pet && pet.accessory ? PET_ACCESSORIES.find(a => a.id === pet.accessory) : null;
  const vars = `--ax-body:${c.body};--ax-belly:${c.belly};--ax-gill:${c.gill};--ax-cheek:${c.cheek}`;
  const patternCls = c.pattern ? ' has-' + c.pattern : '';
  const hatMarkup = (hat && hat.id) ? `<text x="140" y="56" text-anchor="middle" font-size="42">${hat.emoji}</text>` : '';
  let accMarkup = '';
  if (acc && acc.id) {
    const p = ACCESSORY_POS[acc.id] || { x: 140, y: 92, size: 22 };
    accMarkup = `<text class="ax-accessory" x="${p.x}" y="${p.y}" text-anchor="middle" font-size="${p.size}">${acc.emoji}</text>`;
  }
  return `
    <svg class="mini-axolotl axolotl${patternCls}" viewBox="0 0 220 180" style="${vars}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path class="ax-tail" d="M48 110 Q22 108 6 92 Q14 110 8 128 Q24 116 48 120 Z"/>
      <ellipse class="ax-body" cx="112" cy="115" rx="60" ry="26"/>
      <ellipse class="ax-belly" cx="118" cy="122" rx="44" ry="11"/>
      <ellipse class="ax-leg" cx="86" cy="138" rx="8" ry="6"/>
      <ellipse class="ax-leg" cx="146" cy="138" rx="8" ry="6"/>
      <circle class="ax-head" cx="140" cy="88" r="40"/>
      <g class="ax-gills ax-gills-left">
        <path d="M104 64 Q80 46 70 60 Q82 60 90 70 Z"/>
        <path d="M104 74 Q76 64 70 80 Q82 76 92 84 Z"/>
        <path d="M106 86 Q82 88 74 102 Q86 96 100 96 Z"/>
      </g>
      <g class="ax-gills ax-gills-right">
        <path d="M176 64 Q200 46 210 60 Q198 60 190 70 Z"/>
        <path d="M176 74 Q204 64 210 80 Q198 76 188 84 Z"/>
        <path d="M174 86 Q198 88 206 102 Q194 96 180 96 Z"/>
      </g>
      <circle class="ax-cheek" cx="118" cy="98" r="5.5"/>
      <circle class="ax-cheek" cx="162" cy="98" r="5.5"/>
      <g class="ax-eyes">
        <circle class="ax-eye" cx="128" cy="86" r="4.2"/>
        <circle class="ax-eye" cx="152" cy="86" r="4.2"/>
        <circle class="ax-eye-shine" cx="129.3" cy="84.7" r="1.3"/>
        <circle class="ax-eye-shine" cx="153.3" cy="84.7" r="1.3"/>
      </g>
      <g class="ax-eyes-heart">
        <path d="M128 90.5 C124.4 87 121 86.5 121 83 C121 80 124 79 128 82.5 C132 79 135 80 135 83 C135 86.5 131.6 87 128 90.5 Z"/>
        <path d="M152 90.5 C148.4 87 145 86.5 145 83 C145 80 148 79 152 82.5 C156 79 159 80 159 83 C159 86.5 155.6 87 152 90.5 Z"/>
      </g>
      <g class="ax-eyes-star">
        <path d="M128 80 L130 84.5 L135 85 L131 88 L132 93 L128 90.5 L124 93 L125 88 L121 85 L126 84.5 Z"/>
        <path d="M152 80 L154 84.5 L159 85 L155 88 L156 93 L152 90.5 L148 93 L149 88 L145 85 L150 84.5 Z"/>
      </g>
      <path class="ax-mouth ax-mouth-happy" d="M134 104 Q140 109 146 104"/>
      <path class="ax-mouth ax-mouth-sad" d="M134 108 Q140 100 146 108"/>
      ${hatMarkup}
      ${accMarkup}
    </svg>`;
}

// ── Spawn a single floating bubble from the axolotl's mouth area ──
function spawnBlowBubble() {
  const wrap = $('axolotl-wrap');
  const tank = document.querySelector('.pet-tank');
  if (!wrap || !tank) return;
  const rect = wrap.getBoundingClientRect();
  const tankRect = tank.getBoundingClientRect();
  // Mouth is at ~x=140/220, y=106/180 of the wrap — roughly 64%, 59%
  const left = (rect.left - tankRect.left) + rect.width  * 0.64;
  const top  = (rect.top  - tankRect.top)  + rect.height * 0.55;
  const b = document.createElement('div');
  b.className = 'ax-blow-bubble';
  b.style.left = left + 'px';
  b.style.top  = top  + 'px';
  tank.appendChild(b);
  setTimeout(() => b.remove(), 1700);
}

// ── Spawn a quick burst of sparkles from the axolotl (celebrations) ──
function spawnSparkleBurst(count = 10) {
  const wrap = $('axolotl-wrap');
  if (!wrap) return;
  for (let i = 0; i < count; i++) {
    const s = document.createElement('div');
    s.className = 'spark-burst';
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.6;
    const dist  = 50 + Math.random() * 50;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist;
    s.style.left = '50%';
    s.style.top  = '45%';
    s.style.setProperty('--spark-end', `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`);
    s.style.animationDelay = (i * 0.04) + 's';
    wrap.appendChild(s);
    setTimeout(() => s.remove(), 1000);
  }
}

// ── Random idle scheduler — picks fun behaviors when the axolotl is awake ──
function scheduleNextIdleQuirk() {
  const delay = 6000 + Math.random() * 10000;
  setTimeout(() => {
    const wrap = $('axolotl-wrap');
    const svg = $('axolotl-svg');
    if (
      wrap && svg && state.currentNav === 'pet' &&
      !svg.classList.contains('is-sleepy') &&
      !svg.classList.contains('is-spin') &&
      !svg.classList.contains('is-celebrate') &&
      !svg.classList.contains('is-flip') &&
      !svg.classList.contains('is-bounce') &&
      !svg.classList.contains('is-bubble') &&
      !svg.classList.contains('is-yawn') &&
      !svg.classList.contains('is-wink') &&
      !svg.classList.contains('is-nod') &&
      !svg.classList.contains('is-disco') &&
      !wrap.classList.contains('is-petting') &&
      !wrap.classList.contains('is-dashing')
    ) {
      // Weighted picker — wider variety than before, with the more striking
      // moves kept rare so the tank still feels calm.
      const r = Math.random();
      if (r < 0.28) {
        pulseClass(svg, 'is-bubble', 1400);
        setTimeout(() => spawnBlowBubble(), 350);
      } else if (r < 0.45) {
        pulseClass(svg, 'is-peek', 1600);
      } else if (r < 0.58) {
        pulseClass(svg, 'is-flip', 950);
        spawnDashBubbles(3);
      } else if (r < 0.70) {
        pulseClass(svg, 'is-yawn', 1400);
      } else if (r < 0.80) {
        // Quick wink at the player
        pulseClass(svg, 'is-wink', 1200);
      } else if (r < 0.88) {
        // Excited nod
        pulseClass(svg, 'is-nod', 900);
      } else if (r < 0.94) {
        // Little disco shimmy
        pulseClass(svg, 'is-disco', 1150);
      } else {
        // Rare: chase its tail with a small dash
        pulseClass(wrap, 'is-dashing', 1200);
        spawnDashBubbles(5);
      }
    }
    scheduleNextIdleQuirk();
  }, delay);
}
scheduleNextIdleQuirk();

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
  buildAccessoryPicker();
  buildBackgroundPicker();
  setCustomizeTab('color');
  $('customize-modal').classList.remove('hidden');
});
$('customize-close')?.addEventListener('click', () => {
  $('customize-modal').classList.add('hidden');
});

// Customize tabs
document.querySelectorAll('.cust-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    haptic.light();
    setCustomizeTab(tab.dataset.tab);
  });
});
function setCustomizeTab(name) {
  document.querySelectorAll('.cust-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === name));
  document.querySelectorAll('.cust-panel').forEach(p => p.classList.toggle('hidden', p.dataset.panel !== name));
}

function buildColorPicker() {
  const wrap = $('color-picker');
  wrap.innerHTML = '';
  PET_COLORS.forEach(c => {
    const sw = document.createElement('div');
    sw.className = 'color-swatch' + (c.pattern ? ' is-pattern has-' + c.pattern : '');
    sw.style.background = `radial-gradient(circle at 30% 30%, ${c.belly}, ${c.body} 60%, ${c.gill})`;
    sw.title = c.name + (state.pet.level < c.requires ? ` (Nv. ${c.requires})` : '');
    if (state.pet.level < c.requires) {
      sw.classList.add('locked');
      sw.dataset.req = 'Nv.' + c.requires;
    }
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

function buildAccessoryPicker() {
  const wrap = $('accessory-picker');
  if (!wrap) return;
  wrap.innerHTML = '';
  PET_ACCESSORIES.forEach(a => {
    const op = document.createElement('div');
    op.className = 'hat-option';
    if (a.id === null) {
      const span = document.createElement('span');
      span.className = 'hat-none';
      span.textContent = 'Sin';
      op.appendChild(span);
    } else {
      op.textContent = a.emoji;
    }
    if (a.requires > 0 && state.pet.level < a.requires) {
      op.classList.add('locked');
      op.dataset.req = 'Nv. ' + a.requires;
    }
    if (state.pet.accessory === a.id) op.classList.add('selected');
    op.addEventListener('click', () => {
      if (a.requires > 0 && state.pet.level < a.requires) { haptic.error(); return; }
      haptic.light();
      state.pet.accessory = a.id;
      savePet();
      buildAccessoryPicker();
      applyPetVisuals();
    });
    wrap.appendChild(op);
  });
}

function buildBackgroundPicker() {
  const wrap = $('bg-picker');
  if (!wrap) return;
  wrap.innerHTML = '';
  PET_BACKGROUNDS.forEach(b => {
    const op = document.createElement('div');
    op.className = 'bg-option';
    op.style.background = 'linear-gradient(180deg, ' + b.grad.join(', ') + ')';
    op.title = b.name;
    const label = document.createElement('span');
    label.className = 'bg-option-label';
    label.textContent = b.name;
    op.appendChild(label);
    if (b.requires > 0 && state.pet.level < b.requires) {
      op.classList.add('locked');
      op.dataset.req = 'Nv. ' + b.requires;
    }
    if ((state.pet.background || 'ocean') === b.id) op.classList.add('selected');
    op.addEventListener('click', () => {
      if (b.requires > 0 && state.pet.level < b.requires) { haptic.error(); return; }
      haptic.light();
      state.pet.background = b.id;
      savePet();
      buildBackgroundPicker();
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
  syncAudioChip();
  syncHeartsChip();
  if (!state.pet) return;
  const sn = $('topbar-streak-num'); if (sn) sn.textContent = state.pet.streak;
  const xn = $('topbar-xp-num');     if (xn) xn.textContent = state.pet.totalXp;
}

function syncAudioChip() {
  const chip = $('topbar-audio');
  const ico  = $('topbar-audio-ico');
  if (!chip || !ico) return;
  const on = TTS.isEnabled();
  ico.textContent = on ? '🔊' : '🔇';
  chip.classList.toggle('muted', !on);
}

$('topbar-audio')?.addEventListener('click', () => {
  haptic.light();
  const next = !TTS.isEnabled();
  TTS.setEnabled(next);
  syncAudioChip();
  if (next) TTS.speak('hola', { rate: 1 }); // brief feedback chirp
});

// ══════════════════════════════════════════════════════════
//  DUOLINGO-STYLE LESSONS
// ══════════════════════════════════════════════════════════

// Exercise types:
//   t='pick'       — show prompt + 4 options (emoji+text), pick correct
//   t='translate'  — show source sentence, build target with tiles
//   t='match'      — match 4 Spanish words with their L1 translations
//   t='fill'       — fill blank in sentence by picking the right word
//   t='typed'      — type the Spanish answer (no tiles); accepts variants via `answers`
// Optional flags:
//   match.swap=true      — flip column orientation (RU left, ES right)
//   lesson.hearts=N      — override default 3 hearts for this lesson

// LESSONS used to be a giant inline array. They now live in
// data/lessons/manifest.json (metadata only) + data/lessons/unit-NN.json
// (5 lessons each, with full exercises). MANIFEST is the metadata cache
// rendered by the lessons-path UI; full lesson bodies are fetched lazily
// when the user actually starts a lesson.
let MANIFEST = [];
const LESSON_CACHE       = Object.create(null);
const UNIT_LOAD_PROMISES = Object.create(null);

async function loadManifest() {
  if (MANIFEST.length) return MANIFEST;
  const res = await fetch('data/lessons/manifest.json?_=' + Date.now(), { cache: 'no-store' });
  if (!res.ok) throw new Error('manifest fetch failed: ' + res.status);
  MANIFEST = await res.json();
  return MANIFEST;
}

function loadUnit(unitNum) {
  if (UNIT_LOAD_PROMISES[unitNum]) return UNIT_LOAD_PROMISES[unitNum];
  UNIT_LOAD_PROMISES[unitNum] = (async () => {
    const padded = String(unitNum).padStart(2, '0');
    const res = await fetch('data/lessons/unit-' + padded + '.json?_=' + Date.now(), { cache: 'no-store' });
    if (!res.ok) throw new Error('unit-' + padded + ' fetch failed: ' + res.status);
    const data = await res.json();
    for (const lesson of data.lessons) LESSON_CACHE[lesson.id] = lesson;
  })();
  return UNIT_LOAD_PROMISES[unitNum];
}

async function getLesson(id) {
  if (LESSON_CACHE[id]) return LESSON_CACHE[id];
  const meta = MANIFEST.find(m => m.id === id);
  if (!meta) return null;
  await loadUnit(meta.unit);
  return LESSON_CACHE[id];
}


// ── Lesson runtime state ─────────────────────────────────
const lessonState = {
  lessonId:    null,
  exercises:   [],   // copy of current lesson exercises
  current:     0,    // index of current exercise
  hearts:      3,
  maxHearts:   3,    // capacity (depends on lesson)
  wrong:       0,    // mistakes counter (for accuracy)
  pendingOk:   false,// last check was correct
  // Per-exercise inputs:
  pickChoice:  null,    // 'pick'
  buildAnswer: [],      // 'translate'
  buildBank:   [],
  matchPicks:  [],      // 'match' — currently selected tile { side, idx }
  matchPairs:  0,       // count solved
  fillChoice:  null,    // 'fill'
  typedAnswer: '',      // 'typed'
};

// Normalize a Spanish answer for typed-exercise comparison:
// lowercase, strip diacritics, collapse whitespace, strip terminal punctuation.
function normalizeAnswer(s) {
  if (s == null) return '';
  // Strip combining diacritics (U+0300–U+036F) so "manana" matches "mañana".
  return String(s)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[¿?¡!.,;]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function getLessonProgress() {
  if (!state.user) return {};
  // Reads from the Storage in-memory cache (populated by Storage.init in loginAs).
  return Storage.getJSON('lesson_progress', {});
}
function saveLessonProgress(prog) {
  if (!state.user) return;
  Storage.setJSON('lesson_progress', prog);
}

function lessonIsUnlocked(idx, prog) {
  if (idx === 0) return true;
  return !!prog[MANIFEST[idx - 1].id]?.completed;
}

// ── Render lessons path on home (Duolingo-style) ─────────
// Each "unit" is 5 lessons. Units cycle through a palette so the path
// visually breaks into chapters.
// Cool, desaturated jewel-tones tuned for the dark theme.
// Each unit has: `color` (face top), `accent` (3D base / darker rim),
// `glow` (subtle aura — same hue, lower opacity).
const UNIT_PALETTE = [
  { name: 'Unidad 1',  color: '#7c9eb2', accent: '#3d5566', glow: 'rgba(124,158,178,0.35)' }, // steel blue
  { name: 'Unidad 2',  color: '#8b7fb8', accent: '#4b416b', glow: 'rgba(139,127,184,0.35)' }, // lavender
  { name: 'Unidad 3',  color: '#7aa896', accent: '#3d5a4c', glow: 'rgba(122,168,150,0.35)' }, // sage
  { name: 'Unidad 4',  color: '#b89478', accent: '#6b513d', glow: 'rgba(184,148,120,0.35)' }, // warm sand
  { name: 'Unidad 5',  color: '#a37fb8', accent: '#5a426b', glow: 'rgba(163,127,184,0.35)' }, // mauve
  { name: 'Unidad 6',  color: '#6fa8a3', accent: '#385c59', glow: 'rgba(111,168,163,0.35)' }, // muted teal
  { name: 'Unidad 7',  color: '#b88a8a', accent: '#6b4848', glow: 'rgba(184,138,138,0.35)' }, // dusty rose
  { name: 'Unidad 8',  color: '#8c95c9', accent: '#4a527a', glow: 'rgba(140,149,201,0.35)' }, // periwinkle
  { name: 'Unidad 9',  color: '#b8a36d', accent: '#6b5d3d', glow: 'rgba(184,163,109,0.35)' }, // antique gold
  { name: 'Unidad 10', color: '#7c9eb2', accent: '#3d5566', glow: 'rgba(124,158,178,0.35)' },
  { name: 'Unidad 11', color: '#8b7fb8', accent: '#4b416b', glow: 'rgba(139,127,184,0.35)' },
];

const UNIT_SIZE = 5;

function renderLessonsPath() {
  const wrap = $('lessons-path');
  if (!wrap) return;
  wrap.innerHTML = '';

  // "Repaso de hoy" — surfaces SRS-due exercises above the path.
  renderReviewCard(wrap);

  const prog = getLessonProgress();
  const firstUnfinished = MANIFEST.findIndex((l, i) => lessonIsUnlocked(i, prog) && !prog[l.id]?.completed);

  let currentUnit = -1;
  let unitWrap = null;

  MANIFEST.forEach((lesson, idx) => {
    const unitIdx = Math.floor(idx / UNIT_SIZE);

    // New unit → emit a banner and new wrapper
    if (unitIdx !== currentUnit) {
      currentUnit = unitIdx;
      const palette = UNIT_PALETTE[unitIdx % UNIT_PALETTE.length];

      // Unit banner
      const banner = document.createElement('div');
      banner.className = 'unit-banner';
      banner.style.setProperty('--unit-color', palette.color);
      banner.style.setProperty('--unit-accent', palette.accent);
      banner.style.setProperty('--unit-glow', palette.glow);
      const fromIdx = unitIdx * UNIT_SIZE + 1;
      const toIdx = Math.min((unitIdx + 1) * UNIT_SIZE, MANIFEST.length);

      // "Test-out" eligibility: first lesson is reachable AND at least one
      // lesson in the unit is still pending AND unit has >1 lesson to skip.
      const firstLessonIdx = unitIdx * UNIT_SIZE;
      const unitLessons    = MANIFEST.slice(firstLessonIdx, firstLessonIdx + UNIT_SIZE);
      const unitFirstUnlocked = lessonIsUnlocked(firstLessonIdx, prog);
      const unitPending = unitLessons.some(l => !prog[l.id]?.completed);
      const unitCanTest = unitFirstUnlocked && unitPending && unitLessons.length >= 2;

      const rightSlot = unitCanTest
        ? `<button class="unit-test-btn" type="button" aria-label="Saltar bloque con un examen">
             <span class="utb-ico">🏆</span><span class="utb-lbl">Examen</span>
           </button>`
        : `<div class="unit-banner-icon">${!unitPending ? '👑' : (unitFirstUnlocked ? '📘' : '🔒')}</div>`;

      banner.innerHTML = `
        <div class="unit-banner-inner">
          <div class="unit-banner-meta">
            <div class="unit-banner-kicker">${palette.name}</div>
            <div class="unit-banner-title">Lecciones ${fromIdx}–${toIdx}</div>
          </div>
          ${rightSlot}
        </div>
      `;
      if (unitCanTest) {
        banner.querySelector('.unit-test-btn').addEventListener('click', (e) => {
          e.stopPropagation();
          haptic.medium();
          showUnitTestPreview(unitIdx);
        });
      }
      wrap.appendChild(banner);

      unitWrap = document.createElement('div');
      unitWrap.className = 'unit-path';
      unitWrap.style.setProperty('--unit-color', palette.color);
      unitWrap.style.setProperty('--unit-accent', palette.accent);
      unitWrap.style.setProperty('--unit-glow', palette.glow);
      wrap.appendChild(unitWrap);
    }

    const unlocked = lessonIsUnlocked(idx, prog);
    const completed = !!prog[lesson.id]?.completed;
    const isCurrent = idx === firstUnfinished && !completed;
    const isReview = /^Repaso/i.test(lesson.name);

    // Outer slot positions the node along the zig-zag path
    const slot = document.createElement('div');
    slot.className = 'lesson-slot';
    if (isReview) slot.classList.add('is-review');

    const node = document.createElement('button');
    node.type = 'button';
    node.className = 'lesson-node';
    if (!unlocked) node.classList.add('locked');
    if (completed) node.classList.add('completed');
    if (isCurrent) node.classList.add('current');
    if (isReview) node.classList.add('review');

    // "EMPEZAR" pop-up tooltip above the current node
    if (isCurrent) {
      const cta = document.createElement('div');
      cta.className = 'lesson-cta-pop';
      cta.textContent = 'EMPEZAR';
      node.appendChild(cta);
    }

    // Inner button (the 3D part: top face on top of darker base)
    const face = document.createElement('span');
    face.className = 'lesson-node-face';
    if (unlocked) {
      const em = document.createElement('span');
      em.className = 'lesson-node-emoji';
      em.textContent = isReview ? '🏆' : lesson.emoji;
      face.appendChild(em);
    } else {
      const lock = document.createElement('span');
      lock.className = 'lock-ico';
      lock.textContent = '🔒';
      face.appendChild(lock);
    }
    node.appendChild(face);

    // Crown badge on completed lessons
    if (completed) {
      const crown = document.createElement('span');
      crown.className = 'lesson-crown';
      crown.textContent = '👑';
      node.appendChild(crown);
    }

    const lbl = document.createElement('span');
    lbl.className = 'lesson-node-label';
    lbl.textContent = lesson.name;

    node.addEventListener('click', () => {
      haptic.light();
      if (!unlocked) {
        flashLessonLocked(lesson, idx);
        return;
      }
      showLessonPreview(lesson, completed);
    });

    slot.appendChild(node);
    slot.appendChild(lbl);
    unitWrap.appendChild(slot);
  });
}

function flashLessonLocked(lesson, idx) {
  const prev = MANIFEST[idx - 1];
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
  // Greet the learner with the lesson name in Spanish, unless the lesson is locked.
  if (!opts.locked) TTS.speak(lesson.name);
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
async function startLesson(lessonId) {
  const lesson = await getLesson(lessonId);
  if (!lesson) return;
  if (!ensureHeartsForStart()) return;
  haptic.medium();
  lessonState.lessonId = lessonId;
  lessonState.isUnitTest = false;
  lessonState.isReview = false;
  lessonState.unitTestIdx = null;
  lessonState.virtualLesson = null;
  lessonState.exercises = shuffleExercises(lesson.exercises);
  lessonState.current = 0;
  lessonState.hearts = state.heartsState.count;
  lessonState.maxHearts = state.heartsState.max;
  lessonState.wrong = 0;
  lessonState.pendingOk = false;
  lessonState.streak = 0;
  lessonState.bestStreak = 0;
  showScreen('lesson');
  renderHearts();
  renderCurrentExercise();
  startLessonTutorQuirks();
}

// ── Unit "test-out" — skip a 5-lesson block by passing a mixed exam ──
// Picks 12 random exercises across all lessons in the unit. 2 hearts only.
// On pass: every lesson in the unit is marked completed with testedOut:true
// and the user gets a bigger XP reward. On fail: no penalty, no progress saved.
const UNIT_TEST_EX_COUNT = 12;
const UNIT_TEST_HEARTS   = 2;

async function buildUnitTestLesson(unitIdx) {
  const start = unitIdx * UNIT_SIZE;
  const end   = Math.min(start + UNIT_SIZE, MANIFEST.length);
  // Fetch full lesson bodies for the unit (one fetch covers all 5).
  const unitLessons = await Promise.all(
    MANIFEST.slice(start, end).map(meta => getLesson(meta.id))
  );

  // Pool every exercise from every lesson in the unit, then shuffle and trim.
  // Each exercise carries its source lesson id so SRS can later refetch
  // the right unit JSON to resolve overdue items into real exercises.
  const pool = [];
  unitLessons.forEach(l => l && l.exercises.forEach(ex => pool.push({ ...ex, __srcLesson: l.id })));
  const shuffled = pool.slice().sort(() => Math.random() - 0.5);
  const count = Math.min(UNIT_TEST_EX_COUNT, shuffled.length);

  return {
    id:       'unitTest_' + unitIdx,
    name:     'Examen Unidad ' + (unitIdx + 1),
    emoji:    '🏆',
    desc:     'Examen de las lecciones ' + (start + 1) + '–' + end,
    hearts:   UNIT_TEST_HEARTS,
    exercises: shuffled.slice(0, count),
    isUnitTest: true,
    unitIdx,
    fromIdx: start + 1,
    toIdx: end,
  };
}

function showUnitTestPreview(unitIdx) {
  const palette = UNIT_PALETTE[unitIdx % UNIT_PALETTE.length];
  const start = unitIdx * UNIT_SIZE;
  const end   = Math.min(start + UNIT_SIZE, MANIFEST.length);
  const blockSize = end - start;

  // Count how many of this unit's lessons are still pending (just for the message).
  const prog = getLessonProgress();
  const pending = MANIFEST.slice(start, end).filter(l => !prog[l.id]?.completed).length;

  const prev = document.createElement('div');
  prev.className = 'lesson-preview unit-test-preview';
  prev.innerHTML = `
    <div class="lesson-preview-card unit-test-card">
      <button class="lesson-preview-close" id="ut-close" aria-label="Cerrar">×</button>
      <div class="unit-test-trophy">🏆</div>
      <div class="unit-test-kicker" style="color:${palette.color}">${palette.name} · EXAMEN</div>
      <div class="lesson-preview-name">Saltar lecciones ${start + 1}–${end}</div>
      <div class="lesson-preview-desc">Si apruebas este examen, las <b>${blockSize} lecciones</b> de la unidad se marcarán como completadas. ${pending < blockSize ? '(' + (blockSize - pending) + ' ya están listas)' : ''}</div>
      <div class="unit-test-meta">
        <div class="utm-row"><span class="utm-ico">❤️</span><span>Solo <b>${UNIT_TEST_HEARTS} vidas</b></span></div>
        <div class="utm-row"><span class="utm-ico">📚</span><span><b>${UNIT_TEST_EX_COUNT} ejercicios</b> mezclados</span></div>
        <div class="utm-row"><span class="utm-ico">🎁</span><span>+150 XP si apruebas</span></div>
      </div>
      <button class="act-btn primary-btn" id="ut-start">¡Empezar examen!</button>
      <button class="act-btn ghost-btn" id="ut-cancel">Cancelar</button>
    </div>
  `;
  document.body.appendChild(prev);

  const close = () => prev.remove();
  prev.querySelector('#ut-close').addEventListener('click', close);
  prev.querySelector('#ut-cancel').addEventListener('click', close);
  prev.addEventListener('click', e => { if (e.target === prev) close(); });
  const onKey = e => { if (e.key === 'Escape') { close(); document.removeEventListener('keydown', onKey); } };
  document.addEventListener('keydown', onKey);
  prev.querySelector('#ut-start').addEventListener('click', () => {
    close();
    startUnitTest(unitIdx);
  });
}

async function startUnitTest(unitIdx) {
  const virtual = await buildUnitTestLesson(unitIdx);
  if (!virtual.exercises.length) return;
  if (!ensureHeartsForStart()) return;
  haptic.medium();
  lessonState.lessonId       = virtual.id;
  lessonState.virtualLesson  = virtual;
  lessonState.isUnitTest     = true;
  lessonState.isReview       = false;
  lessonState.unitTestIdx    = unitIdx;
  lessonState.exercises      = shuffleExercises(virtual.exercises);
  lessonState.current        = 0;
  lessonState.hearts         = state.heartsState.count;
  lessonState.maxHearts      = state.heartsState.max;
  lessonState.wrong          = 0;
  lessonState.pendingOk      = false;
  lessonState.streak         = 0;
  lessonState.bestStreak     = 0;
  showScreen('lesson');
  renderHearts();
  renderCurrentExercise();
  startLessonTutorQuirks();
}

// ── SRS review session ──────────────────────────────────────
// Surfaces the N most-overdue exercises as a 3-heart practice run.
// Unlike regular lessons, completing a review doesn't unlock anything —
// each correct/wrong answer simply updates the SRS record via the
// existing hook in onCheckPressed.

const REVIEW_BATCH = 12;
const REVIEW_HEARTS = 3;

function renderReviewCard(wrap) {
  const due = SRS.dueCount();
  if (due <= 0) return;
  const card = document.createElement('button');
  card.type = 'button';
  card.className = 'review-card';
  card.innerHTML = `
    <span class="review-card-ico">🔁</span>
    <span class="review-card-body">
      <span class="review-card-title">Repaso de hoy</span>
      <span class="review-card-sub">${due} ejercicio${due === 1 ? '' : 's'} para repasar</span>
    </span>
    <span class="review-card-arrow">›</span>
  `;
  card.addEventListener('click', () => {
    haptic.medium();
    startReviewSession();
  });
  wrap.appendChild(card);
}

async function startReviewSession() {
  const picks = SRS.pickDue(REVIEW_BATCH);
  if (!picks.length) return;
  const exercises = await SRS.resolveExercises(picks);
  if (!exercises.length) return;

  if (!ensureHeartsForStart()) return;
  haptic.medium();
  lessonState.lessonId      = 'srs_review';
  lessonState.virtualLesson = { id: 'srs_review', name: 'Repaso', exercises };
  lessonState.isUnitTest    = false;
  lessonState.isReview      = true;
  lessonState.unitTestIdx   = null;
  lessonState.exercises     = exercises.slice();   // already prioritised, don't reshuffle
  lessonState.current       = 0;
  lessonState.hearts        = state.heartsState.count;
  lessonState.maxHearts     = state.heartsState.max;
  lessonState.wrong         = 0;
  lessonState.pendingOk     = false;
  lessonState.streak        = 0;
  lessonState.bestStreak    = 0;
  showScreen('lesson');
  renderHearts();
  renderCurrentExercise();
  startLessonTutorQuirks();
}

// ── Random fun idle behaviors for the lesson axolotl ──
function startLessonTutorQuirks() {
  stopLessonTutorQuirks();
  const tick = () => {
    const tutors = document.querySelectorAll('#lesson-exercise .lesson-tutor-inline, #lesson-exercise .lex-bubble-avatar');
    if (!tutors.length || !screens.lesson?.classList.contains('active')) {
      stopLessonTutorQuirks();
      return;
    }
    const host = tutors[Math.floor(Math.random() * tutors.length)];
    const svg  = host.querySelector('.mini-axolotl');
    const quirks = [
      () => svg && pulseClass(svg, 'is-wink',       1200),
      () => svg && pulseClass(svg, 'is-bubble',     1400),
      () => svg && pulseClass(svg, 'is-nod',         900),
      () => svg && pulseClass(svg, 'is-star-eyes', 1100),
      () => svg && pulseClass(svg, 'is-heart-eyes',1000),
      () => spawnLexSparkles(host, 4),
      () => spawnFloatingEmojis(host, ['✨','💭'], 1),
    ];
    quirks[Math.floor(Math.random() * quirks.length)]();
    lessonState._quirkTimer = setTimeout(tick, 3200 + Math.random() * 2800);
  };
  lessonState._quirkTimer = setTimeout(tick, 1800 + Math.random() * 1600);
}

function stopLessonTutorQuirks() {
  if (lessonState._quirkTimer) {
    clearTimeout(lessonState._quirkTimer);
    lessonState._quirkTimer = null;
  }
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
  const cap = lessonState.maxHearts || 3;
  for (let i = 0; i < cap; i++) {
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
  lessonState.typedAnswer = '';

  const root = $('lesson-exercise');
  root.innerHTML = '';

  if (ex.t === 'pick')           renderPickExercise(root, ex);
  else if (ex.t === 'translate') renderTranslateExercise(root, ex);
  else if (ex.t === 'match')     renderMatchExercise(root, ex);
  else if (ex.t === 'fill')      renderFillExercise(root, ex);
  else if (ex.t === 'typed')     renderTypedExercise(root, ex);
}

// ── Exercise: pick (multiple choice) ─────────────────────
function renderPickExercise(root, ex) {
  prependLessonTutor(root);
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
      <button type="button" class="lex-option-speak" aria-label="Escuchar">🔊</button>
    `;
    card.addEventListener('click', () => {
      haptic.light();
      grid.querySelectorAll('.lex-option').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      lessonState.pickChoice = i;
      $('lesson-check-btn').disabled = false;
    });
    card.querySelector('.lex-option-speak').addEventListener('click', (e) => {
      e.stopPropagation();
      TTS.speak(opt.txt);
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
    <div class="lex-bubble-avatar is-entering">${renderLexBubbleParticles()}${renderMiniAxolotlSVG()}</div>
    <div class="lex-bubble-text">${ex.from}</div>
  `;
  root.appendChild(bubble);
  setTimeout(() => bubble.querySelector('.lex-bubble-avatar')?.classList.remove('is-entering'), 600);
  pulseClass(bubble.querySelector('.mini-axolotl'), 'is-swim-in', 800);

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
  prependLessonTutor(root);
  const inst = document.createElement('p');
  inst.className = 'lex-instruction';
  inst.textContent = 'Empareja las palabras';
  root.appendChild(inst);

  const grid = document.createElement('div');
  grid.className = 'lex-match-grid';
  root.appendChild(grid);

  // Build two columns of tiles. When ex.swap is set, RU appears on the left
  // and ES on the right — an "inverse" pairing for visual variety.
  const left  = ex.pairs.map((p, i) => ({ side: 'L', idx: i, text: ex.swap ? p[1] : p[0] }));
  const right = ex.pairs.map((p, i) => ({ side: 'R', idx: i, text: ex.swap ? p[0] : p[1] }));
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
      <div class="lex-bubble-avatar is-entering">${renderLexBubbleParticles()}${renderMiniAxolotlSVG()}</div>
      <div class="lex-bubble-text">${ex.hint}</div>
    `;
    root.appendChild(hint);
    setTimeout(() => hint.querySelector('.lex-bubble-avatar')?.classList.remove('is-entering'), 600);
    pulseClass(hint.querySelector('.mini-axolotl'), 'is-swim-in', 800);
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
    tile.className = 'lex-tile lex-tile-with-speak';
    tile.innerHTML = `<button type="button" class="lex-tile-speak" aria-label="Escuchar">🔊</button><span class="lex-tile-text"></span>`;
    tile.querySelector('.lex-tile-text').textContent = opt;
    tile.addEventListener('click', () => {
      haptic.light();
      lessonState.fillChoice = opt;
      opts.querySelectorAll('.lex-tile').forEach(t => t.classList.remove('in-answer'));
      tile.classList.add('in-answer');
      drawFillSentence(sentence, ex);
      $('lesson-check-btn').disabled = false;
    });
    tile.querySelector('.lex-tile-speak').addEventListener('click', (e) => {
      e.stopPropagation();
      TTS.speak(opt);
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

// ── Exercise: typed (no tiles — user types Spanish) ──────
function renderTypedExercise(root, ex) {
  const inst = document.createElement('p');
  inst.className = 'lex-instruction';
  inst.textContent = 'Escribe en español';
  root.appendChild(inst);

  const bubble = document.createElement('div');
  bubble.className = 'lex-bubble';
  bubble.innerHTML = `
    <div class="lex-bubble-avatar is-entering">${renderLexBubbleParticles()}${renderMiniAxolotlSVG()}</div>
    <div class="lex-bubble-text">${ex.from}</div>
  `;
  root.appendChild(bubble);
  setTimeout(() => bubble.querySelector('.lex-bubble-avatar')?.classList.remove('is-entering'), 600);
  pulseClass(bubble.querySelector('.mini-axolotl'), 'is-swim-in', 800);

  if (ex.hint) {
    const hint = document.createElement('div');
    hint.className = 'lex-typed-hint';
    hint.textContent = ex.hint;
    root.appendChild(hint);
  }

  const input = document.createElement('input');
  input.type = 'text';
  input.className = 'lex-typed-input';
  input.id = 'lex-typed-input';
  input.autocomplete = 'off';
  input.autocapitalize = 'none';
  input.spellcheck = false;
  input.placeholder = 'Escribe aquí…';
  input.addEventListener('input', () => {
    lessonState.typedAnswer = input.value;
    $('lesson-check-btn').disabled = input.value.trim().length === 0;
  });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && input.value.trim()) {
      e.preventDefault();
      const btn = $('lesson-check-btn');
      if (btn.dataset.mode === 'continue') onContinuePressed();
      else onCheckPressed();
    }
  });
  root.appendChild(input);

  // Spanish-keyboard helper: tap to insert an accented char at the caret.
  const accents = document.createElement('div');
  accents.className = 'lex-accent-row';
  ['á','é','í','ó','ú','ñ','ü','¿','¡'].forEach(ch => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'lex-accent-btn';
    b.textContent = ch;
    b.addEventListener('mousedown', (e) => e.preventDefault()); // keep input focus
    b.addEventListener('click', () => {
      haptic.light();
      const start = input.selectionStart ?? input.value.length;
      const end   = input.selectionEnd   ?? input.value.length;
      input.value = input.value.slice(0, start) + ch + input.value.slice(end);
      const caret = start + ch.length;
      lessonState.typedAnswer = input.value;
      $('lesson-check-btn').disabled = input.value.trim().length === 0;
      input.focus();
      try { input.setSelectionRange(caret, caret); } catch {}
    });
    accents.appendChild(b);
  });
  root.appendChild(accents);

  setTimeout(() => input.focus(), 120);
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
  } else if (ex.t === 'typed') {
    const validAnswers = ex.answers || [ex.answer];
    const userNorm = normalizeAnswer(lessonState.typedAnswer);
    correct = userNorm.length > 0 && validAnswers.some(a => normalizeAnswer(a) === userNorm);
    userAnswerText = lessonState.typedAnswer || '';
    correctText = ex.answer || validAnswers[0];
  }

  showFeedback(correct, correctText);
  if (!correct) {
    lessonState.wrong++;
    loseHeart();
  }
  // SRS: record outcome for this exercise. The hash must be stable across
  // contexts, so strip the runtime-only __srcLesson marker before hashing.
  // Unit-test exercises carry __srcLesson (set in buildUnitTestLesson) so
  // the review session can later refetch the right unit JSON.
  const { __srcLesson, ...exRaw } = ex;
  SRS.record(exRaw, correct, __srcLesson || lessonState.lessonId);
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
  // Speak the canonical Spanish answer so the learner hears correct pronunciation,
  // whether they got it right or wrong. Match exercises have no correctText.
  if (correctText) TTS.speak(correctText);
  // React with the lesson's mini axolotl in the speech bubble
  reactLessonMiniAxolotl(correct);
}

// Roster of mega-celebration "moves" — cycles through these once the streak
// hits 3 so every combo feels different. Each entry says which body class
// to apply to the SVG, plus which extra FX to spawn around the avatar.
const MEGA_MOVES = [
  { body: 'is-approach',  eyes: 'is-heart-eyes', fx: ['confetti', 'shockwave-warm', 'aura'] },
  { body: 'is-backflip',  eyes: 'is-star-eyes',  fx: ['confetti', 'lightning', 'aura'] },
  { body: 'is-tornado',   eyes: 'is-heart-eyes', fx: ['confetti', 'shockwave-cool', 'galaxy'] },
  { body: 'is-disco',     eyes: 'is-star-eyes',  fx: ['confetti', 'shockwave-warm', 'fireworks'] },
  { body: 'is-jump-spin', eyes: 'is-heart-eyes', fx: ['confetti', 'aura', 'lightning'] },
  { body: 'is-shimmy',    eyes: 'is-star-eyes',  fx: ['confetti', 'fireworks', 'shockwave-warm'] },
  { body: 'is-cartwheel', eyes: 'is-heart-eyes', fx: ['confetti', 'galaxy', 'shockwave-cool'] },
  { body: 'is-bigwave',   eyes: 'is-star-eyes',  fx: ['confetti', 'shockwave-warm', 'shockwave-cool', 'lightning'] },
  { body: 'is-popup',     eyes: 'is-heart-eyes', fx: ['confetti', 'fireworks', 'aura'] },
];

// Make every mini axolotl in the active lesson react to a check
function reactLessonMiniAxolotl(correct) {
  const avatars = document.querySelectorAll('#lesson-exercise .lex-bubble-avatar, #lesson-exercise .lesson-tutor-inline');
  // Track streak (consecutive correct answers within a lesson)
  if (correct) {
    lessonState.streak = (lessonState.streak || 0) + 1;
    if (lessonState.streak > (lessonState.bestStreak || 0)) {
      lessonState.bestStreak = lessonState.streak;
    }
  } else {
    lessonState.streak = 0;
  }
  const streak = lessonState.streak || 0;
  const isMega = correct && streak >= 3;
  // Tier: 1 = standard mega (3-4), 2 = epic (5-6), 3 = legendary (7+)
  const tier = streak >= 7 ? 3 : streak >= 5 ? 2 : 1;

  avatars.forEach(avatar => {
    const svg = avatar.querySelector('.mini-axolotl');
    if (correct) {
      if (isMega) {
        // ── MEGA combo celebration (varied!) ──────────
        // Pick a move from the roster — for streak 3,4,5,6,7,8… we step through
        // the list so the first few combos are all unique. Then randomize.
        const moveIdx = streak < (3 + MEGA_MOVES.length)
          ? (streak - 3)
          : Math.floor(Math.random() * MEGA_MOVES.length);
        const move = MEGA_MOVES[moveIdx % MEGA_MOVES.length];

        pulseClass(avatar, 'is-mega', 1400);
        if (tier >= 2) pulseClass(avatar, 'is-epic',      1500);
        if (tier >= 3) pulseClass(avatar, 'is-legendary', 1700);
        if (svg) {
          pulseClass(svg, 'is-rainbow', tier >= 3 ? 1800 : 1400);
          pulseClass(svg, move.eyes,    1300);
          pulseClass(svg, move.body,    1200);
        }
        // Spawn the FX set for the chosen move
        move.fx.forEach(name => spawnComboFx(name, avatar));
        // Tier upgrades stack additional ambience on top
        const confettiCount = tier === 3 ? 44 : tier === 2 ? 34 : 26;
        spawnConfetti(avatar, confettiCount);
        spawnFloatingEmojis(avatar, pickMegaEmojis(tier), tier === 3 ? 12 : tier === 2 ? 9 : 6);
        spawnStreakAura(avatar);
        if (tier >= 2) spawnFireworks(avatar, tier === 3 ? 5 : 3);
        if (tier >= 3) {
          spawnHalo(avatar);
          spawnGalaxySwirl(avatar);
        }
        const label = tier === 3 ? '¡LEGENDARIO x' + streak + '!'
                    : tier === 2 ? '¡INCREÍBLE x' + streak + '!'
                    :              '¡COMBO x' + streak + '!';
        spawnComboText(avatar, label);
      } else {
        // ── Standard correct reaction ─────────────────
        pulseClass(avatar, 'is-bounce', 720);
        if (svg) {
          // Eye reaction (heart or star)
          const eyeFx = Math.random() < 0.5 ? 'is-heart-eyes' : 'is-star-eyes';
          pulseClass(svg, eyeFx, 1100);
          // Body reaction — wider variety: wiggle / backflip / approach / lean-in
          const pick = Math.random();
          if      (pick < 0.30) pulseClass(svg, 'is-approach', 1250);
          else if (pick < 0.50) pulseClass(svg, 'is-backflip', 1000);
          else if (pick < 0.65) pulseClass(svg, 'is-lean-in', 1500);
          else                  pulseClass(svg, 'is-happy', 880);
        }
        spawnLexSparkles(avatar, 10);
        spawnConfetti(avatar, 12);
        spawnFloatingEmojis(avatar, pickEncouragingEmojis(), 3);
        spawnShockwave(avatar, 'warm');
        if (streak === 2) spawnComboText(avatar, '¡Dos seguidas!', 'small');
        else if (Math.random() < 0.55) spawnComboText(avatar, pickCorrectWord(), 'small');
      }
    } else {
      // ── Wrong answer ────────────────────────────────
      pulseClass(avatar, 'is-shake', 620);
      if (svg) {
        pulseClass(svg, 'is-sad', 1200);
        pulseClass(svg, 'is-dizzy', 1100);
      }
      spawnTearDrop(avatar);
      spawnDizzyStars(avatar, 4);
      spawnSweat(avatar);
    }
  });
}

// Dispatch helper used by the MEGA_MOVES roster
function spawnComboFx(kind, host) {
  if (!host) return;
  switch (kind) {
    case 'confetti':       spawnConfetti(host, 16);                  break;
    case 'lightning':      spawnLightningBolts(host, 4);             break;
    case 'shockwave-warm': spawnShockwave(host, 'warm');             break;
    case 'shockwave-cool': spawnShockwave(host, 'cool', 180);        break;
    case 'aura':           spawnStreakAura(host);                    break;
    case 'fireworks':      spawnFireworks(host, 2);                  break;
    case 'galaxy':         spawnGalaxySwirl(host);                   break;
    case 'halo':           spawnHalo(host);                          break;
  }
}

function pickMegaEmojis(tier) {
  if (tier === 3) return ['👑','🌟','💎','🔥','✨','⚡','🎆','🏆'];
  if (tier === 2) return ['🔥','⭐','✨','💫','🎉','🌟','⚡'];
  return ['⭐','✨','💫','🎉','🌟','🔥'];
}

// Word pools for floating text
function pickEncouragingEmojis() {
  const pool = [['⭐','✨'], ['🎉','✨'], ['💫','⭐'], ['🌟','✨'], ['💖','✨']];
  return pool[Math.floor(Math.random() * pool.length)];
}
function pickCorrectWord() {
  const pool = ['¡Bien!','¡Sí!','¡Genial!','¡Olé!','¡Excelente!','¡Perfecto!','¡Wow!','¡Súper!'];
  return pool[Math.floor(Math.random() * pool.length)];
}

// Helper: get the (x,y) center of `host` inside its offset parent for FX positioning.
function fxCenterIn(host, parent) {
  const hr = host.getBoundingClientRect();
  const pr = parent.getBoundingClientRect();
  return {
    cx: hr.left - pr.left + hr.width  / 2,
    cy: hr.top  - pr.top  + hr.height / 2,
    w:  hr.width,
    h:  hr.height,
    top: hr.top - pr.top,
  };
}

// Confetti burst that scatters from the avatar
function spawnConfetti(host, count = 14) {
  if (!host) return;
  const parent = host.parentElement || host;
  const { cx, cy } = fxCenterIn(host, parent);
  const COLORS = ['#ffd86b','#ff8edc','#80e3ff','#c0ff90','#ff8a8a','#ffffff','#b388ff'];
  for (let i = 0; i < count; i++) {
    const c = document.createElement('span');
    c.className = 'lex-confetti';
    const angle = -Math.PI/2 + (Math.random() - 0.5) * Math.PI * 1.6;
    const power = 55 + Math.random() * 90;
    const dx = Math.cos(angle) * power;
    const dy = Math.sin(angle) * power + 35 + Math.random() * 60;
    c.style.left = cx + 'px';
    c.style.top  = cy + 'px';
    c.style.background = COLORS[Math.floor(Math.random() * COLORS.length)];
    c.style.setProperty('--dx',  dx.toFixed(1) + 'px');
    c.style.setProperty('--dy',  dy.toFixed(1) + 'px');
    c.style.setProperty('--rot', (Math.random() * 900 - 450).toFixed(0) + 'deg');
    c.style.setProperty('--dur', (1.0 + Math.random() * 0.9).toFixed(2) + 's');
    c.style.animationDelay = (Math.random() * 0.12).toFixed(2) + 's';
    parent.appendChild(c);
    setTimeout(() => c.remove(), 2200);
  }
}

// Floating combo / encouragement text
function spawnComboText(host, text, size) {
  if (!host || !text) return;
  const parent = host.parentElement || host;
  const { cx, top } = fxCenterIn(host, parent);
  const t = document.createElement('div');
  t.className = 'lex-combo-text' + (size === 'small' ? ' small' : '');
  t.textContent = text;
  t.style.left = cx + 'px';
  t.style.top  = (top + 6) + 'px';
  parent.appendChild(t);
  setTimeout(() => t.remove(), 1500);
}

// Expanding shockwave ring
function spawnShockwave(host, tone, delay) {
  if (!host) return;
  const parent = host.parentElement || host;
  const { cx, cy, w } = fxCenterIn(host, parent);
  const r = w * 0.7;
  const ring = document.createElement('div');
  ring.className = 'lex-shockwave' + (tone === 'cool' ? ' cool' : '');
  ring.style.left = cx + 'px';
  ring.style.top  = cy + 'px';
  ring.style.width  = r + 'px';
  ring.style.height = r + 'px';
  if (delay) ring.style.animationDelay = (delay / 1000).toFixed(2) + 's';
  parent.appendChild(ring);
  setTimeout(() => ring.remove(), 1100 + (delay || 0));
}

// Floating emojis that drift up and fade
function spawnFloatingEmojis(host, emojis, count = 4) {
  if (!host || !emojis || !emojis.length) return;
  const parent = host.parentElement || host;
  const { cx, cy } = fxCenterIn(host, parent);
  for (let i = 0; i < count; i++) {
    const e = document.createElement('div');
    e.className = 'lex-float-emoji';
    e.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    e.style.left = cx + 'px';
    e.style.top  = cy + 'px';
    e.style.animationDelay = (i * 0.07).toFixed(2) + 's';
    const ex  = (Math.random() - 0.5) * 90;
    const ey  = -65 - Math.random() * 55;
    const rot = (Math.random() - 0.5) * 50;
    e.style.setProperty('--ex',  ex.toFixed(1) + 'px');
    e.style.setProperty('--ey',  ey.toFixed(1) + 'px');
    e.style.setProperty('--rot', rot.toFixed(0) + 'deg');
    parent.appendChild(e);
    setTimeout(() => e.remove(), 1700);
  }
}

// Stars orbiting the avatar (dizzy)
function spawnDizzyStars(host, count = 3) {
  if (!host) return;
  const parent = host.parentElement || host;
  const { cx, cy } = fxCenterIn(host, parent);
  for (let i = 0; i < count; i++) {
    const s = document.createElement('div');
    s.className = 'lex-dizzy-star';
    s.textContent = '⭐';
    s.style.left = cx + 'px';
    s.style.top  = (cy - 6) + 'px';
    s.style.setProperty('--start', (i * 360 / count).toFixed(0) + 'deg');
    s.style.animationDelay = (i * 0.05).toFixed(2) + 's';
    parent.appendChild(s);
    setTimeout(() => s.remove(), 1300);
  }
}

// Sweat drop (small panicked anime sweat)
function spawnSweat(host) {
  if (!host) return;
  const s = document.createElement('div');
  s.className = 'lex-sweat';
  host.appendChild(s);
  setTimeout(() => s.remove(), 1150);
}

// Fire aura around the avatar (streak)
function spawnStreakAura(host) {
  if (!host) return;
  const aura = document.createElement('div');
  aura.className = 'lex-streak-fire';
  host.appendChild(aura);
  setTimeout(() => aura.remove(), 1800);
}

// Quick lightning bolt flashes around the avatar
function spawnLightningBolts(host, count = 3) {
  if (!host) return;
  const parent = host.parentElement || host;
  const { cx, cy, w } = fxCenterIn(host, parent);
  const radius = w * 0.55;
  for (let i = 0; i < count; i++) {
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.4;
    const x = cx + Math.cos(angle) * radius;
    const y = cy + Math.sin(angle) * radius;
    const rot = (angle * 180 / Math.PI) + 90 + (Math.random() - 0.5) * 18;
    const b = document.createElement('div');
    b.className = 'lex-bolt';
    b.style.left = x + 'px';
    b.style.top  = y + 'px';
    b.style.setProperty('--bolt-rot', rot.toFixed(0) + 'deg');
    b.style.animationDelay = (i * 0.06).toFixed(2) + 's';
    parent.appendChild(b);
    setTimeout(() => b.remove(), 700);
  }
}

// Fireworks burst — multiple rocket trails that explode into sparks
function spawnFireworks(host, count = 3) {
  if (!host) return;
  const parent = host.parentElement || host;
  const { cx, cy, w } = fxCenterIn(host, parent);
  const COLORS = ['#ffd86b','#ff8edc','#80e3ff','#c0ff90','#ff8a8a','#b388ff'];
  for (let r = 0; r < count; r++) {
    const angle = -Math.PI/2 + (Math.random() - 0.5) * Math.PI * 0.9;
    const dist  = w * 0.6 + Math.random() * w * 0.4;
    const x = cx + Math.cos(angle) * dist;
    const y = cy + Math.sin(angle) * dist - 18;
    const color = COLORS[Math.floor(Math.random() * COLORS.length)];
    // Rocket trail
    const trail = document.createElement('div');
    trail.className = 'lex-firework-trail';
    trail.style.left = cx + 'px';
    trail.style.top  = cy + 'px';
    trail.style.setProperty('--fx', (x - cx).toFixed(1) + 'px');
    trail.style.setProperty('--fy', (y - cy).toFixed(1) + 'px');
    trail.style.animationDelay = (r * 0.12).toFixed(2) + 's';
    parent.appendChild(trail);
    setTimeout(() => trail.remove(), 900);
    // Explosion at target
    const delayMs = 400 + r * 120;
    setTimeout(() => {
      const SPARK_COUNT = 10;
      for (let i = 0; i < SPARK_COUNT; i++) {
        const a  = (Math.PI * 2 * i) / SPARK_COUNT + Math.random() * 0.3;
        const dx = Math.cos(a) * (32 + Math.random() * 18);
        const dy = Math.sin(a) * (32 + Math.random() * 18);
        const s = document.createElement('div');
        s.className = 'lex-firework-spark';
        s.style.left = x + 'px';
        s.style.top  = y + 'px';
        s.style.background = color;
        s.style.boxShadow = '0 0 8px ' + color;
        s.style.setProperty('--sdx', dx.toFixed(1) + 'px');
        s.style.setProperty('--sdy', dy.toFixed(1) + 'px');
        parent.appendChild(s);
        setTimeout(() => s.remove(), 1100);
      }
    }, delayMs);
  }
}

// Galaxy swirl — radial galaxy gradient that scales up & spins
function spawnGalaxySwirl(host) {
  if (!host) return;
  const parent = host.parentElement || host;
  const { cx, cy, w } = fxCenterIn(host, parent);
  const g = document.createElement('div');
  g.className = 'lex-galaxy-swirl';
  g.style.left = cx + 'px';
  g.style.top  = cy + 'px';
  g.style.width  = (w * 1.8) + 'px';
  g.style.height = (w * 1.8) + 'px';
  parent.appendChild(g);
  setTimeout(() => g.remove(), 1500);
}

// Halo ring — drops a glowing crown ring above the avatar (legendary)
function spawnHalo(host) {
  if (!host) return;
  const parent = host.parentElement || host;
  const { cx, top } = fxCenterIn(host, parent);
  const h = document.createElement('div');
  h.className = 'lex-halo-ring';
  h.style.left = cx + 'px';
  h.style.top  = (top - 6) + 'px';
  parent.appendChild(h);
  setTimeout(() => h.remove(), 1600);
}

// Inject a persistent mini axolotl "tutor" at the top of pick/match exercises
function prependLessonTutor(root) {
  const tutor = document.createElement('div');
  tutor.className = 'lesson-tutor-inline is-entering';
  tutor.innerHTML = `${renderLexBubbleParticles()}${renderMiniAxolotlSVG()}`;
  root.appendChild(tutor);
  setTimeout(() => tutor.classList.remove('is-entering'), 600);
  // The inner axolotl swims in from off-frame for extra life
  const inner = tutor.querySelector('.mini-axolotl');
  if (inner) pulseClass(inner, 'is-swim-in', 800);
}

// ── Lesson axolotl idle scheduler ───────────────────────────
// During an exercise the mini-axolotl is the only thing the user sees
// move, so we keep him alive: he turns around, leans toward the
// answer area, sometimes bumps the glass, and occasionally swims
// closer to the camera. The scheduler queries the lesson DOM each
// tick so it finds whichever axolotls the current exercise rendered
// (speech-bubble avatars AND inline tutors).
let _lessonIdleTimer = null;
function liveLessonAxolotls() {
  return Array.from(document.querySelectorAll(
    '#lesson-exercise .lex-bubble-avatar, #lesson-exercise .lesson-tutor-inline'
  ));
}

function scheduleLessonAxolotlIdle() {
  clearTimeout(_lessonIdleTimer);
  const delay = 5500 + Math.random() * 4500;
  _lessonIdleTimer = setTimeout(() => {
    const hosts = liveLessonAxolotls();
    // Only run idle quirks while the lesson screen is actually visible
    const lessonScreen = document.getElementById('lesson-screen');
    const visible = lessonScreen && lessonScreen.classList.contains('active');
    if (visible && hosts.length) {
      hosts.forEach(host => {
        const svg = host.querySelector('.mini-axolotl');
        if (!svg) return;
        // Don't interrupt a celebration / mega state
        if (host.classList.contains('is-mega') ||
            host.classList.contains('is-epic') ||
            host.classList.contains('is-legendary') ||
            host.classList.contains('is-bounce') ||
            host.classList.contains('is-shake')) return;
        triggerLessonIdleQuirk(svg);
      });
    }
    scheduleLessonAxolotlIdle();
  }, delay);
}

function triggerLessonIdleQuirk(svg) {
  const r = Math.random();
  // Whether he's currently facing left — affects which quirks make sense
  const facingLeft = svg.classList.contains('is-look-left');

  if (r < 0.22) {
    // Turn around — flip his facing direction with a snappy animation
    if (facingLeft) {
      // Turning back to face right
      pulseClass(svg, 'is-turn-back', 560);
      setTimeout(() => svg.classList.remove('is-look-left'), 540);
    } else {
      pulseClass(svg, 'is-turn', 560);
      setTimeout(() => svg.classList.add('is-look-left'), 540);
    }
  } else if (r < 0.40) {
    // Approach the viewer — scale up close to the camera
    pulseClass(svg, 'is-approach', 1300);
  } else if (r < 0.55) {
    // Lean toward the answer area
    pulseClass(svg, 'is-lean-in', 1650);
  } else if (r < 0.68) {
    // Bonk the glass like a curious fish
    pulseClass(svg, 'is-bonk', 1000);
  } else if (r < 0.80) {
    // Curious peek
    pulseClass(svg, 'is-peek', 1600);
  } else if (r < 0.90) {
    // Quick wink at the player
    pulseClass(svg, 'is-wink', 1200);
  } else {
    // Excited nod — like he's saying "you've got this"
    pulseClass(svg, 'is-nod', 900);
  }
}
scheduleLessonAxolotlIdle();

// Spawn a radial sparkle burst from a host element (lesson avatar/tutor)
function spawnLexSparkles(host, count = 8) {
  if (!host) return;
  for (let i = 0; i < count; i++) {
    const s = document.createElement('div');
    s.className = 'spark-burst';
    const angle = (Math.PI * 2 * i) / count + Math.random() * 0.5;
    const dist  = 28 + Math.random() * 28;
    const dx = Math.cos(angle) * dist;
    const dy = Math.sin(angle) * dist;
    s.style.left = '50%';
    s.style.top  = '50%';
    s.style.setProperty('--spark-end', `translate(${dx.toFixed(1)}px, ${dy.toFixed(1)}px)`);
    s.style.animationDelay = (i * 0.03) + 's';
    host.appendChild(s);
    setTimeout(() => s.remove(), 1000);
  }
}

// Spawn a single tear drop on a host element
function spawnTearDrop(host) {
  if (!host) return;
  const t = document.createElement('div');
  t.className = 'lex-tear';
  host.appendChild(t);
  setTimeout(() => t.remove(), 1150);
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
  loseGlobalHeart();
  // Mirror the global pool into the lesson-local count so renderHearts and
  // failure detection stay in sync with the persistent value.
  lessonState.hearts = state.heartsState ? state.heartsState.count : Math.max(0, lessonState.hearts - 1);
  renderHearts();
  syncHeartsChip();
  if (lessonState.hearts === 0) {
    setTimeout(() => failLesson(), 700);
  }
}

// ── Lesson result ────────────────────────────────────────
function completeLesson() {
  stopLessonTutorQuirks();

  // Unit "test-out" path — mark every lesson in the unit complete.
  if (lessonState.isUnitTest) {
    const unitIdx = lessonState.unitTestIdx;
    const start = unitIdx * UNIT_SIZE;
    const end   = Math.min(start + UNIT_SIZE, MANIFEST.length);

    const prog = getLessonProgress();
    for (let i = start; i < end; i++) {
      const l = MANIFEST[i];
      const prev = prog[l.id] || {};
      prog[l.id] = {
        completed: true,
        bestHearts: Math.max(prev.bestHearts || 0, lessonState.hearts),
        plays: (prev.plays || 0) + 1,
        // Mark only lessons that weren't already finished as "tested out".
        testedOut: prev.completed ? !!prev.testedOut : true,
      };
    }
    saveLessonProgress(prog);

    const baseXp  = 150;
    const heartXp = lessonState.hearts * 25;
    const earned  = baseXp + heartXp;

    if (state.pet) {
      petTouchActivity();
      state.pet.hunger    = Math.min(100, state.pet.hunger + 30);
      state.pet.happiness = Math.min(100, state.pet.happiness + 20);
      petAddXp(earned);
    }

    const total = lessonState.exercises.length;
    const acc   = Math.round(((total - lessonState.wrong) / total) * 100);
    $('lesson-result-xp').textContent     = '+' + earned;
    $('lesson-result-hearts').textContent = lessonState.hearts;
    $('lesson-result-acc').textContent    = acc + '%';
    const titleEl = $('lesson-result-title'); if (titleEl) titleEl.textContent = '¡Examen aprobado!';
    const iconEl  = $('lesson-result-icon');  if (iconEl)  iconEl.textContent  = '🏆';
    showScreen('lesson-results');
    spawnConfetti();
    return;
  }

  // SRS review path — no lesson unlock, smaller XP reward (already-seen material).
  if (lessonState.isReview) {
    const baseXp  = 20;
    const heartXp = lessonState.hearts * 5;
    const earned  = baseXp + heartXp;
    if (state.pet) {
      petTouchActivity();
      state.pet.hunger    = Math.min(100, state.pet.hunger + 8);
      state.pet.happiness = Math.min(100, state.pet.happiness + 8);
      petAddXp(earned);
    }
    const total = lessonState.exercises.length;
    const acc   = Math.round(((total - lessonState.wrong) / total) * 100);
    $('lesson-result-xp').textContent     = '+' + earned;
    $('lesson-result-hearts').textContent = lessonState.hearts;
    $('lesson-result-acc').textContent    = acc + '%';
    const titleEl = $('lesson-result-title'); if (titleEl) titleEl.textContent = '¡Repaso completo!';
    const iconEl  = $('lesson-result-icon');  if (iconEl)  iconEl.textContent  = '🔁';
    lessonState.isReview = false;
    showScreen('lesson-results');
    spawnConfetti();
    return;
  }

  // Regular lesson path
  const lesson = MANIFEST.find(l => l.id === lessonState.lessonId);
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
  // Reset the title/icon back to the standard lesson copy (in case the
  // previous result was a unit-test pass).
  const titleEl = $('lesson-result-title'); if (titleEl) titleEl.textContent = '¡Lección completada!';
  const iconEl  = $('lesson-result-icon');  if (iconEl)  iconEl.textContent  = '🎉';
  showScreen('lesson-results');
  spawnConfetti();
}

function failLesson() {
  stopLessonTutorQuirks();
  showScreen('lesson-fail');
}

// ── Lesson nav buttons ───────────────────────────────────
$('lesson-quit-btn')?.addEventListener('click', () => {
  haptic.light();
  if (confirm('¿Salir de la lección? Perderás tu progreso actual.')) {
    stopLessonTutorQuirks();
    renderHome();
  }
});

$('lesson-results-continue')?.addEventListener('click', () => {
  haptic.light();
  renderHome();
});

$('lesson-retry-btn')?.addEventListener('click', () => {
  haptic.light();
  if (lessonState.isUnitTest && lessonState.unitTestIdx != null) {
    startUnitTest(lessonState.unitTestIdx);
  } else if (lessonState.isReview) {
    // Retry pulls a fresh batch of overdue items (the SRS state has shifted
    // since the failed run wrote partial outcomes).
    startReviewSession();
  } else {
    startLesson(lessonState.lessonId);
  }
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
  const tgUser = getTelegramUser();

  if (tgUser) {
    // Production: auto-login with Telegram identity. Storage key is `tg_<id>`
    // so it cannot collide with legacy dev-mode usernames.
    $('logout-btn')?.classList.add('hidden');
    await loginAs('tg_' + tgUser.id, tgUser.firstName);
    return;
  }

  if (IS_DEV_MODE) {
    // Dev mode: legacy username/password flow against users.json.
    state.users = await loadUsers();
    const savedUser = localStorage.getItem('currentUser');
    const stillValid = savedUser && state.users.find(x => x.user === savedUser);
    if (stillValid) {
      await loginAs(savedUser, savedUser);
    } else {
      $('bottom-nav').classList.add('hidden');
      showScreen('login');
    }
    return;
  }

  // Not in Telegram and not in dev mode — show a friendly "open in Telegram" panel
  // instead of the password form, so leaked dev credentials can't be tried here.
  $('bottom-nav').classList.add('hidden');
  showScreen('login');
  const loginWrap = document.querySelector('#login-screen .login-wrap');
  if (loginWrap) {
    loginWrap.innerHTML = `
      <div class="login-logo">📱</div>
      <h1 class="login-title">Vocabulario</h1>
      <p class="login-sub">Abre esta app desde Telegram para empezar a aprender y guardar tu progreso.</p>
    `;
  }
})();
