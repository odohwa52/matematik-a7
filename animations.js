// ============================================================
// MATEMATIK A7 — animations.js
// Anime.js v4 — loaded as ES module, exposed on window.a7Anim
// Three features:
//   1. staggerCards()  — note cards cascade in on each load
//   2. drawSVGs()      — inline SVG diagrams draw themselves
//   3. scroll observer — re-triggers stagger on scroll-in
// ============================================================

import { animate, stagger, createDrawable, onScroll } from "animejs";

// ── 1. STAGGERED CARD ENTRANCE ───────────────────────────────
function staggerCards() {
  const cards = document.querySelectorAll("#notes-content .note-card");
  if (!cards.length) return;

  cards.forEach(c => {
    c.style.opacity = "0";
    c.style.transform = "translateY(16px)";
  });

  animate(cards, {
    opacity:    [0, 1],
    translateY: [16, 0],
    duration:   360,
    ease:       "outExpo",
    delay:      stagger(50),
  });
}

// ── 2. SVG LINE DRAWING ──────────────────────────────────────
// For diagram notes using inline <svg> in the content field.
//
// Example in topics.js:
//   { type: "diagram", level: "BOTH", title: "Unit Circle",
//     content: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
//       <circle cx="100" cy="100" r="80" stroke="#a78bfa" stroke-width="1.5" fill="none"/>
//       <line x1="20" y1="100" x2="180" y2="100" stroke="#64748b" stroke-width="1"/>
//       <line x1="100" y1="20" x2="100" y2="180" stroke="#64748b" stroke-width="1"/>
//     </svg>` }

function drawSVGs() {
  const svgs = document.querySelectorAll("#notes-content .note-card-body svg");
  if (!svgs.length) return;

  svgs.forEach(svg => {
    svg.style.display = "block";
    svg.style.maxWidth = "100%";
    svg.style.height = "auto";

    const els = svg.querySelectorAll("path, line, polyline, circle, ellipse, rect");
    if (!els.length) return;

    const drawables = Array.from(els).map(el => createDrawable(el));

    animate(drawables, {
      draw:     ["0 0", "0 1"],
      duration: 1000,
      ease:     "inOutCubic",
      delay:    stagger(70),
    });
  });
}

// ── 3. SCROLL OBSERVER ───────────────────────────────────────
function attachScrollObserver() {
  const main = document.getElementById("main");
  const panel = document.getElementById("panel-notes");
  if (!main || !panel) return;

  animate(panel, {
    opacity: [1, 1],
    autoplay: onScroll({
      target: panel,
      container: main,
      enter: "top 90%",
      onEnter: () => {
        if (panel.classList.contains("active")) staggerCards();
      },
      sync: false,
    }),
  });
}

// ── INIT ─────────────────────────────────────────────────────
window.a7Anim = { staggerCards, drawSVGs };

document.addEventListener("DOMContentLoaded", () => {
  setTimeout(attachScrollObserver, 300);
});
