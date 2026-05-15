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
//   t='typed'      — type the Spanish answer (no tiles); accepts variants via `answers`
// Optional flags:
//   match.swap=true      — flip column orientation (RU left, ES right)
//   lesson.hearts=N      — override default 3 hearts for this lesson

const LESSONS = [
  // ── 1. Saludos ────────────────────────────────────────
  // Intro lesson — short on purpose so first-time users get a quick win.
  {
    id: 'l1', name: 'Saludos', emoji: '👋', desc: 'Saluda en español',
    exercises: [
      { t: 'pick', q: '«Привет»', opts: [
        { txt: 'hola',    em: '👋' },
        { txt: 'adiós',   em: '🙋' },
        { txt: 'gracias', em: '🙏' },
        { txt: 'perdón',  em: '🙇' },
      ], correct: 0 },
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
    hearts: 4,
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
      // Hard pick — all options are forms of comer; only "como" matches "я ем".
      { t: 'pick', q: '«Я ем» — какая форма?', opts: [
        { txt: 'como',   em: '👤' },
        { txt: 'comes',  em: '👉' },
        { txt: 'come',   em: '👨' },
        { txt: 'comer',  em: '➡️' },
      ], correct: 0 },
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
      { t: 'fill', sentence: ['Tú', null, 'agua.'], target: 'bebes', opts: ['bebes', 'bebo', 'beber'], hint: 'Ты пьёшь воду' },
      { t: 'typed', from: 'Я говорю по-испански', answer: 'hablo español', answers: ['hablo español', 'yo hablo español'], hint: 'Подсказка: hablar = говорить' },
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
      { t: 'match', swap: true, pairs: [
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
    hearts: 4,
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
      // Hard pick — all options are forms of querer.
      { t: 'pick', q: '«Я хочу» — какая форма?', opts: [
        { txt: 'quiero',    em: '👤' },
        { txt: 'quieres',   em: '👉' },
        { txt: 'quiere',    em: '👨' },
        { txt: 'queremos',  em: '👥' },
      ], correct: 0 },
      { t: 'fill', sentence: ['No', null, 'hablar inglés.'], target: 'puedo', opts: ['puedo', 'tengo', 'soy'], hint: 'Я не могу говорить по-английски' },
      { t: 'fill', sentence: ['Ella', null, 'ver la película.'], target: 'quiere', opts: ['quiere', 'quiero', 'quieres'], hint: 'Она хочет посмотреть фильм' },
      { t: 'typed', from: 'Я могу плавать', answer: 'puedo nadar', answers: ['puedo nadar', 'yo puedo nadar'], hint: 'poder + nadar' },
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
      { t: 'typed', from: 'У меня есть яблоко', answer: 'tengo una manzana', answers: ['tengo una manzana', 'yo tengo una manzana'], hint: 'manzana — женский род' },
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
      { t: 'match', swap: true, pairs: [
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
      { t: 'typed', from: 'Как тебя зовут?', answer: '¿cómo te llamas?', answers: ['¿cómo te llamas?', 'cómo te llamas', '¿como te llamas?'], hint: 'Используй кнопку ¿ внизу' },
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
      { t: 'match', swap: true, pairs: [
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
      { t: 'typed', from: 'У меня компьютер', answer: 'tengo un ordenador', answers: ['tengo un ordenador', 'tengo una computadora', 'yo tengo un ordenador'], hint: 'ordenador (Spain) / computadora (LatAm)' },
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
    hearts: 4,
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
      // Hard pick — Spanish needs DOUBLE negation: "no ... nada" not just "nada".
      { t: 'pick', q: '«Я ничего не вижу» — как правильно?', opts: [
        { txt: 'no veo nada',  em: '✅' },
        { txt: 'veo nada',     em: '❌' },
        { txt: 'no veo',       em: '❌' },
        { txt: 'nada veo',     em: '❌' },
      ], correct: 0 },
      { t: 'fill', sentence: ['Hoy no como', null, '.'], target: 'nada', opts: ['nada', 'nadie', 'nunca'], hint: 'Сегодня я ничего не ем' },
      { t: 'fill', sentence: ['No conozco a', null, 'aquí.'], target: 'nadie', opts: ['nadie', 'nada', 'nunca'], hint: 'Я никого здесь не знаю' },
      { t: 'typed', from: 'Я никогда не курю', answer: 'no fumo nunca', answers: ['no fumo nunca', 'nunca fumo', 'yo nunca fumo', 'yo no fumo nunca'], hint: 'fumar = курить' },
    ],
  },

  // ── 44. Me gusta ──────────────────────────────────────
  {
    id: 'l44', name: 'Me gusta', emoji: '❤️', desc: 'El verbo gustar',
    hearts: 4,
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
      // Hard pick — singular vs plural agreement is the whole point of gustar.
      { t: 'pick', q: '«Мне нравятся кошки» — как правильно?', opts: [
        { txt: 'me gustan los gatos',  em: '✅' },
        { txt: 'me gusta los gatos',   em: '❌' },
        { txt: 'me gustan gatos',      em: '❌' },
        { txt: 'yo gusto los gatos',   em: '❌' },
      ], correct: 0 },
      { t: 'fill', sentence: ['¿Te', null, 'los libros?'], target: 'gustan', opts: ['gustan', 'gusta', 'gustas'], hint: 'Тебе нравятся книги? (мн.ч.)' },
      { t: 'typed', from: 'Мне нравится пицца', answer: 'me gusta la pizza', answers: ['me gusta la pizza', 'me gusta pizza'], hint: 'Не забудь артикль «la»' },
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
    hearts: 4,
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
      // Hard pick — agreement with the Spanish noun (libro = m.) trumps Russian gender.
      { t: 'pick', q: '«Эта книга мне нравится»', opts: [
        { txt: 'me gusta este libro',  em: '✅' },
        { txt: 'me gusta esta libro',  em: '❌' },
        { txt: 'me gusta esto libro',  em: '❌' },
        { txt: 'me gusta esos libro',  em: '❌' },
      ], correct: 0 },
      { t: 'fill', sentence: ['Quiero', null, 'casa, no aquélla.'], target: 'esta', opts: ['esta', 'este', 'esa'], hint: 'Я хочу этот дом, а не тот' },
      { t: 'typed', from: 'Это мой кот', answer: 'este es mi gato', answers: ['este es mi gato', 'éste es mi gato'], hint: 'esto / este: используем «este» с глаголом ser + муж. род' },
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
      { t: 'typed', from: 'Сколько это стоит?', answer: '¿cuánto cuesta?', answers: ['¿cuánto cuesta?', 'cuánto cuesta', 'cuanto cuesta'], hint: 'cuesta = стоит (3-е лицо)' },
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
      { t: 'match', swap: true, pairs: [
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
    hearts: 4,
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
      // Hard pick — all forms of "deber".
      { t: 'pick', q: '«Ты должен идти»', opts: [
        { txt: 'debes ir',   em: '👉' },
        { txt: 'debo ir',    em: '👤' },
        { txt: 'debe ir',    em: '👨' },
        { txt: 'deber ir',   em: '➡️' },
      ], correct: 0 },
      { t: 'fill', sentence: ['No', null, 'hablar inglés.'], target: 'puedo', opts: ['puedo', 'puedes', 'puede'], hint: 'Я не могу говорить по-английски' },
      { t: 'typed', from: 'Я должен работать', answer: 'tengo que trabajar', answers: ['tengo que trabajar', 'debo trabajar', 'yo tengo que trabajar'], hint: 'Два варианта: tener que ... / deber ...' },
    ],
  },

  // ── 53. Futuro: ir a + infinitivo ─────────────────────
  {
    id: 'l53', name: 'Futuro: ir a', emoji: '🗓️', desc: 'Voy a + infinitivo',
    hearts: 4,
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
      // Hard pick — third-person plural conjugation of ir.
      { t: 'pick', q: '«Они будут спать»', opts: [
        { txt: 'van a dormir',    em: '👥' },
        { txt: 'vamos a dormir',  em: '👫' },
        { txt: 'vais a dormir',   em: '👉' },
        { txt: 'voy a dormir',    em: '👤' },
      ], correct: 0 },
      { t: 'fill', sentence: ['Mañana', null, 'a viajar a España.'], target: 'voy', opts: ['voy', 'vas', 'vamos'], hint: 'Завтра я буду путешествовать в Испанию' },
      { t: 'typed', from: 'Я буду учить испанский', answer: 'voy a estudiar español', answers: ['voy a estudiar español', 'voy a aprender español', 'yo voy a estudiar español'], hint: 'estudiar / aprender — оба годятся' },
    ],
  },

  // ── 54. Reflexivos ────────────────────────────────────
  // Anchors on «me llamo» from L2, then expands to daily routine
  {
    id: 'l54', name: 'Reflexivos', emoji: '🪞', desc: 'Me llamo, me levanto, me ducho',
    hearts: 4,
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
      // Hard pick — reflexive pronoun must agree with the subject.
      { t: 'pick', q: '«Он встаёт рано»', opts: [
        { txt: 'se levanta temprano',  em: '👨' },
        { txt: 'me levanta temprano',  em: '❌' },
        { txt: 'te levantas temprano', em: '❌' },
        { txt: 'nos levantamos temprano', em: '❌' },
      ], correct: 0 },
      { t: 'fill', sentence: ['Tú', null, 'duchas por la mañana.'], target: 'te', opts: ['te', 'me', 'se'], hint: 'Ты принимаешь душ по утрам' },
      { t: 'typed', from: 'Я ложусь спать в десять', answer: 'me acuesto a las diez', answers: ['me acuesto a las diez', 'yo me acuesto a las diez'], hint: 'acostarse = ложиться спать' },
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

  // ── 56. Vacaciones ────────────────────────────────────
  {
    id: 'l56', name: 'Vacaciones', emoji: '🏖️', desc: 'Viajes y descanso',
    exercises: [
      { t: 'pick', q: '«Море»', opts: [
        { txt: 'mar',     em: '🌊' },
        { txt: 'lago',    em: '🏞️' },
        { txt: 'río',     em: '🌊' },
        { txt: 'arena',   em: '🏖️' },
      ], correct: 0 },
      { t: 'pick', q: '«Чемодан»', opts: [
        { txt: 'mochila', em: '🎒' },
        { txt: 'maleta',  em: '🧳' },
        { txt: 'bolso',   em: '👜' },
        { txt: 'caja',    em: '📦' },
      ], correct: 1 },
      { t: 'pick', q: '«Отпуск»', opts: [
        { txt: 'trabajo',    em: '💼' },
        { txt: 'estudio',    em: '📚' },
        { txt: 'vacaciones', em: '🏖️' },
        { txt: 'lunes',      em: '📅' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['playa',   'пляж'],
        ['mar',     'море'],
        ['montaña', 'гора'],
        ['hotel',   'отель'],
      ]},
      { t: 'match', pairs: [
        ['maleta',    'чемодан'],
        ['pasaporte', 'паспорт'],
        ['viaje',     'путешествие'],
        ['mapa',      'карта'],
      ]},
      { t: 'translate', from: 'Я еду в отпуск', tiles: ['voy', 'de', 'vacaciones', 'a', 'casa'], answer: ['voy', 'de', 'vacaciones'] },
      { t: 'fill', sentence: ['La', null, 'es muy bonita.'], target: 'playa', opts: ['playa', 'mar', 'hotel'], hint: 'Пляж очень красивый' },
    ],
  },

  // ── 57. Aeropuerto ────────────────────────────────────
  {
    id: 'l57', name: 'Aeropuerto', emoji: '✈️', desc: 'Vocabulario del aeropuerto',
    exercises: [
      { t: 'pick', q: '«Самолёт»', opts: [
        { txt: 'avión',  em: '✈️' },
        { txt: 'tren',   em: '🚆' },
        { txt: 'coche',  em: '🚗' },
        { txt: 'barco',  em: '🚢' },
      ], correct: 0 },
      { t: 'pick', q: '«Билет»', opts: [
        { txt: 'maleta',     em: '🧳' },
        { txt: 'pasaporte',  em: '🛂' },
        { txt: 'billete',    em: '🎟️' },
        { txt: 'asiento',    em: '💺' },
      ], correct: 2 },
      { t: 'pick', q: '«Рейс»', opts: [
        { txt: 'vuelo',    em: '🛫' },
        { txt: 'puerta',   em: '🚪' },
        { txt: 'maleta',   em: '🧳' },
        { txt: 'pasajero', em: '🧑' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['avión',     'самолёт'],
        ['vuelo',     'рейс'],
        ['billete',   'билет'],
        ['equipaje',  'багаж'],
      ]},
      { t: 'match', pairs: [
        ['salida',    'вылет'],
        ['llegada',   'прибытие'],
        ['pasajero',  'пассажир'],
        ['puerta',    'выход'],
      ]},
      { t: 'translate', from: 'Где мой багаж?', tiles: ['dónde', 'está', 'mi', 'equipaje', 'tu'], answer: ['dónde', 'está', 'mi', 'equipaje'] },
      { t: 'fill', sentence: ['El', null, 'sale a las diez.'], target: 'vuelo', opts: ['vuelo', 'tren', 'mar'], hint: 'Рейс вылетает в 10' },
    ],
  },

  // ── 58. Comparativos ──────────────────────────────────
  {
    id: 'l58', name: 'Comparativos', emoji: '⚖️', desc: 'más que, menos que, tan como',
    hearts: 4,
    exercises: [
      { t: 'pick', q: '«Больше чем»', opts: [
        { txt: 'más que',    em: '➕' },
        { txt: 'menos que',  em: '➖' },
        { txt: 'tan como',   em: '🟰' },
        { txt: 'muy',        em: '❗' },
      ], correct: 0 },
      { t: 'pick', q: '«Меньше чем»', opts: [
        { txt: 'más que',    em: '➕' },
        { txt: 'menos que',  em: '➖' },
        { txt: 'igual que',  em: '🟰' },
        { txt: 'bien',       em: '👍' },
      ], correct: 1 },
      { t: 'pick', q: '«Такой же как»', opts: [
        { txt: 'más que',    em: '➕' },
        { txt: 'menos que',  em: '➖' },
        { txt: 'tan como',   em: '🟰' },
        { txt: 'muy',        em: '❗' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['más',   'больше'],
        ['menos', 'меньше'],
        ['tan',   'такой'],
        ['que',   'чем'],
      ]},
      { t: 'translate', from: 'Хуан выше Педро', tiles: ['Juan', 'es', 'más', 'alto', 'que', 'Pedro'], answer: ['Juan', 'es', 'más', 'alto', 'que', 'Pedro'] },
      { t: 'translate', from: 'Я моложе тебя', tiles: ['soy', 'más', 'joven', 'que', 'tú', 'él'], answer: ['soy', 'más', 'joven', 'que', 'tú'] },
      { t: 'fill', sentence: ['Ana es', null, 'alta que María.'], target: 'más', opts: ['más', 'menos', 'tan'], hint: 'Ана выше Марии' },
      // Hard pick — full sentence with comparative structure.
      { t: 'pick', q: '«У него больше книг чем у меня»', opts: [
        { txt: 'tiene más libros que yo',   em: '✅' },
        { txt: 'tiene más libros como yo',  em: '❌' },
        { txt: 'tiene tan libros que yo',   em: '❌' },
        { txt: 'tiene más que libros yo',   em: '❌' },
      ], correct: 0 },
      { t: 'fill', sentence: ['Mi gato es tan grande', null, 'tu perro.'], target: 'como', opts: ['como', 'que', 'de'], hint: 'Мой кот такой же большой, как твой пёс' },
      { t: 'typed', from: 'Я выше тебя', answer: 'soy más alto que tú', answers: ['soy más alto que tú', 'soy más alta que tú', 'yo soy más alto que tú', 'yo soy más alta que tú'], hint: 'más + прил. + que' },
    ],
  },

  // ── 59. Superlativos ──────────────────────────────────
  {
    id: 'l59', name: 'Superlativos', emoji: '🏆', desc: 'el más, mejor, peor',
    hearts: 4,
    exercises: [
      { t: 'pick', q: '«Лучший»', opts: [
        { txt: 'mejor',  em: '🥇' },
        { txt: 'peor',   em: '👎' },
        { txt: 'mayor',  em: '⬆️' },
        { txt: 'menor',  em: '⬇️' },
      ], correct: 0 },
      { t: 'pick', q: '«Худший»', opts: [
        { txt: 'mejor',  em: '🥇' },
        { txt: 'peor',   em: '👎' },
        { txt: 'grande', em: '🔠' },
        { txt: 'malo',   em: '😞' },
      ], correct: 1 },
      { t: 'pick', q: '«Самый высокий»', opts: [
        { txt: 'el más alto',  em: '📈' },
        { txt: 'el menos alto',em: '📉' },
        { txt: 'tan alto',     em: '🟰' },
        { txt: 'muy alto',     em: '❗' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['el mejor', 'лучший'],
        ['el peor',  'худший'],
        ['el mayor', 'старший'],
        ['el menor', 'младший'],
      ]},
      { t: 'translate', from: 'Это самая красивая книга', tiles: ['es', 'el', 'la', 'libro', 'más', 'bonito', 'bonita'], answer: ['es', 'el', 'libro', 'más', 'bonito'] },
      { t: 'fill', sentence: ['Es el', null, 'jugador del mundo.'], target: 'mejor', opts: ['mejor', 'peor', 'más'], hint: 'Лучший игрок мира' },
      { t: 'fill', sentence: ['Hoy es el día', null, 'frío del año.'], target: 'más', opts: ['más', 'menos', 'mejor'], hint: 'Самый холодный день года' },
      // Hard pick — "mejor" is itself the comparative/superlative, so "más mejor" is wrong.
      { t: 'pick', q: '«Это лучший день»', opts: [
        { txt: 'es el mejor día',       em: '✅' },
        { txt: 'es el más mejor día',   em: '❌' },
        { txt: 'es mejor día',          em: '❌' },
        { txt: 'es el más bueno día',   em: '❌' },
      ], correct: 0 },
      { t: 'typed', from: 'Это самый большой дом', answer: 'es la casa más grande', answers: ['es la casa más grande', 'esta es la casa más grande', 'es la mayor casa'], hint: 'el/la más + прил.' },
    ],
  },

  // ── 60. Repaso 9 (revisión de L56-L59) ────────────────
  // REVIEW LESSON: mixes Vacaciones, Aeropuerto, Comparativos, Superlativos
  {
    id: 'l60', name: 'Repaso 9', emoji: '🔁', desc: 'Repasa lecciones 56-59',
    exercises: [
      // From L56
      { t: 'pick', q: '«Море»', opts: [
        { txt: 'mar',   em: '🌊' },
        { txt: 'lago',  em: '🏞️' },
        { txt: 'playa', em: '🏖️' },
        { txt: 'hotel', em: '🏨' },
      ], correct: 0 },
      // From L57
      { t: 'pick', q: '«Самолёт»', opts: [
        { txt: 'tren',   em: '🚆' },
        { txt: 'avión',  em: '✈️' },
        { txt: 'coche',  em: '🚗' },
        { txt: 'barco',  em: '🚢' },
      ], correct: 1 },
      // From L58
      { t: 'pick', q: '«Больше чем»', opts: [
        { txt: 'menos que', em: '➖' },
        { txt: 'tan como',  em: '🟰' },
        { txt: 'más que',   em: '➕' },
        { txt: 'muy',       em: '❗' },
      ], correct: 2 },
      // Mix L56 + L57
      { t: 'match', pairs: [
        ['playa',   'пляж'],
        ['maleta',  'чемодан'],
        ['vuelo',   'рейс'],
        ['billete', 'билет'],
      ]},
      // Mix L58 + L59
      { t: 'match', pairs: [
        ['más',   'больше'],
        ['menos', 'меньше'],
        ['mejor', 'лучший'],
        ['peor',  'худший'],
      ]},
      // From L58
      { t: 'translate', from: 'Я моложе тебя', tiles: ['soy', 'más', 'joven', 'que', 'tú'], answer: ['soy', 'más', 'joven', 'que', 'tú'] },
      // From L59
      { t: 'fill', sentence: ['Es el', null, 'libro del año.'], target: 'mejor', opts: ['mejor', 'peor', 'más'], hint: 'Лучшая книга года' },
    ],
  },

  // ── 61. Ropa de invierno ──────────────────────────────
  {
    id: 'l61', name: 'Ropa invierno', emoji: '🧥', desc: 'Abrigo, bufanda, guantes',
    exercises: [
      { t: 'pick', q: '«Пальто»', opts: [
        { txt: 'abrigo',   em: '🧥' },
        { txt: 'camisa',   em: '👔' },
        { txt: 'falda',    em: '👗' },
        { txt: 'zapato',   em: '👞' },
      ], correct: 0 },
      { t: 'pick', q: '«Шарф»', opts: [
        { txt: 'gorro',    em: '🧢' },
        { txt: 'guantes',  em: '🧤' },
        { txt: 'bufanda',  em: '🧣' },
        { txt: 'botas',    em: '👢' },
      ], correct: 2 },
      { t: 'pick', q: '«Перчатки»', opts: [
        { txt: 'guantes',  em: '🧤' },
        { txt: 'calcetines',em: '🧦' },
        { txt: 'gorro',    em: '🧢' },
        { txt: 'cinturón', em: '👖' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['abrigo',  'пальто'],
        ['bufanda', 'шарф'],
        ['guantes', 'перчатки'],
        ['gorro',   'шапка'],
      ]},
      { t: 'match', pairs: [
        ['botas',      'сапоги'],
        ['calcetines', 'носки'],
        ['chaqueta',   'куртка'],
        ['suéter',     'свитер'],
      ]},
      { t: 'translate', from: 'Мне нужны перчатки', tiles: ['necesito', 'guantes', 'una', 'bufanda', 'unos'], answer: ['necesito', 'unos', 'guantes'] },
      { t: 'fill', sentence: ['Hace frío, ponte el', null, '.'], target: 'abrigo', opts: ['abrigo', 'verano', 'sol'], hint: 'Холодно, надень пальто' },
    ],
  },

  // ── 62. Cocina ────────────────────────────────────────
  {
    id: 'l62', name: 'Cocina', emoji: '🍳', desc: 'Utensilios y platos',
    exercises: [
      { t: 'pick', q: '«Ложка»', opts: [
        { txt: 'cuchara',  em: '🥄' },
        { txt: 'tenedor',  em: '🍴' },
        { txt: 'cuchillo', em: '🔪' },
        { txt: 'plato',    em: '🍽️' },
      ], correct: 0 },
      { t: 'pick', q: '«Вилка»', opts: [
        { txt: 'cuchara',  em: '🥄' },
        { txt: 'tenedor',  em: '🍴' },
        { txt: 'cuchillo', em: '🔪' },
        { txt: 'taza',     em: '☕' },
      ], correct: 1 },
      { t: 'pick', q: '«Нож»', opts: [
        { txt: 'cuchara',  em: '🥄' },
        { txt: 'tenedor',  em: '🍴' },
        { txt: 'cuchillo', em: '🔪' },
        { txt: 'vaso',     em: '🥛' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['cuchara',  'ложка'],
        ['tenedor',  'вилка'],
        ['cuchillo', 'нож'],
        ['plato',    'тарелка'],
      ]},
      { t: 'match', pairs: [
        ['vaso',    'стакан'],
        ['taza',    'чашка'],
        ['olla',    'кастрюля'],
        ['sartén',  'сковорода'],
      ]},
      { t: 'translate', from: 'Дай мне ложку', tiles: ['dame', 'una', 'un', 'cuchara', 'tenedor'], answer: ['dame', 'una', 'cuchara'] },
      { t: 'fill', sentence: ['Necesito un', null, 'para cortar el pan.'], target: 'cuchillo', opts: ['cuchillo', 'tenedor', 'plato'], hint: 'Нож, чтобы резать хлеб' },
    ],
  },

  // ── 63. En el hotel ───────────────────────────────────
  {
    id: 'l63', name: 'Hotel', emoji: '🏨', desc: 'Habitación, llave, reserva',
    exercises: [
      { t: 'pick', q: '«Номер (в отеле)»', opts: [
        { txt: 'habitación', em: '🛏️' },
        { txt: 'cocina',     em: '🍳' },
        { txt: 'balcón',     em: '🪟' },
        { txt: 'piscina',    em: '🏊' },
      ], correct: 0 },
      { t: 'pick', q: '«Ключ»', opts: [
        { txt: 'puerta',     em: '🚪' },
        { txt: 'llave',      em: '🔑' },
        { txt: 'mesa',       em: '🪑' },
        { txt: 'cama',       em: '🛏️' },
      ], correct: 1 },
      { t: 'pick', q: '«Бронь»', opts: [
        { txt: 'recepción', em: '🛎️' },
        { txt: 'piso',      em: '🏢' },
        { txt: 'reserva',   em: '📋' },
        { txt: 'ducha',     em: '🚿' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['habitación', 'номер'],
        ['llave',      'ключ'],
        ['recepción',  'ресепшен'],
        ['reserva',    'бронь'],
      ]},
      { t: 'match', pairs: [
        ['piso',     'этаж'],
        ['ascensor', 'лифт'],
        ['ducha',    'душ'],
        ['cama',     'кровать'],
      ]},
      { t: 'translate', from: 'У меня есть бронь', tiles: ['tengo', 'una', 'reserva', 'un', 'piso'], answer: ['tengo', 'una', 'reserva'] },
      { t: 'fill', sentence: ['¿Cuál es el número de la', null, '?'], target: 'habitación', opts: ['habitación', 'llave', 'ducha'], hint: 'Какой номер комнаты?' },
    ],
  },

  // ── 64. Imperfecto ────────────────────────────────────
  {
    id: 'l64', name: 'Imperfecto', emoji: '⏳', desc: 'Прошедшее (длительное) время',
    hearts: 4,
    exercises: [
      { t: 'pick', q: '«Я говорил»', opts: [
        { txt: 'hablaba',  em: '🗣️' },
        { txt: 'hablo',    em: '⏺️' },
        { txt: 'hablaré',  em: '⏩' },
        { txt: 'habla',    em: '👉' },
      ], correct: 0 },
      { t: 'pick', q: '«Я ел»', opts: [
        { txt: 'como',    em: '⏺️' },
        { txt: 'comía',   em: '⏪' },
        { txt: 'comeré',  em: '⏩' },
        { txt: 'comer',   em: '🍴' },
      ], correct: 1 },
      { t: 'pick', q: '«Я жил (в Москве)»', opts: [
        { txt: 'vivo',    em: '⏺️' },
        { txt: 'viviré',  em: '⏩' },
        { txt: 'vivía',   em: '⏪' },
        { txt: 'vivir',   em: '🏠' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['hablaba', 'я говорил'],
        ['comía',   'я ел'],
        ['vivía',   'я жил'],
        ['era',     'я был (ser)'],
      ]},
      { t: 'match', pairs: [
        ['estaba',  'я был (estar)'],
        ['iba',     'я шёл'],
        ['tenía',   'у меня было'],
        ['veía',    'я видел'],
      ]},
      { t: 'translate', from: 'Раньше я жил в Мадриде', tiles: ['antes', 'vivía', 'en', 'Madrid', 'vivo'], answer: ['antes', 'vivía', 'en', 'Madrid'] },
      { t: 'fill', sentence: ['Cuando era niño,', null, 'mucho.'], target: 'jugaba', opts: ['jugaba', 'juego', 'jugar'], hint: 'Когда я был ребёнком, я много играл' },
      // Hard pick — all forms of ser; only imperfecto fits the "was-being" context.
      { t: 'pick', q: '«Когда я был ребёнком...»', opts: [
        { txt: 'cuando era niño',  em: '⏪' },
        { txt: 'cuando soy niño',  em: '⏺️' },
        { txt: 'cuando seré niño', em: '⏩' },
        { txt: 'cuando fui niño',  em: '⏪' },
      ], correct: 0 },
      { t: 'fill', sentence: ['De pequeño, yo', null, 'al parque cada día.'], target: 'iba', opts: ['iba', 'voy', 'fui'], hint: 'В детстве я ходил в парк каждый день' },
      { t: 'typed', from: 'Раньше я жил в Москве', answer: 'antes vivía en moscú', answers: ['antes vivía en moscú', 'antes yo vivía en moscú', 'vivía en moscú antes', 'yo vivía en moscú'], hint: 'imperfecto: vivía' },
    ],
  },

  // ── 65. Repaso 10 (revisión de L61-L64) ───────────────
  // REVIEW LESSON: mixes Ropa invierno, Cocina, Hotel, Imperfecto
  {
    id: 'l65', name: 'Repaso 10', emoji: '🔁', desc: 'Repasa lecciones 61-64',
    exercises: [
      // From L61
      { t: 'pick', q: '«Шарф»', opts: [
        { txt: 'gorro',    em: '🧢' },
        { txt: 'bufanda',  em: '🧣' },
        { txt: 'guantes',  em: '🧤' },
        { txt: 'botas',    em: '👢' },
      ], correct: 1 },
      // From L62
      { t: 'pick', q: '«Вилка»', opts: [
        { txt: 'cuchara',  em: '🥄' },
        { txt: 'tenedor',  em: '🍴' },
        { txt: 'cuchillo', em: '🔪' },
        { txt: 'taza',     em: '☕' },
      ], correct: 1 },
      // From L64
      { t: 'pick', q: '«Я ел»', opts: [
        { txt: 'como',    em: '⏺️' },
        { txt: 'comía',   em: '⏪' },
        { txt: 'comeré',  em: '⏩' },
        { txt: 'comer',   em: '🍴' },
      ], correct: 1 },
      // Mix L61 + L62
      { t: 'match', pairs: [
        ['abrigo',  'пальто'],
        ['guantes', 'перчатки'],
        ['cuchara', 'ложка'],
        ['plato',   'тарелка'],
      ]},
      // Mix L63 + L64
      { t: 'match', pairs: [
        ['llave',      'ключ'],
        ['habitación', 'номер'],
        ['hablaba',    'я говорил'],
        ['vivía',      'я жил'],
      ]},
      // From L63
      { t: 'translate', from: 'У меня есть бронь', tiles: ['tengo', 'una', 'reserva', 'piso'], answer: ['tengo', 'una', 'reserva'] },
      // From L64
      { t: 'fill', sentence: ['Antes', null, 'en Madrid.'], target: 'vivía', opts: ['vivía', 'vivo', 'viviré'], hint: 'Раньше я жил в Мадриде' },
    ],
  },

  // ── 66. Animales del campo ────────────────────────────
  {
    id: 'l66', name: 'Animales II', emoji: '🐮', desc: 'Animales de la granja',
    exercises: [
      { t: 'pick', q: '«Лошадь»', opts: [
        { txt: 'caballo', em: '🐴' },
        { txt: 'vaca',    em: '🐮' },
        { txt: 'oveja',   em: '🐑' },
        { txt: 'cerdo',   em: '🐷' },
      ], correct: 0 },
      { t: 'pick', q: '«Корова»', opts: [
        { txt: 'caballo', em: '🐴' },
        { txt: 'vaca',    em: '🐮' },
        { txt: 'pato',    em: '🦆' },
        { txt: 'oveja',   em: '🐑' },
      ], correct: 1 },
      { t: 'pick', q: '«Овца»', opts: [
        { txt: 'gallina', em: '🐔' },
        { txt: 'conejo',  em: '🐰' },
        { txt: 'oveja',   em: '🐑' },
        { txt: 'cerdo',   em: '🐷' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['caballo', 'лошадь'],
        ['vaca',    'корова'],
        ['oveja',   'овца'],
        ['cerdo',   'свинья'],
      ]},
      { t: 'match', swap: true, pairs: [
        ['conejo',  'кролик'],
        ['gallina', 'курица'],
        ['pato',    'утка'],
        ['pájaro',  'птица'],
      ]},
      { t: 'translate', from: 'У меня есть лошадь', tiles: ['tengo', 'un', 'una', 'caballo', 'vaca'], answer: ['tengo', 'un', 'caballo'] },
      { t: 'fill', sentence: ['La', null, 'da leche.'], target: 'vaca', opts: ['vaca', 'oveja', 'gallina'], hint: 'Корова даёт молоко' },
      { t: 'typed', from: 'У меня есть корова', answer: 'tengo una vaca', answers: ['tengo una vaca', 'yo tengo una vaca'], hint: 'vaca — женский род → una' },
    ],
  },

  // ── 67. Verduras ──────────────────────────────────────
  {
    id: 'l67', name: 'Verduras', emoji: '🥦', desc: 'Verduras y hortalizas',
    exercises: [
      { t: 'pick', q: '«Помидор»', opts: [
        { txt: 'tomate',    em: '🍅' },
        { txt: 'cebolla',   em: '🧅' },
        { txt: 'pepino',    em: '🥒' },
        { txt: 'lechuga',   em: '🥬' },
      ], correct: 0 },
      { t: 'pick', q: '«Морковь»', opts: [
        { txt: 'patata',     em: '🥔' },
        { txt: 'zanahoria',  em: '🥕' },
        { txt: 'pimiento',   em: '🌶️' },
        { txt: 'ajo',        em: '🧄' },
      ], correct: 1 },
      { t: 'pick', q: '«Лук»', opts: [
        { txt: 'ajo',     em: '🧄' },
        { txt: 'lechuga', em: '🥬' },
        { txt: 'cebolla', em: '🧅' },
        { txt: 'maíz',    em: '🌽' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['tomate',     'помидор'],
        ['zanahoria',  'морковь'],
        ['cebolla',    'лук'],
        ['lechuga',    'салат'],
      ]},
      { t: 'match', pairs: [
        ['patata',   'картофель'],
        ['pepino',   'огурец'],
        ['pimiento', 'перец'],
        ['ajo',      'чеснок'],
      ]},
      { t: 'translate', from: 'Я хочу салат с помидором', tiles: ['quiero', 'una', 'ensalada', 'con', 'tomate', 'pan'], answer: ['quiero', 'una', 'ensalada', 'con', 'tomate'] },
      { t: 'fill', sentence: ['Compro', null, 'en el mercado.'], target: 'verduras', opts: ['verduras', 'casas', 'libros'], hint: 'Я покупаю овощи на рынке' },
    ],
  },

  // ── 68. Supermercado ──────────────────────────────────
  {
    id: 'l68', name: 'Supermercado', emoji: '🛒', desc: 'De compras',
    exercises: [
      { t: 'pick', q: '«Тележка»', opts: [
        { txt: 'carrito',  em: '🛒' },
        { txt: 'bolsa',    em: '👜' },
        { txt: 'caja',     em: '📦' },
        { txt: 'lista',    em: '📝' },
      ], correct: 0 },
      { t: 'pick', q: '«Список»', opts: [
        { txt: 'carrito',  em: '🛒' },
        { txt: 'lista',    em: '📝' },
        { txt: 'precio',   em: '💲' },
        { txt: 'bolsa',    em: '🛍️' },
      ], correct: 1 },
      { t: 'pick', q: '«Цена»', opts: [
        { txt: 'caja',    em: '📦' },
        { txt: 'oferta',  em: '🏷️' },
        { txt: 'precio',  em: '💲' },
        { txt: 'bolsa',   em: '🛍️' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['carrito',  'тележка'],
        ['lista',    'список'],
        ['precio',   'цена'],
        ['bolsa',    'сумка'],
      ]},
      { t: 'match', pairs: [
        ['caja',      'касса'],
        ['oferta',    'акция'],
        ['producto',  'товар'],
        ['mercado',   'рынок'],
      ]},
      { t: 'translate', from: 'Мне нужен пакет', tiles: ['necesito', 'una', 'un', 'bolsa', 'carrito'], answer: ['necesito', 'una', 'bolsa'] },
      { t: 'fill', sentence: ['¿Cuál es el', null, 'del pan?'], target: 'precio', opts: ['precio', 'carrito', 'mapa'], hint: 'Какая цена у хлеба?' },
    ],
  },

  // ── 69. Adverbios ─────────────────────────────────────
  {
    id: 'l69', name: 'Adverbios', emoji: '🕰️', desc: 'Siempre, nunca, a veces',
    exercises: [
      { t: 'pick', q: '«Всегда»', opts: [
        { txt: 'siempre',  em: '♾️' },
        { txt: 'nunca',    em: '🚫' },
        { txt: 'a veces',  em: '🕰️' },
        { txt: 'casi',     em: '≈' },
      ], correct: 0 },
      { t: 'pick', q: '«Никогда»', opts: [
        { txt: 'siempre',  em: '♾️' },
        { txt: 'nunca',    em: '🚫' },
        { txt: 'también',  em: '➕' },
        { txt: 'mucho',    em: '🔝' },
      ], correct: 1 },
      { t: 'pick', q: '«Иногда»', opts: [
        { txt: 'siempre',  em: '♾️' },
        { txt: 'nunca',    em: '🚫' },
        { txt: 'a veces',  em: '🕰️' },
        { txt: 'muy',      em: '❗' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['siempre',  'всегда'],
        ['nunca',    'никогда'],
        ['a veces',  'иногда'],
        ['casi',     'почти'],
      ]},
      { t: 'match', pairs: [
        ['también',  'тоже'],
        ['tampoco',  'тоже не'],
        ['mucho',    'много'],
        ['poco',     'мало'],
      ]},
      { t: 'translate', from: 'Я никогда не курю', tiles: ['yo', 'nunca', 'fumo', 'siempre', 'no'], answer: ['yo', 'nunca', 'fumo'] },
      { t: 'fill', sentence: [null, 'tomo café por la mañana.'], target: 'Siempre', opts: ['Siempre', 'Nunca', 'Tampoco'], hint: 'Я всегда пью кофе утром' },
    ],
  },

  // ── 70. Repaso 11 (revisión de L66-L69) ───────────────
  // REVIEW LESSON: mixes Animales II, Verduras, Supermercado, Adverbios
  {
    id: 'l70', name: 'Repaso 11', emoji: '🔁', desc: 'Repasa lecciones 66-69',
    exercises: [
      // From L66
      { t: 'pick', q: '«Корова»', opts: [
        { txt: 'caballo', em: '🐴' },
        { txt: 'vaca',    em: '🐮' },
        { txt: 'pato',    em: '🦆' },
        { txt: 'oveja',   em: '🐑' },
      ], correct: 1 },
      // From L67
      { t: 'pick', q: '«Помидор»', opts: [
        { txt: 'tomate',   em: '🍅' },
        { txt: 'cebolla',  em: '🧅' },
        { txt: 'lechuga',  em: '🥬' },
        { txt: 'pepino',   em: '🥒' },
      ], correct: 0 },
      // From L69
      { t: 'pick', q: '«Никогда»', opts: [
        { txt: 'siempre', em: '♾️' },
        { txt: 'nunca',   em: '🚫' },
        { txt: 'a veces', em: '🕰️' },
        { txt: 'también', em: '➕' },
      ], correct: 1 },
      // Mix L66 + L67
      { t: 'match', pairs: [
        ['caballo',   'лошадь'],
        ['oveja',     'овца'],
        ['zanahoria', 'морковь'],
        ['cebolla',   'лук'],
      ]},
      // Mix L68 + L69
      { t: 'match', pairs: [
        ['carrito', 'тележка'],
        ['precio',  'цена'],
        ['siempre', 'всегда'],
        ['a veces', 'иногда'],
      ]},
      // From L68
      { t: 'translate', from: 'Мне нужен пакет', tiles: ['necesito', 'una', 'bolsa', 'caja'], answer: ['necesito', 'una', 'bolsa'] },
      // From L69
      { t: 'fill', sentence: ['Yo', null, 'fumo.'], target: 'nunca', opts: ['nunca', 'siempre', 'también'], hint: 'Я никогда не курю' },
    ],
  },

  // ── 71. Verbos irregulares ────────────────────────────
  {
    id: 'l71', name: 'Verbos irreg.', emoji: '🔀', desc: 'Tener, venir, hacer, decir',
    hearts: 4,
    exercises: [
      { t: 'pick', q: '«У меня есть» (1 л. ед.ч.)', opts: [
        { txt: 'tengo',  em: '🙋' },
        { txt: 'tienes', em: '👉' },
        { txt: 'tiene',  em: '👤' },
        { txt: 'tenéis', em: '👥' },
      ], correct: 0 },
      { t: 'pick', q: '«Я делаю»', opts: [
        { txt: 'hago',   em: '🔨' },
        { txt: 'haces',  em: '👉' },
        { txt: 'hace',   em: '👤' },
        { txt: 'hacer',  em: '➡️' },
      ], correct: 0 },
      { t: 'pick', q: '«Я говорю» (decir)', opts: [
        { txt: 'hablo',  em: '🗣️' },
        { txt: 'dice',   em: '👤' },
        { txt: 'digo',   em: '💬' },
        { txt: 'decir',  em: '➡️' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['tengo',  'у меня есть'],
        ['vengo',  'я прихожу'],
        ['hago',   'я делаю'],
        ['digo',   'я говорю'],
      ]},
      { t: 'match', pairs: [
        ['salgo',  'я выхожу'],
        ['pongo',  'я кладу'],
        ['traigo', 'я приношу'],
        ['veo',    'я вижу'],
      ]},
      { t: 'translate', from: 'У меня есть собака', tiles: ['tengo', 'un', 'una', 'perro', 'gato'], answer: ['tengo', 'un', 'perro'] },
      { t: 'fill', sentence: ['Yo', null, 'la verdad.'], target: 'digo', opts: ['digo', 'dice', 'decir'], hint: 'Я говорю правду' },
      // Hard pick — all forms of venir.
      { t: 'pick', q: '«Ты приходишь»', opts: [
        { txt: 'vienes',  em: '👉' },
        { txt: 'vengo',   em: '👤' },
        { txt: 'viene',   em: '👨' },
        { txt: 'venir',   em: '➡️' },
      ], correct: 0 },
      { t: 'fill', sentence: ['Yo', null, 'la verdad siempre.'], target: 'digo', opts: ['digo', 'dice', 'decir'], hint: 'Я всегда говорю правду' },
      { t: 'typed', from: 'Я выхожу из дома', answer: 'salgo de casa', answers: ['salgo de casa', 'yo salgo de casa', 'salgo de la casa'], hint: 'salir = выходить' },
    ],
  },

  // ── 72. Condicional ───────────────────────────────────
  {
    id: 'l72', name: 'Condicional', emoji: '🤔', desc: 'Yo haría, gustaría, podría',
    hearts: 4,
    exercises: [
      { t: 'pick', q: '«Я бы хотел»', opts: [
        { txt: 'me gusta',     em: '👍' },
        { txt: 'me gustaba',   em: '⏪' },
        { txt: 'me gustaría',  em: '🤔' },
        { txt: 'me gustará',   em: '⏩' },
      ], correct: 2 },
      { t: 'pick', q: '«Я бы мог»', opts: [
        { txt: 'puedo',    em: '💪' },
        { txt: 'podría',   em: '🤔' },
        { txt: 'podía',    em: '⏪' },
        { txt: 'podré',    em: '⏩' },
      ], correct: 1 },
      { t: 'pick', q: '«Я бы сделал»', opts: [
        { txt: 'hago',    em: '⏺️' },
        { txt: 'hice',    em: '⏪' },
        { txt: 'haría',   em: '🤔' },
        { txt: 'haré',    em: '⏩' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['hablaría',  'я бы говорил'],
        ['comería',   'я бы ел'],
        ['viviría',   'я бы жил'],
        ['iría',      'я бы пошёл'],
      ]},
      { t: 'match', pairs: [
        ['querría',    'я бы хотел'],
        ['podría',     'я бы смог'],
        ['tendría',    'у меня бы было'],
        ['sería',      'я был бы'],
      ]},
      { t: 'translate', from: 'Я бы хотел кофе', tiles: ['me', 'gustaría', 'un', 'café', 'gusta'], answer: ['me', 'gustaría', 'un', 'café'] },
      { t: 'fill', sentence: ['¿', null, 'ayudarme, por favor?'], target: 'Podría', opts: ['Podría', 'Puedo', 'Podía'], hint: 'Не мог бы ты мне помочь?' },
      // Hard pick — all tenses of ir; only the conditional fits "я бы пошёл".
      { t: 'pick', q: '«Я бы пошёл с тобой»', opts: [
        { txt: 'iría contigo',  em: '🤔' },
        { txt: 'iba contigo',   em: '⏪' },
        { txt: 'iré contigo',   em: '⏩' },
        { txt: 'voy contigo',   em: '⏺️' },
      ], correct: 0 },
      { t: 'fill', sentence: ['¿', null, 'ayudarme, por favor?'], target: 'Podrías', opts: ['Podrías', 'Puedes', 'Podías'], hint: 'Не мог бы ты мне помочь? (ты)' },
      { t: 'typed', from: 'Я бы хотел кофе', answer: 'me gustaría un café', answers: ['me gustaría un café', 'querría un café', 'me gustaría café', 'yo querría un café'], hint: 'me gustaría / querría — оба корректны' },
    ],
  },

  // ── 73. Por vs Para ───────────────────────────────────
  {
    id: 'l73', name: 'Por vs Para', emoji: '🔁', desc: 'Cuándo usar por o para',
    hearts: 4,
    exercises: [
      { t: 'pick', q: '«Спасибо за всё» — por или para?', opts: [
        { txt: 'por',  em: '⏪' },
        { txt: 'para', em: '🎯' },
      ], correct: 0 },
      { t: 'pick', q: '«Это для тебя» — por или para?', opts: [
        { txt: 'por',  em: '⏪' },
        { txt: 'para', em: '🎯' },
      ], correct: 1 },
      { t: 'pick', q: '«Я иду в парк» — por или para?', opts: [
        { txt: 'por (через)', em: '🚶' },
        { txt: 'para (цель)', em: '🎯' },
      ], correct: 1 },
      { t: 'match', pairs: [
        ['por',          'причина / через'],
        ['para',         'цель / для'],
        ['gracias por',  'спасибо за'],
        ['para ti',      'для тебя'],
      ]},
      { t: 'translate', from: 'Это для моей мамы', tiles: ['es', 'para', 'por', 'mi', 'madre'], answer: ['es', 'para', 'mi', 'madre'] },
      { t: 'fill', sentence: ['Gracias', null, 'el regalo.'], target: 'por', opts: ['por', 'para', 'a'], hint: 'Спасибо за подарок' },
      { t: 'fill', sentence: ['Estudio español', null, 'viajar.'], target: 'para', opts: ['para', 'por', 'con'], hint: 'Я учу испанский, чтобы путешествовать' },
      // Hard pick — "para" = recipient/destination, all distractors are wrong prepositions.
      { t: 'pick', q: '«Этот подарок для тебя»', opts: [
        { txt: 'este regalo es para ti',  em: '✅' },
        { txt: 'este regalo es por ti',   em: '❌' },
        { txt: 'este regalo es a ti',     em: '❌' },
        { txt: 'este regalo es con ti',   em: '❌' },
      ], correct: 0 },
      { t: 'fill', sentence: ['Estudio mucho', null, 'aprobar el examen.'], target: 'para', opts: ['para', 'por', 'a'], hint: 'Цель / namerenie → para' },
      { t: 'typed', from: 'Спасибо за подарок', answer: 'gracias por el regalo', answers: ['gracias por el regalo', 'muchas gracias por el regalo'], hint: 'gracias por (причина)' },
    ],
  },

  // ── 74. Subjuntivo básico ─────────────────────────────
  {
    id: 'l74', name: 'Subjuntivo', emoji: '🌠', desc: 'Espero que, ojalá, quiero que',
    hearts: 4,
    exercises: [
      { t: 'pick', q: '«Хоть бы...» / «Дай Бог»', opts: [
        { txt: 'quizás',  em: '🤷' },
        { txt: 'ojalá',   em: '🌠' },
        { txt: 'porque',  em: '➡️' },
        { txt: 'aunque',  em: '🔀' },
      ], correct: 1 },
      { t: 'pick', q: '«Я надеюсь, что...»', opts: [
        { txt: 'espero que',  em: '🌠' },
        { txt: 'creo que',    em: '💭' },
        { txt: 'sé que',      em: '✅' },
        { txt: 'digo que',    em: '💬' },
      ], correct: 0 },
      { t: 'pick', q: '«Я хочу, чтобы ты пришёл»', opts: [
        { txt: 'quiero que vienes',  em: '❌' },
        { txt: 'quiero que vengas',  em: '✅' },
        { txt: 'quiero que vendrás', em: '❌' },
        { txt: 'quiero venir',       em: '❓' },
      ], correct: 1 },
      { t: 'match', pairs: [
        ['ojalá',       'дай бог'],
        ['espero que',  'надеюсь, что'],
        ['quiero que',  'хочу, чтобы'],
        ['es bueno que','хорошо, что'],
      ]},
      { t: 'translate', from: 'Я надеюсь, что ты придёшь', tiles: ['espero', 'que', 'vengas', 'vienes', 'tú'], answer: ['espero', 'que', 'vengas'] },
      { t: 'fill', sentence: ['Ojalá', null, 'sol mañana.'], target: 'haga', opts: ['haga', 'hace', 'hizo'], hint: 'Хоть бы завтра было солнце' },
      { t: 'fill', sentence: ['Quiero que', null, 'feliz.'], target: 'seas', opts: ['seas', 'eres', 'eras'], hint: 'Я хочу, чтобы ты был счастлив' },
      // Hard pick — "dudar que" triggers subjuntivo; all other tenses are wrong.
      { t: 'pick', q: '«Сомневаюсь, что он придёт»', opts: [
        { txt: 'dudo que venga',    em: '✅' },
        { txt: 'dudo que viene',    em: '❌' },
        { txt: 'dudo que vendrá',   em: '❌' },
        { txt: 'dudo que vino',     em: '❌' },
      ], correct: 0 },
      { t: 'fill', sentence: ['Es importante que', null, 'atento.'], target: 'estés', opts: ['estés', 'estás', 'estaba'], hint: 'Важно, чтобы ты был внимателен' },
      { t: 'typed', from: 'Надеюсь, что ты счастлив', answer: 'espero que seas feliz', answers: ['espero que seas feliz', 'espero que estés feliz', 'yo espero que seas feliz'], hint: 'espero que + subjuntivo' },
    ],
  },

  // ── 75. Repaso Final (revisión de L71-L74) ────────────
  // REVIEW LESSON / MILESTONE: mixes Irregulares, Condicional, Por/Para, Subjuntivo.
  // 15 exercises and only 2 hearts — this is a real "graduation" test for the
  // hardest grammar block in the curriculum.
  {
    id: 'l75', name: 'Repaso Final', emoji: '🎓', desc: 'Repasa lecciones 71-74',
    hearts: 2,
    exercises: [
      // From L71
      { t: 'pick', q: '«Я делаю»', opts: [
        { txt: 'hago',    em: '🔨' },
        { txt: 'haces',   em: '👉' },
        { txt: 'hace',    em: '👤' },
        { txt: 'haré',    em: '⏩' },
      ], correct: 0 },
      // From L72
      { t: 'pick', q: '«Я бы хотел»', opts: [
        { txt: 'me gusta',     em: '👍' },
        { txt: 'me gustaría',  em: '🤔' },
        { txt: 'me gustaba',   em: '⏪' },
        { txt: 'me gustará',   em: '⏩' },
      ], correct: 1 },
      // From L74
      { t: 'pick', q: '«Хоть бы...»', opts: [
        { txt: 'quizás',  em: '🤷' },
        { txt: 'ojalá',   em: '🌠' },
        { txt: 'porque',  em: '➡️' },
        { txt: 'también', em: '➕' },
      ], correct: 1 },
      // Hard pick — all forms of decir.
      { t: 'pick', q: '«Я говорю» (decir)', opts: [
        { txt: 'digo',   em: '👤' },
        { txt: 'dices',  em: '👉' },
        { txt: 'dice',   em: '👨' },
        { txt: 'decir',  em: '➡️' },
      ], correct: 0 },
      // Hard pick — subjuntivo trigger (querer que + …).
      { t: 'pick', q: '«Хочу, чтобы ты пришёл»', opts: [
        { txt: 'quiero que vengas',  em: '✅' },
        { txt: 'quiero que vienes',  em: '❌' },
        { txt: 'quiero que vendrás', em: '❌' },
        { txt: 'quiero venir',       em: '❌' },
      ], correct: 0 },
      // Hard pick — por vs para test.
      { t: 'pick', q: '«Я учу испанский, чтобы путешествовать»', opts: [
        { txt: 'estudio español para viajar',  em: '✅' },
        { txt: 'estudio español por viajar',   em: '❌' },
        { txt: 'estudio español a viajar',     em: '❌' },
        { txt: 'estudio español de viajar',    em: '❌' },
      ], correct: 0 },
      // Mix L71 + L72
      { t: 'match', pairs: [
        ['tengo',     'у меня есть'],
        ['digo',      'я говорю'],
        ['gustaría',  'я бы хотел'],
        ['podría',    'я бы смог'],
      ]},
      // Mix L73 + L74
      { t: 'match', swap: true, pairs: [
        ['por',         'за / через'],
        ['para',        'для / чтобы'],
        ['ojalá',       'дай бог'],
        ['espero que',  'надеюсь, что'],
      ]},
      // Imperfecto / past forms from related lessons
      { t: 'match', pairs: [
        ['hablaba',  'я говорил'],
        ['comía',    'я ел'],
        ['vivía',    'я жил'],
        ['era',      'я был'],
      ]},
      // From L72
      { t: 'translate', from: 'Я бы хотел кофе', tiles: ['me', 'gustaría', 'un', 'café', 'gusta'], answer: ['me', 'gustaría', 'un', 'café'] },
      // From L74
      { t: 'translate', from: 'Я надеюсь, что ты придёшь', tiles: ['espero', 'que', 'vengas', 'vienes', 'tú'], answer: ['espero', 'que', 'vengas'] },
      // From L73
      { t: 'fill', sentence: ['Gracias', null, 'todo.'], target: 'por', opts: ['por', 'para', 'a'], hint: 'Спасибо за всё' },
      // From L74 (subjuntivo)
      { t: 'fill', sentence: ['Quiero que', null, 'feliz.'], target: 'seas', opts: ['seas', 'eres', 'eras'], hint: 'Я хочу, чтобы ты был счастлив' },
      // From L72 (condicional)
      { t: 'fill', sentence: ['¿', null, 'ayudarme?'], target: 'Podrías', opts: ['Podrías', 'Puedes', 'Podías'], hint: 'Не мог бы ты мне помочь?' },
      // Production: typed combining condicional + por
      { t: 'typed', from: 'Я бы хотел кофе, пожалуйста', answer: 'me gustaría un café, por favor', answers: ['me gustaría un café por favor', 'me gustaría un café, por favor', 'querría un café por favor'], hint: 'me gustaría / querría + por favor' },
    ],
  },

  // ── 76. Saludos formales ──────────────────────────────
  // Gentle restart after the heavy grammar block: pure vocab.
  {
    id: 'l76', name: 'Saludos II', emoji: '🤝', desc: 'Saludos formales',
    exercises: [
      { t: 'pick', q: '«Как Вы?» (вежливо)', opts: [
        { txt: '¿cómo estás?',      em: '👋' },
        { txt: '¿cómo está usted?', em: '🤝' },
        { txt: '¿qué tal?',         em: '😊' },
        { txt: '¿quién eres?',      em: '👤' },
      ], correct: 1 },
      { t: 'pick', q: '«Очень приятно»', opts: [
        { txt: 'mucho gusto',  em: '🤝' },
        { txt: 'de nada',      em: '🙏' },
        { txt: 'por favor',    em: '🙏' },
        { txt: 'adiós',        em: '👋' },
      ], correct: 0 },
      { t: 'pick', q: '«Очень рад»', opts: [
        { txt: 'cansado',    em: '😴' },
        { txt: 'encantado',  em: '🤩' },
        { txt: 'aburrido',   em: '😑' },
        { txt: 'enfadado',   em: '😠' },
      ], correct: 1 },
      { t: 'match', pairs: [
        ['señor',    'господин'],
        ['señora',   'госпожа'],
        ['señorita', 'мисс'],
        ['usted',    'Вы'],
      ]},
      { t: 'match', pairs: [
        ['mucho gusto',  'очень приятно'],
        ['encantado',    'очень рад'],
        ['hasta luego',  'до встречи'],
        ['hasta pronto', 'до скорого'],
      ]},
      { t: 'translate', from: 'Очень приятно', tiles: ['mucho', 'gusto', 'bien', 'gracias'], answer: ['mucho', 'gusto'] },
      { t: 'fill', sentence: ['Buenos días,', null, '.'], target: 'señor', opts: ['señor', 'casa', 'verde'], hint: 'Доброе утро, господин' },
    ],
  },

  // ── 77. En la oficina ─────────────────────────────────
  {
    id: 'l77', name: 'Oficina', emoji: '💼', desc: 'En el trabajo',
    exercises: [
      { t: 'pick', q: '«Начальник»', opts: [
        { txt: 'empleado',  em: '🧑‍💼' },
        { txt: 'cliente',   em: '🤵' },
        { txt: 'jefe',      em: '👔' },
        { txt: 'compañero', em: '👥' },
      ], correct: 2 },
      { t: 'pick', q: '«Компьютер»', opts: [
        { txt: 'ordenador',  em: '💻' },
        { txt: 'teléfono',   em: '☎️' },
        { txt: 'libro',      em: '📕' },
        { txt: 'silla',      em: '🪑' },
      ], correct: 0 },
      { t: 'pick', q: '«Совещание»', opts: [
        { txt: 'oficina',  em: '🏢' },
        { txt: 'reunión',  em: '🗣️' },
        { txt: 'mesa',     em: '🪑' },
        { txt: 'puerta',   em: '🚪' },
      ], correct: 1 },
      { t: 'match', pairs: [
        ['jefe',      'начальник'],
        ['empleado',  'сотрудник'],
        ['oficina',   'офис'],
        ['reunión',   'совещание'],
      ]},
      { t: 'match', pairs: [
        ['ordenador',  'компьютер'],
        ['teléfono',   'телефон'],
        ['papel',      'бумага'],
        ['mesa',       'стол'],
      ]},
      { t: 'translate', from: 'Я работаю в офисе', tiles: ['trabajo', 'en', 'la', 'una', 'oficina'], answer: ['trabajo', 'en', 'la', 'oficina'] },
      { t: 'fill', sentence: ['El', null, 'está en una reunión.'], target: 'jefe', opts: ['jefe', 'café', 'mar'], hint: 'Начальник на совещании' },
    ],
  },

  // ── 78. El colegio ────────────────────────────────────
  {
    id: 'l78', name: 'Colegio', emoji: '🎒', desc: 'Vida escolar',
    exercises: [
      { t: 'pick', q: '«Школа»', opts: [
        { txt: 'escuela',  em: '🏫' },
        { txt: 'casa',     em: '🏠' },
        { txt: 'parque',   em: '🌳' },
        { txt: 'tienda',   em: '🏪' },
      ], correct: 0 },
      { t: 'pick', q: '«Ученик»', opts: [
        { txt: 'profesor', em: '👨‍🏫' },
        { txt: 'alumno',   em: '🧑‍🎓' },
        { txt: 'amigo',    em: '🤝' },
        { txt: 'jefe',     em: '👔' },
      ], correct: 1 },
      { t: 'pick', q: '«Карандаш»', opts: [
        { txt: 'libro',     em: '📕' },
        { txt: 'cuaderno',  em: '📓' },
        { txt: 'lápiz',     em: '✏️' },
        { txt: 'goma',      em: '🧽' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['escuela',  'школа'],
        ['clase',    'класс'],
        ['profesor', 'учитель'],
        ['alumno',   'ученик'],
      ]},
      { t: 'match', pairs: [
        ['libro',    'книга'],
        ['cuaderno', 'тетрадь'],
        ['lápiz',    'карандаш'],
        ['examen',   'экзамен'],
      ]},
      { t: 'translate', from: 'У меня есть книга', tiles: ['tengo', 'un', 'una', 'libro', 'cuaderno'], answer: ['tengo', 'un', 'libro'] },
      { t: 'fill', sentence: ['Mi', null, 'es muy bueno.'], target: 'profesor', opts: ['profesor', 'silla', 'agua'], hint: 'Мой учитель очень хороший' },
    ],
  },

  // ── 79. Internet básico ───────────────────────────────
  {
    id: 'l79', name: 'Internet', emoji: '🌐', desc: 'Vocabulario web',
    exercises: [
      { t: 'pick', q: '«Электронная почта»', opts: [
        { txt: 'correo',   em: '📧' },
        { txt: 'teléfono', em: '☎️' },
        { txt: 'carta',    em: '✉️' },
        { txt: 'red',      em: '🌐' },
      ], correct: 0 },
      { t: 'pick', q: '«Пароль»', opts: [
        { txt: 'usuario',     em: '👤' },
        { txt: 'contraseña',  em: '🔒' },
        { txt: 'cuenta',      em: '🪪' },
        { txt: 'mensaje',     em: '💬' },
      ], correct: 1 },
      { t: 'pick', q: '«Страница»', opts: [
        { txt: 'red',     em: '🌐' },
        { txt: 'sitio',   em: '🗺️' },
        { txt: 'página',  em: '📄' },
        { txt: 'enlace',  em: '🔗' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['correo',      'почта'],
        ['contraseña',  'пароль'],
        ['usuario',     'пользователь'],
        ['mensaje',     'сообщение'],
      ]},
      { t: 'match', pairs: [
        ['página',  'страница'],
        ['red',     'сеть'],
        ['enlace',  'ссылка'],
        ['archivo', 'файл'],
      ]},
      { t: 'translate', from: 'Какой у тебя пароль?', tiles: ['cuál', 'es', 'tu', 'contraseña', 'usuario'], answer: ['cuál', 'es', 'tu', 'contraseña'] },
      { t: 'fill', sentence: ['Te envío un', null, '.'], target: 'correo', opts: ['correo', 'pan', 'sol'], hint: 'Я отправлю тебе письмо' },
    ],
  },

  // ── 80. Repaso 12 (revisión de L76-L79) ───────────────
  {
    id: 'l80', name: 'Repaso 12', emoji: '🔁', desc: 'Repasa lecciones 76-79',
    exercises: [
      { t: 'pick', q: '«Очень приятно»', opts: [
        { txt: 'mucho gusto',  em: '🤝' },
        { txt: 'de nada',      em: '🙏' },
        { txt: 'por favor',    em: '🙏' },
        { txt: 'adiós',        em: '👋' },
      ], correct: 0 },
      { t: 'pick', q: '«Начальник»', opts: [
        { txt: 'empleado',  em: '🧑‍💼' },
        { txt: 'jefe',      em: '👔' },
        { txt: 'amigo',     em: '🤝' },
        { txt: 'alumno',    em: '🧑‍🎓' },
      ], correct: 1 },
      { t: 'pick', q: '«Школа»', opts: [
        { txt: 'casa',     em: '🏠' },
        { txt: 'tienda',   em: '🏪' },
        { txt: 'escuela',  em: '🏫' },
        { txt: 'oficina',  em: '🏢' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['señor',    'господин'],
        ['oficina',  'офис'],
        ['profesor', 'учитель'],
        ['lápiz',    'карандаш'],
      ]},
      { t: 'match', pairs: [
        ['correo',     'почта'],
        ['contraseña', 'пароль'],
        ['página',     'страница'],
        ['archivo',    'файл'],
      ]},
      { t: 'translate', from: 'Я работаю в офисе', tiles: ['trabajo', 'en', 'la', 'oficina'], answer: ['trabajo', 'en', 'la', 'oficina'] },
      { t: 'fill', sentence: ['Mi', null, 'es muy bueno.'], target: 'profesor', opts: ['profesor', 'mar', 'agua'], hint: 'Мой учитель очень хороший' },
    ],
  },

  // ── 81. Verbos de movimiento ──────────────────────────
  {
    id: 'l81', name: 'Movimiento', emoji: '🚶', desc: 'Verbos de movimiento',
    exercises: [
      { t: 'pick', q: '«Ходить»', opts: [
        { txt: 'caminar',  em: '🚶' },
        { txt: 'correr',   em: '🏃' },
        { txt: 'saltar',   em: '🤾' },
        { txt: 'nadar',    em: '🏊' },
      ], correct: 0 },
      { t: 'pick', q: '«Бежать»', opts: [
        { txt: 'caminar',  em: '🚶' },
        { txt: 'correr',   em: '🏃' },
        { txt: 'volar',    em: '🦅' },
        { txt: 'bailar',   em: '💃' },
      ], correct: 1 },
      { t: 'pick', q: '«Прыгать»', opts: [
        { txt: 'subir',    em: '⬆️' },
        { txt: 'bajar',    em: '⬇️' },
        { txt: 'saltar',   em: '🤾' },
        { txt: 'parar',    em: '🛑' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['caminar', 'ходить'],
        ['correr',  'бежать'],
        ['saltar',  'прыгать'],
        ['nadar',   'плавать'],
      ]},
      { t: 'match', swap: true, pairs: [
        ['subir', 'подниматься'],
        ['bajar', 'спускаться'],
        ['volar', 'летать'],
        ['parar', 'останавливаться'],
      ]},
      { t: 'translate', from: 'Я иду в школу', tiles: ['camino', 'a', 'la', 'escuela', 'corro'], answer: ['camino', 'a', 'la', 'escuela'] },
      { t: 'fill', sentence: ['Los pájaros', null, 'alto.'], target: 'vuelan', opts: ['vuelan', 'corren', 'nadan'], hint: 'Птицы летают высоко' },
    ],
  },

  // ── 82. En la playa ───────────────────────────────────
  {
    id: 'l82', name: 'En la playa', emoji: '🏖️', desc: 'Vocabulario de playa',
    exercises: [
      { t: 'pick', q: '«Песок»', opts: [
        { txt: 'arena',  em: '🏖️' },
        { txt: 'agua',   em: '💧' },
        { txt: 'ola',    em: '🌊' },
        { txt: 'sol',    em: '☀️' },
      ], correct: 0 },
      { t: 'pick', q: '«Зонт от солнца»', opts: [
        { txt: 'toalla',     em: '🧺' },
        { txt: 'sombrilla',  em: '☂️' },
        { txt: 'arena',      em: '🏖️' },
        { txt: 'pelota',     em: '⚽' },
      ], correct: 1 },
      { t: 'pick', q: '«Волна»', opts: [
        { txt: 'sol',     em: '☀️' },
        { txt: 'arena',   em: '🏖️' },
        { txt: 'ola',     em: '🌊' },
        { txt: 'concha',  em: '🐚' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['arena',   'песок'],
        ['sol',     'солнце'],
        ['ola',     'волна'],
        ['concha',  'ракушка'],
      ]},
      { t: 'match', pairs: [
        ['toalla',       'полотенце'],
        ['sombrilla',    'зонт от солнца'],
        ['bañador',      'купальник'],
        ['gafas de sol', 'солнечные очки'],
      ]},
      { t: 'translate', from: 'Мне нравится пляж', tiles: ['me', 'gusta', 'la', 'playa', 'el'], answer: ['me', 'gusta', 'la', 'playa'] },
      { t: 'fill', sentence: ['Hace calor, voy a la', null, '.'], target: 'playa', opts: ['playa', 'casa', 'tienda'], hint: 'Жарко, я иду на пляж' },
    ],
  },

  // ── 83. Deportes ──────────────────────────────────────
  {
    id: 'l83', name: 'Deportes', emoji: '⚽', desc: 'Deportes populares',
    exercises: [
      { t: 'pick', q: '«Футбол»', opts: [
        { txt: 'fútbol',      em: '⚽' },
        { txt: 'baloncesto',  em: '🏀' },
        { txt: 'tenis',       em: '🎾' },
        { txt: 'béisbol',     em: '⚾' },
      ], correct: 0 },
      { t: 'pick', q: '«Баскетбол»', opts: [
        { txt: 'fútbol',      em: '⚽' },
        { txt: 'baloncesto',  em: '🏀' },
        { txt: 'natación',    em: '🏊' },
        { txt: 'voleibol',    em: '🏐' },
      ], correct: 1 },
      { t: 'pick', q: '«Плавание»', opts: [
        { txt: 'correr',     em: '🏃' },
        { txt: 'esquí',      em: '🎿' },
        { txt: 'natación',   em: '🏊' },
        { txt: 'ciclismo',   em: '🚴' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['fútbol',     'футбол'],
        ['baloncesto', 'баскетбол'],
        ['tenis',      'теннис'],
        ['natación',   'плавание'],
      ]},
      { t: 'match', pairs: [
        ['equipo',  'команда'],
        ['jugador', 'игрок'],
        ['partido', 'матч'],
        ['ganar',   'выигрывать'],
      ]},
      { t: 'translate', from: 'Я играю в футбол', tiles: ['juego', 'al', 'fútbol', 'tenis'], answer: ['juego', 'al', 'fútbol'] },
      { t: 'fill', sentence: ['Mi', null, 'favorito es el tenis.'], target: 'deporte', opts: ['deporte', 'mar', 'casa'], hint: 'Мой любимый спорт — теннис' },
    ],
  },

  // ── 84. Instrumentos ──────────────────────────────────
  {
    id: 'l84', name: 'Instrumentos', emoji: '🎸', desc: 'Instrumentos musicales',
    exercises: [
      { t: 'pick', q: '«Гитара»', opts: [
        { txt: 'guitarra',  em: '🎸' },
        { txt: 'piano',     em: '🎹' },
        { txt: 'violín',    em: '🎻' },
        { txt: 'flauta',    em: '🎼' },
      ], correct: 0 },
      { t: 'pick', q: '«Скрипка»', opts: [
        { txt: 'piano',    em: '🎹' },
        { txt: 'violín',   em: '🎻' },
        { txt: 'tambor',   em: '🥁' },
        { txt: 'trompeta', em: '🎺' },
      ], correct: 1 },
      { t: 'pick', q: '«Барабан»', opts: [
        { txt: 'piano',    em: '🎹' },
        { txt: 'guitarra', em: '🎸' },
        { txt: 'tambor',   em: '🥁' },
        { txt: 'flauta',   em: '🎼' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['guitarra',  'гитара'],
        ['piano',     'фортепиано'],
        ['violín',    'скрипка'],
        ['tambor',    'барабан'],
      ]},
      { t: 'match', pairs: [
        ['flauta',   'флейта'],
        ['trompeta', 'труба'],
        ['músico',   'музыкант'],
        ['canción',  'песня'],
      ]},
      { t: 'translate', from: 'Я играю на гитаре', tiles: ['toco', 'la', 'el', 'guitarra', 'piano'], answer: ['toco', 'la', 'guitarra'] },
      { t: 'fill', sentence: ['Mi hermano toca el', null, '.'], target: 'piano', opts: ['piano', 'mar', 'libro'], hint: 'Мой брат играет на фортепиано' },
    ],
  },

  // ── 85. Repaso 13 (revisión de L81-L84) ───────────────
  {
    id: 'l85', name: 'Repaso 13', emoji: '🔁', desc: 'Repasa lecciones 81-84',
    exercises: [
      { t: 'pick', q: '«Бежать»', opts: [
        { txt: 'caminar', em: '🚶' },
        { txt: 'correr',  em: '🏃' },
        { txt: 'saltar',  em: '🤾' },
        { txt: 'nadar',   em: '🏊' },
      ], correct: 1 },
      { t: 'pick', q: '«Зонт от солнца»', opts: [
        { txt: 'toalla',    em: '🧺' },
        { txt: 'sombrilla', em: '☂️' },
        { txt: 'arena',     em: '🏖️' },
        { txt: 'ola',       em: '🌊' },
      ], correct: 1 },
      { t: 'pick', q: '«Гитара»', opts: [
        { txt: 'piano',    em: '🎹' },
        { txt: 'violín',   em: '🎻' },
        { txt: 'guitarra', em: '🎸' },
        { txt: 'flauta',   em: '🎼' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['caminar', 'ходить'],
        ['nadar',   'плавать'],
        ['arena',   'песок'],
        ['ola',     'волна'],
      ]},
      { t: 'match', pairs: [
        ['fútbol',   'футбол'],
        ['natación', 'плавание'],
        ['guitarra', 'гитара'],
        ['canción',  'песня'],
      ]},
      { t: 'translate', from: 'Я играю в футбол', tiles: ['juego', 'al', 'fútbol', 'tenis'], answer: ['juego', 'al', 'fútbol'] },
      { t: 'fill', sentence: ['Hace calor, voy a la', null, '.'], target: 'playa', opts: ['playa', 'casa', 'oficina'], hint: 'Жарко, я иду на пляж' },
    ],
  },

  // ── 86. Cocinar ───────────────────────────────────────
  {
    id: 'l86', name: 'Cocinar', emoji: '👨‍🍳', desc: 'Verbos de cocina',
    exercises: [
      { t: 'pick', q: '«Резать»', opts: [
        { txt: 'cortar',  em: '🔪' },
        { txt: 'freír',   em: '🍳' },
        { txt: 'hervir',  em: '♨️' },
        { txt: 'mezclar', em: '🥣' },
      ], correct: 0 },
      { t: 'pick', q: '«Жарить»', opts: [
        { txt: 'cortar',  em: '🔪' },
        { txt: 'freír',   em: '🍳' },
        { txt: 'hornear', em: '🍞' },
        { txt: 'lavar',   em: '🧼' },
      ], correct: 1 },
      { t: 'pick', q: '«Варить»', opts: [
        { txt: 'cortar',  em: '🔪' },
        { txt: 'mezclar', em: '🥣' },
        { txt: 'hervir',  em: '♨️' },
        { txt: 'comer',   em: '🍴' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['cortar',  'резать'],
        ['freír',   'жарить'],
        ['hervir',  'варить'],
        ['mezclar', 'смешивать'],
      ]},
      { t: 'match', pairs: [
        ['hornear', 'печь'],
        ['lavar',   'мыть'],
        ['probar',  'пробовать'],
        ['servir',  'подавать'],
      ]},
      { t: 'translate', from: 'Я режу хлеб', tiles: ['corto', 'el', 'pan', 'la', 'frío'], answer: ['corto', 'el', 'pan'] },
      { t: 'fill', sentence: ['Voy a', null, 'la sopa.'], target: 'hervir', opts: ['hervir', 'leer', 'jugar'], hint: 'Я буду варить суп' },
    ],
  },

  // ── 87. Recetas ───────────────────────────────────────
  {
    id: 'l87', name: 'Recetas', emoji: '📖', desc: 'En la cocina',
    exercises: [
      { t: 'pick', q: '«Ингредиент»', opts: [
        { txt: 'ingrediente', em: '🥕' },
        { txt: 'receta',      em: '📖' },
        { txt: 'plato',       em: '🍽️' },
        { txt: 'taza',        em: '☕' },
      ], correct: 0 },
      { t: 'pick', q: '«Рецепт»', opts: [
        { txt: 'libro',   em: '📕' },
        { txt: 'receta',  em: '📖' },
        { txt: 'mapa',    em: '🗺️' },
        { txt: 'cuenta',  em: '🧾' },
      ], correct: 1 },
      { t: 'pick', q: '«Грамм»', opts: [
        { txt: 'litro',   em: '💧' },
        { txt: 'kilo',    em: '⚖️' },
        { txt: 'gramo',   em: '⚖️' },
        { txt: 'taza',    em: '☕' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['receta',      'рецепт'],
        ['ingrediente', 'ингредиент'],
        ['plato',       'блюдо'],
        ['sabor',       'вкус'],
      ]},
      { t: 'match', pairs: [
        ['kilo',      'кило'],
        ['gramo',     'грамм'],
        ['litro',     'литр'],
        ['cucharada', 'ст. ложка'],
      ]},
      { t: 'translate', from: 'Это лёгкий рецепт', tiles: ['es', 'una', 'un', 'receta', 'fácil'], answer: ['es', 'una', 'receta', 'fácil'] },
      { t: 'fill', sentence: ['Necesito un', null, 'de azúcar.'], target: 'kilo', opts: ['kilo', 'plato', 'libro'], hint: 'Мне нужен килограмм сахара' },
    ],
  },

  // ── 88. En el bar ─────────────────────────────────────
  {
    id: 'l88', name: 'En el bar', emoji: '☕', desc: 'Pedir bebidas',
    exercises: [
      { t: 'pick', q: '«Сок»', opts: [
        { txt: 'jugo',      em: '🧃' },
        { txt: 'café',      em: '☕' },
        { txt: 'agua',      em: '💧' },
        { txt: 'refresco',  em: '🥤' },
      ], correct: 0 },
      { t: 'pick', q: '«Газировка»', opts: [
        { txt: 'jugo',      em: '🧃' },
        { txt: 'refresco',  em: '🥤' },
        { txt: 'leche',     em: '🥛' },
        { txt: 'té',        em: '🍵' },
      ], correct: 1 },
      { t: 'pick', q: '«Без сахара»', opts: [
        { txt: 'con azúcar',  em: '➕' },
        { txt: 'con leche',   em: '🥛' },
        { txt: 'sin azúcar',  em: '🚫' },
        { txt: 'caliente',    em: '🔥' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['jugo',     'сок'],
        ['refresco', 'газировка'],
        ['cerveza',  'пиво'],
        ['vino',     'вино'],
      ]},
      { t: 'match', pairs: [
        ['con',      'с'],
        ['sin',      'без'],
        ['hielo',    'лёд'],
        ['camarero', 'официант'],
      ]},
      { t: 'translate', from: 'Кофе, пожалуйста', tiles: ['un', 'café', 'por', 'favor', 'gracias'], answer: ['un', 'café', 'por', 'favor'] },
      { t: 'fill', sentence: ['Quiero un té', null, 'leche.'], target: 'con', opts: ['con', 'sin', 'a'], hint: 'Я хочу чай с молоком' },
    ],
  },

  // ── 89. Postres ───────────────────────────────────────
  {
    id: 'l89', name: 'Postres', emoji: '🍰', desc: 'Dulces y postres',
    exercises: [
      { t: 'pick', q: '«Мороженое»', opts: [
        { txt: 'helado',    em: '🍦' },
        { txt: 'pastel',    em: '🍰' },
        { txt: 'galleta',   em: '🍪' },
        { txt: 'chocolate', em: '🍫' },
      ], correct: 0 },
      { t: 'pick', q: '«Торт»', opts: [
        { txt: 'helado',  em: '🍦' },
        { txt: 'pastel',  em: '🍰' },
        { txt: 'fruta',   em: '🍓' },
        { txt: 'pan',     em: '🍞' },
      ], correct: 1 },
      { t: 'pick', q: '«Печенье»', opts: [
        { txt: 'helado',    em: '🍦' },
        { txt: 'pastel',    em: '🍰' },
        { txt: 'galleta',   em: '🍪' },
        { txt: 'chocolate', em: '🍫' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['helado',    'мороженое'],
        ['pastel',    'торт'],
        ['galleta',   'печенье'],
        ['chocolate', 'шоколад'],
      ]},
      { t: 'match', pairs: [
        ['dulce',   'сладкий'],
        ['azúcar',  'сахар'],
        ['miel',    'мёд'],
        ['nata',    'сливки'],
      ]},
      { t: 'translate', from: 'Я хочу мороженое', tiles: ['quiero', 'un', 'helado', 'pastel'], answer: ['quiero', 'un', 'helado'] },
      { t: 'fill', sentence: ['Me gusta el', null, '.'], target: 'chocolate', opts: ['chocolate', 'libro', 'sol'], hint: 'Мне нравится шоколад' },
    ],
  },

  // ── 90. Repaso 14 (revisión de L86-L89) ───────────────
  {
    id: 'l90', name: 'Repaso 14', emoji: '🔁', desc: 'Repasa lecciones 86-89',
    exercises: [
      { t: 'pick', q: '«Резать»', opts: [
        { txt: 'cortar',  em: '🔪' },
        { txt: 'freír',   em: '🍳' },
        { txt: 'mezclar', em: '🥣' },
        { txt: 'lavar',   em: '🧼' },
      ], correct: 0 },
      { t: 'pick', q: '«Рецепт»', opts: [
        { txt: 'libro',  em: '📕' },
        { txt: 'receta', em: '📖' },
        { txt: 'plato',  em: '🍽️' },
        { txt: 'mapa',   em: '🗺️' },
      ], correct: 1 },
      { t: 'pick', q: '«Мороженое»', opts: [
        { txt: 'pastel',    em: '🍰' },
        { txt: 'galleta',   em: '🍪' },
        { txt: 'helado',    em: '🍦' },
        { txt: 'chocolate', em: '🍫' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['cortar', 'резать'],
        ['hervir', 'варить'],
        ['receta', 'рецепт'],
        ['plato',  'блюдо'],
      ]},
      { t: 'match', pairs: [
        ['jugo',    'сок'],
        ['café',    'кофе'],
        ['pastel',  'торт'],
        ['dulce',   'сладкий'],
      ]},
      { t: 'translate', from: 'Кофе, пожалуйста', tiles: ['un', 'café', 'por', 'favor'], answer: ['un', 'café', 'por', 'favor'] },
      { t: 'fill', sentence: ['Me gusta el', null, '.'], target: 'chocolate', opts: ['chocolate', 'libro', 'mar'], hint: 'Мне нравится шоколад' },
    ],
  },

  // ── 91. Mascotas ──────────────────────────────────────
  {
    id: 'l91', name: 'Mascotas', emoji: '🐾', desc: 'Cuidar y jugar',
    exercises: [
      { t: 'pick', q: '«Собака»', opts: [
        { txt: 'perro',   em: '🐶' },
        { txt: 'gato',    em: '🐱' },
        { txt: 'pez',     em: '🐠' },
        { txt: 'pájaro',  em: '🐦' },
      ], correct: 0 },
      { t: 'pick', q: '«Хомяк»', opts: [
        { txt: 'tortuga',  em: '🐢' },
        { txt: 'hámster',  em: '🐹' },
        { txt: 'conejo',   em: '🐰' },
        { txt: 'pez',      em: '🐠' },
      ], correct: 1 },
      { t: 'pick', q: '«Гулять (с собакой)»', opts: [
        { txt: 'alimentar', em: '🍽️' },
        { txt: 'cepillar',  em: '🧴' },
        { txt: 'pasear',    em: '🚶' },
        { txt: 'dormir',    em: '😴' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['perro',    'собака'],
        ['gato',     'кошка'],
        ['hámster',  'хомяк'],
        ['tortuga',  'черепаха'],
      ]},
      { t: 'match', pairs: [
        ['alimentar', 'кормить'],
        ['pasear',    'гулять'],
        ['jugar',     'играть'],
        ['cuidar',    'заботиться'],
      ]},
      { t: 'translate', from: 'Я гуляю с собакой', tiles: ['paseo', 'al', 'perro', 'el'], answer: ['paseo', 'al', 'perro'] },
      { t: 'fill', sentence: ['Tengo que', null, 'a mi gato.'], target: 'alimentar', opts: ['alimentar', 'leer', 'pintar'], hint: 'Мне надо покормить кота' },
    ],
  },

  // ── 92. Insectos ──────────────────────────────────────
  {
    id: 'l92', name: 'Insectos', emoji: '🐝', desc: 'Insectos y bichos',
    exercises: [
      { t: 'pick', q: '«Пчела»', opts: [
        { txt: 'abeja',     em: '🐝' },
        { txt: 'mosca',     em: '🪰' },
        { txt: 'hormiga',   em: '🐜' },
        { txt: 'mariposa',  em: '🦋' },
      ], correct: 0 },
      { t: 'pick', q: '«Муравей»', opts: [
        { txt: 'araña',     em: '🕷️' },
        { txt: 'hormiga',   em: '🐜' },
        { txt: 'mosca',     em: '🪰' },
        { txt: 'mosquito',  em: '🦟' },
      ], correct: 1 },
      { t: 'pick', q: '«Бабочка»', opts: [
        { txt: 'abeja',     em: '🐝' },
        { txt: 'mosca',     em: '🪰' },
        { txt: 'mariposa',  em: '🦋' },
        { txt: 'hormiga',   em: '🐜' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['abeja',    'пчела'],
        ['mariposa', 'бабочка'],
        ['hormiga',  'муравей'],
        ['araña',    'паук'],
      ]},
      { t: 'match', pairs: [
        ['mosca',    'муха'],
        ['mosquito', 'комар'],
        ['gusano',   'червь'],
        ['avispa',   'оса'],
      ]},
      { t: 'translate', from: 'Я вижу бабочку', tiles: ['veo', 'una', 'un', 'mariposa', 'abeja'], answer: ['veo', 'una', 'mariposa'] },
      { t: 'fill', sentence: ['Me molesta el', null, '.'], target: 'mosquito', opts: ['mosquito', 'pan', 'libro'], hint: 'Меня раздражает комар' },
    ],
  },

  // ── 93. El océano ─────────────────────────────────────
  {
    id: 'l93', name: 'El océano', emoji: '🐬', desc: 'Animales del mar',
    exercises: [
      { t: 'pick', q: '«Дельфин»', opts: [
        { txt: 'delfín',   em: '🐬' },
        { txt: 'tiburón',  em: '🦈' },
        { txt: 'ballena',  em: '🐳' },
        { txt: 'pulpo',    em: '🐙' },
      ], correct: 0 },
      { t: 'pick', q: '«Акула»', opts: [
        { txt: 'pez',       em: '🐠' },
        { txt: 'tiburón',   em: '🦈' },
        { txt: 'tortuga',   em: '🐢' },
        { txt: 'cangrejo',  em: '🦀' },
      ], correct: 1 },
      { t: 'pick', q: '«Осьминог»', opts: [
        { txt: 'ballena',   em: '🐳' },
        { txt: 'delfín',    em: '🐬' },
        { txt: 'pulpo',     em: '🐙' },
        { txt: 'cangrejo',  em: '🦀' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['delfín',   'дельфин'],
        ['ballena',  'кит'],
        ['tiburón',  'акула'],
        ['pulpo',    'осьминог'],
      ]},
      { t: 'match', pairs: [
        ['tortuga',         'черепаха'],
        ['cangrejo',        'краб'],
        ['estrella de mar', 'морская звезда'],
        ['medusa',          'медуза'],
      ]},
      { t: 'translate', from: 'Я вижу кита', tiles: ['veo', 'una', 'un', 'ballena', 'pulpo'], answer: ['veo', 'una', 'ballena'] },
      { t: 'fill', sentence: ['El', null, 'es muy rápido.'], target: 'delfín', opts: ['delfín', 'libro', 'pan'], hint: 'Дельфин очень быстрый' },
    ],
  },

  // ── 94. Aves ──────────────────────────────────────────
  {
    id: 'l94', name: 'Aves', emoji: '🦅', desc: 'Pájaros y aves',
    exercises: [
      { t: 'pick', q: '«Орёл»', opts: [
        { txt: 'águila',   em: '🦅' },
        { txt: 'paloma',   em: '🕊️' },
        { txt: 'búho',     em: '🦉' },
        { txt: 'loro',     em: '🦜' },
      ], correct: 0 },
      { t: 'pick', q: '«Голубь»', opts: [
        { txt: 'águila',    em: '🦅' },
        { txt: 'paloma',    em: '🕊️' },
        { txt: 'pingüino',  em: '🐧' },
        { txt: 'cisne',     em: '🦢' },
      ], correct: 1 },
      { t: 'pick', q: '«Сова»', opts: [
        { txt: 'gallo',    em: '🐓' },
        { txt: 'loro',     em: '🦜' },
        { txt: 'búho',     em: '🦉' },
        { txt: 'paloma',   em: '🕊️' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['águila',  'орёл'],
        ['paloma',  'голубь'],
        ['búho',    'сова'],
        ['loro',    'попугай'],
      ]},
      { t: 'match', pairs: [
        ['gallo',     'петух'],
        ['cisne',     'лебедь'],
        ['pingüino',  'пингвин'],
        ['nido',      'гнездо'],
      ]},
      { t: 'translate', from: 'Орёл летает высоко', tiles: ['el', 'águila', 'vuela', 'alto', 'corre'], answer: ['el', 'águila', 'vuela', 'alto'] },
      { t: 'fill', sentence: ['El', null, 'habla mucho.'], target: 'loro', opts: ['loro', 'mar', 'pan'], hint: 'Попугай много говорит' },
    ],
  },

  // ── 95. Repaso 15 (revisión de L91-L94) ───────────────
  {
    id: 'l95', name: 'Repaso 15', emoji: '🔁', desc: 'Repasa lecciones 91-94',
    exercises: [
      { t: 'pick', q: '«Хомяк»', opts: [
        { txt: 'tortuga',  em: '🐢' },
        { txt: 'hámster',  em: '🐹' },
        { txt: 'conejo',   em: '🐰' },
        { txt: 'pez',      em: '🐠' },
      ], correct: 1 },
      { t: 'pick', q: '«Пчела»', opts: [
        { txt: 'abeja',     em: '🐝' },
        { txt: 'mosca',     em: '🪰' },
        { txt: 'hormiga',   em: '🐜' },
        { txt: 'mariposa',  em: '🦋' },
      ], correct: 0 },
      { t: 'pick', q: '«Дельфин»', opts: [
        { txt: 'tiburón', em: '🦈' },
        { txt: 'delfín',  em: '🐬' },
        { txt: 'ballena', em: '🐳' },
        { txt: 'pulpo',   em: '🐙' },
      ], correct: 1 },
      { t: 'match', pairs: [
        ['perro',    'собака'],
        ['hámster',  'хомяк'],
        ['mariposa', 'бабочка'],
        ['araña',    'паук'],
      ]},
      { t: 'match', pairs: [
        ['ballena',  'кит'],
        ['tiburón',  'акула'],
        ['águila',   'орёл'],
        ['búho',     'сова'],
      ]},
      { t: 'translate', from: 'Я вижу бабочку', tiles: ['veo', 'una', 'mariposa', 'abeja'], answer: ['veo', 'una', 'mariposa'] },
      { t: 'fill', sentence: ['Tengo que', null, 'a mi gato.'], target: 'alimentar', opts: ['alimentar', 'leer', 'pintar'], hint: 'Мне надо покормить кота' },
    ],
  },

  // ── 96. Emociones II ──────────────────────────────────
  {
    id: 'l96', name: 'Emociones II', emoji: '😌', desc: 'Más sentimientos',
    exercises: [
      { t: 'pick', q: '«Спокойный»', opts: [
        { txt: 'tranquilo',    em: '😌' },
        { txt: 'nervioso',     em: '😬' },
        { txt: 'sorprendido',  em: '😲' },
        { txt: 'aburrido',     em: '😑' },
      ], correct: 0 },
      { t: 'pick', q: '«Нервный»', opts: [
        { txt: 'tranquilo',  em: '😌' },
        { txt: 'nervioso',   em: '😬' },
        { txt: 'feliz',      em: '😊' },
        { txt: 'cansado',    em: '😴' },
      ], correct: 1 },
      { t: 'pick', q: '«Удивлённый»', opts: [
        { txt: 'feliz',         em: '😊' },
        { txt: 'aburrido',      em: '😑' },
        { txt: 'sorprendido',   em: '😲' },
        { txt: 'enfadado',      em: '😠' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['tranquilo',    'спокойный'],
        ['nervioso',     'нервный'],
        ['sorprendido',  'удивлённый'],
        ['aburrido',     'скучающий'],
      ]},
      { t: 'match', pairs: [
        ['orgulloso',    'гордый'],
        ['celoso',       'ревнивый'],
        ['avergonzado',  'смущённый'],
        ['emocionado',   'взволнованный'],
      ]},
      { t: 'translate', from: 'Я очень спокоен', tiles: ['estoy', 'muy', 'tranquilo', 'nervioso'], answer: ['estoy', 'muy', 'tranquilo'] },
      { t: 'fill', sentence: ['Hoy estoy', null, '.'], target: 'feliz', opts: ['feliz', 'libro', 'mar'], hint: 'Сегодня я счастлив' },
    ],
  },

  // ── 97. El cuerpo II ──────────────────────────────────
  {
    id: 'l97', name: 'El cuerpo II', emoji: '💪', desc: 'Más partes del cuerpo',
    exercises: [
      { t: 'pick', q: '«Сердце»', opts: [
        { txt: 'corazón',   em: '❤️' },
        { txt: 'estómago',  em: '🍽️' },
        { txt: 'pulmón',    em: '🫁' },
        { txt: 'hígado',    em: '🍖' },
      ], correct: 0 },
      { t: 'pick', q: '«Спина»', opts: [
        { txt: 'pecho',     em: '🫀' },
        { txt: 'espalda',   em: '🔙' },
        { txt: 'cuello',    em: '🦒' },
        { txt: 'rodilla',   em: '🦵' },
      ], correct: 1 },
      { t: 'pick', q: '«Колено»', opts: [
        { txt: 'codo',     em: '💪' },
        { txt: 'hombro',   em: '💪' },
        { txt: 'rodilla',  em: '🦵' },
        { txt: 'tobillo',  em: '🦶' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['corazón',  'сердце'],
        ['espalda',  'спина'],
        ['hombro',   'плечо'],
        ['rodilla',  'колено'],
      ]},
      { t: 'match', pairs: [
        ['codo',      'локоть'],
        ['cuello',    'шея'],
        ['pecho',     'грудь'],
        ['estómago',  'желудок'],
      ]},
      { t: 'translate', from: 'У меня болит спина', tiles: ['me', 'duele', 'la', 'espalda', 'el'], answer: ['me', 'duele', 'la', 'espalda'] },
      { t: 'fill', sentence: ['Tengo dolor de', null, '.'], target: 'cabeza', opts: ['cabeza', 'libro', 'sol'], hint: 'У меня болит голова' },
    ],
  },

  // ── 98. Farmacia ──────────────────────────────────────
  {
    id: 'l98', name: 'Farmacia', emoji: '💊', desc: 'En la farmacia',
    exercises: [
      { t: 'pick', q: '«Таблетка»', opts: [
        { txt: 'pastilla',  em: '💊' },
        { txt: 'jarabe',    em: '🍯' },
        { txt: 'venda',     em: '🩹' },
        { txt: 'receta',    em: '📋' },
      ], correct: 0 },
      { t: 'pick', q: '«Сироп»', opts: [
        { txt: 'agua',     em: '💧' },
        { txt: 'jarabe',   em: '🍯' },
        { txt: 'leche',    em: '🥛' },
        { txt: 'café',     em: '☕' },
      ], correct: 1 },
      { t: 'pick', q: '«Температура»', opts: [
        { txt: 'tos',      em: '🤧' },
        { txt: 'dolor',    em: '🤕' },
        { txt: 'fiebre',   em: '🤒' },
        { txt: 'frío',     em: '🥶' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['pastilla', 'таблетка'],
        ['jarabe',   'сироп'],
        ['receta',   'рецепт'],
        ['venda',    'бинт'],
      ]},
      { t: 'match', pairs: [
        ['dolor',   'боль'],
        ['fiebre',  'температура'],
        ['tos',     'кашель'],
        ['gripe',   'грипп'],
      ]},
      { t: 'translate', from: 'Мне нужна таблетка', tiles: ['necesito', 'una', 'pastilla', 'un'], answer: ['necesito', 'una', 'pastilla'] },
      { t: 'fill', sentence: ['Tengo', null, '.'], target: 'fiebre', opts: ['fiebre', 'mar', 'sol'], hint: 'У меня температура' },
    ],
  },

  // ── 99. Emergencias ───────────────────────────────────
  {
    id: 'l99', name: 'Emergencias', emoji: '🚨', desc: 'Ayuda y peligro',
    exercises: [
      { t: 'pick', q: '«Помощь!»', opts: [
        { txt: '¡ayuda!',   em: '🆘' },
        { txt: '¡gracias!', em: '🙏' },
        { txt: '¡hola!',    em: '👋' },
        { txt: '¡vamos!',   em: '🚶' },
      ], correct: 0 },
      { t: 'pick', q: '«Огонь»', opts: [
        { txt: 'agua',   em: '💧' },
        { txt: 'fuego',  em: '🔥' },
        { txt: 'humo',   em: '💨' },
        { txt: 'frío',   em: '🥶' },
      ], correct: 1 },
      { t: 'pick', q: '«Полиция»', opts: [
        { txt: 'bombero',  em: '🧑‍🚒' },
        { txt: 'médico',   em: '🩺' },
        { txt: 'policía',  em: '👮' },
        { txt: 'profesor', em: '👨‍🏫' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['ayuda',     'помощь'],
        ['peligro',   'опасность'],
        ['fuego',     'огонь'],
        ['accidente', 'авария'],
      ]},
      { t: 'match', pairs: [
        ['policía',     'полиция'],
        ['bombero',     'пожарный'],
        ['hospital',    'больница'],
        ['ambulancia',  'скорая помощь'],
      ]},
      { t: 'translate', from: 'Позвони в полицию', tiles: ['llama', 'a', 'la', 'policía', 'hospital'], answer: ['llama', 'a', 'la', 'policía'] },
      { t: 'fill', sentence: ['¡Cuidado, hay', null, '!'], target: 'fuego', opts: ['fuego', 'libro', 'sol'], hint: 'Осторожно, огонь!' },
    ],
  },

  // ── 100. Repaso Maestro (revisión final de L76-L99) ───
  // FINAL MASTERY TEST — 18 exercises drawn from across the last 24 lessons.
  // Hearts dropped to 2 so it actually feels like graduation, not another tile-rearrangement.
  {
    id: 'l100', name: 'Repaso Maestro', emoji: '🏆', desc: 'Repaso final (76-99)',
    hearts: 2,
    exercises: [
      // — Greetings / etiquette (L76)
      { t: 'pick', q: '«Очень приятно»', opts: [
        { txt: 'mucho gusto',  em: '🤝' },
        { txt: 'de nada',      em: '🙏' },
        { txt: 'por favor',    em: '🙏' },
        { txt: 'adiós',        em: '👋' },
      ], correct: 0 },
      // — Verbs of motion (L81)
      { t: 'pick', q: '«Бежать»', opts: [
        { txt: 'caminar',  em: '🚶' },
        { txt: 'correr',   em: '🏃' },
        { txt: 'saltar',   em: '🤾' },
        { txt: 'nadar',    em: '🏊' },
      ], correct: 1 },
      // — Body II (L97)
      { t: 'pick', q: '«Сердце»', opts: [
        { txt: 'estómago', em: '🍽️' },
        { txt: 'espalda',  em: '🔙' },
        { txt: 'corazón',  em: '❤️' },
        { txt: 'hombro',   em: '💪' },
      ], correct: 2 },
      // — Office (L77) — no emoji crutch on prompt
      { t: 'pick', q: '«Офис»', opts: [
        { txt: 'oficina',   em: '🏢' },
        { txt: 'escuela',   em: '🏫' },
        { txt: 'tienda',    em: '🏪' },
        { txt: 'farmacia',  em: '💊' },
      ], correct: 0 },
      // — Beach (L82)
      { t: 'pick', q: '«Песок»', opts: [
        { txt: 'agua',  em: '💧' },
        { txt: 'arena', em: '🏖️' },
        { txt: 'mar',   em: '🌊' },
        { txt: 'sol',   em: '☀️' },
      ], correct: 1 },
      // — Cooking (L86)
      { t: 'pick', q: '«Жарить»', opts: [
        { txt: 'hervir', em: '♨️' },
        { txt: 'cortar', em: '🔪' },
        { txt: 'freír',  em: '🍳' },
        { txt: 'mezclar',em: '🥣' },
      ], correct: 2 },
      // — Emergencies (L99)
      { t: 'pick', q: '«Скорая помощь»', opts: [
        { txt: 'ambulancia', em: '🚑' },
        { txt: 'policía',    em: '👮' },
        { txt: 'bombero',    em: '🧑‍🚒' },
        { txt: 'farmacia',   em: '💊' },
      ], correct: 0 },
      // — Office/beach/sports/music mix
      { t: 'match', pairs: [
        ['oficina',   'офис'],
        ['playa',     'пляж'],
        ['fútbol',    'футбол'],
        ['guitarra',  'гитара'],
      ]},
      // — Animals/body/health mix (swapped: RU on left)
      { t: 'match', swap: true, pairs: [
        ['delfín',     'дельфин'],
        ['mariposa',   'бабочка'],
        ['tranquilo',  'спокойный'],
        ['pastilla',   'таблетка'],
      ]},
      // — Emergencies/pharmacy mix
      { t: 'match', pairs: [
        ['ayuda',     'помощь'],
        ['fuego',     'огонь'],
        ['policía',   'полиция'],
        ['hospital',  'больница'],
      ]},
      // — Bar/desserts mix
      { t: 'match', swap: true, pairs: [
        ['café',      'кофе'],
        ['cerveza',   'пиво'],
        ['tarta',     'торт'],
        ['helado',    'мороженое'],
      ]},
      // — Music
      { t: 'translate', from: 'Я играю на гитаре', tiles: ['toco', 'la', 'el', 'guitarra'], answer: ['toco', 'la', 'guitarra'] },
      // — Sports
      { t: 'translate', from: 'Мне нравится футбол', tiles: ['me', 'gusta', 'gustan', 'el', 'fútbol'], answer: ['me', 'gusta', 'el', 'fútbol'] },
      // — Beach
      { t: 'translate', from: 'Я хочу пойти на пляж', tiles: ['quiero', 'ir', 'a', 'la', 'playa', 'el'], answer: ['quiero', 'ir', 'a', 'la', 'playa'] },
      // — Emergencies
      { t: 'fill', sentence: ['¡Cuidado, hay', null, '!'], target: 'fuego', opts: ['fuego', 'libro', 'sol'], hint: 'Осторожно, огонь!' },
      // — Cooking — recall a specific verb
      { t: 'fill', sentence: ['Voy a', null, 'la cena.'], target: 'cocinar', opts: ['cocinar', 'comer', 'limpiar'], hint: 'Я буду готовить ужин' },
      // — Production: typed
      { t: 'typed', from: 'Помоги мне, пожалуйста', answer: 'ayúdame por favor', answers: ['ayúdame por favor', 'ayúdame, por favor', 'ayudame por favor'], hint: 'imperativo: ayúdame' },
      // — Production: typed (mastery)
      { t: 'typed', from: 'Мне нравится играть на гитаре', answer: 'me gusta tocar la guitarra', answers: ['me gusta tocar la guitarra', 'me gusta tocar guitarra'], hint: 'gustar + инфинитив' },
    ],
  },

  // ════════════════════════════════════════════════════════
  // BLOCK A (L101-L105): Body & health deep dive
  // ════════════════════════════════════════════════════════

  // ── 101. El cuerpo III ────────────────────────────────
  // Internal organs — builds on L12 (cuerpo) and L97 (cuerpo II)
  {
    id: 'l101', name: 'Cuerpo III', emoji: '🫀', desc: 'Órganos internos',
    exercises: [
      { t: 'pick', q: '«Сердце»', opts: [
        { txt: 'corazón',  em: '❤️' },
        { txt: 'pulmón',   em: '🫁' },
        { txt: 'estómago', em: '🫃' },
        { txt: 'cerebro',  em: '🧠' },
      ], correct: 0 },
      { t: 'pick', q: '«Лёгкие»', opts: [
        { txt: 'hígado',   em: '🫘' },
        { txt: 'pulmones', em: '🫁' },
        { txt: 'riñón',    em: '🫘' },
        { txt: 'sangre',   em: '🩸' },
      ], correct: 1 },
      { t: 'pick', q: '«Мозг»', opts: [
        { txt: 'corazón',  em: '❤️' },
        { txt: 'hueso',    em: '🦴' },
        { txt: 'cerebro',  em: '🧠' },
        { txt: 'piel',     em: '✋' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['corazón',  'сердце'],
        ['cerebro',  'мозг'],
        ['estómago', 'желудок'],
        ['pulmón',   'лёгкое'],
      ]},
      { t: 'match', pairs: [
        ['hueso',  'кость'],
        ['sangre', 'кровь'],
        ['piel',   'кожа'],
        ['hígado', 'печень'],
      ]},
      // Reuse «me duele» from L33
      { t: 'translate', from: 'У меня болит сердце', tiles: ['me', 'duele', 'el', 'corazón', 'la'], answer: ['me', 'duele', 'el', 'corazón'] },
      { t: 'fill', sentence: ['El', null, 'piensa.'], target: 'cerebro', opts: ['cerebro', 'hueso', 'piel'], hint: 'Мозг думает' },
    ],
  },

  // ── 102. Mente y memoria ──────────────────────────────
  {
    id: 'l102', name: 'Mente', emoji: '💭', desc: 'Pensar, recordar, soñar',
    exercises: [
      { t: 'pick', q: '«Думать»', opts: [
        { txt: 'pensar',   em: '🤔' },
        { txt: 'recordar', em: '🧠' },
        { txt: 'olvidar',  em: '🤷' },
        { txt: 'soñar',    em: '💭' },
      ], correct: 0 },
      { t: 'pick', q: '«Помнить»', opts: [
        { txt: 'olvidar',  em: '🤷' },
        { txt: 'recordar', em: '🧠' },
        { txt: 'sentir',   em: '💖' },
        { txt: 'creer',    em: '🙏' },
      ], correct: 1 },
      { t: 'pick', q: '«Забывать»', opts: [
        { txt: 'pensar',   em: '🤔' },
        { txt: 'recordar', em: '🧠' },
        { txt: 'olvidar',  em: '🤷' },
        { txt: 'saber',    em: '💡' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['pensar',   'думать'],
        ['recordar', 'помнить'],
        ['olvidar',  'забывать'],
        ['soñar',    'мечтать/спать'],
      ]},
      { t: 'match', pairs: [
        ['creer',    'верить'],
        ['saber',    'знать'],
        ['entender', 'понимать'],
        ['imaginar', 'представлять'],
      ]},
      // Reuse «no» negation from L43
      { t: 'translate', from: 'Я не помню', tiles: ['no', 'recuerdo', 'olvido', 'me'], answer: ['no', 'recuerdo'] },
      { t: 'fill', sentence: ['Ahora', null, 'en ti.'], target: 'pienso', opts: ['pienso', 'olvido', 'sé'], hint: 'Сейчас я думаю о тебе' },
    ],
  },

  // ── 103. Dormir y descansar ───────────────────────────
  // Builds on L32 (dormir) and L54 (me acuesto)
  {
    id: 'l103', name: 'Dormir', emoji: '😴', desc: 'Sueño y descanso',
    exercises: [
      { t: 'pick', q: '«Просыпаться»', opts: [
        { txt: 'despertarse', em: '⏰' },
        { txt: 'acostarse',   em: '🛏️' },
        { txt: 'soñar',       em: '💭' },
        { txt: 'roncar',      em: '😪' },
      ], correct: 0 },
      { t: 'pick', q: '«Подушка»', opts: [
        { txt: 'cama',     em: '🛏️' },
        { txt: 'almohada', em: '🛌' },
        { txt: 'manta',    em: '🧣' },
        { txt: 'sábana',   em: '📜' },
      ], correct: 1 },
      { t: 'pick', q: '«Одеяло»', opts: [
        { txt: 'sábana',  em: '📜' },
        { txt: 'almohada',em: '🛌' },
        { txt: 'manta',   em: '🧣' },
        { txt: 'cama',    em: '🛏️' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['cama',         'кровать'],
        ['almohada',     'подушка'],
        ['manta',        'одеяло'],
        ['sábana',       'простыня'],
      ]},
      { t: 'match', swap: true, pairs: [
        ['dormirse',    'засыпать'],
        ['despertarse', 'просыпаться'],
        ['descansar',   'отдыхать'],
        ['soñar',       'видеть сон'],
      ]},
      // Reuse «me acuesto a las diez» from L54
      { t: 'translate', from: 'Я хочу спать', tiles: ['tengo', 'sueño', 'quiero', 'dormir', 'comer'], answer: ['tengo', 'sueño'], answers: [['tengo', 'sueño'], ['quiero', 'dormir']] },
      { t: 'fill', sentence: ['Por la noche', null, 'en mi cama.'], target: 'duermo', opts: ['duermo', 'corro', 'leo'], hint: 'Ночью я сплю в своей кровати' },
    ],
  },

  // ── 104. Ejercicio y forma ────────────────────────────
  {
    id: 'l104', name: 'Ejercicio', emoji: '🏋️', desc: 'Gimnasio y fitness',
    exercises: [
      { t: 'pick', q: '«Спортзал»', opts: [
        { txt: 'gimnasio',   em: '🏋️' },
        { txt: 'parque',     em: '🌳' },
        { txt: 'piscina',    em: '🏊' },
        { txt: 'estadio',    em: '🏟️' },
      ], correct: 0 },
      { t: 'pick', q: '«Сильный»', opts: [
        { txt: 'débil',  em: '🥱' },
        { txt: 'fuerte', em: '💪' },
        { txt: 'rápido', em: '⚡' },
        { txt: 'lento',  em: '🐢' },
      ], correct: 1 },
      { t: 'pick', q: '«Мускул»', opts: [
        { txt: 'hueso',   em: '🦴' },
        { txt: 'sangre',  em: '🩸' },
        { txt: 'músculo', em: '💪' },
        { txt: 'piel',    em: '✋' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['gimnasio',  'спортзал'],
        ['músculo',   'мускул'],
        ['fuerte',    'сильный'],
        ['débil',     'слабый'],
      ]},
      { t: 'match', swap: true, pairs: [
        ['entrenar',   'тренироваться'],
        ['levantar',   'поднимать'],
        ['estirarse',  'растягиваться'],
        ['sudar',      'потеть'],
      ]},
      // Reuse correr/saltar/nadar from L32
      { t: 'translate', from: 'Я бегаю в парке', tiles: ['corro', 'en', 'el', 'parque', 'gimnasio'], answer: ['corro', 'en', 'el', 'parque'] },
      { t: 'fill', sentence: ['Voy al', null, 'tres veces por semana.'], target: 'gimnasio', opts: ['gimnasio', 'cama', 'cielo'], hint: 'Я хожу в спортзал три раза в неделю' },
    ],
  },

  // ── 105. Repaso 16 (101-104) ──────────────────────────
  {
    id: 'l105', name: 'Repaso 16', emoji: '🔁', desc: 'Repasa lecciones 101-104',
    exercises: [
      // From L101
      { t: 'pick', q: '«Сердце»', opts: [
        { txt: 'pulmón',   em: '🫁' },
        { txt: 'corazón',  em: '❤️' },
        { txt: 'estómago', em: '🫃' },
        { txt: 'cerebro',  em: '🧠' },
      ], correct: 1 },
      // From L102
      { t: 'pick', q: '«Помнить»', opts: [
        { txt: 'olvidar',  em: '🤷' },
        { txt: 'pensar',   em: '🤔' },
        { txt: 'recordar', em: '🧠' },
        { txt: 'soñar',    em: '💭' },
      ], correct: 2 },
      // From L104
      { t: 'pick', q: '«Сильный»', opts: [
        { txt: 'fuerte', em: '💪' },
        { txt: 'débil',  em: '🥱' },
        { txt: 'lento',  em: '🐢' },
        { txt: 'rápido', em: '⚡' },
      ], correct: 0 },
      // Mix L101 + L103
      { t: 'match', pairs: [
        ['corazón',  'сердце'],
        ['cerebro',  'мозг'],
        ['cama',     'кровать'],
        ['almohada', 'подушка'],
      ]},
      // Mix L102 + L104
      { t: 'match', pairs: [
        ['pensar',   'думать'],
        ['recordar', 'помнить'],
        ['gimnasio', 'спортзал'],
        ['músculo',  'мускул'],
      ]},
      // From L102
      { t: 'translate', from: 'Я не помню', tiles: ['no', 'recuerdo', 'olvido', 'me'], answer: ['no', 'recuerdo'] },
      // From L103
      { t: 'fill', sentence: ['Por la noche', null, 'en mi cama.'], target: 'duermo', opts: ['duermo', 'corro', 'leo'], hint: 'Ночью я сплю в кровати' },
    ],
  },

  // ════════════════════════════════════════════════════════
  // BLOCK B (L106-L110): Grammar polish
  // ════════════════════════════════════════════════════════

  // ── 106. Imperativo ───────────────────────────────────
  {
    id: 'l106', name: 'Imperativo', emoji: '📢', desc: 'Mandatos: ¡come!, ¡ven!',
    hearts: 4,
    exercises: [
      { t: 'pick', q: '«Ешь!»', opts: [
        { txt: '¡come!',  em: '🍽️' },
        { txt: '¡bebe!',  em: '🥤' },
        { txt: '¡habla!', em: '💬' },
        { txt: '¡mira!',  em: '👀' },
      ], correct: 0 },
      { t: 'pick', q: '«Иди!»', opts: [
        { txt: '¡ven!', em: '⬅️' },
        { txt: '¡ve!',  em: '🚶' },
        { txt: '¡di!',  em: '💬' },
        { txt: '¡haz!', em: '🔨' },
      ], correct: 1 },
      { t: 'pick', q: '«Приходи!»', opts: [
        { txt: '¡ve!',     em: '🚶' },
        { txt: '¡mira!',   em: '👀' },
        { txt: '¡ven!',    em: '⬅️' },
        { txt: '¡corre!',  em: '🏃' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['¡come!',  'ешь!'],
        ['¡bebe!',  'пей!'],
        ['¡habla!', 'говори!'],
        ['¡mira!',  'смотри!'],
      ]},
      { t: 'match', pairs: [
        ['¡ven!',     'приходи!'],
        ['¡escucha!', 'слушай!'],
        ['¡espera!',  'жди!'],
        ['¡ayúdame!', 'помоги мне!'],
      ]},
      // Reuse «agua» from L42
      { t: 'translate', from: 'Пей воду!', tiles: ['bebe', 'agua', 'come', 'pan'], answer: ['bebe', 'agua'] },
      // Hard pick — negative imperative uses subjunctive form, not -es ending of indicative.
      { t: 'pick', q: '«Не ешь это!»', opts: [
        { txt: '¡no comas eso!',  em: '✅' },
        { txt: '¡no comes eso!',  em: '❌' },
        { txt: '¡no come eso!',   em: '❌' },
        { txt: '¡no comer eso!',  em: '❌' },
      ], correct: 0 },
      { t: 'fill', sentence: ['¡', null, 'la puerta, por favor!'], target: 'abre', opts: ['abre', 'cierra', 'mira'], hint: 'Открой дверь, пожалуйста!' },
      { t: 'fill', sentence: ['¡No', null, 'eso!'], target: 'hagas', opts: ['hagas', 'haces', 'hago'], hint: 'Не делай этого! (отриц. imperativo)' },
      { t: 'typed', from: 'Помоги мне!', answer: '¡ayúdame!', answers: ['¡ayúdame!', 'ayúdame', 'ayudame'], hint: 'ayudar + me' },
    ],
  },

  // ── 107. Adjetivos II ─────────────────────────────────
  {
    id: 'l107', name: 'Adjetivos II', emoji: '🎨', desc: 'Rápido, lento, fácil…',
    exercises: [
      { t: 'pick', q: '«Быстрый»', opts: [
        { txt: 'rápido', em: '⚡' },
        { txt: 'lento',  em: '🐢' },
        { txt: 'fácil',  em: '👍' },
        { txt: 'difícil',em: '🤯' },
      ], correct: 0 },
      { t: 'pick', q: '«Лёгкий (простой)»', opts: [
        { txt: 'difícil', em: '🤯' },
        { txt: 'fácil',   em: '👍' },
        { txt: 'lento',   em: '🐢' },
        { txt: 'fuerte',  em: '💪' },
      ], correct: 1 },
      { t: 'pick', q: '«Важный»', opts: [
        { txt: 'libre',     em: '🕊️' },
        { txt: 'ocupado',   em: '⏳' },
        { txt: 'importante',em: '⭐' },
        { txt: 'aburrido',  em: '😐' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['rápido',  'быстрый'],
        ['lento',   'медленный'],
        ['fácil',   'лёгкий'],
        ['difícil', 'трудный'],
      ]},
      { t: 'match', pairs: [
        ['libre',      'свободный'],
        ['ocupado',    'занятый'],
        ['importante', 'важный'],
        ['interesante','интересный'],
      ]},
      // Reuse «coche» from L26
      { t: 'translate', from: 'Быстрая машина', tiles: ['un', 'coche', 'rápido', 'lento'], answer: ['un', 'coche', 'rápido'] },
      { t: 'fill', sentence: ['Este libro es muy', null, '.'], target: 'interesante', opts: ['interesante', 'lunes', 'pan'], hint: 'Эта книга очень интересная' },
    ],
  },

  // ── 108. Adverbios II ─────────────────────────────────
  // Builds on L69 (siempre, nunca) and L1 (bien, mal)
  {
    id: 'l108', name: 'Adverbios II', emoji: '🎚️', desc: 'Bien, mal, muy, mucho…',
    exercises: [
      { t: 'pick', q: '«Очень»', opts: [
        { txt: 'muy',    em: '❗' },
        { txt: 'poco',   em: '🤏' },
        { txt: 'mucho',  em: '💯' },
        { txt: 'tanto',  em: '🟰' },
      ], correct: 0 },
      { t: 'pick', q: '«Много»', opts: [
        { txt: 'poco',   em: '🤏' },
        { txt: 'mucho',  em: '💯' },
        { txt: 'casi',   em: '⏳' },
        { txt: 'apenas', em: '🪶' },
      ], correct: 1 },
      { t: 'pick', q: '«Быстро»', opts: [
        { txt: 'bien',          em: '👍' },
        { txt: 'mal',           em: '👎' },
        { txt: 'rápidamente',   em: '⚡' },
        { txt: 'lentamente',    em: '🐢' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['muy',     'очень'],
        ['mucho',   'много'],
        ['poco',    'мало'],
        ['demasiado','слишком'],
      ]},
      { t: 'match', pairs: [
        ['rápidamente', 'быстро'],
        ['lentamente',  'медленно'],
        ['fácilmente',  'легко'],
        ['claramente',  'ясно'],
      ]},
      // Reuse «bien» / «mal» from L1
      { t: 'translate', from: 'Я очень хорошо', tiles: ['estoy', 'muy', 'bien', 'mal'], answer: ['estoy', 'muy', 'bien'] },
      // Hard pick — "muy mucho" is a common L1-RU error.
      { t: 'pick', q: '«У меня очень много друзей»', opts: [
        { txt: 'tengo muchos amigos',     em: '✅' },
        { txt: 'tengo muy muchos amigos', em: '❌' },
        { txt: 'tengo muy amigos',        em: '❌' },
        { txt: 'tengo mucho amigos',      em: '❌' },
      ], correct: 0 },
      { t: 'fill', sentence: ['Hablas español', null, '.'], target: 'bien', opts: ['bien', 'mucho', 'muy'], hint: 'Ты говоришь по-испански хорошо' },
    ],
  },

  // ── 109. Conjunciones ─────────────────────────────────
  {
    id: 'l109', name: 'Conjunciones', emoji: '🔗', desc: 'Pero, porque, aunque…',
    hearts: 4,
    exercises: [
      { t: 'pick', q: '«Но»', opts: [
        { txt: 'pero',    em: '↔️' },
        { txt: 'porque',  em: '❓' },
        { txt: 'aunque',  em: '🤷' },
        { txt: 'y',       em: '➕' },
      ], correct: 0 },
      { t: 'pick', q: '«Потому что»', opts: [
        { txt: 'aunque', em: '🤷' },
        { txt: 'porque', em: '❓' },
        { txt: 'pero',   em: '↔️' },
        { txt: 'si',     em: '🔀' },
      ], correct: 1 },
      { t: 'pick', q: '«Хотя»', opts: [
        { txt: 'porque',  em: '❓' },
        { txt: 'pero',    em: '↔️' },
        { txt: 'aunque',  em: '🤷' },
        { txt: 'también', em: '➕' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['y',      'и'],
        ['o',      'или'],
        ['pero',   'но'],
        ['porque', 'потому что'],
      ]},
      { t: 'match', pairs: [
        ['aunque',       'хотя'],
        ['también',      'тоже'],
        ['además',       'кроме того'],
        ['sin embargo',  'однако'],
      ]},
      // Reuse food + verbs
      { t: 'translate', from: 'Я хочу пить, но не голоден', tiles: ['tengo', 'sed', 'pero', 'no', 'hambre'], answer: ['tengo', 'sed', 'pero', 'no', 'hambre'] },
      { t: 'fill', sentence: ['No voy', null, 'estoy cansado.'], target: 'porque', opts: ['porque', 'aunque', 'pero'], hint: 'Я не иду, потому что устал' },
      // Hard pick — "y" becomes "e" before /i/ sound (igual → e igual).
      { t: 'pick', q: '«Отец и сын» — как правильно?', opts: [
        { txt: 'padre e hijo',  em: '✅' },
        { txt: 'padre y hijo',  em: '⚠️' },
        { txt: 'padre o hijo',  em: '❌' },
        { txt: 'padre pero hijo',em: '❌' },
      ], correct: 0 },
      { t: 'fill', sentence: ['Es caro', null, 'lo compro.'], target: 'pero', opts: ['pero', 'porque', 'y'], hint: 'Это дорого, но я это куплю' },
      { t: 'typed', from: 'Я устал, но счастлив', answer: 'estoy cansado pero feliz', answers: ['estoy cansado pero feliz', 'estoy cansada pero feliz'], hint: 'pero = но' },
    ],
  },

  // ── 110. Repaso 17 (106-109) ──────────────────────────
  {
    id: 'l110', name: 'Repaso 17', emoji: '🔁', desc: 'Repasa lecciones 106-109',
    exercises: [
      // From L106
      { t: 'pick', q: '«Ешь!»', opts: [
        { txt: '¡come!',  em: '🍽️' },
        { txt: '¡bebe!',  em: '🥤' },
        { txt: '¡habla!', em: '💬' },
        { txt: '¡mira!',  em: '👀' },
      ], correct: 0 },
      // From L107
      { t: 'pick', q: '«Быстрый»', opts: [
        { txt: 'lento',  em: '🐢' },
        { txt: 'fácil',  em: '👍' },
        { txt: 'rápido', em: '⚡' },
        { txt: 'difícil',em: '🤯' },
      ], correct: 2 },
      // From L109
      { t: 'pick', q: '«Но»', opts: [
        { txt: 'pero',    em: '↔️' },
        { txt: 'porque',  em: '❓' },
        { txt: 'aunque',  em: '🤷' },
        { txt: 'y',       em: '➕' },
      ], correct: 0 },
      // Mix L106 + L107
      { t: 'match', pairs: [
        ['¡ven!',   'приходи!'],
        ['¡mira!',  'смотри!'],
        ['rápido',  'быстрый'],
        ['fácil',   'лёгкий'],
      ]},
      // Mix L108 + L109
      { t: 'match', pairs: [
        ['muy',     'очень'],
        ['mucho',   'много'],
        ['porque',  'потому что'],
        ['aunque',  'хотя'],
      ]},
      // From L109
      { t: 'translate', from: 'Я хочу пить, но не голоден', tiles: ['tengo', 'sed', 'pero', 'no', 'hambre'], answer: ['tengo', 'sed', 'pero', 'no', 'hambre'] },
      // From L108
      { t: 'fill', sentence: ['Hablas español', null, '.'], target: 'bien', opts: ['bien', 'mucho', 'muy'], hint: 'Ты говоришь хорошо' },
    ],
  },

  // ════════════════════════════════════════════════════════
  // BLOCK C (L111-L115): Family & life events
  // ════════════════════════════════════════════════════════

  // ── 111. Familia II ───────────────────────────────────
  // Extended family — builds on L3
  {
    id: 'l111', name: 'Familia II', emoji: '👨‍👩‍👧‍👦', desc: 'Tíos, primos, sobrinos',
    exercises: [
      { t: 'pick', q: '«Дядя»', opts: [
        { txt: 'tío',     em: '👨' },
        { txt: 'tía',     em: '👩' },
        { txt: 'primo',   em: '👦' },
        { txt: 'sobrino', em: '🧒' },
      ], correct: 0 },
      { t: 'pick', q: '«Двоюродная сестра»', opts: [
        { txt: 'hermana', em: '👧' },
        { txt: 'prima',   em: '👧' },
        { txt: 'sobrina', em: '🧒' },
        { txt: 'abuela',  em: '👵' },
      ], correct: 1 },
      { t: 'pick', q: '«Племянник»', opts: [
        { txt: 'tío',     em: '👨' },
        { txt: 'primo',   em: '👦' },
        { txt: 'sobrino', em: '🧒' },
        { txt: 'nieto',   em: '👶' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['tío',     'дядя'],
        ['tía',     'тётя'],
        ['primo',   'двоюр. брат'],
        ['prima',   'двоюр. сестра'],
      ]},
      { t: 'match', pairs: [
        ['sobrino', 'племянник'],
        ['sobrina', 'племянница'],
        ['nieto',   'внук'],
        ['nieta',   'внучка'],
      ]},
      // Reuse «mi» from L41
      { t: 'translate', from: 'Мой дядя', tiles: ['mi', 'tío', 'tía', 'tu'], answer: ['mi', 'tío'] },
      { t: 'fill', sentence: ['Mi', null, 'tiene tres hijos.'], target: 'tía', opts: ['tía', 'sobrino', 'casa'], hint: 'У моей тёти трое детей' },
    ],
  },

  // ── 112. Bodas y fiestas ──────────────────────────────
  {
    id: 'l112', name: 'Celebraciones', emoji: '🎉', desc: 'Bodas y fiestas',
    exercises: [
      { t: 'pick', q: '«Свадьба»', opts: [
        { txt: 'boda',      em: '💒' },
        { txt: 'fiesta',    em: '🎉' },
        { txt: 'regalo',    em: '🎁' },
        { txt: 'invitado',  em: '🙋' },
      ], correct: 0 },
      { t: 'pick', q: '«Подарок»', opts: [
        { txt: 'fiesta',  em: '🎉' },
        { txt: 'regalo',  em: '🎁' },
        { txt: 'pastel',  em: '🎂' },
        { txt: 'baile',   em: '💃' },
      ], correct: 1 },
      { t: 'pick', q: '«Гость»', opts: [
        { txt: 'novio',    em: '🤵' },
        { txt: 'novia',    em: '👰' },
        { txt: 'invitado', em: '🙋' },
        { txt: 'amigo',    em: '🙂' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['boda',     'свадьба'],
        ['novio',    'жених'],
        ['novia',    'невеста'],
        ['anillo',   'кольцо'],
      ]},
      { t: 'match', pairs: [
        ['fiesta',   'вечеринка'],
        ['regalo',   'подарок'],
        ['invitado', 'гость'],
        ['pastel',   'торт'],
      ]},
      // Reuse «cumpleaños» / «mayo» pattern from L15
      { t: 'translate', from: 'С днём рождения!', tiles: ['feliz', 'cumpleaños', 'navidad', 'año'], answer: ['feliz', 'cumpleaños'] },
      { t: 'fill', sentence: ['La', null, 'es en junio.'], target: 'boda', opts: ['boda', 'lunes', 'mar'], hint: 'Свадьба в июне' },
    ],
  },

  // ── 113. Bebés y crianza ──────────────────────────────
  {
    id: 'l113', name: 'Bebés', emoji: '👶', desc: 'Niños y crianza',
    exercises: [
      { t: 'pick', q: '«Малыш»', opts: [
        { txt: 'bebé',    em: '👶' },
        { txt: 'niño',    em: '🧒' },
        { txt: 'joven',   em: '🧑' },
        { txt: 'adulto',  em: '👨' },
      ], correct: 0 },
      { t: 'pick', q: '«Игрушка»', opts: [
        { txt: 'cuna',    em: '🛏️' },
        { txt: 'juguete', em: '🧸' },
        { txt: 'biberón', em: '🍼' },
        { txt: 'pañal',   em: '🩲' },
      ], correct: 1 },
      { t: 'pick', q: '«Плакать»', opts: [
        { txt: 'reír',  em: '😄' },
        { txt: 'jugar', em: '🎮' },
        { txt: 'llorar',em: '😭' },
        { txt: 'dormir',em: '😴' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['bebé',    'малыш'],
        ['cuna',    'колыбель'],
        ['biberón', 'бутылочка'],
        ['pañal',   'подгузник'],
      ]},
      { t: 'match', swap: true, pairs: [
        ['llorar', 'плакать'],
        ['reír',   'смеяться'],
        ['jugar',  'играть'],
        ['gatear', 'ползать'],
      ]},
      // Reuse «juguete» / «jugar» from L38
      { t: 'translate', from: 'Малыш играет', tiles: ['el', 'bebé', 'juega', 'llora'], answer: ['el', 'bebé', 'juega'] },
      { t: 'fill', sentence: ['El bebé', null, 'porque tiene hambre.'], target: 'llora', opts: ['llora', 'come', 'duerme'], hint: 'Малыш плачет, потому что голоден' },
    ],
  },

  // ── 114. Edades y etapas ──────────────────────────────
  {
    id: 'l114', name: 'Edades', emoji: '🌱', desc: 'Etapas de la vida',
    exercises: [
      { t: 'pick', q: '«Молодой»', opts: [
        { txt: 'joven',    em: '🧑' },
        { txt: 'viejo',    em: '👴' },
        { txt: 'niño',     em: '🧒' },
        { txt: 'adulto',   em: '👨' },
      ], correct: 0 },
      { t: 'pick', q: '«Подросток»', opts: [
        { txt: 'bebé',         em: '👶' },
        { txt: 'adolescente',  em: '🧑' },
        { txt: 'adulto',       em: '👨' },
        { txt: 'anciano',      em: '👴' },
      ], correct: 1 },
      { t: 'pick', q: '«Старик»', opts: [
        { txt: 'adulto',  em: '👨' },
        { txt: 'joven',   em: '🧑' },
        { txt: 'anciano', em: '👴' },
        { txt: 'niño',    em: '🧒' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['bebé',        'малыш'],
        ['niño',        'ребёнок'],
        ['adolescente', 'подросток'],
        ['adulto',      'взрослый'],
      ]},
      { t: 'match', pairs: [
        ['joven',     'молодой'],
        ['viejo',     'старый'],
        ['anciano',   'старик'],
        ['edad',      'возраст'],
      ]},
      // Reuse «tengo … años» from L4 + L47
      { t: 'translate', from: 'Моей бабушке семьдесят лет', tiles: ['mi', 'abuela', 'tiene', 'setenta', 'años', 'siete'], answer: ['mi', 'abuela', 'tiene', 'setenta', 'años'] },
      { t: 'fill', sentence: ['Soy todavía', null, '.'], target: 'joven', opts: ['joven', 'azul', 'mesa'], hint: 'Я ещё молод' },
    ],
  },

  // ── 115. Repaso 18 (111-114) ──────────────────────────
  {
    id: 'l115', name: 'Repaso 18', emoji: '🔁', desc: 'Repasa lecciones 111-114',
    exercises: [
      // From L111
      { t: 'pick', q: '«Дядя»', opts: [
        { txt: 'tío',     em: '👨' },
        { txt: 'tía',     em: '👩' },
        { txt: 'primo',   em: '👦' },
        { txt: 'sobrino', em: '🧒' },
      ], correct: 0 },
      // From L112
      { t: 'pick', q: '«Подарок»', opts: [
        { txt: 'fiesta',  em: '🎉' },
        { txt: 'regalo',  em: '🎁' },
        { txt: 'invitado',em: '🙋' },
        { txt: 'baile',   em: '💃' },
      ], correct: 1 },
      // From L114
      { t: 'pick', q: '«Старик»', opts: [
        { txt: 'adulto',  em: '👨' },
        { txt: 'joven',   em: '🧑' },
        { txt: 'anciano', em: '👴' },
        { txt: 'niño',    em: '🧒' },
      ], correct: 2 },
      // Mix L111 + L113
      { t: 'match', pairs: [
        ['tío',     'дядя'],
        ['sobrino', 'племянник'],
        ['bebé',    'малыш'],
        ['juguete', 'игрушка'],
      ]},
      // Mix L112 + L114
      { t: 'match', pairs: [
        ['boda',     'свадьба'],
        ['regalo',   'подарок'],
        ['joven',    'молодой'],
        ['viejo',    'старый'],
      ]},
      // From L114
      { t: 'translate', from: 'Моей бабушке семьдесят лет', tiles: ['mi', 'abuela', 'tiene', 'setenta', 'años'], answer: ['mi', 'abuela', 'tiene', 'setenta', 'años'] },
      // From L113
      { t: 'fill', sentence: ['El bebé', null, 'porque tiene hambre.'], target: 'llora', opts: ['llora', 'come', 'duerme'], hint: 'Малыш плачет' },
    ],
  },

  // ════════════════════════════════════════════════════════
  // BLOCK D (L116-L120): Advanced pronouns & perfect tense
  // ════════════════════════════════════════════════════════

  // ── 116. Pretérito perfecto ───────────────────────────
  // Builds on L39 (pasado) and L64 (imperfecto)
  {
    id: 'l116', name: 'Pretérito perfecto', emoji: '✅', desc: 'He comido, has visto…',
    hearts: 4,
    exercises: [
      { t: 'pick', q: '«Я (только что) ел»', opts: [
        { txt: 'he comido',   em: '✅' },
        { txt: 'comí',        em: '⏪' },
        { txt: 'comía',       em: '⏳' },
        { txt: 'voy a comer', em: '⏩' },
      ], correct: 0 },
      { t: 'pick', q: '«Ты видел?»', opts: [
        { txt: '¿viste?',      em: '⏪' },
        { txt: '¿has visto?',  em: '✅' },
        { txt: '¿veías?',      em: '⏳' },
        { txt: '¿ves?',        em: '⏺️' },
      ], correct: 1 },
      { t: 'pick', q: '«Мы пошли»', opts: [
        { txt: 'fuimos',      em: '⏪' },
        { txt: 'íbamos',      em: '⏳' },
        { txt: 'hemos ido',   em: '✅' },
        { txt: 'vamos',       em: '⏺️' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['he',     'я (вспом.)'],
        ['has',    'ты (вспом.)'],
        ['ha',     'он/она (вспом.)'],
        ['hemos',  'мы (вспом.)'],
      ]},
      { t: 'match', pairs: [
        ['comido',   'ел/съел'],
        ['bebido',   'пил/выпил'],
        ['visto',    'видел'],
        ['hecho',    'сделал'],
      ]},
      // Reuse «hoy» from L8
      { t: 'translate', from: 'Сегодня я не ел', tiles: ['hoy', 'no', 'he', 'comido', 'comí'], answer: ['hoy', 'no', 'he', 'comido'] },
      { t: 'fill', sentence: ['Esta mañana', null, 'bebido café.'], target: 'he', opts: ['he', 'has', 'ha'], hint: 'Этим утром я пил кофе' },
      // Hard pick — "ido" is irregular participle of ir.
      { t: 'pick', q: '«Они пошли в кино»', opts: [
        { txt: 'han ido al cine',   em: '✅' },
        { txt: 'han id al cine',    em: '❌' },
        { txt: 'han voy al cine',   em: '❌' },
        { txt: 'han iendo al cine', em: '❌' },
      ], correct: 0 },
      { t: 'fill', sentence: ['¿', null, 'visto mi llave?'], target: 'has', opts: ['has', 'he', 'ha'], hint: 'Ты видел мой ключ?' },
      { t: 'typed', from: 'Я никогда не был в Испании', answer: 'nunca he estado en españa', answers: ['nunca he estado en españa', 'no he estado nunca en españa'], hint: 'estar → estado' },
    ],
  },

  // ── 117. Pronombres OD ────────────────────────────────
  {
    id: 'l117', name: 'Pronombres OD', emoji: '🎯', desc: 'Lo, la, los, las',
    hearts: 4,
    exercises: [
      { t: 'pick', q: '«Я его вижу» (el libro)', opts: [
        { txt: 'lo veo',  em: '👀' },
        { txt: 'la veo',  em: '👀' },
        { txt: 'le veo',  em: '👀' },
        { txt: 'veo lo',  em: '❌' },
      ], correct: 0 },
      { t: 'pick', q: '«Я её покупаю» (la casa)', opts: [
        { txt: 'lo compro', em: '🛒' },
        { txt: 'la compro', em: '🛒' },
        { txt: 'les compro',em: '❌' },
        { txt: 'compro la', em: '❌' },
      ], correct: 1 },
      { t: 'pick', q: '«Я их (м.р., мн.ч.) знаю»', opts: [
        { txt: 'las conozco', em: '👥' },
        { txt: 'la conozco',  em: '👤' },
        { txt: 'los conozco', em: '👥' },
        { txt: 'le conozco',  em: '👤' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['lo',  'его (м.р.)'],
        ['la',  'её (ж.р.)'],
        ['los', 'их (м.р.)'],
        ['las', 'их (ж.р.)'],
      ]},
      { t: 'match', pairs: [
        ['te veo',     'я тебя вижу'],
        ['me ves',     'ты меня видишь'],
        ['nos vemos',  'мы видимся'],
        ['os veo',     'я вас вижу (Spain)'],
      ]},
      // Reuse «¿lo ves?» context
      { t: 'translate', from: 'Я её знаю', tiles: ['la', 'lo', 'conozco', 'sé'], answer: ['la', 'conozco'] },
      { t: 'fill', sentence: ['¿Tienes el libro? Sí,', null, 'tengo.'], target: 'lo', opts: ['lo', 'la', 'le'], hint: 'Книга = м.р. → lo' },
      // Hard pick — OD pronoun goes BEFORE conjugated verb (no postposing).
      { t: 'pick', q: '«Я её вижу» — порядок слов?', opts: [
        { txt: 'la veo',   em: '✅' },
        { txt: 'veo la',   em: '❌' },
        { txt: 'la yo veo',em: '❌' },
        { txt: 'yo la la veo', em: '❌' },
      ], correct: 0 },
      { t: 'fill', sentence: ['Las flores son bonitas, las', null, '.'], target: 'compro', opts: ['compro', 'compra', 'compran'], hint: 'Цветы красивые, я их покупаю' },
      { t: 'typed', from: 'Я его не вижу', answer: 'no lo veo', answers: ['no lo veo', 'yo no lo veo'], hint: 'lo стоит перед глаголом' },
    ],
  },

  // ── 118. Pronombres OI ────────────────────────────────
  {
    id: 'l118', name: 'Pronombres OI', emoji: '➡️', desc: 'Me, te, le, nos, les',
    hearts: 4,
    exercises: [
      { t: 'pick', q: '«Я ему пишу»', opts: [
        { txt: 'le escribo',  em: '✉️' },
        { txt: 'lo escribo',  em: '❌' },
        { txt: 'me escribo',  em: '❌' },
        { txt: 'escribo le',  em: '❌' },
      ], correct: 0 },
      { t: 'pick', q: '«Я тебе говорю»', opts: [
        { txt: 'le digo',  em: '💬' },
        { txt: 'te digo',  em: '💬' },
        { txt: 'me digo',  em: '💬' },
        { txt: 'os digo',  em: '💬' },
      ], correct: 1 },
      { t: 'pick', q: '«Я им даю»', opts: [
        { txt: 'le doy',  em: '🎁' },
        { txt: 'lo doy',  em: '🎁' },
        { txt: 'les doy', em: '🎁' },
        { txt: 'me doy',  em: '❌' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['me',  'мне'],
        ['te',  'тебе'],
        ['le',  'ему/ей'],
        ['les', 'им'],
      ]},
      { t: 'match', pairs: [
        ['me das',     'ты мне даёшь'],
        ['te doy',     'я тебе даю'],
        ['le digo',    'я ему говорю'],
        ['nos hablan', 'они нам говорят'],
      ]},
      // Reuse «¿me oyes?» pattern
      { t: 'translate', from: 'Я ему говорю правду', tiles: ['le', 'digo', 'la', 'verdad', 'lo'], answer: ['le', 'digo', 'la', 'verdad'] },
      { t: 'fill', sentence: ['Mi madre', null, 'da dinero.'], target: 'me', opts: ['me', 'te', 'le'], hint: 'Моя мама мне даёт деньги' },
      // Hard pick — gustar always uses OI, not subject pronoun.
      { t: 'pick', q: '«Ему нравится футбол»', opts: [
        { txt: 'le gusta el fútbol',  em: '✅' },
        { txt: 'lo gusta el fútbol',  em: '❌' },
        { txt: 'él gusta el fútbol',  em: '❌' },
        { txt: 'se gusta el fútbol',  em: '❌' },
      ], correct: 0 },
      { t: 'fill', sentence: ['¿', null, 'gusta el café? Sí, mucho.'], target: 'te', opts: ['te', 'le', 'me'], hint: 'Тебе нравится кофе?' },
      { t: 'typed', from: 'Я им пишу письмо', answer: 'les escribo una carta', answers: ['les escribo una carta', 'yo les escribo una carta'], hint: 'OI: les' },
    ],
  },

  // ── 119. Pronombres juntos ────────────────────────────
  {
    id: 'l119', name: 'Pronombres juntos', emoji: '🔗', desc: 'Me lo, te la, se lo',
    hearts: 4,
    exercises: [
      { t: 'pick', q: '«Я тебе это даю» (порядок?)', opts: [
        { txt: 'te lo doy',  em: '✅' },
        { txt: 'lo te doy',  em: '❌' },
        { txt: 'te doy lo',  em: '❌' },
        { txt: 'doy te lo',  em: '❌' },
      ], correct: 0 },
      { t: 'pick', q: '«Я ему это говорю»', opts: [
        { txt: 'le lo digo',  em: '❌' },
        { txt: 'se lo digo',  em: '✅' },
        { txt: 'lo le digo',  em: '❌' },
        { txt: 'lo se digo',  em: '❌' },
      ], correct: 1 },
      { t: 'pick', q: '«Я ей её (карту) показываю»', opts: [
        { txt: 'le la muestro',  em: '❌' },
        { txt: 'la le muestro',  em: '❌' },
        { txt: 'se la muestro',  em: '✅' },
        { txt: 'muestro le la',  em: '❌' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['me lo',  'мне это (м.р.)'],
        ['te la',  'тебе это (ж.р.)'],
        ['se lo',  'ему/ей это (м.р.)'],
        ['nos las','нам их (ж.р.)'],
      ]},
      // Hard match — order is always OI before OD.
      { t: 'match', pairs: [
        ['me lo das',    'ты мне это даёшь'],
        ['te la doy',    'я тебе её даю'],
        ['se lo digo',   'я ему/ей это говорю'],
        ['nos lo dicen', 'нам это говорят'],
      ]},
      // Hard translate — reflect le+lo → se+lo transformation
      { t: 'translate', from: 'Я ей это даю', tiles: ['se', 'le', 'lo', 'la', 'doy'], answer: ['se', 'lo', 'doy'] },
      { t: 'fill', sentence: ['Mi madre', null, 'lo regaló.'], target: 'me', opts: ['me', 'te', 'se'], hint: 'Моя мама мне это подарила → me lo' },
      // Hard pick — "le lo" never appears; always becomes "se lo".
      { t: 'pick', q: '«Я ему её рассказываю» — как правильно?', opts: [
        { txt: 'se la cuento',  em: '✅' },
        { txt: 'le la cuento',  em: '❌' },
        { txt: 'la le cuento',  em: '❌' },
        { txt: 'le cuento la',  em: '❌' },
      ], correct: 0 },
      { t: 'fill', sentence: ['Tu coche está sucio,', null, 'lo lavo.'], target: 'te', opts: ['te', 'me', 'se'], hint: 'Твоя машина грязная, я её тебе помою → te lo' },
      { t: 'typed', from: 'Я тебе её дам', answer: 'te la doy', answers: ['te la doy', 'te la voy a dar', 'yo te la doy'], hint: 'OI (te) + OD (la) + verbo' },
    ],
  },

  // ── 120. Repaso 19 (116-119) ──────────────────────────
  {
    id: 'l120', name: 'Repaso 19', emoji: '🔁', desc: 'Repasa lecciones 116-119',
    exercises: [
      // From L116
      { t: 'pick', q: '«Я (только что) ел»', opts: [
        { txt: 'he comido', em: '✅' },
        { txt: 'comí',      em: '⏪' },
        { txt: 'comía',     em: '⏳' },
        { txt: 'como',      em: '⏺️' },
      ], correct: 0 },
      // From L117
      { t: 'pick', q: '«Я её вижу» (la casa)', opts: [
        { txt: 'lo veo', em: '❌' },
        { txt: 'la veo', em: '👀' },
        { txt: 'le veo', em: '❌' },
        { txt: 'veo la', em: '❌' },
      ], correct: 1 },
      // From L119
      { t: 'pick', q: '«Я ему это говорю»', opts: [
        { txt: 'le lo digo', em: '❌' },
        { txt: 'lo le digo', em: '❌' },
        { txt: 'se lo digo', em: '✅' },
        { txt: 'digo se lo', em: '❌' },
      ], correct: 2 },
      // Mix L116 + L117
      { t: 'match', pairs: [
        ['he comido', 'я ел (только что)'],
        ['hemos ido', 'мы пошли'],
        ['lo',        'его (м.р.)'],
        ['la',        'её (ж.р.)'],
      ]},
      // Mix L118 + L119
      { t: 'match', pairs: [
        ['le',     'ему/ей'],
        ['les',    'им'],
        ['se lo',  'ему/ей это'],
        ['te la',  'тебе её'],
      ]},
      // From L116
      { t: 'translate', from: 'Сегодня я не ел', tiles: ['hoy', 'no', 'he', 'comido'], answer: ['hoy', 'no', 'he', 'comido'] },
      // From L117
      { t: 'fill', sentence: ['¿Tienes el libro? Sí,', null, 'tengo.'], target: 'lo', opts: ['lo', 'la', 'le'], hint: 'Книга = м.р. → lo' },
    ],
  },

  // ════════════════════════════════════════════════════════
  // BLOCK E (L121-L125): Modern life & master review
  // ════════════════════════════════════════════════════════

  // ── 121. Banco y finanzas ─────────────────────────────
  {
    id: 'l121', name: 'Banco', emoji: '🏦', desc: 'Cajero, cuenta, ahorrar',
    exercises: [
      { t: 'pick', q: '«Банк»', opts: [
        { txt: 'banco',   em: '🏦' },
        { txt: 'cajero',  em: '🏧' },
        { txt: 'tarjeta', em: '💳' },
        { txt: 'cuenta',  em: '📋' },
      ], correct: 0 },
      { t: 'pick', q: '«Банкомат»', opts: [
        { txt: 'banco',    em: '🏦' },
        { txt: 'cajero',   em: '🏧' },
        { txt: 'efectivo', em: '💵' },
        { txt: 'cambio',   em: '🔄' },
      ], correct: 1 },
      { t: 'pick', q: '«Сберегать»', opts: [
        { txt: 'gastar',   em: '💸' },
        { txt: 'cobrar',   em: '💰' },
        { txt: 'ahorrar',  em: '🐷' },
        { txt: 'prestar',  em: '🤝' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['banco',     'банк'],
        ['cajero',    'банкомат'],
        ['cuenta',    'счёт'],
        ['tarjeta',   'карта'],
      ]},
      { t: 'match', swap: true, pairs: [
        ['ahorrar',  'сберегать'],
        ['gastar',   'тратить'],
        ['prestar',  'одолжить'],
        ['deber',    'быть должным'],
      ]},
      // Reuse dinero from L48
      { t: 'translate', from: 'Я хочу снять деньги', tiles: ['quiero', 'sacar', 'dinero', 'meter'], answer: ['quiero', 'sacar', 'dinero'] },
      { t: 'fill', sentence: ['Necesito una', null, 'nueva.'], target: 'tarjeta', opts: ['tarjeta', 'casa', 'flor'], hint: 'Мне нужна новая карта' },
    ],
  },

  // ── 122. Coches y conducir ────────────────────────────
  {
    id: 'l122', name: 'Conducir', emoji: '🚗', desc: 'Gasolina, semáforo, multa',
    exercises: [
      { t: 'pick', q: '«Водить»', opts: [
        { txt: 'conducir', em: '🚗' },
        { txt: 'caminar',  em: '🚶' },
        { txt: 'volar',    em: '✈️' },
        { txt: 'nadar',    em: '🏊' },
      ], correct: 0 },
      { t: 'pick', q: '«Бензин»', opts: [
        { txt: 'aceite',   em: '🛢️' },
        { txt: 'gasolina', em: '⛽' },
        { txt: 'agua',     em: '💧' },
        { txt: 'aire',     em: '💨' },
      ], correct: 1 },
      { t: 'pick', q: '«Светофор»', opts: [
        { txt: 'calle',    em: '🛣️' },
        { txt: 'señal',    em: '🚸' },
        { txt: 'semáforo', em: '🚦' },
        { txt: 'esquina',  em: '📐' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['conducir', 'водить'],
        ['gasolina', 'бензин'],
        ['semáforo', 'светофор'],
        ['multa',    'штраф'],
      ]},
      { t: 'match', pairs: [
        ['carnet',   'права'],
        ['rueda',    'колесо'],
        ['volante',  'руль'],
        ['aparcar',  'парковаться'],
      ]},
      // Reuse coche from L26
      { t: 'translate', from: 'Я не умею водить', tiles: ['no', 'sé', 'conducir', 'puedo'], answer: ['no', 'sé', 'conducir'] },
      { t: 'fill', sentence: ['El', null, 'está en rojo.'], target: 'semáforo', opts: ['semáforo', 'banco', 'pan'], hint: 'Светофор красный' },
    ],
  },

  // ── 123. Medio ambiente ───────────────────────────────
  {
    id: 'l123', name: 'Medio ambiente', emoji: '🌍', desc: 'Planeta, reciclar, basura',
    exercises: [
      { t: 'pick', q: '«Планета»', opts: [
        { txt: 'planeta',   em: '🌍' },
        { txt: 'estrella',  em: '⭐' },
        { txt: 'luna',      em: '🌙' },
        { txt: 'sol',       em: '☀️' },
      ], correct: 0 },
      { t: 'pick', q: '«Мусор»', opts: [
        { txt: 'agua',    em: '💧' },
        { txt: 'basura',  em: '🗑️' },
        { txt: 'aire',    em: '💨' },
        { txt: 'tierra',  em: '🌱' },
      ], correct: 1 },
      { t: 'pick', q: '«Перерабатывать»', opts: [
        { txt: 'tirar',     em: '🗑️' },
        { txt: 'comprar',   em: '🛒' },
        { txt: 'reciclar',  em: '♻️' },
        { txt: 'limpiar',   em: '🧹' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['planeta',  'планета'],
        ['Tierra',   'Земля'],
        ['basura',   'мусор'],
        ['reciclar', 'перерабатывать'],
      ]},
      { t: 'match', pairs: [
        ['aire',           'воздух'],
        ['agua',           'вода'],
        ['contaminación',  'загрязнение'],
        ['naturaleza',     'природа'],
      ]},
      // Reuse «mar» / «árbol» from L20
      { t: 'translate', from: 'Мы должны беречь планету', tiles: ['debemos', 'cuidar', 'el', 'planeta', 'comer'], answer: ['debemos', 'cuidar', 'el', 'planeta'] },
      { t: 'fill', sentence: ['Hay que', null, 'el plástico.'], target: 'reciclar', opts: ['reciclar', 'comer', 'beber'], hint: 'Надо перерабатывать пластик' },
    ],
  },

  // ── 124. Tecnología II ────────────────────────────────
  // Builds on L37
  {
    id: 'l124', name: 'Tecnología II', emoji: '📲', desc: 'Apps, redes, descargar',
    exercises: [
      { t: 'pick', q: '«Приложение»', opts: [
        { txt: 'aplicación', em: '📲' },
        { txt: 'pantalla',   em: '🖥️' },
        { txt: 'teclado',    em: '⌨️' },
        { txt: 'ratón',      em: '🖱️' },
      ], correct: 0 },
      { t: 'pick', q: '«Скачать»', opts: [
        { txt: 'subir',     em: '⬆️' },
        { txt: 'descargar', em: '⬇️' },
        { txt: 'borrar',    em: '🗑️' },
        { txt: 'guardar',   em: '💾' },
      ], correct: 1 },
      { t: 'pick', q: '«Социальные сети»', opts: [
        { txt: 'correo',         em: '📧' },
        { txt: 'video',          em: '📹' },
        { txt: 'redes sociales', em: '🌐' },
        { txt: 'archivo',        em: '📁' },
      ], correct: 2 },
      { t: 'match', pairs: [
        ['aplicación',     'приложение'],
        ['descargar',      'скачать'],
        ['subir',          'загружать'],
        ['redes sociales', 'соцсети'],
      ]},
      { t: 'match', pairs: [
        ['enviar',     'отправлять'],
        ['recibir',    'получать'],
        ['compartir',  'делиться'],
        ['comentar',   'комментировать'],
      ]},
      // Reuse mensaje / contraseña from L37
      { t: 'translate', from: 'Я скачиваю приложение', tiles: ['descargo', 'una', 'aplicación', 'subo'], answer: ['descargo', 'una', 'aplicación'] },
      { t: 'fill', sentence: ['Voy a', null, 'una foto en internet.'], target: 'subir', opts: ['subir', 'comer', 'dormir'], hint: 'Я загружу фото в интернет' },
      { t: 'typed', from: 'Я отправляю сообщение', answer: 'envío un mensaje', answers: ['envío un mensaje', 'mando un mensaje', 'yo envío un mensaje'], hint: 'enviar / mandar' },
    ],
  },

  // ── 125. Repaso Maestro II ────────────────────────────
  // Final review — mixes broadly across L101-L124
  {
    id: 'l125', name: 'Repaso Maestro II', emoji: '🎓', desc: 'Repaso final (101-124)',
    hearts: 2,
    exercises: [
      // — Body III (L101)
      { t: 'pick', q: '«Сердце»', opts: [
        { txt: 'corazón', em: '❤️' },
        { txt: 'cerebro', em: '🧠' },
        { txt: 'pulmón',  em: '🫁' },
        { txt: 'hueso',   em: '🦴' },
      ], correct: 0 },
      // — Imperativo (L106)
      { t: 'pick', q: '«Иди!»', opts: [
        { txt: '¡ven!', em: '⬅️' },
        { txt: '¡ve!',  em: '🚶' },
        { txt: '¡di!',  em: '💬' },
        { txt: '¡haz!', em: '🔨' },
      ], correct: 1 },
      // — Familia II (L111)
      { t: 'pick', q: '«Племянник»', opts: [
        { txt: 'tío',     em: '👨' },
        { txt: 'primo',   em: '👦' },
        { txt: 'sobrino', em: '🧒' },
        { txt: 'nieto',   em: '👶' },
      ], correct: 2 },
      // — Pretérito perfecto (L116)
      { t: 'pick', q: '«Я (только что) ел»', opts: [
        { txt: 'he comido', em: '✅' },
        { txt: 'comí',      em: '⏪' },
        { txt: 'comía',     em: '⏳' },
        { txt: 'voy a comer',em: '⏩' },
      ], correct: 0 },
      // — Tecnología II (L124)
      { t: 'pick', q: '«Скачать»', opts: [
        { txt: 'subir',     em: '⬆️' },
        { txt: 'descargar', em: '⬇️' },
        { txt: 'borrar',    em: '🗑️' },
        { txt: 'enviar',    em: '📤' },
      ], correct: 1 },
      // — Mix body + sleep
      { t: 'match', pairs: [
        ['corazón',  'сердце'],
        ['cerebro',  'мозг'],
        ['cama',     'кровать'],
        ['almohada', 'подушка'],
      ]},
      // — Mix grammar (imperativo + adv + conj)
      { t: 'match', pairs: [
        ['¡ven!',  'приходи!'],
        ['rápido', 'быстрый'],
        ['pero',   'но'],
        ['porque', 'потому что'],
      ]},
      // — Mix family + life events
      { t: 'match', pairs: [
        ['tío',     'дядя'],
        ['sobrino', 'племянник'],
        ['boda',    'свадьба'],
        ['regalo',  'подарок'],
      ]},
      // — Mix pronouns (OD + OI + juntos)
      { t: 'match', pairs: [
        ['lo',    'его (м.р.)'],
        ['la',    'её (ж.р.)'],
        ['le',    'ему/ей'],
        ['se lo', 'ему/ей это'],
      ]},
      // — Mix modern life
      { t: 'match', pairs: [
        ['banco',          'банк'],
        ['conducir',       'водить'],
        ['reciclar',       'перерабатывать'],
        ['redes sociales', 'соцсети'],
      ]},
      // — Translation: perfect tense
      { t: 'translate', from: 'Сегодня я не ел', tiles: ['hoy', 'no', 'he', 'comido', 'como'], answer: ['hoy', 'no', 'he', 'comido'] },
      // — Translation: OD + OI together
      { t: 'translate', from: 'Я тебе её даю', tiles: ['te', 'le', 'la', 'lo', 'doy'], answer: ['te', 'la', 'doy'] },
      // — Translation: imperative
      { t: 'translate', from: 'Пей воду!', tiles: ['bebe', 'agua', 'come', 'pan'], answer: ['bebe', 'agua'] },
      // — Fill: environment
      { t: 'fill', sentence: ['Hay que', null, 'el plástico.'], target: 'reciclar', opts: ['reciclar', 'comer', 'dormir'], hint: 'Нужно перерабатывать' },
      // — Fill: imperative
      { t: 'fill', sentence: ['¡', null, 'la puerta!'], target: 'abre', opts: ['abre', 'cierra', 'come'], hint: 'Открой дверь!' },
      // — Typed: perfect tense (production)
      { t: 'typed', from: 'Я никогда не был в Испании', answer: 'nunca he estado en españa', answers: ['nunca he estado en españa', 'no he estado nunca en españa'], hint: 'pretérito perfecto: he estado' },
      // — Typed: OD + OI (mastery)
      { t: 'typed', from: 'Я ему это даю', answer: 'se lo doy', answers: ['se lo doy', 'yo se lo doy'], hint: 'le + lo → se lo' },
    ],
  },

  // ── 126. Voz pasiva ───────────────────────────────────
  {
    id: 'l126', name: 'Voz pasiva', emoji: '🔄', desc: 'La casa fue construida',
    hearts: 4,
    exercises: [
      { t: 'pick', q: '«Дом был построен»', opts: [
        { txt: 'la casa fue construida', em: '🏠' },
        { txt: 'la casa construye',       em: '🔨' },
        { txt: 'la casa es bonita',       em: '✨' },
        { txt: 'la casa está lejos',      em: '🛣️' },
      ], correct: 0 },
      { t: 'pick', q: '«Книга была написана Борхесом»', opts: [
        { txt: 'el libro fue escrito por Borges', em: '📕' },
        { txt: 'el libro escribió a Borges',      em: '✍️' },
        { txt: 'Borges es un libro',              em: '👤' },
        { txt: 'el libro está de Borges',         em: '📚' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['fue escrito',    'был написан'],
        ['fue construida', 'была построена'],
        ['fue vendido',    'был продан'],
        ['fue creado',     'был создан'],
      ]},
      { t: 'match', pairs: [
        ['por',          'кем (агент)'],
        ['ser + part.',  'быть + причастие'],
        ['estar + part.','состояние'],
        ['se vende',     'продаётся'],
      ]},
      { t: 'translate', from: 'Картина была написана', tiles: ['el', 'cuadro', 'fue', 'pintado', 'pinta'], answer: ['el', 'cuadro', 'fue', 'pintado'] },
      { t: 'fill', sentence: ['La carta', null, 'enviada ayer.'], target: 'fue', opts: ['fue', 'es', 'está'], hint: 'была отправлена' },
      { t: 'fill', sentence: ['Aquí', null, 'venden libros.'], target: 'se', opts: ['se', 'son', 'es'], hint: 'Здесь продаются книги' },
      { t: 'typed', from: 'Дом был продан в 2020 году', answer: 'la casa fue vendida en 2020', answers: ['la casa fue vendida en 2020', 'la casa se vendió en 2020'], hint: 'fue / se vendió' },
    ],
  },

  // ── 127. Subjuntivo presente ──────────────────────────
  {
    id: 'l127', name: 'Subjuntivo II', emoji: '🌟', desc: 'Subjuntivo presente avanzado',
    hearts: 4,
    exercises: [
      { t: 'pick', q: '«Возможно, он придёт» (presente subj.)', opts: [
        { txt: 'quizás venga',   em: '✅' },
        { txt: 'quizás viene',   em: '❌' },
        { txt: 'quizás vendrá',  em: '❌' },
        { txt: 'quizás vino',    em: '❌' },
      ], correct: 0 },
      { t: 'pick', q: '«Когда увидишь его...»', opts: [
        { txt: 'cuando lo veas',    em: '✅' },
        { txt: 'cuando lo ves',     em: '❌' },
        { txt: 'cuando lo verás',   em: '❌' },
        { txt: 'cuando lo viste',   em: '❌' },
      ], correct: 0 },
      { t: 'pick', q: '«Я не думаю, что это правда»', opts: [
        { txt: 'no creo que sea verdad',  em: '✅' },
        { txt: 'no creo que es verdad',   em: '❌' },
        { txt: 'no creo es verdad',       em: '❌' },
        { txt: 'no creo que era verdad',  em: '❌' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['quizás',        'возможно'],
        ['tal vez',       'может быть'],
        ['aunque',        'хотя'],
        ['antes de que',  'прежде чем'],
      ]},
      { t: 'match', pairs: [
        ['sea',    'будь / есть (subj)'],
        ['tenga',  'у меня было бы (subj)'],
        ['vaya',   'я пошёл бы (subj)'],
        ['venga',  'он пришёл бы (subj)'],
      ]},
      { t: 'translate', from: 'Когда придёшь, позвони', tiles: ['cuando', 'vengas', 'vienes', 'llama'], answer: ['cuando', 'vengas', 'llama'] },
      { t: 'fill', sentence: ['No creo que', null, 'fácil.'], target: 'sea', opts: ['sea', 'es', 'era'], hint: 'Не думаю, что это легко' },
      { t: 'typed', from: 'Возможно, завтра пойдёт дождь', answer: 'quizás llueva mañana', answers: ['quizás llueva mañana', 'tal vez llueva mañana', 'quizá llueva mañana'], hint: 'quizás / tal vez + subjuntivo' },
    ],
  },

  // ── 128. Pluscuamperfecto ─────────────────────────────
  {
    id: 'l128', name: 'Pluscuamperfecto', emoji: '⏪', desc: 'Había comido / I had eaten',
    hearts: 4,
    exercises: [
      { t: 'pick', q: '«Я уже поел (до того как)»', opts: [
        { txt: 'había comido',  em: '✅' },
        { txt: 'he comido',     em: '⏳' },
        { txt: 'comí',          em: '⏪' },
        { txt: 'voy a comer',   em: '⏩' },
      ], correct: 0 },
      { t: 'pick', q: '«Когда ты пришёл, я уже ушёл»', opts: [
        { txt: 'cuando llegaste, ya me había ido',   em: '✅' },
        { txt: 'cuando llegaste, ya me he ido',      em: '❌' },
        { txt: 'cuando llegaste, ya me fui',         em: '❌' },
        { txt: 'cuando llegabas, ya me iría',        em: '❌' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['había comido',   'я уже поел'],
        ['habías visto',   'ты уже видел'],
        ['había salido',   'он уже вышел'],
        ['habíamos hecho', 'мы уже сделали'],
      ]},
      { t: 'match', pairs: [
        ['ya',            'уже'],
        ['todavía no',    'ещё не'],
        ['antes de que',  'до того как'],
        ['cuando',        'когда'],
      ]},
      { t: 'translate', from: 'Я никогда не видел такого', tiles: ['nunca', 'había', 'visto', 'algo', 'así', 've'], answer: ['nunca', 'había', 'visto', 'algo', 'así'] },
      { t: 'fill', sentence: ['Cuando llegué, ellos ya', null, 'cenado.'], target: 'habían', opts: ['habían', 'han', 'habrán'], hint: 'они уже поужинали' },
      { t: 'fill', sentence: ['Yo nunca', null, 'estado allí antes.'], target: 'había', opts: ['había', 'he', 'estaba'], hint: 'я никогда не был там раньше' },
      { t: 'typed', from: 'Я уже ел, когда ты позвонил', answer: 'ya había comido cuando llamaste', answers: ['ya había comido cuando llamaste', 'yo ya había comido cuando llamaste'], hint: 'había + participio' },
    ],
  },

  // ── 129. Condicional perfecto ─────────────────────────
  {
    id: 'l129', name: 'Cond. perfecto', emoji: '💫', desc: 'Habría hecho — I would have done',
    hearts: 4,
    exercises: [
      { t: 'pick', q: '«Я бы поел (но не поел)»', opts: [
        { txt: 'habría comido',  em: '✅' },
        { txt: 'había comido',   em: '⏪' },
        { txt: 'he comido',      em: '⏳' },
        { txt: 'comería',        em: '🔂' },
      ], correct: 0 },
      { t: 'pick', q: '«Я бы пришёл, но не мог»', opts: [
        { txt: 'habría venido, pero no pude',  em: '✅' },
        { txt: 'vendría, pero no pude',        em: '⚠️' },
        { txt: 'vine, pero no pude',           em: '❌' },
        { txt: 'venía, pero no pude',          em: '❌' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['habría hecho',    'я бы сделал'],
        ['habrías ido',     'ты бы пошёл'],
        ['habría dicho',    'он бы сказал'],
        ['habríamos sido',  'мы бы были'],
      ]},
      { t: 'match', pairs: [
        ['si hubiera...',     'если бы...'],
        ['habría + part.',    'я бы + сделал'],
        ['pero no pudo',      'но не смог'],
        ['en tu lugar',       'на твоём месте'],
      ]},
      { t: 'translate', from: 'Я бы помог тебе', tiles: ['te', 'habría', 'ayudado', 'ayudo', 'ayudaría'], answer: ['te', 'habría', 'ayudado'] },
      { t: 'fill', sentence: ['Yo', null, 'ido, pero no tuve tiempo.'], target: 'habría', opts: ['habría', 'había', 'he'], hint: 'я бы пошёл, но не было времени' },
      { t: 'fill', sentence: ['En tu lugar, lo', null, 'comprado.'], target: 'habría', opts: ['habría', 'había', 'compré'], hint: 'на твоём месте я бы это купил' },
      { t: 'typed', from: 'Я бы сказал тебе правду', answer: 'te habría dicho la verdad', answers: ['te habría dicho la verdad', 'te hubiera dicho la verdad'], hint: 'habría dicho / hubiera dicho' },
    ],
  },

  // ── 130. Repaso 21 (revisión de L126-L129) ────────────
  // REVIEW LESSON — grammar block: pasiva, subjuntivo II, plusc., cond. perfecto.
  {
    id: 'l130', name: 'Repaso 21', emoji: '🎓', desc: 'Repaso L126-L129',
    hearts: 2,
    exercises: [
      { t: 'pick', q: '«Книга была написана»', opts: [
        { txt: 'el libro fue escrito',  em: '✅' },
        { txt: 'el libro escribió',     em: '❌' },
        { txt: 'el libro está escrito', em: '⚠️' },
        { txt: 'el libro se escribe',   em: '⚠️' },
      ], correct: 0 },
      { t: 'pick', q: '«Возможно, он придёт»', opts: [
        { txt: 'quizás venga',  em: '✅' },
        { txt: 'quizás viene',  em: '❌' },
        { txt: 'quizás vendrá', em: '❌' },
        { txt: 'quizás vino',   em: '❌' },
      ], correct: 0 },
      { t: 'pick', q: '«Я уже поел, когда ты пришёл»', opts: [
        { txt: 'ya había comido cuando llegaste', em: '✅' },
        { txt: 'ya he comido cuando llegaste',    em: '❌' },
        { txt: 'ya comí cuando llegaste',         em: '⚠️' },
        { txt: 'ya comía cuando llegaste',        em: '❌' },
      ], correct: 0 },
      { t: 'pick', q: '«Я бы сделал это»', opts: [
        { txt: 'lo habría hecho',  em: '✅' },
        { txt: 'lo había hecho',   em: '❌' },
        { txt: 'lo he hecho',      em: '❌' },
        { txt: 'lo haría',         em: '⚠️' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['fue escrito',  'был написан'],
        ['se vende',     'продаётся'],
        ['sea',          'будь (subj)'],
        ['venga',        'пусть придёт'],
      ]},
      { t: 'match', pairs: [
        ['había comido',   'я уже поел'],
        ['habría comido',  'я бы поел'],
        ['ya',             'уже'],
        ['todavía no',     'ещё не'],
      ]},
      { t: 'translate', from: 'Я бы помог тебе, но не мог', tiles: ['te', 'habría', 'ayudado', 'pero', 'no', 'pude'], answer: ['te', 'habría', 'ayudado', 'pero', 'no', 'pude'] },
      { t: 'translate', from: 'Когда придёшь, позвони', tiles: ['cuando', 'vengas', 'vienes', 'llama', 'me'], answer: ['cuando', 'vengas', 'llama'] },
      { t: 'fill', sentence: ['Cuando llegué, ya', null, 'salido.'], target: 'habían', opts: ['habían', 'han', 'habrán'], hint: 'когда я пришёл, они уже ушли' },
      { t: 'fill', sentence: ['No creo que', null, 'verdad.'], target: 'sea', opts: ['sea', 'es', 'era'], hint: 'не думаю, что это правда' },
      { t: 'fill', sentence: ['Aquí', null, 'venden flores.'], target: 'se', opts: ['se', 'son', 'es'], hint: 'здесь продаются цветы' },
      { t: 'typed', from: 'Я бы сказал тебе раньше', answer: 'te habría dicho antes', answers: ['te habría dicho antes', 'te hubiera dicho antes'], hint: 'habría / hubiera + part.' },
    ],
  },

  // ── 131. En el cine ───────────────────────────────────
  {
    id: 'l131', name: 'Cine', emoji: '🎬', desc: 'Películas, butacas y palomitas',
    exercises: [
      { t: 'pick', q: '«Кино / фильм»', opts: [
        { txt: 'película',  em: '🎞️' },
        { txt: 'pintura',   em: '🖼️' },
        { txt: 'piscina',   em: '🏊' },
        { txt: 'pelota',    em: '⚽' },
      ], correct: 0 },
      { t: 'pick', q: '«Попкорн»', opts: [
        { txt: 'pan',         em: '🍞' },
        { txt: 'palomitas',   em: '🍿' },
        { txt: 'pasteles',    em: '🍰' },
        { txt: 'patatas',     em: '🥔' },
      ], correct: 1 },
      { t: 'pick', q: '«Билет»', opts: [
        { txt: 'entrada',  em: '🎟️' },
        { txt: 'salida',   em: '🚪' },
        { txt: 'pantalla', em: '🖥️' },
        { txt: 'silla',    em: '🪑' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['película',   'фильм'],
        ['cine',       'кинотеатр'],
        ['entrada',    'билет'],
        ['butaca',     'кресло'],
      ]},
      { t: 'match', pairs: [
        ['palomitas',  'попкорн'],
        ['pantalla',   'экран'],
        ['director',   'режиссёр'],
        ['actor',      'актёр'],
      ]},
      { t: 'translate', from: 'Я хочу посмотреть фильм', tiles: ['quiero', 'ver', 'una', 'película', 'veo'], answer: ['quiero', 'ver', 'una', 'película'] },
      { t: 'fill', sentence: ['Compré dos', null, 'para el cine.'], target: 'entradas', opts: ['entradas', 'salidas', 'sillas'], hint: 'я купил два билета' },
      { t: 'typed', from: 'Этот фильм очень интересный', answer: 'esta película es muy interesante', answers: ['esta película es muy interesante', 'la película es muy interesante'], hint: 'esta película es...' },
    ],
  },

  // ── 132. Música y conciertos ──────────────────────────
  {
    id: 'l132', name: 'Conciertos', emoji: '🎤', desc: 'Bandas, canciones y conciertos',
    exercises: [
      { t: 'pick', q: '«Песня»', opts: [
        { txt: 'canción',  em: '🎶' },
        { txt: 'baile',    em: '💃' },
        { txt: 'libro',    em: '📖' },
        { txt: 'fiesta',   em: '🎉' },
      ], correct: 0 },
      { t: 'pick', q: '«Группа / рок-группа»', opts: [
        { txt: 'banda',    em: '🎸' },
        { txt: 'banco',    em: '🏦' },
        { txt: 'cantante', em: '🎤' },
        { txt: 'novia',    em: '👰' },
      ], correct: 0 },
      { t: 'pick', q: '«Сцена»', opts: [
        { txt: 'escena',   em: '🎭' },
        { txt: 'escenario',em: '🎪' },
        { txt: 'butaca',   em: '🪑' },
        { txt: 'puerta',   em: '🚪' },
      ], correct: 1 },
      { t: 'match', pairs: [
        ['canción',    'песня'],
        ['cantante',   'певец'],
        ['banda',      'группа'],
        ['concierto',  'концерт'],
      ]},
      { t: 'match', pairs: [
        ['escenario',  'сцена'],
        ['micrófono',  'микрофон'],
        ['letra',      'текст песни'],
        ['ritmo',      'ритм'],
      ]},
      { t: 'translate', from: 'Мне нравится эта песня', tiles: ['me', 'gusta', 'esta', 'canción', 'eso'], answer: ['me', 'gusta', 'esta', 'canción'] },
      { t: 'fill', sentence: ['Vamos al', null, 'esta noche.'], target: 'concierto', opts: ['concierto', 'cuento', 'consejo'], hint: 'идём на концерт сегодня вечером' },
      { t: 'typed', from: 'Этот певец очень знаменит', answer: 'este cantante es muy famoso', answers: ['este cantante es muy famoso', 'el cantante es muy famoso'], hint: 'este cantante es...' },
    ],
  },

  // ── 133. Libros y literatura ──────────────────────────
  {
    id: 'l133', name: 'Literatura', emoji: '📚', desc: 'Novelas, autores y poesía',
    exercises: [
      { t: 'pick', q: '«Роман»', opts: [
        { txt: 'novela',    em: '📕' },
        { txt: 'cuento',    em: '📖' },
        { txt: 'poema',     em: '📜' },
        { txt: 'periódico', em: '📰' },
      ], correct: 0 },
      { t: 'pick', q: '«Автор / писатель»', opts: [
        { txt: 'lector',    em: '👓' },
        { txt: 'autor',     em: '✍️' },
        { txt: 'cantante',  em: '🎤' },
        { txt: 'pintor',    em: '🎨' },
      ], correct: 1 },
      { t: 'pick', q: '«Стихотворение»', opts: [
        { txt: 'poema',     em: '📜' },
        { txt: 'novela',    em: '📕' },
        { txt: 'capítulo',  em: '📄' },
        { txt: 'biblioteca',em: '🏛️' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['novela',    'роман'],
        ['cuento',    'рассказ'],
        ['poema',     'стихотворение'],
        ['ensayo',    'эссе'],
      ]},
      { t: 'match', pairs: [
        ['autor',      'автор'],
        ['lector',     'читатель'],
        ['biblioteca', 'библиотека'],
        ['página',     'страница'],
      ]},
      { t: 'translate', from: 'Я читаю интересную книгу', tiles: ['leo', 'un', 'libro', 'interesante', 'libros'], answer: ['leo', 'un', 'libro', 'interesante'] },
      { t: 'fill', sentence: ['Cervantes es un gran', null, '.'], target: 'autor', opts: ['autor', 'lector', 'actor'], hint: 'Сервантес — великий автор' },
      { t: 'typed', from: 'Я только что закончил роман', answer: 'acabo de terminar una novela', answers: ['acabo de terminar una novela', 'acabo de terminar la novela'], hint: 'acabar de + infinitivo' },
    ],
  },

  // ── 134. Teatro y arte ────────────────────────────────
  {
    id: 'l134', name: 'Teatro y arte', emoji: '🎭', desc: 'Obras, pinturas y museos',
    exercises: [
      { t: 'pick', q: '«Театр»', opts: [
        { txt: 'teatro',    em: '🎭' },
        { txt: 'cine',      em: '🎬' },
        { txt: 'museo',     em: '🏛️' },
        { txt: 'escuela',   em: '🏫' },
      ], correct: 0 },
      { t: 'pick', q: '«Картина»', opts: [
        { txt: 'cuadro',    em: '🖼️' },
        { txt: 'cuento',    em: '📖' },
        { txt: 'cuerda',    em: '🪢' },
        { txt: 'cuello',    em: '👔' },
      ], correct: 0 },
      { t: 'pick', q: '«Музей»', opts: [
        { txt: 'mercado',   em: '🛒' },
        { txt: 'museo',     em: '🏛️' },
        { txt: 'mesón',     em: '🍽️' },
        { txt: 'metro',     em: '🚇' },
      ], correct: 1 },
      { t: 'match', pairs: [
        ['teatro',    'театр'],
        ['obra',      'пьеса / произведение'],
        ['actor',     'актёр'],
        ['actriz',    'актриса'],
      ]},
      { t: 'match', pairs: [
        ['museo',     'музей'],
        ['cuadro',    'картина'],
        ['escultura', 'скульптура'],
        ['pintor',    'художник'],
      ]},
      { t: 'translate', from: 'Я иду в музей', tiles: ['voy', 'al', 'museo', 'casa', 'a'], answer: ['voy', 'al', 'museo'] },
      { t: 'fill', sentence: ['Esta', null, 'es de Picasso.'], target: 'pintura', opts: ['pintura', 'puerta', 'pelota'], hint: 'эта картина — Пикассо' },
      { t: 'typed', from: 'Вчера я был в театре', answer: 'ayer estuve en el teatro', answers: ['ayer estuve en el teatro', 'ayer fui al teatro'], hint: 'estuve / fui al teatro' },
    ],
  },

  // ── 135. Repaso 22 (revisión de L131-L134) ────────────
  {
    id: 'l135', name: 'Repaso 22', emoji: '🎬', desc: 'Repaso L131-L134',
    hearts: 2,
    exercises: [
      { t: 'pick', q: '«Фильм»', opts: [
        { txt: 'película', em: '🎞️' },
        { txt: 'pintura',  em: '🖼️' },
        { txt: 'palomitas',em: '🍿' },
        { txt: 'pelota',   em: '⚽' },
      ], correct: 0 },
      { t: 'pick', q: '«Концерт»', opts: [
        { txt: 'concierto', em: '🎤' },
        { txt: 'consejo',   em: '💡' },
        { txt: 'cuento',    em: '📖' },
        { txt: 'comedor',   em: '🍽️' },
      ], correct: 0 },
      { t: 'pick', q: '«Автор»', opts: [
        { txt: 'autor',    em: '✍️' },
        { txt: 'actor',    em: '🎭' },
        { txt: 'lector',   em: '👓' },
        { txt: 'pintor',   em: '🎨' },
      ], correct: 0 },
      { t: 'pick', q: '«Музей»', opts: [
        { txt: 'museo',    em: '🏛️' },
        { txt: 'teatro',   em: '🎭' },
        { txt: 'cine',     em: '🎬' },
        { txt: 'mercado',  em: '🛒' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['película',  'фильм'],
        ['canción',   'песня'],
        ['novela',    'роман'],
        ['cuadro',    'картина'],
      ]},
      { t: 'match', pairs: [
        ['cine',     'кинотеатр'],
        ['concierto','концерт'],
        ['biblioteca','библиотека'],
        ['teatro',   'театр'],
      ]},
      { t: 'match', pairs: [
        ['palomitas', 'попкорн'],
        ['entrada',   'билет'],
        ['poema',     'стихотворение'],
        ['actriz',    'актриса'],
      ]},
      { t: 'translate', from: 'Мне нравится эта песня', tiles: ['me', 'gusta', 'esta', 'canción'], answer: ['me', 'gusta', 'esta', 'canción'] },
      { t: 'translate', from: 'Я иду в кино', tiles: ['voy', 'al', 'cine', 'museo'], answer: ['voy', 'al', 'cine'] },
      { t: 'fill', sentence: ['Compré dos', null, 'para el teatro.'], target: 'entradas', opts: ['entradas', 'salidas', 'palomitas'], hint: 'я купил два билета' },
      { t: 'fill', sentence: ['Cervantes escribió esta', null, '.'], target: 'novela', opts: ['novela', 'película', 'canción'], hint: 'Сервантес написал этот роман' },
      { t: 'typed', from: 'Вчера я ходил в музей', answer: 'ayer fui al museo', answers: ['ayer fui al museo', 'ayer estuve en el museo'], hint: 'fui al / estuve en el museo' },
    ],
  },

  // ── 136. Cultura española ─────────────────────────────
  {
    id: 'l136', name: 'España', emoji: '🇪🇸', desc: 'Flamenco, paella y fiestas',
    exercises: [
      { t: 'pick', q: '«Фламенко»', opts: [
        { txt: 'flamenco',  em: '💃' },
        { txt: 'fútbol',    em: '⚽' },
        { txt: 'flamingo',  em: '🦩' },
        { txt: 'falda',     em: '👗' },
      ], correct: 0 },
      { t: 'pick', q: '«Паэлья»', opts: [
        { txt: 'paella',    em: '🥘' },
        { txt: 'patata',    em: '🥔' },
        { txt: 'palabra',   em: '💬' },
        { txt: 'paloma',    em: '🕊️' },
      ], correct: 0 },
      { t: 'pick', q: '«Сиеста (дневной сон)»', opts: [
        { txt: 'fiesta',  em: '🎉' },
        { txt: 'siesta',  em: '😴' },
        { txt: 'silla',   em: '🪑' },
        { txt: 'sopa',    em: '🍲' },
      ], correct: 1 },
      { t: 'match', pairs: [
        ['flamenco',  'фламенко'],
        ['toros',     'корриды (быки)'],
        ['paella',    'паэлья'],
        ['tapas',     'тапас (закуски)'],
      ]},
      { t: 'match', pairs: [
        ['siesta',    'дневной сон'],
        ['fiesta',    'праздник'],
        ['plaza',     'площадь'],
        ['guitarra',  'гитара'],
      ]},
      { t: 'translate', from: 'Мне нравится испанская кухня', tiles: ['me', 'gusta', 'la', 'cocina', 'española', 'pero'], answer: ['me', 'gusta', 'la', 'cocina', 'española'] },
      { t: 'fill', sentence: ['Después de comer hago una', null, '.'], target: 'siesta', opts: ['siesta', 'fiesta', 'silla'], hint: 'после еды я устраиваю сиесту' },
      { t: 'typed', from: 'Паэлья типичное испанское блюдо', answer: 'la paella es un plato típico español', answers: ['la paella es un plato típico español', 'la paella es un plato típico de españa'], hint: 'un plato típico...' },
    ],
  },

  // ── 137. Cultura latinoamericana ──────────────────────
  {
    id: 'l137', name: 'Latinoamérica', emoji: '🌎', desc: 'Tango, mate y mariachi',
    exercises: [
      { t: 'pick', q: '«Танго»', opts: [
        { txt: 'tango',    em: '💃' },
        { txt: 'mango',    em: '🥭' },
        { txt: 'banco',    em: '🏦' },
        { txt: 'taco',     em: '🌮' },
      ], correct: 0 },
      { t: 'pick', q: '«Тако (мексик. блюдо)»', opts: [
        { txt: 'tapas', em: '🍢' },
        { txt: 'taza',  em: '☕' },
        { txt: 'taco',  em: '🌮' },
        { txt: 'tango', em: '💃' },
      ], correct: 2 },
      { t: 'pick', q: '«Мариачи»', opts: [
        { txt: 'mariachi',  em: '🎺' },
        { txt: 'martillo',  em: '🔨' },
        { txt: 'maíz',      em: '🌽' },
        { txt: 'manzana',   em: '🍎' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['tango',    'танго'],
        ['mate',     'мате (напиток)'],
        ['mariachi', 'мариачи'],
        ['taco',     'тако'],
      ]},
      { t: 'match', pairs: [
        ['Argentina',  'Аргентина'],
        ['México',     'Мексика'],
        ['Perú',       'Перу'],
        ['Cuba',       'Куба'],
      ]},
      { t: 'translate', from: 'Я люблю мексиканскую еду', tiles: ['me', 'encanta', 'la', 'comida', 'mexicana', 'gusta'], answer: ['me', 'encanta', 'la', 'comida', 'mexicana'] },
      { t: 'fill', sentence: ['En Argentina bailan', null, '.'], target: 'tango', opts: ['tango', 'salsa', 'rap'], hint: 'в Аргентине танцуют танго' },
      { t: 'typed', from: 'Мате типичный аргентинский напиток', answer: 'el mate es una bebida típica argentina', answers: ['el mate es una bebida típica argentina', 'el mate es una bebida típica de argentina'], hint: 'una bebida típica...' },
    ],
  },

  // ── 138. Comida regional ──────────────────────────────
  {
    id: 'l138', name: 'Comida regional', emoji: '🌮', desc: 'Sabores del mundo hispano',
    exercises: [
      { t: 'pick', q: '«Гаспачо (холодный суп)»', opts: [
        { txt: 'gazpacho',  em: '🥣' },
        { txt: 'guisado',   em: '🥘' },
        { txt: 'galleta',   em: '🍪' },
        { txt: 'gambas',    em: '🦐' },
      ], correct: 0 },
      { t: 'pick', q: '«Тортилья»', opts: [
        { txt: 'tortilla',  em: '🌯' },
        { txt: 'tarta',     em: '🎂' },
        { txt: 'tomate',    em: '🍅' },
        { txt: 'tostada',   em: '🍞' },
      ], correct: 0 },
      { t: 'pick', q: '«Чурро»', opts: [
        { txt: 'churros',   em: '🥖' },
        { txt: 'chocolate', em: '🍫' },
        { txt: 'chuleta',   em: '🥩' },
        { txt: 'cheese',    em: '🧀' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['gazpacho',  'гаспачо'],
        ['tortilla',  'тортилья'],
        ['churros',   'чурро'],
        ['empanada',  'эмпанада'],
      ]},
      { t: 'match', pairs: [
        ['picante',  'острый'],
        ['salado',   'солёный'],
        ['dulce',    'сладкий'],
        ['amargo',   'горький'],
      ]},
      { t: 'translate', from: 'Я хочу тако с курицей', tiles: ['quiero', 'un', 'taco', 'de', 'pollo'], answer: ['quiero', 'un', 'taco', 'de', 'pollo'] },
      { t: 'fill', sentence: ['Esta comida está muy', null, '.'], target: 'picante', opts: ['picante', 'frío', 'lento'], hint: 'эта еда очень острая' },
      { t: 'typed', from: 'Я никогда не пробовал паэлью', answer: 'nunca he probado la paella', answers: ['nunca he probado la paella', 'no he probado nunca la paella'], hint: 'nunca he + part.' },
    ],
  },

  // ── 139. Tradiciones y fiestas ────────────────────────
  {
    id: 'l139', name: 'Tradiciones', emoji: '🎉', desc: 'Navidad, Año Nuevo, fiestas',
    exercises: [
      { t: 'pick', q: '«Рождество»', opts: [
        { txt: 'Navidad',     em: '🎄' },
        { txt: 'cumpleaños',  em: '🎂' },
        { txt: 'verano',      em: '☀️' },
        { txt: 'boda',        em: '💍' },
      ], correct: 0 },
      { t: 'pick', q: '«Новый Год»', opts: [
        { txt: 'Año Nuevo',   em: '🎆' },
        { txt: 'mañana',      em: '🌅' },
        { txt: 'medianoche',  em: '🕛' },
        { txt: 'fin de semana',em: '📅' },
      ], correct: 0 },
      { t: 'pick', q: '«Подарок»', opts: [
        { txt: 'regalo',     em: '🎁' },
        { txt: 'recuerdo',   em: '📷' },
        { txt: 'reloj',      em: '⌚' },
        { txt: 'regla',      em: '📏' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['Navidad',     'Рождество'],
        ['Año Nuevo',   'Новый Год'],
        ['cumpleaños',  'день рождения'],
        ['Semana Santa','Страстная неделя'],
      ]},
      { t: 'match', pairs: [
        ['regalo',     'подарок'],
        ['fuegos artificiales', 'фейерверк'],
        ['celebrar',   'праздновать'],
        ['brindis',    'тост'],
      ]},
      { t: 'translate', from: 'Поздравляю с Рождеством!', tiles: ['¡', 'feliz', 'Navidad', '!', 'cumpleaños'], answer: ['¡', 'feliz', 'Navidad', '!'] },
      { t: 'fill', sentence: ['Vamos a', null, 'el cumpleaños.'], target: 'celebrar', opts: ['celebrar', 'comer', 'comprar'], hint: 'мы празднуем день рождения' },
      { t: 'typed', from: 'Я хочу подарить тебе подарок', answer: 'quiero darte un regalo', answers: ['quiero darte un regalo', 'te quiero dar un regalo'], hint: 'darte un regalo / te quiero dar' },
    ],
  },

  // ── 140. Repaso 23 (revisión de L136-L139) ────────────
  {
    id: 'l140', name: 'Repaso 23', emoji: '🌍', desc: 'Repaso L136-L139',
    hearts: 2,
    exercises: [
      { t: 'pick', q: '«Паэлья»', opts: [
        { txt: 'paella',  em: '🥘' },
        { txt: 'pasta',   em: '🍝' },
        { txt: 'pizza',   em: '🍕' },
        { txt: 'pollo',   em: '🍗' },
      ], correct: 0 },
      { t: 'pick', q: '«Танго»', opts: [
        { txt: 'tango',    em: '💃' },
        { txt: 'salsa',    em: '🌶️' },
        { txt: 'flamenco', em: '👗' },
        { txt: 'mariachi', em: '🎺' },
      ], correct: 0 },
      { t: 'pick', q: '«Тако»', opts: [
        { txt: 'taco',     em: '🌮' },
        { txt: 'tapas',    em: '🍢' },
        { txt: 'tarta',    em: '🎂' },
        { txt: 'tortilla', em: '🌯' },
      ], correct: 0 },
      { t: 'pick', q: '«Рождество»', opts: [
        { txt: 'Navidad',     em: '🎄' },
        { txt: 'cumpleaños',  em: '🎂' },
        { txt: 'Año Nuevo',   em: '🎆' },
        { txt: 'Semana Santa',em: '⛪' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['flamenco', 'фламенко'],
        ['siesta',   'сиеста'],
        ['mate',     'мате'],
        ['mariachi', 'мариачи'],
      ]},
      { t: 'match', pairs: [
        ['gazpacho',  'гаспачо'],
        ['tortilla',  'тортилья'],
        ['churros',   'чурро'],
        ['empanada',  'эмпанада'],
      ]},
      { t: 'match', pairs: [
        ['regalo',    'подарок'],
        ['celebrar',  'праздновать'],
        ['picante',   'острый'],
        ['dulce',     'сладкий'],
      ]},
      { t: 'translate', from: 'Я люблю мексиканскую еду', tiles: ['me', 'encanta', 'la', 'comida', 'mexicana'], answer: ['me', 'encanta', 'la', 'comida', 'mexicana'] },
      { t: 'translate', from: 'С Новым Годом!', tiles: ['¡', 'feliz', 'Año', 'Nuevo', '!'], answer: ['¡', 'feliz', 'Año', 'Nuevo', '!'] },
      { t: 'fill', sentence: ['En Argentina bailan', null, '.'], target: 'tango', opts: ['tango', 'salsa', 'rap'], hint: 'в Аргентине танцуют танго' },
      { t: 'fill', sentence: ['Esta sopa está muy', null, '.'], target: 'picante', opts: ['picante', 'frío', 'rápido'], hint: 'этот суп очень острый' },
      { t: 'typed', from: 'Я хочу попробовать паэлью', answer: 'quiero probar la paella', answers: ['quiero probar la paella', 'quiero probar paella'], hint: 'probar la paella' },
    ],
  },

  // ── 141. Periódico y noticias ─────────────────────────
  {
    id: 'l141', name: 'Noticias', emoji: '📰', desc: 'Prensa, titulares y reportajes',
    exercises: [
      { t: 'pick', q: '«Газета»', opts: [
        { txt: 'periódico',  em: '📰' },
        { txt: 'libro',      em: '📖' },
        { txt: 'pintura',    em: '🖼️' },
        { txt: 'paquete',    em: '📦' },
      ], correct: 0 },
      { t: 'pick', q: '«Новости»', opts: [
        { txt: 'noticias',  em: '📢' },
        { txt: 'novelas',   em: '📕' },
        { txt: 'noches',    em: '🌙' },
        { txt: 'nubes',     em: '☁️' },
      ], correct: 0 },
      { t: 'pick', q: '«Заголовок»', opts: [
        { txt: 'titular',   em: '📰' },
        { txt: 'tijeras',   em: '✂️' },
        { txt: 'tigre',     em: '🐯' },
        { txt: 'tinta',     em: '🖋️' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['periódico',  'газета'],
        ['revista',    'журнал'],
        ['noticia',    'новость'],
        ['titular',    'заголовок'],
      ]},
      { t: 'match', pairs: [
        ['periodista',  'журналист'],
        ['reportaje',   'репортаж'],
        ['anuncio',     'объявление'],
        ['artículo',    'статья'],
      ]},
      { t: 'translate', from: 'Я читаю газету по утрам', tiles: ['leo', 'el', 'periódico', 'por', 'la', 'mañana'], answer: ['leo', 'el', 'periódico', 'por', 'la', 'mañana'] },
      { t: 'fill', sentence: ['Las', null, 'son interesantes hoy.'], target: 'noticias', opts: ['noticias', 'palabras', 'puertas'], hint: 'новости сегодня интересные' },
      { t: 'typed', from: 'Этот журналист пишет хорошо', answer: 'este periodista escribe bien', answers: ['este periodista escribe bien', 'el periodista escribe bien'], hint: 'periodista + escribir' },
    ],
  },

  // ── 142. Política básica ──────────────────────────────
  {
    id: 'l142', name: 'Política', emoji: '🏛️', desc: 'Gobierno, voto y elecciones',
    exercises: [
      { t: 'pick', q: '«Правительство»', opts: [
        { txt: 'gobierno',   em: '🏛️' },
        { txt: 'goloso',     em: '🍬' },
        { txt: 'golpe',      em: '💥' },
        { txt: 'gorra',      em: '🧢' },
      ], correct: 0 },
      { t: 'pick', q: '«Выборы»', opts: [
        { txt: 'eleciones',     em: '❓' },
        { txt: 'elecciones',    em: '🗳️' },
        { txt: 'edificios',     em: '🏢' },
        { txt: 'estaciones',    em: '🚉' },
      ], correct: 1 },
      { t: 'pick', q: '«Президент»', opts: [
        { txt: 'presidente',  em: '👨‍💼' },
        { txt: 'profesor',    em: '👨‍🏫' },
        { txt: 'paciente',    em: '🤒' },
        { txt: 'periodista',  em: '📰' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['gobierno',     'правительство'],
        ['presidente',   'президент'],
        ['elecciones',   'выборы'],
        ['ministro',     'министр'],
      ]},
      { t: 'match', pairs: [
        ['votar',       'голосовать'],
        ['ley',         'закон'],
        ['partido',     'партия'],
        ['ciudadano',   'гражданин'],
      ]},
      { t: 'translate', from: 'Я голосую завтра', tiles: ['voto', 'mañana', 'hoy', 'votaré'], answer: ['voto', 'mañana'] },
      { t: 'fill', sentence: ['Hay', null, 'el domingo.'], target: 'elecciones', opts: ['elecciones', 'estaciones', 'edificios'], hint: 'в воскресенье выборы' },
      { t: 'typed', from: 'Президент говорит сегодня', answer: 'el presidente habla hoy', answers: ['el presidente habla hoy', 'hoy habla el presidente'], hint: 'el presidente habla...' },
    ],
  },

  // ── 143. Historia y eventos ───────────────────────────
  {
    id: 'l143', name: 'Historia', emoji: '📜', desc: 'Siglos, guerras y descubrimientos',
    exercises: [
      { t: 'pick', q: '«История»', opts: [
        { txt: 'historia',   em: '📜' },
        { txt: 'horario',    em: '⏰' },
        { txt: 'hotel',      em: '🏨' },
        { txt: 'hospital',   em: '🏥' },
      ], correct: 0 },
      { t: 'pick', q: '«Век (столетие)»', opts: [
        { txt: 'siglo',  em: '📜' },
        { txt: 'sigla',  em: '🔤' },
        { txt: 'silla',  em: '🪑' },
        { txt: 'sigue',  em: '➡️' },
      ], correct: 0 },
      { t: 'pick', q: '«Война»', opts: [
        { txt: 'guerra',  em: '⚔️' },
        { txt: 'guapa',   em: '😍' },
        { txt: 'guante',  em: '🧤' },
        { txt: 'guisado', em: '🥘' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['historia',   'история'],
        ['siglo',      'век'],
        ['guerra',     'война'],
        ['paz',        'мир'],
      ]},
      { t: 'match', pairs: [
        ['descubrir',     'открывать'],
        ['descubrimiento','открытие'],
        ['rey',           'король'],
        ['reina',         'королева'],
      ]},
      { t: 'translate', from: 'Колумб открыл Америку', tiles: ['Colón', 'descubrió', 'América', 'descubre'], answer: ['Colón', 'descubrió', 'América'] },
      { t: 'fill', sentence: ['Estamos en el', null, 'XXI.'], target: 'siglo', opts: ['siglo', 'sigla', 'sigue'], hint: 'мы в XXI веке' },
      { t: 'typed', from: 'История этой страны очень богатая', answer: 'la historia de este país es muy rica', answers: ['la historia de este país es muy rica', 'la historia de este país es muy variada'], hint: 'la historia es muy rica' },
    ],
  },

  // ── 144. Geografía ────────────────────────────────────
  {
    id: 'l144', name: 'Geografía', emoji: '🗺️', desc: 'Continentes, ríos y montañas',
    exercises: [
      { t: 'pick', q: '«Гора»', opts: [
        { txt: 'montaña',  em: '⛰️' },
        { txt: 'mantel',   em: '🍽️' },
        { txt: 'manzana',  em: '🍎' },
        { txt: 'mañana',   em: '🌅' },
      ], correct: 0 },
      { t: 'pick', q: '«Река»', opts: [
        { txt: 'río',     em: '🏞️' },
        { txt: 'ropa',    em: '👕' },
        { txt: 'rico',    em: '💰' },
        { txt: 'rosa',    em: '🌹' },
      ], correct: 0 },
      { t: 'pick', q: '«Океан»', opts: [
        { txt: 'océano',   em: '🌊' },
        { txt: 'oso',      em: '🐻' },
        { txt: 'orquídea', em: '🌺' },
        { txt: 'oreja',    em: '👂' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['montaña',   'гора'],
        ['río',       'река'],
        ['mar',       'море'],
        ['océano',    'океан'],
      ]},
      { t: 'match', pairs: [
        ['continente',  'континент'],
        ['país',        'страна'],
        ['ciudad',      'город'],
        ['frontera',    'граница'],
      ]},
      { t: 'translate', from: 'Эта гора очень высокая', tiles: ['esta', 'montaña', 'es', 'muy', 'alta', 'alto'], answer: ['esta', 'montaña', 'es', 'muy', 'alta'] },
      { t: 'fill', sentence: ['El Amazonas es un', null, '.'], target: 'río', opts: ['río', 'lago', 'mar'], hint: 'Амазонка — река' },
      { t: 'typed', from: 'Испания находится в Европе', answer: 'españa está en europa', answers: ['españa está en europa', 'españa se encuentra en europa'], hint: 'está en / se encuentra en' },
    ],
  },

  // ── 145. Repaso 24 (revisión de L141-L144) ────────────
  {
    id: 'l145', name: 'Repaso 24', emoji: '🌐', desc: 'Repaso L141-L144',
    hearts: 2,
    exercises: [
      { t: 'pick', q: '«Газета»', opts: [
        { txt: 'periódico', em: '📰' },
        { txt: 'pintura',   em: '🖼️' },
        { txt: 'paquete',   em: '📦' },
        { txt: 'palabra',   em: '💬' },
      ], correct: 0 },
      { t: 'pick', q: '«Правительство»', opts: [
        { txt: 'gobierno',  em: '🏛️' },
        { txt: 'gusto',     em: '😋' },
        { txt: 'gente',     em: '👥' },
        { txt: 'gato',      em: '🐈' },
      ], correct: 0 },
      { t: 'pick', q: '«Век»', opts: [
        { txt: 'siglo',  em: '📜' },
        { txt: 'silla',  em: '🪑' },
        { txt: 'sigla',  em: '🔤' },
        { txt: 'sien',   em: '🤕' },
      ], correct: 0 },
      { t: 'pick', q: '«Гора»', opts: [
        { txt: 'montaña',  em: '⛰️' },
        { txt: 'mañana',   em: '🌅' },
        { txt: 'mantel',   em: '🍽️' },
        { txt: 'manzana',  em: '🍎' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['noticia',   'новость'],
        ['revista',   'журнал'],
        ['artículo',  'статья'],
        ['titular',   'заголовок'],
      ]},
      { t: 'match', pairs: [
        ['elecciones',  'выборы'],
        ['votar',       'голосовать'],
        ['ley',         'закон'],
        ['ministro',    'министр'],
      ]},
      { t: 'match', pairs: [
        ['guerra',  'война'],
        ['paz',     'мир'],
        ['río',     'река'],
        ['mar',     'море'],
      ]},
      { t: 'translate', from: 'Я читаю газету каждый день', tiles: ['leo', 'el', 'periódico', 'cada', 'día'], answer: ['leo', 'el', 'periódico', 'cada', 'día'] },
      { t: 'translate', from: 'Эта страна очень большая', tiles: ['este', 'país', 'es', 'muy', 'grande', 'esta'], answer: ['este', 'país', 'es', 'muy', 'grande'] },
      { t: 'fill', sentence: ['Hay', null, 'el domingo.'], target: 'elecciones', opts: ['elecciones', 'estaciones', 'lecciones'], hint: 'в воскресенье выборы' },
      { t: 'fill', sentence: ['Estamos en el', null, 'XXI.'], target: 'siglo', opts: ['siglo', 'silla', 'sigla'], hint: 'мы в XXI веке' },
      { t: 'typed', from: 'Россия находится в Европе и Азии', answer: 'rusia está en europa y asia', answers: ['rusia está en europa y asia', 'rusia se encuentra en europa y asia'], hint: 'está en / se encuentra' },
    ],
  },

  // ── 146. Conversación avanzada ────────────────────────
  {
    id: 'l146', name: 'Conversación', emoji: '🗣️', desc: 'Expresar opiniones, acuerdos',
    exercises: [
      { t: 'pick', q: '«По-моему / на мой взгляд»', opts: [
        { txt: 'en mi opinión',  em: '💭' },
        { txt: 'en realidad',    em: '⚡' },
        { txt: 'por supuesto',   em: '✅' },
        { txt: 'sin embargo',    em: '🔀' },
      ], correct: 0 },
      { t: 'pick', q: '«Согласен / я согласен»', opts: [
        { txt: 'estoy de acuerdo', em: '👍' },
        { txt: 'estoy enfermo',    em: '🤒' },
        { txt: 'estoy en casa',    em: '🏠' },
        { txt: 'estoy seguro',     em: '💪' },
      ], correct: 0 },
      { t: 'pick', q: '«Однако / тем не менее»', opts: [
        { txt: 'sin embargo',  em: '🔀' },
        { txt: 'por supuesto', em: '✅' },
        { txt: 'a propósito',  em: '💡' },
        { txt: 'a menudo',     em: '⏰' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['en mi opinión',     'по-моему'],
        ['estoy de acuerdo',  'я согласен'],
        ['no estoy de acuerdo','я не согласен'],
        ['por supuesto',      'конечно'],
      ]},
      { t: 'match', pairs: [
        ['sin embargo',  'однако'],
        ['además',       'кроме того'],
        ['por ejemplo',  'например'],
        ['en realidad',  'на самом деле'],
      ]},
      { t: 'translate', from: 'По-моему, это правда', tiles: ['en', 'mi', 'opinión', 'es', 'verdad', 'soy'], answer: ['en', 'mi', 'opinión', 'es', 'verdad'] },
      { t: 'fill', sentence: ['No', null, 'de acuerdo contigo.'], target: 'estoy', opts: ['estoy', 'soy', 'sé'], hint: 'я не согласен с тобой' },
      { t: 'typed', from: 'Например, мне нравится кофе', answer: 'por ejemplo, me gusta el café', answers: ['por ejemplo, me gusta el café', 'por ejemplo me gusta el café'], hint: 'por ejemplo + me gusta' },
    ],
  },

  // ── 147. Negociar y argumentar ────────────────────────
  {
    id: 'l147', name: 'Argumentar', emoji: '⚖️', desc: 'Discutir, convencer, persuadir',
    exercises: [
      { t: 'pick', q: '«Я думаю, что...»', opts: [
        { txt: 'creo que',    em: '💭' },
        { txt: 'sé que',      em: '✅' },
        { txt: 'digo que',    em: '💬' },
        { txt: 'veo que',     em: '👀' },
      ], correct: 0 },
      { t: 'pick', q: '«С другой стороны»', opts: [
        { txt: 'por otro lado',   em: '⚖️' },
        { txt: 'por el camino',   em: '🛣️' },
        { txt: 'por el momento',  em: '⏳' },
        { txt: 'por la noche',    em: '🌙' },
      ], correct: 0 },
      { t: 'pick', q: '«В заключение»', opts: [
        { txt: 'en conclusión',   em: '🏁' },
        { txt: 'en realidad',     em: '⚡' },
        { txt: 'en general',      em: '📊' },
        { txt: 'en privado',      em: '🤫' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['creo que',      'я думаю, что'],
        ['por otro lado', 'с другой стороны'],
        ['en conclusión', 'в заключение'],
        ['en primer lugar','во-первых'],
      ]},
      { t: 'match', pairs: [
        ['convencer',  'убеждать'],
        ['discutir',   'спорить'],
        ['argumento',  'аргумент'],
        ['razón',      'причина / разум'],
      ]},
      { t: 'translate', from: 'С одной стороны, это хорошо', tiles: ['por', 'un', 'lado', 'es', 'bueno', 'una'], answer: ['por', 'un', 'lado', 'es', 'bueno'] },
      { t: 'fill', sentence: ['En', null, 'lugar, no me gusta.'], target: 'primer', opts: ['primer', 'segunda', 'tercer'], hint: 'во-первых, мне не нравится' },
      { t: 'typed', from: 'Я думаю, что ты прав', answer: 'creo que tienes razón', answers: ['creo que tienes razón', 'pienso que tienes razón'], hint: 'creo / pienso que + tener razón' },
    ],
  },

  // ── 148. Expresiones idiomáticas ──────────────────────
  {
    id: 'l148', name: 'Modismos', emoji: '💡', desc: 'Frases hechas del español',
    hearts: 4,
    exercises: [
      { t: 'pick', q: '«Стоить руки и ноги» (очень дорого)', opts: [
        { txt: 'costar un ojo de la cara', em: '👁️' },
        { txt: 'costar mucho dinero',      em: '💰' },
        { txt: 'comer mucho pan',          em: '🍞' },
        { txt: 'caer bien',                em: '😊' },
      ], correct: 0 },
      { t: 'pick', q: '«Лить как из ведра» (cats and dogs)', opts: [
        { txt: 'estar como un pez en el agua', em: '🐟' },
        { txt: 'llover a cántaros',            em: '☔' },
        { txt: 'estar en las nubes',           em: '☁️' },
        { txt: 'comer como un pájaro',         em: '🐦' },
      ], correct: 1 },
      { t: 'pick', q: '«Витать в облаках»', opts: [
        { txt: 'estar en las nubes',      em: '☁️' },
        { txt: 'estar en el cielo',       em: '☀️' },
        { txt: 'estar en la luna',        em: '🌙' },
        { txt: 'estar en el agua',        em: '💧' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['costar un ojo de la cara', 'очень дорого'],
        ['llover a cántaros',         'лить как из ведра'],
        ['estar en las nubes',        'витать в облаках'],
        ['caer bien',                 'нравиться (о человеке)'],
      ]},
      { t: 'match', pairs: [
        ['tomar el pelo',          'дразнить'],
        ['no tener pelos en la lengua','прямо говорить'],
        ['ser pan comido',         'легче лёгкого'],
        ['hablar por los codos',   'болтать без умолку'],
      ]},
      { t: 'translate', from: 'Это очень легко (=хлеб с маслом)', tiles: ['es', 'pan', 'comido', 'come'], answer: ['es', 'pan', 'comido'] },
      { t: 'fill', sentence: ['Hoy', null, 'a cántaros.'], target: 'llueve', opts: ['llueve', 'llora', 'lleva'], hint: 'сегодня льёт как из ведра' },
      { t: 'fill', sentence: ['No me tomes el', null, '.'], target: 'pelo', opts: ['pelo', 'café', 'pan'], hint: 'не дразни меня' },
      { t: 'typed', from: 'Ты всегда витаешь в облаках', answer: 'siempre estás en las nubes', answers: ['siempre estás en las nubes', 'tú siempre estás en las nubes'], hint: 'estar en las nubes' },
    ],
  },

  // ── 149. Refranes y dichos ────────────────────────────
  {
    id: 'l149', name: 'Refranes', emoji: '📜', desc: 'Proverbios populares',
    hearts: 4,
    exercises: [
      { t: 'pick', q: '«Тише едешь — дальше будешь»', opts: [
        { txt: 'no por mucho madrugar amanece más temprano', em: '🌅' },
        { txt: 'a quien madruga, Dios le ayuda',             em: '☀️' },
        { txt: 'más vale tarde que nunca',                   em: '⏰' },
        { txt: 'al mal tiempo, buena cara',                  em: '😊' },
      ], correct: 0 },
      { t: 'pick', q: '«Лучше поздно, чем никогда»', opts: [
        { txt: 'más vale tarde que nunca',       em: '⏰' },
        { txt: 'más vale pájaro en mano',        em: '🐦' },
        { txt: 'más vale prevenir que curar',    em: '🛡️' },
        { txt: 'más vale solo que mal acompañado',em: '👤' },
      ], correct: 0 },
      { t: 'pick', q: '«Кто рано встаёт, тому Бог подаёт»', opts: [
        { txt: 'a quien madruga, Dios le ayuda', em: '🌅' },
        { txt: 'a caballo regalado',             em: '🐎' },
        { txt: 'en boca cerrada',                em: '🤐' },
        { txt: 'ojos que no ven',                em: '👀' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['más vale tarde que nunca',     'лучше поздно, чем никогда'],
        ['a quien madruga, Dios le ayuda','кто рано встаёт...'],
        ['en boca cerrada no entran moscas','молчание — золото'],
        ['ojos que no ven, corazón que no siente','с глаз долой — из сердца вон'],
      ]},
      { t: 'match', pairs: [
        ['más vale prevenir que curar',  'лучше предупредить, чем лечить'],
        ['no hay mal que por bien no venga','нет худа без добра'],
        ['cada loco con su tema',         'у каждого свой пунктик'],
        ['dime con quién andas',          'скажи мне, кто твой друг'],
      ]},
      { t: 'translate', from: 'Лучше поздно, чем никогда', tiles: ['más', 'vale', 'tarde', 'que', 'nunca', 'siempre'], answer: ['más', 'vale', 'tarde', 'que', 'nunca'] },
      { t: 'fill', sentence: ['Más vale', null, 'que curar.'], target: 'prevenir', opts: ['prevenir', 'comer', 'dormir'], hint: 'лучше предупредить, чем лечить' },
      { t: 'fill', sentence: ['A quien', null, ', Dios le ayuda.'], target: 'madruga', opts: ['madruga', 'duerme', 'come'], hint: 'кто рано встаёт' },
      { t: 'typed', from: 'Нет худа без добра', answer: 'no hay mal que por bien no venga', answers: ['no hay mal que por bien no venga'], hint: 'no hay mal que por bien no venga' },
    ],
  },

  // ── 150. Repaso Maestro III (revisión final L126-L149) ─
  // FINAL MILESTONE — graduation. Mixes grammar (L126-L130), culture (L131-L145),
  // and conversation/idiomatic (L146-L149). Only 2 hearts.
  {
    id: 'l150', name: 'Repaso Maestro III', emoji: '🎓', desc: 'Repaso final (126-149)',
    hearts: 2,
    exercises: [
      // — Grammar block
      { t: 'pick', q: '«Дом был построен»', opts: [
        { txt: 'la casa fue construida', em: '✅' },
        { txt: 'la casa construye',      em: '❌' },
        { txt: 'la casa es construida',  em: '⚠️' },
        { txt: 'la casa se construye',   em: '⚠️' },
      ], correct: 0 },
      { t: 'pick', q: '«Возможно, он придёт»', opts: [
        { txt: 'quizás venga',  em: '✅' },
        { txt: 'quizás viene',  em: '❌' },
        { txt: 'quizás vendrá', em: '❌' },
        { txt: 'quizás vino',   em: '❌' },
      ], correct: 0 },
      { t: 'pick', q: '«Я уже поел, когда ты пришёл»', opts: [
        { txt: 'ya había comido cuando llegaste', em: '✅' },
        { txt: 'ya he comido cuando llegaste',    em: '❌' },
        { txt: 'ya comí cuando llegaste',         em: '⚠️' },
        { txt: 'ya como cuando llegaste',         em: '❌' },
      ], correct: 0 },
      { t: 'pick', q: '«Я бы помог тебе»', opts: [
        { txt: 'te habría ayudado', em: '✅' },
        { txt: 'te había ayudado',  em: '❌' },
        { txt: 'te he ayudado',     em: '❌' },
        { txt: 'te ayudaría',       em: '⚠️' },
      ], correct: 0 },
      // — Culture block
      { t: 'pick', q: '«Танго (откуда?)»', opts: [
        { txt: 'Argentina',  em: '🇦🇷' },
        { txt: 'México',     em: '🇲🇽' },
        { txt: 'España',     em: '🇪🇸' },
        { txt: 'Cuba',       em: '🇨🇺' },
      ], correct: 0 },
      { t: 'pick', q: '«Паэлья (откуда?)»', opts: [
        { txt: 'España',     em: '🇪🇸' },
        { txt: 'Argentina',  em: '🇦🇷' },
        { txt: 'México',     em: '🇲🇽' },
        { txt: 'Perú',       em: '🇵🇪' },
      ], correct: 0 },
      // — Conversation block
      { t: 'pick', q: '«По-моему»', opts: [
        { txt: 'en mi opinión',  em: '💭' },
        { txt: 'sin embargo',    em: '🔀' },
        { txt: 'por supuesto',   em: '✅' },
        { txt: 'en realidad',    em: '⚡' },
      ], correct: 0 },
      // — Mix grammar
      { t: 'match', pairs: [
        ['fue escrito',   'был написан'],
        ['había comido',  'я уже поел'],
        ['habría dicho',  'я бы сказал'],
        ['sea',           'будь (subj)'],
      ]},
      // — Mix culture
      { t: 'match', pairs: [
        ['flamenco',  'фламенко'],
        ['mariachi',  'мариачи'],
        ['gazpacho',  'гаспачо'],
        ['paella',    'паэлья'],
      ]},
      // — Mix conversation/idiom
      { t: 'match', pairs: [
        ['estoy de acuerdo', 'я согласен'],
        ['sin embargo',      'однако'],
        ['en conclusión',    'в заключение'],
        ['por ejemplo',      'например'],
      ]},
      // — Mix news/politics/geography
      { t: 'match', pairs: [
        ['periódico',   'газета'],
        ['gobierno',    'правительство'],
        ['siglo',       'век'],
        ['montaña',     'гора'],
      ]},
      // — Translation: pasiva
      { t: 'translate', from: 'Картина была написана', tiles: ['el', 'cuadro', 'fue', 'pintado', 'pinta'], answer: ['el', 'cuadro', 'fue', 'pintado'] },
      // — Translation: cond. perfecto
      { t: 'translate', from: 'Я бы сказал тебе', tiles: ['te', 'habría', 'dicho', 'dije', 'diría'], answer: ['te', 'habría', 'dicho'] },
      // — Translation: opinión
      { t: 'translate', from: 'По-моему, это правда', tiles: ['en', 'mi', 'opinión', 'es', 'verdad', 'soy'], answer: ['en', 'mi', 'opinión', 'es', 'verdad'] },
      // — Fill: subjuntivo
      { t: 'fill', sentence: ['No creo que', null, 'verdad.'], target: 'sea', opts: ['sea', 'es', 'era'], hint: 'не думаю, что это правда' },
      // — Fill: idiom
      { t: 'fill', sentence: ['Hoy', null, 'a cántaros.'], target: 'llueve', opts: ['llueve', 'llora', 'lleva'], hint: 'сегодня льёт как из ведра' },
      // — Fill: pasiva
      { t: 'fill', sentence: ['El libro', null, 'escrito por Cervantes.'], target: 'fue', opts: ['fue', 'es', 'está'], hint: 'книга была написана Сервантесом' },
      // — Typed: cond. perfecto mastery
      { t: 'typed', from: 'Я бы сказал тебе правду', answer: 'te habría dicho la verdad', answers: ['te habría dicho la verdad', 'te hubiera dicho la verdad'], hint: 'habría / hubiera + part.' },
      // — Typed: idiom mastery
      { t: 'typed', from: 'Лучше поздно, чем никогда', answer: 'más vale tarde que nunca', answers: ['más vale tarde que nunca'], hint: 'más vale tarde que nunca' },
    ],
  },

  // ── 151. Entrevista de trabajo ────────────────────────
  {
    id: 'l151', name: 'Entrevista', emoji: '💼', desc: 'Trabajo, jefe, sueldo',
    exercises: [
      { t: 'pick', q: '«Собеседование»', opts: [
        { txt: 'entrevista',  em: '🗣️' },
        { txt: 'entrada',     em: '🚪' },
        { txt: 'entrega',     em: '📦' },
        { txt: 'entrenador',  em: '🏋️' },
      ], correct: 0 },
      { t: 'pick', q: '«Начальник / босс»', opts: [
        { txt: 'jefe',     em: '👔' },
        { txt: 'jamón',    em: '🍖' },
        { txt: 'jardín',   em: '🌳' },
        { txt: 'juego',    em: '🎮' },
      ], correct: 0 },
      { t: 'pick', q: '«Зарплата»', opts: [
        { txt: 'sueldo',   em: '💰' },
        { txt: 'sueño',    em: '😴' },
        { txt: 'sumo',     em: '🤼' },
        { txt: 'sur',      em: '🧭' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['entrevista',  'собеседование'],
        ['jefe',        'начальник'],
        ['empleado',    'работник'],
        ['contrato',    'контракт'],
      ]},
      { t: 'match', pairs: [
        ['sueldo',      'зарплата'],
        ['horario',     'график'],
        ['experiencia', 'опыт'],
        ['vacaciones',  'отпуск'],
      ]},
      { t: 'translate', from: 'У меня собеседование завтра', tiles: ['tengo', 'una', 'entrevista', 'mañana', 'hoy'], answer: ['tengo', 'una', 'entrevista', 'mañana'] },
      { t: 'fill', sentence: ['Mi', null, 'es muy amable.'], target: 'jefe', opts: ['jefe', 'juego', 'jamón'], hint: 'мой начальник очень добрый' },
      { t: 'typed', from: 'Какая твоя зарплата?', answer: '¿cuál es tu sueldo?', answers: ['¿cuál es tu sueldo?', 'cuál es tu sueldo', '¿cuánto es tu sueldo?'], hint: 'cuál / cuánto + tu sueldo' },
    ],
  },

  // ── 152. Currículum y carrera ─────────────────────────
  {
    id: 'l152', name: 'Carrera', emoji: '📄', desc: 'CV, profesión, formación',
    exercises: [
      { t: 'pick', q: '«Резюме / CV»', opts: [
        { txt: 'currículum',  em: '📄' },
        { txt: 'cumbre',      em: '⛰️' },
        { txt: 'cumpleaños',  em: '🎂' },
        { txt: 'cura',        em: '⛪' },
      ], correct: 0 },
      { t: 'pick', q: '«Опыт работы»', opts: [
        { txt: 'experiencia laboral', em: '💼' },
        { txt: 'experiencia mortal',  em: '⚠️' },
        { txt: 'experiencia social',  em: '👥' },
        { txt: 'experiencia rara',    em: '❓' },
      ], correct: 0 },
      { t: 'pick', q: '«Образование»', opts: [
        { txt: 'edificio',   em: '🏢' },
        { txt: 'educación',  em: '🎓' },
        { txt: 'editorial',  em: '📚' },
        { txt: 'efecto',     em: '✨' },
      ], correct: 1 },
      { t: 'match', pairs: [
        ['currículum',   'резюме'],
        ['educación',    'образование'],
        ['experiencia',  'опыт'],
        ['habilidad',    'навык'],
      ]},
      { t: 'match', pairs: [
        ['carrera',     'карьера / специальность'],
        ['título',      'диплом / звание'],
        ['idioma',      'язык'],
        ['referencia',  'рекомендация'],
      ]},
      { t: 'translate', from: 'Я говорю на трёх языках', tiles: ['hablo', 'tres', 'idiomas', 'lengua'], answer: ['hablo', 'tres', 'idiomas'] },
      { t: 'fill', sentence: ['Tengo cinco años de', null, '.'], target: 'experiencia', opts: ['experiencia', 'educación', 'salario'], hint: 'у меня пять лет опыта' },
      { t: 'typed', from: 'Я отправляю своё резюме', answer: 'envío mi currículum', answers: ['envío mi currículum', 'mando mi currículum', 'yo envío mi currículum'], hint: 'enviar / mandar + mi currículum' },
    ],
  },

  // ── 153. Reuniones de trabajo ─────────────────────────
  {
    id: 'l153', name: 'Reuniones', emoji: '🤝', desc: 'Junta, agenda, presentación',
    exercises: [
      { t: 'pick', q: '«Совещание / встреча»', opts: [
        { txt: 'reunión',   em: '🤝' },
        { txt: 'recepción', em: '🛎️' },
        { txt: 'reciclar',  em: '♻️' },
        { txt: 'regalo',    em: '🎁' },
      ], correct: 0 },
      { t: 'pick', q: '«Повестка дня»', opts: [
        { txt: 'agenda',    em: '📋' },
        { txt: 'arena',     em: '🏖️' },
        { txt: 'avión',     em: '✈️' },
        { txt: 'almacén',   em: '🏬' },
      ], correct: 0 },
      { t: 'pick', q: '«Презентация»', opts: [
        { txt: 'presentación',  em: '📊' },
        { txt: 'presión',       em: '⏲️' },
        { txt: 'préstamo',      em: '💵' },
        { txt: 'presencia',     em: '👤' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['reunión',       'встреча'],
        ['agenda',        'повестка дня'],
        ['presentación',  'презентация'],
        ['proyecto',      'проект'],
      ]},
      { t: 'match', pairs: [
        ['proponer',  'предлагать'],
        ['decidir',   'решать'],
        ['discutir',  'обсуждать'],
        ['acordar',   'договариваться'],
      ]},
      { t: 'translate', from: 'У нас есть встреча в три', tiles: ['tenemos', 'una', 'reunión', 'a', 'las', 'tres'], answer: ['tenemos', 'una', 'reunión', 'a', 'las', 'tres'] },
      { t: 'fill', sentence: ['Vamos a', null, 'el proyecto.'], target: 'discutir', opts: ['discutir', 'dormir', 'desayunar'], hint: 'мы обсудим проект' },
      { t: 'typed', from: 'Я делаю презентацию завтра', answer: 'hago una presentación mañana', answers: ['hago una presentación mañana', 'mañana hago una presentación', 'doy una presentación mañana'], hint: 'hago / doy + una presentación' },
    ],
  },

  // ── 154. Email profesional ────────────────────────────
  {
    id: 'l154', name: 'Email pro', emoji: '✉️', desc: 'Asunto, adjunto, saludo formal',
    exercises: [
      { t: 'pick', q: '«Тема (письма)»', opts: [
        { txt: 'asunto',    em: '📝' },
        { txt: 'asiento',   em: '🪑' },
        { txt: 'asado',     em: '🍖' },
        { txt: 'asilo',     em: '🏠' },
      ], correct: 0 },
      { t: 'pick', q: '«Вложение / приложение к письму»', opts: [
        { txt: 'adjunto',  em: '📎' },
        { txt: 'adulto',   em: '👨' },
        { txt: 'adverbio', em: '🔤' },
        { txt: 'adiós',    em: '👋' },
      ], correct: 0 },
      { t: 'pick', q: '«С уважением» (formal)', opts: [
        { txt: 'atentamente',   em: '🤝' },
        { txt: 'atentamente',   em: '🤝' },
        { txt: 'urgentemente',  em: '⚡' },
        { txt: 'felizmente',    em: '😊' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['asunto',       'тема'],
        ['adjunto',      'вложение'],
        ['destinatario', 'получатель'],
        ['remitente',    'отправитель'],
      ]},
      { t: 'match', pairs: [
        ['estimado/a',     'уважаемый/ая'],
        ['atentamente',    'с уважением'],
        ['un cordial saludo','с сердечным приветом'],
        ['quedo a la espera', 'жду ответа'],
      ]},
      { t: 'translate', from: 'Я прикрепляю документ', tiles: ['adjunto', 'el', 'documento', 'adjuntar', 'la'], answer: ['adjunto', 'el', 'documento'] },
      { t: 'fill', sentence: [null, 'señor Pérez, le escribo para...'], target: 'Estimado', opts: ['Estimado', 'Hola', 'Querido'], hint: 'Уважаемый господин Перес (формально)' },
      { t: 'typed', from: 'Жду вашего ответа', answer: 'quedo a la espera de su respuesta', answers: ['quedo a la espera de su respuesta', 'espero su respuesta'], hint: 'quedo a la espera / espero su respuesta' },
    ],
  },

  // ── 155. Repaso 25 (revisión de L151-L154) ────────────
  {
    id: 'l155', name: 'Repaso 25', emoji: '💼', desc: 'Repaso L151-L154',
    hearts: 2,
    exercises: [
      { t: 'pick', q: '«Собеседование»', opts: [
        { txt: 'entrevista',  em: '🗣️' },
        { txt: 'entrega',     em: '📦' },
        { txt: 'entrada',     em: '🚪' },
        { txt: 'entierro',    em: '⚰️' },
      ], correct: 0 },
      { t: 'pick', q: '«Резюме»', opts: [
        { txt: 'currículum',  em: '📄' },
        { txt: 'curiosidad',  em: '🤔' },
        { txt: 'cura',        em: '⛪' },
        { txt: 'cumbre',      em: '⛰️' },
      ], correct: 0 },
      { t: 'pick', q: '«Встреча»', opts: [
        { txt: 'reunión',   em: '🤝' },
        { txt: 'recepción', em: '🛎️' },
        { txt: 'regalo',    em: '🎁' },
        { txt: 'reportaje', em: '📰' },
      ], correct: 0 },
      { t: 'pick', q: '«Тема (письма)»', opts: [
        { txt: 'asunto',    em: '📝' },
        { txt: 'asiento',   em: '🪑' },
        { txt: 'asilo',     em: '🏠' },
        { txt: 'asado',     em: '🍖' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['jefe',       'начальник'],
        ['empleado',   'работник'],
        ['sueldo',     'зарплата'],
        ['contrato',   'контракт'],
      ]},
      { t: 'match', pairs: [
        ['carrera',     'специальность'],
        ['título',      'диплом'],
        ['idioma',      'язык'],
        ['habilidad',   'навык'],
      ]},
      { t: 'match', pairs: [
        ['agenda',       'повестка'],
        ['presentación', 'презентация'],
        ['adjunto',      'вложение'],
        ['estimado',     'уважаемый'],
      ]},
      { t: 'translate', from: 'У меня собеседование завтра', tiles: ['tengo', 'una', 'entrevista', 'mañana'], answer: ['tengo', 'una', 'entrevista', 'mañana'] },
      { t: 'translate', from: 'Я отправляю своё резюме', tiles: ['envío', 'mi', 'currículum', 'tu'], answer: ['envío', 'mi', 'currículum'] },
      { t: 'fill', sentence: ['Vamos a', null, 'el proyecto.'], target: 'discutir', opts: ['discutir', 'dormir', 'desayunar'], hint: 'мы обсудим проект' },
      { t: 'fill', sentence: [null, 'señor Pérez, le escribo para...'], target: 'Estimado', opts: ['Estimado', 'Querido', 'Hola'], hint: 'Уважаемый господин Перес' },
      { t: 'typed', from: 'У меня пять лет опыта', answer: 'tengo cinco años de experiencia', answers: ['tengo cinco años de experiencia'], hint: 'tengo X años de experiencia' },
    ],
  },

  // ── 156. La ciencia ───────────────────────────────────
  {
    id: 'l156', name: 'Ciencia', emoji: '🔬', desc: 'Investigar, descubrir, experimentar',
    exercises: [
      { t: 'pick', q: '«Наука»', opts: [
        { txt: 'ciencia',  em: '🔬' },
        { txt: 'cielo',    em: '☁️' },
        { txt: 'cien',     em: '💯' },
        { txt: 'cierto',   em: '✅' },
      ], correct: 0 },
      { t: 'pick', q: '«Эксперимент / опыт»', opts: [
        { txt: 'experimento',  em: '🧪' },
        { txt: 'expresión',    em: '😀' },
        { txt: 'experto',      em: '👨‍🔬' },
        { txt: 'explosión',    em: '💥' },
      ], correct: 0 },
      { t: 'pick', q: '«Учёный»', opts: [
        { txt: 'cocinero',   em: '👨‍🍳' },
        { txt: 'científico', em: '👨‍🔬' },
        { txt: 'capitán',    em: '👨‍✈️' },
        { txt: 'cantante',   em: '🎤' },
      ], correct: 1 },
      { t: 'match', pairs: [
        ['ciencia',      'наука'],
        ['científico',   'учёный'],
        ['experimento',  'эксперимент'],
        ['teoría',       'теория'],
      ]},
      { t: 'match', pairs: [
        ['investigar',   'исследовать'],
        ['descubrir',    'открывать'],
        ['probar',       'доказывать'],
        ['comprobar',    'проверять'],
      ]},
      { t: 'translate', from: 'Учёные проводят эксперимент', tiles: ['los', 'científicos', 'hacen', 'un', 'experimento'], answer: ['los', 'científicos', 'hacen', 'un', 'experimento'] },
      { t: 'fill', sentence: ['Es una', null, 'muy interesante.'], target: 'teoría', opts: ['teoría', 'tienda', 'tarjeta'], hint: 'это очень интересная теория' },
      { t: 'typed', from: 'Наука изменяет мир', answer: 'la ciencia cambia el mundo', answers: ['la ciencia cambia el mundo'], hint: 'la ciencia + cambiar + el mundo' },
    ],
  },

  // ── 157. Espacio y astronomía ─────────────────────────
  {
    id: 'l157', name: 'Espacio', emoji: '🚀', desc: 'Estrellas, planetas, cohetes',
    exercises: [
      { t: 'pick', q: '«Звезда»', opts: [
        { txt: 'estrella', em: '⭐' },
        { txt: 'escuela',  em: '🏫' },
        { txt: 'esquí',    em: '⛷️' },
        { txt: 'esposa',   em: '👰' },
      ], correct: 0 },
      { t: 'pick', q: '«Планета»', opts: [
        { txt: 'planeta',  em: '🪐' },
        { txt: 'plata',    em: '🥈' },
        { txt: 'plato',    em: '🍽️' },
        { txt: 'playa',    em: '🏖️' },
      ], correct: 0 },
      { t: 'pick', q: '«Ракета»', opts: [
        { txt: 'cohete',   em: '🚀' },
        { txt: 'coche',    em: '🚗' },
        { txt: 'cocina',   em: '🍳' },
        { txt: 'colina',   em: '⛰️' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['estrella',  'звезда'],
        ['planeta',   'планета'],
        ['galaxia',   'галактика'],
        ['universo',  'вселенная'],
      ]},
      { t: 'match', pairs: [
        ['cohete',     'ракета'],
        ['astronauta', 'космонавт'],
        ['Tierra',     'Земля'],
        ['Luna',       'Луна'],
      ]},
      { t: 'translate', from: 'Космонавт идёт на Луну', tiles: ['el', 'astronauta', 'va', 'a', 'la', 'Luna'], answer: ['el', 'astronauta', 'va', 'a', 'la', 'Luna'] },
      { t: 'fill', sentence: ['La Tierra es un', null, '.'], target: 'planeta', opts: ['planeta', 'pueblo', 'plato'], hint: 'Земля — это планета' },
      { t: 'typed', from: 'Я хочу путешествовать в космос', answer: 'quiero viajar al espacio', answers: ['quiero viajar al espacio'], hint: 'viajar al espacio' },
    ],
  },

  // ── 158. Inteligencia artificial ──────────────────────
  {
    id: 'l158', name: 'IA', emoji: '🤖', desc: 'Robot, algoritmo, datos',
    exercises: [
      { t: 'pick', q: '«Робот»', opts: [
        { txt: 'robot',   em: '🤖' },
        { txt: 'ropa',    em: '👕' },
        { txt: 'rosa',    em: '🌹' },
        { txt: 'ratón',   em: '🐭' },
      ], correct: 0 },
      { t: 'pick', q: '«Искусственный интеллект»', opts: [
        { txt: 'inteligencia artificial', em: '🤖' },
        { txt: 'inteligencia natural',     em: '🧠' },
        { txt: 'intención antigua',        em: '📜' },
        { txt: 'industria activa',         em: '🏭' },
      ], correct: 0 },
      { t: 'pick', q: '«Данные»', opts: [
        { txt: 'datos',    em: '📊' },
        { txt: 'dados',    em: '🎲' },
        { txt: 'dedos',    em: '🖐️' },
        { txt: 'días',     em: '📅' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['robot',       'робот'],
        ['algoritmo',   'алгоритм'],
        ['datos',       'данные'],
        ['modelo',      'модель'],
      ]},
      { t: 'match', pairs: [
        ['aprender',    'обучаться'],
        ['entrenar',    'тренировать'],
        ['predecir',    'предсказывать'],
        ['automático',  'автоматический'],
      ]},
      { t: 'translate', from: 'Робот понимает голос', tiles: ['el', 'robot', 'entiende', 'la', 'voz', 'oír'], answer: ['el', 'robot', 'entiende', 'la', 'voz'] },
      { t: 'fill', sentence: ['Necesitamos más', null, '.'], target: 'datos', opts: ['datos', 'días', 'dedos'], hint: 'нам нужно больше данных' },
      { t: 'typed', from: 'Искусственный интеллект изменяет всё', answer: 'la inteligencia artificial cambia todo', answers: ['la inteligencia artificial cambia todo', 'la ia cambia todo'], hint: 'la inteligencia artificial / la IA' },
    ],
  },

  // ── 159. Ingeniería e invenciones ─────────────────────
  {
    id: 'l159', name: 'Invenciones', emoji: '⚙️', desc: 'Construir, diseñar, máquinas',
    exercises: [
      { t: 'pick', q: '«Изобретение»', opts: [
        { txt: 'invención',  em: '💡' },
        { txt: 'invierno',   em: '❄️' },
        { txt: 'inicio',     em: '🚀' },
        { txt: 'isla',       em: '🏝️' },
      ], correct: 0 },
      { t: 'pick', q: '«Машина / станок»', opts: [
        { txt: 'máquina',  em: '⚙️' },
        { txt: 'mañana',   em: '🌅' },
        { txt: 'manzana',  em: '🍎' },
        { txt: 'maleta',   em: '🧳' },
      ], correct: 0 },
      { t: 'pick', q: '«Изобретать»', opts: [
        { txt: 'inventar', em: '💡' },
        { txt: 'inventar', em: '💡' },
        { txt: 'imprimir', em: '🖨️' },
        { txt: 'instalar', em: '🔧' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['invención',   'изобретение'],
        ['máquina',     'машина'],
        ['ingeniero',   'инженер'],
        ['diseño',      'дизайн'],
      ]},
      { t: 'match', pairs: [
        ['inventar',     'изобретать'],
        ['construir',    'строить'],
        ['diseñar',      'проектировать'],
        ['funcionar',    'работать (о приборе)'],
      ]},
      { t: 'translate', from: 'Эта машина не работает', tiles: ['esta', 'máquina', 'no', 'funciona', 'trabajar'], answer: ['esta', 'máquina', 'no', 'funciona'] },
      { t: 'fill', sentence: ['Edison', null, 'la bombilla.'], target: 'inventó', opts: ['inventó', 'imprimió', 'instaló'], hint: 'Эдисон изобрёл лампочку' },
      { t: 'typed', from: 'Инженеры строят мост', answer: 'los ingenieros construyen un puente', answers: ['los ingenieros construyen un puente', 'los ingenieros construyen el puente'], hint: 'construir un / el puente' },
    ],
  },

  // ── 160. Repaso 26 (revisión de L156-L159) ────────────
  {
    id: 'l160', name: 'Repaso 26', emoji: '🔬', desc: 'Repaso L156-L159',
    hearts: 2,
    exercises: [
      { t: 'pick', q: '«Наука»', opts: [
        { txt: 'ciencia',  em: '🔬' },
        { txt: 'cielo',    em: '☁️' },
        { txt: 'cierto',   em: '✅' },
        { txt: 'cien',     em: '💯' },
      ], correct: 0 },
      { t: 'pick', q: '«Планета»', opts: [
        { txt: 'planeta',  em: '🪐' },
        { txt: 'plato',    em: '🍽️' },
        { txt: 'playa',    em: '🏖️' },
        { txt: 'plata',    em: '🥈' },
      ], correct: 0 },
      { t: 'pick', q: '«Робот»', opts: [
        { txt: 'robot',   em: '🤖' },
        { txt: 'ratón',   em: '🐭' },
        { txt: 'rosa',    em: '🌹' },
        { txt: 'rico',    em: '💰' },
      ], correct: 0 },
      { t: 'pick', q: '«Изобретение»', opts: [
        { txt: 'invención',  em: '💡' },
        { txt: 'invierno',   em: '❄️' },
        { txt: 'invitación', em: '✉️' },
        { txt: 'invalidez',  em: '♿' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['científico',  'учёный'],
        ['experimento', 'эксперимент'],
        ['teoría',      'теория'],
        ['investigar',  'исследовать'],
      ]},
      { t: 'match', pairs: [
        ['estrella',  'звезда'],
        ['galaxia',   'галактика'],
        ['cohete',    'ракета'],
        ['astronauta','космонавт'],
      ]},
      { t: 'match', pairs: [
        ['algoritmo', 'алгоритм'],
        ['datos',     'данные'],
        ['máquina',   'машина'],
        ['ingeniero', 'инженер'],
      ]},
      { t: 'translate', from: 'Учёные открыли новую планету', tiles: ['los', 'científicos', 'descubrieron', 'un', 'nuevo', 'planeta'], answer: ['los', 'científicos', 'descubrieron', 'un', 'nuevo', 'planeta'] },
      { t: 'translate', from: 'Эта машина не работает', tiles: ['esta', 'máquina', 'no', 'funciona'], answer: ['esta', 'máquina', 'no', 'funciona'] },
      { t: 'fill', sentence: ['La Tierra es un', null, '.'], target: 'planeta', opts: ['planeta', 'plato', 'pueblo'], hint: 'Земля — это планета' },
      { t: 'fill', sentence: ['Necesitamos más', null, '.'], target: 'datos', opts: ['datos', 'dedos', 'días'], hint: 'нам нужно больше данных' },
      { t: 'typed', from: 'Я хочу быть учёным', answer: 'quiero ser científico', answers: ['quiero ser científico', 'quiero ser científica'], hint: 'quiero ser + científico/a' },
    ],
  },

  // ── 161. Dentista ─────────────────────────────────────
  {
    id: 'l161', name: 'Dentista', emoji: '🦷', desc: 'Dientes, caries, dolor',
    exercises: [
      { t: 'pick', q: '«Зуб»', opts: [
        { txt: 'diente',   em: '🦷' },
        { txt: 'dedo',     em: '🖐️' },
        { txt: 'día',      em: '☀️' },
        { txt: 'dios',     em: '⛪' },
      ], correct: 0 },
      { t: 'pick', q: '«Стоматолог»', opts: [
        { txt: 'dentista', em: '🦷' },
        { txt: 'doctor',   em: '👨‍⚕️' },
        { txt: 'director', em: '👔' },
        { txt: 'discípulo',em: '👨‍🎓' },
      ], correct: 0 },
      { t: 'pick', q: '«Зубная щётка»', opts: [
        { txt: 'cepillo de dientes', em: '🪥' },
        { txt: 'cuchillo',           em: '🔪' },
        { txt: 'cuchara',            em: '🥄' },
        { txt: 'cuello',             em: '👔' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['diente',    'зуб'],
        ['dentista',  'стоматолог'],
        ['caries',    'кариес'],
        ['encía',     'десна'],
      ]},
      { t: 'match', pairs: [
        ['cepillo de dientes', 'зубная щётка'],
        ['pasta de dientes',   'зубная паста'],
        ['hilo dental',        'зубная нить'],
        ['boca',               'рот'],
      ]},
      { t: 'translate', from: 'У меня болит зуб', tiles: ['me', 'duele', 'un', 'diente', 'la', 'dolor'], answer: ['me', 'duele', 'un', 'diente'] },
      { t: 'fill', sentence: ['Voy al', null, 'mañana.'], target: 'dentista', opts: ['dentista', 'director', 'doctor'], hint: 'я иду к стоматологу завтра' },
      { t: 'typed', from: 'Я чищу зубы каждый день', answer: 'me cepillo los dientes cada día', answers: ['me cepillo los dientes cada día', 'me cepillo los dientes todos los días', 'me lavo los dientes cada día'], hint: 'me cepillo / me lavo los dientes' },
    ],
  },

  // ── 162. Cirugía y operaciones ────────────────────────
  {
    id: 'l162', name: 'Cirugía', emoji: '🩺', desc: 'Operación, hospital, recuperación',
    exercises: [
      { t: 'pick', q: '«Операция»', opts: [
        { txt: 'operación',  em: '🩺' },
        { txt: 'opinión',    em: '💭' },
        { txt: 'oportunidad',em: '🍀' },
        { txt: 'orquesta',   em: '🎻' },
      ], correct: 0 },
      { t: 'pick', q: '«Хирург»', opts: [
        { txt: 'cirujano',    em: '🩺' },
        { txt: 'cocinero',    em: '👨‍🍳' },
        { txt: 'conductor',   em: '🚗' },
        { txt: 'cantante',    em: '🎤' },
      ], correct: 0 },
      { t: 'pick', q: '«Анестезия / наркоз»', opts: [
        { txt: 'anestesia',  em: '💉' },
        { txt: 'amistad',    em: '👬' },
        { txt: 'apertura',   em: '🔓' },
        { txt: 'aldea',      em: '🏘️' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['operación',  'операция'],
        ['cirujano',   'хирург'],
        ['anestesia',  'наркоз'],
        ['quirófano',  'операционная'],
      ]},
      { t: 'match', pairs: [
        ['recuperación','восстановление'],
        ['herida',      'рана'],
        ['cicatriz',    'шрам'],
        ['punto',       'шов'],
      ]},
      { t: 'translate', from: 'Хирург делает операцию', tiles: ['el', 'cirujano', 'hace', 'una', 'operación', 'pero'], answer: ['el', 'cirujano', 'hace', 'una', 'operación'] },
      { t: 'fill', sentence: ['La', null, 'fue exitosa.'], target: 'operación', opts: ['operación', 'opinión', 'oportunidad'], hint: 'операция была успешной' },
      { t: 'typed', from: 'Мне нужна операция', answer: 'necesito una operación', answers: ['necesito una operación', 'necesito una cirugía'], hint: 'necesito una operación / cirugía' },
    ],
  },

  // ── 163. Embarazo ─────────────────────────────────────
  {
    id: 'l163', name: 'Embarazo', emoji: '🤰', desc: 'Bebé, parto, esperar',
    exercises: [
      { t: 'pick', q: '«Беременная»', opts: [
        { txt: 'embarazada', em: '🤰' },
        { txt: 'enojada',    em: '😠' },
        { txt: 'enferma',    em: '🤒' },
        { txt: 'enamorada',  em: '😍' },
      ], correct: 0 },
      { t: 'pick', q: '«Роды»', opts: [
        { txt: 'parto',    em: '👶' },
        { txt: 'parque',   em: '🌳' },
        { txt: 'partido',  em: '⚽' },
        { txt: 'pared',    em: '🧱' },
      ], correct: 0 },
      { t: 'pick', q: '«Беременность»', opts: [
        { txt: 'embarazo',  em: '🤰' },
        { txt: 'embarque',  em: '🛬' },
        { txt: 'embajada',  em: '🏛️' },
        { txt: 'emoción',   em: '😊' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['embarazo',   'беременность'],
        ['embarazada', 'беременная'],
        ['bebé',       'малыш'],
        ['parto',      'роды'],
      ]},
      { t: 'match', pairs: [
        ['esperar un bebé', 'ждать ребёнка'],
        ['mes',             'месяц'],
        ['recién nacido',   'новорождённый'],
        ['guardería',       'детский сад'],
      ]},
      { t: 'translate', from: 'Она беременна 8 месяцев', tiles: ['ella', 'está', 'embarazada', 'de', 'ocho', 'meses'], answer: ['ella', 'está', 'embarazada', 'de', 'ocho', 'meses'] },
      { t: 'fill', sentence: ['Mi hermana está', null, '.'], target: 'embarazada', opts: ['embarazada', 'enferma', 'enojada'], hint: 'моя сестра беременна' },
      { t: 'typed', from: 'Мы ждём ребёнка', answer: 'esperamos un bebé', answers: ['esperamos un bebé', 'estamos esperando un bebé'], hint: 'esperar un bebé' },
    ],
  },

  // ── 164. Salud mental ─────────────────────────────────
  {
    id: 'l164', name: 'Salud mental', emoji: '🧠', desc: 'Estrés, terapia, ansiedad',
    exercises: [
      { t: 'pick', q: '«Стресс»', opts: [
        { txt: 'estrés',   em: '😫' },
        { txt: 'estreno',  em: '🎬' },
        { txt: 'estación', em: '🚉' },
        { txt: 'estilo',   em: '👗' },
      ], correct: 0 },
      { t: 'pick', q: '«Тревога»', opts: [
        { txt: 'ansiedad',  em: '😰' },
        { txt: 'amistad',   em: '👬' },
        { txt: 'aldea',     em: '🏘️' },
        { txt: 'antigüedad',em: '⏳' },
      ], correct: 0 },
      { t: 'pick', q: '«Терапия»', opts: [
        { txt: 'terapia',   em: '💬' },
        { txt: 'tarea',     em: '📝' },
        { txt: 'tijera',    em: '✂️' },
        { txt: 'tortilla',  em: '🌯' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['estrés',     'стресс'],
        ['ansiedad',   'тревога'],
        ['depresión',  'депрессия'],
        ['terapia',    'терапия'],
      ]},
      { t: 'match', pairs: [
        ['relajarse',   'расслабляться'],
        ['respirar',    'дышать'],
        ['descansar',   'отдыхать'],
        ['meditar',     'медитировать'],
      ]},
      { t: 'translate', from: 'Мне нужно расслабиться', tiles: ['necesito', 'relajarme', 'descansar', 'me'], answer: ['necesito', 'relajarme'] },
      { t: 'fill', sentence: ['Tengo mucho', null, 'en el trabajo.'], target: 'estrés', opts: ['estrés', 'estilo', 'estreno'], hint: 'у меня много стресса на работе' },
      { t: 'typed', from: 'Я хожу к психологу', answer: 'voy al psicólogo', answers: ['voy al psicólogo', 'voy a la psicóloga', 'voy a terapia'], hint: 'ir al psicólogo / a terapia' },
    ],
  },

  // ── 165. Repaso 27 (revisión de L161-L164) ────────────
  {
    id: 'l165', name: 'Repaso 27', emoji: '🩺', desc: 'Repaso L161-L164',
    hearts: 2,
    exercises: [
      { t: 'pick', q: '«Зуб»', opts: [
        { txt: 'diente', em: '🦷' },
        { txt: 'dedo',   em: '🖐️' },
        { txt: 'día',    em: '☀️' },
        { txt: 'duele',  em: '🤕' },
      ], correct: 0 },
      { t: 'pick', q: '«Хирург»', opts: [
        { txt: 'cirujano', em: '🩺' },
        { txt: 'cocinero', em: '👨‍🍳' },
        { txt: 'cantante', em: '🎤' },
        { txt: 'conductor',em: '🚗' },
      ], correct: 0 },
      { t: 'pick', q: '«Беременная»', opts: [
        { txt: 'embarazada', em: '🤰' },
        { txt: 'enojada',    em: '😠' },
        { txt: 'enamorada',  em: '😍' },
        { txt: 'enferma',    em: '🤒' },
      ], correct: 0 },
      { t: 'pick', q: '«Стресс»', opts: [
        { txt: 'estrés',   em: '😫' },
        { txt: 'estilo',   em: '👗' },
        { txt: 'estreno',  em: '🎬' },
        { txt: 'estación', em: '🚉' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['dentista',         'стоматолог'],
        ['cepillo de dientes','зубная щётка'],
        ['caries',           'кариес'],
        ['boca',             'рот'],
      ]},
      { t: 'match', pairs: [
        ['operación',  'операция'],
        ['anestesia',  'наркоз'],
        ['herida',     'рана'],
        ['cicatriz',   'шрам'],
      ]},
      { t: 'match', pairs: [
        ['parto',     'роды'],
        ['bebé',      'малыш'],
        ['ansiedad',  'тревога'],
        ['terapia',   'терапия'],
      ]},
      { t: 'translate', from: 'У меня болит зуб', tiles: ['me', 'duele', 'un', 'diente'], answer: ['me', 'duele', 'un', 'diente'] },
      { t: 'translate', from: 'Мы ждём ребёнка', tiles: ['esperamos', 'un', 'bebé', 'a'], answer: ['esperamos', 'un', 'bebé'] },
      { t: 'fill', sentence: ['Voy al', null, 'mañana.'], target: 'dentista', opts: ['dentista', 'director', 'doctor'], hint: 'я иду к стоматологу завтра' },
      { t: 'fill', sentence: ['Tengo mucho', null, '.'], target: 'estrés', opts: ['estrés', 'estilo', 'estación'], hint: 'у меня много стресса' },
      { t: 'typed', from: 'Мне нужна операция', answer: 'necesito una operación', answers: ['necesito una operación', 'necesito una cirugía'], hint: 'necesito una operación / cirugía' },
    ],
  },

  // ── 166. Inversiones ──────────────────────────────────
  {
    id: 'l166', name: 'Inversiones', emoji: '📈', desc: 'Bolsa, acciones, ahorrar',
    exercises: [
      { t: 'pick', q: '«Биржа»', opts: [
        { txt: 'bolsa',   em: '📈' },
        { txt: 'banda',   em: '🎸' },
        { txt: 'botella', em: '🍾' },
        { txt: 'bombilla',em: '💡' },
      ], correct: 0 },
      { t: 'pick', q: '«Акция (на бирже)»', opts: [
        { txt: 'acción',   em: '📊' },
        { txt: 'acento',   em: '🔤' },
        { txt: 'aceite',   em: '🛢️' },
        { txt: 'acera',    em: '🚶' },
      ], correct: 0 },
      { t: 'pick', q: '«Инвестировать»', opts: [
        { txt: 'invertir',  em: '💸' },
        { txt: 'invitar',   em: '🎉' },
        { txt: 'inventar',  em: '💡' },
        { txt: 'investigar',em: '🔍' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['bolsa',      'биржа'],
        ['acción',     'акция'],
        ['inversión',  'инвестиция'],
        ['interés',    'процент'],
      ]},
      { t: 'match', pairs: [
        ['invertir',  'инвестировать'],
        ['ganar',     'выигрывать / зарабатывать'],
        ['perder',    'терять'],
        ['ahorrar',   'копить'],
      ]},
      { t: 'translate', from: 'Я инвестирую в акции', tiles: ['invierto', 'en', 'acciones', 'invertir'], answer: ['invierto', 'en', 'acciones'] },
      { t: 'fill', sentence: ['Tengo que', null, 'más dinero.'], target: 'ahorrar', opts: ['ahorrar', 'comer', 'dormir'], hint: 'мне нужно копить больше денег' },
      { t: 'typed', from: 'Я потерял деньги на бирже', answer: 'perdí dinero en la bolsa', answers: ['perdí dinero en la bolsa', 'he perdido dinero en la bolsa'], hint: 'perder en la bolsa' },
    ],
  },

  // ── 167. Impuestos ────────────────────────────────────
  {
    id: 'l167', name: 'Impuestos', emoji: '🧾', desc: 'Hacienda, declarar, pagar',
    exercises: [
      { t: 'pick', q: '«Налог»', opts: [
        { txt: 'impuesto', em: '🧾' },
        { txt: 'impreso',  em: '🖨️' },
        { txt: 'impulso',  em: '⚡' },
        { txt: 'imán',     em: '🧲' },
      ], correct: 0 },
      { t: 'pick', q: '«Декларация»', opts: [
        { txt: 'declaración', em: '📄' },
        { txt: 'decoración',  em: '🎀' },
        { txt: 'dedicación',  em: '🎯' },
        { txt: 'devolución',  em: '↩️' },
      ], correct: 0 },
      { t: 'pick', q: '«Налоговая инспекция»', opts: [
        { txt: 'Hacienda',   em: '🏛️' },
        { txt: 'farmacia',   em: '💊' },
        { txt: 'fábrica',    em: '🏭' },
        { txt: 'familia',    em: '👨‍👩‍👧' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['impuesto',    'налог'],
        ['declaración', 'декларация'],
        ['Hacienda',    'налоговая'],
        ['factura',     'счёт-фактура'],
      ]},
      { t: 'match', pairs: [
        ['pagar',      'платить'],
        ['declarar',   'декларировать'],
        ['cobrar',     'получать (деньги)'],
        ['devolver',   'возвращать'],
      ]},
      { t: 'translate', from: 'Я плачу налоги каждый год', tiles: ['pago', 'impuestos', 'cada', 'año', 'meses'], answer: ['pago', 'impuestos', 'cada', 'año'] },
      { t: 'fill', sentence: ['Tengo que hacer la', null, '.'], target: 'declaración', opts: ['declaración', 'decoración', 'dedicación'], hint: 'я должен сделать декларацию' },
      { t: 'typed', from: 'Налоги очень высокие здесь', answer: 'los impuestos son muy altos aquí', answers: ['los impuestos son muy altos aquí', 'aquí los impuestos son muy altos'], hint: 'los impuestos son altos' },
    ],
  },

  // ── 168. Seguros ──────────────────────────────────────
  {
    id: 'l168', name: 'Seguros', emoji: '🛡️', desc: 'Póliza, accidente, cobertura',
    exercises: [
      { t: 'pick', q: '«Страховка»', opts: [
        { txt: 'seguro',   em: '🛡️' },
        { txt: 'sello',    em: '📮' },
        { txt: 'sentido',  em: '🧭' },
        { txt: 'silencio', em: '🤫' },
      ], correct: 0 },
      { t: 'pick', q: '«Полис»', opts: [
        { txt: 'póliza',   em: '📄' },
        { txt: 'policía',  em: '👮' },
        { txt: 'político', em: '🏛️' },
        { txt: 'polvo',    em: '💨' },
      ], correct: 0 },
      { t: 'pick', q: '«Авария»', opts: [
        { txt: 'accidente', em: '💥' },
        { txt: 'acceso',    em: '🚪' },
        { txt: 'aceite',    em: '🛢️' },
        { txt: 'acción',    em: '⚡' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['seguro',     'страховка'],
        ['póliza',     'полис'],
        ['accidente',  'авария'],
        ['cobertura',  'покрытие'],
      ]},
      { t: 'match', pairs: [
        ['asegurar',   'страховать'],
        ['cubrir',     'покрывать'],
        ['reclamar',   'требовать'],
        ['compensar',  'возмещать'],
      ]},
      { t: 'translate', from: 'У меня есть страховка', tiles: ['tengo', 'un', 'seguro', 'segura', 'sin'], answer: ['tengo', 'un', 'seguro'] },
      { t: 'fill', sentence: ['Tuve un', null, 'de coche.'], target: 'accidente', opts: ['accidente', 'acceso', 'aceite'], hint: 'у меня была автоавария' },
      { t: 'typed', from: 'Этот полис не покрывает всё', answer: 'esta póliza no cubre todo', answers: ['esta póliza no cubre todo', 'la póliza no cubre todo'], hint: 'esta póliza no cubre' },
    ],
  },

  // ── 169. Inmobiliaria ─────────────────────────────────
  {
    id: 'l169', name: 'Inmobiliaria', emoji: '🏘️', desc: 'Alquilar, comprar piso, hipoteca',
    exercises: [
      { t: 'pick', q: '«Снимать (квартиру)»', opts: [
        { txt: 'alquilar',  em: '🔑' },
        { txt: 'almorzar',  em: '🍽️' },
        { txt: 'almohada',  em: '🛏️' },
        { txt: 'alma',      em: '👻' },
      ], correct: 0 },
      { t: 'pick', q: '«Квартира (Испания)»', opts: [
        { txt: 'piso',    em: '🏢' },
        { txt: 'peso',    em: '⚖️' },
        { txt: 'paso',    em: '🚶' },
        { txt: 'plato',   em: '🍽️' },
      ], correct: 0 },
      { t: 'pick', q: '«Ипотека»', opts: [
        { txt: 'hipoteca',  em: '🏦' },
        { txt: 'hospital',  em: '🏥' },
        { txt: 'historia',  em: '📜' },
        { txt: 'hierba',    em: '🌿' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['piso',       'квартира'],
        ['alquilar',   'снимать'],
        ['hipoteca',   'ипотека'],
        ['inmueble',   'недвижимость'],
      ]},
      { t: 'match', pairs: [
        ['propietario', 'владелец'],
        ['inquilino',   'арендатор'],
        ['contrato',    'договор'],
        ['fianza',      'залог'],
      ]},
      { t: 'translate', from: 'Я снимаю квартиру в центре', tiles: ['alquilo', 'un', 'piso', 'en', 'el', 'centro'], answer: ['alquilo', 'un', 'piso', 'en', 'el', 'centro'] },
      { t: 'fill', sentence: ['Necesito una', null, 'para comprar la casa.'], target: 'hipoteca', opts: ['hipoteca', 'historia', 'hospital'], hint: 'мне нужна ипотека, чтобы купить дом' },
      { t: 'typed', from: 'Хозяин квартиры очень добрый', answer: 'el propietario del piso es muy amable', answers: ['el propietario del piso es muy amable', 'el dueño del piso es muy amable'], hint: 'propietario / dueño' },
    ],
  },

  // ── 170. Repaso 28 (revisión de L166-L169) ────────────
  {
    id: 'l170', name: 'Repaso 28', emoji: '💰', desc: 'Repaso L166-L169',
    hearts: 2,
    exercises: [
      { t: 'pick', q: '«Биржа»', opts: [
        { txt: 'bolsa',   em: '📈' },
        { txt: 'botella', em: '🍾' },
        { txt: 'banda',   em: '🎸' },
        { txt: 'bombilla',em: '💡' },
      ], correct: 0 },
      { t: 'pick', q: '«Налог»', opts: [
        { txt: 'impuesto', em: '🧾' },
        { txt: 'impulso',  em: '⚡' },
        { txt: 'impreso',  em: '🖨️' },
        { txt: 'imagen',   em: '🖼️' },
      ], correct: 0 },
      { t: 'pick', q: '«Страховка»', opts: [
        { txt: 'seguro',   em: '🛡️' },
        { txt: 'sello',    em: '📮' },
        { txt: 'sentido',  em: '🧭' },
        { txt: 'siglo',    em: '📜' },
      ], correct: 0 },
      { t: 'pick', q: '«Ипотека»', opts: [
        { txt: 'hipoteca',  em: '🏦' },
        { txt: 'historia',  em: '📜' },
        { txt: 'hospital',  em: '🏥' },
        { txt: 'horario',   em: '⏰' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['acción',    'акция'],
        ['interés',   'процент'],
        ['invertir',  'инвестировать'],
        ['ahorrar',   'копить'],
      ]},
      { t: 'match', pairs: [
        ['Hacienda',     'налоговая'],
        ['declaración',  'декларация'],
        ['póliza',       'полис'],
        ['accidente',    'авария'],
      ]},
      { t: 'match', pairs: [
        ['piso',         'квартира'],
        ['alquilar',     'снимать'],
        ['propietario',  'владелец'],
        ['contrato',     'договор'],
      ]},
      { t: 'translate', from: 'Я инвестирую в акции', tiles: ['invierto', 'en', 'acciones', 'compro'], answer: ['invierto', 'en', 'acciones'] },
      { t: 'translate', from: 'У меня есть страховка', tiles: ['tengo', 'un', 'seguro', 'segura'], answer: ['tengo', 'un', 'seguro'] },
      { t: 'fill', sentence: ['Tengo que', null, 'más dinero.'], target: 'ahorrar', opts: ['ahorrar', 'invertir', 'gastar'], hint: 'мне нужно копить больше' },
      { t: 'fill', sentence: ['Pago muchos', null, '.'], target: 'impuestos', opts: ['impuestos', 'impulsos', 'impresos'], hint: 'я плачу много налогов' },
      { t: 'typed', from: 'Я снимаю квартиру в центре', answer: 'alquilo un piso en el centro', answers: ['alquilo un piso en el centro', 'rento un piso en el centro'], hint: 'alquilar / rentar un piso' },
    ],
  },

  // ── 171. Subjuntivo pluscuamperfecto ──────────────────
  {
    id: 'l171', name: 'Si hubiera...', emoji: '🌀', desc: 'Si hubiera sabido, habría...',
    hearts: 4,
    exercises: [
      { t: 'pick', q: '«Если бы я знал...»', opts: [
        { txt: 'si hubiera sabido',  em: '✅' },
        { txt: 'si sabía',           em: '⚠️' },
        { txt: 'si supe',            em: '❌' },
        { txt: 'si sabré',           em: '❌' },
      ], correct: 0 },
      { t: 'pick', q: '«Если бы ты пришёл, я бы поел»', opts: [
        { txt: 'si hubieras venido, habría comido',   em: '✅' },
        { txt: 'si vienes, comería',                  em: '❌' },
        { txt: 'si vendrías, comía',                  em: '❌' },
        { txt: 'si has venido, he comido',            em: '❌' },
      ], correct: 0 },
      { t: 'pick', q: '«Если бы он был дома, он бы услышал»', opts: [
        { txt: 'si hubiera estado en casa, habría oído', em: '✅' },
        { txt: 'si está en casa, oye',                   em: '❌' },
        { txt: 'si estaba en casa, oía',                 em: '❌' },
        { txt: 'si estará en casa, oirá',                em: '❌' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['hubiera sabido',   'я бы знал'],
        ['hubieras venido',  'ты бы пришёл'],
        ['hubiera podido',   'я бы смог'],
        ['hubiéramos visto', 'мы бы увидели'],
      ]},
      { t: 'match', pairs: [
        ['si hubiera + part.',  'если бы + глагол'],
        ['habría + part.',      'я бы + глагол'],
        ['ojalá hubiera...',    'жаль, что не...'],
        ['como si',             'как будто'],
      ]},
      { t: 'translate', from: 'Если бы я знал, я бы пришёл', tiles: ['si', 'hubiera', 'sabido', 'habría', 'venido'], answer: ['si', 'hubiera', 'sabido', 'habría', 'venido'] },
      { t: 'fill', sentence: ['Si', null, 'tiempo, te habría llamado.'], target: 'hubiera', opts: ['hubiera', 'había', 'tengo'], hint: 'если бы у меня было время' },
      { t: 'fill', sentence: ['Ojalá', null, 'estudiado más.'], target: 'hubiera', opts: ['hubiera', 'había', 'haya'], hint: 'жаль, что я не учился больше' },
      { t: 'typed', from: 'Если бы ты сказал мне, я бы помог', answer: 'si me hubieras dicho, te habría ayudado', answers: ['si me hubieras dicho, te habría ayudado', 'si me hubieras dicho te habría ayudado', 'si me hubieses dicho te habría ayudado'], hint: 'si + hubieras + ..., + habría' },
    ],
  },

  // ── 172. Periphrastic futures ─────────────────────────
  {
    id: 'l172', name: 'Acabo de / Voy a', emoji: '⏳', desc: 'Perífrasis verbales: acabar, ir, estar',
    hearts: 4,
    exercises: [
      { t: 'pick', q: '«Я только что поел»', opts: [
        { txt: 'acabo de comer',  em: '✅' },
        { txt: 'voy a comer',     em: '⏩' },
        { txt: 'estoy comiendo',  em: '🍽️' },
        { txt: 'he comido',       em: '⏳' },
      ], correct: 0 },
      { t: 'pick', q: '«Я собираюсь поесть»', opts: [
        { txt: 'voy a comer',     em: '✅' },
        { txt: 'acabo de comer',  em: '❌' },
        { txt: 'estoy comiendo',  em: '❌' },
        { txt: 'tengo que comer', em: '⚠️' },
      ], correct: 0 },
      { t: 'pick', q: '«Я вот-вот ухожу»', opts: [
        { txt: 'estoy a punto de salir', em: '✅' },
        { txt: 'salgo a punto',          em: '❌' },
        { txt: 'voy salir',              em: '❌' },
        { txt: 'salí',                   em: '❌' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['acabar de + inf.',   'только что'],
        ['ir a + inf.',        'собираться'],
        ['estar a punto de',   'вот-вот'],
        ['volver a + inf.',    'снова делать'],
      ]},
      { t: 'match', pairs: [
        ['tener que + inf.',   'должен'],
        ['hay que + inf.',     'нужно (вообще)'],
        ['deber + inf.',       'следует'],
        ['poder + inf.',       'мочь'],
      ]},
      { t: 'translate', from: 'Я только что приехал', tiles: ['acabo', 'de', 'llegar', 'llego', 'voy'], answer: ['acabo', 'de', 'llegar'] },
      { t: 'fill', sentence: ['Estoy', null, 'punto de salir.'], target: 'a', opts: ['a', 'de', 'en'], hint: 'я вот-вот ухожу' },
      { t: 'fill', sentence: [null, 'que estudiar más.'], target: 'Tengo', opts: ['Tengo', 'Hay', 'Soy'], hint: 'я должен учиться больше' },
      { t: 'typed', from: 'Мы собираемся открыть магазин', answer: 'vamos a abrir una tienda', answers: ['vamos a abrir una tienda', 'vamos a abrir la tienda'], hint: 'ir a + inf.' },
    ],
  },

  // ── 173. Conectores avanzados ─────────────────────────
  {
    id: 'l173', name: 'Conectores', emoji: '🔗', desc: 'A pesar de, por lo tanto, mientras',
    hearts: 4,
    exercises: [
      { t: 'pick', q: '«Несмотря на...»', opts: [
        { txt: 'a pesar de',  em: '🔀' },
        { txt: 'a propósito', em: '💡' },
        { txt: 'a menudo',    em: '⏰' },
        { txt: 'a veces',     em: '🕓' },
      ], correct: 0 },
      { t: 'pick', q: '«Поэтому / следовательно»', opts: [
        { txt: 'por lo tanto',  em: '➡️' },
        { txt: 'por supuesto',  em: '✅' },
        { txt: 'por favor',     em: '🙏' },
        { txt: 'por ejemplo',   em: '💡' },
      ], correct: 0 },
      { t: 'pick', q: '«В то время как»', opts: [
        { txt: 'mientras',  em: '⏳' },
        { txt: 'siempre',   em: '♾️' },
        { txt: 'cuando',    em: '⌚' },
        { txt: 'porque',    em: '❓' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['a pesar de',     'несмотря на'],
        ['por lo tanto',   'поэтому'],
        ['mientras',       'в то время как'],
        ['de hecho',       'на самом деле'],
      ]},
      { t: 'match', pairs: [
        ['no obstante',  'тем не менее'],
        ['en cambio',    'наоборот'],
        ['así que',      'так что'],
        ['ya que',       'поскольку'],
      ]},
      { t: 'translate', from: 'Несмотря на дождь, я вышел', tiles: ['a', 'pesar', 'de', 'la', 'lluvia', 'salí'], answer: ['a', 'pesar', 'de', 'la', 'lluvia', 'salí'] },
      { t: 'fill', sentence: ['Llueve,', null, 'lo tanto, no salgo.'], target: 'por', opts: ['por', 'para', 'en'], hint: 'дождь, поэтому я не выйду' },
      { t: 'fill', sentence: ['Yo trabajo, ', null, 'él descansa.'], target: 'mientras', opts: ['mientras', 'aunque', 'porque'], hint: 'я работаю, в то время как он отдыхает' },
      { t: 'typed', from: 'На самом деле я не знаю', answer: 'de hecho no lo sé', answers: ['de hecho no lo sé', 'de hecho, no lo sé', 'en realidad no lo sé'], hint: 'de hecho / en realidad' },
    ],
  },

  // ── 174. Estilo indirecto ─────────────────────────────
  {
    id: 'l174', name: 'Estilo indirecto', emoji: '💬', desc: 'Reported speech: dijo que...',
    hearts: 4,
    exercises: [
      { t: 'pick', q: '«Он сказал, что устал»', opts: [
        { txt: 'dijo que estaba cansado',  em: '✅' },
        { txt: 'dijo "estoy cansado"',     em: '⚠️' },
        { txt: 'dice que está cansado',    em: '⚠️' },
        { txt: 'decía que estaría cansado',em: '❌' },
      ], correct: 0 },
      { t: 'pick', q: '«Она спросила, где я живу»', opts: [
        { txt: 'preguntó dónde vivía',    em: '✅' },
        { txt: 'preguntó dónde vivo',     em: '⚠️' },
        { txt: 'pregunta dónde vivía',    em: '❌' },
        { txt: 'pregunta "dónde vives"',  em: '❌' },
      ], correct: 0 },
      { t: 'pick', q: '«Он попросил меня прийти»', opts: [
        { txt: 'me pidió que viniera',   em: '✅' },
        { txt: 'me pidió que vengo',     em: '❌' },
        { txt: 'me pidió que vendré',    em: '❌' },
        { txt: 'me pidió que vine',      em: '❌' },
      ], correct: 0 },
      { t: 'match', pairs: [
        ['dijo que...',     'сказал, что'],
        ['preguntó si...',  'спросил, если'],
        ['contestó que...', 'ответил, что'],
        ['pidió que...',    'попросил, чтобы'],
      ]},
      { t: 'match', pairs: [
        ['"estoy" → estaba',    'презенс → имперфект'],
        ['"iré" → iría',        'будущее → условное'],
        ['"he ido" → había ido','перфект → плюсквамперф.'],
        ['"ven" → que viniera', 'императив → субъюнк.'],
      ]},
      { t: 'translate', from: 'Он сказал, что придёт', tiles: ['dijo', 'que', 'vendría', 'viene', 'vendrá'], answer: ['dijo', 'que', 'vendría'] },
      { t: 'fill', sentence: ['Ella dijo que', null, 'enferma.'], target: 'estaba', opts: ['estaba', 'está', 'estuvo'], hint: 'она сказала, что больна (репорт.)' },
      { t: 'fill', sentence: ['Me preguntó', null, 'quería café.'], target: 'si', opts: ['si', 'que', 'cuando'], hint: 'он спросил, хочу ли я кофе' },
      { t: 'typed', from: 'Она сказала мне, что не знает', answer: 'me dijo que no sabía', answers: ['me dijo que no sabía', 'ella me dijo que no sabía'], hint: 'me dijo que no sabía' },
    ],
  },

  // ── 175. Repaso Maestro IV (revisión final L151-L174) ─
  // FINAL FINAL MILESTONE — graduation cap on the curriculum.
  {
    id: 'l175', name: 'Repaso Maestro IV', emoji: '🎓', desc: 'Repaso final (151-174)',
    hearts: 2,
    exercises: [
      // — Professional
      { t: 'pick', q: '«Собеседование»', opts: [
        { txt: 'entrevista',  em: '🗣️' },
        { txt: 'entrega',     em: '📦' },
        { txt: 'entrada',     em: '🚪' },
        { txt: 'entrenador',  em: '🏋️' },
      ], correct: 0 },
      // — Science
      { t: 'pick', q: '«Учёный»', opts: [
        { txt: 'científico', em: '👨‍🔬' },
        { txt: 'cocinero',   em: '👨‍🍳' },
        { txt: 'capitán',    em: '👨‍✈️' },
        { txt: 'cantante',   em: '🎤' },
      ], correct: 0 },
      // — Health
      { t: 'pick', q: '«Хирург»', opts: [
        { txt: 'cirujano', em: '🩺' },
        { txt: 'cocinero', em: '👨‍🍳' },
        { txt: 'conductor',em: '🚗' },
        { txt: 'cantante', em: '🎤' },
      ], correct: 0 },
      // — Finance
      { t: 'pick', q: '«Налог»', opts: [
        { txt: 'impuesto', em: '🧾' },
        { txt: 'impulso',  em: '⚡' },
        { txt: 'impreso',  em: '🖨️' },
        { txt: 'imagen',   em: '🖼️' },
      ], correct: 0 },
      // — Advanced grammar: si hubiera
      { t: 'pick', q: '«Если бы я знал»', opts: [
        { txt: 'si hubiera sabido',  em: '✅' },
        { txt: 'si sabía',           em: '⚠️' },
        { txt: 'si supe',            em: '❌' },
        { txt: 'si sabré',           em: '❌' },
      ], correct: 0 },
      // — Periphrasis
      { t: 'pick', q: '«Я только что поел»', opts: [
        { txt: 'acabo de comer',  em: '✅' },
        { txt: 'voy a comer',     em: '⏩' },
        { txt: 'estoy comiendo',  em: '❌' },
        { txt: 'he comido',       em: '⏳' },
      ], correct: 0 },
      // — Reported speech
      { t: 'pick', q: '«Он сказал, что устал»', opts: [
        { txt: 'dijo que estaba cansado',  em: '✅' },
        { txt: 'dice que está cansado',    em: '⚠️' },
        { txt: 'dijo "estoy cansado"',     em: '⚠️' },
        { txt: 'decía que estaría cansado',em: '❌' },
      ], correct: 0 },
      // — Mix professional
      { t: 'match', pairs: [
        ['jefe',         'начальник'],
        ['sueldo',       'зарплата'],
        ['currículum',   'резюме'],
        ['reunión',      'встреча'],
      ]},
      // — Mix science / space / AI
      { t: 'match', pairs: [
        ['ciencia',    'наука'],
        ['estrella',   'звезда'],
        ['robot',      'робот'],
        ['máquina',    'машина'],
      ]},
      // — Mix health
      { t: 'match', pairs: [
        ['dentista',   'стоматолог'],
        ['operación',  'операция'],
        ['embarazo',   'беременность'],
        ['estrés',     'стресс'],
      ]},
      // — Mix money
      { t: 'match', pairs: [
        ['bolsa',     'биржа'],
        ['Hacienda',  'налоговая'],
        ['seguro',    'страховка'],
        ['hipoteca',  'ипотека'],
      ]},
      // — Mix advanced grammar
      { t: 'match', pairs: [
        ['hubiera sabido',  'я бы знал'],
        ['acabo de',        'только что'],
        ['a pesar de',      'несмотря на'],
        ['dijo que',        'сказал, что'],
      ]},
      // — Translation: subjuntivo pluscuamperfecto
      { t: 'translate', from: 'Если бы я знал, я бы пришёл', tiles: ['si', 'hubiera', 'sabido', 'habría', 'venido'], answer: ['si', 'hubiera', 'sabido', 'habría', 'venido'] },
      // — Translation: periphrasis
      { t: 'translate', from: 'Я только что приехал', tiles: ['acabo', 'de', 'llegar', 'llego', 'voy'], answer: ['acabo', 'de', 'llegar'] },
      // — Translation: connector + reported
      { t: 'translate', from: 'Он сказал, что придёт', tiles: ['dijo', 'que', 'vendría', 'viene'], answer: ['dijo', 'que', 'vendría'] },
      // — Fill: connector
      { t: 'fill', sentence: ['Llueve,', null, 'lo tanto, no salgo.'], target: 'por', opts: ['por', 'para', 'en'], hint: 'дождь, поэтому я не выйду' },
      // — Fill: reported
      { t: 'fill', sentence: ['Me preguntó', null, 'quería café.'], target: 'si', opts: ['si', 'que', 'cuando'], hint: 'спросил, если я хочу кофе' },
      // — Fill: real estate
      { t: 'fill', sentence: ['Alquilo un', null, 'en el centro.'], target: 'piso', opts: ['piso', 'plato', 'peso'], hint: 'я снимаю квартиру в центре' },
      // — Typed: si + hubiera (mastery)
      { t: 'typed', from: 'Если бы ты сказал мне, я бы помог', answer: 'si me hubieras dicho, te habría ayudado', answers: ['si me hubieras dicho, te habría ayudado', 'si me hubieras dicho te habría ayudado', 'si me hubieses dicho te habría ayudado'], hint: 'si + hubieras + ..., + habría' },
      // — Typed: periphrasis (mastery)
      { t: 'typed', from: 'Мы собираемся открыть магазин', answer: 'vamos a abrir una tienda', answers: ['vamos a abrir una tienda', 'vamos a abrir la tienda'], hint: 'ir a + inf.' },
    ],
  },
];

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

  const prog = getLessonProgress();
  const firstUnfinished = LESSONS.findIndex((l, i) => lessonIsUnlocked(i, prog) && !prog[l.id]?.completed);

  let currentUnit = -1;
  let unitWrap = null;

  LESSONS.forEach((lesson, idx) => {
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
      const toIdx = Math.min((unitIdx + 1) * UNIT_SIZE, LESSONS.length);

      // "Test-out" eligibility: first lesson is reachable AND at least one
      // lesson in the unit is still pending AND unit has >1 lesson to skip.
      const firstLessonIdx = unitIdx * UNIT_SIZE;
      const unitLessons    = LESSONS.slice(firstLessonIdx, firstLessonIdx + UNIT_SIZE);
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
  const hearts = (typeof lesson.hearts === 'number' && lesson.hearts > 0) ? lesson.hearts : 3;
  lessonState.lessonId = lessonId;
  lessonState.isUnitTest = false;
  lessonState.unitTestIdx = null;
  lessonState.virtualLesson = null;
  lessonState.exercises = shuffleExercises(lesson.exercises);
  lessonState.current = 0;
  lessonState.hearts = hearts;
  lessonState.maxHearts = hearts;
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

function buildUnitTestLesson(unitIdx) {
  const start = unitIdx * UNIT_SIZE;
  const end   = Math.min(start + UNIT_SIZE, LESSONS.length);
  const unitLessons = LESSONS.slice(start, end);

  // Pool every exercise from every lesson in the unit, then shuffle and trim.
  const pool = [];
  unitLessons.forEach(l => l.exercises.forEach(ex => pool.push(ex)));
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
  const end   = Math.min(start + UNIT_SIZE, LESSONS.length);
  const blockSize = end - start;

  // Count how many of this unit's lessons are still pending (just for the message).
  const prog = getLessonProgress();
  const pending = LESSONS.slice(start, end).filter(l => !prog[l.id]?.completed).length;

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

function startUnitTest(unitIdx) {
  const virtual = buildUnitTestLesson(unitIdx);
  if (!virtual.exercises.length) return;
  haptic.medium();
  lessonState.lessonId       = virtual.id;
  lessonState.virtualLesson  = virtual;
  lessonState.isUnitTest     = true;
  lessonState.unitTestIdx    = unitIdx;
  lessonState.exercises      = shuffleExercises(virtual.exercises);
  lessonState.current        = 0;
  lessonState.hearts         = virtual.hearts;
  lessonState.maxHearts      = virtual.hearts;
  lessonState.wrong          = 0;
  lessonState.pendingOk      = false;
  lessonState.streak         = 0;
  lessonState.bestStreak     = 0;
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
  lessonState.hearts = Math.max(0, lessonState.hearts - 1);
  renderHearts();
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
    const end   = Math.min(start + UNIT_SIZE, LESSONS.length);

    const prog = getLessonProgress();
    for (let i = start; i < end; i++) {
      const l = LESSONS[i];
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

  // Regular lesson path
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
