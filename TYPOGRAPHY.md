# Typography Standards

## Font Stack

### Headings
**Font:** Space Grotesk
**Variable:** `--font-heading` / `font-heading`
Modern geometric sans-serif with personality and distinctiveness

### Body Text
**Font:** Inter
**Variable:** `--font-body` / `font-body`
Clean, highly readable sans-serif optimized for screen reading

### Monospace/Technical
**Font:** JetBrains Mono
**Variable:** `--font-mono` / `font-mono`
For code, technical content, or accent elements

---

## Text Casing Standards

### Main Page Titles (H1)
- **Case:** UPPERCASE
- **Font:** Space Grotesk
- **Weight:** Bold (font-bold / 700)
- **Usage:** Hero sections, main landing page titles
- **Example:** `SOUTHERN SOFTWARE SOLUTIONS`

### Section Headings (H2)
- **Case:** Title Case
- **Font:** Space Grotesk
- **Weight:** Bold (font-bold / 700)
- **Usage:** Major section headers
- **Example:** `What It's Like to Work With Us`

### Subsection Headings (H3-H4)
- **Case:** Title Case
- **Font:** Space Grotesk
- **Weight:** Semi-bold (font-semibold / 600)
- **Usage:** Subsections, card titles, feature headings
- **Example:** `Our Story`

### Smaller Headings (H5-H6)
- **Case:** Title Case
- **Font:** Space Grotesk
- **Weight:** Medium (font-medium / 500)
- **Usage:** Small section headers, labels
- **Example:** `Innovation`

### Body Content
- **Case:** Normal (sentence case)
- **Font:** Inter
- **Weight:** Regular (font-normal / 400)
- **Usage:** Paragraphs, descriptions, content
- **Example:** `We are a small but growing business...`

### Buttons & CTAs
- **Case:** UPPERCASE
- **Font:** Space Grotesk
- **Weight:** Medium (font-medium / 500-600)
- **Usage:** All buttons, call-to-action elements
- **Example:** `GET STARTED`

### Navigation
- **Case:** Title Case
- **Font:** Space Grotesk
- **Weight:** Medium (font-medium / 500)
- **Usage:** Navigation menu items
- **Example:** `Web Design`

---

## Implementation Examples

```jsx
// Main Hero Title
<h1 className="font-heading font-bold uppercase text-5xl">
  SOUTHERN SOFTWARE SOLUTIONS
</h1>

// Section Header
<h2 className="font-heading font-bold text-4xl">
  What It's Like to Work With Us
</h2>

// Subsection Header
<h3 className="font-heading font-semibold text-2xl">
  Our Story
</h3>

// Body Text
<p className="font-body font-normal text-base">
  We are a small but growing business, currently made up of...
</p>

// Button
<button className="font-heading font-medium uppercase">
  Get Started
</button>
```

---

## Color Combinations

### Dark Backgrounds (Cyan sections)
- Headings: `text-white`
- Body: `text-cyan-100` or `text-gray-100`

### Light Backgrounds
- Headings: `text-gray-900` or `text-slate-900`
- Body: `text-gray-600` or `text-slate-600`

---

## Typography Scale

- **Hero (H1):** text-5xl md:text-6xl lg:text-7xl
- **Section (H2):** text-4xl md:text-5xl
- **Subsection (H3):** text-3xl md:text-4xl
- **Card Title (H4):** text-xl md:text-2xl
- **Small Heading (H5-H6):** text-lg md:text-xl
- **Body Large:** text-lg md:text-xl
- **Body Regular:** text-base
- **Body Small:** text-sm

---

## Quick Reference

| Element | Font | Case | Weight | Class |
|---------|------|------|--------|-------|
| H1 | Space Grotesk | UPPERCASE | Bold | `font-heading font-bold uppercase` |
| H2 | Space Grotesk | Title Case | Bold | `font-heading font-bold` |
| H3-H4 | Space Grotesk | Title Case | Semi-bold | `font-heading font-semibold` |
| H5-H6 | Space Grotesk | Title Case | Medium | `font-heading font-medium` |
| Body | Inter | Normal | Regular | `font-body font-normal` |
| Button | Space Grotesk | UPPERCASE | Medium | `font-heading font-medium uppercase` |
| Nav | Space Grotesk | Title Case | Medium | `font-heading font-medium` |
