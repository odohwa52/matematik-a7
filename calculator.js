// ============================================================
// MATEMATIK A7 — CALCULATOR.JS
// Scientific calculator + Desmos + GDC Guide (TI-Nspire & TI-84)
// ============================================================

const GDC_GUIDE = [
  // ── GENERAL ─────────────────────────────────────────────
  {
    topic: "general", title: "Solve an equation",
    nspire: {
      syntax: "solve(equation, variable)",
      steps: ["Press [Menu] → 3: Algebra → 1: Solve", "Type: solve(x²+2x−8=0, x)", "Press [Enter] → returns x=2 or x=−4"],
      notes: "Use nSolve() for a single numerical answer when solve() gives no exact result."
    },
    ti84: {
      syntax: "MATH → C: Numeric Solver",
      steps: ["Press [MATH] then scroll to C: Numeric Solver", "Enter equation as E1=E2", "Move cursor to variable, enter guess, press [ALPHA][ENTER] to solve"],
      notes: "Finds one solution at a time near your guess. Change guess for other solutions."
    }
  },
  {
    topic: "general", title: "Store and recall a value",
    nspire: {
      syntax: "value → variable  (ctrl + var)",
      steps: ["Type value, press [ctrl][var] for the store arrow →", "Type variable name (e.g. a), press [Enter]", "Type variable name and press [Enter] to recall"],
      notes: "Clear a variable with: DelVar a. Or redefine it."
    },
    ti84: {
      syntax: "value [STO→] ALPHA letter",
      steps: ["Type value, press the [STO→] key", "Press [ALPHA] then a letter (e.g. [A])", "Press [ENTER] to store; type the letter and [ENTER] to recall"],
      notes: "Letters A–Z store single values. Use L1–L6 for lists."
    }
  },
  {
    topic: "general", title: "Define and use a function",
    nspire: {
      syntax: "f(x):=expression",
      steps: ["Type f(x):= followed by your expression", "Press [Enter]", "Evaluate with f(3), f(−1), etc."],
      notes: "Clear with DelVar f. Use any lowercase name: g(x), h(t), etc."
    },
    ti84: {
      syntax: "Y= editor",
      steps: ["Press [Y=] and enter expression next to Y1=", "Graph with [GRAPH] or use [2nd][CALC] to evaluate, find zeros, max/min", "Access Y1 as a function in calculations: Y1(3)"],
      notes: "Y1 through Y9 are the available function slots."
    }
  },
  {
    topic: "general", title: "Graph a function",
    nspire: {
      syntax: "Graphs page → f1(x)=",
      steps: ["Press [ctrl][I] → Add Graphs, or open a Graphs page", "Type function next to f1(x)= and press [Enter]", "Press [Menu] → 4: Window to adjust the view"],
      notes: "Press [ctrl][G] to toggle the function entry bar."
    },
    ti84: {
      syntax: "[Y=] then [GRAPH]",
      steps: ["Press [Y=], enter function next to Y1=", "Press [ZOOM] → 6: ZStandard for standard window", "Press [GRAPH]"],
      notes: "Press [WINDOW] to set custom Xmin, Xmax, Ymin, Ymax values."
    }
  },
  {
    topic: "general", title: "Find intersection of two graphs",
    nspire: {
      syntax: "solve(f(x)=g(x), x) or graph tool",
      steps: ["Algebraically: solve(x²=2x+3, x)", "Graphically: graph both functions, press [Menu] → 6: Analyze Graph → 4: Intersection", "Click near intersection point"],
      notes: "Repeat intersection tool for each intersection if there are multiple."
    },
    ti84: {
      syntax: "[2nd][CALC] → 5: intersect",
      steps: ["Enter both functions in Y1 and Y2", "Press [2nd][TRACE] → 5: intersect", "Select First curve, Second curve, move cursor near intersection as Guess → [ENTER]"],
      notes: "Move cursor close to the intersection before pressing ENTER for Guess."
    }
  },

  // ── TOPIC 1: NUMBER & ALGEBRA ────────────────────────────
  {
    topic: "1", title: "Scientific notation input and display",
    nspire: {
      syntax: "mantissa × 10^exponent",
      steps: ["Type number normally, use × 10^ directly", "Or change display: [Menu] → Settings → Document Settings → Exponential Format → Scientific", "Toggle between modes to see numbers in standard form"],
      notes: "Numbers entered in any form — the mode setting only changes how they display."
    },
    ti84: {
      syntax: "[2nd][EE] for ×10 (E notation)",
      steps: ["Type mantissa, press [2nd][,] to get E", "Type exponent (can be negative with [(-)])", "To force all answers in sci notation: [MODE] → SCI"],
      notes: "E on the TI-84 means ×10. So 3.24E6 = 3.24×10⁶."
    }
  },
  {
    topic: "1", title: "Evaluate logarithm (any base)",
    nspire: {
      syntax: "log(value, base)",
      steps: ["Type log(8, 2) → returns 3", "For natural log: ln(x) or log(x, e)", "For log₁₀: log(x) with one argument"],
      notes: "log(x) with one argument defaults to log base 10 on TI-Nspire."
    },
    ti84: {
      syntax: "[MATH] → A: logBASE(value, base)",
      steps: ["Press [MATH], scroll to A: logBASE(", "Enter: logBASE(8, 2) → 3", "For ln press [LN]; for log₁₀ press [LOG]"],
      notes: "logBASE is also accessible via [ALPHA][F2] shortcut menu."
    }
  },
  {
    topic: "1", title: "Combinations nCr and permutations nPr",
    nspire: {
      syntax: "nCr(n, r)  or  nPr(n, r)",
      steps: ["Type nCr(10, 3) → 120", "Or: [Menu] → 5: Probability → 3: Combinations", "nPr works identically"],
      notes: "Also accessible from [ctrl][catalog]. These handle large values exactly."
    },
    ti84: {
      syntax: "n [MATH][PROB] nCr r",
      steps: ["Type n (e.g. 10)", "Press [MATH] → scroll to PROB tab → 3: nCr", "Type r (e.g. 3), press [ENTER] → 120"],
      notes: "nPr is item 2 in the same PROB menu."
    }
  },
  {
    topic: "1", title: "Solve system of equations (row reduction)",
    nspire: {
      syntax: "rref([[a,b,c,d],[e,f,g,h],[i,j,k,l]])",
      steps: ["Enter the augmented matrix [coefficients | constants]", "Type: rref([[1,2,1,4],[2,1,−1,1],[1,−1,2,3]])", "Read solution from the last column of the result"],
      notes: "Or use [Menu] → 7: Matrix & Vector → 4: Row Reduction → 2: Reduced Row Echelon."
    },
    ti84: {
      syntax: "[2nd][MATRIX] → EDIT → MATH → B: rref(",
      steps: ["Press [2nd][x⁻¹] → EDIT → select [A], set dimensions (e.g. 3×4), enter augmented matrix", "Return to home screen: [2nd][x⁻¹] → MATH → B: rref(", "Paste matrix name [A] from NAMES menu → [ENTER]"],
      notes: "Matrix name [A] MUST be pasted from the NAMES menu — do not type [ A ]."
    }
  },
  {
    topic: "1", title: "Find roots of a polynomial",
    nspire: {
      syntax: "zeros(polynomial, x)",
      steps: ["Type: zeros(x³−6x²+11x−6, x) → {1, 2, 3}", "Or solve(x³−6x²+11x−6=0, x)", "For complex roots set mode to rectangular complex first"],
      notes: "polyRoots() also works and returns a list."
    },
    ti84: {
      syntax: "[APPS] → PlySmlt2: Polynomial Root Finder",
      steps: ["Press [APPS] → PlySmlt2 → 1: Poly Root Finder", "Set degree, enter coefficients from highest to lowest power", "Press [GRAPH] to solve → roots listed"],
      notes: "Alternatively use MATH → C: Numeric Solver to find one root at a time."
    }
  },
  {
    topic: "1", title: "Complex number operations",
    nspire: {
      syntax: "z = a + bi  (use i key)",
      steps: ["Set mode to Radian + Rectangular", "Enter complex numbers using [i] key (above [ctrl])", "abs(z) = modulus, angle(z) = argument, conj(z) = conjugate"],
      notes: "Switch to polar form with polarForm(z). Change to Exponential mode in settings."
    },
    ti84: {
      syntax: "[MODE] → a+bi; use [2nd][.] for i",
      steps: ["Press [MODE] → select a+bi", "Use [2nd][.] to enter i in expressions", "MATH → CMPLX for: conj(, real(, imag(, abs(, angle("],
      notes: "For polar form: [MODE] → re^(θi). abs() gives modulus; angle() gives argument."
    }
  },

  // ── TOPIC 2: FUNCTIONS ───────────────────────────────────
  {
    topic: "2", title: "Find zeros (x-intercepts)",
    nspire: {
      syntax: "zeros(f(x), x)",
      steps: ["Algebraically: zeros(x²−5x+6, x) → {2, 3}", "Graphically: Graph function, [Menu] → 6: Analyze Graph → 1: Zero", "Click left bound, then right bound around the zero"],
      notes: "Use 'zeros' (plural) for all roots at once. The graph tool finds one at a time."
    },
    ti84: {
      syntax: "[2nd][CALC] → 2: zero",
      steps: ["Graph function in Y=", "Press [2nd][TRACE] → 2: zero", "Move cursor to set Left Bound, Right Bound, then Guess near the zero → [ENTER]"],
      notes: "Repeat for each zero if the function has multiple x-intercepts."
    }
  },
  {
    topic: "2", title: "Find local maximum or minimum",
    nspire: {
      syntax: "fMax(f(x),x) or graph → Maximum",
      steps: ["Algebraically: fMax(−x²+4x, x) → x=2 (returns x-value)", "Graphically: [Menu] → 6: Analyze Graph → 3: Maximum or 2: Minimum", "Click left and right bounds around the turning point"],
      notes: "fMax/fMin return the x-coordinate. Substitute back to find the y-coordinate."
    },
    ti84: {
      syntax: "[2nd][CALC] → 3: minimum / 4: maximum",
      steps: ["Graph the function", "Press [2nd][TRACE] → 3: minimum (or 4: maximum)", "Set Left Bound, Right Bound, Guess → [ENTER]"],
      notes: "Result displays both x and y coordinates of the turning point."
    }
  },
  {
    topic: "2", title: "Regression (curve fitting)",
    nspire: {
      syntax: "Statistics app → Stat Calculations",
      steps: ["Open Lists & Spreadsheet, enter x-values in column A, y-values in column B", "Press [Menu] → 4: Statistics → 1: Stat Calculations → choose type", "Results show equation + r² value. Save to f1(x) to graph"],
      notes: "Regression types available: Linear (mx+b), Quadratic, Cubic, Exponential, Sinusoidal, Power, Logistic."
    },
    ti84: {
      syntax: "[STAT] → CALC → regression type",
      steps: ["Press [STAT] → 1: Edit, enter x in L1 and y in L2", "Press [STAT] → CALC → choose type (e.g. 4: LinReg(ax+b))", "Set Xlist: L1, Ylist: L2, Store RegEq: Y1 → Calculate"],
      notes: "Enable STAT DIAGNOSTICS in MODE screen to display r and r² values."
    }
  },
  {
    topic: "2", title: "Evaluate a piecewise function",
    nspire: {
      syntax: "piecewise(n, cond₁, expr₁, cond₂, expr₂, ...)",
      steps: ["Type: piecewise(2, x<0, −x, x≥0, x²)", "Or use piecewise template from [ctrl][catalog]", "Assign: f(x):=piecewise(...) then graph normally"],
      notes: "Number of pieces = number of pairs of (condition, expression)."
    },
    ti84: {
      syntax: "[MATH] → B: piecewise(",
      steps: ["Press [MATH] → B: piecewise(", "Select number of pieces (1–5), press [ENTER] OK", "Enter each piece's expression; conditions use [2nd][MATH] for inequalities"],
      notes: "Conditions use TEST symbols. Overlapping intervals use the first valid expression."
    }
  },

  // ── TOPIC 3: GEOMETRY & TRIGONOMETRY ────────────────────
  {
    topic: "3", title: "Dot product of two vectors",
    nspire: {
      syntax: "dotP([a,b,c], [d,e,f])",
      steps: ["Type: dotP([1,2,3], [4,5,6]) → 32", "Or [Menu] → 7: Matrix & Vector → C: Vector → 3: Dot Product", "Result is a scalar"],
      notes: "Also written as u·v = |u||v|cosθ. Use to find the angle between vectors."
    },
    ti84: {
      syntax: "[2nd][MATRIX] MATH → dotP(",
      steps: ["Press [2nd][x⁻¹] → MATH → scroll to dotP(", "Enter: dotP([1,2,3],[4,5,6]) → 32", "Use matrix bracket notation for vectors"],
      notes: "Vectors entered as single-row matrices. Result is a scalar."
    }
  },
  {
    topic: "3", title: "Cross product of two vectors",
    nspire: {
      syntax: "crossP([a,b,c], [d,e,f])",
      steps: ["Type: crossP([1,2,3], [4,5,6]) → [−3, 6, −3]", "Or [Menu] → 7: Matrix & Vector → C: Vector → 4: Cross Product", "Result is a vector perpendicular to both inputs"],
      notes: "Cross product only defined for 3D vectors. |a×b| = area of parallelogram."
    },
    ti84: {
      syntax: "[2nd][MATRIX] MATH → crossP(",
      steps: ["Press [2nd][x⁻¹] → MATH → scroll to crossP(", "Enter: crossP([1,2,3],[4,5,6])", "Press [ENTER] → vector result"],
      notes: "Requires 3-element lists. Not available for 2D vectors."
    }
  },
  {
    topic: "3", title: "Angle between two vectors",
    nspire: {
      syntax: "cos⁻¹(dotP(v1,v2) / (norm(v1)×norm(v2)))",
      steps: ["Define vectors: a:=[1,2,3], b:=[4,5,6]", "Compute: cos⁻¹(dotP(a,b)/(norm(a)×norm(b)))", "Result in radians (IB default) or degrees depending on mode"],
      notes: "norm() gives the magnitude |v|. Set mode to Radian for AA HL."
    },
    ti84: {
      syntax: "Manual computation",
      steps: ["Store dotP(v1,v2) → D", "Compute magnitudes separately using √(sum of squares)", "ans: cos⁻¹(D/(|v1|×|v2|)) — ensure RADIAN mode"],
      notes: "No direct angle-between-vectors function. Must compute step by step."
    }
  },
  {
    topic: "3", title: "Convert degrees ↔ radians",
    nspire: {
      syntax: "Append ° symbol or set mode",
      steps: ["Append ° to force degree interpretation: 180° → π", "Set document mode: [Menu] → Settings → Angle → Radians", "Manual: degrees × π/180 = radians"],
      notes: "The ° symbol overrides mode setting for that calculation."
    },
    ti84: {
      syntax: "[2nd][APPS] → ANGLE menu",
      steps: ["Press [2nd][APPS] for ANGLE menu", "Item 1: ° — append to degree value", "Item 3: ʳ — append to radian value", "Or change MODE to RADIAN/DEGREE globally"],
      notes: "Always verify MODE before trig calculations. Wrong angle mode is a top exam error."
    }
  },
  {
    topic: "3", title: "Solve a triangle (sine / cosine rule)",
    nspire: {
      syntax: "solve(trig equation, unknown)",
      steps: ["Sine rule: solve(a/sin(A) = b/sin(B), b)", "Cosine rule: solve(c²=a²+b²−2·a·b·cos(C), C)", "Substitute known values directly into the equation"],
      notes: "Check for ambiguous case: sin rule with angle—two possible solutions exist when given two sides and a non-included angle."
    },
    ti84: {
      syntax: "Numeric Solver with trig",
      steps: ["Press [MATH] → C: Numeric Solver", "Enter trig equation with known values substituted", "Set guess, press [ALPHA][ENTER]"],
      notes: "For ambiguous case, use two different guess values to find both possible angles."
    }
  },

  // ── TOPIC 4: STATISTICS & PROBABILITY ────────────────────
  {
    topic: "4", title: "Normal distribution: P(a ≤ X ≤ b)",
    nspire: {
      syntax: "normCdf(lower, upper, μ, σ)",
      steps: ["Press [Menu] → 6: Statistics → 5: Distributions → 2: Normal Cdf", "Enter: Lower Bound, Upper Bound, μ (mean), σ (std dev)", "For P(X ≤ b): set Lower = −∞ (type −9E999)"],
      notes: "For standard normal Z~N(0,1): leave μ=0, σ=1. For P(X ≥ a): use upper = 9E999."
    },
    ti84: {
      syntax: "[2nd][VARS] → 2: normalcdf(lower, upper, μ, σ)",
      steps: ["Press [2nd][VARS] (DISTR) → 2: normalcdf(", "Enter: normalcdf(lower, upper, μ, σ)", "For P(X ≤ b): lower = −1E99. For P(X ≥ a): upper = 1E99"],
      notes: "STAT WIZARDS ON mode shows a guided input form with labelled fields."
    }
  },
  {
    topic: "4", title: "Inverse normal: find x given probability",
    nspire: {
      syntax: "invNorm(left-tail area, μ, σ)",
      steps: ["Press [Menu] → 6: Statistics → 5: Distributions → 3: Inverse Normal", "Enter area (LEFT-tail probability), μ, σ", "Returns x such that P(X < x) = area"],
      notes: "Area is ALWAYS the left-tail probability. If given P(X > x) = p, use area = 1 − p."
    },
    ti84: {
      syntax: "[2nd][VARS] → 3: invNorm(area, μ, σ)",
      steps: ["Press [2nd][VARS] → 3: invNorm(", "Enter: invNorm(area, μ, σ)", "STAT WIZARDS ON provides guided input with Area, μ, σ fields"],
      notes: "Default tail is LEFT. Always convert to left-tail area before entering the value."
    }
  },
  {
    topic: "4", title: "Binomial: P(X = r)",
    nspire: {
      syntax: "binomPdf(n, p, r)",
      steps: ["Press [Menu] → 6: Statistics → 5: Distributions → E: Binomial Pdf", "Enter n (trials), p (success probability), x (value r)", "Returns P(X = r)"],
      notes: "Check conditions: fixed n, independent trials, only two outcomes, constant p."
    },
    ti84: {
      syntax: "[2nd][VARS] → A: binompdf(n, p, x)",
      steps: ["Press [2nd][VARS] → scroll to A: binompdf(", "Enter: binompdf(n, p, x)", "Returns P(X = x)"],
      notes: "For P(X ≤ x) use binomcdf. For P(X ≥ x) use 1 − binomcdf(n, p, x−1)."
    }
  },
  {
    topic: "4", title: "Binomial: P(X ≤ r)",
    nspire: {
      syntax: "binomCdf(n, p, 0, r)",
      steps: ["Press [Menu] → 6: Statistics → 5: Distributions → F: Binomial Cdf", "Enter n, p, Lower Bound = 0, Upper Bound = r", "Returns P(0 ≤ X ≤ r)"],
      notes: "For P(X ≥ r): compute 1 − binomCdf(n, p, 0, r−1)."
    },
    ti84: {
      syntax: "[2nd][VARS] → B: binomcdf(n, p, x)",
      steps: ["Press [2nd][VARS] → B: binomcdf(", "Enter: binomcdf(n, p, x) → gives P(X ≤ x)", "For P(X ≥ x): compute 1 − binomcdf(n, p, x−1)"],
      notes: "binomcdf always accumulates from 0. Subtract lower tail to isolate upper range."
    }
  },
  {
    topic: "4", title: "One-variable statistics (mean, σ, median)",
    nspire: {
      syntax: "One-Variable Statistics",
      steps: ["Open Lists & Spreadsheet, enter data in column A", "Press [Menu] → 4: Statistics → 1: Stat Calculations → 1: One-Variable Statistics", "Results: x̄, σx (population), sx (sample), median, Q1, Q3, n"],
      notes: "Use sx for sample data (n−1 denominator); σx for population data (n denominator)."
    },
    ti84: {
      syntax: "[STAT] → CALC → 1: 1-Var Stats L1",
      steps: ["Enter data: [STAT] → 1: Edit → L1", "Press [STAT] → CALC → 1: 1-Var Stats, specify L1", "Press [ENTER] or Calculate"],
      notes: "Scroll down results to see Med (median), Q1, Q3, minX, maxX."
    }
  },
  {
    topic: "4", title: "Two-variable statistics and regression",
    nspire: {
      syntax: "Linear Regression (mx+b)",
      steps: ["Enter x-data in column A, y-data in column B of Lists & Spreadsheet", "Press [Menu] → 4: Statistics → 1: Stat Calculations → 3: Linear Regression (mx+b)", "Results show m, b, r, r²"],
      notes: "Store equation to f1(x) to graph regression line alongside data."
    },
    ti84: {
      syntax: "[STAT] → CALC → 4: LinReg(ax+b)",
      steps: ["Enter x in L1, y in L2", "Press [STAT] → CALC → 4: LinReg(ax+b)", "Set Xlist: L1, Ylist: L2, Store RegEq: Y1 → Calculate"],
      notes: "Enable STAT DIAGNOSTICS in MODE to display r and r² correlation values."
    }
  },
  {
    topic: "4", title: "χ² (chi-squared) probability",
    nspire: {
      syntax: "chi2Cdf(0, testStat, df)",
      steps: ["Press [Menu] → 6: Statistics → 5: Distributions → 8: Chi² Cdf", "Enter Lower Bound = 0, Upper Bound = test statistic, df", "Returns P(X ≤ test stat) — subtract from 1 to get p-value if needed"],
      notes: "For contingency tables: df = (rows−1)(cols−1). For goodness of fit: df = categories−1."
    },
    ti84: {
      syntax: "[2nd][VARS] → 7: χ²cdf(lower, upper, df)",
      steps: ["Press [2nd][VARS] → 7: χ²cdf(", "Enter: χ²cdf(0, testStat, df)", "Returns cumulative probability"],
      notes: "For full χ² tests, use [STAT] → TESTS → C: χ²-Test or D: χ²GOF-Test."
    }
  },

  // ── TOPIC 5: CALCULUS ────────────────────────────────────
  {
    topic: "5", title: "Find derivative (symbolic or at a point)",
    nspire: {
      syntax: "derivative(f(x), x) or d/dx template",
      steps: ["Symbolic: derivative(x³, x) → 3x²", "At a point: derivative(x³, x)|x=2 → 12 (use | for 'evaluated at')", "Or press [ctrl][d/dx] for the derivative template"],
      notes: "TI-Nspire CAS gives exact symbolic derivatives. This is a major advantage over TI-84."
    },
    ti84: {
      syntax: "[MATH] → 8: nDeriv(expr, x, value)",
      steps: ["Press [MATH] → 8: nDeriv(", "Enter: nDeriv(x³, x, 2) → 12", "Gives numerical approximation at the specified point"],
      notes: "nDeriv is numerical only — no symbolic differentiation. Accuracy ~6 significant figures."
    }
  },
  {
    topic: "5", title: "Evaluate definite integral",
    nspire: {
      syntax: "∫(f(x), x, a, b) or nInt()",
      steps: ["Press [ctrl][∫] for the integral template", "Enter: ∫(x², x, 0, 3) → 9 (exact)", "Or: nInt(x², x, 0, 3) for numerical result"],
      notes: "TI-Nspire CAS gives exact answers. nInt() gives decimal approximation."
    },
    ti84: {
      syntax: "[MATH] → 9: fnInt(expr, x, a, b)",
      steps: ["Press [MATH] → 9: fnInt(", "Enter: fnInt(x², x, 0, 3) → 9", "Result is always decimal (numerical)"],
      notes: "Graphically: press [2nd][CALC] → 7: ∫f(x)dx and set bounds on the graph."
    }
  },
  {
    topic: "5", title: "Find area between curve and x-axis",
    nspire: {
      syntax: "nInt(abs(f(x)), x, a, b)",
      steps: ["Check if f(x) changes sign on [a,b] — use zeros() to find any crossing", "If no sign change: ∫(f(x), x, a, b)", "If sign change: ∫(abs(f(x)), x, a, b) for total area"],
      notes: "Or graphically: [Menu] → 6: Analyze Graph → 6: Integral then set bounds."
    },
    ti84: {
      syntax: "fnInt(abs(Y1), x, a, b)",
      steps: ["Graph f(x) to check for x-axis crossings", "Graphical: [2nd][CALC] → 7: ∫f(x)dx sets bounds on graph", "Analytical: fnInt(abs(Y1), x, a, b) for total area including sign changes"],
      notes: "Always check whether the function crosses the x-axis before integrating."
    }
  },
  {
    topic: "5", title: "Find stationary points",
    nspire: {
      syntax: "zeros(derivative(f(x),x), x)",
      steps: ["Find critical points: zeros(derivative(f(x),x), x)", "Classify: evaluate derivative(f(x), x, 2) at each critical x to find sign of f''", "Or graphically: [Menu] → 6: Analyze Graph → 2/3: Min/Max"],
      notes: "For classification, check sign of f'(x) either side, or compute f''(x) at the point."
    },
    ti84: {
      syntax: "[2nd][CALC] → 3: min or 4: max",
      steps: ["Graph f(x)", "Press [2nd][TRACE] → 3: minimum or 4: maximum", "Set Left Bound, Right Bound, Guess near turning point → [ENTER]"],
      notes: "Repeat for each turning point. Output shows exact x and y of the stationary point."
    }
  },
  {
    topic: "5", title: "Solve a differential equation",
    nspire: {
      syntax: "deSolve(ODE, x, y)",
      steps: ["General solution: deSolve(y'=x·y, x, y)", "With initial condition: deSolve(y'=x·y and y(0)=1, x, y)", "For integrating factor type: deSolve(y'+P(x)·y=Q(x), x, y)"],
      notes: "TI-Nspire CAS can solve separable, linear 1st order, and some 2nd order ODEs exactly."
    },
    ti84: {
      syntax: "Manual Euler's method",
      steps: ["TI-84 cannot solve ODEs symbolically", "Store x₀→X, y₀→Y, step h→H", "Iterate: Y + H × f(X,Y) → Y; X + H → X; press [ENTER] repeatedly"],
      notes: "For IB Paper 2/3 DE questions, the TI-Nspire CAS is strongly recommended."
    }
  },
  {
    topic: "5", title: "Euler's method (step-by-step)",
    nspire: {
      syntax: "Manual iteration: x_{n+1} = x_n + h, y_{n+1} = y_n + h·f(x_n,y_n)",
      steps: ["Define: f(x,y):= right-hand side of dy/dx", "Set starting values: x₀ and y₀", "Compute each step: new_y := y + h·f(x,y); new_x := x + h"],
      notes: "Or use deSolve() for the exact answer and compare. Smaller h = more accurate."
    },
    ti84: {
      syntax: "Store variables, iterate manually",
      steps: ["Store: x₀→X, y₀→Y, h→H", "On home screen: Y+H×f(X,Y)→Y:X+H→X (separate with colon)", "Press [ENTER] once per step; repeat n times"],
      notes: "Use Ans to chain calculations. The colon (:) separates multiple commands on one line."
    }
  },
  {
    topic: "5", title: "Sum of a finite series",
    nspire: {
      syntax: "sum(expression, variable, start, end)",
      steps: ["Type: sum(r², r, 1, 10) → 385", "Or press [ctrl][Σ] for the summation template", "Works with symbolic expressions too: sum(r, r, 1, n) → n(n+1)/2"],
      notes: "For infinite series, use limit(sum(expr, r, 1, n), n, ∞) to check convergence."
    },
    ti84: {
      syntax: "[MATH] → 0: summation Σ(expr, var, start, end)",
      steps: ["Press [MATH] → 0: summation Σ(", "Or [ALPHA][F3] → FUNC shortcut menu", "Enter: Σ(r², r, 1, 10) → 385"],
      notes: "Only finite sums. The variable must be one of the single-letter calculator variables."
    }
  }
];

// ── SCIENTIFIC CALCULATOR STATE ─────────────────────────────

let sciExpr   = "";
let sciResult = "";
let justEvaled = false;
let angleMode  = "rad";

// ── INIT ────────────────────────────────────────────────────

document.addEventListener("DOMContentLoaded", () => {
  buildSciCalc();
});

// ── CALCULATOR PANEL TOGGLE ──────────────────────────────────

function switchCalc(type) {
  ["scientific","graphing","gdc"].forEach(t => {
    const btn = document.getElementById(`calc-${t === "scientific" ? "sci" : t === "graphing" ? "graph" : "gdc"}-btn`);
    const panel = document.getElementById(`calc-${t}`);
    if (btn)   btn.classList.toggle("active", t === type);
    if (panel) panel.style.display = t === type ? "block" : "none";
  });
  if (type === "gdc") renderGDCGuide();
}

// ── SCIENTIFIC CALCULATOR ────────────────────────────────────

function buildSciCalc() {
  const el = document.getElementById("calc-scientific");
  if (!el) return;
  el.innerHTML = `
    <div id="sci-display">
      <div id="sci-mode-bar">
        <button class="sci-mode-btn${angleMode==="rad"?" sci-mode-active":""}" onclick="setAngleMode('rad')">RAD</button>
        <button class="sci-mode-btn${angleMode==="deg"?" sci-mode-active":""}" onclick="setAngleMode('deg')">DEG</button>
      </div>
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
      <button class="sci-btn fn" onclick="sciInsert('logBase(')">logₙ</button>
      <button class="sci-btn fn" onclick="sciInsert('Math.sqrt(')">√</button>
    </div>
    <div class="sci-grid">
      <button class="sci-btn fn" onclick="sciInsert('Math.PI')">π</button>
      <button class="sci-btn fn" onclick="sciInsert('Math.E')">e</button>
      <button class="sci-btn fn" onclick="sciInsert('**2')">x²</button>
      <button class="sci-btn fn" onclick="sciInsert('**')">xʸ</button>
      <button class="sci-btn fn" onclick="sciInsert('1/')">1/x</button>
    </div>
    <div class="sci-grid">
      <button class="sci-btn fn" onclick="sciInsert('Math.abs(')">|x|</button>
      <button class="sci-btn fn" onclick="sciInsert('factorial(')">n!</button>
      <button class="sci-btn fn" onclick="sciInsert('nCr(')">nCr</button>
      <button class="sci-btn fn" onclick="sciInsert('nPr(')">nPr</button>
      <button class="sci-btn fn" onclick="sciInsert('Math.cbrt(')">∛</button>
    </div>
    <div style="height:6px"></div>
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
      <button class="sci-btn eq" onclick="sciEval()" style="grid-row:span 2">=</button>
    </div>
    <div class="sci-grid">
      <button class="sci-btn" onclick="sciInsert('0')" style="grid-column:span 2">0</button>
      <button class="sci-btn" onclick="sciInsert('.')">.</button>
      <button class="sci-btn op" title="Previous answer" onclick="sciInsert(sciResult||'0')">ANS</button>
    </div>
  `;
}

function setAngleMode(mode) {
  angleMode = mode;
  document.querySelectorAll(".sci-mode-btn").forEach(b => {
    b.classList.toggle("sci-mode-active", b.textContent.toLowerCase() === mode);
  });
}

function sciInsert(val) {
  if (justEvaled && /^[0-9.(]/.test(String(val))) { sciExpr = ""; justEvaled = false; }
  sciExpr += String(val);
  justEvaled = false;
  updateSciDisplay();
}

function sciClear() {
  sciExpr = ""; sciResult = ""; justEvaled = false;
  const e = document.getElementById("sci-expr");
  const r = document.getElementById("sci-result");
  if (e) e.textContent = "";
  if (r) r.textContent = "0";
}

function sciDel() {
  sciExpr = sciExpr.slice(0, -1);
  updateSciDisplay();
}

function sciEval() {
  if (!sciExpr) return;
  try {
    let toEval = sciExpr;
    if (angleMode === "deg") {
      toEval = toEval
        .replace(/Math\.sin\(/g,  "_sin(").replace(/Math\.cos\(/g,  "_cos(")
        .replace(/Math\.tan\(/g,  "_tan(").replace(/Math\.asin\(/g, "_asin(")
        .replace(/Math\.acos\(/g, "_acos(").replace(/Math\.atan\(/g, "_atan(");
    }
    const code = `
      const _d2r=x=>x*Math.PI/180, _r2d=x=>x*180/Math.PI;
      const _sin=x=>Math.sin(_d2r(x)), _cos=x=>Math.cos(_d2r(x)), _tan=x=>Math.tan(_d2r(x));
      const _asin=x=>_r2d(Math.asin(x)), _acos=x=>_r2d(Math.acos(x)), _atan=x=>_r2d(Math.atan(x));
      function factorial(n){n=Math.round(n);if(n<0||n>170)return NaN;if(n<=1)return 1;let r=1;for(let i=2;i<=n;i++)r*=i;return r;}
      function nCr(n,r){if(r<0||r>n)return 0;return factorial(n)/(factorial(r)*factorial(n-r));}
      function nPr(n,r){if(r<0||r>n)return 0;return factorial(n)/factorial(n-r);}
      function logBase(x,b){return Math.log(x)/Math.log(b);}
      return (${toEval});
    `;
    const raw = new Function(code)();
    if (raw === undefined || raw === null) throw new Error("null");
    const formatted = formatSciResult(raw);
    const exprEl = document.getElementById("sci-expr");
    const resEl  = document.getElementById("sci-result");
    if (exprEl) exprEl.textContent = displayExpr(sciExpr);
    if (resEl)  resEl.textContent  = formatted;
    sciResult = String(raw);
    justEvaled = true;
  } catch {
    const resEl = document.getElementById("sci-result");
    if (resEl) resEl.textContent = "Error";
    sciResult = ""; justEvaled = false;
  }
}

function updateSciDisplay() {
  const exprEl = document.getElementById("sci-expr");
  const resEl  = document.getElementById("sci-result");
  if (exprEl) exprEl.textContent = displayExpr(sciExpr);
  if (resEl && !sciExpr) resEl.textContent = "0";
}

function displayExpr(e) {
  return e
    .replace(/Math\.sin\(/g,"sin(").replace(/Math\.cos\(/g,"cos(").replace(/Math\.tan\(/g,"tan(")
    .replace(/Math\.asin\(/g,"sin⁻¹(").replace(/Math\.acos\(/g,"cos⁻¹(").replace(/Math\.atan\(/g,"tan⁻¹(")
    .replace(/Math\.log\(/g,"ln(").replace(/Math\.log10\(/g,"log(").replace(/logBase\(/g,"logₙ(")
    .replace(/Math\.sqrt\(/g,"√(").replace(/Math\.cbrt\(/g,"∛(").replace(/Math\.abs\(/g,"|")
    .replace(/Math\.PI/g,"π").replace(/Math\.E(?!\d)/g,"e")
    .replace(/factorial\(/g,"!(").replace(/nCr\(/g,"C(").replace(/nPr\(/g,"P(")
    .replace(/\*\*/g,"^").replace(/(?<![*^])\*(?![*])/g,"×");
}

function formatSciResult(n) {
  if (typeof n !== "number") return String(n);
  if (isNaN(n))     return "Undefined";
  if (!isFinite(n)) return n > 0 ? "∞" : "−∞";
  if (Math.abs(n) < 1e-10 && n !== 0) return n.toExponential(6);
  if (Math.abs(n) > 1e12)              return n.toExponential(6);
  return String(parseFloat(n.toPrecision(10)));
}

// ── GDC GUIDE ────────────────────────────────────────────────

let gdcDevice      = "nspire";
let gdcTopicFilter = "all";
const GDC_TOPIC_LABELS = { general:"General","1":"Topic 1","2":"Topic 2","3":"Topic 3","4":"Topic 4","5":"Topic 5" };

function renderGDCGuide() {
  const el = document.getElementById("calc-gdc");
  if (!el) return;

  const topicIds = ["general","1","2","3","4","5"];

  const chips = topicIds.map(id =>
    `<button class="gdc-chip${gdcTopicFilter===id?" active":""}" onclick="setGDCFilter('${id}')">${GDC_TOPIC_LABELS[id]}</button>`
  ).join("");

  const filtered = GDC_GUIDE.filter(g => gdcTopicFilter==="all" || g.topic===gdcTopicFilter);

  const cards = filtered.map((g, i) => {
    const d = gdcDevice === "nspire" ? g.nspire : g.ti84;
    const badge = g.topic === "general"
      ? `<span class="gdc-badge gdc-badge-gen">General</span>`
      : `<span class="gdc-badge gdc-badge-topic">Topic ${g.topic}</span>`;
    const steps = d.steps.map(s =>
      `<div class="gdc-step"><span class="gdc-arrow">→</span><span>${esc(s)}</span></div>`
    ).join("");

    return `
      <div class="gdc-card" id="gdcc-${i}">
        <div class="gdc-card-head" onclick="gdcToggle(${i})">
          <div class="gdc-head-left">${badge}<span class="gdc-card-title">${esc(g.title)}</span></div>
          <svg class="gdc-chev" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 6l4 4 4-4"/></svg>
        </div>
        <div class="gdc-card-body" id="gdcb-${i}" style="display:none">
          <div class="gdc-syntax-row">
            <span class="gdc-syn-label">Syntax</span>
            <code class="gdc-syn-code">${esc(d.syntax)}</code>
          </div>
          <div class="gdc-steps">${steps}</div>
          ${d.notes?`<div class="gdc-note-box"><svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="8" r="6"/><path d="M8 7v4M8 5v.8"/></svg><span>${esc(d.notes)}</span></div>`:""}
        </div>
      </div>`;
  }).join("") || `<div class="gdc-empty">No entries for this filter.</div>`;

  el.innerHTML = `
    <div class="gdc-wrap">
      <div class="gdc-device-bar">
        <button class="gdc-dev-btn${gdcDevice==="nspire"?" active":""}" onclick="setGDCDevice('nspire')">
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="1" width="12" height="14" rx="2"/><rect x="4" y="3" width="8" height="2.5" rx="0.5"/><path d="M4 8h2M7 8h2M11 8h1M4 11h2M7 11h2M11 11h1"/></svg>
          TI-Nspire CAS
        </button>
        <button class="gdc-dev-btn${gdcDevice==="ti84"?" active":""}" onclick="setGDCDevice('ti84')">
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="1" width="10" height="14" rx="2"/><rect x="5" y="3" width="6" height="2" rx="0.5"/><path d="M5 7h2M9 7h2M5 10h2M9 10h2M5 13h2M9 13h2"/></svg>
          TI-84 Plus CE
        </button>
      </div>
      <div class="gdc-filter-bar">
        <button class="gdc-chip${gdcTopicFilter==="all"?" active":""}" onclick="setGDCFilter('all')">All</button>
        ${chips}
      </div>
      <div class="gdc-list">${cards}</div>
    </div>`;
}

function esc(s) {
  return (s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
}

function gdcToggle(i) {
  const body = document.getElementById(`gdcb-${i}`);
  const card = document.getElementById(`gdcc-${i}`);
  if (!body) return;
  const open = body.style.display !== "none";
  body.style.display = open ? "none" : "block";
  card.classList.toggle("open", !open);
}

function setGDCDevice(dev) { gdcDevice = dev; renderGDCGuide(); }
function setGDCFilter(f)   { gdcTopicFilter = f; renderGDCGuide(); }
