import { FOUNDER_PHOTO_URI, FOUNDER_SIGNATURE_URI } from '../data/founderAssets.js';
import { BSEB_CLASS9_MATHS_SUBJECT } from '../data/bsebClass9Ch14.js';

const FOUNDER_PHOTO_SRC = FOUNDER_PHOTO_URI;
const FOUNDER_SIG_SRC = FOUNDER_SIGNATURE_URI;

async function bootExamPulse() {
  const res = await fetch('./data/mockData.json');
  const mockData = await res.json();

  // Inject Class 9 Maths BSEB Chapter 14 Statistics (Hindi + English Notes, 15 MCQs, 15 Subjective Q&As)
  mockData.classes.forEach(cls => {
    if (cls.id === 'class-9') {
      cls.boardTag = 'BSEB / CBSE • Hindi + English';
      const others = cls.subjects.filter(s => s.id !== 'maths-9');
      cls.subjects = [BSEB_CLASS9_MATHS_SUBJECT, ...others];
      cls.subjectsCount = cls.subjects.length;
    }
  });

  const state = {
    activePage: 'home',
    darkMode: false,
    studyMode: false,
    selectedClassId: 'class-9',
    selectedSubjectId: 'maths-9',
    selectedChapterId: 'ch-statistics-9-bseb',
    activeChapterTab: 'notes',
    pdfExpanded: false,
    mcqSelections: {},
    mcqRevealed: {},
    subjectiveOpen: {},
    selectedTestId: mockData.mockTests[0].id,
    currentQuestionIdx: 0,
    testAnswers: {},
    testMarked: {},
    timeLeft: mockData.mockTests[0].durationSeconds,
    testSubmitted: false,
    showScoreModal: false
  };

  let timerInterval = null;

  function getCurrentClass() {
    return mockData.classes.find(c => c.id === state.selectedClassId) || mockData.classes[3];
  }

  function getCurrentSubject() {
    const cls = getCurrentClass();
    return cls.subjects.find(s => s.id === state.selectedSubjectId) || cls.subjects[0];
  }

  function getCurrentChapter() {
    const sub = getCurrentSubject();
    return (sub && sub.chapters.find(ch => ch.id === state.selectedChapterId)) || (sub && sub.chapters[0]);
  }

  function getCurrentTest() {
    return mockData.mockTests.find(t => t.id === state.selectedTestId) || mockData.mockTests[0];
  }

  function formatTime(secs) {
    const mins = Math.floor(secs / 60);
    const rem = secs % 60;
    return String(mins).padStart(2, '0') + ':' + String(rem).padStart(2, '0');
  }

  function startOrStopMockTimer() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
    if (state.activePage === 'mock-tests' && !state.testSubmitted) {
      timerInterval = setInterval(() => {
        if (state.timeLeft <= 1) {
          state.timeLeft = 0;
          state.testSubmitted = true;
          state.showScoreModal = true;
          clearInterval(timerInterval);
          timerInterval = null;
          renderApp();
        } else {
          state.timeLeft -= 1;
          const timerEl = document.getElementById('live-timer-display');
          if (timerEl) {
            timerEl.textContent = 'Time Remaining: ' + formatTime(state.timeLeft);
          }
        }
      }, 1000);
    }
  }

  function renderFounderSectionHtml() {
    const f = mockData.siteMeta.founder;
    const highlightsHtml = f.highlights.map(h => `
      <div class="flex items-start gap-2 rounded-xl border border-slate-200/80 bg-white/90 p-3 text-xs font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-800/60 dark:text-slate-300">
        <span class="text-indigo-600 dark:text-indigo-400 font-bold">✓</span>
        <span>${h}</span>
      </div>
    `).join('');

    return `
      <section id="about-founder" class="relative overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-br from-white via-indigo-50/40 to-blue-50/50 p-6 shadow-sm sm:p-10 lg:p-12 dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950/30">
        <div class="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div class="flex flex-col items-center lg:col-span-5">
            <div class="relative group">
              <div class="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-indigo-600 to-blue-500 opacity-20 blur-xl"></div>
              <div class="relative overflow-hidden rounded-2xl border-4 border-white bg-slate-100 shadow-xl dark:border-slate-800 dark:bg-slate-800">
                <img src="${FOUNDER_PHOTO_SRC}" alt="Khushnoor — Founder of ExamPulse" class="h-80 w-64 object-cover object-top sm:h-96 sm:w-72 max-w-full" />
                <div class="bg-slate-900/95 px-4 py-2.5 text-center text-white">
                  <p class="text-sm font-bold tracking-wide">${f.name}</p>
                  <p class="text-[11px] text-indigo-300">${f.role}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-5 lg:col-span-7">
            <div class="inline-flex items-center gap-2 rounded-full bg-indigo-100/90 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
              <span>✨ About The Founder</span>
            </div>
            <h2 class="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              Making Board Exam Preparation Simple, Structured &amp; Accessible for Every Student
            </h2>
            <div class="rounded-2xl border border-indigo-100 bg-white/95 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-800/80">
              <p class="text-base leading-relaxed text-slate-700 dark:text-slate-200">"${f.bio}"</p>
            </div>
            <div class="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
              ${highlightsHtml}
            </div>
            <div class="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/80 pt-5 dark:border-slate-800">
              <div>
                <p class="text-xs font-semibold uppercase tracking-wider text-slate-400">Signed with commitment,</p>
                <div class="mt-2 inline-block rounded-xl border border-slate-200 bg-white px-4 py-2 shadow-sm">
                  <img src="${FOUNDER_SIG_SRC}" alt="Khushnoor Signature" class="h-12 w-auto object-contain max-w-full" />
                </div>
                <p class="mt-1 text-xs font-bold text-slate-800 dark:text-slate-200">${f.name} • Founder, ExamPulse</p>
              </div>
              <div class="flex items-center gap-2 rounded-2xl bg-indigo-600/10 px-4 py-3 text-indigo-700 dark:bg-indigo-950/70 dark:text-indigo-300">
                <div class="text-xs">
                  <p class="font-bold">Student-First Study Mode UI</p>
                  <p class="opacity-80">Zero Ads • Zero Distractions • Class 6 to 12</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `;
  }

  function renderHomeView() {
    const classCardsHtml = mockData.classes.map(cls => {
      const subPills = cls.subjects.slice(0, 3).map(s => `
        <span class="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300">${s.name}</span>
      `).join('');
      return `
        <button type="button" data-select-class="${cls.id}" class="class-card-btn group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition-all hover:-translate-y-1 hover:border-indigo-500 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500">
          <div>
            <div class="flex items-center justify-between gap-2">
              <span class="inline-flex items-center gap-1.5 rounded-xl bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700 dark:bg-indigo-950/90 dark:text-indigo-300">
                🎓 ${cls.boardTag}
              </span>
              <span class="text-xs font-semibold text-slate-400">${cls.studentsEnrolled}</span>
            </div>
            <h3 class="mt-4 text-2xl font-extrabold text-slate-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">${cls.name}</h3>
            <p class="mt-0.5 text-xs font-medium text-slate-500 dark:text-slate-400">${cls.level}</p>
            <div class="mt-4 flex flex-wrap gap-1.5">${subPills}</div>
          </div>
          <div class="mt-6 flex items-center justify-between border-t border-slate-100 pt-3.5 text-xs font-bold text-indigo-600 dark:border-slate-800 dark:text-indigo-400">
            <span>${cls.subjects.length} Subjects • ${cls.chaptersCount} Chapters</span>
            <span class="transition-transform group-hover:translate-x-1">Explore →</span>
          </div>
        </button>
      `;
    }).join('');

    return `
      <div class="space-y-16 pb-16">
        <section class="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-indigo-50/70 via-white to-slate-50 pt-10 pb-16 dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-3xl text-center">
              <div class="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs font-bold text-indigo-700 shadow-sm dark:border-indigo-800 dark:bg-indigo-950/80 dark:text-indigo-300">
                <span>✨ Class 6 to 12 Board Exam Preparation Platform</span>
              </div>
              <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
                Ace Your Board Exams with <span class="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-blue-400">ExamPulse</span>
              </h1>
              <p class="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
                ${mockData.siteMeta.subtitle}
              </p>
              <div class="mt-8 flex flex-wrap items-center justify-center gap-3.5">
                <button type="button" id="hero-start-btn" class="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/25 transition-all hover:bg-indigo-700">
                  <span>Start Learning</span>
                  <span>→</span>
                </button>
                <button type="button" id="hero-mock-btn" class="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  <span>⏱️ Take a Mock Test</span>
                </button>
                <button type="button" id="hero-bseb-ch14-btn" class="inline-flex items-center gap-2 rounded-2xl border-2 border-emerald-500 bg-emerald-50 px-5 py-3.5 text-sm font-extrabold text-emerald-800 shadow-sm transition-all hover:bg-emerald-100 dark:border-emerald-500/80 dark:bg-emerald-950/70 dark:text-emerald-200">
                  <span>📘 Class 9 Maths (BSEB) Ch 14: सांख्यिकी (Hindi Notes + 30 Q&amp;A)</span>
                </button>
              </div>

              <div class="mt-10 grid grid-cols-3 gap-4 rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-sm sm:p-5 dark:border-slate-800 dark:bg-slate-900/90">
                <div>
                  <p class="text-xl font-extrabold text-indigo-600 sm:text-2xl dark:text-indigo-400">Class 6–12</p>
                  <p class="text-xs font-medium text-slate-500 dark:text-slate-400">Complete Board Syllabus</p>
                </div>
                <div class="border-x border-slate-200 dark:border-slate-800">
                  <p class="text-xl font-extrabold text-indigo-600 sm:text-2xl dark:text-indigo-400">3-in-1 Tabs</p>
                  <p class="text-xs font-medium text-slate-500 dark:text-slate-400">Notes • MCQs • Subjective Q&amp;A</p>
                </div>
                <div>
                  <p class="text-xl font-extrabold text-indigo-600 sm:text-2xl dark:text-indigo-400">100% Free</p>
                  <p class="text-xs font-medium text-slate-500 dark:text-slate-400">Distraction-Free Study UI</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="classes-grid" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <span class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Choose Your Class</span>
              <h2 class="mt-1 text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">Class 6 to Class 12 Study Dashboard</h2>
            </div>
            <p class="text-sm text-slate-500 dark:text-slate-400">Click any class card to open its Subject &amp; Chapter Dashboard.</p>
          </div>
          <div class="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            ${classCardsHtml}
          </div>
        </section>

        <section class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="text-center">
            <span class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Built for High Scorers</span>
            <h2 class="mt-1 text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">Everything You Need in One Distraction-Free Interface</h2>
          </div>
          <div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div class="flex items-center justify-between">
                <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-lg font-bold text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">📄</span>
                <span class="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">Tab 1: Notes</span>
              </div>
              <h3 class="mt-4 text-lg font-bold text-slate-900 dark:text-white">1. Chapter-Wise Revision Notes &amp; PDFs</h3>
              <p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">Crisp, board-oriented revision notes with highlighted formulas, reaction sheets, theorems, and a built-in PDF viewer placeholder ready for CMS uploads.</p>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div class="flex items-center justify-between">
                <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-lg font-bold text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">✅</span>
                <span class="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">Tab 2: Objective Q&amp;A</span>
              </div>
              <h3 class="mt-4 text-lg font-bold text-slate-900 dark:text-white">2. Interactive Objective MCQs</h3>
              <p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">Practice board-pattern Multiple Choice Questions with interactive radio buttons, instant answer verification, and step-by-step explanations.</p>
            </div>
            <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <div class="flex items-center justify-between">
                <span class="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-lg font-bold text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">🎯</span>
                <span class="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">Tab 3 + Mock Test UI</span>
              </div>
              <h3 class="mt-4 text-lg font-bold text-slate-900 dark:text-white">3. Subjective Q&amp;A + Timed Mock Tests</h3>
              <p class="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">Master 2-mark, 3-mark, and 5-mark subjective derivations with accordion solutions, plus full-screen timed Mock Tests with question palettes.</p>
            </div>
          </div>
        </section>

        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          ${renderFounderSectionHtml()}
        </div>
      </div>
    `;
  }

  function renderClassDashboardView() {
    const currentClass = getCurrentClass();
    const currentSubject = getCurrentSubject();

    const classPillsHtml = mockData.classes.map(cls => {
      const active = cls.id === currentClass.id;
      return `
        <button type="button" data-switch-class="${cls.id}" class="switch-class-btn rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
          active
            ? 'bg-indigo-600 text-white shadow-sm'
            : 'border border-slate-200 bg-white text-slate-600 hover:border-indigo-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300'
        }">${cls.name}</button>
      `;
    }).join('');

    const subjectsHtml = currentClass.subjects.map(sub => {
      const isSelected = currentSubject && sub.id === currentSubject.id;
      return `
        <button type="button" data-select-subject="${sub.id}" class="subject-card-btn flex flex-col justify-between rounded-2xl border p-5 text-left transition-all ${
          isSelected
            ? 'border-indigo-600 bg-indigo-50/70 ring-2 ring-indigo-600/20 dark:border-indigo-500 dark:bg-indigo-950/40'
            : 'border-slate-200 bg-white hover:border-indigo-300 dark:border-slate-800 dark:bg-slate-900'
        }">
          <div>
            <div class="flex items-center justify-between">
              <span class="flex h-10 w-10 items-center justify-center rounded-xl font-bold ${
                isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
              }">📘</span>
              <span class="rounded-lg bg-slate-100 px-2.5 py-0.5 text-[11px] font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-400">${sub.code}</span>
            </div>
            <h3 class="mt-3.5 text-base font-bold text-slate-900 dark:text-white">${sub.name}</h3>
            <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">${sub.description}</p>
          </div>
          <div class="mt-4 flex items-center justify-between border-t border-slate-200/60 pt-3 text-xs font-semibold text-indigo-600 dark:border-slate-800 dark:text-indigo-400">
            <span>${sub.chapters.length} Active Chapters</span>
            <span>${isSelected ? 'Selected ✓' : 'Open →'}</span>
          </div>
        </button>
      `;
    }).join('');

    const chaptersHtml = (currentSubject ? currentSubject.chapters : []).map(ch => `
      <div class="flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-indigo-500 sm:flex-row sm:items-center dark:border-slate-800 dark:bg-slate-900">
        <div class="space-y-1.5">
          <div class="flex flex-wrap items-center gap-2">
            <span class="rounded-lg bg-indigo-600 px-2.5 py-0.5 text-xs font-bold text-white">Chapter ${ch.number}</span>
            <span class="rounded-lg bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300">Board Weightage: ${ch.weightage}</span>
            <span class="text-xs text-slate-500 dark:text-slate-400">⏱️ ${ch.duration}</span>
          </div>
          <h3 class="text-lg font-bold text-slate-900 dark:text-white">${ch.title}</h3>
          <div class="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
            <span>📄 Study Notes &amp; PDF (${ch.pdfPages} pages)</span>
            <span>✅ ${ch.objectiveQuestions.length} Objective MCQs</span>
            <span>📝 ${ch.subjectiveQuestions.length} Subjective Q&amp;A</span>
          </div>
        </div>
        <div class="flex flex-wrap items-center gap-2">
          <button type="button" data-open-chapter="${ch.id}" class="open-chapter-btn inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm transition-colors hover:bg-indigo-700">
            <span>Open Chapter →</span>
          </button>
        </div>
      </div>
    `).join('');

    return `
      <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div class="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6 dark:border-slate-800">
          <div>
            <button type="button" id="back-to-home-btn" class="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:underline dark:text-indigo-400">
              ← Back to Home
            </button>
            <h1 class="mt-1 text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
              ${currentClass.name} — Subject &amp; Chapter Dashboard
            </h1>
            <p class="mt-1 text-sm text-slate-500 dark:text-slate-400">${currentClass.level} • ${currentClass.boardTag}</p>
          </div>
          <div class="flex flex-wrap items-center gap-1.5">${classPillsHtml}</div>
        </div>

        <div class="mt-8">
          <div class="flex items-center justify-between">
            <h2 class="text-lg font-bold text-slate-900 dark:text-white">1. Select a Subject (${currentClass.subjects.length} Available)</h2>
            <span class="text-xs font-medium text-slate-500 dark:text-slate-400">Click a subject card to view its chapters</span>
          </div>
          <div class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">${subjectsHtml}</div>
        </div>

        <div class="mt-10">
          <h2 class="text-lg font-bold text-slate-900 dark:text-white">2. Chapters in ${currentClass.name} ${currentSubject ? currentSubject.name : ''}</h2>
          <p class="text-xs text-slate-500 dark:text-slate-400">Click any chapter to open Notes, Objective MCQs, and Subjective Q&amp;A.</p>
          <div class="mt-4 space-y-3.5">${chaptersHtml}</div>
        </div>
      </div>
    `;
  }

  function renderChapterView() {
    const currentClass = getCurrentClass();
    const currentSubject = getCurrentSubject();
    const ch = getCurrentChapter();
    if (!ch) return '';

    const tabs = [
      { id: 'notes', label: '1. Notes & Study Material', badge: ch.notes.keyConcepts.length + ' Concepts' },
      { id: 'objective', label: '2. Objective Questions (MCQs)', badge: ch.objectiveQuestions.length + ' MCQs' },
      { id: 'subjective', label: '3. Subjective Questions (Q&A)', badge: ch.subjectiveQuestions.length + ' Q&As' }
    ];

    const tabsHtml = tabs.map(t => {
      const active = state.activeChapterTab === t.id;
      return `
        <button type="button" data-chapter-tab="${t.id}" class="chapter-tab-btn flex flex-1 items-center justify-center gap-2 rounded-2xl px-4 py-3 text-xs font-bold transition-all sm:text-sm ${
          active
            ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
            : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
        }">
          <span>${t.label}</span>
          <span class="hidden rounded-full px-2 py-0.5 text-[10px] md:inline-block ${
            active ? 'bg-indigo-800 text-indigo-100' : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
          }">${t.badge}</span>
        </button>
      `;
    }).join('');

    let tabContentHtml = '';

    if (state.activeChapterTab === 'notes') {
      const conceptsHtml = ch.notes.keyConcepts.map(c => `
        <div class="rounded-2xl border border-slate-200/90 bg-slate-50/80 p-5 dark:border-slate-800 dark:bg-slate-800/50">
          <h3 class="text-base font-bold text-indigo-700 dark:text-indigo-400">${c.heading}</h3>
          <p class="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-700 dark:text-slate-300">${c.body}</p>
        </div>
      `).join('');

      const formulasHtml = (ch.notes.formulas || []).map(f => `
        <li class="rounded-xl bg-white/90 px-3.5 py-2 font-mono text-xs shadow-sm sm:text-sm dark:bg-slate-900">${f}</li>
      `).join('');

      tabContentHtml = `
        <div class="mt-6 space-y-6">
          <div class="rounded-2xl border border-indigo-200 bg-indigo-50/60 p-5 dark:border-indigo-900/60 dark:bg-indigo-950/30">
            <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div class="flex items-start gap-3.5">
                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 text-white font-bold shadow-sm">PDF</div>
                <div>
                  <span class="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Official Chapter Notes &amp; Textbook Companion File</span>
                  <h3 class="text-base font-bold text-slate-900 dark:text-white">${ch.pdfFileName}</h3>
                  <p class="text-xs text-slate-500 dark:text-slate-400">${ch.pdfPages} Pages • ${ch.pdfSize} • Verified Board Revision Handout</p>
                </div>
              </div>
              <div class="flex flex-wrap items-center gap-2">
                <a href="./public/notes/Class9_Maths_BSEB_Ch14_Statistics.md" download="Class9_Maths_BSEB_Ch14_Statistics_Notes.md" class="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-3.5 py-2 text-xs font-bold text-white hover:bg-indigo-700">
                  <span>⬇ Download Notes File</span>
                </a>
                <button type="button" id="toggle-pdf-preview-btn" class="inline-flex items-center gap-1.5 rounded-xl border border-indigo-300 bg-white px-3.5 py-2 text-xs font-bold text-indigo-700 hover:bg-indigo-50 dark:border-indigo-800 dark:bg-slate-900 dark:text-indigo-300">
                  <span>${state.pdfExpanded ? 'Hide PDF Reader' : 'Preview PDF Reader'}</span>
                </button>
              </div>
            </div>
            ${state.pdfExpanded ? `
              <div class="mt-4 rounded-xl border border-slate-300 bg-white p-6 text-slate-800 shadow-inner dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
                <div class="mb-4 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3 text-xs text-slate-500 dark:border-slate-800">
                  <span class="font-bold text-indigo-700 dark:text-indigo-300">📄 ${ch.pdfFileName} (Full Chapter Textbook Companion &amp; Formula Handout)</span>
                  <button type="button" id="print-chapter-pdf-btn" class="rounded-lg border border-slate-300 bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-200 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">🖨️ Print / Save PDF</button>
                </div>
                <div class="max-h-96 overflow-y-auto space-y-3 pr-2 text-xs sm:text-sm leading-relaxed">
                  <p class="font-bold text-base text-slate-900 dark:text-white">${ch.title} — Complete Textbook Reference</p>
                  <p>${ch.notes.summary}</p>
                  <p class="font-bold text-indigo-600 dark:text-indigo-400">Included in this Chapter Module:</p>
                  <ul class="list-disc pl-5 space-y-1">
                    <li><strong>${ch.notes.keyConcepts.length} Detailed Hindi + English Topics</strong> (प्रश्नावली 14.1 से 14.4 तक संपूर्ण थ्योरी एवं उदाहरण)</li>
                    <li><strong>${(ch.notes.formulas || []).length} Key Board Formulas</strong> (परिसर, वर्ग-चिह्न, आयतचित्र, माध्य, माध्यक एवं बहुलक सूत्र)</li>
                    <li><strong>${ch.objectiveQuestions.length} Objective Questions (MCQs)</strong> with Interactive Radio Buttons &amp; Explanations</li>
                    <li><strong>${ch.subjectiveQuestions.length} Subjective Questions (Short &amp; Long Answer)</strong> with Step-by-Step Board Solutions</li>
                  </ul>
                </div>
              </div>
            ` : ''}
          </div>

          <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 class="text-lg font-bold text-slate-900 dark:text-white">Chapter Overview (अध्याय का सारांश)</h2>
            <p class="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base dark:text-slate-300">${ch.notes.summary}</p>
            <div class="mt-6 space-y-4">${conceptsHtml}</div>
            ${formulasHtml ? `
              <div class="mt-6 rounded-2xl border border-amber-200 bg-amber-50/70 p-5 dark:border-amber-900/50 dark:bg-amber-950/20">
                <div class="text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">✨ Important Board Formulas, Equations &amp; Rules (महत्वपूर्ण सूत्र)</div>
                <ul class="mt-3 space-y-2 text-sm font-medium text-slate-800 dark:text-slate-200">${formulasHtml}</ul>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    } else if (state.activeChapterTab === 'objective') {
      const mcqsHtml = ch.objectiveQuestions.map((mcq, qIdx) => {
        const chosenIdx = state.mcqSelections[mcq.id];
        const isRevealed = !!state.mcqRevealed[mcq.id];
        const isAnswered = chosenIdx !== undefined;
        const isCorrect = chosenIdx === mcq.correctIndex;

        const optionsHtml = mcq.options.map((opt, optIdx) => {
          const isThisSelected = chosenIdx === optIdx;
          const isThisCorrect = mcq.correctIndex === optIdx;
          let cardStyle = 'border-slate-200 bg-slate-50/70 hover:border-indigo-300 dark:border-slate-800 dark:bg-slate-800/60';
          if (isRevealed) {
            if (isThisCorrect) {
              cardStyle = 'border-emerald-500 bg-emerald-50/80 text-emerald-900 dark:border-emerald-500 dark:bg-emerald-950/50 dark:text-emerald-200';
            } else if (isThisSelected && !isThisCorrect) {
              cardStyle = 'border-rose-500 bg-rose-50/80 text-rose-900 dark:border-rose-500 dark:bg-rose-950/50 dark:text-rose-200';
            }
          } else if (isThisSelected) {
            cardStyle = 'border-indigo-600 bg-indigo-50/80 text-indigo-950 dark:border-indigo-500 dark:bg-indigo-950/60 dark:text-white';
          }

          return `
            <button type="button" data-mcq-id="${mcq.id}" data-opt-idx="${optIdx}" class="mcq-option-btn flex w-full items-center justify-between rounded-xl border p-3.5 text-left text-sm font-medium transition-all ${cardStyle}">
              <div class="flex items-center gap-3">
                <span class="flex h-5 w-5 items-center justify-center rounded-full border ${isThisSelected ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-400'} text-[10px]">
                  ${isThisSelected ? '●' : ''}
                </span>
                <span><strong class="mr-1.5">${String.fromCharCode(65 + optIdx)}.</strong>${opt}</span>
              </div>
              ${isRevealed && isThisCorrect ? '<span class="text-xs font-bold text-emerald-600">✓ Correct</span>' : ''}
              ${isRevealed && isThisSelected && !isThisCorrect ? '<span class="text-xs font-bold text-rose-600">✗ Incorrect</span>' : ''}
            </button>
          `;
        }).join('');

        return `
          <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div class="flex items-start justify-between gap-3">
              <span class="rounded-lg bg-indigo-50 px-2.5 py-1 text-xs font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">Question ${qIdx + 1}</span>
              <span class="text-xs font-semibold text-slate-400">1 Mark • Objective MCQ</span>
            </div>
            <p class="mt-3 text-base font-bold text-slate-900 dark:text-white">${mcq.question}</p>
            <div class="mt-4 space-y-2.5">${optionsHtml}</div>
            <div class="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">
              <div class="text-xs font-semibold">
                ${isAnswered
                  ? (isCorrect
                      ? `<span class="text-emerald-600 dark:text-emerald-400">✓ बिल्कुल सही! विकल्प ${String.fromCharCode(65 + chosenIdx)} सही उत्तर है।</span>`
                      : `<span class="text-amber-600 dark:text-amber-400">विकल्प ${String.fromCharCode(65 + chosenIdx)} चुना गया — जाँचने के लिए "Show Answer" दबाएँ।</span>`)
                  : '<span class="text-slate-400">ऊपर दिए गए विकल्पों में से एक चुनें</span>'}
              </div>
              <button type="button" data-toggle-answer="${mcq.id}" class="toggle-answer-btn inline-flex items-center gap-1.5 rounded-xl border border-indigo-200 bg-indigo-50 px-3.5 py-2 text-xs font-bold text-indigo-700 hover:bg-indigo-100 dark:border-indigo-900 dark:bg-indigo-950 dark:text-indigo-300">
                <span>${isRevealed ? 'Hide Answer' : 'Show Answer'}</span>
              </button>
            </div>
            ${isRevealed ? `
              <div class="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 text-xs leading-relaxed text-emerald-950 sm:text-sm dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-200">
                <p class="font-bold">सही विकल्प (Correct Option): ${String.fromCharCode(65 + mcq.correctIndex)} (${mcq.options[mcq.correctIndex]})</p>
                <p class="mt-1">${mcq.explanation}</p>
              </div>
            ` : ''}
          </div>
        `;
      }).join('');

      tabContentHtml = `<div class="mt-6 space-y-5">${mcqsHtml}</div>`;
    } else {
      const subjHtml = ch.subjectiveQuestions.map((sq, idx) => {
        const isOpen = !!state.subjectiveOpen[sq.id];
        return `
          <div class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <div class="p-6">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <span class="rounded-lg bg-purple-50 px-2.5 py-1 text-xs font-bold text-purple-700 dark:bg-purple-950/80 dark:text-purple-300">${sq.type}</span>
                <span class="text-xs font-semibold text-slate-400">Board Subjective Q#${idx + 1}</span>
              </div>
              <h3 class="mt-3 whitespace-pre-line text-base font-bold text-slate-900 sm:text-lg dark:text-white">${sq.question}</h3>
              <div class="mt-4">
                <button type="button" data-toggle-subj="${sq.id}" class="toggle-subj-btn inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-indigo-50 hover:text-indigo-600 dark:bg-slate-800 dark:text-slate-200">
                  <span>${isOpen ? 'Hide Solution (हल छुपाएँ) ▲' : 'View Solution (पूरा हल देखें) ▼'}</span>
                </button>
              </div>
            </div>
            ${isOpen ? `
              <div class="border-t border-slate-200 bg-indigo-50/40 px-6 py-5 dark:border-slate-800 dark:bg-indigo-950/20">
                <p class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Model Board Solution (आदर्श उत्तर / हल):</p>
                <p class="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-800 dark:text-slate-200">${sq.solution}</p>
              </div>
            ` : ''}
          </div>
        `;
      }).join('');

      tabContentHtml = `<div class="mt-6 space-y-4">${subjHtml}</div>`;
    }

    return `
      <div class="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <div class="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <button type="button" id="back-to-dashboard-btn" class="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:underline dark:text-indigo-400">
            ← Back to ${currentClass.name} • ${currentSubject ? currentSubject.name : ''}
          </button>
          <div class="mt-3 flex flex-wrap items-center gap-2">
            <span class="rounded-lg bg-indigo-600 px-2.5 py-0.5 text-xs font-bold text-white">Chapter ${ch.number}</span>
            <span class="rounded-lg bg-indigo-50 px-2.5 py-0.5 text-xs font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">Weightage: ${ch.weightage}</span>
          </div>
          <h1 class="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">${ch.title}</h1>
          <div class="mt-6 flex flex-wrap gap-2 border-t border-slate-200 pt-5 dark:border-slate-800">${tabsHtml}</div>
        </div>
        ${tabContentHtml}
      </div>
    `;
  }

  function renderMockTestView() {
    const test = getCurrentTest();
    const totalQuestions = test.questions.length;
    const activeQ = test.questions[state.currentQuestionIdx] || test.questions[0];
    const attemptedCount = Object.keys(state.testAnswers).length;
    const correctCount = test.questions.reduce((acc, q) => acc + (state.testAnswers[q.id] === q.correctIndex ? 1 : 0), 0);
    const totalScore = correctCount * test.marksPerCorrect;

    const testPillsHtml = mockData.mockTests.map(t => `
      <button type="button" data-select-test="${t.id}" class="select-test-btn rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
        t.id === test.id
          ? 'bg-indigo-600 text-white'
          : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
      }">${t.classLabel}: ${t.subject}</button>
    `).join('');

    const optionsHtml = activeQ.options.map((opt, idx) => {
      const isSelected = state.testAnswers[activeQ.id] === idx;
      const isCorrect = activeQ.correctIndex === idx;
      let optStyle = 'border-slate-200 bg-slate-50/70 hover:border-indigo-400 dark:border-slate-800 dark:bg-slate-800/60';
      if (state.testSubmitted) {
        if (isCorrect) {
          optStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 dark:border-emerald-500 dark:bg-emerald-950/50 dark:text-emerald-200';
        } else if (isSelected && !isCorrect) {
          optStyle = 'border-rose-500 bg-rose-50 text-rose-950 dark:border-rose-500 dark:bg-rose-950/50 dark:text-rose-200';
        }
      } else if (isSelected) {
        optStyle = 'border-indigo-600 bg-indigo-50/90 text-indigo-950 ring-2 ring-indigo-600/15 dark:border-indigo-500 dark:bg-indigo-950/60 dark:text-white';
      }

      return `
        <button type="button" data-test-opt="${idx}" class="test-option-btn flex w-full items-center justify-between rounded-xl border p-4 text-left text-sm font-medium transition-all ${optStyle}">
          <span class="flex items-center gap-3">
            <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
              isSelected ? 'bg-indigo-600 text-white' : 'bg-white text-slate-700 border border-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-700'
            }">${String.fromCharCode(65 + idx)}</span>
            <span>${opt}</span>
          </span>
          ${state.testSubmitted && isCorrect ? '<span class="text-xs font-bold text-emerald-600">✓</span>' : ''}
          ${state.testSubmitted && isSelected && !isCorrect ? '<span class="text-xs font-bold text-rose-600">✗</span>' : ''}
        </button>
      `;
    }).join('');

    const paletteHtml = test.questions.map((q, idx) => {
      const isCurrent = idx === state.currentQuestionIdx;
      const isAnswered = state.testAnswers[q.id] !== undefined;
      const isMarked = !!state.testMarked[q.id];
      let pStyle = 'border-slate-200 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300';
      if (isCurrent) {
        pStyle = 'border-indigo-600 bg-indigo-600 text-white ring-2 ring-indigo-600/30';
      } else if (isMarked) {
        pStyle = 'border-amber-400 bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300';
      } else if (isAnswered) {
        pStyle = 'border-emerald-500 bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-300';
      }
      return `
        <button type="button" data-jump-q="${idx}" class="jump-q-btn flex h-11 w-full items-center justify-center rounded-xl border text-xs font-extrabold transition-all ${pStyle}">
          ${idx + 1}
        </button>
      `;
    }).join('');

    return `
      <div class="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div class="flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:flex-row lg:items-center dark:border-slate-800 dark:bg-slate-900">
          <div>
            <div class="flex flex-wrap items-center gap-2">${testPillsHtml}</div>
            <h1 class="mt-2.5 text-xl font-extrabold text-slate-900 sm:text-2xl dark:text-white">${test.title}</h1>
          </div>
          <div class="flex flex-wrap items-center gap-3">
            <div class="flex items-center gap-2 rounded-2xl border border-indigo-200 bg-indigo-50 px-4 py-2.5 font-mono text-sm font-extrabold text-indigo-700 dark:border-indigo-900 dark:bg-indigo-950 dark:text-indigo-300">
              <span>⏱️</span>
              <span id="live-timer-display">Time Remaining: ${formatTime(state.timeLeft)}</span>
            </div>
            ${!state.testSubmitted ? `
              <button type="button" id="submit-test-top-btn" class="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-emerald-700 sm:text-sm">
                <span>Submit Test</span>
              </button>
            ` : `
              <button type="button" id="open-score-modal-btn" class="inline-flex items-center gap-1.5 rounded-2xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white">
                <span>🏆 View Scorecard</span>
              </button>
              <button type="button" id="retake-test-top-btn" class="inline-flex items-center gap-1.5 rounded-2xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                <span>↻ Retake</span>
              </button>
            `}
          </div>
        </div>

        <div class="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <div class="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-8 dark:border-slate-800 dark:bg-slate-900">
            <div>
              <div class="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
                <div class="flex items-center gap-2">
                  <span class="rounded-lg bg-indigo-600 px-2.5 py-1 text-xs font-bold text-white">Question ${state.currentQuestionIdx + 1} of ${totalQuestions}</span>
                  <span class="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">${activeQ.section}</span>
                </div>
                <span class="text-xs font-bold text-emerald-600 dark:text-emerald-400">+${test.marksPerCorrect} Marks</span>
              </div>
              <h2 class="mt-5 text-lg font-bold leading-snug text-slate-900 sm:text-xl dark:text-white">${activeQ.question}</h2>
              <div class="mt-6 space-y-3">${optionsHtml}</div>
              ${state.testSubmitted ? `
                <div class="mt-5 rounded-xl border border-indigo-200 bg-indigo-50/60 p-4 text-xs leading-relaxed text-slate-800 dark:border-indigo-900 dark:bg-indigo-950/40 dark:text-slate-200">
                  <p class="font-bold text-indigo-700 dark:text-indigo-300">Explanation:</p>
                  <p class="mt-1">${activeQ.explanation}</p>
                </div>
              ` : ''}
            </div>

            <div class="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-5 dark:border-slate-800">
              <button type="button" id="prev-q-btn" ${state.currentQuestionIdx === 0 ? 'disabled' : ''} class="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 disabled:opacity-40 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                ← Previous
              </button>
              <button type="button" id="mark-review-btn" class="inline-flex items-center gap-1.5 rounded-xl border px-4 py-2.5 text-xs font-bold ${
                state.testMarked[activeQ.id]
                  ? 'border-amber-400 bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                  : 'border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300'
              }">
                🚩 ${state.testMarked[activeQ.id] ? 'Marked for Review' : 'Mark for Review'}
              </button>
              <button type="button" id="next-q-btn" ${state.currentQuestionIdx === totalQuestions - 1 ? 'disabled' : ''} class="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white disabled:opacity-40">
                Next →
              </button>
            </div>
          </div>

          <div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-4 dark:border-slate-800 dark:bg-slate-900">
            <h3 class="text-base font-bold text-slate-900 dark:text-white">Question Navigator Palette</h3>
            <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">Jump to any question directly or review your progress before submitting.</p>
            <div class="mt-5 grid grid-cols-5 gap-2.5">${paletteHtml}</div>
            <div class="mt-6 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-600 dark:border-slate-800 dark:text-slate-400">
              <div class="flex items-center justify-between">
                <span class="flex items-center gap-2"><span class="h-3 w-3 rounded-full bg-emerald-500"></span> Answered</span>
                <span class="font-bold">${attemptedCount}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="flex items-center gap-2"><span class="h-3 w-3 rounded-full bg-amber-400"></span> Marked for Review</span>
                <span class="font-bold">${Object.values(state.testMarked).filter(Boolean).length}</span>
              </div>
              <div class="flex items-center justify-between">
                <span class="flex items-center gap-2"><span class="h-3 w-3 rounded-full bg-slate-300 dark:bg-slate-700"></span> Unvisited / Pending</span>
                <span class="font-bold">${totalQuestions - attemptedCount}</span>
              </div>
            </div>
            ${!state.testSubmitted ? `
              <button type="button" id="submit-test-side-btn" class="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 py-3 text-sm font-bold text-white shadow-md hover:bg-indigo-700">
                Submit Mock Test
              </button>
            ` : ''}
          </div>
        </div>

        ${state.showScoreModal ? `
          <div class="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
            <div class="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-2xl sm:p-8 dark:border-slate-800 dark:bg-slate-900">
              <div class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-3xl text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">🏆</div>
              <h3 class="mt-4 text-2xl font-extrabold text-slate-900 dark:text-white">Mock Test Result &amp; Scorecard</h3>
              <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">${test.title}</p>
              <div class="mt-6 rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-700 p-5 text-white shadow-lg">
                <p class="text-xs font-bold uppercase tracking-wider text-indigo-200">Your Final Score</p>
                <p class="mt-1 text-4xl font-extrabold">${totalScore} / ${test.totalMarks}</p>
                <p class="mt-1 text-xs text-indigo-100">Accuracy: ${Math.round((correctCount / totalQuestions) * 100)}% (${correctCount} of ${totalQuestions} Correct)</p>
              </div>
              <div class="mt-5 grid grid-cols-3 gap-2 text-xs">
                <div class="rounded-xl bg-slate-100 p-3 dark:bg-slate-800">
                  <p class="text-slate-500 dark:text-slate-400">Attempted</p>
                  <p class="mt-0.5 text-base font-extrabold text-slate-900 dark:text-white">${attemptedCount}</p>
                </div>
                <div class="rounded-xl bg-emerald-50 p-3 dark:bg-emerald-950/50">
                  <p class="text-emerald-600 dark:text-emerald-400">Correct</p>
                  <p class="mt-0.5 text-base font-extrabold text-emerald-700 dark:text-emerald-300">${correctCount}</p>
                </div>
                <div class="rounded-xl bg-rose-50 p-3 dark:bg-rose-950/50">
                  <p class="text-rose-600 dark:text-rose-400">Incorrect</p>
                  <p class="mt-0.5 text-base font-extrabold text-rose-700 dark:text-rose-300">${attemptedCount - correctCount}</p>
                </div>
              </div>
              <div class="mt-6 flex flex-col gap-2.5 sm:flex-row">
                <button type="button" id="close-score-modal-btn" class="flex-1 rounded-xl bg-indigo-600 py-3 text-xs font-bold text-white hover:bg-indigo-700">Review Solutions</button>
                <button type="button" id="retake-modal-btn" class="flex-1 rounded-xl border border-slate-200 bg-slate-50 py-3 text-xs font-bold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">Retake Test</button>
              </div>
            </div>
          </div>
        ` : ''}
      </div>
    `;
  }

  function updateHeaderAndGlobalUI() {
    const root = document.documentElement;
    if (state.darkMode) {
      root.classList.add('dark');
      document.getElementById('theme-icon-moon').classList.add('hidden');
      document.getElementById('theme-icon-sun').classList.remove('hidden');
    } else {
      root.classList.remove('dark');
      document.getElementById('theme-icon-moon').classList.remove('hidden');
      document.getElementById('theme-icon-sun').classList.add('hidden');
    }

    const studyBanner = document.getElementById('study-mode-banner');
    const footer = document.getElementById('app-footer');
    const studyLabel = document.getElementById('study-mode-label');
    const mobileStudyStatus = document.getElementById('mobile-study-status');

    if (state.studyMode) {
      studyBanner.classList.remove('hidden');
      footer.classList.add('hidden');
      studyLabel.textContent = 'Focus Mode: ON';
      mobileStudyStatus.textContent = 'ACTIVE';
    } else {
      studyBanner.classList.add('hidden');
      footer.classList.remove('hidden');
      studyLabel.textContent = 'Study Mode';
      mobileStudyStatus.textContent = 'OFF';
    }

    const navHighlight = state.activePage === 'chapter-view' ? 'classes' : state.activePage;
    document.querySelectorAll('.nav-btn').forEach(btn => {
      const target = btn.getAttribute('data-nav');
      if (target === navHighlight) {
        btn.className = 'nav-btn flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-semibold transition-all bg-indigo-600 text-white shadow-sm shadow-indigo-600/25';
      } else {
        btn.className = 'nav-btn flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-semibold transition-all text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white';
      }
    });

    document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
      const target = btn.getAttribute('data-nav');
      if (target === navHighlight) {
        btn.className = 'mobile-nav-btn flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-left text-sm font-semibold bg-indigo-600 text-white';
      } else {
        btn.className = 'mobile-nav-btn flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-left text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800';
      }
    });
  }

  function renderApp() {
    updateHeaderAndGlobalUI();
    const mainEl = document.getElementById('app-main');
    if (state.activePage === 'home') {
      mainEl.innerHTML = renderHomeView();
    } else if (state.activePage === 'classes') {
      mainEl.innerHTML = renderClassDashboardView();
    } else if (state.activePage === 'chapter-view') {
      mainEl.innerHTML = renderChapterView();
    } else if (state.activePage === 'mock-tests') {
      mainEl.innerHTML = renderMockTestView();
    } else if (state.activePage === 'about-me') {
      mainEl.innerHTML = `<div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">${renderFounderSectionHtml()}</div>`;
    }
    bindDynamicEvents();
    startOrStopMockTimer();
  }

  function selectClassAndOpenDashboard(classId) {
    const found = mockData.classes.find(c => c.id === classId) || mockData.classes[0];
    state.selectedClassId = found.id;
    if (found.subjects[0]) {
      state.selectedSubjectId = found.subjects[0].id;
      if (found.subjects[0].chapters[0]) {
        state.selectedChapterId = found.subjects[0].chapters[0].id;
      }
    }
    state.activePage = 'classes';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderApp();
  }

  function resetMockTest(testId) {
    const t = mockData.mockTests.find(x => x.id === (testId || state.selectedTestId)) || mockData.mockTests[0];
    state.selectedTestId = t.id;
    state.currentQuestionIdx = 0;
    state.testAnswers = {};
    state.testMarked = {};
    state.timeLeft = t.durationSeconds;
    state.testSubmitted = false;
    state.showScoreModal = false;
    renderApp();
  }

  function bindDynamicEvents() {
    const heroStartBtn = document.getElementById('hero-start-btn');
    if (heroStartBtn) {
      heroStartBtn.addEventListener('click', () => {
        const grid = document.getElementById('classes-grid');
        if (grid) grid.scrollIntoView({ behavior: 'smooth' });
      });
    }

    const heroBsebBtn = document.getElementById('hero-bseb-ch14-btn');
    if (heroBsebBtn) {
      heroBsebBtn.addEventListener('click', () => {
        state.selectedClassId = 'class-9';
        state.selectedSubjectId = 'maths-9';
        state.selectedChapterId = 'ch-statistics-9-bseb';
        state.activeChapterTab = 'notes';
        state.activePage = 'chapter-view';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        renderApp();
      });
    }

    const printPdfBtn = document.getElementById('print-chapter-pdf-btn');
    if (printPdfBtn) {
      printPdfBtn.addEventListener('click', () => {
        window.print();
      });
    }

    const heroMockBtn = document.getElementById('hero-mock-btn');
    if (heroMockBtn) {
      heroMockBtn.addEventListener('click', () => {
        state.activePage = 'mock-tests';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        renderApp();
      });
    }

    document.querySelectorAll('.class-card-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        selectClassAndOpenDashboard(btn.getAttribute('data-select-class'));
      });
    });

    document.querySelectorAll('.switch-class-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        selectClassAndOpenDashboard(btn.getAttribute('data-switch-class'));
      });
    });

    document.querySelectorAll('.subject-card-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const subId = btn.getAttribute('data-select-subject');
        state.selectedSubjectId = subId;
        const sub = getCurrentSubject();
        if (sub && sub.chapters[0]) {
          state.selectedChapterId = sub.chapters[0].id;
        }
        renderApp();
      });
    });

    document.querySelectorAll('.open-chapter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.selectedChapterId = btn.getAttribute('data-open-chapter');
        state.activeChapterTab = 'notes';
        state.activePage = 'chapter-view';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        renderApp();
      });
    });

    const backHomeBtn = document.getElementById('back-to-home-btn');
    if (backHomeBtn) {
      backHomeBtn.addEventListener('click', () => {
        state.activePage = 'home';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        renderApp();
      });
    }

    const backDashBtn = document.getElementById('back-to-dashboard-btn');
    if (backDashBtn) {
      backDashBtn.addEventListener('click', () => {
        state.activePage = 'classes';
        window.scrollTo({ top: 0, behavior: 'smooth' });
        renderApp();
      });
    }

    document.querySelectorAll('.chapter-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.activeChapterTab = btn.getAttribute('data-chapter-tab');
        renderApp();
      });
    });

    const pdfBtn = document.getElementById('toggle-pdf-preview-btn');
    if (pdfBtn) {
      pdfBtn.addEventListener('click', () => {
        state.pdfExpanded = !state.pdfExpanded;
        renderApp();
      });
    }

    document.querySelectorAll('.mcq-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const qId = btn.getAttribute('data-mcq-id');
        const optIdx = parseInt(btn.getAttribute('data-opt-idx'), 10);
        state.mcqSelections[qId] = optIdx;
        renderApp();
      });
    });

    document.querySelectorAll('.toggle-answer-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const qId = btn.getAttribute('data-toggle-answer');
        state.mcqRevealed[qId] = !state.mcqRevealed[qId];
        renderApp();
      });
    });

    document.querySelectorAll('.toggle-subj-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const sqId = btn.getAttribute('data-toggle-subj');
        state.subjectiveOpen[sqId] = !state.subjectiveOpen[sqId];
        renderApp();
      });
    });

    document.querySelectorAll('.select-test-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        resetMockTest(btn.getAttribute('data-select-test'));
      });
    });

    document.querySelectorAll('.test-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        if (state.testSubmitted) return;
        const test = getCurrentTest();
        const activeQ = test.questions[state.currentQuestionIdx];
        state.testAnswers[activeQ.id] = parseInt(btn.getAttribute('data-test-opt'), 10);
        renderApp();
      });
    });

    document.querySelectorAll('.jump-q-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        state.currentQuestionIdx = parseInt(btn.getAttribute('data-jump-q'), 10);
        renderApp();
      });
    });

    const prevQBtn = document.getElementById('prev-q-btn');
    if (prevQBtn) {
      prevQBtn.addEventListener('click', () => {
        if (state.currentQuestionIdx > 0) {
          state.currentQuestionIdx -= 1;
          renderApp();
        }
      });
    }

    const nextQBtn = document.getElementById('next-q-btn');
    if (nextQBtn) {
      nextQBtn.addEventListener('click', () => {
        const test = getCurrentTest();
        if (state.currentQuestionIdx < test.questions.length - 1) {
          state.currentQuestionIdx += 1;
          renderApp();
        }
      });
    }

    const markBtn = document.getElementById('mark-review-btn');
    if (markBtn) {
      markBtn.addEventListener('click', () => {
        const test = getCurrentTest();
        const activeQ = test.questions[state.currentQuestionIdx];
        state.testMarked[activeQ.id] = !state.testMarked[activeQ.id];
        renderApp();
      });
    }

    const submitTop = document.getElementById('submit-test-top-btn');
    const submitSide = document.getElementById('submit-test-side-btn');
    [submitTop, submitSide].forEach(b => {
      if (b) {
        b.addEventListener('click', () => {
          state.testSubmitted = true;
          state.showScoreModal = true;
          renderApp();
        });
      }
    });

    const openScoreBtn = document.getElementById('open-score-modal-btn');
    if (openScoreBtn) {
      openScoreBtn.addEventListener('click', () => {
        state.showScoreModal = true;
        renderApp();
      });
    }

    const closeScoreBtn = document.getElementById('close-score-modal-btn');
    if (closeScoreBtn) {
      closeScoreBtn.addEventListener('click', () => {
        state.showScoreModal = false;
        renderApp();
      });
    }

    const retakeTop = document.getElementById('retake-test-top-btn');
    const retakeModal = document.getElementById('retake-modal-btn');
    [retakeTop, retakeModal].forEach(b => {
      if (b) {
        b.addEventListener('click', () => {
          resetMockTest(state.selectedTestId);
        });
      }
    });
  }

  document.getElementById('brand-home-btn').addEventListener('click', () => {
    state.activePage = 'home';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderApp();
  });

  document.querySelectorAll('.nav-btn, .mobile-nav-btn, .footer-nav-link').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-nav');
      if (target) {
        state.activePage = target;
        document.getElementById('mobile-drawer').classList.add('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        renderApp();
      }
    });
  });

  document.querySelectorAll('.footer-class-link').forEach(btn => {
    btn.addEventListener('click', () => {
      selectClassAndOpenDashboard(btn.getAttribute('data-class-jump'));
    });
  });

  document.getElementById('study-mode-btn').addEventListener('click', () => {
    state.studyMode = !state.studyMode;
    renderApp();
  });

  document.getElementById('mobile-study-mode-btn').addEventListener('click', () => {
    state.studyMode = !state.studyMode;
    document.getElementById('mobile-drawer').classList.add('hidden');
    renderApp();
  });

  document.getElementById('theme-toggle-btn').addEventListener('click', () => {
    state.darkMode = !state.darkMode;
    renderApp();
  });

  document.getElementById('mobile-menu-btn').addEventListener('click', () => {
    document.getElementById('mobile-drawer').classList.toggle('hidden');
  });

  renderApp();
}

bootExamPulse();
