# OIM3690 Web Technologies - 2025 Spring - Homework 3

This homework focuses on introducing **JavaScript** into your web development workflow. You will complete several guided tasks to practice DOM manipulation, interactivity, and logic, then conclude with a creative open-ended project that can include AI usage.

---

## 🎯 Learning Objectives

After completing this assignment, you will be able to:

- Use JavaScript to manipulate the DOM and enhance user interaction
- Implement filtering, searching, and basic game logic using vanilla JS
- Explore AI-enhanced development workflows using APIs
- Reflect on your coding and AI collaboration process
- Apply JavaScript to extend your own portfolio site meaningfully

---

## 📂 Project Structure

Your submission must include the following files:

```plaintext
WebTech/
├── docs/
│   ├── ... (reflection files from previous homework)
│   └── hw3-reflection.md
├── scripts/
│   ├── ... (JavaScript files from classwork)
│   ├── hw3-1.js
│   ├── hw3-2.js
│   ├── hw3-3.js
│   └── hw3-4.js
├── hw3-1-index.html
├── hw3-2-projects.html
├── hw3-3-blackjack.html
├── hw3-4-app.html
├── ... (and all the other classwork and previous homework/exercise files)
```

---

## 🧩 Part 1: Color & Font Switcher (20 points)

### 🎯 Goal

You will create `hw3-1.js` inside `scripts` folder to enhance the given page (`hw3-1-index.html`) by adding some interactivity with JavaScript. Specifically, you will:

1. Toggle between light and dark themes
2. Switch between two fonts (e.g., default and monospace)

This exercise will help you practice DOM manipulation, event handling, and class-based styling using JavaScript.

### 📁 Starter File

Download the starter file: [`hw3-1-index.html`](/hw3-1-index.html).

### ✅ Required Features

#### 1. Light/Dark Mode Toggle

- Use the provided **"Toggle Theme"** button to switch between light and dark themes.
- Your themes should affect both the page background and text color.
- You must use CSS classes (e.g., `.light`, `.dark`) and JavaScript to apply them.

#### 2. Font Toggle

- Use the provided **"Toggle Font"** button to switch between a default font (e.g., `Arial`) and a monospace font (e.g., `Courier New`).
- You must use CSS classes and JavaScript to toggle the font style.

Implementing both features is required for full credit.

### 🟣 Optional Feature (+5 pts)

#### 3. Persistent Theme and Font (localStorage)

- Store the selected theme and font style in `localStorage`.
- When the page reloads, automatically apply the user's previous settings.

### 🖼️ Expected Behaviors

- The page starts in light mode with the default font (e.g., Arial).
- Clicking the theme toggle switches between light and dark mode.
- Clicking the font toggle switches between two clearly different font styles.
- Both toggles function independently.
- (Optional) Preferences persist across page reloads if implemented with `localStorage`.

### ❗ Important Requirement

You **must not** modify the given HTML file (`hw3-1-index.html`).

- All behavior and logic must be implemented in `hw3-1.js`.
- Use the existing buttons already defined in the HTML.

### 💡 Getting Started Tips

- Read the starter file carefully (especially the CSS section) to understand the provided `.dark` and `.alt-font` classes.
- Use `classList.add()`, `remove()`, or `toggle()` to change styles dynamically.
- Use `localStorage.setItem()` and `localStorage.getItem()` to save and retrieve settings (optional).

---

## 📊 Part 2: Project Gallery Interaction (20 points)

### 🎯 Goal:

You will add interactivity to a sample project gallery page, `hw3-2-projects.html`, using JavaScript. This page displays several project cards, each with a title, description, and category. Your task is to allow users to:

1. Filter projects by category using buttons
2. Search for projects by keywords in the title
3. (Optional) Sort projects alphabetically

### 📁 Starter File

Please download the starter file: [`hw3-2-projects.html`](/hw3-2-projects.html).

### ✅ Required Features

#### 1. Filter by Category

- The page includes buttons like "All", "Web", "Data", and "AI".
- When a user clicks one of the buttons, only show project cards that match that category.
- When "All" is selected, show all projects.
- Each project card includes a `data-category` attribute, for example:
    ```html
    <div class="project-card" data-category="web">...</div>
    ```

#### 2. Live Search by Title

- The page includes a text input (search bar)
- As the user types in the search bar, the visible projects should update in real time
- Matching should be case-insensitive
- Each project card includes a `data-title` attribute, for example:
    ```html
    <div class="project-card" data-title="Portfolio Website">...</div>
    ```

#### 3. (Optional) Sort Projects

- The page includes a `<select>` dropdown to choose the sort order.
- Support sorting visible project cards by title (A–Z and Z–A).
- You must reorder the project cards in the DOM, not just visually simulate sorting.

### Expected Behaviors

- Initially, all projects are shown.
- Clicking a category button filters the cards based on `data-category`, e.g. clicking the "Web" button only shows projects with `data-category="web"`.
- Typing a keyword in the search bar filters cards based on `data-title`, e.g. typing "chat" in the search bar filters the list to only show projects with titles that include "chat".
- (Optional) Filtering and searching should work together (e.g., category "Web" + search "portfolio").
- (Optional) Choosing "Sort Z–A" should reorder the visible project cards alphabetically from Z to A.

### ❗ Important Requirement

You **must not** modify the given HTML file (`hw3-1-index.html`).

- All behavior and logic must be implemented in `hw3-1.js`.
- Use the existing buttons and input already defined in the HTML.

### 💡 Getting Started Tips

You may find the following techniques helpful:

- Use `document.querySelectorAll()` to get buttons and cards.
- Use `element.dataset.category` or `element.dataset.title` to access custom data attributes.
- Use `element.style.display = 'none'` or `'block'` to hide/show elements.
- Use `.toLowerCase()` to handle case-insensitive comparisons.
- To sort, use `.sort()` on an array of elements and then re-append them to the container using `.appendChild()`.

---

## 🂡 Part 3: Simple Blackjack Game (25 points)

### 🎯 Goal

You will build a simplified Blackjack-style game using vanilla JavaScript. This exercise will help you practice DOM manipulation, random number generation, conditional logic, and event handling.

### 📁 Starter Files

- Download the starter HTML: [`hw3-3-blackjack.html`](/hw3-3-blackjack.html)  
- All card images are located in the folder [`images/cards/`](/images/cards). You can also download the zip file, [cards.zip](images/cards/cards.zip), and extract it to the same folder.

### ✅ Required Features

- When the user clicks the **"Hit"** button, generate and display **three random cards**.
- Calculate the total value of the three cards and display the result.
- Card values follow these rules:
  - Number cards (2–10): use their number as value
  - Face cards (Jack, Queen, King): all worth 10
  - Ace: worth 1
- If the total value is greater than 21, display: **"You are Busted!"**
- Otherwise, display: **"You are Not Busted!"**
- You should use card images to display the cards.
- All images will be located in the folder `images/cards/`.
- The default back image (`green_back.png`) is already shown at page load.

### 🟣 Optional Feature (5 pts)

- Add **keyboard shortcuts** for gameplay (e.g., `H` to hit)
- Add animations using `setTimeout()` to delay card reveal
- Add a **“Restart”** button that resets the game

### 🖼️ Expected Behaviors

- Clicking the "Hit" button replaces the card area with three new random cards
- The total value is updated and displayed
- Display result message below or near the cards
- (Optional) Add simple styling or animation to improve the visual experience

### 💡 Getting Started Tips

- Use `Math.random()` and `Math.floor()` to pick random cards
- Use `querySelector()` or `getElementById()` to update text or images
- Create helper functions (e.g., `drawCard()` or `calculateTotal()`)
- You may want to store all possible card values and names in arrays if needed.

---

## 🧠 Part 4: Open-Ended JavaScript Project (25 points)

### 🎯 Goal

Build your own small interactive project using JavaScript. This is your opportunity to apply everything you’ve learned—and to be creative!

You can build:

- A small game (e.g., memory match, quiz, timer, or a real blackjack game)
- A simple app (e.g., to-do list, calculator)
- A tool using the **OpenAI API** (e.g., chatbot, AI writing assistant)

You are encouraged to explore and use **AI tools like ChatGPT** to help you brainstorm ideas, design, generate, or debug your code. However, you must be able to understand and explain any AI-generated code you include.

### 📁 Starter File

Create a new file: `hw3-4-app.html` and write all your JavaScript in: `scripts/hw3-4.js`

### ✅ Required Features

- Your project must use **only vanilla JavaScript**
- Do **not** use external libraries or frameworks (no jQuery, React, Bootstrap, etc.)
- Your code must include **at least two JavaScript concepts**, such as:
  - Event listeners
  - DOM manipulation
  - Arrays or objects
  - Loops or conditionals
  - `setTimeout()` or `setInterval()`
  - API calls (e.g., to OpenAI)

### 🟣 Optional Enhancement (5 pts)

- Integrate the **OpenAI API** to create an AI-powered tool
- Example: a simple chatbot, prompt tester, quiz grader, etc.

> Note: You will need your own API key. Instructions and examples will be provided separately if you choose this option.

### 🖼️ Expected Behaviors

- Your page should be interactive and usable
- All features should work without errors in the browser
- Your code should be readable and well-organized
- Optional features should be clearly explained in comments or your reflection

### 💡 Getting Started Tips

- Start small: get the basic idea working first, then add features
- Plan out your HTML structure before jumping into JavaScript
- Use `console.log()` to test values and debug
- If using the OpenAI API, review the [OpenAI API Docs](https://platform.openai.com/docs/api-reference)

---

## 🤖 Reflection – Development & AI Collaboration (`hw3-reflection.md`) (10 points)

In your `hw3-reflection.md`, briefly reflect on your development process and your experience using AI tools. Organize your reflection using the following sections:

### 1. Development Reflection

- Describe **at least one challenge** you encountered and how you solved it.
- Mention **one or two key things** you learned or improved during this assignment.

### 2. AI Usage Summary

- **Which AI tools did you use?** (e.g., ChatGPT, GitHub Copilot)
- **What did you ask it to help with?** (Describe at least one prompt)
- **How helpful was it?** What did you keep, change, or discard?
- (Optional) include screenshots in `docs/screenshots/` if relevant

### 3. Reflection on AI Collaboration

- In your opinion, what are the benefits and limitations of using AI tools in web development?
- What advice would you give yourself or others about working with AI in future coding projects?

---

### Final Submission:

- Verify all files follow the required structure exactly.
- **Commit and push** your work clearly and regularly to GitHub.
- Create a GitHub [release](https://docs.github.com/en/github/administering-a-repository/releasing-projects-on-github/managing-releases-in-a-repository) with the tag `hw3` (no additional files needed).
