const WHATSAPP_NUMBER = "6288226621362";
const GATE_SESSION_KEY = "rxfatih_shinobi_gate";

const GATE_VIDEO_CANDIDATES = [
  "assets/972f27f6.mp4",
  "assets/video_1.mp4",
  "assets/video_2.mp4"
];

const HERO_VIDEO_CANDIDATES = [
  "assets/video_1.mp4",
  "assets/972f27f6.mp4",
  "assets/video_2.mp4"
];

const PORTRAIT_CANDIDATES = [
  "assets/foto-formal.jpg",
  "assets/portrait.jpg"
];

const BGM_CANDIDATES = [
  "assets/bgm.mp3",
  "bgm.mp3"
];

const PROJECTS = [
  {
    id: "pokemon-wedding",
    index: "01",
    featured: true,
    category: "wedding",
    categoryLabel: "Undangan Interaktif",
    themeClass: "theme-pokemon",
    previewCode: "POKEMON EDITION // INTERACTIVE QUEST",
    previewTitle: "Pikachu & Trainer Digital Wedding Portal",
    previewTags: ["Animasi Karakter", "Mini-Game", "Auto-Backsound"],
    title: "Undangan Digital Tema Pokémon",
    summary: "Undangan pernikahan digital interaktif bertema Pokémon dengan animasi Pikachu, efek pertarungan visual, mini-game khusus tamu, serta pemutaran musik latar otomatis saat disentuh atau digulir.",
    highlights: [
      "Animasi karakter Pikachu kustom dengan tata letak foto mempelai",
      "Mini-game interaktif langsung di dalam halaman undangan",
      "Musik latar otomatis aktif pada interaksi pertama tanpa tombol mengganggu"
    ],
    tags: ["HTML5", "CSS Animation", "JavaScript", "GitHub Pages"],
    liveUrl: "https://rxfatih-2.github.io/Pokemon-wedding-/"
  },
  {
    id: "mario-wedding",
    index: "02",
    featured: false,
    category: "wedding",
    categoryLabel: "Undangan Interaktif",
    themeClass: "theme-mario",
    previewCode: "ARCADE EDITION // RETRO STAGE",
    previewTitle: "Super Mario & Peach Wedding Adventure",
    previewTags: ["Pixel HUD", "Animasi Karakter", "RSVP WA"],
    title: "Undangan Digital Tema Super Mario",
    summary: "Konsep undangan pernikahan bergaya gim retro dengan animasi karakter Mario & Peach, efek koin interaktif, dan alur cerita layaknya tahapan permainan.",
    highlights: [
      "Animasi karakter CSS & JavaScript ringan tanpa library eksternal",
      "Efek suara dan musik latar bernuansa gim klasik",
      "Informasi jadwal prosesi, peta lokasi, dan konfirmasi WhatsApp"
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    liveUrl: "https://rxfatih-2.github.io/Mario-wedding-/"
  },
  {
    id: "sunda-wedding",
    index: "03",
    featured: false,
    category: "wedding",
    categoryLabel: "Undangan Adat",
    themeClass: "theme-sunda",
    previewCode: "ADAT SUNDA // NUSANTARA SERIES",
    previewTitle: "Wilujeng Sumping — Prosesi Adat Sunda",
    previewTags: ["Siger Sunda", "Musik Tradisional", "RSVP WA"],
    title: "Undangan Digital Adat Sunda",
    summary: "Undangan pernikahan digital bernuansa budaya Sunda dengan ornamen klasik, galeri foto, hitung mundur hari acara, dan konfirmasi kehadiran WhatsApp.",
    highlights: [
      "Tata letak khusus layar ponsel dengan transisi pembuka sampul",
      "Integrasi musik latar tradisional Sunda",
      "Formulir ucapan dan konfirmasi tamu langsung ke WhatsApp"
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    liveUrl: "https://rxfatih-2.github.io/Sunda-wedding-/"
  },
  {
    id: "bugis-wedding",
    index: "04",
    featured: false,
    category: "wedding",
    categoryLabel: "Undangan Adat",
    themeClass: "theme-bugis",
    previewCode: "ADAT BUGIS // NUSANTARA SERIES",
    previewTitle: "Mappacci & Walimatul Ursy Bugis",
    previewTags: ["Baju Bodo", "Palet Emas", "Peta Lokasi"],
    title: "Undangan Digital Adat Bugis",
    summary: "Situs undangan digital yang mengangkat estetika budaya Bugis dengan palet merah marun-emas, jadwal prosesi adat, serta navigasi lokasi acara.",
    highlights: [
      "Palet warna khas Bugis dengan tipografi editorial berkarakter",
      "Penunjuk hitung mundur otomatis menuju hari akad",
      "Salin nomor rekening amplop digital sekali ketuk"
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    liveUrl: "https://rxfatih-2.github.io/Bugis-wedding-/"
  },
  {
    id: "minang-wedding",
    index: "05",
    featured: false,
    category: "wedding",
    categoryLabel: "Undangan Adat",
    themeClass: "theme-minang",
    previewCode: "MINANGKABAU // NUSANTARA SERIES",
    previewTitle: "Baralek Gadang — Adat Minangkabau",
    previewTags: ["Suntiang Emas", "Rumah Gadang", "RSVP WA"],
    title: "Undangan Digital Adat Minangkabau",
    summary: "Undangan pernikahan digital bertema Minangkabau dengan aksen emas songket, susunan acara Baralek, serta integrasi pesan tamu.",
    highlights: [
      "Struktur berkas terpisah yang cepat dimuat di jaringan seluler",
      "Susunan acara akad dan resepsi yang rapi di layar smartphone",
      "Tautan peta interaktif dan konfirmasi tamu via WhatsApp"
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    liveUrl: "https://rxfatih-2.github.io/Minangkabau-wedding-/"
  },
  {
    id: "hut-perusahaan",
    index: "06",
    featured: false,
    category: "web",
    categoryLabel: "Situs Korporat",
    themeClass: "theme-hut",
    previewCode: "CORPORATE ANNIVERSARY // WEB PORTAL",
    previewTitle: "Perayaan Hari Jadi Perusahaan",
    previewTags: ["Lini Masa", "Identitas Oranye", "RXFatih"],
    title: "Website HUT Perusahaan",
    summary: "Situs khusus perayaan hari jadi perusahaan dengan identitas visual oranye tegas, lini masa pencapaian, serta dokumentasi kegiatan tim.",
    highlights: [
      "Sistem warna korporat oranye-gelap dengan kontras tinggi",
      "Lini masa pencapaian yang tersusun rapi di layar HP",
      "Branding khusus RXFatih dengan struktur kode modular"
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Corporate UI"],
    liveUrl: "https://rxfatih-2.github.io/web-hut-perusahaan-/"
  },
  {
    id: "chess-game",
    index: "07",
    featured: false,
    category: "web",
    categoryLabel: "Gim Browser",
    themeClass: "theme-chess",
    previewCode: "STRATEGY ENGINE // BROWSER CHESS",
    previewTitle: "Catur Game v1 — Permainan Papan Web",
    previewTags: ["Papan 8×8", "Validasi Langkah", "Vanilla JS"],
    title: "Permainan Catur Berbasis Web",
    summary: "Aplikasi permainan catur yang berjalan langsung di browser tanpa instalasi, dilengkapi validasi langkah bidak dan indikator giliran bermain.",
    highlights: [
      "Logika papan catur interaktif dibangun dengan JavaScript murni",
      "Kontrol sentuh presisi untuk layar smartphone maupun desktop",
      "Pemuatan instan tanpa ketergantungan server eksternal"
    ],
    tags: ["JavaScript", "Game Logic", "HTML5", "CSS Grid"],
    liveUrl: "https://rxfatih-2.github.io/Catur-game_v1/"
  }
];

const openingGate = document.getElementById("openingGate");
const gateSealTrigger = document.getElementById("gateSealTrigger");
const gateSparks = document.getElementById("gateSparks");
const reopenGateBtn = document.getElementById("reopenGateBtn");
const gateVideo = document.getElementById("gateVideo");
const heroVideo = document.getElementById("heroVideo");
const chakraField = document.getElementById("chakraField");
const bgmAudio = document.getElementById("bgmAudio");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileDrawer = document.getElementById("mobileDrawer");
const projectsGrid = document.getElementById("projectsGrid");
const filterChips = document.querySelectorAll(".filter-chip");
const projectModal = document.getElementById("projectModal");
const closeModalBtn = document.getElementById("closeModalBtn");

let isGateLocked = true;
let isGateAnimating = false;
let isBgmPlaying = false;
let bgmReady = false;
let activeModalProject = null;
let lastFocusedElement = null;

function hasReleasedGateInSession() {
  try {
    return sessionStorage.getItem(GATE_SESSION_KEY) === "released" || Boolean(window.location.hash);
  } catch {
    return false;
  }
}

function saveGateSession() {
  try {
    sessionStorage.setItem(GATE_SESSION_KEY, "released");
  } catch {}
}

function clearGateSession() {
  try {
    sessionStorage.removeItem(GATE_SESSION_KEY);
  } catch {}
}

function buildWhatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function playVideoSafely(videoEl) {
  if (!videoEl || !videoEl.getAttribute("src")) return;
  videoEl.defaultMuted = true;
  videoEl.muted = true;
  videoEl.playsInline = true;
  const promise = videoEl.play();
  if (promise && typeof promise.catch === "function") {
    promise.catch(() => {});
  }
}

function autoOrientVideo(videoEl) {
  if (!videoEl || !videoEl.videoWidth || !videoEl.videoHeight) return;
  const isSideways = videoEl.videoHeight > videoEl.videoWidth;
  videoEl.classList.toggle("rotate-90-cw", isSideways);
}

function loadMediaCandidates(mediaEl, candidates, onReady) {
  if (!mediaEl || !candidates.length) return;
  let idx = 0;

  const attempt = () => {
    if (idx >= candidates.length) return;
    const src = candidates[idx];
    idx += 1;

    const cleanup = () => {
      mediaEl.removeEventListener("loadedmetadata", onMeta);
      mediaEl.removeEventListener("loadeddata", onData);
      mediaEl.removeEventListener("error", onErr);
    };

    const onMeta = () => {
      if (mediaEl.tagName === "VIDEO") {
        autoOrientVideo(mediaEl);
      }
    };

    const onData = () => {
      cleanup();
      mediaEl.classList.add("is-ready");
      if (typeof onReady === "function") {
        onReady(src);
      }
    };

    const onErr = () => {
      cleanup();
      attempt();
    };

    mediaEl.addEventListener("loadedmetadata", onMeta);
    mediaEl.addEventListener("loadeddata", onData);
    mediaEl.addEventListener("error", onErr);
    mediaEl.src = src;
    mediaEl.load();
  };

  attempt();
}

function resolvePortrait() {
  const imgEl = document.getElementById("profilePortrait");
  const fallbackEl = document.getElementById("portraitFallback");
  if (!imgEl) return;

  let idx = 0;
  const attempt = () => {
    if (idx >= PORTRAIT_CANDIDATES.length) {
      imgEl.style.display = "none";
      if (fallbackEl) fallbackEl.style.display = "flex";
      return;
    }
    const src = PORTRAIT_CANDIDATES[idx];
    idx += 1;
    imgEl.onerror = attempt;
    imgEl.src = src;
  };
  attempt();
}

function resolveBgm() {
  if (!bgmAudio) return;
  let idx = 0;
  const attempt = () => {
    if (idx >= BGM_CANDIDATES.length) {
      bgmReady = false;
      return;
    }
    const src = BGM_CANDIDATES[idx];
    idx += 1;
    bgmAudio.onloadeddata = () => {
      bgmReady = true;
    };
    bgmAudio.onerror = attempt;
    bgmAudio.src = src;
    bgmAudio.load();
  };
  attempt();
}

function startBackgroundAudio() {
  if (isGateLocked || isBgmPlaying) return;

  if (bgmReady && bgmAudio) {
    bgmAudio.volume = 0.45;
    bgmAudio.play()
      .then(() => {
        isBgmPlaying = true;
      })
      .catch(() => {});
    return;
  }

  if (heroVideo && heroVideo.getAttribute("src")) {
    heroVideo.muted = false;
    heroVideo.volume = 0.5;
    heroVideo.play()
      .then(() => {
        isBgmPlaying = true;
      })
      .catch(() => {
        heroVideo.muted = true;
      });
  }
}

function stopBackgroundAudio() {
  if (bgmAudio && !bgmAudio.paused) {
    bgmAudio.pause();
  }
  if (heroVideo) {
    heroVideo.muted = true;
  }
  isBgmPlaying = false;
}

// Memicu audio latar otomatis pada sentuhan, klik, atau scroll pertama di halaman
function bindAutoAudioOnInteraction() {
  const events = ["pointerdown", "touchstart", "scroll", "wheel", "keydown"];
  const handler = () => {
    if (isGateLocked || isBgmPlaying) return;
    startBackgroundAudio();
    if (isBgmPlaying) {
      events.forEach((evt) => window.removeEventListener(evt, handler));
    }
  };
  events.forEach((evt) => window.addEventListener(evt, handler, { passive: true }));
}

// Kanvas partikel Cakra Kurama (oranye) & percikan Chidori (biru sian)
function initChakraField() {
  if (!chakraField) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const ctx = chakraField.getContext("2d");
  if (!ctx) return;

  let width = 0;
  let height = 0;

  const embers = Array.from({ length: 42 }, (_, idx) => ({
    x: Math.random(),
    y: Math.random(),
    radius: 1.1 + Math.random() * 2.1,
    speedY: 0.00045 + Math.random() * 0.0011,
    driftX: (Math.random() - 0.5) * 0.0004,
    isChidori: idx % 3 === 0,
    alpha: 0.25 + Math.random() * 0.55
  }));

  const resizeCanvas = () => {
    width = chakraField.width = chakraField.offsetWidth || window.innerWidth;
    height = chakraField.height = chakraField.offsetHeight || window.innerHeight;
  };
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas, { passive: true });

  const drawLightningArc = () => {
    if (Math.random() > 0.045) return;
    let x = width * (0.55 + Math.random() * 0.38);
    let y = height * (0.18 + Math.random() * 0.45);
    ctx.beginPath();
    ctx.moveTo(x, y);
    const segments = 5 + Math.floor(Math.random() * 4);
    for (let i = 0; i < segments; i += 1) {
      x += (Math.random() - 0.45) * 34;
      y += (Math.random() - 0.35) * 28;
      ctx.lineTo(x, y);
    }
    ctx.strokeStyle = "rgba(34, 211, 238, 0.32)";
    ctx.lineWidth = 1.2;
    ctx.stroke();
  };

  const render = () => {
    ctx.clearRect(0, 0, width, height);

    for (const p of embers) {
      p.y -= p.speedY;
      p.x += p.driftX;
      if (p.y < -0.02) {
        p.y = 1.02;
        p.x = Math.random();
      }
      ctx.beginPath();
      ctx.arc(p.x * width, p.y * height, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.isChidori
        ? `rgba(34, 211, 238, ${p.alpha})`
        : `rgba(255, 90, 31, ${p.alpha})`;
      ctx.fill();
    }

    drawLightningArc();
    requestAnimationFrame(render);
  };

  requestAnimationFrame(render);
}

function spawnGateSparks() {
  if (!gateSparks) return;
  gateSparks.innerHTML = "";
  const count = 22;
  for (let i = 0; i < count; i += 1) {
    const spark = document.createElement("span");
    spark.className = "gate-spark";
    const angle = Math.round((360 / count) * i + (Math.random() * 14 - 7));
    const dist = Math.round(120 + Math.random() * 150);
    spark.style.setProperty("--angle", `${angle}deg`);
    spark.style.setProperty("--dist", `${dist}px`);
    gateSparks.appendChild(spark);
  }
}

function bypassGateImmediately() {
  isGateLocked = false;
  isGateAnimating = false;
  document.documentElement.classList.add("gate-bypassed");
  document.body.classList.remove("gate-locked");
  openingGate.classList.add("is-hidden");
  openingGate.classList.remove("is-activating", "is-opening");
  if (gateVideo) gateVideo.pause();
  playVideoSafely(heroVideo);
}

function releaseShinobiGate() {
  if (!isGateLocked || isGateAnimating) return;
  isGateAnimating = true;
  saveGateSession();

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) {
    isGateLocked = false;
    isGateAnimating = false;
    document.body.classList.remove("gate-locked");
    document.body.classList.add("hero-revealed");
    openingGate.classList.add("is-hidden");
    if (gateVideo) gateVideo.pause();
    startBackgroundAudio();
    return;
  }

  openingGate.classList.add("is-activating");
  spawnGateSparks();

  setTimeout(() => {
    isGateLocked = false;
    document.body.classList.remove("gate-locked");
    document.body.classList.add("hero-revealed");
    openingGate.classList.add("is-opening");
    if (gateVideo) gateVideo.pause();
    startBackgroundAudio();
  }, 340);

  setTimeout(() => {
    openingGate.classList.add("is-hidden");
    openingGate.classList.remove("is-activating", "is-opening");
    if (gateSparks) gateSparks.innerHTML = "";
    isGateAnimating = false;
  }, 1240);
}

function lockShinobiGate() {
  clearGateSession();
  document.documentElement.classList.remove("gate-bypassed");
  isGateLocked = true;
  isGateAnimating = false;
  stopBackgroundAudio();
  openingGate.classList.remove("is-hidden", "is-activating", "is-opening");
  document.body.classList.remove("hero-revealed");
  document.body.classList.add("gate-locked");
  playVideoSafely(gateVideo);
}

function createProjectCard(project, activeFilter) {
  const article = document.createElement("article");
  const isFeaturedCard = project.featured && activeFilter === "all";
  article.className = isFeaturedCard ? "project-card project-card-featured" : "project-card";

  const tagsMarkup = project.previewTags
    .map((tag) => `<span class="preview-tag">${tag}</span>`)
    .join("");

  article.innerHTML = `
    <div class="preview-stage ${project.themeClass}">
      <div class="preview-topbar">
        <div class="window-dots" aria-hidden="true">
          <span></span><span></span><span></span>
        </div>
        <span>rxfatih-2.github.io</span>
      </div>
      <div class="preview-box">
        <span class="preview-code">${project.previewCode}</span>
        <p class="preview-heading">${project.previewTitle}</p>
        <div class="preview-tags">${tagsMarkup}</div>
      </div>
    </div>

    <div class="card-body">
      <div class="card-meta-row">
        <span class="card-index tabular-num">PORTAL // ${project.index}</span>
        <span class="badge">${project.categoryLabel}</span>
      </div>
      <h3 class="card-title">${project.title}</h3>
      <p class="card-desc">${project.summary}</p>
    </div>

    <div class="card-footer">
      <button type="button" class="btn btn-ghost" data-detail-id="${project.id}">
        Spesifikasi
      </button>
      <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" data-portal-link>
        <span>Buka Portal</span>
      </a>
    </div>
  `;

  return article;
}

function renderProjects(filter = "all") {
  projectsGrid.innerHTML = "";
  const list = filter === "all"
    ? PROJECTS
    : PROJECTS.filter((item) => item.category === filter);

  list.forEach((project) => {
    projectsGrid.appendChild(createProjectCard(project, filter));
  });
}

function openProjectModal(projectId, triggerEl) {
  const project = PROJECTS.find((item) => item.id === projectId);
  if (!project) return;

  activeModalProject = project;
  lastFocusedElement = triggerEl || document.activeElement;

  document.getElementById("modalCategory").textContent = `${project.categoryLabel} · Portal ${project.index}`;
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalDescription").textContent = project.summary;
  document.getElementById("modalLiveLink").href = project.liveUrl;

  document.getElementById("modalHighlights").innerHTML = project.highlights
    .map((item) => `<li>${item}</li>`)
    .join("");

  document.getElementById("modalTags").innerHTML = project.tags
    .map((tag) => `<span class="badge">${tag}</span>`)
    .join("");

  if (typeof projectModal.showModal === "function") {
    projectModal.showModal();
  } else {
    projectModal.setAttribute("open", "");
  }
}

function closeProjectModal() {
  if (typeof projectModal.close === "function") {
    projectModal.close();
  } else {
    projectModal.removeAttribute("open");
  }
  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
}

// Inisialisasi
initChakraField();
resolvePortrait();
resolveBgm();

loadMediaCandidates(heroVideo, HERO_VIDEO_CANDIDATES, () => {
  playVideoSafely(heroVideo);
});

loadMediaCandidates(gateVideo, GATE_VIDEO_CANDIDATES, () => {
  if (isGateLocked) {
    playVideoSafely(gateVideo);
  }
});

if (hasReleasedGateInSession()) {
  bypassGateImmediately();
} else {
  playVideoSafely(gateVideo);
}

renderProjects("all");
bindAutoAudioOnInteraction();

gateSealTrigger.addEventListener("click", releaseShinobiGate);
reopenGateBtn.addEventListener("click", lockShinobiGate);

mobileMenuBtn.addEventListener("click", () => {
  const expanded = mobileMenuBtn.getAttribute("aria-expanded") === "true";
  mobileMenuBtn.setAttribute("aria-expanded", String(!expanded));
  mobileDrawer.hidden = expanded;
});

mobileDrawer.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenuBtn.setAttribute("aria-expanded", "false");
    mobileDrawer.hidden = true;
  });
});

filterChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    filterChips.forEach((btn) => {
      btn.classList.remove("is-active");
      btn.setAttribute("aria-selected", "false");
    });
    chip.classList.add("is-active");
    chip.setAttribute("aria-selected", "true");
    renderProjects(chip.dataset.filter);
  });
});

projectsGrid.addEventListener("click", (event) => {
  const detailBtn = event.target.closest("[data-detail-id]");
  if (detailBtn) {
    openProjectModal(detailBtn.dataset.detailId, detailBtn);
    return;
  }
  if (event.target.closest("[data-portal-link]")) {
    saveGateSession();
  }
});

document.getElementById("modalLiveLink").addEventListener("click", saveGateSession);
closeModalBtn.addEventListener("click", closeProjectModal);

projectModal.addEventListener("close", () => {
  if (lastFocusedElement && typeof lastFocusedElement.focus === "function") {
    lastFocusedElement.focus();
  }
});

projectModal.addEventListener("click", (event) => {
  const rect = projectModal.getBoundingClientRect();
  const isInside =
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom;
  if (!isInside) {
    closeProjectModal();
  }
});

document.getElementById("modalOrderBtn").addEventListener("click", () => {
  const projectName = activeModalProject ? activeModalProject.title : "Website Kustom";
  const text = `Halo RXFatih, saya tertarik memesan website dengan referensi "${projectName}". Boleh diskusi detailnya?`;
  window.open(buildWhatsappUrl(text), "_blank", "noopener,noreferrer");
});

const openWhatsappConsultation = () => {
  const text = "Halo M Rizki Akbar (RXFatih), saya ingin konsultasi pembuatan website / undangan digital.";
  window.open(buildWhatsappUrl(text), "_blank", "noopener,noreferrer");
};

document.getElementById("heroWhatsappBtn").addEventListener("click", openWhatsappConsultation);
document.getElementById("footerWhatsappBtn").addEventListener("click", openWhatsappConsultation);
