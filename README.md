# ExamPulse — Modern Ed-Tech Platform (Class 6 to 12 Board Exam Prep)

**ExamPulse** is a fast, distraction-free, and 100% mobile-responsive Ed-Tech frontend built with **React.js**, **Tailwind CSS**, and **Lucide React**. Founded by **Khushnoor**, ExamPulse empowers Class 6 to 12 students with structured chapter-wise study notes, interactive Objective MCQs, step-by-step Subjective Q&A, and live timed Mock Tests.

---

## ✨ Key Features & Architecture

1. **Distraction-Free "Study Mode" UI**
   - Trustworthy Deep Indigo/Blue & Slate color palette with one-click **Focus Mode** and **Dark/Light Theme Toggle**.
   - High-readability `Inter` and `Poppins` typography optimized for long mobile study sessions.

2. **Home Page & Personal Branding**
   - **Hero Section**: *"Ace Your Board Exams with ExamPulse"* with instant CTAs to start learning or launch a timed Mock Test.
   - **Classes Grid (Class 6 to Class 12)**: Interactive cards showing board alignment, subject tags, and chapter counts.
   - **About The Founder Section**: Dedicated personal branding showcase for **Khushnoor** featuring his portrait photo, educator bio, and handwritten signature.

3. **Class & Subject Dashboard (`/pages/ClassDashboard.jsx`)**
   - Seamless filtering across **Class 6 to Class 12**.
   - Subject-wise grid (Mathematics, Science, Physics, Chemistry, Social Science, English) leading into detailed chapter lists with board weightage and reading duration.

4. **Core Learning Interface (`/pages/ChapterView.jsx`)**
   - **Tab 1 — Notes**: Structured chapter summary, key concepts, formula/reaction cheat sheets, and a CMS-ready PDF reader placeholder.
   - **Tab 2 — Objective Questions (MCQs)**: Interactive radio buttons, instant option selection feedback, and a **"Show Answer"** toggle with detailed explanations.
   - **Tab 3 — Subjective Questions**: Short & Long answer questions with expandable **"View Solution"** accordions.

5. **Dedicated Mock Test UI (`/pages/MockTest.jsx`)**
   - Live countdown timer at the top.
   - Interactive Question Navigator Palette showing *Answered*, *Current*, *Marked for Review*, and *Pending* states.
   - Next/Previous/Mark for Review controls, **"Submit Test"** action, and an instant **Result/Scorecard Modal**.

---

## 📁 Project Folder Structure

```text
ExamPulse/
├── components/
│   ├── Header.jsx           # Sticky navbar with Brand, Links, Focus Mode & Theme toggle
│   ├── Footer.jsx           # Quick links, Class shortcuts & Social links
│   └── FounderSection.jsx   # Personal branding section for Founder Khushnoor
├── pages/
│   ├── Home.jsx             # Landing page (Hero, Class 6–12 Grid, Features, Founder)
│   ├── ClassDashboard.jsx   # Subject cards & Chapter list per Class
│   ├── ChapterView.jsx      # 3-Tab learning view (Notes, Objective MCQs, Subjective Q&A)
│   └── MockTest.jsx         # Timed Mock Test interface with Question Palette & Score Modal
├── data/
│   ├── mockData.json        # Modular JSON curriculum data (ready for CMS/Backend API)
│   └── founderAssets.js     # Pre-bundled portrait & signature assets for Khushnoor
├── styles/
│   └── globals.css          # Tailwind CSS directives & custom scrollbar utilities
├── public/
│   ├── manifest.json        # PWA web manifest
│   └── robots.txt           # Crawler rules
├── App.jsx                  # Root state & view router
├── main.jsx                 # React DOM entry point
├── index.html               # HTML template with Inter & Poppins Google Fonts
├── package.json             # Dependencies & scripts
├── tailwind.config.js       # Tailwind theme configuration
├── postcss.config.js        # PostCSS plugins
└── vite.config.js           # Vite bundler config
```

---

## 🚀 How to Run Locally

1. **Clone the repository**
   ```bash
   git clone https://github.com/simpledev12/ExamPulse.git
   cd ExamPulse
   ```

2. **Checkout the feature branch (or stay on `main`)**
   ```bash
   git checkout feature/initial-ui-setup
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.
