Forge Studio – Static Website
Live Demo
https://forge-studio-static-web-gdg-project.netlify.app/

Project Overview

This project is a static website consisting of four main pages:

Home (index.html)
Services
Case Studies
Contact

The website is designed to simulate a modern digital agency landing experience, with attention to typography, layout, and responsiveness.


│
├── index.html                # Entry point (homepage)
│
├── pages/
│   ├── services.html
│   ├── case-studies.html
│   └── contact.html
│
├── css/
│   ├── base.css              # Global styles (navbar, footer, variables)
│   ├── home.css              # Homepage-specific styles
│   ├── services.css
│   ├── case-studies.css
│   └── contact.css
│
├── js/
│   └── app.js                # All interactivity
│
└── images/                  # Project assets

How It Works
 Entry Point

The website starts from index.html, which acts as the main entry point.

 CSS Architecture
base.css
Contains global styles
Navbar, footer, buttons
CSS variables (colors, fonts, spacing)
Page-specific CSS
Each page has its own stylesheet
Keeps code clean and modular
Avoids unnecessary CSS loading
 Layout System
CSS Grid
Used for major layouts (hero section, sections with multiple columns)
Flexbox
Used for smaller layouts (navbar, buttons, rows)
 Responsive Design
Media queries at:
880px
560px
Features:
Layout stacks on smaller screens
Navbar becomes hamburger menu
Content adapts for mobile usability
 JavaScript Functionality (app.js)

The entire interactivity is handled by a single JavaScript file.

1️⃣ Navbar Scroll Effect
Adds shadow when user scrolls
Improves visual feedback
2️⃣ Mobile Navigation
Hamburger menu opens full-screen panel
Functions used:
openMenu()
closeMenu()
3️⃣ Scroll Reveal Animation
Uses IntersectionObserver
Adds .visible class when elements enter viewport
More efficient than scroll event listeners
4️⃣ Services Accordion
Expand/collapse service sections
Controlled via toggleSvc() function
5️⃣ Contact Form Validation
Checks required fields (name, email)
Shows:
Error messages
Success message
Resets form after submission
 Design Features
Clean and modern UI
Google Fonts:
Space Grotesk (body)
Lora (headings)
Consistent color system using CSS variables
Smooth animations and transitions
 Pages Breakdown
 Home
Hero section
Scrolling ticker
Services preview
Case studies preview
Call-to-action
 Services
Accordion-based layout
Expandable service details
 Case Studies
Portfolio-style grid
Testimonial section
 Contact
Interactive form
Validation + success feedback
 Key Learnings
Structuring multi-page static websites
Separating global vs page-specific CSS
Using Grid vs Flexbox effectively
Implementing IntersectionObserver
Handling responsiveness with media queries
Managing clean folder architecture
 Tech Stack
HTML5
CSS3 (Custom styling, Flexbox, Grid)
JavaScript (Vanilla JS)
 Future Improvements
Backend integration for contact form
Authentication system
Database integration
Animations with libraries (GSAP / Framer Motion)
 Author

Anushka Mukherjee

Final Note

This project demonstrates strong fundamentals in frontend development, focusing on clean structure, responsive design, and interactive UI without using any frameworks.
