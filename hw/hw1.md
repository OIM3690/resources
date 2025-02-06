# OIM3690 Web Technologies - 2025 Spring - Homework 1

## Learning Objectives

After completing this assignment, you will be able to:

- Create basic web pages using HTML and CSS
- Apply appropriate styling to enhance web content
- Analyze and compare different approaches to web development
- Effectively use AI tools while maintaining understanding of fundamentals

## Part 1: Personal Homepage and Portfolio Page (60 points)

### 1. Creating Personal Homepage `index.html` (25 points)

Your personal homepage should serve as a professional introduction of yourself. The page must include several key sections, each serving a specific purpose:

1. Header Section
   - Create a main title "About [Your Name]" using the `h1` tag. This should be the most prominent text on your page.
   - Design a "Quick Links" navigation section that helps visitors easily move around your page. Include these links:
     - "About Me" (links to your introduction section)
     - "My Interests" (links to your interests section)
     - "Contact" (links to your contact information)
     - "Portfolio" (links to sitemap.html)
   - Consider arranging these links horizontally or vertically in a way that complements your page design.

2. Main Content Section
   - "About Me" Section:
     - Use the `h2` tag for the section heading
     - Write a personal introduction paragraph that gives readers a sense of who you are
     - Create a second paragraph discussing your Babson journey and future plans
     - Include a professional or casual photo of yourself
     - The photo should be saved in the `WebTech/images` folder
     - While there's no strict word count, make sure your paragraphs are substantial enough to be informative but concise enough to maintain reader interest

   - "My Interests" Section:
     - Use the `h2` tag for the section heading
     - Describe your hobbies and interests in an engaging way
     - Include an image that represents one of your interests
     - Choose a keyword from your text (like "NBA" for basketball) and link it to a relevant website
     - While there's no strict word count, make sure your paragraphs are substantial enough to be informative but concise enough to maintain reader interest

3. Contact Section
   - Use the `h3` tag for "Contact Information"
   - Present your information in a clear, organized manner:
     - Full name and course name
     - Email address (must be clickable with `mailto:` link)
     - GitHub profile URL (Make sure it's active and accessible)
     - Link to your portfolio page (`sitemap.html`)

### 2. Adding Basic Styles (25 points)

Your CSS styling should enhance readability and visual appeal while maintaining professionalism. Use **internal CSS** (within a `<style>` tag in your HTML) with these permitted elements and properties:

**Allowed HTML Tags & Elements**:

- Document structure: `html`, `head`, `body`
- Text elements: `h1`, `h2`, `h3`, `p`, `span`
- Lists: `ul`, `li`, `ol`
- Links: `a`
- Images: `img`
- Other elements: `hr` (not recommended), `div`
- Semantic elements: `header`, `footer`
- Grouping: `class`, `id` attributes

**Allowed CSS Properties**:

1. Box Model
   - margin, padding
   - border (width, style, color)
   - width, height
   - box-sizing

2. Typography
   - font-family, font-size, font-weight
   - color
   - text-align, text-decoration
   - line-height

3. Layout
   - display (block, inline, inline-block)
   - position (relative, absolute, fixed)
   - top, right, bottom, left
   - float
   - clear

4. Visual Styling
   - background-color
   - background-image
   - opacity
   - border-radius
   - cursor

5. Units
   - Absolute: px
   - Relative: em, %, vh/vw

6. Selectors
   - Element selectors
   - Class selectors (.)
   - ID selectors (#)
   - Descendant selectors
   - Pseudo-classes (:hover, :active)

**Style Guidelines**:

- Choose a consistent [color scheme](https://coolors.co/)
- Have sufficient contrast between text and background
- Maintain consistent spacing throughout the page
- Test your pages in different browsers
- Make sure all links are working properly

### 3. Portfolio Page `sitemap.html` (10 points)

The `sitemap.html` page serves as a directory of your work in this course. Create it with these specifications:

1. Main heading "Work done in WebTech by [Your Name]" using h1 tag
2. Horizontal line below the heading
3. Unordered list of HTML pages with links:
   - Exercise 01 (link to `ex01.html`)
   - Exercise 03 (link to `index.html`)
   - Exercise 04 (link to `ex04.html`)
   - Exercise 05 (link to `ex05.html`)
   - Exercise 06 (link to `ex06.html`)
   - ... (add more pages as you create them)
4. Horizontal line below the list
   - **Challenge**: Create this line without using the `hr` tag
5. Add [`home.jpg`](https://raw.githubusercontent.com/OIM3690/resources/main/templates/images/home.jpg) image (download it into `WebTech/images` folder) and link it to `index.html`

Style `sitemap.html` using similar CSS properties as `index.html`.

**Additional Styling Considerations:**

- Maintain visual consistency with your `index.html` page
- Make sure the list is easy to read and well-organized
- Style the `home.jpg` image appropriately (consider size and placement)

## Learning Resources

- [MDN HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML)
- [MDN CSS Basics](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)
- W3C Validator: <https://validator.w3.org/>

---

## Part 2: AI Tool Practice (40 points)

This section helps you understand how AI can assist in web development while developing critical analysis skills.

### 1. AI Version Creation (20 points)

Create two versions of your personal homepage (`index.html`) using AI:

1. (mandatory) A restricted version using only elements covered in class (`index-ai.html`)
2. (optional) An unrestricted version showcasing additional features (`index-ai-advanced.html`)

When working with AI tools:

- Provide clear, specific instructions about allowed elements
- Save your prompts for discussion in the reflection (`hw1-reflection.md`)
- Document any modifications you made to the AI output

### 2. Analysis and Reflection (20 points)

In your `hw1-reflection.md`, provide a thorough analysis and reflection structured including the following:

1. AI Tool Interaction
   - Document the prompts you used for AI version(s)
   - Explain your strategy in crafting these prompts
   - Describe any follow-up interactions needed to refine the AI output

2. Code Comparison
   - **Compare your version with AI version(s)**
   - Identify and explain at least **three significant differences** in approach or implementation
   - Analyze which approaches are more effective and why
   - If the enhanced AI version uses advanced features, explain how you would achieve similar results using basic elements

3. Learning Reflection
   - Discuss what you learned from examining the AI's approach
   - Reflect on challenges you faced in your own implementation
   - Describe how this experience might influence your future web development work

---

## Submission

1. Check all the required files:
   1. `index.html` - your manually created version
   2. `sitemap.html` - your portfolio page
   3. `index-ai.html` - AI version with basic features (mandatory)
   4. `index-ai-advanced.html` - AI version with advanced features (optional)
   5. `hw1-reflection.md` - your analysis and reflection
   6. All images in `WebTech/images` folder
2. ***Commit and push*** to GitHub.
3. Create a release.
   - Use tag version '`hw1`' for this release. You don't need to attach any files.
   - Learn more about [Managing releases in a repository](https://docs.github.com/en/github/administering-a-repository/releasing-projects-on-github/managing-releases-in-a-repository).
