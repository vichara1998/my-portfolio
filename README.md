<div align="center">

# Professional Developer Portfolio | Vichara Tharkana

<img src="src/assets/profile.jpg" alt="Vichara Tharkana" width="120" style="border-radius: 50%; border: 4px solid white;" />

<br />

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
<img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" />
<img src="https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white" />

</div>

---

##  Overview
This repository contains the source code for my professional portfolio website. It is designed to demonstrate technical proficiency in **Modern Frontend Architecture**, **Responsive Design**, and **Interactive User Interfaces**. The site serves as a digital resume for my work as a Software Engineering Undergraduate at **The Open University of Sri Lanka**.

##  Architecture & Technical Decisions

### 🎨 Frontend Excellence
* **Component-Based Design**- Built using React 18 for high modularity and reusability.
* **Glassmorphism UI**- Implemented via Tailwind CSS utility classes to create a sleek, modern aesthetic with blurred backdrops and gradient borders.
* **Micro-Interactions**- Leverages Framer Motion for scroll-linked animations and smooth transitions, enhancing user engagement without sacrificing performance.

### ⚙️ Engineering Features
* **Custom Hooks Layer**- 
  - `useTheme`- Manages persistent dark/light mode states synced with system preferences and `localStorage`.
  - `useScrollSpy`- A specialized hook for real-time navigation tracking to highlight active sections during scrolling.
* **Data-Driven Content**- All personal details, projects, and skills are decoupled into a centralized `data.js` file for rapid updates and maintenance.
* **Performance First**- Optimized with Vite for near-instant hot module replacement (HMR) and minimized production bundles.

## 📂 Repository Structure
```text
src/
├── components/     # Reusable UI primitives (Navbar, Footer, Progress)
├── hooks/          # Custom business logic (Theme, Scroll Tracking)
├── sections/       # Feature-specific page layouts (Hero, Skills, Projects)
├── assets/         # Static media (profile.jpg) and document resources (CV)
└── data.js         # Centralized configuration and content
