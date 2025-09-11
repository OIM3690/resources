# OIM3690 Web Technologies - 2025 Fall - Homework 1

## 📂 Project Structure

Your final submission must strictly follow this structure:

```plaintext
WebTech/
├── ex01.html
├── ... (other classwork and exercise files)
├── index-manual.html
├── index-ai-revised.html
├── index-ai-creative.html
├── sitemap.html
├── styles/
│   └── (your CSS files)
├── images/
│   └── (your images: profile photo, interest image, home.jpg, etc.)
└── docs/
    ├── hw1-reflection.md
    └── hw1-homepage-plan.md
```

👉 Notes:

* All **HTML files** must be in the root `WebTech/` folder.
* All **images** must be in the `images/` subfolder.
* All **Markdown documents** must be in the `docs/` subfolder.

---

## Learning Objectives

After completing this assignment, you will be able to:

* Create basic web pages using HTML and CSS
* Apply appropriate styling to enhance web content
* Analyze and compare different approaches to web development
* Effectively use AI tools while maintaining understanding of fundamentals

---

## Note on AI Use

* **Part 1 must be done without AI assistance.** Turn off GitHub Copilot (or any AI tool) while completing Part 1. Note: *This might be your only chance to practice building a page fully by hand.*
* For Part 2, **you need to use AI tools** to generate and refine versions of your homepage.
* You must clearly mark in comments which parts were generated or modified by AI.
* Be prepared to explain how your code works. You may be asked to do this in class or in a short oral check.
* Submissions that only copy AI output without understanding or explanation will receive reduced credit.
* You are **not allowed to use any external libraries or packages** (JavaScript frameworks, CSS frameworks, or external CSS/JS files). Only **vanilla HTML and CSS** are permitted.

---

## Part 1: Personal Homepage and Portfolio Page (40 points)

⚠️ This part must be completed entirely by hand without any AI assistance.

### 1. Creating Personal Homepage `index-manual.html` (15 points)

Your personal homepage should serve as a professional introduction. It must include:

* **Header Section**

  * Main title "About \[Your Name]" (`h1`)
  * Navigation with links: About Me, My Interests, Contact, Portfolio (`sitemap.html`)

* **Main Content Section**

  * About Me: heading (`h2`), two paragraphs, photo stored in `WebTech/images`
  * My Interests: heading (`h2`), description, image, keyword link to an external site

* **Contact Section**

  * Heading (`h3`), including:

    * Full name and course name
    * Clickable email (`mailto:`)
    * GitHub profile URL
    * Link to your portfolio page (`sitemap.html`)

---

### 2. Adding Basic Styles (15 points)

Use **external CSS**. Create a file named `hw1-styles.css` in the `styles/` folder and link it in your HTML files.

**Allowed HTML Tags**:
`html`, `head`, `body`, `h1`, `h2`, `h3`, `p`, `span`, `ul`, `li`, `ol`, `a`, `img`, `div`, `header`, `footer`

**Allowed CSS Properties**:

* Box Model: `margin`, `padding`, `border`, `width`, `height`, `box-sizing`, ...
* Typography: `font-family`, `font-size`, `font-weight`, `color`, `text-align`, `text-decoration`, `line-height`, `font-style`, `text-indent`, `letter-spacing`, `word-spacing`, ...
* Layout: `display`, `position`, `top/right/bottom/left`, `float`, `clear`, `flexbox`, `grid`
* Visual: `background-color`, `background-image`, `background-repeat`, `background-position`, `background-attachment`, `opacity`, `border-radius`
* Units: `px`, `em`, `%`, `vh/vw`, `rem`, `fr`, `pt`
* Selectors: `element`, `class (.)`, `id (#)`, `pseudo-classes (:hover, :active)`, advanced selectors like `:nth-child()`, attribute selectors

**Style Guidelines**:

* Use a consistent [color scheme](https://coolors.co/)
* Apply consistent spacing
* Test in different browsers
* Make sure all links work

---

### 3. Portfolio Page `sitemap.html` (10 points)

* Heading: "Work done in WebTech by \[Your Name]" (`h1`)
* Horizontal line below heading
* Unordered list linking to your exercises (`ex01.html`, `index.html`, etc.)
* Horizontal line below the list (**challenge**: do not use `<hr>`)
* Add [`home.jpg`](https://raw.githubusercontent.com/OIM3690/resources/main/templates/images/home.jpg) in `WebTech/images` and link it to `index.html`
* Style consistently with `index.html` using the same `hw1-styles.css`

---

👉 Important: After finishing Part 1, **commit and push with tag `hw1-manual`** before moving on to Part 2. This will make sure your manual version is saved before any AI modifications.

---

## Part 2: AI Versions and Reflection (60 points)

### 1. AI Revised Version (20 points)

* Make a copy of your manual files, `index-manual.html` and `styles/hw1-styles.css`, and rename it **`index-ai-revised.html`** and **`styles/hw1-styles-ai-revised.css`**.
* Use AI (Copilot or ChatGPT) to **revise** this file while staying within the same allowed tags and CSS as Part 1.
  * Examples: clearer spacing, improved color contrast, simplified CSS, better alt text, etc.
  * Make sure it still looks like your original design.
  * Make sure it does not change the original `index-manual.html` and `styles/hw1-styles.css`.
* In the `<head>` section, add a comment noting which parts were revised with AI.

---

### 2. AI Creative Version (20 points)

* In this version, you are allowed to explore more advanced tags, CSS features, or layouts beyond the class restrictions.
* Before creating, write **`hw1-homepage-plan.md`** describing:
  * **The content you want to include**: List specific sections (e.g., About Me, Projects, Contact) and the type of information or media (e.g., text, images, links) you plan to add.
  * **Features or styles you would like AI to generate**: Specify any advanced layouts, animations, or design elements you want to explore with AI assistance (e.g., responsive design, hover effects, or creative color schemes).
  * Sketch a rough layout or wireframe of your desired homepage structure if needed.
* Then create **`index-ai-creative.html` and `styles/hw1-styles-ai-creative.css`** with AI assistance. You can use your `hw1-homepage-plan.md` as a guide to help the AI generate content and styles aligned with your goals.
  * Make sure it does not change the original `index-manual.html`, `index-ai-revised.html`, `styles/hw1-styles.css` and `styles/hw1-styles-ai-revised.css`.
  * Make sure it does not use any external libraries or packages, such as JavaScript frameworks or CSS frameworks. (Only vanilla HTML and CSS are allowed.)

---

### 3. Reflection (20 points)

Create **`hw1-reflection.md`** in the `docs/` folder. It must include:

- **Summary of Experience**: Reflect on your use of AI tools in this assignment. Include:
  - At least three key insights (e.g., useful prompts, interactions, or challenges faced).
  - One example of an AI-generated snippet and its explanation.
  - Any issues you identified and how you corrected them.

- **Unknowns List**: Record any HTML tags, CSS properties, or code structures generated by AI that you did not fully understand. For each, write a short note such as “not sure yet” or your best guess.

- **Final Reflection**: Summarize your overall experience completing this homework. You may reflect on:
  - How this assignment impacted your understanding of HTML/CSS.
  - Challenges you faced and how you overcame them.
  - How you plan to use these skills or tools in the future.

---

## Submission

1. Make sure your project folder `WebTech/` contains the following required files:

   * `index-manual.html` (manual version, committed before AI versions)
   * `sitemap.html`
   * `index-ai-revised.html` (AI revision of manual version)
   * `index-ai-creative.html` (AI creative version based on `hw1-homepage-plan.md`)
   * `styles/hw1-styles.css` (external CSS file used in all HTML files)
   * `styles/hw1-styles-ai-revised.css` (external CSS file for AI revised version)
   * `styles/hw1-styles-ai-creative.css` (external CSS file for AI creative version)
   * `docs/hw1-homepage-plan.md`
   * `docs/hw1-reflection.md`
   * All images in `WebTech/images/`

2. Commit and push to GitHub.

3. Create a release with tag version `hw1`.

---

*Updated:* *9/11/2025*
