// ============================================================
// MATEMATIK A7 — TOPIC DATA
// ============================================================
// HOW TO EDIT:
//   Each topic has: id, title, sl (boolean), notes[], examples[]
//   notes[]: { type: 'formula'|'tip'|'mistake'|'diagram', level: 'SL'|'HL'|'BOTH', content: '...' }
//   examples[]: { level: 'SL'|'HL', title: '...', steps: ['...'] }
//   Use $...$ for inline math, $$...$$ for display math
// ============================================================

const TOPICS = [
  {
    id: "1",
    title: "Number & algebra",
    subtopics: [
      {
        id: "1.1",
        title: "Sequences & series",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Arithmetic sequence",
            content: "$$u_n = u_1 + (n-1)d$$\n$$S_n = \\frac{n}{2}(2u_1 + (n-1)d) = \\frac{n}{2}(u_1 + u_n)$$"
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Geometric sequence",
            content: "$$u_n = u_1 \\cdot r^{n-1}$$\n$$S_n = \\frac{u_1(r^n - 1)}{r - 1}, \\quad r \\neq 1$$\n$$S_\\infty = \\frac{u_1}{1-r}, \\quad |r| < 1$$"
          },
          {
            type: "tip",
            level: "BOTH",
            title: "Convergence condition",
            content: "The infinite geometric series $S_\\infty$ only exists when $|r| < 1$. Always check this condition before applying the formula."
          },
          {
            type: "mistake",
            level: "BOTH",
            title: "Off-by-one errors",
            content: "A common error is using $n$ instead of $(n-1)$ in $u_n = u_1 + (n-1)d$. The first term corresponds to $n=1$, so the difference is applied $n-1$ times."
          },
          {
            type: "formula",
            level: "HL",
            title: "Sigma notation",
            content: "$$\\sum_{r=1}^{n} r = \\frac{n(n+1)}{2}, \\quad \\sum_{r=1}^{n} r^2 = \\frac{n(n+1)(2n+1)}{6}$$"
          }
        ],
        examples: [
          {
            level: "SL",
            title: "Find the sum of an arithmetic series",
            steps: [
              "Given: $u_1 = 3$, $d = 4$, find $S_{20}$",
              "Using $S_n = \\frac{n}{2}(2u_1 + (n-1)d)$",
              "$S_{20} = \\frac{20}{2}(2(3) + (19)(4))$",
              "$= 10(6 + 76) = 10 \\times 82 = \\boxed{820}$"
            ]
          },
          {
            level: "HL",
            title: "Infinite geometric series with unknown r",
            steps: [
              "Given $S_\\infty = 12$ and $u_1 = 4$, find $r$",
              "$12 = \\frac{4}{1-r}$",
              "$12(1-r) = 4 \\Rightarrow 1-r = \\frac{1}{3}$",
              "$r = \\frac{2}{3}$ ✓ (check: $|r| < 1$, valid)"
            ]
          }
        ]
      },
      {
        id: "1.2",
        title: "Exponents & logarithms",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Logarithm laws",
            content: "$$\\log_a(xy) = \\log_a x + \\log_a y$$\n$$\\log_a\\left(\\frac{x}{y}\\right) = \\log_a x - \\log_a y$$\n$$\\log_a(x^n) = n\\log_a x$$\n$$\\log_a b = \\frac{\\ln b}{\\ln a}$$"
          },
          {
            type: "tip",
            level: "BOTH",
            title: "Change of base",
            content: "Always convert to $\\ln$ or $\\log_{10}$ for calculator work. $\\log_a b = \\frac{\\ln b}{\\ln a}$ is your bridge."
          },
          {
            type: "mistake",
            level: "BOTH",
            title: "Log of a sum ≠ sum of logs",
            content: "$\\log(a + b) \\neq \\log a + \\log b$. This is one of the most common errors. Only products/quotients split under logs."
          }
        ],
        examples: [
          {
            level: "SL",
            title: "Solve a logarithmic equation",
            steps: [
              "Solve: $\\log_2(x+3) + \\log_2(x-1) = 5$",
              "Combine: $\\log_2[(x+3)(x-1)] = 5$",
              "$(x+3)(x-1) = 2^5 = 32$",
              "$x^2 + 2x - 3 = 32 \\Rightarrow x^2 + 2x - 35 = 0$",
              "$(x+7)(x-5) = 0 \\Rightarrow x = 5$ (reject $x = -7$ since $\\log$ undefined)"
            ]
          }
        ]
      },
      {
        id: "1.3",
        title: "Binomial theorem",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Binomial theorem",
            content: "$$(a+b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r$$\n$$\\binom{n}{r} = \\frac{n!}{r!(n-r)!}$$"
          },
          {
            type: "tip",
            level: "BOTH",
            title: "Finding a specific term",
            content: "The $(r+1)$th term is $\\binom{n}{r}a^{n-r}b^r$. If asked for the term in $x^k$, set the power of $x$ equal to $k$ and solve for $r$."
          },
          {
            type: "formula",
            level: "HL",
            title: "Binomial series (infinite)",
            content: "$$(1+x)^n = 1 + nx + \\frac{n(n-1)}{2!}x^2 + \\cdots, \\quad |x| < 1, \\; n \\in \\mathbb{Q}$$"
          }
        ],
        examples: [
          {
            level: "SL",
            title: "Find the coefficient of x³",
            steps: [
              "In $(2 + 3x)^5$, find the coefficient of $x^3$",
              "General term: $\\binom{5}{r}(2)^{5-r}(3x)^r$",
              "For $x^3$: set $r = 3$",
              "$\\binom{5}{3}(2)^2(3)^3 = 10 \\cdot 4 \\cdot 27 = \\boxed{1080}$"
            ]
          }
        ]
      },
      {
        id: "1.4",
        title: "Complex numbers",
        notes: [
          {
            type: "formula",
            level: "HL",
            title: "Forms of complex numbers",
            content: "Rectangular: $z = a + bi$\nPolar: $z = r(\\cos\\theta + i\\sin\\theta) = re^{i\\theta}$\nwhere $r = |z| = \\sqrt{a^2+b^2}$, $\\theta = \\arg(z) = \\arctan\\left(\\frac{b}{a}\\right)$"
          },
          {
            type: "formula",
            level: "HL",
            title: "De Moivre's theorem",
            content: "$$(r e^{i\\theta})^n = r^n e^{in\\theta} = r^n(\\cos n\\theta + i\\sin n\\theta)$$"
          },
          {
            type: "tip",
            level: "HL",
            title: "Euler's identity",
            content: "$$e^{i\\pi} + 1 = 0$$\nUsed to convert between polar and rectangular. Remember $e^{i\\theta} = \\cos\\theta + i\\sin\\theta$."
          },
          {
            type: "mistake",
            level: "HL",
            title: "Argument range",
            content: "$\\arg(z) \\in (-\\pi, \\pi]$ (principal argument). Always check which quadrant $z$ is in — $\\arctan$ alone gives the wrong angle for $z$ in Q2 or Q3."
          }
        ],
        examples: [
          {
            level: "HL",
            title: "Convert to polar form",
            steps: [
              "Write $z = -1 + i$ in polar form",
              "$r = \\sqrt{(-1)^2 + 1^2} = \\sqrt{2}$",
              "$\\theta = \\pi - \\arctan(1) = \\pi - \\frac{\\pi}{4} = \\frac{3\\pi}{4}$ (Q2)",
              "$z = \\sqrt{2}\\, e^{i \\cdot 3\\pi/4}$"
            ]
          }
        ]
      },
      {
        id: "1.5",
        title: "Proof by induction",
        notes: [
          {
            type: "tip",
            level: "HL",
            title: "Induction structure",
            content: "**Step 1:** Base case — show true for $n = 1$ (or $n = 0$).\n**Step 2:** Assume true for $n = k$ (inductive hypothesis).\n**Step 3:** Prove true for $n = k+1$ using the assumption.\n**Step 4:** Conclude by induction."
          },
          {
            type: "mistake",
            level: "HL",
            title: "Incomplete conclusion",
            content: "Always write a full conclusion: 'Since P(1) is true and P(k) ⟹ P(k+1), by mathematical induction P(n) is true for all $n \\in \\mathbb{Z}^+$.'"
          }
        ],
        examples: [
          {
            level: "HL",
            title: "Prove a summation formula by induction",
            steps: [
              "Prove $\\sum_{r=1}^n r = \\frac{n(n+1)}{2}$ for $n \\in \\mathbb{Z}^+$",
              "**Base case** $n=1$: LHS $= 1$, RHS $= \\frac{1 \\cdot 2}{2} = 1$ ✓",
              "**Assume** $\\sum_{r=1}^k r = \\frac{k(k+1)}{2}$ for some $k \\geq 1$",
              "**Show** for $n = k+1$: $\\sum_{r=1}^{k+1} r = \\frac{k(k+1)}{2} + (k+1)$",
              "$= (k+1)\\left(\\frac{k}{2} + 1\\right) = \\frac{(k+1)(k+2)}{2}$ ✓",
              "**Conclusion:** True for all $n \\in \\mathbb{Z}^+$ by induction."
            ]
          }
        ]
      }
    ]
  },
  {
    id: "2",
    title: "Functions",
    subtopics: [
      {
        id: "2.1",
        title: "Function fundamentals",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Domain, range & inverse",
            content: "For $f: A \\to B$, the inverse $f^{-1}$ exists iff $f$ is one-to-one.\nDomain of $f^{-1}$ = Range of $f$, and vice versa.\n$(f \\circ g)(x) = f(g(x))$"
          },
          {
            type: "tip",
            level: "BOTH",
            title: "Finding inverse",
            content: "To find $f^{-1}(x)$: write $y = f(x)$, swap $x$ and $y$, solve for $y$. The graph of $f^{-1}$ is the reflection of $f$ in $y = x$."
          }
        ],
        examples: [
          {
            level: "SL",
            title: "Find the inverse function",
            steps: [
              "Find $f^{-1}(x)$ for $f(x) = \\frac{2x+1}{x-3}$",
              "Let $y = \\frac{2x+1}{x-3}$, swap: $x = \\frac{2y+1}{y-3}$",
              "$x(y-3) = 2y+1 \\Rightarrow xy - 3x = 2y + 1$",
              "$y(x-2) = 3x+1 \\Rightarrow f^{-1}(x) = \\frac{3x+1}{x-2}$"
            ]
          }
        ]
      },
      {
        id: "2.2",
        title: "Rational & reciprocal functions",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Rational function structure",
            content: "$$f(x) = \\frac{ax+b}{cx+d}$$\nVertical asymptote: $x = -\\frac{d}{c}$\nHorizontal asymptote: $y = \\frac{a}{c}$"
          },
          {
            type: "tip",
            level: "BOTH",
            title: "Sketching rational functions",
            content: "Find intercepts, asymptotes, and check behaviour near asymptotes. The function never crosses a vertical asymptote but may cross a horizontal one."
          }
        ],
        examples: []
      },
      {
        id: "2.3",
        title: "Exponential & logarithmic",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Key properties",
            content: "$$a^x = e^{x\\ln a}, \\quad \\ln(e^x) = x, \\quad e^{\\ln x} = x$$\nGrowth model: $N(t) = N_0 e^{kt}$\nHalf-life: $t_{1/2} = \\frac{\\ln 2}{k}$"
          }
        ],
        examples: []
      },
      {
        id: "2.4",
        title: "Transformations",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Transformation summary",
            content: "$f(x) + a$ — vertical shift up $a$\n$f(x+a)$ — horizontal shift left $a$\n$af(x)$ — vertical stretch factor $a$\n$f(ax)$ — horizontal stretch factor $\\frac{1}{a}$\n$-f(x)$ — reflection in $x$-axis\n$f(-x)$ — reflection in $y$-axis"
          },
          {
            type: "mistake",
            level: "BOTH",
            title: "Horizontal direction is reversed",
            content: "$f(x-3)$ shifts RIGHT by 3, not left. The sign inside the bracket is opposite to the direction of shift."
          }
        ],
        examples: []
      }
    ]
  },
  {
    id: "3",
    title: "Geometry & trigonometry",
    subtopics: [
      {
        id: "3.1",
        title: "Radian measure & arcs",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Arc & sector",
            content: "Arc length: $l = r\\theta$\nSector area: $A = \\frac{1}{2}r^2\\theta$\nwhere $\\theta$ is in radians."
          },
          {
            type: "tip",
            level: "BOTH",
            title: "Degrees to radians",
            content: "$\\theta_{\\text{rad}} = \\theta_{\\deg} \\times \\frac{\\pi}{180}$. Key values: $30° = \\frac{\\pi}{6}$, $45° = \\frac{\\pi}{4}$, $60° = \\frac{\\pi}{3}$, $90° = \\frac{\\pi}{2}$, $180° = \\pi$."
          }
        ],
        examples: []
      },
      {
        id: "3.2",
        title: "Trig functions & graphs",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Amplitude, period & phase",
            content: "$$f(x) = A\\sin(B(x - C)) + D$$\nAmplitude: $|A|$\nPeriod: $\\frac{2\\pi}{|B|}$\nPhase shift: $C$ (right)\nVertical shift: $D$"
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Exact values",
            content: "| $\\theta$ | $\\sin\\theta$ | $\\cos\\theta$ | $\\tan\\theta$ |\n|---|---|---|---|\n| $0$ | $0$ | $1$ | $0$ |\n| $\\frac{\\pi}{6}$ | $\\frac{1}{2}$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{\\sqrt{3}}$ |\n| $\\frac{\\pi}{4}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $1$ |\n| $\\frac{\\pi}{3}$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{2}$ | $\\sqrt{3}$ |\n| $\\frac{\\pi}{2}$ | $1$ | $0$ | undef |"
          }
        ],
        examples: []
      },
      {
        id: "3.3",
        title: "Trig identities",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Pythagorean identities",
            content: "$$\\sin^2\\theta + \\cos^2\\theta = 1$$\n$$1 + \\tan^2\\theta = \\sec^2\\theta$$\n$$1 + \\cot^2\\theta = \\csc^2\\theta$$"
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Double angle formulas",
            content: "$$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$$\n$$\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta$$\n$$\\tan 2\\theta = \\frac{2\\tan\\theta}{1 - \\tan^2\\theta}$$"
          },
          {
            type: "formula",
            level: "HL",
            title: "Compound angle formulas",
            content: "$$\\sin(A \\pm B) = \\sin A\\cos B \\pm \\cos A\\sin B$$\n$$\\cos(A \\pm B) = \\cos A\\cos B \\mp \\sin A\\sin B$$\n$$\\tan(A \\pm B) = \\frac{\\tan A \\pm \\tan B}{1 \\mp \\tan A\\tan B}$$"
          }
        ],
        examples: []
      },
      {
        id: "3.4",
        title: "Triangle trigonometry",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Sine & cosine rules",
            content: "Sine rule: $\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B} = \\dfrac{c}{\\sin C}$\n\nCosine rule: $a^2 = b^2 + c^2 - 2bc\\cos A$\n\nArea: $\\text{Area} = \\frac{1}{2}ab\\sin C$"
          },
          {
            type: "tip",
            level: "BOTH",
            title: "Ambiguous case (sine rule)",
            content: "When using sine rule to find an angle, there may be two solutions: $\\theta$ and $180° - \\theta$. Always check if both are valid given the context."
          }
        ],
        examples: []
      },
      {
        id: "3.5",
        title: "Vectors",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Vector operations",
            content: "Magnitude: $|\\mathbf{v}| = \\sqrt{v_1^2 + v_2^2 + v_3^2}$\nDot product: $\\mathbf{a} \\cdot \\mathbf{b} = |\\mathbf{a}||\\mathbf{b}|\\cos\\theta = a_1b_1 + a_2b_2 + a_3b_3$\nAngle: $\\cos\\theta = \\dfrac{\\mathbf{a}\\cdot\\mathbf{b}}{|\\mathbf{a}||\\mathbf{b}|}$"
          },
          {
            type: "formula",
            level: "HL",
            title: "Cross product",
            content: "$$\\mathbf{a} \\times \\mathbf{b} = \\begin{vmatrix}\\mathbf{i} & \\mathbf{j} & \\mathbf{k} \\\\ a_1 & a_2 & a_3 \\\\ b_1 & b_2 & b_3\\end{vmatrix}$$\n$|\\mathbf{a} \\times \\mathbf{b}| = |\\mathbf{a}||\\mathbf{b}|\\sin\\theta$ (area of parallelogram)"
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Vector line equation",
            content: "$$\\mathbf{r} = \\mathbf{a} + t\\mathbf{b}, \\quad t \\in \\mathbb{R}$$\nwhere $\\mathbf{a}$ is a point on the line and $\\mathbf{b}$ is the direction vector."
          }
        ],
        examples: []
      }
    ]
  },
  {
    id: "4",
    title: "Statistics & probability",
    subtopics: [
      {
        id: "4.1",
        title: "Descriptive statistics",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Measures of central tendency",
            content: "Mean: $\\bar{x} = \\dfrac{\\sum f_i x_i}{\\sum f_i}$\nMedian: middle value when ordered\nMode: most frequent value"
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Standard deviation",
            content: "$$\\sigma = \\sqrt{\\frac{\\sum f_i(x_i - \\bar{x})^2}{\\sum f_i}}$$\nUse $s_{n-1}$ (sample) or $\\sigma_n$ (population) depending on context."
          }
        ],
        examples: []
      },
      {
        id: "4.2",
        title: "Probability",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Probability rules",
            content: "$$P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$$\n$$P(A|B) = \\frac{P(A \\cap B)}{P(B)}$$\nIndependence: $P(A \\cap B) = P(A) \\cdot P(B)$"
          },
          {
            type: "formula",
            level: "HL",
            title: "Bayes' theorem",
            content: "$$P(A|B) = \\frac{P(B|A)\\cdot P(A)}{P(B)}$$"
          }
        ],
        examples: []
      },
      {
        id: "4.3",
        title: "Discrete distributions",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Expectation & variance",
            content: "$$E(X) = \\sum x \\cdot P(X=x)$$\n$$\\text{Var}(X) = E(X^2) - [E(X)]^2$$\n$$E(aX + b) = aE(X) + b, \\quad \\text{Var}(aX+b) = a^2\\text{Var}(X)$$"
          }
        ],
        examples: []
      },
      {
        id: "4.4",
        title: "Binomial distribution",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Binomial distribution",
            content: "$$X \\sim B(n, p)$$\n$$P(X = r) = \\binom{n}{r}p^r(1-p)^{n-r}$$\n$$E(X) = np, \\quad \\text{Var}(X) = np(1-p)$$"
          },
          {
            type: "tip",
            level: "BOTH",
            title: "Conditions for binomial",
            content: "Fixed number of trials $n$, each trial independent, only two outcomes, constant probability $p$. If any condition fails, binomial does not apply."
          }
        ],
        examples: []
      },
      {
        id: "4.5",
        title: "Normal distribution",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Normal distribution",
            content: "$$X \\sim N(\\mu, \\sigma^2)$$\nStandardise: $Z = \\dfrac{X - \\mu}{\\sigma}$, where $Z \\sim N(0,1)$"
          },
          {
            type: "tip",
            level: "BOTH",
            title: "Inverse normal",
            content: "Use GDC inverse normal to find $x$ given $P(X < x) = p$. Make sure you identify direction of inequality correctly."
          }
        ],
        examples: []
      }
    ]
  },
  {
    id: "5",
    title: "Calculus",
    subtopics: [
      {
        id: "5.1",
        title: "Limits & continuity",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Limit definition",
            content: "$$\\lim_{x \\to a} f(x) = L$$\nA function is continuous at $x = a$ if: $f(a)$ exists, $\\lim_{x \\to a} f(x)$ exists, and $\\lim_{x \\to a} f(x) = f(a)$."
          },
          {
            type: "formula",
            level: "HL",
            title: "L'Hôpital's rule",
            content: "If $\\lim_{x\\to a}\\frac{f(x)}{g(x)}$ gives $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$:\n$$\\lim_{x\\to a}\\frac{f(x)}{g(x)} = \\lim_{x\\to a}\\frac{f'(x)}{g'(x)}$$"
          }
        ],
        examples: []
      },
      {
        id: "5.2",
        title: "Differentiation rules",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Standard derivatives",
            content: "$$\\frac{d}{dx}[x^n] = nx^{n-1}$$\n$$\\frac{d}{dx}[e^x] = e^x, \\quad \\frac{d}{dx}[\\ln x] = \\frac{1}{x}$$\n$$\\frac{d}{dx}[\\sin x] = \\cos x, \\quad \\frac{d}{dx}[\\cos x] = -\\sin x$$\n$$\\frac{d}{dx}[\\tan x] = \\sec^2 x$$"
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Chain, product & quotient rules",
            content: "Chain: $\\dfrac{dy}{dx} = \\dfrac{dy}{du} \\cdot \\dfrac{du}{dx}$\n\nProduct: $(uv)' = u'v + uv'$\n\nQuotient: $\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^2}$"
          },
          {
            type: "mistake",
            level: "BOTH",
            title: "Chain rule forgotten",
            content: "$\\frac{d}{dx}[\\sin(x^2)] = 2x\\cos(x^2)$, not $\\cos(x^2)$. Always check if the argument is a function of $x$."
          },
          {
            type: "formula",
            level: "HL",
            title: "Implicit differentiation",
            content: "Differentiate both sides w.r.t. $x$. For terms in $y$, apply chain rule: $\\frac{d}{dx}[y^n] = ny^{n-1}\\frac{dy}{dx}$. Then solve for $\\frac{dy}{dx}$."
          }
        ],
        examples: [
          {
            level: "SL",
            title: "Apply the chain rule",
            steps: [
              "Differentiate $y = (3x^2 + 1)^5$",
              "Let $u = 3x^2 + 1$, so $y = u^5$",
              "$\\frac{du}{dx} = 6x$, $\\frac{dy}{du} = 5u^4$",
              "$\\frac{dy}{dx} = 5(3x^2+1)^4 \\cdot 6x = 30x(3x^2+1)^4$"
            ]
          },
          {
            level: "HL",
            title: "Implicit differentiation",
            steps: [
              "Find $\\frac{dy}{dx}$ for $x^2 + xy + y^2 = 7$",
              "Differentiate: $2x + y + x\\frac{dy}{dx} + 2y\\frac{dy}{dx} = 0$",
              "$\\frac{dy}{dx}(x + 2y) = -2x - y$",
              "$\\frac{dy}{dx} = \\dfrac{-2x - y}{x + 2y}$"
            ]
          }
        ]
      },
      {
        id: "5.3",
        title: "Applications of derivatives",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Stationary points",
            content: "At stationary point: $f'(x) = 0$\nLocal max: $f''(x) < 0$\nLocal min: $f''(x) > 0$\nPoint of inflexion: $f''(x) = 0$ and sign of $f''$ changes"
          },
          {
            type: "tip",
            level: "BOTH",
            title: "Optimisation problems",
            content: "Write one variable in terms of another using the constraint, substitute into the objective function, differentiate and set equal to zero."
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Related rates",
            content: "Use chain rule: $\\dfrac{dV}{dt} = \\dfrac{dV}{dr} \\cdot \\dfrac{dr}{dt}$. Always identify what you're given and what you want."
          }
        ],
        examples: []
      },
      {
        id: "5.4",
        title: "Integration techniques",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Standard integrals",
            content: "$$\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C, \\quad n \\neq -1$$\n$$\\int \\frac{1}{x}\\,dx = \\ln|x| + C$$\n$$\\int e^x\\,dx = e^x + C$$\n$$\\int \\sin x\\,dx = -\\cos x + C$$\n$$\\int \\cos x\\,dx = \\sin x + C$$"
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Substitution",
            content: "Let $u = g(x)$, then $du = g'(x)\\,dx$:\n$$\\int f(g(x))g'(x)\\,dx = \\int f(u)\\,du$$"
          },
          {
            type: "formula",
            level: "HL",
            title: "Integration by parts",
            content: "$$\\int u\\,dv = uv - \\int v\\,du$$\nUse LIATE to choose $u$: Logarithm, Inverse trig, Algebraic, Trig, Exponential."
          }
        ],
        examples: [
          {
            level: "SL",
            title: "Integration by substitution",
            steps: [
              "Evaluate $\\int 2x(x^2+1)^3\\,dx$",
              "Let $u = x^2 + 1 \\Rightarrow du = 2x\\,dx$",
              "$\\int u^3\\,du = \\frac{u^4}{4} + C$",
              "$= \\dfrac{(x^2+1)^4}{4} + C$"
            ]
          },
          {
            level: "HL",
            title: "Integration by parts",
            steps: [
              "Evaluate $\\int x e^x\\,dx$",
              "Let $u = x$, $dv = e^x\\,dx$",
              "Then $du = dx$, $v = e^x$",
              "$\\int x e^x\\,dx = xe^x - \\int e^x\\,dx = xe^x - e^x + C = e^x(x-1) + C$"
            ]
          }
        ]
      },
      {
        id: "5.5",
        title: "Differential equations",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Separable equations",
            content: "Rearrange to: $\\dfrac{dy}{dx} = f(x)g(y)$\nThen: $\\displaystyle\\int \\frac{1}{g(y)}\\,dy = \\int f(x)\\,dx$"
          },
          {
            type: "formula",
            level: "HL",
            title: "Integrating factor (linear 1st order)",
            content: "For $\\dfrac{dy}{dx} + P(x)y = Q(x)$:\n$$\\text{IF} = e^{\\int P(x)\\,dx}$$\nMultiply both sides by IF, then integrate."
          }
        ],
        examples: []
      },
      {
        id: "5.6",
        title: "Maclaurin series",
        notes: [
          {
            type: "formula",
            level: "HL",
            title: "Maclaurin series definition",
            content: "$$f(x) = f(0) + f'(0)x + \\frac{f''(0)}{2!}x^2 + \\frac{f'''(0)}{3!}x^3 + \\cdots$$"
          },
          {
            type: "formula",
            level: "HL",
            title: "Standard Maclaurin series",
            content: "$$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots$$\n$$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots$$\n$$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots$$\n$$\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots, \\; |x| < 1$$"
          },
          {
            type: "tip",
            level: "HL",
            title: "Substitution trick",
            content: "For $e^{x^2}$, substitute $x^2$ into the standard $e^x$ series — no need to differentiate from scratch."
          }
        ],
        examples: []
      }
    ]
  }
];
