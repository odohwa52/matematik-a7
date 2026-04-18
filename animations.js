// ============================================================
// MATEMATIK A7 — animations.js
// Uses anime.js v3 (loaded as global from CDN)
// ============================================================

// ── 1. STAGGERED CARD ENTRANCE ───────────────────────────────
function staggerCards() {
  const cards = document.querySelectorAll("#notes-content .note-card");
  if (!cards.length) return;

  // Reset first so re-renders always replay
  cards.forEach(c => {
    c.style.opacity = "0";
    c.style.transform = "translateY(16px)";
  });

  anime({
    targets: "#notes-content .note-card",
    opacity: [0, 1],
    translateY: [16, 0],
    duration: 360,
    easing: "easeOutExpo",
    delay: anime.stagger(55),
  });
}

// ── 2. SVG LINE DRAWING ──────────────────────────────────────
// Animates all stroked elements inside any inline <svg>
// in a note card body — looks like they're being drawn in.

function drawSVGs() {
  const svgs = document.querySelectorAll("#notes-content .note-card-body svg");
  if (!svgs.length) return;

  svgs.forEach(svg => {
    svg.style.display = "block";
    svg.style.maxWidth = "100%";
    svg.style.height = "auto";

    const els = Array.from(svg.querySelectorAll("path, line, polyline, circle, ellipse, rect"));
    if (!els.length) return;

    // Give each element a stroke-dasharray based on its own length
    els.forEach(el => {
      const len = el.getTotalLength ? el.getTotalLength() : 200;
      el.style.strokeDasharray = len;
      el.style.strokeDashoffset = len;
    });

    anime({
      targets: els,
      strokeDashoffset: [anime.setDashoffset, 0],
      duration: 1000,
      easing: "easeInOutCubic",
      delay: anime.stagger(60),
    });
  });
}

// ── 3. SCROLL OBSERVER ───────────────────────────────────────
// Re-triggers staggerCards when notes panel scrolls into view.

function attachScrollObserver() {
  const main = document.getElementById("main");
  const panel = document.getElementById("panel-notes");
  if (!main || !panel) return;

  main.addEventListener("scroll", () => {
    if (!panel.classList.contains("active")) return;
    const rect = panel.getBoundingClientRect();
    const mainRect = main.getBoundingClientRect();
    if (rect.top < mainRect.bottom - 50) {
      staggerCards();
    }
  }, { once: true }); // fires once per scroll-in
}

// ── EXPOSE ON WINDOW ─────────────────────────────────────────
window.a7Anim = { staggerCards, drawSVGs };

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(attachScrollObserver, 300);
});
