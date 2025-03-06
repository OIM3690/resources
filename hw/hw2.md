# OIM3690 Web Technologies - 2025 Spring - Homework 2

This homework builds upon your existing `index.html` created in [Homework 1](/hw1.md), focusing on creating a personal, interactive, and responsive portfolio site.

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
├── index.html       (enhanced from HW1)
├── projects.html
├── contact.html
├── sitemap.html
├── styles/
│   └── (your CSS files)
├── images/
│   └── (your images)
├── planning/
│   ├── structure-sketch.(jpg/png/pdf)
│   └── content-plan.md
└── docs/
    ├── hw1-reflection.md
    ├── hw2-reflection.md
    └── screenshots/
        ├── validation-html.png
        ├── validation-css.png
        ├── responsive-desktop.png
        ├── responsive-mobile.png
        └── ChatGPT-screenshot-1.png (and other AI tool screenshots)
```
---

## 🗂️ Part 1: Website Planning (10 points)

Before you begin coding or using AI tools, plan your website clearly based on MDN's "[Planning a simple website](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_documents#planning_a_simple_website)".

### Required Planning Documents:

In the `WebTech/planning/` folder, include:

- **Structure Sketch** (`structure-sketch.jpg/png/pdf`)
  - A clear visual diagram showing the structure of your website and each page's layout (navigation, header, main content, footer).
  - You may use tools such as paper sketches, PowerPoint, [Figma](https://www.figma.com/), [Balsamiq](https://balsamiq.com/), or any other webpage prototyping software.
- **Content Plan** (`content-plan.md`) that outlines clearly:
  - Common content across all pages (e.g., navigation, footer)
  - Specific content unique to each page (`index.html`, `projects.html`, `contact.html`).

---

## 🖥️ Part 2: Website Development (60 points)

### 1. Enhancing `index.html` with Navigation Bar (20 points)

Improve your existing `index.html` (from [HW1](/hw1.md)) by adding a responsive navigation bar with the following:

- Links to Home (`index.html`), Projects (`projects.html`), and Contact (`contact.html`). You may remove your old navigation links if needed.
- Interactive **hover effects** or subtle animations to enhance user experience.
- Styling (using external CSS file(s)) that is visually **consistent** with your existing homepage (colors, fonts, spacing, overall aesthetics).

**Important Notes**:

- Your responsive design must be implemented **using only HTML and CSS** (Flexbox/Grid and [CSS media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) are recommended).
- Do **NOT** use frameworks such as Bootstrap or any JavaScript libraries.
- You are allowed to slightly adjust existing content or design to better accommodate your new navigation structure and newly-planned common content across all pages.

### 2. Project Showcase Page (`projects.html`) (20 points)

Create a new HTML page, `projects.html`, showcasing at least three personal or fictional projects:

- **Each project should include**:
  - Title, short description, relevant image, and link to external pages if applicable.
- Layout must be **responsive** using Flexbox or CSS Grid.
- Include interactive **hover effects** or animations (should be different from navigation bar hover effects).
- Design must reflect **your personal creativity** (do not replicate classmates or direct AI outputs).
- Styles (using external CSS file(s)) should be visually **consistent** with your enhanced `index.html` (color scheme, typography, spacing, and overall visual identity should match closely).

**Important Notes**:

- Your responsive design must be implemented **using only HTML and CSS** (Flexbox/Grid and [CSS media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) are recommended).
- Do **NOT** use frameworks such as Bootstrap or any JavaScript libraries.

### 3. Contact Form Page (`contact.html`) (20 points)

Build a professional, responsive contact form page, `contact.html`, which allows your visitors (such as potential employers, colleagues, or classmates) to easily contact you. Your page should include:

- Clearly communicated purpose:
  - Include a short introductory paragraph clearly indicating that this form allows visitors to send messages directly to you.
  - Example: "Feel free to reach out using the form below. I'm happy to discuss my projects, answer questions, or explore opportunities together!"
- **Centered, responsive layout** (Flexbox or Grid)
- **Form Fields**: name, email, message, and country selection (use `<datalist>` with at least three options, including your own country).
- **Semantic structure**: group form fields clearly using the `<fieldset>` element, including descriptive labels.
- **Form submission** configured exactly as follows:
    ```html
    <form method="POST" action="https://oim.108122.xyz/form2">
    ```
- Styles (using external CSS file(s)) should be visually consistent with your enhanced `index.html` (color scheme, typography, spacing, and overall visual identity should match closely).

**Important Notes**:

- Your responsive design must be implemented **using only HTML and CSS** (Flexbox/Grid and [CSS media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries) are recommended).
- Do **NOT** use frameworks such as Bootstrap or any JavaScript libraries.

---

## Part 3: Development & AI Integration Reflection (hw2-reflection.md) (15 points)

In your `hw2-reflection.md`, you must reflect deeply on both your own development process and your interactions with AI tools. Clearly structure your reflection with the following sections:

- Development Reflection (Your own coding experience):
  - Briefly describe your overall approach and strategy when developing each page.
  - Explain clearly **at least two challenges** you faced during coding and how you solved them.
  - Clearly state **at least two new insights or skills** you learned during your manual coding process (not including AI usage).
- AI Interaction Log:
  - **AI Tool(s) Used**: Mention which AI tools you used and for what purposes.
  - **AI Prompts**: List the specific prompts you provided clearly.
  - **Original AI-generated code**: Include AI-generated code snippets clearly.
  - **Your modifications**: Clearly indicate your modifications to AI-generated code, briefly explaining your reasoning.
  - **Screenshots**: Include screenshots of your AI conversations or prompts clearly demonstrating your interaction. Store these screenshots in `docs/screenshots` folder.
- **Comparative Analysis**:
  - Clearly list **at least two strengths and two weaknesses** of the AI-generated solutions compared to your manual solutions.
  - Describe specifically how and why you optimized the AI-generated code.
- **Overall Reflection**:
  - Clearly reflect on your overall experience of manually writing code and collaborating with AI. What did you find most valuable?
  - Provide clear recommendations or strategies for effectively integrating AI tools into your future development workflow.

---

## ✅ Part 4: Validation and Responsiveness Check (10 points)

As professional developers, ensuring your webpages meet web standards and display correctly on all devices is critical for providing an excellent user experience.

### HTML & CSS Validation (5 points):

Validate your files with:

- [W3C HTML Validator](https://validator.w3.org/)
- [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)

Include validation result screenshots (`validation-html.png`, `validation-css.png`) with no errors.

### Responsive Design Check (5 points):

Check with Chrome DevTools (responsive mode) to verify your pages look good on multiple devices. Provide screenshots showing desktop and mobile views (`responsive-desktop.png`, `responsive-mobile.png`).

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
