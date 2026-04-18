// ============================================================
// MATEMATIK A7 — APP.JS
// ============================================================

const EDIT_PASSWORD = "a7admin";

let currentSubtopic = null;
let activeTab = "notes";
let editMode = false;
let activeFilter = { level: "all", type: "all" };
let allSubtopics = [];

// ── REVIEWED STATE (localStorage) ───────────────────────────

function getReviewed() {
  try { return JSON.parse(localStorage.getItem("a7_reviewed") || "{}"); }
  catch { return {}; }
}
function setReviewed(id, val) {
  const r = getReviewed();
  if (val) r[id] = true; else delete r[id];
  localStorage.setItem("a7_reviewed", JSON.stringify(r));
}
function isReviewed(id) { return !!getReviewed()[id]; }

function toggleReviewed(id, e) {
  if (e && e.stopPropagation) e.stopPropagation();
  setReviewed(id, !isReviewed(id));
  buildSidebar(document.getElementById("search-input").value);
  if (currentSubtopic) {
    document.querySelectorAll(".nav-item").forEach(el =>
      el.classList.toggle("active", el.dataset.id === currentSubtopic.id)
    );
    // re-render reviewed banner
    const bar = document.querySelector(".topic-reviewed-bar");
    if (bar) {
      const done = isReviewed(id);
      bar.classList.toggle("is-done", done);
      const btn = bar.querySelector(".topic-review-toggle");
      if (btn) btn.innerHTML = `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8l3.5 3.5L13 4.5"/></svg>${done ? "Reviewed ✓" : "Mark as reviewed"}`;
    }
  }
}

// ── INIT ────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  buildFlatList();
  buildSidebar();
  setupKeyboardShortcuts();
  setupInlinSearch();
  document.getElementById("kbd-hint").addEventListener("click", openShortcuts);
});

function buildFlatList() {
  allSubtopics = [];
  TOPICS.forEach(t => t.subtopics.forEach(s =>
    allSubtopics.push({ ...s, parentTitle: t.title, parentId: t.id })
  ));
}

// ── SIDEBAR ─────────────────────────────────────────────────

function buildSidebar(filter = "") {
  const nav = document.getElementById("topic-nav");
  nav.innerHTML = "";
  const q = filter.toLowerCase();
  const reviewed = getReviewed();
  const total = allSubtopics.length;
  const doneCount = Object.keys(reviewed).filter(id => allSubtopics.find(s => s.id === id)).length;
  const pct = total ? Math.round((doneCount / total) * 100) : 0;

  const progressEl = document.createElement("div");
  progressEl.id = "sidebar-progress";
  progressEl.innerHTML = `
    <div id="progress-label"><span>${doneCount} / ${total} reviewed</span><span>${pct}%</span></div>
    <div id="progress-bar-track"><div id="progress-bar-fill" style="width:${pct}%"></div></div>
  `;
  nav.appendChild(progressEl);

  TOPICS.forEach(topic => {
    const matchingSubs = topic.subtopics.filter(s =>
      !q || s.id.includes(q) || s.title.toLowerCase().includes(q)
    );
    if (!matchingSubs.length) return;

    const label = document.createElement("div");
    label.className = "nav-group-label";
    label.textContent = `${topic.id}. ${topic.title}`;
    nav.appendChild(label);

    matchingSubs.forEach(sub => {
      const hasHL = sub.notes && sub.notes.some(n => n.level === "HL");
      const done = !!reviewed[sub.id];
      const item = document.createElement("div");
      item.className = "nav-item" +
        (currentSubtopic && currentSubtopic.id === sub.id ? " active" : "") +
        (done ? " reviewed" : "");
      item.dataset.id = sub.id;
      item.innerHTML = `
        <span class="nav-item-id">${sub.id}</span>
        <span class="nav-item-title">${sub.title}</span>
        ${hasHL ? '<span class="nav-item-hl-dot" title="Contains HL content"></span>' : ""}
        <button class="nav-review-btn${done ? " done" : ""}" title="${done ? "Unmark reviewed" : "Mark as reviewed"}" onclick="toggleReviewed('${sub.id}', event)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M3 8l3.5 3.5L13 4.5"/></svg>
        </button>
      `;
      item.addEventListener("click", () => loadSubtopic(sub.id));
      nav.appendChild(item);
    });
  });
}

// ── TOPIC LOADING ───────────────────────────────────────────

function loadSubtopic(id) {
  currentSubtopic = allSubtopics.find(s => s.id === id);
  if (!currentSubtopic) return;

  document.querySelectorAll(".nav-item").forEach(el =>
    el.classList.toggle("active", el.dataset.id === id)
  );
  const activeItem = document.querySelector(".nav-item.active");
  if (activeItem) activeItem.scrollIntoView({ block: "nearest" });

  document.getElementById("header-topic-num").textContent = currentSubtopic.id;
  document.getElementById("header-topic-num").style.display = "inline";
  document.getElementById("header-topic-title").textContent = currentSubtopic.title;

  const hasSL = currentSubtopic.notes.some(n => n.level === "SL" || n.level === "BOTH");
  const hasHL = currentSubtopic.notes.some(n => n.level === "HL" || n.level === "BOTH");
  document.getElementById("badge-sl").classList.toggle("active", hasSL);
  document.getElementById("badge-hl").classList.toggle("active", hasHL);

  renderCurrentTab();
}

// ── TABS ────────────────────────────────────────────────────

function switchTab(tab) {
  activeTab = tab;
  document.querySelectorAll(".tab").forEach(el =>
    el.classList.toggle("active", el.dataset.tab === tab)
  );
  document.querySelectorAll(".panel").forEach(el =>
    el.classList.toggle("active", el.id === `panel-${tab}`)
  );
  renderCurrentTab();
}

function renderCurrentTab() {
  if (!currentSubtopic) return;
  if (activeTab === "notes") renderNotes();
  if (activeTab === "examples") renderExamples();
}

// ── NOTES RENDERING ─────────────────────────────────────────

function renderNotes() {
  document.getElementById("empty-state").style.display = "none";
  const container = document.getElementById("notes-content");
  container.style.display = "block";

  const { notes } = currentSubtopic;
  const done = isReviewed(currentSubtopic.id);

  const reviewedBanner = `
    <div class="topic-reviewed-bar${done ? " is-done" : ""}">
      <button class="topic-review-toggle" onclick="toggleReviewed('${currentSubtopic.id}', event)">
        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 8l3.5 3.5L13 4.5"/></svg>
        ${done ? "Reviewed ✓" : "Mark as reviewed"}
      </button>
    </div>
  `;

  const filterHTML = `<div class="notes-filter-bar">
    <div class="filter-group">
      <button class="filter-btn ${activeFilter.level === 'all' ? 'active' : ''}" onclick="setFilter('level','all')">All levels</button>
      <button class="filter-btn filter-sl ${activeFilter.level === 'SL' ? 'active' : ''}" onclick="setFilter('level','SL')">SL</button>
      <button class="filter-btn filter-hl ${activeFilter.level === 'HL' ? 'active' : ''}" onclick="setFilter('level','HL')">HL only</button>
    </div>
    <span class="filter-divider"></span>
    <div class="filter-group">
      <button class="filter-btn ${activeFilter.type === 'all' ? 'active' : ''}" onclick="setFilter('type','all')">All types</button>
      <button class="filter-btn ${activeFilter.type === 'formula' ? 'active' : ''}" onclick="setFilter('type','formula')">Formulas</button>
      <button class="filter-btn ${activeFilter.type === 'note' ? 'active' : ''}" onclick="setFilter('type','note')">Notes</button>
      <button class="filter-btn ${activeFilter.type === 'tip' ? 'active' : ''}" onclick="setFilter('type','tip')">Tips</button>
      <button class="filter-btn ${activeFilter.type === 'mistake' ? 'active' : ''}" onclick="setFilter('type','mistake')">Mistakes</button>
    </div>
  </div>`;

  const filtered = (notes || []).filter(n => {
    const levelOk = activeFilter.level === "all"
      || n.level === activeFilter.level
      || (activeFilter.level === "SL" && n.level === "BOTH")
      || (activeFilter.level === "HL" && n.level === "BOTH");
    const typeOk = activeFilter.type === "all" || n.type === activeFilter.type;
    return levelOk && typeOk;
  });

  let cardsHTML = filtered.map((note, idx) => buildNoteCard(note, idx)).join("");
  if (!filtered.length) {
    cardsHTML = `<div style="text-align:center;padding:40px 20px;color:var(--text-3);font-size:13px">No notes match this filter.</div>`;
  }

  const addBtn = editMode
    ? `<button class="note-add-btn" onclick="addNote()">
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 3v10M3 8h10"/></svg>
        Add note
      </button>`
    : "";

  container.innerHTML = reviewedBanner + filterHTML + cardsHTML + addBtn;
  renderMath(container);
  if (window.a7Anim) { window.a7Anim.staggerCards(); window.a7Anim.drawSVGs(); }
}

function buildNoteCard(note, idx) {
  const typeLabels = { formula: "Formula", tip: "Tip", note: "Note", mistake: "Common mistake", diagram: "Diagram" };
  const levelLabel = note.level === "BOTH" ? "SL + HL" : note.level;
  const levelClass = note.level === "HL" ? "level-hl" : note.level === "SL" ? "level-sl" : "level-both";
  const editControls = editMode
    ? `<button class="note-edit-actions" onclick="editNote(${idx})" style="background:none;border:1px solid var(--border);border-radius:5px;padding:3px 8px;font-size:10.5px;color:var(--text-3);cursor:pointer;font-family:var(--font-ui)">Edit</button>`
    : "";

  const bodyContent = note.type === "diagram" && note.src
    ? `<img class="diagram-img" src="${note.src}" alt="${note.title || 'Diagram'}">`
    : note.type === "diagram" && note.content && /^\s*<svg/i.test(note.content)
    ? note.content
    : escapeForDisplay(note.content || "");

  return `
    <div class="note-card note-card-${note.type}" data-idx="${idx}">
      <div class="note-card-header">
        <div class="note-card-type">
          <span class="note-type-badge type-${note.type}">${typeLabels[note.type] || note.type}</span>
          <span class="note-level-badge ${levelClass}">${levelLabel}</span>
        </div>
        ${editControls}
      </div>
      ${note.title ? `<div class="note-card-title">${note.title}</div>` : ""}
      <div class="note-card-body">${bodyContent}</div>
    </div>
  `;
}

function setFilter(key, val) {
  activeFilter[key] = val;
  renderNotes();
}

// ── EXAMPLES RENDERING ──────────────────────────────────────

function renderExamples() {
  const container = document.getElementById("examples-content");
  const examples = currentSubtopic.examples || [];

  if (!examples.length) {
    container.innerHTML = `<div class="examples-empty">No worked examples yet for this topic.</div>`;
    return;
  }

  let html = examples.map((ex, i) => {
    const levelClass = ex.level === "HL" ? "level-hl" : "level-sl";
    const stepsHTML = ex.steps.map((step, si) => `
      <div class="example-step">
        <span class="step-num">${si + 1}</span>
        <div class="step-content">${escapeForDisplay(step)}</div>
      </div>
    `).join("");
    return `
      <div class="example-card" id="ex-${i}">
        <div class="example-header" onclick="toggleExample(${i})">
          <span class="note-level-badge ${levelClass}">${ex.level}</span>
          <span class="example-title">${ex.title}</span>
          <svg class="example-chevron" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 6l4 4 4-4"/></svg>
        </div>
        <div class="example-body">${stepsHTML}</div>
      </div>
    `;
  }).join("");

  if (editMode) {
    html += `<button class="note-add-btn" onclick="addExample()">
      <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M8 3v10M3 8h10"/></svg>
      Add worked example
    </button>`;
  }

  container.innerHTML = html;
  renderMath(container);
}

function toggleExample(i) {
  document.getElementById(`ex-${i}`).classList.toggle("open");
}

// ── EDIT MODE ───────────────────────────────────────────────

function toggleEditMode() {
  if (editMode) {
    editMode = false;
    document.body.classList.remove("edit-active");
    document.getElementById("edit-btn").classList.remove("active");
    document.getElementById("edit-btn-label").textContent = "Edit mode";
    renderCurrentTab();
  } else {
    document.getElementById("edit-overlay").style.display = "flex";
    document.getElementById("edit-password").focus();
  }
}

function confirmEditMode() {
  const pwd = document.getElementById("edit-password").value;
  if (pwd === EDIT_PASSWORD) {
    editMode = true;
    document.body.classList.add("edit-active");
    document.getElementById("edit-btn").classList.add("active");
    document.getElementById("edit-btn-label").textContent = "Editing";
    closeEditModal();
    renderCurrentTab();
  } else {
    document.getElementById("edit-error").style.display = "block";
    document.getElementById("edit-password").focus();
  }
}

function closeEditModal() {
  document.getElementById("edit-overlay").style.display = "none";
  document.getElementById("edit-password").value = "";
  document.getElementById("edit-error").style.display = "none";
}

function editNote(idx) {
  if (!currentSubtopic) return;
  const note = currentSubtopic.notes[idx];
  const card = document.querySelector(`.note-card[data-idx="${idx}"]`);
  if (!card) return;
  card.classList.add("editing");
  const body = card.querySelector(".note-card-body");
  const titleEl = card.querySelector(".note-card-title");
  const titleInput = `<input type="text" style="width:100%;background:var(--bg-4);border:1px solid var(--border-2);border-radius:6px;padding:6px 10px;font-size:13px;color:var(--text);font-family:var(--font-ui);outline:none;margin-bottom:8px" value="${(note.title || '').replace(/"/g,'&quot;')}" id="edit-title-${idx}">`;
  const ta = `<textarea class="note-edit-textarea" id="edit-ta-${idx}">${note.content || ''}</textarea>`;
  const actions = `<div class="note-edit-actions">
    <button class="note-edit-save" onclick="saveNote(${idx})">Save</button>
    <button onclick="renderNotes()">Cancel</button>
  </div>`;
  if (titleEl) titleEl.outerHTML = titleInput;
  body.innerHTML = ta + actions;
}

function saveNote(idx) {
  if (!currentSubtopic) return;
  const titleInput = document.getElementById(`edit-title-${idx}`);
  const ta = document.getElementById(`edit-ta-${idx}`);
  if (ta) currentSubtopic.notes[idx].content = ta.value;
  if (titleInput) currentSubtopic.notes[idx].title = titleInput.value;
  renderNotes();
}

function addNote() {
  if (!currentSubtopic) return;
  currentSubtopic.notes.push({ type: "formula", level: "BOTH", title: "New note", content: "" });
  renderNotes();
  setTimeout(() => editNote(currentSubtopic.notes.length - 1), 50);
}

function addExample() {
  if (!currentSubtopic) return;
  currentSubtopic.examples.push({ level: "SL", title: "New example", steps: ["Step 1"] });
  renderExamples();
}

// ── MATH RENDERING ──────────────────────────────────────────

function renderMath(el) {
  if (window.renderMathInElement) {
    renderMathInElement(el, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false }
      ],
      throwOnError: false,
      strict: false
    });
  }
}

function escapeForDisplay(str) {
  if (!str) return "";
  if (/^\s*<(table|div|span|p|ul|ol|li|h[1-6]|pre|code)/i.test(str)) return str;
  const mathRegex = /(\$\$[\s\S]+?\$\$|\$[^$\n]+?\$)/g;
  const parts = [];
  let lastIndex = 0, match;
  while ((match = mathRegex.exec(str)) !== null) {
    const plain = str.slice(lastIndex, match.index);
    parts.push(plain.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>"));
    parts.push(match[0]);
    lastIndex = match.index + match[0].length;
  }
  const tail = str.slice(lastIndex);
  parts.push(tail.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>"));
  return parts.join("");
}

// ── PRINT ───────────────────────────────────────────────────

function printTopic() {
  if (!currentSubtopic) return;
  window.print();
}

// ── KEYBOARD SHORTCUTS ──────────────────────────────────────

function setupKeyboardShortcuts() {
  document.addEventListener("keydown", e => {
    const tag = document.activeElement.tagName;
    const inInput = tag === "INPUT" || tag === "TEXTAREA";

    if (e.key === "Escape") { closeSearch(); closeEditModal(); closeShortcuts(); return; }

    if (!inInput) {
      if (e.key === "/") { e.preventDefault(); openSearchModal(); return; }
      if (e.key === "1") { switchTab("notes"); return; }
      if (e.key === "2") { switchTab("examples"); return; }
      if (e.key === "3") { switchTab("calculator"); return; }
      if (e.key === "[") { navigateTopic(-1); return; }
      if (e.key === "]") { navigateTopic(1); return; }
      if (e.key === "?") { openShortcuts(); return; }
      if (e.key === "r" || e.key === "R") {
        if (currentSubtopic) toggleReviewed(currentSubtopic.id, {});
        return;
      }
    }

    if (document.getElementById("edit-overlay").style.display !== "none" && e.key === "Enter") {
      confirmEditMode();
    }
  });
}

function navigateTopic(dir) {
  if (!currentSubtopic) {
    if (allSubtopics.length) loadSubtopic(allSubtopics[0].id);
    return;
  }
  const idx = allSubtopics.findIndex(s => s.id === currentSubtopic.id);
  const next = idx + dir;
  if (next >= 0 && next < allSubtopics.length) loadSubtopic(allSubtopics[next].id);
}

function openShortcuts() { document.getElementById("shortcuts-overlay").style.display = "flex"; }
function closeShortcuts() { document.getElementById("shortcuts-overlay").style.display = "none"; }

// ── INLINE SIDEBAR SEARCH ───────────────────────────────────

function setupInlinSearch() {
  const input = document.getElementById("search-input");
  const clearBtn = document.getElementById("search-clear");
  input.addEventListener("input", () => {
    buildSidebar(input.value);
    clearBtn.style.display = input.value ? "inline" : "none";
  });
  clearBtn.addEventListener("click", () => {
    input.value = "";
    clearBtn.style.display = "none";
    buildSidebar();
  });
}

// ── SEARCH MODAL ─────────────────────────────────────────────

let searchSelectedIdx = -1;

function openSearchModal() {
  document.getElementById("search-overlay").style.display = "flex";
  document.getElementById("search-modal-input").focus();
  document.getElementById("search-results").innerHTML = "";
}

function closeSearch() {
  document.getElementById("search-overlay").style.display = "none";
  document.getElementById("search-modal-input").value = "";
  searchSelectedIdx = -1;
}

document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("search-modal-input");
  if (!input) return;
  input.addEventListener("input", () => doSearch(input.value));
  input.addEventListener("keydown", e => {
    const results = document.querySelectorAll(".search-result");
    if (e.key === "ArrowDown") { e.preventDefault(); searchSelectedIdx = Math.min(searchSelectedIdx + 1, results.length - 1); updateSearchSelection(results); }
    if (e.key === "ArrowUp") { e.preventDefault(); searchSelectedIdx = Math.max(searchSelectedIdx - 1, 0); updateSearchSelection(results); }
    if (e.key === "Enter" && searchSelectedIdx >= 0) results[searchSelectedIdx]?.click();
  });
  document.getElementById("search-overlay").addEventListener("click", e => {
    if (e.target === document.getElementById("search-overlay")) closeSearch();
  });
});

function updateSearchSelection(results) {
  results.forEach((r, i) => r.classList.toggle("selected", i === searchSelectedIdx));
  if (searchSelectedIdx >= 0) results[searchSelectedIdx]?.scrollIntoView({ block: "nearest" });
}

function doSearch(q) {
  const container = document.getElementById("search-results");
  if (!q.trim()) { container.innerHTML = ""; return; }
  const ql = q.toLowerCase();
  const results = [];

  allSubtopics.forEach(sub => {
    if (sub.title.toLowerCase().includes(ql) || sub.id.includes(ql)) {
      results.push({ id: sub.id, topic: sub.title, snippet: sub.parentTitle, type: "topic" });
    }
    (sub.notes || []).forEach(note => {
      const combined = `${note.title || ""} ${note.content || ""}`.toLowerCase();
      if (combined.includes(ql)) {
        const idx = combined.indexOf(ql);
        const raw = `${note.title || ""} ${note.content || ""}`;
        const start = Math.max(0, idx - 30);
        const snippet = raw.slice(start, start + 80).replace(/\n/g, " ");
        const highlighted = snippet.replace(new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'), "gi"), m => `<em>${m}</em>`);
        results.push({ id: sub.id, topic: sub.title, snippet: highlighted, type: note.type });
      }
    });
    // search worked examples
    (sub.examples || []).forEach(ex => {
      const combined = `${ex.title || ""} ${(ex.steps || []).join(" ")}`.toLowerCase();
      if (combined.includes(ql)) {
        const idx = combined.indexOf(ql);
        const raw = `${ex.title || ""} ${(ex.steps || []).join(" ")}`;
        const start = Math.max(0, idx - 30);
        const snippet = raw.slice(start, start + 80).replace(/\n/g, " ");
        const highlighted = snippet.replace(new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'), "gi"), m => `<em>${m}</em>`);
        results.push({ id: sub.id, topic: sub.title, snippet: highlighted, type: "example" });
      }
    });
  });

  if (!results.length) {
    container.innerHTML = `<div style="padding:20px;text-align:center;color:var(--text-3);font-size:13px">No results for "${q}"</div>`;
    return;
  }

  const seen = new Set();
  const unique = results.filter(r => {
    if (seen.has(r.id + r.snippet)) return false;
    seen.add(r.id + r.snippet);
    return true;
  });

  container.innerHTML = unique.slice(0, 12).map(r => `
    <div class="search-result" data-id="${r.id}" onclick="selectSearchResult('${r.id}','${r.type}')">
      <div class="result-meta">
        <span class="result-id">${r.id}</span>
        ${r.type === "example" ? '<span class="result-type-tag">example</span>' : ""}
      </div>
      <div class="result-body">
        <div class="result-topic">${r.topic}</div>
        <div class="result-snippet">${r.snippet}</div>
      </div>
    </div>
  `).join("");
  searchSelectedIdx = -1;
}

function selectSearchResult(id, type) {
  closeSearch();
  loadSubtopic(id);
  switchTab(type === "example" ? "examples" : "notes");
}
