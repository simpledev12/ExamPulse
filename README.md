# ExamPulse — Modern Ed-Tech Platform (Class 6 to 12 Board Exam Prep)

**ExamPulse** is a fast, distraction-free, and 100% mobile-responsive Ed-Tech platform built for **BSEB & CBSE Class 6 to 12** students. Founded by **Khushnoor**, ExamPulse empowers students with structured chapter-wise study notes, interactive Objective MCQs, step-by-step Subjective Q&A (with MathJax rendering), and live timed Mock Tests.

---

## ✨ Key Features & Rearranged Architecture

1. **Complete BSEB Class 9 Mathematics Curriculum (`data/bsebClass9MathsComplete.js`)**
   - **Chapters 1–6 & 12–13**: Number System, Polynomials (Factor Formulas & Cubic Identities), Coordinate Geometry, Linear Equations in Two Variables, Euclid's Geometry, Lines and Angles, Heron's Formula, and Surface Areas & Volumes — each equipped with Hindi/English notes, formulas, MCQs, and HOTS Subjective Q&As.
   - **Chapter 14 — सांख्यिकी (Statistics)** (`data/bsebClass9Ch14.js` + `public/notes/Class9_Maths_BSEB_Ch14_Statistics.md`): 8 comprehensive Hindi+English topics, 10 board formulas, 15 Objective MCQs, and 20 Subjective Q&As (15 NCERT/BSEB + 5 HOTS problems with frequency distribution tables).
   - **Chapter 15 — प्रायिकता (Probability)** (`data/bsebClass9Ch15.js` + `public/notes/Class9_Maths_BSEB_Ch15_Probability.md`): Empirical probability notes, formulas, 6 Objective MCQs, and 5 step-by-step Subjective Q&As.
   - **Master 50 HOTS Subjective Question Bank** (`data/bsebClass9MathSubjective50.js` + `class-9-math-subjective-50.html`): All 50 HOTS questions accessible both inside the interactive Chapter View and as a standalone printable MathJax sheet.

2. **3-in-1 Core Learning Interface (`pages/ChapterView.jsx` & `public/exampulse-live.js`)**
   - **Tab 1 — Notes & Study Material**: Chapter overview, key concepts, formula cheat sheets, dynamic chapter file download, and printable PDF preview.
   - **Tab 2 — Objective Questions (MCQs)**: Interactive option selection, instant feedback, and expandable explanations.
   - **Tab 3 — Subjective Questions (Q&A)**: Short, Long, and HOTS questions with frequency tables, answer badges, step-by-step solutions, and one-click Expand/Collapse All.

3. **Live Timed Mock Tests (`pages/MockTest.jsx`)**
   - Includes **Class 9 Mathematics (BSEB) Board Mock Test**, **Class 10 Science Mock Test**, and **Class 12 PCM Booster** with live countdown timer, question navigator palette, and instant scorecard modal.
