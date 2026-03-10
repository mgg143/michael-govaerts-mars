# Michael Govaerts | Portfolio Project
**Code the Dream | Intro to Programming Course | Mars Cohort (Winter 2025/2026)**

This is my final portfolio project, built to demonstrate core competencies in full-stack web development. It focuses on clean, semantic HTML, mobile-first responsive design, and dynamic content generation using JavaScript and the GitHub API.

---

## 🛠️ Tech Stack & Skills

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

* **HTML5:** Semantic architecture for improved SEO and accessibility.
* **CSS3:** Mobile-first responsive design using **relative units (rem)**, **Flexbox**, and **CSS Grid**.
* **JavaScript (ES6+):** Asynchronous API fetching, DOM manipulation, and event-driven interactivity.
* **GitHub API:** Dynamic repository integration.

---

## 🚀 Key Features

### **Dynamic GitHub Integration**
The project utilizes the `fetch` API to retrieve my latest repositories from GitHub. These are rendered as interactive links within the "Projects" section, keeping the portfolio automatically up to date.

### **Interactive Messaging System**
A fully functional "Leave a Message" section that allows users to:
* Submit names, emails, and messages.
* **Edit** existing messages (Stretch Goal).
* **Remove** messages from the list.
* The section header conditionally hides or displays based on whether messages are present.

### **Mobile-First Responsiveness**
I designed this site to be as user-friendly as possible across devices. 
* **Mobile:** Single-column layout with large touch targets.
* **Tablet:** Transitions to a 2-column grid for Experience and Skills.
* **Desktop:** Scales to a 3-column layout for maximum visibility on large screens.

---

## 📋 Project Requirements Checklist

### **Project Structure**
- [x] `index.html` with proper boilerplate.
- [x] Linked `index.css` and `index.js`.
- [x] Organized `/css`, `/js`, and `/images` folders.
- [x] Comprehensive `README.md`.

### **Content Sections**
- [x] **Header:** Level 1 heading with student name.
- [x] **Navigation:** Fixed/Sticky nav with internal links (About, Experience, Skills, Projects, Leave a Message).
- [x] **About:** Bio and profile image with `alt` text.
- [x] **Experience:** Styled with Grid/Flexbox.
- [x] **Skills:** Injected via JS and styled with CSS Grid.
- [x] **Projects:** Fetched from GitHub API with clickable links.
- [x] **Connect:** Linked social icons (GitHub, LinkedIn).

### **Functional Logic (JS)**
- [x] **Footer:** Automatic year and copyright name.
- [x] **Form Handling:** Captures input, creates clickable email links, and includes remove/edit buttons.
- [x] **Conditional Rendering:** Messages header toggles visibility based on content.
- [x] **API Fetch:** Successfully handles the GitHub repository list and includes error handling.

### **Styling & Performance**
- [x] **Media Queries:** 2+ breakpoints with significant property changes.
- [x] **Layout:** Responsive Flexbox/Grid usage in Experience and Connect sections.
- [x] **Accessibility:** High contrast and no horizontal scrolling.

---

## 📬 Connect with Me
* **GitHub:** [mgg143](https://github.com/mgg143)
* **LinkedIn:** [Michael Govaerts](https://www.linkedin.com/in/michaelgovaerts/)

---

> **Note on Implementation:** To ensure scalability, I used relative `rem` units for all sizing rather than absolute units like pixels. The "Edit" functionality in the message section also uses a prompt-based approach to maintain focus on DOM traversal logic.

---

[**Please check out my Open API Project, too!**](https://github.com/mgg143/michael-govaerts-open-api)
