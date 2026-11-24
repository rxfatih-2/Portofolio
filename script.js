document.addEventListener('DOMContentLoaded', () => {
  const entryGate = document.getElementById('entry-gate');
  const unsealBtn = document.getElementById('unseal-btn');
  const bgAudio = document.getElementById('bg-audio');
  const gateVideo = document.getElementById('gate-video');
  const heroVideo = document.getElementById('hero-video');

  let audioStarted = false;

  const startBackgroundAudio = () => {
    if (audioStarted || !bgAudio) return;
    bgAudio.volume = 0.45;
    bgAudio.play()
      .then(() => {
        audioStarted = true;
      })
      .catch(() => {
        // Menunggu interaksi pengguna berikutnya jika browser memblokir autoplay
      });
  };

  const openPortfolioGate = () => {
    startBackgroundAudio();

    if (entryGate) {
      entryGate.classList.add('is-unsealed');
      document.body.classList.remove('gate-locked');

      window.setTimeout(() => {
        if (gateVideo) {
          gateVideo.pause();
        }
      }, 800);
    }

    if (heroVideo && heroVideo.paused) {
      heroVideo.play().catch(() => {});
    }
  };

  if (entryGate) {
    document.body.classList.add('gate-locked');
  }

  if (unsealBtn) {
    unsealBtn.addEventListener('click', openPortfolioGate);
  }

  // Fallback pemicu audio saat pengguna melakukan sentuhan, klik, atau gulir
  ['pointerdown', 'keydown', 'scroll'].forEach((eventName) => {
    window.addEventListener(eventName, startBackgroundAudio, { passive: true });
  });

  // Animasi kemunculan bagian saat digulir
  const revealTargets = document.querySelectorAll(
    '.hero-editorial-body, .arsenal-manifesto, .scroll-entry, .mission-row, .closing-top'
  );

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    revealTargets.forEach((el) => {
      el.classList.add('reveal-item');
      observer.observe(el);
    });
  }
});
