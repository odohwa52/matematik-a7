// ============================================================
// MATEMATIK A7 — TOPIC DATA (COMPREHENSIVE)
// ============================================================

const TOPICS = [
  // ══════════════════════════════════════════════════════════
  // TOPIC 1: NUMBER & ALGEBRA
  // ══════════════════════════════════════════════════════════
  {
    id: "1",
    title: "Number & algebra",
    subtopics: [
      // 1.1 ─ Standard form & indices
      {
        id: "1.1",
        title: "Standard form & indices",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Standard form (scientific notation)",
            content: "A number is in standard form when written as $a \\times 10^n$ where $1 \\leq |a| < 10$ and $n \\in \\mathbb{Z}$.\n\nLarge numbers: $n > 0$ (e.g. $3240000 = 3.24 \\times 10^6$)\nSmall numbers: $n < 0$ (e.g. $0.000567 = 5.67 \\times 10^{-4}$)"
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Operations in standard form",
            content: "Multiply: multiply the $a$-parts, add the powers of 10. Divide: divide the $a$-parts, subtract the powers of 10.\n\nAdd/Subtract: first convert all terms to the same power of 10, then add/subtract the $a$-parts.\n\ne.g. $(4 \\times 10^{50}) + (2 \\times 10^{48}) = (4 + 0.02) \\times 10^{50} = 4.02 \\times 10^{50}$"
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Laws of indices",
            content: "$$a^m \\times a^n = a^{m+n} \\qquad a^m \\div a^n = a^{m-n}$$\n$$(a^m)^n = a^{mn} \\qquad (ab)^n = a^n b^n \\qquad \\left(\\frac{a}{b}\\right)^n = \\frac{a^n}{b^n}$$\n$$a^0 = 1 \\qquad a^{-n} = \\frac{1}{a^n} \\qquad a^{1/n} = \\sqrt[n]{a} \\qquad a^{m/n} = \\left(\\sqrt[n]{a}\\right)^m$$"
          },
          {
            type: "note",
            level: "BOTH",
            title: "Changing the base",
            content: "Index laws only work with the same base. If bases differ, rewrite as powers of a common base. E.g. $2^5 \\times 4^3 = 2^5 \\times (2^2)^3 = 2^5 \\times 2^6 = 2^{11}$."
          },
          {
            type: "note",
            level: "BOTH",
            title: "Fractional and negative indices",
            content: "For $a^{m/n}$: the denominator $n$ is the root, the numerator $m$ is the power. Either order gives the same result: $8^{2/3} = (\\sqrt[3]{8})^2 = 2^2 = 4$.\n\nFor negative indices, always take the reciprocal first: $64^{-1/2} = \\dfrac{1}{\\sqrt{64}} = \\dfrac{1}{8}$."
          },
          {
            type: "mistake",
            level: "BOTH",
            title: "Common index law errors",
            content: "$a^m \\times a^n = a^{m+n}$ NOT $a^{mn}$. The law requires the same base — $2^3 \\times 5^2$ cannot be simplified.\n\nAlso: $(a+b)^n \\neq a^n + b^n$. Only products split: $(ab)^n = a^n b^n$."
          },
          {
            type: "tip",
            level: "BOTH",
            title: "GDC: standard form",
            content: "Your GDC can multiply, divide, add, and subtract numbers in standard form. Use the EE or $\\times 10^n$ button. Always verify the final answer is in the form $a \\times 10^n$ with $1 \\leq |a| < 10$."
          }
        ],
        examples: []
      },

      // 1.2 ─ Sequences & series
      {
        id: "1.2",
        title: "Sequences & series",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Arithmetic sequences",
            content: "A sequence where consecutive terms differ by a constant $d$ (common difference).\n\n$$u_n = u_1 + (n-1)d$$\n$$S_n = \\frac{n}{2}\\bigl(2u_1 + (n-1)d\\bigr) = \\frac{n}{2}(u_1 + u_n)$$\n\nBoth formulae are in the formula booklet."
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Geometric sequences",
            content: "A sequence where each term is multiplied by a constant $r$ (common ratio).\n\n$$u_n = u_1 \\cdot r^{n-1}$$\n$$S_n = \\frac{u_1(r^n - 1)}{r - 1} = \\frac{u_1(1 - r^n)}{1 - r}, \\quad r \\neq 1$$\n\nUse the first form when $r > 1$, the second when $r < 1$."
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Sum to infinity (convergent geometric series)",
            content: "$$S_\\infty = \\frac{u_1}{1-r}, \\quad \\text{valid only when } |r| < 1$$\n\nIf $|r| \\geq 1$, the series diverges and no sum to infinity exists."
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Sigma notation",
            content: "$$\\sum_{r=1}^{n} f(r) = f(1) + f(2) + \\cdots + f(n)$$\n\nThe lower limit does not have to start at 1. The letter $r$ or $k$ is the index variable. Your GDC can evaluate sigma notation directly."
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Compound interest",
            content: "$$FV = PV \\times \\left(1 + \\frac{r}{100k}\\right)^{kn}$$\n\nwhere $FV$ = future value, $PV$ = present value, $n$ = years, $k$ = compounding periods per year, $r\\%$ = nominal annual rate. Formula is in the booklet."
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Compound depreciation",
            content: "$$FV = PV \\times \\left(1 - \\frac{r}{100}\\right)^n$$\n\nwhere $r\\%$ is the annual depreciation rate. Not in the formula booklet — derive it from the compound interest formula by setting $k=1$ and changing $+$ to $-$."
          },
          {
            type: "note",
            level: "BOTH",
            title: "Identifying arithmetic vs geometric",
            content: "Arithmetic: quantity changes by a fixed addition/subtraction each period (e.g. simple interest, stacking objects).\nGeometric: quantity changes by a fixed multiplication each period (e.g. compound interest, population growth, radioactive decay)."
          },
          {
            type: "tip",
            level: "BOTH",
            title: "Finding common ratio or difference",
            content: "For a geometric sequence, divide any term by the previous one: $r = u_{n+1}/u_n$. To find $n$ when unknown, use logarithms to solve $r^{n-1} = k$."
          },
          {
            type: "mistake",
            level: "BOTH",
            title: "Off-by-one in sequences",
            content: "In $u_n = u_1 + (n-1)d$, the difference is applied $n-1$ times (not $n$), since the first term has no difference applied. E.g. the 5th term uses $d$ four times."
          },
          {
            type: "mistake",
            level: "BOTH",
            title: "Sum to infinity without checking convergence",
            content: "Always verify $|r| < 1$ before using $S_\\infty = u_1/(1-r)$. If $|r| \\geq 1$ the series diverges to infinity — the formula gives a meaningless result."
          }
        ],
        examples: [
          {
            level: "SL",
            title: "Find the sum of an arithmetic series",
            steps: [
              "Given $u_1 = 3$, $d = 4$, find $S_{20}$",
              "Using $S_n = \\frac{n}{2}(2u_1 + (n-1)d)$",
              "$S_{20} = \\frac{20}{2}(6 + 76) = 10 \\times 82 = 820$"
            ]
          },
          {
            level: "SL",
            title: "Infinite geometric series — find r",
            steps: [
              "Given $S_\\infty = 12$ and $u_1 = 4$, find $r$",
              "$12 = \\frac{4}{1-r} \\Rightarrow 1-r = \\frac{1}{3} \\Rightarrow r = \\frac{2}{3}$",
              "Check: $|r| = \\frac{2}{3} < 1$ ✓ convergence confirmed"
            ]
          }
        ]
      },

      // 1.3 ─ Logarithms & exponents
      {
        id: "1.3",
        title: "Logarithms & exponents",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Logarithm definition",
            content: "$$a^x = b \\iff x = \\log_a b, \\quad a, b > 0,\\ a \\neq 1$$\n\nSpecial cases:\n$\\ln x = \\log_e x$ (natural logarithm, base $e \\approx 2.718$)\n$\\log x = \\log_{10} x$ (common logarithm, base 10)"
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Laws of logarithms",
            content: "$$\\log_a(xy) = \\log_a x + \\log_a y$$\n$$\\log_a\\!\left(\\frac{x}{y}\\right) = \\log_a x - \\log_a y$$\n$$\\log_a(x^m) = m\\log_a x$$\n$$\\log_a b = \\frac{\\ln b}{\\ln a} \\quad \\text{(change of base)}$$\n\nAll in the formula booklet. Also: $\\log_a 1 = 0$, $\\log_a a = 1$."
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Exponential and logarithmic functions",
            content: "$$a^x = e^{x \\ln a}, \\quad \\ln(e^x) = x, \\quad e^{\\ln x} = x$$\n\nGrowth/decay model: $N(t) = N_0 e^{kt}$\nHalf-life: $t_{1/2} = \\dfrac{\\ln 2}{k}$"
          },
          {
            type: "note",
            level: "BOTH",
            title: "Why use logarithms?",
            content: "Logarithms are the tool for solving equations where the unknown is in the exponent. E.g. $2^x = 10 \\Rightarrow x = \\log_2 10 = \\frac{\\ln 10}{\\ln 2} \\approx 3.32$. Use your GDC's logBASE function for non-standard bases."
          },
          {
            type: "mistake",
            level: "BOTH",
            title: "Log of a sum is NOT the sum of logs",
            content: "$\\log(a+b) \\neq \\log a + \\log b$. Only products and quotients split: $\\log(xy) = \\log x + \\log y$. This is the single most common log error in exams."
          },
          {
            type: "note",
            level: "BOTH",
            title: "Solving exponential equations",
            content: "Take $\\ln$ (or $\\log$) of both sides: $\\ln(A \\cdot b^x) = \\ln A + x \\ln b$. Isolate $x$ using algebra. Always check for domain restrictions: $\\log$ is undefined for non-positive arguments."
          }
        ],
        examples: [
          {
            level: "SL",
            title: "Solve a logarithmic equation",
            steps: [
              "Solve: $\\log_2(x+3) + \\log_2(x-1) = 5$",
              "Combine: $\\log_2[(x+3)(x-1)] = 5$",
              "$(x+3)(x-1) = 2^5 = 32 \\Rightarrow x^2+2x-35 = 0$",
              "$(x+7)(x-5) = 0 \\Rightarrow x = 5$ (reject $x = -7$ since $\\log$ undefined)"
            ]
          }
        ]
      },

      // 1.4 ─ Binomial theorem
      {
        id: "1.4",
        title: "Binomial theorem",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Binomial theorem",
            content: "$$(a+b)^n = \\sum_{r=0}^{n} \\binom{n}{r} a^{n-r} b^r, \\quad n \\in \\mathbb{Z}^+$$\n$$\\binom{n}{r} = {}^nC_r = \\frac{n!}{r!(n-r)!}$$\n\nThe general term is $\\binom{n}{r}a^{n-r}b^r$. Both formulae are in the booklet."
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Combinations and permutations",
            content: "$${}^nC_r = \\frac{n!}{r!(n-r)!} \\quad \\text{(order does not matter)}$$\n$${}^nP_r = \\frac{n!}{(n-r)!} \\quad \\text{(order matters)}$$\n$${}^nP_r = r! \\times {}^nC_r$$\n\nNote: ${}^nC_r = {}^nC_{n-r}$ (symmetry). Both formulae in the booklet."
          },
          {
            type: "formula",
            level: "HL",
            title: "Extension: binomial series for fractional/negative n",
            content: "$$(1+x)^n = 1 + nx + \\frac{n(n-1)}{2!}x^2 + \\frac{n(n-1)(n-2)}{3!}x^3 + \\cdots$$\n\nValid for $|x| < 1$, $n \\in \\mathbb{Q}$. This is an infinite series when $n$ is not a positive integer."
          },
          {
            type: "note",
            level: "BOTH",
            title: "Finding a specific term",
            content: "To find the term in $x^k$: substitute into the general term $\\binom{n}{r}a^{n-r}b^r$, look only at the power of $x$, set it equal to $k$, solve for $r$, then compute the whole term."
          },
          {
            type: "tip",
            level: "BOTH",
            title: "Combinations: when to multiply",
            content: "When selecting from multiple independent groups, multiply the ${}^nC_r$ values together. E.g. 2 left-handed from 5 AND 4 right-handed from 15: ${}^5C_2 \\times {}^{15}C_4$ ways."
          },
          {
            type: "mistake",
            level: "BOTH",
            title: "Permutation vs combination",
            content: "Use ${}^nC_r$ when order does not matter (selecting a team, choosing colours to mix). Use ${}^nP_r$ when order matters (passwords, race finishing positions, arranging letters). When in doubt, ask: does swapping two items give a different outcome?"
          }
        ],
        examples: [
          {
            level: "SL",
            title: "Find the coefficient of $x^3$",
            steps: [
              "In $(2+3x)^5$, find the coefficient of $x^3$",
              "General term: $\\binom{5}{r}(2)^{5-r}(3x)^r$",
              "For $x^3$: set $r=3$: $\\binom{5}{3}(2)^2(3)^3 = 10 \\cdot 4 \\cdot 27 = 1080$"
            ]
          }
        ]
      },

      // 1.5 ─ Complex numbers
      {
        id: "1.5",
        title: "Complex numbers",
        notes: [
          {
            type: "formula",
            level: "HL",
            title: "Imaginary unit and Cartesian form",
            content: "$$i = \\sqrt{-1}, \\quad i^2 = -1$$\n\nCartesian form: $z = a + bi$, where $a = \\text{Re}(z)$, $b = \\text{Im}(z)$, $a,b \\in \\mathbb{R}$.\n\nPowers of $i$ cycle with period 4: $i, -1, -i, 1, i, -1, \\ldots$\n\nTwo complex numbers are equal iff both real and imaginary parts are equal."
          },
          {
            type: "formula",
            level: "HL",
            title: "Complex arithmetic",
            content: "Addition/Subtraction: add/subtract real and imaginary parts separately.\n\nMultiplication: expand brackets using $i^2 = -1$.\n$$(a+bi)(c+di) = (ac-bd) + (ad+bc)i$$\n\nDivision: multiply numerator and denominator by the complex conjugate of the denominator.\n$$\\frac{a+bi}{c+di} = \\frac{(a+bi)(c-di)}{c^2+d^2}$$"
          },
          {
            type: "formula",
            level: "HL",
            title: "Modulus and argument",
            content: "Modulus: $|z| = r = \\sqrt{a^2 + b^2}$\n\nArgument: $\\arg(z) = \\theta$ where $\\tan\\theta = b/a$, adjusted for quadrant.\n\nPrincipal argument: $\\theta \\in (-\\pi, \\pi]$\n\nComplex conjugate: $z^* = a - bi$. Note: $|z|^2 = z \\cdot z^*$."
          },
          {
            type: "formula",
            level: "HL",
            title: "Polar and exponential (Euler) forms",
            content: "$$z = r(\\cos\\theta + i\\sin\\theta) = r\\,\\text{cis}\\,\\theta = re^{i\\theta}$$\n\nConvert from Cartesian: $r = \\sqrt{a^2+b^2}$, find $\\theta$ using $\\tan\\theta = b/a$ and quadrant check.\n\nConvert to Cartesian: $a = r\\cos\\theta$, $b = r\\sin\\theta$.\n\nEuler's identity: $e^{i\\pi} + 1 = 0$"
          },
          {
            type: "formula",
            level: "HL",
            title: "Multiplying and dividing in polar/exponential form",
            content: "$$z_1 z_2 = r_1 r_2 \\, e^{i(\\theta_1+\\theta_2)} \\qquad \\frac{z_1}{z_2} = \\frac{r_1}{r_2}\\, e^{i(\\theta_1-\\theta_2)}$$\n\nMultiply moduli, add arguments. Divide moduli, subtract arguments.\n\nIf the resulting argument falls outside $(-\\pi, \\pi]$, add or subtract $2\\pi$ to bring it into range."
          },
          {
            type: "formula",
            level: "HL",
            title: "De Moivre's theorem",
            content: "$$(re^{i\\theta})^n = r^n e^{in\\theta} = r^n(\\cos n\\theta + i\\sin n\\theta)$$\n\nUsed for: computing powers of complex numbers, finding $n$th roots, proving trig identities."
          },
          {
            type: "formula",
            level: "HL",
            title: "Complex roots of polynomials",
            content: "A degree-$n$ polynomial with real coefficients has exactly $n$ roots (counted with multiplicity).\n\nComplex roots always occur in conjugate pairs: if $z = p+qi$ is a root, so is $z^* = p-qi$.\n\nA cubic with real coefficients has either 3 real roots, or 1 real root and a conjugate pair."
          },
          {
            type: "tip",
            level: "HL",
            title: "Argument: always check the quadrant",
            content: "$\\arctan(b/a)$ only gives the correct argument when $z$ is in Q1 or Q4. For Q2: $\\theta = \\pi + \\arctan(b/a)$. For Q3: $\\theta = -\\pi + \\arctan(b/a)$. Sketching on an Argand diagram before computing avoids errors."
          },
          {
            type: "mistake",
            level: "HL",
            title: "Conjugate in polar form",
            content: "The conjugate of $re^{i\\theta}$ is $re^{-i\\theta}$, NOT $re^{i\\theta}$ with a negative in front of $\\sin$. You cannot write $r(\\cos\\theta - i\\sin\\theta)$ as having argument $\\theta$ — the argument is $-\\theta$."
          }
        ],
        examples: [
          {
            level: "HL",
            title: "Convert to polar form",
            steps: [
              "Write $z = -1 + i$ in polar form",
              "$r = \\sqrt{(-1)^2 + 1^2} = \\sqrt{2}$",
              "$\\theta = \\pi - \\arctan(1) = \\frac{3\\pi}{4}$ (Q2, since Re < 0, Im > 0)",
              "$z = \\sqrt{2}\\,e^{i3\\pi/4}$"
            ]
          },
          {
            level: "HL",
            title: "Divide complex numbers in Cartesian form",
            steps: [
              "Find $\\dfrac{3+4i}{1+2i}$",
              "Multiply top and bottom by conjugate $(1-2i)$:",
              "$= \\dfrac{(3+4i)(1-2i)}{(1+2i)(1-2i)} = \\dfrac{3-6i+4i-8i^2}{1+4} = \\dfrac{11-2i}{5}$",
              "$= \\dfrac{11}{5} - \\dfrac{2}{5}i$"
            ]
          }
        ]
      },

      // 1.6 ─ Proof
      {
        id: "1.6",
        title: "Proof",
        notes: [
          {
            type: "tip",
            level: "HL",
            title: "Types of proof you need to know",
            content: "Direct proof: derive the result step-by-step using known facts and algebra.\n\nProof by induction: for statements about positive integers.\n\nProof by contradiction: assume the negation, derive a logical impossibility.\n\nProof by counterexample: a single example that disproves a universal statement."
          },
          {
            type: "formula",
            level: "HL",
            title: "Proof by induction — structure",
            content: "Step 1 (Base case): Prove true for $n = 1$ (or the stated starting value).\n\nStep 2 (Assumption): Assume true for $n = k$, for some arbitrary $k \\geq 1$.\n\nStep 3 (Inductive step): Using the assumption, prove true for $n = k+1$.\n\nStep 4 (Conclusion): 'Since P(1) is true and P(k) implies P(k+1), by mathematical induction P(n) is true for all $n \\in \\mathbb{Z}^+$.'"
          },
          {
            type: "tip",
            level: "HL",
            title: "Proof by induction — useful tricks",
            content: "For series: $\\sum_{r=1}^{k+1} f(r) = f(k+1) + \\sum_{r=1}^{k} f(r)$, then substitute the inductive hypothesis.\n\nFor divisibility by $m$: write $f(k) = m \\cdot q$ where $q \\in \\mathbb{Z}^+$, then express $f(k+1)$ in terms of $f(k)$ and isolate a factor of $m$.\n\nFor derivatives: use $f^{(k+1)}(x) = \\frac{d}{dx}f^{(k)}(x)$."
          },
          {
            type: "formula",
            level: "HL",
            title: "Proof by contradiction — structure",
            content: "Step 1: Assume the negation of the statement is true.\n\nStep 2: Use algebra/logic to derive two results that contradict each other.\n\nStep 3: Conclude that the negation is impossible, therefore the original statement is true.\n\nCommon applications: proving irrationality (e.g. $\\sqrt{2}$), proving infinitely many primes, showing no maximum element exists."
          },
          {
            type: "mistake",
            level: "HL",
            title: "Incomplete induction conclusion",
            content: "The conclusion must explicitly reference both the base case AND the implication. Writing only 'therefore true by induction' without mentioning n=1 is incomplete. Also: never skip the base case — without it the chain of implications has no anchor."
          }
        ],
        examples: [
          {
            level: "HL",
            title: "Proof by induction — summation",
            steps: [
              "Prove $\\sum_{r=1}^n r = \\frac{n(n+1)}{2}$ for all $n \\in \\mathbb{Z}^+$",
              "Base case $n=1$: LHS $= 1$, RHS $= \\frac{1 \\cdot 2}{2} = 1$ ✓",
              "Assume $\\sum_{r=1}^k r = \\frac{k(k+1)}{2}$ for some $k \\geq 1$",
              "Show for $n=k+1$: $\\sum_{r=1}^{k+1} r = \\frac{k(k+1)}{2} + (k+1) = (k+1)\\left(\\frac{k}{2}+1\\right) = \\frac{(k+1)(k+2)}{2}$ ✓",
              "Conclusion: True for all $n \\in \\mathbb{Z}^+$ by mathematical induction."
            ]
          }
        ]
      },

      // 1.7 ─ Partial fractions
      {
        id: "1.7",
        title: "Partial fractions",
        notes: [
          {
            type: "formula",
            level: "HL",
            title: "Partial fractions — standard forms",
            content: "$$\\frac{ax+b}{(cx+d)(ex+f)} \\equiv \\frac{A}{cx+d} + \\frac{B}{ex+f}$$\n\nFor a squared linear factor:\n$$\\frac{c}{(ax+b)^2} \\equiv \\frac{A}{ax+b} + \\frac{B}{(ax+b)^2}$$\n\nFor improper fractions (degree numerator $\\geq$ degree denominator), first divide to get a constant plus a proper fraction."
          },
          {
            type: "tip",
            level: "HL",
            title: "Method: cover-up (substitution)",
            content: "After multiplying both sides by the denominator, substitute the roots of each linear factor in turn to isolate each unknown constant. This is faster than comparing coefficients.\n\nE.g. for $5x+5 \\equiv A(x-2) + B(x+3)$: let $x=2$ to find $B=3$; let $x=-3$ to find $A=2$."
          },
          {
            type: "tip",
            level: "HL",
            title: "When to use partial fractions",
            content: "Partial fractions appear most often in integration (Topic 5). If you see a rational function in an integral, partial fractions is usually the right decomposition to apply first."
          },
          {
            type: "mistake",
            level: "HL",
            title: "Improper fractions need polynomial division first",
            content: "If the degree of the numerator $\\geq$ degree of denominator, partial fractions cannot be applied directly. Perform polynomial long division first to write the fraction as (polynomial) + (proper fraction), then decompose the proper fraction."
          }
        ],
        examples: []
      },

      // 1.8 ─ Systems of equations
      {
        id: "1.8",
        title: "Systems of linear equations",
        notes: [
          {
            type: "formula",
            level: "HL",
            title: "Three types of solution",
            content: "A system of 3 linear equations in 3 unknowns can have:\n\n1. Unique solution — planes intersect at a single point\n2. No solution (inconsistent) — planes do not all share a common point (e.g. parallel planes)\n3. Infinite solutions (dependent) — planes share a line or are all the same plane"
          },
          {
            type: "note",
            level: "HL",
            title: "Identifying the type of solution",
            content: "After row reduction: if a row reads $0 = k$ where $k \\neq 0$, the system is inconsistent (no solution). If one or more rows read $0 = 0$, the system is dependent (infinite solutions — express using a parameter $\\lambda$)."
          },
          {
            type: "formula",
            level: "HL",
            title: "General solution for dependent systems",
            content: "If one row becomes $0 = 0$ after row reduction, introduce a parameter $\\lambda$. Let the free variable equal $\\lambda$, then express the other variables in terms of $\\lambda$.\n\nE.g. if $x = \\lambda$, back-substitute to find $y = 3\\lambda - 5$ and $z = 7 - 2\\lambda$, $\\lambda \\in \\mathbb{R}$."
          },
          {
            type: "tip",
            level: "HL",
            title: "GDC: solve systems",
            content: "Use your GDC's matrix functions (rref or linSolve) to solve systems quickly in Paper 2. Always verify by substituting back into the original equations."
          },
          {
            type: "mistake",
            level: "HL",
            title: "Geometric interpretation",
            content: "Three planes can intersect in many ways. A unique solution means one point. Infinite solutions mean a line (one free parameter) or a plane (two free parameters). No solution can arise from parallel planes or a triangular prism arrangement."
          }
        ],
        examples: []
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // TOPIC 2: FUNCTIONS
  // ══════════════════════════════════════════════════════════
  {
    id: "2",
    title: "Functions",
    subtopics: [
      // 2.1 ─ Functions, domain & range
      {
        id: "2.1",
        title: "Functions, domain & range",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Function concepts",
            content: "A function $f: A \\to B$ assigns exactly one output to each input. $A$ is the domain, $B$ contains the range (image).\n\nVertical line test: a graph represents a function iff every vertical line meets it at most once.\n\nComposite function: $(f \\circ g)(x) = f(g(x))$ — apply $g$ first, then $f$."
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Inverse functions",
            content: "$f^{-1}$ exists iff $f$ is one-to-one (each output has a unique input).\n\nTo find $f^{-1}(x)$: write $y = f(x)$, swap $x$ and $y$, solve for $y$.\n\nDomain of $f^{-1}$ = range of $f$. Range of $f^{-1}$ = domain of $f$.\n\nGraph of $f^{-1}$ is the reflection of $f$ in the line $y = x$."
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Straight line equations",
            content: "Gradient: $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$\n\nGradient-intercept form: $y = mx + c$\n\nPoint-gradient form: $y - y_1 = m(x - x_1)$\n\nGeneral form: $ax + by + d = 0$\n\nParallel lines: $m_1 = m_2$. Perpendicular lines: $m_1 \\times m_2 = -1$."
          },
          {
            type: "note",
            level: "BOTH",
            title: "Domain restrictions to watch for",
            content: "Even roots require non-negative argument: $\\sqrt{f(x)}$ requires $f(x) \\geq 0$.\nLogarithms require positive argument: $\\ln(f(x))$ requires $f(x) > 0$.\nRational functions require non-zero denominator.\nInverse trig functions have restricted domains."
          },
          {
            type: "mistake",
            level: "BOTH",
            title: "Perpendicular gradients",
            content: "If $m_1 = 5$, then $m_2 = -\\frac{1}{5}$ (NOT $\\frac{1}{5}$). The perpendicular gradient is the negative reciprocal. Note: vertical line $x = p$ and horizontal line $y = q$ are perpendicular to each other."
          }
        ],
        examples: [
          {
            level: "SL",
            title: "Find the inverse function",
            steps: [
              "Find $f^{-1}(x)$ for $f(x) = \\dfrac{2x+1}{x-3}$",
              "Write $y = \\dfrac{2x+1}{x-3}$, swap $x$ and $y$: $x = \\dfrac{2y+1}{y-3}$",
              "$x(y-3) = 2y+1 \\Rightarrow xy - 2y = 3x+1 \\Rightarrow y(x-2) = 3x+1$",
              "$f^{-1}(x) = \\dfrac{3x+1}{x-2}$, domain: $x \\neq 2$"
            ]
          }
        ]
      },

      // 2.2 ─ Quadratic functions
      {
        id: "2.2",
        title: "Quadratic functions",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Forms of a quadratic",
            content: "General form: $f(x) = ax^2 + bx + c$ — shows $y$-intercept $(0,c)$\n\nFactorised form: $f(x) = a(x-p)(x-q)$ — shows roots $p$ and $q$\n\nVertex form: $f(x) = a(x-h)^2 + k$ — shows vertex $(h,k)$\n\nAxis of symmetry: $x = -\\dfrac{b}{2a}$ (in formula booklet)"
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Quadratic formula and discriminant",
            content: "$$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$$\n\nDiscriminant $\\Delta = b^2 - 4ac$:\n$\\Delta > 0$: two distinct real roots\n$\\Delta = 0$: one repeated real root (tangent to x-axis)\n$\\Delta < 0$: no real roots (complex roots)"
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Completing the square",
            content: "For $x^2 + bx + c$: write $\\left(x + \\dfrac{b}{2}\\right)^2 - \\left(\\dfrac{b}{2}\\right)^2 + c$\n\nFor $ax^2 + bx + c$: factorise $a$ from the $x$-terms first:\n$$a\\left(x + \\frac{b}{2a}\\right)^2 - \\frac{b^2}{4a} + c$$\n\nVertex is at $\\left(-\\dfrac{b}{2a},\\ c - \\dfrac{b^2}{4a}\\right)$"
          },
          {
            type: "tip",
            level: "BOTH",
            title: "Choosing a solving method",
            content: "Calculator paper: use GDC to find roots directly.\nNon-calculator: factorise if possible with integer coefficients; otherwise use the quadratic formula (always works) or completing the square."
          },
          {
            type: "mistake",
            level: "BOTH",
            title: "Shape from the sign of a",
            content: "If $a > 0$: parabola opens upward (∪), has a minimum, range is $[k, \\infty)$.\nIf $a < 0$: parabola opens downward (∩), has a maximum, range is $(-\\infty, k]$."
          }
        ],
        examples: []
      },

      // 2.3 ─ Rational & other functions
      {
        id: "2.3",
        title: "Rational & special functions",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Rational function — asymptotes",
            content: "For $f(x) = \\dfrac{ax+b}{cx+d}$:\n\nVertical asymptote: $x = -\\dfrac{d}{c}$ (where denominator = 0)\n\nHorizontal asymptote: $y = \\dfrac{a}{c}$ (ratio of leading coefficients)\n\nThe function never crosses a vertical asymptote but may cross a horizontal one."
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Exponential and logarithmic key properties",
            content: "$$a^x = e^{x\\ln a}, \\qquad e^{\\ln x} = x, \\qquad \\ln(e^x) = x$$\n\n$y = e^x$: domain $\\mathbb{R}$, range $(0,\\infty)$, horizontal asymptote $y=0$\n\n$y = \\ln x$: domain $(0,\\infty)$, range $\\mathbb{R}$, vertical asymptote $x=0$\n\nGrowth/decay: $N = N_0 e^{kt}$ ($k>0$ growth, $k<0$ decay)"
          },
          {
            type: "note",
            level: "BOTH",
            title: "Sketching rational functions",
            content: "Find: vertical asymptotes (denominator = 0), horizontal asymptote (degree comparison), $x$-intercepts (numerator = 0), $y$-intercept (substitute $x=0$). Check behaviour on each side of vertical asymptotes."
          },
          {
            type: "formula",
            level: "HL",
            title: "Sum and product of polynomial roots",
            content: "For $a_n z^n + a_{n-1}z^{n-1} + \\cdots + a_0 = 0$:\n\n$$\\text{Sum of roots} = -\\frac{a_{n-1}}{a_n}, \\qquad \\text{Product of roots} = (-1)^n\\frac{a_0}{a_n}$$\n\nFor a quadratic $az^2+bz+c=0$: sum $= -b/a$, product $= c/a$."
          }
        ],
        examples: []
      },

      // 2.4 ─ Transformations
      {
        id: "2.4",
        title: "Transformations of graphs",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Standard graph transformations",
            content: "$f(x) + a$ — vertical translation up $a$ units\n$f(x+a)$ — horizontal translation LEFT $a$ units\n$af(x)$ — vertical stretch, scale factor $a$\n$f(ax)$ — horizontal stretch, scale factor $\\frac{1}{a}$\n$-f(x)$ — reflection in the $x$-axis\n$f(-x)$ — reflection in the $y$-axis"
          },
          {
            type: "note",
            level: "BOTH",
            title: "Order of transformations",
            content: "When multiple transformations apply to $x$ inside the function (horizontal), work right-to-left (inside out). For outside transformations (vertical), work left-to-right.\n\nFor $y = af(bx+c)+d$: inside is $bx+c$ — translation first, then stretch."
          },
          {
            type: "formula",
            level: "HL",
            title: "Reciprocal transformation $y = 1/f(x)$",
            content: "Key rules:\n• $x$-intercepts of $f$ become vertical asymptotes of $1/f$\n• Vertical asymptotes of $f$ become $x$-intercepts of $1/f$\n• Local max of $f$ becomes local min of $1/f$ (and vice versa, value inverted)\n• $y = \\pm 1$ on $f$ stays at $y = \\pm 1$ on $1/f$\n• $f$ increasing $\\Rightarrow$ $1/f$ decreasing (and vice versa)"
          },
          {
            type: "formula",
            level: "HL",
            title: "Square transformation $y = [f(x)]^2$",
            content: "All output values are squared:\n• Negative values of $f$ become positive on $[f(x)]^2$\n• $x$-intercepts become smooth touching points (minimum) on $[f(x)]^2$\n• Points where $|f(x)| < 1$ move closer to $x$-axis; points where $|f(x)| > 1$ move further away\n• Points at $y = 0$ or $y = 1$ are unchanged"
          },
          {
            type: "mistake",
            level: "BOTH",
            title: "Horizontal direction is reversed",
            content: "$f(x-3)$ shifts the graph RIGHT by 3 (not left). $f(x+3)$ shifts LEFT by 3. The sign inside the bracket is opposite to the direction of movement. Always rewrite as $f(x - (+3))$ to see the shift is $+3$ to the right."
          }
        ],
        examples: []
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // TOPIC 3: GEOMETRY & TRIGONOMETRY
  // ══════════════════════════════════════════════════════════
  {
    id: "3",
    title: "Geometry & trigonometry",
    subtopics: [
      // 3.1 ─ Coordinate geometry & mensuration
      {
        id: "3.1",
        title: "Coordinate geometry & mensuration",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "2D and 3D distance and midpoint",
            content: "2D distance: $d = \\sqrt{(x_1-x_2)^2 + (y_1-y_2)^2}$\n\n3D distance: $d = \\sqrt{(x_1-x_2)^2+(y_1-y_2)^2+(z_1-z_2)^2}$\n\nMidpoint 2D: $\\left(\\dfrac{x_1+x_2}{2}, \\dfrac{y_1+y_2}{2}\\right)$\n\nMidpoint 3D: $\\left(\\dfrac{x_1+x_2}{2}, \\dfrac{y_1+y_2}{2}, \\dfrac{z_1+z_2}{2}\\right)$"
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Volumes and surface areas",
            content: "Pyramid: $V = \\frac{1}{3}Ah$\nCone: $V = \\frac{1}{3}\\pi r^2 h$, curved SA $= \\pi r l$\nSphere: $V = \\frac{4}{3}\\pi r^3$, SA $= 4\\pi r^2$\nCylinder: $V = \\pi r^2 h$, curved SA $= 2\\pi r h$"
          },
          {
            type: "note",
            level: "BOTH",
            title: "Distance is an application of Pythagoras",
            content: "The distance formula is simply Pythagoras' theorem applied to coordinate differences. It does not matter which point is $(x_1, y_1)$ since the differences are squared."
          }
        ],
        examples: []
      },

      // 3.2 ─ Radian measure, arcs & sectors
      {
        id: "3.2",
        title: "Radian measure, arcs & sectors",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Radian measure",
            content: "$$\\pi \\text{ rad} = 180° \\qquad \\theta_{\\text{rad}} = \\theta_{\\text{deg}} \\times \\frac{\\pi}{180}$$\n\nArc length: $l = r\\theta$\nSector area: $A = \\frac{1}{2}r^2\\theta$\n\nwhere $\\theta$ is in radians. Both formulae are in the formula booklet."
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Key radian conversions",
            content: "$$0° = 0 \\qquad 30° = \\frac{\\pi}{6} \\qquad 45° = \\frac{\\pi}{4} \\qquad 60° = \\frac{\\pi}{3} \\qquad 90° = \\frac{\\pi}{2} \\qquad 180° = \\pi \\qquad 360° = 2\\pi$$"
          },
          {
            type: "note",
            level: "BOTH",
            title: "Arc length vs chord length",
            content: "Arc length $l = r\\theta$ measures along the curve. Chord length uses the distance formula between the endpoints. The perimeter of a sector is $l + 2r$ (arc plus two radii)."
          },
          {
            type: "tip",
            level: "BOTH",
            title: "Always use radians for arc and sector",
            content: "The formulae $l = r\\theta$ and $A = \\frac{1}{2}r^2\\theta$ only work in radians. If given degrees, convert first. In IB exams, assume radians unless otherwise stated."
          }
        ],
        examples: []
      },

      // 3.3 ─ Trig functions
      {
        id: "3.3",
        title: "Trigonometric functions & graphs",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Exact trigonometric values",
            content: "<table class=\"exact-values-table\"><thead><tr><th></th><th>$0°$</th><th>$30°\\;(\\tfrac{\\pi}{6})$</th><th>$45°\\;(\\tfrac{\\pi}{4})$</th><th>$60°\\;(\\tfrac{\\pi}{3})$</th><th>$90°\\;(\\tfrac{\\pi}{2})$</th></tr></thead><tbody><tr><td>$\\sin\\theta$</td><td>$0$</td><td>$\\dfrac{1}{2}$</td><td>$\\dfrac{\\sqrt{2}}{2}$</td><td>$\\dfrac{\\sqrt{3}}{2}$</td><td>$1$</td></tr><tr><td>$\\cos\\theta$</td><td>$1$</td><td>$\\dfrac{\\sqrt{3}}{2}$</td><td>$\\dfrac{\\sqrt{2}}{2}$</td><td>$\\dfrac{1}{2}$</td><td>$0$</td></tr><tr><td>$\\tan\\theta$</td><td>$0$</td><td>$\\dfrac{1}{\\sqrt{3}}$</td><td>$1$</td><td>$\\sqrt{3}$</td><td>undef</td></tr></tbody></table>"
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Amplitude, period & phase",
            content: "$$f(x) = A\\sin\\bigl(B(x-C)\\bigr) + D$$\n\nAmplitude: $|A|$\nPeriod: $\\dfrac{2\\pi}{|B|}$\nPhase shift: $C$ (positive = right)\nVertical shift: $D$\n\nSame structure applies to cosine."
          },
          {
            type: "formula",
            level: "HL",
            title: "Reciprocal trig functions",
            content: "$$\\sec\\theta = \\frac{1}{\\cos\\theta}, \\quad \\csc\\theta = \\frac{1}{\\sin\\theta}, \\quad \\cot\\theta = \\frac{1}{\\tan\\theta}$$\n\nSec and cosec are undefined where their denominators equal zero. $\\cot$ is NOT in the formula booklet — memorise it."
          },
          {
            type: "tip",
            level: "BOTH",
            title: "ASTC rule for signs in quadrants",
            content: "All positive in Q1. Sine positive in Q2. Tangent positive in Q3. Cosine positive in Q4.\n\nMemory aid: All Students Take Calculus.\n\nFor an angle $\\theta$ in Q2: $\\sin(180°-\\theta) = \\sin\\theta$, $\\cos(180°-\\theta) = -\\cos\\theta$."
          },
          {
            type: "mistake",
            level: "BOTH",
            title: "Period is NOT the coefficient of x",
            content: "For $\\sin(Bx)$, the period is $\\dfrac{2\\pi}{B}$, NOT $B$ itself. E.g. $\\sin(3x)$ has period $\\dfrac{2\\pi}{3}$, which is smaller than $2\\pi$ — the graph is compressed horizontally."
          },
          {
            type: "diagram",
            level: "BOTH",
            title: "Unit circle — all 16 standard angles",
            content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 580 580" style="max-width:100%;height:auto;display:block;margin:0 auto;font-family:'Space Mono',monospace">
  <defs>
    <marker id="ah" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill="currentColor" opacity="0.5"/>
    </marker>
  </defs>
  <!-- axes -->
  <line x1="30" y1="290" x2="550" y2="290" stroke="currentColor" stroke-width="1" opacity="0.25" marker-end="url(#ah)"/>
  <line x1="290" y1="550" x2="290" y2="30" stroke="currentColor" stroke-width="1" opacity="0.25" marker-end="url(#ah)"/>
  <text x="555" y="294" font-size="11" fill="currentColor" opacity="0.4">x</text>
  <text x="287" y="26" font-size="11" fill="currentColor" opacity="0.4">y</text>
  <!-- unit circle -->
  <circle cx="290" cy="290" r="200" fill="none" stroke="currentColor" stroke-width="1.5" opacity="0.35"/>
  <!-- origin -->
  <circle cx="290" cy="290" r="2.5" fill="currentColor" opacity="0.5"/>
  <text x="295" y="305" font-size="10" fill="currentColor" opacity="0.45">O</text>
  <!-- Q labels -->
  <text x="340" y="260" font-size="10" fill="currentColor" opacity="0.22" font-style="italic">Q1</text>
  <text x="225" y="260" font-size="10" fill="currentColor" opacity="0.22" font-style="italic">Q2</text>
  <text x="225" y="330" font-size="10" fill="currentColor" opacity="0.22" font-style="italic">Q3</text>
  <text x="340" y="330" font-size="10" fill="currentColor" opacity="0.22" font-style="italic">Q4</text>
  <!-- ── POINTS: (cx,cy) = 290+200cosθ, 290-200sinθ ── -->
  <!-- 0° -->
  <circle cx="490" cy="290" r="3" fill="#1a6ef5"/>
  <line x1="290" y1="290" x2="490" y2="290" stroke="#1a6ef5" stroke-width="0.7" opacity="0.3"/>
  <text x="496" y="283" font-size="9.5" fill="#1a6ef5" font-weight="700">0, 2π</text>
  <text x="496" y="294" font-size="8.5" fill="currentColor" opacity="0.6">(1, 0)</text>
  <!-- 30° = π/6 -->
  <circle cx="463" cy="190" r="3" fill="#0e9e74"/>
  <line x1="290" y1="290" x2="463" y2="190" stroke="#0e9e74" stroke-width="0.7" opacity="0.3"/>
  <text x="467" y="184" font-size="9" fill="#0e9e74" font-weight="700">π/6</text>
  <text x="467" y="194" font-size="8" fill="currentColor" opacity="0.6">(√3/2, 1/2)</text>
  <!-- 45° = π/4 -->
  <circle cx="431" cy="148" r="3" fill="#0e9e74"/>
  <line x1="290" y1="290" x2="431" y2="148" stroke="#0e9e74" stroke-width="0.7" opacity="0.3"/>
  <text x="434" y="142" font-size="9" fill="#0e9e74" font-weight="700">π/4</text>
  <text x="434" y="152" font-size="8" fill="currentColor" opacity="0.6">(√2/2, √2/2)</text>
  <!-- 60° = π/3 -->
  <circle cx="390" cy="117" r="3" fill="#0e9e74"/>
  <line x1="290" y1="290" x2="390" y2="117" stroke="#0e9e74" stroke-width="0.7" opacity="0.3"/>
  <text x="337" y="109" font-size="9" fill="#0e9e74" font-weight="700">π/3</text>
  <text x="337" y="119" font-size="8" fill="currentColor" opacity="0.6">(1/2, √3/2)</text>
  <!-- 90° = π/2 -->
  <circle cx="290" cy="90" r="3" fill="#1a6ef5"/>
  <line x1="290" y1="290" x2="290" y2="90" stroke="#1a6ef5" stroke-width="0.7" opacity="0.3"/>
  <text x="238" y="84" font-size="9.5" fill="#1a6ef5" font-weight="700">π/2</text>
  <text x="238" y="94" font-size="8.5" fill="currentColor" opacity="0.6">(0, 1)</text>
  <!-- 120° = 2π/3 -->
  <circle cx="190" cy="117" r="3" fill="#6d3fc9"/>
  <line x1="290" y1="290" x2="190" y2="117" stroke="#6d3fc9" stroke-width="0.7" opacity="0.3"/>
  <text x="126" y="109" font-size="9" fill="#6d3fc9" font-weight="700">2π/3</text>
  <text x="116" y="119" font-size="8" fill="currentColor" opacity="0.6">(-1/2, √3/2)</text>
  <!-- 135° = 3π/4 -->
  <circle cx="149" cy="148" r="3" fill="#6d3fc9"/>
  <line x1="290" y1="290" x2="149" y2="148" stroke="#6d3fc9" stroke-width="0.7" opacity="0.3"/>
  <text x="88" y="142" font-size="9" fill="#6d3fc9" font-weight="700">3π/4</text>
  <text x="72" y="152" font-size="8" fill="currentColor" opacity="0.6">(-√2/2, √2/2)</text>
  <!-- 150° = 5π/6 -->
  <circle cx="117" cy="190" r="3" fill="#6d3fc9"/>
  <line x1="290" y1="290" x2="117" y2="190" stroke="#6d3fc9" stroke-width="0.7" opacity="0.3"/>
  <text x="60" y="184" font-size="9" fill="#6d3fc9" font-weight="700">5π/6</text>
  <text x="48" y="194" font-size="8" fill="currentColor" opacity="0.6">(-√3/2, 1/2)</text>
  <!-- 180° = π -->
  <circle cx="90" cy="290" r="3" fill="#1a6ef5"/>
  <line x1="290" y1="290" x2="90" y2="290" stroke="#1a6ef5" stroke-width="0.7" opacity="0.3"/>
  <text x="22" y="284" font-size="9.5" fill="#1a6ef5" font-weight="700">π</text>
  <text x="14" y="294" font-size="8.5" fill="currentColor" opacity="0.6">(-1, 0)</text>
  <!-- 210° = 7π/6 -->
  <circle cx="117" cy="390" r="3" fill="#d95f0a"/>
  <line x1="290" y1="290" x2="117" y2="390" stroke="#d95f0a" stroke-width="0.7" opacity="0.3"/>
  <text x="50" y="386" font-size="9" fill="#d95f0a" font-weight="700">7π/6</text>
  <text x="36" y="396" font-size="8" fill="currentColor" opacity="0.6">(-√3/2,-1/2)</text>
  <!-- 225° = 5π/4 -->
  <circle cx="149" cy="432" r="3" fill="#d95f0a"/>
  <line x1="290" y1="290" x2="149" y2="432" stroke="#d95f0a" stroke-width="0.7" opacity="0.3"/>
  <text x="76" y="430" font-size="9" fill="#d95f0a" font-weight="700">5π/4</text>
  <text x="60" y="440" font-size="8" fill="currentColor" opacity="0.6">(-√2/2,-√2/2)</text>
  <!-- 240° = 4π/3 -->
  <circle cx="190" cy="463" r="3" fill="#d95f0a"/>
  <line x1="290" y1="290" x2="190" y2="463" stroke="#d95f0a" stroke-width="0.7" opacity="0.3"/>
  <text x="126" y="462" font-size="9" fill="#d95f0a" font-weight="700">4π/3</text>
  <text x="112" y="472" font-size="8" fill="currentColor" opacity="0.6">(-1/2,-√3/2)</text>
  <!-- 270° = 3π/2 -->
  <circle cx="290" cy="490" r="3" fill="#1a6ef5"/>
  <line x1="290" y1="290" x2="290" y2="490" stroke="#1a6ef5" stroke-width="0.7" opacity="0.3"/>
  <text x="296" y="506" font-size="9.5" fill="#1a6ef5" font-weight="700">3π/2</text>
  <text x="296" y="517" font-size="8.5" fill="currentColor" opacity="0.6">(0, -1)</text>
  <!-- 300° = 5π/3 -->
  <circle cx="390" cy="463" r="3" fill="#c0392b"/>
  <line x1="290" y1="290" x2="390" y2="463" stroke="#c0392b" stroke-width="0.7" opacity="0.3"/>
  <text x="340" y="462" font-size="9" fill="#c0392b" font-weight="700">5π/3</text>
  <text x="340" y="472" font-size="8" fill="currentColor" opacity="0.6">(1/2,-√3/2)</text>
  <!-- 315° = 7π/4 -->
  <circle cx="431" cy="432" r="3" fill="#c0392b"/>
  <line x1="290" y1="290" x2="431" y2="432" stroke="#c0392b" stroke-width="0.7" opacity="0.3"/>
  <text x="435" y="430" font-size="9" fill="#c0392b" font-weight="700">7π/4</text>
  <text x="435" y="440" font-size="8" fill="currentColor" opacity="0.6">(√2/2,-√2/2)</text>
  <!-- 330° = 11π/6 -->
  <circle cx="463" cy="390" r="3" fill="#c0392b"/>
  <line x1="290" y1="290" x2="463" y2="390" stroke="#c0392b" stroke-width="0.7" opacity="0.3"/>
  <text x="467" y="386" font-size="9" fill="#c0392b" font-weight="700">11π/6</text>
  <text x="467" y="396" font-size="8" fill="currentColor" opacity="0.6">(√3/2,-1/2)</text>
  <!-- axis tick labels -->
  <text x="482" y="285" font-size="9" fill="currentColor" opacity="0.4">1</text>
  <text x="90" y="285" font-size="9" fill="currentColor" opacity="0.4">-1</text>
  <text x="294" y="87" font-size="9" fill="currentColor" opacity="0.4">1</text>
  <text x="294" y="498" font-size="9" fill="currentColor" opacity="0.4">-1</text>
  <!-- legend -->
  <rect x="186" y="254" width="208" height="72" rx="6" fill="currentColor" opacity="0.04" stroke="currentColor" stroke-width="0.5" opacity="0.1"/>
  <circle cx="202" cy="268" r="3.5" fill="#1a6ef5"/><text x="210" y="272" font-size="8.5" fill="currentColor" opacity="0.6">Axis angles (0°,90°,180°,270°)</text>
  <circle cx="202" cy="282" r="3.5" fill="#0e9e74"/><text x="210" y="286" font-size="8.5" fill="currentColor" opacity="0.6">Q1 (30°, 45°, 60°)</text>
  <circle cx="202" cy="296" r="3.5" fill="#6d3fc9"/><text x="210" y="300" font-size="8.5" fill="currentColor" opacity="0.6">Q2 (120°, 135°, 150°)</text>
  <circle cx="202" cy="310" r="3.5" fill="#d95f0a"/><text x="210" y="314" font-size="8.5" fill="currentColor" opacity="0.6">Q3 (210°, 225°, 240°)</text>
  <circle cx="202" cy="324" r="3.5" fill="#c0392b"/><text x="210" y="328" font-size="8.5" fill="currentColor" opacity="0.6">Q4 (300°, 315°, 330°)</text>
</svg>`
          }
        ],
        examples: []
      },

      // 3.4 ─ Trig identities
      {
        id: "3.4",
        title: "Trigonometric identities",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Pythagorean identities",
            content: "$$\\sin^2\\theta + \\cos^2\\theta = 1$$\n$$1 + \\tan^2\\theta = \\sec^2\\theta$$\n$$1 + \\cot^2\\theta = \\csc^2\\theta$$\n\nThe second and third are HL only and are in the formula booklet."
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Double angle formulas",
            content: "$$\\sin 2\\theta = 2\\sin\\theta\\cos\\theta$$\n$$\\cos 2\\theta = \\cos^2\\theta - \\sin^2\\theta = 2\\cos^2\\theta - 1 = 1 - 2\\sin^2\\theta$$\n$$\\tan 2\\theta = \\frac{2\\tan\\theta}{1-\\tan^2\\theta}$$"
          },
          {
            type: "formula",
            level: "HL",
            title: "Compound angle identities",
            content: "$$\\sin(A\\pm B) = \\sin A\\cos B \\pm \\cos A\\sin B$$\n$$\\cos(A\\pm B) = \\cos A\\cos B \\mp \\sin A\\sin B$$\n$$\\tan(A\\pm B) = \\frac{\\tan A \\pm \\tan B}{1 \\mp \\tan A\\tan B}$$\n\nNote the sign change for $\\cos(A\\pm B)$: it is $\\mp$ (opposite to the $\\pm$ on the left)."
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Identity for $\\tan\\theta$",
            content: "$$\\tan\\theta = \\frac{\\sin\\theta}{\\cos\\theta}$$\n\nThis is in the formula booklet and is often used to simplify expressions involving mixed trig functions."
          },
          {
            type: "tip",
            level: "BOTH",
            title: "Proving trig identities",
            content: "Work on one side only (usually the more complex side). Use $\\sin^2+\\cos^2=1$ to replace squared terms. Convert everything to $\\sin$ and $\\cos$ if stuck. Never move terms across the equals sign when proving."
          },
          {
            type: "mistake",
            level: "HL",
            title: "Sign in compound angle for cosine",
            content: "$\\cos(A+B) = \\cos A\\cos B - \\sin A\\sin B$ (minus, not plus). Students often write $+$ here by analogy with $\\sin$. The mnemonic: for $\\cos$, the compound angle formula has an opposite sign."
          }
        ],
        examples: []
      },

      // 3.5 ─ Triangle trigonometry
      {
        id: "3.5",
        title: "Triangle trigonometry",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Sine rule, cosine rule, area",
            content: "Sine rule: $\\dfrac{a}{\\sin A} = \\dfrac{b}{\\sin B} = \\dfrac{c}{\\sin C}$\n\nCosine rule: $a^2 = b^2 + c^2 - 2bc\\cos A$\n\n$\\cos A = \\dfrac{b^2 + c^2 - a^2}{2bc}$\n\nArea: $\\text{Area} = \\frac{1}{2}ab\\sin C$\n\nAll three are in the formula booklet."
          },
          {
            type: "tip",
            level: "BOTH",
            title: "When to use which rule",
            content: "Sine rule: use when you know a side and its opposite angle, plus one more piece of information (angle-angle-side or side-side-angle).\n\nCosine rule: use when you know all three sides (to find an angle), or two sides and the included angle (to find the third side)."
          },
          {
            type: "tip",
            level: "BOTH",
            title: "Ambiguous case (SSA)",
            content: "When given two sides and a non-included angle, there may be two valid triangles (both $\\theta$ and $180°-\\theta$ satisfy the sine rule). Always check whether both angles give a valid triangle (angles must sum to less than 180°)."
          },
          {
            type: "mistake",
            level: "BOTH",
            title: "Cosine rule sign error",
            content: "$a^2 = b^2 + c^2 - 2bc\\cos A$. The $-$ sign is crucial. A common error is writing $+2bc\\cos A$. For a right angle $A = 90°$, $\\cos 90° = 0$ so the formula reduces to Pythagoras' theorem."
          }
        ],
        examples: []
      },

      // 3.6 ─ Vectors
      {
        id: "3.6",
        title: "Vectors",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Vector operations",
            content: "Magnitude: $|\\mathbf{v}| = \\sqrt{v_1^2+v_2^2+v_3^2}$\n\nUnit vector: $\\hat{\\mathbf{v}} = \\dfrac{\\mathbf{v}}{|\\mathbf{v}|}$\n\nDot product: $\\mathbf{a}\\cdot\\mathbf{b} = a_1b_1+a_2b_2+a_3b_3 = |\\mathbf{a}||\\mathbf{b}|\\cos\\theta$\n\nAngle: $\\cos\\theta = \\dfrac{\\mathbf{a}\\cdot\\mathbf{b}}{|\\mathbf{a}||\\mathbf{b}|}$\n\nPerpendicular vectors: $\\mathbf{a}\\cdot\\mathbf{b} = 0$"
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Vector line equation",
            content: "$$\\mathbf{r} = \\mathbf{a} + t\\mathbf{b}, \\quad t \\in \\mathbb{R}$$\n\n$\\mathbf{a}$ is a position vector of any point on the line; $\\mathbf{b}$ is the direction vector.\n\nParametric form: $x = a_1 + tb_1$, $y = a_2 + tb_2$, $z = a_3 + tb_3$\n\nCartesian form: $\\dfrac{x-a_1}{b_1} = \\dfrac{y-a_2}{b_2} = \\dfrac{z-a_3}{b_3}$"
          },
          {
            type: "formula",
            level: "HL",
            title: "Cross product",
            content: "$$\\mathbf{a}\\times\\mathbf{b} = \\begin{vmatrix}\\mathbf{i} & \\mathbf{j} & \\mathbf{k}\\\\ a_1 & a_2 & a_3\\\\ b_1 & b_2 & b_3\\end{vmatrix}$$\n\n$|\\mathbf{a}\\times\\mathbf{b}| = |\\mathbf{a}||\\mathbf{b}|\\sin\\theta$ = area of parallelogram.\n\nThe cross product is perpendicular to both $\\mathbf{a}$ and $\\mathbf{b}$. Used to find normal vectors to planes."
          },
          {
            type: "formula",
            level: "HL",
            title: "Planes",
            content: "Vector equation: $\\mathbf{r} = \\mathbf{a} + \\lambda\\mathbf{b} + \\mu\\mathbf{c}$\n\nNormal vector form: $\\mathbf{r}\\cdot\\mathbf{n} = \\mathbf{a}\\cdot\\mathbf{n}$\n\nCartesian form: $ax + by + cz = d$\n\nThe normal vector to the plane $ax+by+cz=d$ is $\\mathbf{n} = (a, b, c)$."
          },
          {
            type: "note",
            level: "HL",
            title: "Angles between lines and planes",
            content: "Angle between two lines: use $\\cos\\theta = \\dfrac{|\\mathbf{b_1}\\cdot\\mathbf{b_2}|}{|\\mathbf{b_1}||\\mathbf{b_2}|}$ (take absolute value for acute angle).\n\nAngle between line and plane: find angle $\\alpha$ with the normal, then the angle with the plane is $90° - \\alpha$.\n\nAngle between two planes: angle between their normal vectors."
          },
          {
            type: "note",
            level: "BOTH",
            title: "Position vs displacement vectors",
            content: "Position vector: vector from origin to a point (e.g. $\\overrightarrow{OA}$).\nDisplacement vector: $\\overrightarrow{AB} = \\mathbf{b} - \\mathbf{a}$ (to B minus from A).\nMidpoint position vector: $\\frac{1}{2}(\\mathbf{a}+\\mathbf{b})$."
          },
          {
            type: "mistake",
            level: "BOTH",
            title: "Dot product gives a scalar, cross product a vector",
            content: "$\\mathbf{a}\\cdot\\mathbf{b}$ is a scalar (a number). $\\mathbf{a}\\times\\mathbf{b}$ is a vector. The dot product tests for perpendicularity; the cross product gives the normal to both vectors. Do not confuse them."
          }
        ],
        examples: []
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // TOPIC 4: STATISTICS & PROBABILITY
  // ══════════════════════════════════════════════════════════
  {
    id: "4",
    title: "Statistics & probability",
    subtopics: [
      // 4.1 ─ Descriptive statistics
      {
        id: "4.1",
        title: "Descriptive statistics",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Types of data",
            content: "Qualitative: non-numerical (e.g. colour, name).\nQuantitative: numerical — can be discrete (counted, specific values) or continuous (measured, any value in a range).\n\nDiscrete example: number of pets. Continuous example: height.\nAge can be either depending on context."
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Measures of central tendency",
            content: "Mean: $\\bar{x} = \\dfrac{\\sum f_i x_i}{\\sum f_i}$ (weighted mean for grouped data)\n\nMedian: middle value when data is ordered (or average of two middle values)\n\nMode: most frequently occurring value\n\nInterquartile range: $\\text{IQR} = Q_3 - Q_1$"
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Standard deviation and variance",
            content: "Population standard deviation: $\\sigma = \\sqrt{\\dfrac{\\sum f_i(x_i-\\bar{x})^2}{\\sum f_i}}$\n\nSample standard deviation $s_{n-1}$: divides by $n-1$ instead of $n$.\n\nUse population ($\\sigma_n$) when the full dataset is given. Use sample ($s_{n-1}$) when the data is a sample from a larger population."
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Sampling techniques",
            content: "Simple random: every member has equal probability of selection.\nSystematic: every $k$th member, where $k = N/n$ (population ÷ sample size).\nStratified: sample proportionally from each subgroup.\nQuota: fill predetermined group sizes (non-random selection).\nConvenience: select whoever is most accessible (likely biased)."
          },
          {
            type: "tip",
            level: "BOTH",
            title: "GDC: 1-Var Stats",
            content: "Use 1-Variable Statistics on your GDC to find $\\bar{x}$, $\\sigma_x$ (population), $s_x$ (sample), median, Q1, Q3, min, and max all at once. Enter data in a list and use the stats menu."
          },
          {
            type: "mistake",
            level: "BOTH",
            title: "Population vs sample standard deviation",
            content: "The GDC gives two standard deviations: $\\sigma_x$ (population, divides by $n$) and $s_x$ (sample, divides by $n-1$). In IB problems, use $\\sigma_x$ when all values in the distribution are given, and $s_x$ when working with a sample."
          }
        ],
        examples: []
      },

      // 4.2 ─ Probability
      {
        id: "4.2",
        title: "Probability",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Probability rules",
            content: "$$P(A) = \\frac{n(A)}{n(U)}$$\n$$P(A') = 1 - P(A)$$\n$$P(A\\cup B) = P(A) + P(B) - P(A\\cap B)$$\n$$P(A|B) = \\frac{P(A\\cap B)}{P(B)}$$\n\nMutually exclusive: $P(A\\cup B) = P(A) + P(B)$\nIndependent: $P(A\\cap B) = P(A)\\cdot P(B)$"
          },
          {
            type: "note",
            level: "BOTH",
            title: "Testing for independence",
            content: "Events $A$ and $B$ are independent iff $P(A\\cap B) = P(A) \\times P(B)$, or equivalently iff $P(A|B) = P(A)$. Knowing $B$ occurred gives no information about $A$."
          },
          {
            type: "formula",
            level: "HL",
            title: "Bayes' theorem",
            content: "$$P(A|B) = \\frac{P(B|A)\\cdot P(A)}{P(B)}$$\n\nFor multiple partitions $B_1, B_2, \\ldots$:\n$$P(B_i|A) = \\frac{P(A|B_i)P(B_i)}{\\sum_j P(A|B_j)P(B_j)}$$\n\nTree diagrams are an effective tool for organising Bayes' theorem calculations."
          },
          {
            type: "note",
            level: "BOTH",
            title: "Tree diagrams and Venn diagrams",
            content: "Tree diagrams: multiply along branches for 'AND'; add across branches for 'OR'. Useful for conditional probability and sequential events.\n\nVenn diagrams: best for showing overlapping events and complement calculations."
          },
          {
            type: "mistake",
            level: "BOTH",
            title: "Mutually exclusive ≠ independent",
            content: "Mutually exclusive events ($A\\cap B = \\emptyset$) cannot both occur — they are actually dependent (knowing $A$ occurred means $B$ didn't). Independence means both can occur but don't affect each other."
          }
        ],
        examples: []
      },

      // 4.3 ─ Discrete distributions
      {
        id: "4.3",
        title: "Discrete probability distributions",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Discrete random variables",
            content: "For a discrete random variable $X$ with values $x$ and probabilities $P(X=x)$:\n\n$$\\sum P(X=x) = 1$$\n$$E(X) = \\sum x \\cdot P(X=x)$$\n$$\\text{Var}(X) = E(X^2) - [E(X)]^2$$\n$$E(X^2) = \\sum x^2 \\cdot P(X=x)$$"
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Linear transformations",
            content: "$$E(aX+b) = aE(X) + b$$\n$$\\text{Var}(aX+b) = a^2\\text{Var}(X)$$\n\nNote: adding a constant $b$ shifts the mean but does NOT affect the variance. Multiplying by $a$ scales the variance by $a^2$."
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Binomial distribution $X\\sim B(n,p)$",
            content: "$$P(X=r) = \\binom{n}{r}p^r(1-p)^{n-r}$$\n$$E(X) = np \\qquad \\text{Var}(X) = np(1-p)$$\n\nConditions: fixed number of trials $n$, each trial independent, only two outcomes, constant probability $p$."
          },
          {
            type: "tip",
            level: "BOTH",
            title: "GDC: binomial probabilities",
            content: "binomPdf$(n,p,r)$ gives $P(X=r)$. binomCdf$(n,p,r)$ gives $P(X \\leq r)$.\n\nFor $P(X \\geq r)$: compute $1 - \\text{binomCdf}(n,p,r-1)$.\nFor $P(a \\leq X \\leq b)$: compute $\\text{binomCdf}(n,p,b) - \\text{binomCdf}(n,p,a-1)$."
          },
          {
            type: "mistake",
            level: "BOTH",
            title: "Common binomial errors",
            content: "Always check the four conditions before applying $B(n,p)$. If trials are not independent (e.g. sampling without replacement from a small population), binomial does not apply.\n\nAlso: $P(X \\geq r) = 1 - P(X \\leq r-1)$, NOT $1 - P(X \\leq r)$."
          }
        ],
        examples: []
      },

      // 4.4 ─ Continuous distributions
      {
        id: "4.4",
        title: "Normal & continuous distributions",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Normal distribution",
            content: "$$X \\sim N(\\mu, \\sigma^2)$$\n\nSymmetric bell curve centred at $\\mu$. Inflection points at $\\mu \\pm \\sigma$.\n\nStandardise: $Z = \\dfrac{X-\\mu}{\\sigma}$, where $Z \\sim N(0,1)$.\n\nApprox 68% of data within $1\\sigma$, 95% within $2\\sigma$, 99.7% within $3\\sigma$."
          },
          {
            type: "tip",
            level: "BOTH",
            title: "GDC: normal distribution calculations",
            content: "normCdf(lower, upper, $\\mu$, $\\sigma$) gives $P(a \\leq X \\leq b)$.\nFor $P(X \\leq b)$: use $-9\\times10^{99}$ as lower bound.\nFor $P(X \\geq a)$: use $9\\times10^{99}$ as upper bound.\n\ninvNorm(area, $\\mu$, $\\sigma$): finds $x$ given that $P(X < x) = $ area. Area is always the LEFT-tail probability."
          },
          {
            type: "formula",
            level: "HL",
            title: "Continuous random variables (CRV)",
            content: "PDF $f(x)$ satisfies: $f(x) \\geq 0$ and $\\int_{-\\infty}^{\\infty} f(x)\\,dx = 1$\n\n$P(a \\leq X \\leq b) = \\int_a^b f(x)\\,dx$\n\nNote: $P(X = k) = 0$ for any specific value $k$ (area of a line = 0).\n\nMedian $m$: $\\int_{-\\infty}^m f(x)\\,dx = 0.5$\n\nMode: value of $x$ where $f(x)$ is maximum."
          },
          {
            type: "formula",
            level: "HL",
            title: "Mean and variance of a CRV",
            content: "$$E(X) = \\mu = \\int_{-\\infty}^{\\infty} x\\,f(x)\\,dx$$\n$$\\text{Var}(X) = E(X^2) - [E(X)]^2 = \\int_{-\\infty}^{\\infty} x^2 f(x)\\,dx - \\mu^2$$\n\nIf $f(x)$ is symmetric about $x = a$, then $E(X) = a$."
          },
          {
            type: "mistake",
            level: "BOTH",
            title: "Inverse normal: area is always LEFT-tail",
            content: "invNorm always takes the left-tail probability. If given $P(X > x) = 0.15$, the left-tail area is $1 - 0.15 = 0.85$, so enter 0.85 into invNorm. Drawing a diagram before computing prevents this error."
          },
          {
            type: "tip",
            level: "HL",
            title: "Finding the median of a piecewise PDF",
            content: "First integrate the first piece to find how much probability it contains. If that total is less than 0.5, the median lies in the second piece. Set up the equation $\\text{(integral up to previous boundary)} + \\int_{\\text{boundary}}^m f(x)\\,dx = 0.5$ and solve for $m$."
          }
        ],
        examples: []
      }
    ]
  },

  // ══════════════════════════════════════════════════════════
  // TOPIC 5: CALCULUS
  // ══════════════════════════════════════════════════════════
  {
    id: "5",
    title: "Calculus",
    subtopics: [
      // 5.1 ─ Limits & first principles
      {
        id: "5.1",
        title: "Limits & continuity",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Limits and continuity",
            content: "The limit $\\lim_{x\\to a} f(x) = L$ means $f(x)$ approaches $L$ as $x$ approaches $a$ from either side.\n\nA function is continuous at $x = a$ if:\n1. $f(a)$ exists\n2. $\\lim_{x\\to a} f(x)$ exists\n3. $\\lim_{x\\to a} f(x) = f(a)$\n\nAll three conditions must hold."
          },
          {
            type: "formula",
            level: "HL",
            title: "Derivative from first principles",
            content: "$$f'(x) = \\lim_{h\\to 0} \\frac{f(x+h)-f(x)}{h}$$\n\nThis is the gradient of the tangent — the limit of the gradient of chords as the second point approaches the first. Given in the formula booklet."
          },
          {
            type: "formula",
            level: "HL",
            title: "L'Hôpital's rule",
            content: "If $\\lim_{x\\to a}\\dfrac{f(x)}{g(x)}$ gives the indeterminate form $\\dfrac{0}{0}$ or $\\dfrac{\\pm\\infty}{\\pm\\infty}$:\n\n$$\\lim_{x\\to a}\\frac{f(x)}{g(x)} = \\lim_{x\\to a}\\frac{f'(x)}{g'(x)}$$\n\nCan be applied repeatedly if the result remains indeterminate. May also be evaluated using Maclaurin series."
          },
          {
            type: "note",
            level: "BOTH",
            title: "Limits from graphs and tables",
            content: "You may be asked to estimate a limit from a table of values or a graph. Approach from both sides — if the left and right limits are equal, the limit exists at that value."
          }
        ],
        examples: []
      },

      // 5.2 ─ Differentiation
      {
        id: "5.2",
        title: "Differentiation",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Standard derivatives",
            content: "$$\\frac{d}{dx}[x^n] = nx^{n-1} \\qquad \\frac{d}{dx}[e^x] = e^x \\qquad \\frac{d}{dx}[\\ln x] = \\frac{1}{x}$$\n$$\\frac{d}{dx}[\\sin x] = \\cos x \\qquad \\frac{d}{dx}[\\cos x] = -\\sin x \\qquad \\frac{d}{dx}[\\tan x] = \\sec^2 x$$"
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Chain, product & quotient rules",
            content: "Chain rule: $\\dfrac{dy}{dx} = \\dfrac{dy}{du}\\cdot\\dfrac{du}{dx}$\n\nProduct rule: $(uv)' = u'v + uv'$\n\nQuotient rule: $\\left(\\dfrac{u}{v}\\right)' = \\dfrac{u'v - uv'}{v^2}$"
          },
          {
            type: "formula",
            level: "HL",
            title: "Additional HL standard derivatives",
            content: "$$\\frac{d}{dx}[\\sec x] = \\sec x\\tan x \\qquad \\frac{d}{dx}[\\csc x] = -\\csc x\\cot x$$\n$$\\frac{d}{dx}[\\cot x] = -\\csc^2 x \\qquad \\frac{d}{dx}[a^x] = a^x\\ln a$$\n$$\\frac{d}{dx}[\\log_a x] = \\frac{1}{x\\ln a}$$\n$$\\frac{d}{dx}[\\arcsin x] = \\frac{1}{\\sqrt{1-x^2}} \\qquad \\frac{d}{dx}[\\arccos x] = \\frac{-1}{\\sqrt{1-x^2}} \\qquad \\frac{d}{dx}[\\arctan x] = \\frac{1}{1+x^2}$$"
          },
          {
            type: "formula",
            level: "HL",
            title: "Implicit differentiation",
            content: "Differentiate both sides with respect to $x$. For terms in $y$, apply the chain rule:\n$$\\frac{d}{dx}[y^n] = ny^{n-1}\\frac{dy}{dx}$$\n\nThen collect $\\dfrac{dy}{dx}$ terms on one side and solve.\n\nAlso used for related rates: $\\dfrac{dV}{dt} = \\dfrac{dV}{dr}\\cdot\\dfrac{dr}{dt}$"
          },
          {
            type: "mistake",
            level: "BOTH",
            title: "Forgetting the chain rule",
            content: "$\\dfrac{d}{dx}[\\sin(x^2)] = 2x\\cos(x^2)$, not $\\cos(x^2)$. Whenever differentiating a composition $f(g(x))$, multiply by the derivative of the inner function $g'(x)$. Check: is the argument just $x$, or is it a function of $x$?"
          },
          {
            type: "tip",
            level: "BOTH",
            title: "Rewriting before differentiating",
            content: "Rewrite roots as fractional powers and fractions as negative powers before differentiating: $\\sqrt{x} = x^{1/2}$, $\\frac{1}{x^2} = x^{-2}$. Products that can be expanded should be expanded first rather than using the product rule unnecessarily."
          }
        ],
        examples: [
          {
            level: "SL",
            title: "Apply the chain rule",
            steps: [
              "Differentiate $y = (3x^2+1)^5$",
              "Let $u = 3x^2+1$, $y = u^5$",
              "$\\dfrac{du}{dx} = 6x$, $\\dfrac{dy}{du} = 5u^4$",
              "$\\dfrac{dy}{dx} = 5(3x^2+1)^4 \\cdot 6x = 30x(3x^2+1)^4$"
            ]
          },
          {
            level: "HL",
            title: "Implicit differentiation",
            steps: [
              "Find $\\dfrac{dy}{dx}$ for $x^2 + xy + y^2 = 7$",
              "Differentiate: $2x + y + x\\dfrac{dy}{dx} + 2y\\dfrac{dy}{dx} = 0$",
              "$\\dfrac{dy}{dx}(x+2y) = -2x-y$",
              "$\\dfrac{dy}{dx} = \\dfrac{-2x-y}{x+2y}$"
            ]
          }
        ]
      },

      // 5.3 ─ Applications of differentiation
      {
        id: "5.3",
        title: "Applications of differentiation",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Stationary points and curve sketching",
            content: "Stationary points occur where $f'(x) = 0$.\n\nClassification using second derivative:\n$f''(x) < 0$: local maximum\n$f''(x) > 0$: local minimum\n$f''(x) = 0$: inconclusive — check sign of $f'(x)$ either side\n\nPoint of inflexion: $f''(x) = 0$ AND sign of $f''$ changes."
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Tangent and normal lines",
            content: "The gradient of the tangent to $y=f(x)$ at $x=a$ is $f'(a)$.\n\nTangent: $y - f(a) = f'(a)(x-a)$\n\nNormal (perpendicular to tangent): $y - f(a) = -\\dfrac{1}{f'(a)}(x-a)$"
          },
          {
            type: "tip",
            level: "BOTH",
            title: "Optimisation problems",
            content: "Step 1: Write the quantity to maximise/minimise as a function of one variable (use any constraints to eliminate others).\nStep 2: Differentiate and set equal to zero.\nStep 3: Verify it is a max or min using $f''$ or sign of $f'$.\nStep 4: Check endpoints of the domain if applicable."
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Kinematics",
            content: "If $s(t)$ is displacement:\n$$v(t) = s'(t) \\qquad a(t) = v'(t) = s''(t)$$\n\nDistance travelled from $t_1$ to $t_2$: $\\int_{t_1}^{t_2} |v(t)|\\,dt$\n\nDisplacement from $t_1$ to $t_2$: $\\int_{t_1}^{t_2} v(t)\\,dt$"
          },
          {
            type: "mistake",
            level: "BOTH",
            title: "Distance ≠ displacement",
            content: "Displacement can be negative (direction matters). Distance is always positive — use $|v(t)|$ in the integral. If $v(t)$ changes sign, split the integral at the point where $v = 0$."
          }
        ],
        examples: []
      },

      // 5.4 ─ Integration
      {
        id: "5.4",
        title: "Integration",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Standard integrals",
            content: "$$\\int x^n\\,dx = \\frac{x^{n+1}}{n+1} + C, \\quad n\\neq -1 \\qquad \\int \\frac{1}{x}\\,dx = \\ln|x| + C$$\n$$\\int e^x\\,dx = e^x + C \\qquad \\int \\sin x\\,dx = -\\cos x + C \\qquad \\int \\cos x\\,dx = \\sin x + C$$"
          },
          {
            type: "formula",
            level: "HL",
            title: "Additional HL standard integrals",
            content: "$$\\int \\frac{1}{ax+b}\\,dx = \\frac{1}{a}\\ln|ax+b| + C$$\n$$\\int \\frac{1}{a^2+x^2}\\,dx = \\frac{1}{a}\\arctan\\left(\\frac{x}{a}\\right) + C$$\n$$\\int \\frac{1}{\\sqrt{a^2-x^2}}\\,dx = \\arcsin\\left(\\frac{x}{a}\\right) + C, \\quad |x| < a$$\n\nAll three are in the formula booklet."
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Integration by substitution",
            content: "Let $u = g(x)$, then $du = g'(x)\\,dx$:\n$$\\int f(g(x))\\,g'(x)\\,dx = \\int f(u)\\,du$$\n\nFor definite integrals: change the limits using $u = g(x)$. Always substitute back to $x$ if indefinite."
          },
          {
            type: "formula",
            level: "HL",
            title: "Integration by parts",
            content: "$$\\int u\\,dv = uv - \\int v\\,du$$\n\nDifferentiate $u$, integrate $dv$. Apply repeatedly if needed."
          },
          {
            type: "tip",
            level: "HL",
            title: "LIATE: choosing u and dv",
            content: "Let $u$ be whichever function appears **first** in LIATE — it gets differentiated. Let $dv$ be the **last** — it gets integrated.\n\n**L** — Logarithms · **I** — Inverse trig · **A** — Algebraic · **T** — Trig · **E** — Exponential\n\ne.g. $\\int x e^x\\,dx$: $x$ is Algebraic (A), $e^x$ is Exponential (E) → $u = x$, $\\;dv = e^x\\,dx$"
          },
          {
            type: "mistake",
            level: "HL",
            title: "dv is not the variable we integrate u by",
            content: "In $\\int u\\,dv$, the $dv$ is **not** the variable of integration for $u$. The notation means:\n\n- $u$ is **differentiated** → you find $du$\n- $dv$ is **integrated** → you find $v$\n\nYou never apply an integral sign to $u$. The formula swaps the hard integral $\\int u\\,dv$ for a (hopefully easier) one: $\\int v\\,du$."
          },
          {
            type: "formula",
            level: "HL",
            title: "Recurring integral — apply by parts twice",
            content: "<div style='line-height:1.9'>For $\\int e^x \\sin x\\,dx$, the integral reappears after two applications. Let $I = \\int e^x \\sin x\\,dx$.<br><br><b>Step 1</b> — Let $u = \\sin x$, $\\;dv = e^x\\,dx \\Rightarrow du = \\cos x\\,dx$, $\\;v = e^x$:<br>$$I = e^x \\sin x - \\int e^x \\cos x\\,dx$$<b>Step 2</b> — Apply by parts to $\\int e^x \\cos x\\,dx$: let $u = \\cos x$, $\\;dv = e^x\\,dx \\Rightarrow du = -\\sin x\\,dx$, $\\;v = e^x$:<br>$$I = e^x \\sin x - \\left(e^x \\cos x + \\int e^x \\sin x\\,dx\\right)$$$$I = e^x \\sin x - e^x \\cos x - I$$<b>Step 3</b> — The original $I$ reappears. Add $I$ to both sides:<br>$$2I = e^x(\\sin x - \\cos x)$$$$\\boxed{I = \\dfrac{e^x(\\sin x - \\cos x)}{2} + C}$$</div>"
          },
          {
            type: "formula",
            level: "HL",
            title: "Tabular method (for repeated integration by parts)",
            content: "<div style='line-height:1.8'>Set up three columns: alternating <b>signs</b>, a <b>differentiate</b> column (for $u$), and an <b>integrate</b> column (for $dv$). Differentiate going down; integrate going down. Multiply <em>diagonally</em> across each row and sum.<br><br>Example: $\\int x^2 e^x\\,dx$<br><table class='exact-values-table' style='margin:10px 0'><thead><tr><th>Sign</th><th>Differentiate</th><th>Integrate</th></tr></thead><tbody><tr><td>$+$</td><td>$x^2$</td><td>$e^x$</td></tr><tr><td>$-$</td><td>$2x$</td><td>$e^x$</td></tr><tr><td>$+$</td><td>$2$</td><td>$e^x$</td></tr><tr><td>$-$</td><td>$0$</td><td>$e^x$</td></tr></tbody></table>Multiply diagonally (sign × left × right of next row):<br>$$\\int x^2 e^x\\,dx = x^2 e^x - 2x e^x + 2e^x + C = e^x(x^2 - 2x + 2) + C$$Stop when the differentiate column reaches $0$.</div>"
          },
          {
            type: "formula",
            level: "BOTH",
            title: "Definite integrals and area",
            content: "$$\\int_a^b f(x)\\,dx = [F(x)]_a^b = F(b) - F(a)$$\n\nArea between curve and $x$-axis:\n$$A = \\int_a^b |f(x)|\\,dx$$\n\nIf $f(x)$ changes sign in $[a,b]$, split the integral at each zero and take absolute values of each part."
          },
          {
            type: "formula",
            level: "HL",
            title: "Volumes of revolution",
            content: "About the $x$-axis: $V = \\pi\\int_a^b [f(x)]^2\\,dx$\n\nAbout the $y$-axis: $V = \\pi\\int_c^d [g(y)]^2\\,dy$\n\nArea between $f(x)$ and $y$-axis: $\\int_c^d x\\,dy$ (integrate with respect to $y$)."
          },
          {
            type: "mistake",
            level: "BOTH",
            title: "Area below the x-axis is not negative area",
            content: "The definite integral $\\int_a^b f(x)\\,dx$ gives a negative value when $f(x) < 0$. To find the geometric area (always positive), use $\\int_a^b |f(x)|\\,dx$. Split the integral wherever $f(x) = 0$."
          }
        ],
        examples: [
          {
            level: "SL",
            title: "Integration by substitution",
            steps: [
              "Evaluate $\\int 2x(x^2+1)^3\\,dx$",
              "Let $u = x^2+1 \\Rightarrow du = 2x\\,dx$",
              "$\\int u^3\\,du = \\dfrac{u^4}{4} + C = \\dfrac{(x^2+1)^4}{4} + C$"
            ]
          },
          {
            level: "HL",
            title: "Integration by parts",
            steps: [
              "Evaluate $\\int xe^x\\,dx$",
              "Let $u = x$, $dv = e^x\\,dx \\Rightarrow du = dx$, $v = e^x$",
              "$\\int xe^x\\,dx = xe^x - \\int e^x\\,dx = xe^x - e^x + C = e^x(x-1) + C$"
            ]
          }
        ]
      },

      // 5.5 ─ Differential equations
      {
        id: "5.5",
        title: "Differential equations",
        notes: [
          {
            type: "formula",
            level: "BOTH",
            title: "Separable differential equations",
            content: "Rearrange: $\\dfrac{dy}{dx} = f(x)\\cdot g(y)$\n\nSeparate variables: $\\dfrac{1}{g(y)}\\,dy = f(x)\\,dx$\n\nIntegrate both sides. Include a constant of integration $C$ on one side only. Apply initial conditions to find $C$."
          },
          {
            type: "formula",
            level: "HL",
            title: "Linear first-order DEs — integrating factor",
            content: "For $\\dfrac{dy}{dx} + P(x)y = Q(x)$:\n\nIntegrating factor: $\\text{IF} = e^{\\int P(x)\\,dx}$\n\nMultiply both sides by IF:\n$$\\frac{d}{dx}[y \\cdot \\text{IF}] = Q(x)\\cdot\\text{IF}$$\n\nIntegrate both sides to find $y$."
          },
          {
            type: "formula",
            level: "HL",
            title: "Euler's method (numerical)",
            content: "$$y_{n+1} = y_n + h\\cdot f(x_n, y_n), \\qquad x_{n+1} = x_n + h$$\n\n$h$ = step size (given in question). Smaller $h$ gives a more accurate approximation. Apply exactly as many steps as asked."
          },
          {
            type: "tip",
            level: "BOTH",
            title: "Applying initial conditions",
            content: "After integrating a DE you get a general solution with constant $C$. Substitute the given initial condition (e.g. $y(0) = 2$) to find the particular solution. Always state the value of $C$ explicitly."
          },
          {
            type: "mistake",
            level: "HL",
            title: "Integrating factor — don't add C",
            content: "When computing the integrating factor $e^{\\int P(x)\\,dx}$, do NOT add a constant $C$ — choose $C = 0$. The constant of integration is handled separately when integrating the right-hand side after multiplying."
          }
        ],
        examples: []
      },

      // 5.6 ─ Maclaurin series
      {
        id: "5.6",
        title: "Maclaurin series",
        notes: [
          {
            type: "formula",
            level: "HL",
            title: "Maclaurin series definition",
            content: "$$f(x) = f(0) + f'(0)x + \\frac{f''(0)}{2!}x^2 + \\frac{f'''(0)}{3!}x^3 + \\cdots = \\sum_{n=0}^\\infty \\frac{f^{(n)}(0)}{n!}x^n$$\n\nIn the formula booklet. Only valid near $x = 0$ (within the radius of convergence)."
          },
          {
            type: "formula",
            level: "HL",
            title: "Standard Maclaurin series",
            content: "$$e^x = 1 + x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\cdots \\quad (\\text{all } x)$$\n$$\\sin x = x - \\frac{x^3}{3!} + \\frac{x^5}{5!} - \\cdots \\quad (\\text{all } x)$$\n$$\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\cdots \\quad (\\text{all } x)$$\n$$\\ln(1+x) = x - \\frac{x^2}{2} + \\frac{x^3}{3} - \\cdots \\quad (|x| < 1)$$\n$$\\arctan x = x - \\frac{x^3}{3} + \\frac{x^5}{5} - \\cdots \\quad (|x| \\leq 1)$$\n\nAll in the formula booklet."
          },
          {
            type: "tip",
            level: "HL",
            title: "Building new series from standard ones",
            content: "Do not differentiate from scratch when a standard series can be substituted or modified:\n\n$e^{x^2}$: replace $x$ with $x^2$ in the $e^x$ series.\n$\\sin(2x)$: replace $x$ with $2x$ in the $\\sin x$ series.\n\nYou can also differentiate or integrate known series term-by-term to obtain new ones."
          },
          {
            type: "tip",
            level: "HL",
            title: "Maclaurin series for DEs",
            content: "Given $\\dfrac{dy}{dx} = g(x,y)$ with $y(0) = y_0$:\nFind $y'(0)$ by substituting $x=0$.\nDifferentiate implicitly to find $y''$, then evaluate $y''(0)$.\nRepeat for higher derivatives.\nSubstitute into the Maclaurin formula."
          },
          {
            type: "tip",
            level: "HL",
            title: "Evaluating limits using Maclaurin series",
            content: "For limits of the form $\\dfrac{f(x)}{g(x)}$ as $x \\to 0$ that give $0/0$: replace numerator and denominator with their Maclaurin series, then simplify by cancelling common powers of $x$. This is an alternative to L'Hôpital's rule."
          },
          {
            type: "mistake",
            level: "HL",
            title: "Validity / convergence",
            content: "$\\ln(1+x)$ and $\\arctan x$ are only valid for $|x| \\leq 1$ (strictly $|x| < 1$ for $\\ln$). Using these series outside their interval of convergence gives incorrect results. $e^x$, $\\sin x$, $\\cos x$ are valid for all real $x$."
          }
        ],
        examples: []
      }
    ]
  }
];
