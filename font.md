**Understood:**
FONTGUIDE

---

## 🧩 Font Pairing System: Gambetta (Headings) + Excon (Body/UI)

### ✅ General Aesthetic:

* **Gambetta:** Elegant serif with editorial flair – best for visual hierarchy like `h1` to `h3`, large quotes, or your name.
* **Excon:** Neutral grotesque sans-serif – excellent for body, nav, buttons, captions.

---

## 🔤 Typography Style Guide (with use cases)

### 🟥 HEADINGS – **Gambetta**

| Element     | Tag  | Font     | Style                       | Example Use                       |
| ----------- | ---- | -------- | --------------------------- | --------------------------------- |
| Page Title  | `h1` | Gambetta | Bold, 48–60px, 1.1 line ht  | “Jhonn Vincent Arcipe”            |
| Section     | `h2` | Gambetta | Semibold, 36–44px, 1.2 line | “Work Experience”                 |
| Subsection  | `h3` | Gambetta | Medium, 24–28px, 1.3 line   | “Backend Intern @ Ohmyhome”       |
| Accent Line | `h4` | Gambetta | Regular Italic, 20px        | “Designed by Indian Type Foundry” |

Use uppercase only sparingly with Gambetta—it loses elegance when forced.

---

### 🟦 BODY / TEXT – **Excon**

| Element        | Tag     | Font  | Style                        | Example Use                   |
| -------------- | ------- | ----- | ---------------------------- | ----------------------------- |
| Paragraph Text | `p`     | Excon | Regular, 16–18px, 1.6 line   | About, project descriptions   |
| Small Text     | `small` | Excon | Light, 12–14px               | Footers, legal, timestamps    |
| Links          | `a`     | Excon | Medium, 16px, underline      | “View Project →”              |
| UI Labels      | `label` | Excon | Medium, 13px, uppercase      | “Email” in contact form       |
| Buttons        | `.btn`  | Excon | Semibold, 14–16px, UPPERCASE | “DOWNLOAD CV”                 |
| Nav Items      | `.nav`  | Excon | Medium, 16px, tracking-wide  | “Home”, “Projects”, “Contact” |

**Excon** is low-contrast and balanced—best for all device sizes. Use font-weight and letter spacing to establish hierarchy.

---

### 🎨 Typography Contrast Tips

| Theme      | Gambetta Color         | Excon Color            |
| ---------- | ---------------------- | ---------------------- |
| Light Mode | `#111111` or `#2C2C2C` | `#444444` or `#666666` |
| Dark Mode  | `#FAFAFA` or `#DDDDDD` | `#AAAAAA` or `#888888` |

---

### 🧪 Bonus – Font Scale (Modular)

Use a **1.25 type scale** for elegance and consistency:

| Type       | Size (px) |
| ---------- | --------- |
| h1         | 60        |
| h2         | 48        |
| h3         | 36        |
| h4         | 28        |
| Paragraph  | 18        |
| Small Text | 14        |

---

### 📦 Font Load Tips

If you plan to self-host:

```html
<style>
  @font-face {
    font-family: 'Gambetta';
    src: url('/fonts/Gambetta-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
</style>
```

Or use fallback fonts:

```css
font-family: 'Gambetta', Georgia, serif;
font-family: 'Excon', 'Helvetica Neue', sans-serif;
```

