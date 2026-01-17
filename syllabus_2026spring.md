# OIM3690 AI-Powered Web Development - 2026 Spring - Syllabus

## Datetime and Address

- Class Time:
  - **Tuesday**, **Thursday**: 11:30AM - 1:00PM
  - (Backup) Online Class Platform: Webex (check Canvas for Webex link)
- Classroom Address: Gerber 103

## Instructor Information

- Instructor: Dr. Zhi Li
- E-mail: [zli@babson.edu](mailto:zli@babson.edu)
- Office Hours:
  - In-person:
    - **Wednesday**: 11:00AM - 12:00PM, Babson Hall 216D
    - **Thursday**: 2:30PM - 3:30PM, Babson Hall 216D
    - By appointment
  - Online: Webex by appointment

**Required One-on-One Meeting**: Each student is required to meet with the instructor at least once during the semester for a brief individual check-in. This meeting is an opportunity to discuss your project progress, ask questions, and receive personalized feedback. You may schedule this meeting during office hours or by appointment.

## Course Description

This course teaches students to build web products in the AI era. Rather than focusing on syntax memorization, students will learn to collaborate effectively with AI tools to create functional, responsive, and user-friendly websites. Starting from Day 1, students will use AI to generate complete websites, then progressively learn to understand, evaluate, modify, and improve AI-generated code. The curriculum covers HTML5, CSS3, and JavaScript fundamentals, not as isolated skills to memorize, but as concepts needed to work effectively with AI assistants. Through a single iterative project that evolves throughout the semester, students will experience the full product development cycle: from AI-assisted prototyping to deployment on GitHub Pages. By the end of the course, students will have the skills to leverage AI tools responsibly while maintaining the understanding needed to evaluate, debug, and guide AI-generated solutions.

## Learning Objectives

By the end of this course, students will be able to:

- Use AI tools to rapidly prototype and build web applications
- Read, understand, and evaluate AI-generated HTML, CSS, and JavaScript code
- Explain fundamental web concepts: client-server architecture, DOM, responsive design, and accessibility
- Modify and improve AI-generated code to meet specific requirements
- Design and implement responsive layouts that work across different screen sizes
- Add meaningful interactivity using JavaScript and integrate external APIs
- Use Git and GitHub for version control, collaboration, and deployment
- Apply best practices in accessibility, performance optimization, and code organization
- Provide constructive feedback through peer code review
- Deploy and maintain a live web application

## Prerequisites

Students should have a basic understanding of operating a personal computer, including proficiency in using web browsers and the ability to navigate and manipulate files. No prior programming experience is required.

## Textbook

This course does not have any required textbooks. All course materials will be provided in PDF, Markdown, or HTML format and made available on Canvas and/or GitHub. The following resources are especially useful:

- [MDN Web Docs](https://developer.mozilla.org/en-US/)
- [W3Schools](https://www.w3schools.com)

## Software and Tools

### Required

- **[Visual Studio Code](https://code.visualstudio.com/)** - Primary code editor
- **[GitHub Copilot](https://github.com/features/copilot)** - AI coding assistant (free GitHub Copilot Pro for students with GitHub Student Developer Pack)
- **[GitHub Desktop](https://desktop.github.com)** - Version control
- **[Chrome](https://www.google.com/chrome/)** - Primary browser with DevTools

### Recommended

- **AI Prototyping Tools**: [v0.dev](https://v0.dev), [bolt.new](https://bolt.new), [Replit](https://replit.com), [Lovable](https://lovable.dev) - Generate full websites from prompts
- **Alternative IDEs**: [Cursor](https://cursor.com), [Antigravity](https://antigravity.google/) - AI-native code editors
- **AI Coding Agents**: [Claude Code](https://claude.ai/code), [OpenAI Codex](https://openai.com/codex) - Autonomous coding assistants
- **[Figma](https://www.figma.com)** - Design tool (free for students)

### Accounts Needed

- [GitHub](https://github.com/) account using your school-affiliated email
- [GitHub Student Developer Pack](https://education.github.com/pack) - Free access to GitHub Copilot Pro and other tools

## Grading

| Component | Weight | Description |
| :-------- | :----- | :---------- |
| Checkpoints | 40% | Learning logs, in-class work, mini projects, etc. |
| Final Project | 25% | Independent product, includes peer review |
| Understanding Assessment | 20% | Paper quizzes and in-person interviews |
| Participation | 15% | Learning log submission, office hours attendance, in-class activities, etc. |
| Bonus | up to 3% | Exceptional side projects |

| Grade | Range    |
| :---- | :------- |
| A     | 94-100   |
| A-    | 90-93.99 |
| B+    | 87-89.99 |
| B     | 84-86.99 |
| B-    | 80-83.99 |
| C+    | 77-79.99 |
| C     | 74-76.99 |
| C-    | 70-73.99 |
| D     | 60-69.99 |
| F     | 0-59.99  |

## Build in Public

This course embraces the **"Learn in Public"** and **"Build in Public"** philosophy. You will create **public repositories** on GitHub for all coursework. This approach:

- Encourages transparency and accountability in your learning process
- Allows easy peer review and collaboration
- Builds your portfolio from Day 1
- Reflects modern development practices

**You will create multiple repositories:**

| Repository | Purpose | URL |
| :--------- | :------ | :-- |
| `username.github.io` | Personal Website | `https://username.github.io` |
| `oim3690` | Course learning (exercises, logs) | `https://username.github.io/oim3690` |
| `[mini-project]` | Mini projects (separate repos) | `https://username.github.io/[mini-project]` |
| `[final-project]` | Final Project | `https://username.github.io/[final-project]` |

**Repository structures:**

```text
username.github.io/       # Personal Website
├── index.html
├── projects.html         # Portfolio page (links to all projects)
├── css/
├── js/
└── README.md

oim3690/                   # Course Learning
├── index.html            # Main page (links to exercises)
├── ex01.html, ex02.html  # In-class exercises
├── css/                  # Shared styles
├── js/                   # Shared scripts
├── logs/                 # Learning logs (Markdown)
├── .github/workflows/    # Automated checks
└── README.md

[project-name]/           # Mini Projects & Final Project (separate repos)
├── index.html
├── css/
├── js/
└── README.md
```

**Important**: Your personal website (`username.github.io`) must include a `projects.html` page that links to all your projects (mini projects and final project). This serves as your portfolio and makes it easy to showcase your work.

**You must frequently commit and push changes**. All coursework is evaluated based on your repository content and commit history. Your commit history demonstrates your learning journey and iterative improvement.

## Checkpoints

Your learning progress is tracked through checkpoints. The number and timing of checkpoints will be announced during the semester.

Each checkpoint evaluates:

- **Learning logs** (primary focus): Quality of reflection and understanding
- **Exercises**: Completion of in-class activities
- **Mini projects**: Progress on separate project repos

**Evaluation methods:**

- Automated checks via GitHub Actions (resubmit until deadline to improve)
- Manual review of all submissions
- Occasional one-on-one interviews to discuss your work and understanding

## Final Project

Starting around Week 9, you will create an independent product in a separate repository. This is your main deliverable for the course.

**Timeline:**

- Week 9: Project proposal and planning
- Week 10: Create repository and begin development
- Week 11-12: Development and refinement
- Week 13: Demo Day presentation and final submission

**Requirements:**

- Must be a functional web application (not just static content)
- Must include meaningful interactivity
- Must be deployed and publicly accessible
- Must include documentation (README)

**Collaboration:** During development, you will give and receive feedback from classmates to help each other build better products. See the separate Project Instructions for details.

### Learning Logs

After each class session, submit a brief **learning log** in Markdown format in your `logs/` folder.

**File naming**: `s01.md`, `s02.md`, etc.

**Suggested format** (use as reference, develop your own style):

```markdown
# Session X - [Date] - [Topic]

## What I learned today
[Brief reflection on key concepts - focus on understanding, not syntax]

## Code/work I'm proud of (optional)
[Paste a snippet and explain what it does]

## Challenges I faced
[What was difficult? How did I approach it?]

## AI usage (if any)
[What I asked AI for, how I used/modified the output]

## Questions for next time
[What remains unclear?]
```

**Note**: Your logs are for **your learning** first, grading second. Write honestly about struggles and questions - this demonstrates growth mindset.

**Evaluation**:

- Presence/absence (counts toward checkpoints)
- Depth and honesty (assessed during checkpoint reviews)
- No specific length requirement - quality over quantity

## Understanding Assessment (20%)

Your understanding is assessed through two complementary methods:

### Paper Quizzes

Several in-class paper quizzes throughout the semester. These are **judgment-focused**, not syntax-focused.

**Format**: Paper-based, no electronic devices

**Question Types**:

- **Code Reading**: What does this code do? What's its purpose?
- **Bug Detection**: Find and fix the problem
- **Design Comparison**: Which approach is better? Why?
- **Scenario Analysis**: What data structure would you use? Why?
- **AI Output Evaluation**: Is this AI-generated code trustworthy?

**Philosophy**: Quizzes test your ability to **think about code**, not memorize syntax. You should be able to:

- Read and understand code logic
- Identify potential problems
- Make design judgments
- Evaluate solutions critically

**Policy**:

- No make-up quizzes unless you have a valid medical excuse
- Most quizzes will be announced beforehand
- Focus on recently covered concepts

_Specific quiz dates will be announced on Canvas and in the course schedule._

### In-Person Interviews

Brief conversations during checkpoint reviews where I ask you questions about your code and projects. This gives you an opportunity to demonstrate your understanding verbally and allows me to assess your learning in a more natural, conversational setting.

These interviews:

- Happen naturally as part of the checkpoint process
- Are not separate appointments - they occur during regular checkpoint reviews
- Focus on your repository work, mini projects, and learning journey
- Allow you to explain and defend your design choices

## AI Tool Policy

AI tools are **encouraged and expected** in this course. Guidelines:

1. **Use AI from Day 1**: GitHub Copilot, ChatGPT, Claude, v0.dev, etc. are all permitted
2. **Understand what you submit**: You should be able to explain the purpose and behavior of code in your project, what it does and why it's there (not every syntax detail)
3. **Document significant AI contributions**: Note in comments when AI generated substantial portions
4. **The goal is learning, not just output**: Quizzes verify your actual understanding

Remember: AI helps you build faster, but understanding helps you build better.

## Bonus Opportunities

You can earn up to 3% bonus points through exceptional projects that go significantly beyond course requirements. Bonus projects must be discussed with and approved by the instructor before starting.

## Course Policies

- **Missed Classes**: Inform the instructor if you will be absent. You are responsible for obtaining materials and completing exercises for missed classes.

- **Need for Academic Accommodation**: Contact the Department of Accessibility Services (DAS) at <accessibility@babson.edu> or 781-239-5509 for accommodation requests.

- **Need for Religious Accommodations**: Contact the instructor early in the semester if religious observances conflict with course requirements.

- **Honor Code**: All work must comply with the [Babson College Undergraduate Honor Code](https://www.babson.edu/media/babson/assets/community-standards/babson-code-of-ethics.pdf). While AI assistance is permitted, you must understand and be able to explain all submitted work.

- **Academic Integrity**: Using AI tools as permitted is not a violation. However, submitting work you cannot explain, or misrepresenting your understanding, is academic misconduct.
