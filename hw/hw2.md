# OIM3690 Web Technologies - 2025 Fall - Homework 2

This homework builds upon your existing `index-manual.html` created in [Homework 1](/hw1.md), focusing on creating a personal, interactive, and responsive portfolio site.

## 🎯 Learning Objectives

After completing this assignment, you will be able to:

- Build responsive web pages using advanced HTML and CSS techniques (tables, forms, Flexbox, Grid)
- Design and implement thoughtful user experiences
- Effectively utilize AI tools to enhance web development workflow
- Critically analyze AI-generated solutions and document the collaboration process
- Evaluate and improve website accessibility and responsiveness

## 📂 Project Structure

Your final submission must strictly follow this structure:

```plaintext
WebTech/
├── ex01.html
├── ... (and all the other classwork and previous homework/exercise files) 
├── index.html              (enhanced from HW1)
├── index-manual.html
├── index-hw2-ai.html
├── projects.html
├── projects-hw2-ai.html
├── contact.html
├── contact-hw2-ai.html
├── sitemap.html
├── styles/
│   └── (your CSS files)
├── images/
│   └── (your images)
└── docs/
    ├── hw1-reflection.md
    ├── hw1-homepage-plan.md
    ├── hw2-ai-iterations.md
    ├── hw2-content-plan.md
    ├── hw2-reflection.md
    └── images/
        ├── responsive-desktop.png
        ├── responsive-mobile.png
        ├── structure-sketch.(jpg/png/pdf)
        ├── validation-html.png
        ├── validation-css.png
        └── ... (other images for documentation)
```
---

## 🗂️ Part 1: Website Planning (10 points)

Before you begin coding or using AI tools, plan your website clearly based on MDN's "[Structuring a basic website](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_documents#structuring_a_basic_website)".

### Required Planning Documents:

In the `WebTech/docs/` folder, include:

- **Structure Sketches** (`structure-sketch.jpg/png/pdf`)
  - A clear visual diagram showing the structure of your website and each page's layout (navigation, header, main content, footer).
  - You may use tools such as paper sketches, PowerPoint, [Figma](https://www.figma.com/), [Balsamiq](https://balsamiq.com/), or any other webpage prototyping software.
- **Content Plan** (`hw2-content-plan.md`) that outlines clearly:
  - Common content across all pages (e.g., navigation, footer)
  - Specific content unique to each page (`index.html`, `projects.html`, `contact.html`).
  - Any effects, styles, or features you plan to implement (e.g., hover effects, responsive design elements).
  - Markdown formatting should be used for clarity.

---

## 🖥️ Part 2: Website Development (40 points)

### 1. Enhancing `index.html` with Navigation Bar (10 points)

Create `index.html` and `hw2-styles.css` based on your existing `index-manual.html` and `hw1-manual-styles.css` (from [HW1](/hw1.md)) with the following:

- **Navigation Bar**: Add a responsive navigation bar with links to Home (`index.html`), Projects (`projects.html`), and Contact (`contact.html`).
  - You may remove or modify your old navigation links from HW1.
  - Consider adding a logo and improving your site title.
  - Design this navigation bar to be reused consistently across all pages.
- Interactive **hover effects** or subtle animations to enhance user experience. (No JavaScript allowed)
- Use of **semantic HTML5 elements** (e.g., `<nav>`, `<header>`, `<main>`, `<footer>`) to improve accessibility and SEO.
- Add [favicon](https://developer.mozilla.org/en-US/docs/Glossary/Favicon) and meta tags to your site.
- Styling (using external CSS file(s)) that is visually **consistent** with your existing homepage (colors, fonts, spacing, overall aesthetics).

**Important Notes**:

- Your responsive design must be implemented **using only HTML and CSS** (Flexbox/Grid and/or [CSS media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) are recommended).
- Do **NOT** use frameworks such as Bootstrap or any JavaScript libraries.
- You are allowed to slightly adjust/add/remove existing content or design to better accommodate your new navigation structure and newly-planned common content across all pages.

### 2. Project Showcase Page (`projects.html`) (10 points)

Create a new HTML page, `projects.html`, showcasing at least 5 personal or fictional projects:

- **Each project should include**:
  - Title, short description, relevant image, and link to external pages if applicable.
- Layout must be **responsive** using Flexbox or CSS Grid.
- Include interactive **hover effects** or animations on the project parts.
- Design must reflect **your personal creativity** (do not replicate classmates or direct AI outputs).
- Styles (using external CSS file(s)) should be visually **consistent** with your enhanced `index.html` (color scheme, typography, spacing, and overall visual identity should match closely).

**Important Notes**:

- Your responsive design must be implemented **using only HTML and CSS** (Flexbox/Grid and [CSS media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) are recommended).
- Do **NOT** use frameworks such as Bootstrap or any JavaScript libraries.

### 3. Contact Form Page (`contact.html`) (10 points)

Build a professional, responsive contact form page, `contact.html`, which allows your visitors (such as potential employers, colleagues, or classmates) to easily contact you. Your page should include:

- Clearly communicated purpose:
  - Include a short introductory paragraph clearly indicating that this form allows visitors to send messages directly to you.
- **Centered, responsive layout** (Flexbox or Grid)
- **Form Fields**: name, email, message, and country selection (use `<datalist>` with at least three options, including your own country).
- **Semantic structure**: group form fields clearly using the `<fieldset>` element, including descriptive labels.
- **Form submission** configured as follows:
    ```html
    <form method="POST" action="https://oim.108122.xyz/form2">
    ```
    or
    ```html
    <form method="GET" action="mailto:your-babson-id@babson.edu">
    ```
- Styles (using external CSS file(s)) should be visually consistent with your enhanced `index.html` (color scheme, typography, spacing, and overall visual identity should match closely).

**Important Notes**:

- Your responsive design must be implemented **using only HTML and CSS** (Flexbox/Grid and [CSS media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) are recommended).
- Do **NOT** use frameworks such as Bootstrap or any JavaScript libraries.

### 4. Validation and Responsiveness Check (10 points)

As professional developers, ensuring your webpages meet web standards and display correctly on all devices is critical for providing an excellent user experience.

#### HTML & CSS Validation (5 points):

Validate your files with:

- [W3C HTML Validator](https://validator.w3.org/)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

Include validation result screenshots (`validation-html.png`, `validation-css.png`) with no errors.

#### Responsive Design Check (5 points):

Check with Chrome DevTools (responsive mode) to verify your pages look good on multiple devices. Provide screenshots showing desktop and mobile views (`responsive-desktop.png`, `responsive-mobile.png`).

---

👉 Important: After finishing Part 1 & 2, **commit and push with tag `hw2-manual`** before moving on to next part. This will make sure your manual version is saved before any AI modifications.

---

## 🤖 Part 3: AI Versions and Reflection (50 points)

### 1. AI Iterative Development Version (30 points)

This section focuses on **iterative improvement** with AI coding, emphasizing the collaborative development process rather than one-shot outputs.

#### Step 1: Initial AI Generation (10 points)

* Use your planning documents from Part 1 (`hw2-content-plan.md` and structure sketches) as the foundation.
* Ask AI to generate a complete new version from scratch based on your docs, creating **`index-hw2-ai.html`**, **`projects-hw2-ai.html`**, **`contact-hw2-ai.html`**, and **`styles/hw2-styles-ai.css`**. Note: make sure to avoid overwriting your manual versions.
* You are allowed to explore more advanced tags, CSS features, or layouts beyond the class restrictions.
* Make sure it does not use any external libraries or packages, such as JavaScript frameworks or CSS frameworks. (Only vanilla HTML and CSS are allowed.)

#### Step 2: Iterative Improvement Process & Documentation (20 points)

* Conduct **at least 5 rounds** of iterative improvements with AI.
* **First 2 rounds**: Must stick closely to your original planning documents.
* **Rounds 3-5+**: You may deviate from the original docs and explore new directions based on what you discover during the process.
* Create **`docs/hw2-ai-iterations.md`** to document each iteration round in detail:
  - **Round 1**: Initial AI generation
  - **Round 2**: First iteration
  - **Rounds 3-5+**: Subsequent iterations
  - For each round, include:
    - **Prompt used**: The exact prompt you gave to AI
    - **Main changes made**: Key improvements or modifications in that round
    - **Your evaluation**: What worked well, what didn't, and why you chose to iterate further
    - **Code snippets**: Key sections of generated/modified code
* Reference this detailed log in your reflection (see Part 3.2)

---

### 2. Reflection (20 points)

In your `hw2-reflection.md`, you must reflect deeply on both your own development process and your iterative AI collaboration experience. Clearly structure your reflection with the following sections:

- **Development Reflection** (Your own coding experience):
  - Briefly describe your overall approach and strategy when developing each page manually.
  - Explain clearly **at least two challenges** you faced during coding and how you solved them.
  - Clearly state **at least two new insights or skills** you learned during your manual coding process (not including AI usage).

- **AI Iterative Development Summary**:
  - Reference your detailed `docs/hw2-ai-iterations.md` file for complete iteration logs
  - Provide a **high-level summary** of your iterative process:
    - Overall strategy and approach for working with AI
    - Key patterns you noticed in AI responses across iterations
    - Most significant breakthroughs or improvements achieved
  - **Screenshots**: Include screenshots of your AI conversations clearly demonstrating key iterations. Store these screenshots in `docs/images` folder.

- **Comparative Analysis**:
  - **Manual vs. AI Initial**: Compare your manual solution with AI's first-generation output
  - **AI Evolution**: Analyze how the AI solution improved through iterations
  - **Strengths and Weaknesses**: List **at least two strengths and two weaknesses** of the final AI-generated solution compared to your manual solution
  - **Code Quality**: Evaluate code organization, readability, and maintainability between manual and final AI versions

- **Overall Reflection**:
  - **Iterative Process**: Reflect on the value of iterative improvement vs. one-shot AI generation
  - **Learning Experience**: What did you learn about effective AI collaboration through this iterative process?
  - **Future Strategies**: Provide clear recommendations for effectively using iterative AI development in future projects

---

## 📋 Submission (5 points)

### Commits Requirements:

- Your GitHub repository contains **at least 3** meaningful commits clearly documenting your progress.
- Examples of good commit messages:
    ```plaintext
    feat: responsive navbar implementation
    style: adjusted project cards layout
    fix: corrected form validation issues
    docs: updated AI reflection
    ```
- Avoid generic messages like "Finished assignment" or single large commits.

### Final Submission:

- Verify all files follow the required structure exactly.
- **Commit and push** your work clearly and regularly to GitHub.
- Create a GitHub [release](https://docs.github.com/en/github/administering-a-repository/releasing-projects-on-github/managing-releases-in-a-repository) with the tag `hw2` (no additional files needed).

---

*Updated:* *9/29/2025*
