// ============================================================
// MATEMATIK A7 — CALCULATOR.JS
// ============================================================

let sciExpr = "";
let sciResult = "";
let justEvaled = false;

document.addEventListener("DOMContentLoaded", () => {
  buildSciCalc();
});

function switchCalc(type) {
  document.getElementById("calc-sci-btn").classList.toggle("active", type === "scientific");
  document.getElementById("calc-graph-btn").classList.toggle("active", type === "graphing");
  document.getElementById("calc-scientific").style.display = type === "scientific" ? "block" : "none";
  document.getElementById("calc-graphing").style.display = type === "graphing" ? "block" : "none";
}

function buildSciCalc() {
  const el = document.getElementById("calc-scientific");
  el.innerHTML = `
    <div id="sci-display">
      <div id="sci-expr"></div>
      <div id="sci-result">0</div>
    </div>

    <div class="sci-grid">
      <button class="sci-btn fn" onclick="sciInsert('Math.sin(')">sin</button>
      <button class="sci-btn fn" onclick="sciInsert('Math.cos(')">cos</button>
      <button class="sci-btn fn" onclick="sciInsert('Math.tan(')">tan</button>
      <button class="sci-btn fn" onclick="sciInsert('Math.asin(')">sin⁻¹</button>
      <button class="sci-btn fn" onclick="sciInsert('Math.acos(')">cos⁻¹</button>
    </div>
    <div class="sci-grid">
      <button class="sci-btn fn" onclick="sciInsert('Math.atan(')">tan⁻¹</button>
      <button class="sci-btn fn" onclick="sciInsert('Math.log(')">ln</button>
      <button class="sci-btn fn" onclick="sciInsert('Math.log10(')">log</button>
      <button class="sci-btn fn" onclick="sciInsert('Math.sqrt(')">√</button>
      <button class="sci-btn fn" onclick="sciInsert('Math.PI')">π</button>
    </div>
    <div class="sci-grid">
      <button class="sci-btn fn" onclick="sciInsert('Math.E')">e</button>
      <button class="sci-btn fn" onclick="sciInsert('Math.pow(')">xʸ</button>
      <button class="sci-btn fn" onclick="sciInsert('**2')">x²</button>
      <button class="sci-btn fn" onclick="sciInsert('1/')">1/x</button>
      <button class="sci-btn fn" onclick="sciInsert('Math.abs(')">|x|</button>
    </div>
    <div class="sci-grid">
      <button class="sci-btn fn" onclick="sciInsert('Math.floor(')">⌊x⌋</button>
      <button class="sci-btn fn" onclick="sciInsert('Math.ceil(')">⌈x⌉</button>
      <button class="sci-btn fn" onclick="sciToRad()">°→rad</button>
      <button class="sci-btn fn" onclick="sciToDeg()">rad→°</button>
      <button class="sci-btn fn" onclick="sciInsert('factorial(')">n!</button>
    </div>

    <div style="height:8px"></div>

    <div class="sci-grid">
      <button class="sci-btn clr" onclick="sciClear()">AC</button>
      <button class="sci-btn clr" onclick="sciDel()">⌫</button>
      <button class="sci-btn op" onclick="sciInsert('(')">(</button>
      <button class="sci-btn op" onclick="sciInsert(')')">)</button>
      <button class="sci-btn op" onclick="sciInsert('%')">%</button>
    </div>
    <div class="sci-grid">
      <button class="sci-btn" onclick="sciInsert('7')">7</button>
      <button class="sci-btn" onclick="sciInsert('8')">8</button>
      <button class="sci-btn" onclick="sciInsert('9')">9</button>
      <button class="sci-btn op" onclick="sciInsert('/')">&divide;</button>
      <button class="sci-btn op" onclick="sciInsert('**')">^</button>
    </div>
    <div class="sci-grid">
      <button class="sci-btn" onclick="sciInsert('4')">4</button>
      <button class="sci-btn" onclick="sciInsert('5')">5</button>
      <button class="sci-btn" onclick="sciInsert('6')">6</button>
      <button class="sci-btn op" onclick="sciInsert('*')">&times;</button>
      <button class="sci-btn op" onclick="sciInsert('-')">&minus;</button>
    </div>
    <div class="sci-grid">
      <button class="sci-btn" onclick="sciInsert('1')">1</button>
      <button class="sci-btn" onclick="sciInsert('2')">2</button>
      <button class="sci-btn" onclick="sciInsert('3')">3</button>
      <button class="sci-btn op" onclick="sciInsert('+')">+</button>
      <button class="sci-btn eq" onclick="sciEval()" style="grid-row: span 2">=</button>
    </div>
    <div class="sci-grid">
      <button class="sci-btn" onclick="sciInsert('0')" style="grid-column: span 2">0</button>
      <button class="sci-btn" onclick="sciInsert('.')">.</button>
      <button class="sci-btn op" onclick="sciInsert('ans')" title="Previous answer">ANS</button>
    </div>
  `;
}

function sciInsert(val) {
  if (justEvaled && /^[0-9.(]/.test(val)) {
    sciExpr = "";
    justEvaled = false;
  }
  if (justEvaled && val === "ans") {
    sciExpr = sciResult || "0";
    justEvaled = false;
  } else if (val === "ans") {
    sciExpr += (sciResult || "0");
  } else {
    sciExpr += val;
  }
  justEvaled = false;
  updateSciDisplay();
}

function sciClear() {
  sciExpr = "";
  sciResult = "";
  justEvaled = false;
  document.getElementById("sci-expr").textContent = "";
  document.getElementById("sci-result").textContent = "0";
}

function sciDel() {
  sciExpr = sciExpr.slice(0, -1);
  updateSciDisplay();
}

function sciEval() {
  if (!sciExpr) return;
  try {
    // inject factorial helper
    const code = `
      function factorial(n) {
        n = Math.round(n);
        if(n < 0) return NaN;
        if(n === 0 || n === 1) return 1;
        let r = 1;
        for(let i = 2; i <= n; i++) r *= i;
        return r;
      }
      ${sciExpr}
    `;
    const raw = Function('"use strict"; ' + code)();
    if (raw === undefined || raw === null) throw new Error("undefined");
    const formatted = formatResult(raw);
    document.getElementById("sci-expr").textContent = displayExpr(sciExpr);
    document.getElementById("sci-result").textContent = formatted;
    sciResult = String(raw);
    justEvaled = true;
  } catch {
    document.getElementById("sci-result").textContent = "Error";
    sciResult = "";
    justEvaled = false;
  }
}

function sciToRad() {
  // wraps last number/expr with * Math.PI/180
  sciInsert("*(Math.PI/180)");
}
function sciToDeg() {
  sciInsert("*(180/Math.PI)");
}

function updateSciDisplay() {
  document.getElementById("sci-expr").textContent = displayExpr(sciExpr);
  if (!sciExpr) document.getElementById("sci-result").textContent = "0";
}

function displayExpr(expr) {
  return expr
    .replace(/Math\.sin\(/g, "sin(")
    .replace(/Math\.cos\(/g, "cos(")
    .replace(/Math\.tan\(/g, "tan(")
    .replace(/Math\.asin\(/g, "sin⁻¹(")
    .replace(/Math\.acos\(/g, "cos⁻¹(")
    .replace(/Math\.atan\(/g, "tan⁻¹(")
    .replace(/Math\.log\(/g, "ln(")
    .replace(/Math\.log10\(/g, "log(")
    .replace(/Math\.sqrt\(/g, "√(")
    .replace(/Math\.pow\(/g, "pow(")
    .replace(/Math\.abs\(/g, "|")
    .replace(/Math\.floor\(/g, "⌊")
    .replace(/Math\.ceil\(/g, "⌈")
    .replace(/Math\.PI/g, "π")
    .replace(/Math\.E/g, "e")
    .replace(/\*\*/g, "^")
    .replace(/factorial\(/g, "!")
    .replace(/\*/g, "×");
}

function formatResult(n) {
  if (typeof n !== "number") return String(n);
  if (isNaN(n)) return "Not a number";
  if (!isFinite(n)) return n > 0 ? "∞" : "-∞";
  // show up to 10 significant digits, trim trailing zeros
  if (Math.abs(n) < 1e-10 && n !== 0) return n.toExponential(6);
  if (Math.abs(n) > 1e12) return n.toExponential(6);
  const s = parseFloat(n.toPrecision(10));
  return String(s);
}
