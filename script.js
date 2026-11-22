const WHATSAPP_NUMBER = "6288226621362";
const GATE_SESSION_KEY = "rxfatih_gate_session";

const PROJECTS = [
  {
    id: "sunda-wedding",
    index: "01",
    category: "wedding",
    categoryLabel: "Undangan Adat",
    themeClass: "theme-sunda",
    previewKicker: "ADAT SUNDA // DIGITAL INVITATION",
    previewTitle: "Wilujeng Sumping — Prosesi Adat Sunda",
    previewPills: ["Siger Sunda", "Musik Gamelan", "RSVP WA"],
    title: "Undangan Digital Adat Sunda",
    summary: "Undangan pernikahan digital bernuansa budaya Sunda dengan ornamen klasik, galeri foto, hitung mundur acara, dan konfirmasi kehadiran WhatsApp.",
    highlights: [
      "Tata letak khusus ponsel dengan transisi pembuka sampul",
      "Integrasi audio latar tradisional dan kontrol pemutar",
      "Formulir ucapan & konfirmasi kehadiran langsung ke WhatsApp"
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    liveUrl: "https://rxfatih-2.github.io/Sunda-wedding-/"
  },
  {
    id: "bugis-wedding",
    index: "02",
    category: "wedding",
    categoryLabel: "Undangan Adat",
    themeClass: "theme-bugis",
    previewKicker: "ADAT BUGIS // DIGITAL INVITATION",
    previewTitle: "Mappacci & Walimatul Ursy Bugis",
    previewPills: ["Baju Bodo", "Tipografi Emas", "Peta Lokasi"],
    title: "Undangan Digital Adat Bugis",
    summary: "Situs undangan digital yang mengangkat estetika kerajaan Bugis dengan palet merah marun-emas, jadwal prosesi, dan navigasi lokasi acara.",
    highlights: [
      "Palet warna khas Bugis dengan tipografi editorial berkarakter",
      "Penunjuk waktu hitung mundur otomatis menuju hari akad",
      "Salin nomor rekening amplop digital sekali ketuk"
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    liveUrl: "https://rxfatih-2.github.io/Bugis-wedding-/"
  },
  {
    id: "minang-wedding",
    index: "03",
    category: "wedding",
    categoryLabel: "Undangan Adat",
    themeClass: "theme-minang",
    previewKicker: "MINANGKABAU // DIGITAL INVITATION",
    previewTitle: "Baralek Gadang — Adat Minangkabau",
    previewPills: ["Suntiang Emas", "Rumah Gadang", "RSVP WA"],
    title: "Undangan Digital Adat Minangkabau",
    summary: "Undangan pernikahan digital bertema Minangkabau dengan aksen emas songket, susunan acara Baralek, serta integrasi pesan tamu.",
    highlights: [
      "Struktur komponen terpisah yang ringan di jaringan seluler",
      "Susunan acara akad dan resepsi yang jelas dibaca tamu",
      "Tautan peta interaktif dan konfirmasi tamu via WhatsApp"
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "GitHub Pages"],
    liveUrl: "https://rxfatih-2.github.io/Minangkabau-wedding-/"
  },
  {
    id: "mario-wedding",
    index: "04",
    category: "wedding",
    categoryLabel: "Tema Interaktif",
    themeClass: "theme-mario",
    previewKicker: "ARCADE EDITION // DIGITAL INVITATION",
    previewTitle: "Super Mario & Peach Wedding Quest",
    previewPills: ["Pixel HUD", "Animasi Karakter", "Audio Retro"],
    title: "Undangan Digital Tema Super Mario",
    summary: "Konsep undangan pernikahan bergaya gim retro dengan animasi karakter Mario & Peach, efek koin interaktif, dan alur cerita layaknya level permainan.",
    highlights: [
      "Animasi karakter CSS & JavaScript kustom tanpa library berat",
      "Efek suara dan musik latar bernuansa gim klasik",
      "Tetap memuat informasi jadwal, lokasi, dan RSVP secara lengkap"
    ],
    tags: ["HTML5", "CSS Animation", "JavaScript", "GitHub Pages"],
    liveUrl: "https://rxfatih-2.github.io/Mario-wedding-/"
  },
  {
    id: "hut-perusahaan",
    index: "05",
    category: "web",
    categoryLabel: "Situs Korporat",
    themeClass: "theme-hut",
    previewKicker: "10TH ANNIVERSARY // CORPORATE WEB",
    previewTitle: "Perayaan 10 Tahun Perjalanan Perusahaan",
    previewPills: ["Milestone 10Th", "Galeri Tim", "Identitas Oranye"],
    title: "Website HUT ke-10 Perusahaan",
    summary: "Situs khusus perayaan satu dekade perusahaan dengan identitas visual oranye tegas, lini masa pencapaian, serta dokumentasi kegiatan.",
    highlights: [
      "Sistem warna korporat oranye-gelap dengan keterbacaan tinggi",
      "Lini masa perjalanan 10 tahun yang tersusun rapi di layar HP",
      "Branding khusus RXFatih dengan struktur kode modular"
    ],
    tags: ["HTML5", "CSS3", "JavaScript", "Corporate UI"],
    liveUrl: "https://rxfatih-2.github.io/web-hut-perusahaan-/"
  },
  {
    id: "chess-game",
    index: "06",
    category: "web",
    categoryLabel: "Game Browser",
    themeClass: "theme-chess",
    previewKicker: "STRATEGY ENGINE // BROWSER GAME",
    previewTitle: "Permainan Catur & Asah Otak Web",
    previewPills: ["Papan 8×8", "Validasi Langkah", "Mode Taktik"],
    title: "Permainan Catur Berbasis Web",
    summary: "Aplikasi permainan catur dan asah otak yang berjalan langsung di browser tanpa instalasi, lengkap dengan validasi pergerakan bidak dan indikator giliran.",
    highlights: [
      "Logika papan catur interaktif dibangun dengan JavaScript murni",
      "Kontrol sentuh presisi untuk layar smartphone maupun desktop",
      "Pemuatan instan tanpa ketergantungan server eksternal"
    ],
    tags: ["JavaScript", "Game Logic", "HTML5", "CSS Grid"],
    liveUrl: "https://rxfatih-2.github.io/Game-asah-otak-super/"
  }
];

const openingGate = document.getElementById("openingGate");
const gateCenterTrigger = document.getElementById("gateCenterTrigger");
const gateSparks = document.getElementById("gateSparks");
const reopenGateBtn = document.getElementById("reopenGateBtn");
const gateVideo = document.getElementById("gateVideo");
const gateAmbientVideo = document.getElementById("gateAmbientVideo");
const heroVideo = document.getElementById("heroVideo");
const bgmAudio = document.getElementById("bgmAudio");
const bgmToggleBtn = document.getElementById("bgmToggleBtn");
const bgmLabel = document.getElementById("bgmLabel");
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const mobileDrawer = document.getElementById("mobileDrawer");
const projectsGrid = document.getElementById("projectsGrid");
const filterChips = document.querySelectorAll(".filter-chip");
const projectModal = document.getElementById("projectModal");
const closeModalBtn = document.getElementById("closeModalBtn");

let isAudioEnabled = false;
let userMutedManually = false;
let isGateOpen = true;
let isTransitioning = false;
let activeModalProject = null;

function hasSessionGatePassed() {
  try {
    return sessionStorage.getItem(GATE_SESSION_KEY) === "active" || Boolean(window.location.hash);
  } catch {
    return false;
  }
}

function markSessionGatePassed() {
  try {
    sessionStorage.setItem(GATE_SESSION_KEY, "active");
  } catch {}
}

function clearSessionGatePassed() {
  try {
    sessionStorage.removeItem(GATE_SESSION_KEY);
  } catch {}
}

function buildWhatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function updateAudioUi(enabled) {
  isAudioEnabled = enabled;
  bgmToggleBtn.setAttribute("aria-pressed", String(enabled));
  bgmLabel.textContent = enabled ? "Audio On" : "Audio Off";
}

function ensureMutedAutoplay(videoEl) {
  if (!videoEl) return;
  videoEl.defaultMuted = true;
  videoEl.muted = true;
  videoEl.playsInline = true;
  const playPromise = videoEl.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {});
  }
}

function attemptStartBacksound() {
  if (isGateOpen || userMutedManually) return;

  if (heroVideo && heroVideo.paused) {
    heroVideo.play().catch(() => {});
  }

  if (bgmAudio && bgmAudio.readyState >= 2) {
    if (heroVideo) heroVideo.muted = true;
    bgmAudio.volume = 0.5;
    bgmAudio.play()
      .then(() => {
        updateAudioUi(true);
      })
      .catch(() => {
        enableHeroVideoSound();
      });
  } else {
    enableHeroVideoSound();
  }
}

function enableHeroVideoSound() {
  if (!heroVideo || userMutedManually) return;
  heroVideo.muted = false;
  heroVideo.volume = 0.65;
  heroVideo.play()
    .then(() => {
      updateAudioUi(true);
    })
    .catch(() => {
      heroVideo.muted = true;
      updateAudioUi(false);
    });
}

function stopAllBacksound() {
  if (bgmAudio && !bgmAudio.paused) {
    bgmAudio.pause();
  }
  if (heroVideo) {
    heroVideo.muted = true;
  }
  updateAudioUi(false);
}

function syncGateVideos(shouldPlay) {
  [gateVideo, gateAmbientVideo].forEach((vid) => {
    if (!vid) return;
    if (shouldPlay) {
      ensureMutedAutoplay(vid);
    } else {
      vid.muted = true;
      vid.pause();
    }
  });
}

// Menyalakan backsound otomatis pada interaksi sentuhan atau scroll pertama di halaman utama
function handleFirstUserInteraction(event) {
  if (isGateOpen || userMutedManually || isAudioEnabled) return;
  if (event.target && event.target.closest("#bgmToggleBtn")) return;
  attemptStartBacksound();
}

function registerAutoAudioGestures() {
  const events = ["pointerdown", "touchstart", "touchmove", "wheel", "scroll", "keydown"];
  events.forEach((evtName) => {
    window.addEventListener(evtName, handleFirstUserInteraction, { passive: true });
  });
}

function emitGateSparks() {
  if (!gateSparks) return;
  gateSparks.innerHTML = "";
  const totalSparks = 18;
  for (let i = 0; i < totalSparks; i += 1) {
    const spark = document.createElement("span");
    spark.className = "gate-spark";
    const angle = Math.round((360 / totalSparks) * i + (Math.random() * 14 - 7));
    const distance = Math.round(110 + Math.random() * 140);
    spark.style.setProperty("--angle", `${angle}deg`);
    spark.style.setProperty("--dist", `${distance}px`);
    gateSparks.appendChild(spark);
  }
}

function skipGateImmediately() {
  isGateOpen = false;
  isTransitioning = false;
  document.documentElement.classList.add("gate-bypassed");
  document.body.classList.remove("gate-locked");
  openingGate.classList.add("is-hidden");
  openingGate.classList.remove("is-activating", "is-opening");
  syncGateVideos(false);

  ensureMutedAutoplay(heroVideo);
  attemptStartBacksound();
}

function triggerGateOpeningSequence() {
  if (!isGateOpen || isTransitioning) return;
  isTransitioning = true;
  userMutedManually = false;
  markSessionGatePassed();

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    isGateOpen = false;
    isTransitioning = false;
    document.body.classList.remove("gate-locked");
    document.body.classList.add("hero-revealed");
    openingGate.classList.add("is-hidden");
    syncGateVideos(false);
    attemptStartBacksound();
    return;
  }

  openingGate.classList.add("is-activating");
  emitGateSparks();

  setTimeout(() => {
    isGateOpen = false;
    document.body.classList.remove("gate-locked");
    document.body.classList.add("hero-revealed");
    openingGate.classList.add("is-opening");
    syncGateVideos(false);
    attemptStartBacksound();
  }, 360);

  setTimeout(() => {
    openingGate.classList.add("is-hidden");
    openingGate.classList.remove("is-activating", "is-opening");
    if (gateSparks) gateSparks.innerHTML = "";
    isTransitioning = false;
  }, 1220);
}

function lockPortfolioGate() {
  clearSessionGatePassed();
  document.documentElement.classList.remove("gate-bypassed");
  isGateOpen = true;
  isTransitioning = false;
  stopAllBacksound();
  openingGate.classList.remove("is-hidden", "is-activating", "is-opening");
  document.body.classList.remove("hero-revealed");
  document.body.classList.add("gate-locked");
  syncGateVideos(true);
}

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "project-card";

  const pillsHtml = project.previewPills
    .map((pill) => `<span class="preview-mini-pill">${pill}</span>`)
    .join("");

  article.innerHTML = `
    <div class="ui-preview-frame ${project.themeClass}">
      <div class="preview-chrome">
        <div class="chrome-dots" aria-hidden="true">
          <span></span><span></span><span></span>
        </div>
        <span>rxfatih-2.github.io</span>
      </div>
      <div class="preview-canvas">
        <span class="preview-kicker">${project.previewKicker}</span>
        <p class="preview-headline">${project.previewTitle}</p>
        <div class="preview-pill-row">${pillsHtml}</div>
      </div>
    </div>

    <div class="card-body">
      <div class="card-top-row">
        <span class="card-index">PORTAL ${project.index}</span>
        <span class="badge">${project.categoryLabel}</span>
      </div>
      <h3 class="card-title">${project.title}</h3>
      <p class="card-desc">${project.summary}</p>
    </div>

    <div class="card-footer">
      <button type="button" class="btn btn-secondary" data-detail-id="${project.id}">
        Detail
      </button>
      <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" data-external-portal>
        <span>Buka Situs</span>
      </a>
    </div>
  `;

  return article;
}

function renderProjects(filterKey = "all") {
  projectsGrid.innerHTML = "";
  const filtered = filterKey === "all"
    ? PROJECTS
    : PROJECTS.filter((item) => item.category === filterKey);

  filtered.forEach((project) => {
    projectsGrid.appendChild(createProjectCard(project));
  });
}

function openProjectDetail(projectId) {
  const project = PROJECTS.find((item) => item.id === projectId);
  if (!project) return;

  activeModalProject = project;
  document.getElementById("modalCategory").textContent = `${project.categoryLabel} · Portal ${project.index}`;
  document.getElementById("modalTitle").textContent = project.title;
  document.getElementById("modalDescription").textContent = project.summary;
  document.getElementById("modalLiveLink").href = project.liveUrl;

  const highlightsEl = document.getElementById("modalHighlights");
  highlightsEl.innerHTML = project.highlights.map((point) => `<li>${point}</li>`).join("");

  const tagsEl = document.getElementById("modalTags");
  tagsEl.innerHTML = project.tags.map((tag) => `<span class="badge">${tag}</span>`).join("");

  if (typeof projectModal.showModal === "function") {
    projectModal.showModal();
  } else {
    projectModal.setAttribute("open", "");
  }
}

function closeProjectDetail() {
  if (typeof projectModal.close === "function") {
    projectModal.close();
  } else {
    projectModal.removeAttribute("open");
  }
}

ensureMutedAutoplay(heroVideo);

if (hasSessionGatePassed()) {
  skipGateImmediately();
} else {
  syncGateVideos(true);
}

[gateVideo, gateAmbientVideo, heroVideo].forEach((vid) => {
  if (!vid) return;
  vid.addEventListener("loadeddata", () => {
    if (vid === heroVideo || isGateOpen) {
      ensureMutedAutoplay(vid);
    }
  });
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) return;
  if (isGateOpen) {
    syncGateVideos(true);
  } else {
    ensureMutedAutoplay(heroVideo);
  }
});

renderProjects("all");
registerAutoAudioGestures();

window.addEventListener("pageshow", () => {
  if (hasSessionGatePassed() && isGateOpen) {
    skipGateImmediately();
  }
});

gateCenterTrigger.addEventListener("click", triggerGateOpeningSequence);
reopenGateBtn.addEventListener("click", lockPortfolioGate);

bgmToggleBtn.addEventListener("click", () => {
  if (isAudioEnabled) {
    userMutedManually = true;
    stopAllBacksound();
  } else {
    userMutedManually = false;
    attemptStartBacksound();
  }
});

mobileMenuBtn.addEventListener("click", () => {
  const isOpen = mobileMenuBtn.getAttribute("aria-expanded") === "true";
  mobileMenuBtn.setAttribute("aria-expanded", String(!isOpen));
  mobileDrawer.hidden = isOpen;
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
    openProjectDetail(detailBtn.dataset.detailId);
    return;
  }

  if (event.target.closest("[data-external-portal]")) {
    markSessionGatePassed();
  }
});

document.getElementById("modalLiveLink").addEventListener("click", () => {
  markSessionGatePassed();
});

closeModalBtn.addEventListener("click", closeProjectDetail);

projectModal.addEventListener("click", (event) => {
  const rect = projectModal.getBoundingClientRect();
  const insideDialog =
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom;
  if (!insideDialog) {
    closeProjectDetail();
  }
});

document.getElementById("modalOrderBtn").addEventListener("click", () => {
  const projectName = activeModalProject ? activeModalProject.title : "Website Kustom";
  const text = `Halo RXFatih, saya tertarik memesan website dengan referensi "${projectName}". Boleh diskusi detailnya?`;
  window.open(buildWhatsappUrl(text), "_blank", "noopener,noreferrer");
});

const openGeneralWhatsapp = () => {
  const text = "Halo M Rizki Akbar (RXFatih), saya ingin konsultasi pembuatan website / undangan digital.";
  window.open(buildWhatsappUrl(text), "_blank", "noopener,noreferrer");
};

document.getElementById("heroWhatsappBtn").addEventListener("click", openGeneralWhatsapp);
document.getElementById("footerWhatsappBtn").addEventListener("click", openGeneralWhatsapp);
