# Matematik A7 — IB Math AA HL Notes

A clean, student-facing notes platform for IB Mathematics Analysis & Approaches HL.

## Features
- All AA HL syllabus topics (1–5) with subtopics
- Beautiful KaTeX math rendering
- SL / HL content differentiation
- Scientific calculator + Desmos graphing
- Full-text search across all topics
- Password-protected edit mode
- Printable topic view
- Keyboard shortcuts

## Setup on GitHub Pages

1. Create a new GitHub repository (e.g. `matematik-a7`)
2. Upload all files from this folder maintaining the structure:
   ```
   matematik-a7/
   ├── index.html
   ├── style.css
   ├── app.js
   ├── calculator.js
   ├── search.js
   ├── data/
   │   └── topics.js
   └── assets/
       └── diagrams/
   ```
3. Go to **Settings → Pages → Source → main branch / root**
4. Your site will be live at: `https://yourusername.github.io/matematik-a7`

## Adding Notes (Edit Mode)

1. Open the site in your browser
2. Click **Edit mode** in the sidebar footer
3. Password: `a7admin` ← **change this in `app.js` line 7**
4. Click **Edit** on any note card to modify content
5. Use `$...$` for inline math, `$$...$$` for display math
6. Save → commit `data/topics.js` to GitHub → site updates automatically

## Changing the Edit Password

Open `app.js` and change line 7:
```js
const EDIT_PASSWORD = "your-new-password-here";
```

## Adding Diagrams

1. Save your image to `assets/diagrams/my-image.png`
2. In `data/topics.js`, add a note with:
   ```js
   { type: "diagram", level: "BOTH", title: "My diagram", src: "assets/diagrams/my-image.png" }
   ```

## Keyboard Shortcuts

| Key | Action |
|-----|--------|
| `/` | Open search |
| `1` | Notes tab |
| `2` | Worked examples tab |
| `3` | Calculator tab |
| `[` | Previous subtopic |
| `]` | Next subtopic |
| `?` | Show shortcuts |
| `Esc` | Close overlays |
