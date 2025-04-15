# OIM3690 Web Technologies - Term Project (Spring 2025)

## Overview

This term project is worth **100 points total**. It is designed to give you hands-on experience with HTML, CSS, and JavaScript by requiring you to take on **two roles**: one to write a website idea and requirements, and the other to implement a site based on someone else’s idea. The project also emphasizes collaboration, iteration, and working with real-world developer tools like GitHub.

1. **Project Manager (PM)** - You will define a website idea and write a minimal **Product Requirements Document (PRD)**.
2. **Developer (Dev)** - You will implement a website based on a classmate's PRD.

All project work must be done in **a single shared public GitHub repository** owned by the PM. PMs must add their assigned Devs as collaborators.

### How will PM and Dev roles be assigned?

Each student will take on both roles in this project:

- You will create your own PRD and act as the **Project Manager (PM)** for that idea.
- You will also be randomly assigned **another student’s PRD** and build a website based on their specifications as the **Developer (Dev)**.

The assignment of Dev-to-PRD will be announced after the PRD submission deadline. PMs are responsible for creating the repository and adding their assigned Dev as a collaborator.

**Suggested naming convention for the repo**:Use a concise and meaningful name such as:

- `WebTech-[YourName]` (e.g., `WebTech-John-Doe`)
- **or** `[ProjectTopic]` (e.g., `SustainableTravel`)  

The repo name should clearly reflect either the PM’s identity or the website idea.

---

## Project Objectives

By the end of the project, you should be able to:

- Translate high-level ideas into functional and interactive web experiences
- Collaborate on a real-world development task through GitHub
- Apply web technologies such as HTML, CSS, and JavaScript
- Give and receive technical feedback via GitHub Issues
- Reflect on how collaboration and AI tools influenced your development process

---

## Project Timeline, Deliverables, and Grading

| Task                      | Deliverable                              | Points | Suggested Deadline | How to Submit                                                       |
| ------------------------- | ---------------------------------------- | ------ | ------------------ | ------------------------------------------------------------------- |
| Define your idea          | `pm-docs/PRD.md` and `wireframe.png/pdf` | 20 pts | 4/12               | Push to GitHub repo (created by PM) and submit repo link on Canvas  |
| Set up team repo          | PM adds Dev as collaborator on GitHub    | —      | 4/15               | Confirmed via GitHub activity (no separate Canvas submission)       |
| First version of the site | Project files, GitHub tag `v1.0`         | 40 pts | 4/22               | Push to same GitHub repo, tag as `v1.0`, submit repo link on Canvas |
| PM–Dev communication      | GitHub Issues screenshots                | 10 pts | 4/25               | Screenshot Issues, submit to Canvas                                 |
| Final version             | Final code, GitHub tag `final`           | 20 pts | 5/3                | Push to GitHub repo, tag as `final`, submit repo link on Canvas     |
| Reflection                | `reflection.md`                          | 10 pts    | 5/3                | Add to repo and submit to Canvas                                    |

### 🧭 Grading Notes: Who Gets Credit for What?

- **Define your idea** (20 pts): Your score as **PM**, based on the PRD and wireframe you created.
- **First version of the site** (40 pts): Your score as **Dev**, based on how you implemented another student's idea.
- **Final version** (20 pts): Your score as **Dev**, reflecting code quality, completion, and improvements.
- **PM–Dev communication** (10 pts): Shared score. Both team members are responsible for active, documented collaboration.
- **Reflection** (10 pts): Your individual score based on your submitted reflection files.

---

## Part 1: PM Role - Define a Website Idea

You will design a minimal PRD and sketch a simple wireframe. This will serve as the input for another student to implement as a website.

### Deliverables

1. **PRD (Product Requirements Document)** - A concise document that includes:

   - Project title
   - One-sentence goal of the website
   - 3–5 core features (written as bullet points or user stories)
   - List of 4–6 intended pages (e.g., homepage, about, gallery, contact)
   - Optional: brief notes on design/interaction (e.g., dark mode toggle)

2. **Wireframe** - A sketch of the homepage layout.

   - Can be hand-drawn, or created using tools like PowerPoint, Google Slides, Figma, Moqups, etc.
   - Upload as an image or PDF.
   - You are encouraged (but not required) to include rough layout ideas for other key pages as well, especially if they include major features or complex structures.

3. **Submission (by 4/12)**

   - Create a public GitHub repository for your project
   - Create a folder `pm-docs/` and save the PRD as `PRD.md` and wireframe as `wireframe.png` or `wireframe.pdf`
   - Push to GitHub and submit your repo link on Canvas

### Notes

- This is not a design class—the wireframe can be simple.

- **Recommended Resource**: For help thinking through the structure of your website, read [Planning a simple website (MDN)](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Structuring_content/Structuring_documents#planning_a_simple_website). This guide explains how to break down an idea into pages and content, and how to sketch out the layout in a meaningful way.

- The PRD should focus on **clear functionality**, not fancy features.

- **Trivial projects such as personal websites or digital resumes are not allowed** (they were covered in previous assignments). Think creatively about small tools, communities, fan pages, info hubs, or interactive pages that provide value to a user.

---

## Part 2: Dev Role - Build a Website

### Developer Responsibilities

- PM adds you as a collaborator on their GitHub repo
- Use the same repo to develop and submit all your code
- Follow the PRD as closely as reasonable—if parts are unclear, make reasonable assumptions and document them

### Requirements

- **Use only browser-side technologies:** HTML, CSS, JavaScript
- **No backend required**, though you may use `fetch()` to load static JSON data or files
- You **may not use** CMS platforms (e.g. WordPress), site builders (Wix, Squarespace), or unmodified templates
- You **may** use:
  - CSS frameworks (Tailwind, Bootstrap) — only in a separate branch
  - Icons/fonts/images that are free and properly credited

### Features to include (based on the PRD)

- At least **4 pages** (including homepage)
- Navigation bar present on all pages
- Semantic HTML, clear structure
- Responsive layout (Flexbox/Grid)
- Form with validation (e.g., feedback or contact)
- JavaScript interactions (**at least three from the list below**):
  - DOM manipulation (e.g., toggling sections, dynamic content update)
  - Event handling (e.g., click, hover, keyboard input)
  - Form validation with feedback messages
  - Dynamic style changes (e.g., theme toggle, responsive animations)
  - Fetch and display static JSON data (e.g., list of items, quotes)
  - Custom slideshow or tab-switching logic
  - Basic use of browser storage (e.g., save theme or preferences)
- Add a favicon and use appropriate meta tags for SEO

> **Reminder**: You must write your own JavaScript. If you use small external libraries (e.g., to create sliders), you must understand and explain them. React, Vue, or other full frameworks are **not required or expected** in this course.

### Folder Structure

```text
project-root/
  index.html
  about.html
  contact.html
  ...
  assets/
    css/
    js/
    images/
  pm-docs/  <-- From Part 1
```

**Note**: You do not need to follow these filenames exactly. What matters is that your folder structure is organized, clear, and consistent with your PRD and navigation.

### Use of AI Tools

You are allowed (and encouraged) to use AI tools such as ChatGPT, GitHub Copilot, or other code assistants.

**However, we strongly recommend this workflow:**

1. **Write your code by yourself first**, based on your understanding of HTML/CSS/JS.
2. Use AI tools for suggestions, debugging, or to explore alternative solutions.
3. Document any major AI-generated components in your code with comments.

Your understanding of your own code is essential. You may be asked to explain any part of your implementation.

### Submission (by 4/23)

- Push your code to the shared GitHub repo
- Create a release with tag `v1.0`
- Submit the repo link on Canvas

---

## Final Version & Collaboration Check

### PM–Dev Communication Requirement (by 4/26)

To ensure active collaboration, each project team must demonstrate evidence of thoughtful communication between the PM and the Dev using **GitHub Issues**.

- Each team must have at least **two GitHub Issues** related to the project.
- These issues should include:
  - At least one **clarifying or implementation-related question** raised by the Dev
  - At least one **feature discussion, update, or decision** raised by the PM
  - Additional replies or follow-up comments to show it was a real conversation (not one-sided)
- Conversations can cover areas such as: scope clarification, feature trade-offs, aesthetic decisions, technical constraints, or helpful resources.
- These Issues must be visible in the shared GitHub repo.
- Submit **screenshots of the GitHub Issues** on Canvas to confirm communication and completeness.

### Final Submission (by 5/03)

- Make final improvements based on communication and feedback
- Push your changes to the shared GitHub repo
- Tag the release as `final`
- Submit the repo link on Canvas

### Reflection Requirement (by 5/03)

Each student must write their own reflection in one of the following files:

- PM: `pm-reflection.md`
- Dev: `dev-reflection.md`

These files should be added to the project GitHub repository.

#### PM reflection prompts:

- How did you come up with your idea?
- How well did the collaboration with your developer work?
- What did you learn about writing requirements?
- Did you use any AI tools in this process? How?

#### Dev reflection prompts:

- How did you interpret and implement someone else’s idea?
- What were the challenges in development and collaboration?
- Which parts did you use AI tools for, and what did you learn from that?

These reflections help you pause and think critically about your process. They can also be used to award bonus points or help explain unclear design decisions.

---

## Deployment (Required) & Domain (Optional)

- You are **required** to deploy your site using **GitHub Pages** (free)
- You are encouraged to optionally acquire a custom domain and link it to your deployed site
  - You can get a **free domain** (e.g., `.me`, `.tech`, etc.) via [GitHub Student Developer Pack](https://education.github.com/pack)
- If you're interested in hosting dynamic content, explore free cloud services such as Render, Vercel, or Netlify

---

*Updated*: *2025/03/31*
