import React from 'react';
import {
  ArrowRight,
  CheckCircle,
  FileText,
  GraduationCap,
  Layers,
  Sparkles,
  Timer
} from 'lucide-react';
import FounderSection from '../components/FounderSection';

export default function Home({
  siteMeta,
  classes,
  onSelectClass,
  onStartMockTests
}) {
  return (
    <div className="space-y-16 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-indigo-50/70 via-white to-slate-50 pt-10 pb-16 dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs font-bold text-indigo-700 shadow-sm dark:border-indigo-800 dark:bg-indigo-950/80 dark:text-indigo-300">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Class 6 to 12 Board Exam Preparation Platform</span>
            </div>

            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl dark:text-white">
              Ace Your Board Exams with{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent dark:from-indigo-400 dark:to-blue-400">
                ExamPulse
              </span>
            </h1>

            <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg dark:text-slate-300">
              {siteMeta.subtitle}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href="#classes-grid"
                className="inline-flex items-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/25 transition-all hover:bg-indigo-700 hover:shadow-indigo-600/40"
              >
                <span>Start Learning</span>
                <ArrowRight className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={onStartMockTests}
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all hover:border-indigo-500 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                <Timer className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                <span>Take a Mock Test</span>
              </button>
            </div>

            {/* Trust Stats Bar */}
            <div className="mt-10 grid grid-cols-3 gap-4 rounded-2xl border border-slate-200/90 bg-white/90 p-4 shadow-sm sm:p-5 dark:border-slate-800 dark:bg-slate-900/90">
              <div>
                <p className="text-xl font-extrabold text-indigo-600 sm:text-2xl dark:text-indigo-400">
                  Class 6–12
                </p>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Complete Board Syllabus
                </p>
              </div>
              <div className="border-x border-slate-200 dark:border-slate-800">
                <p className="text-xl font-extrabold text-indigo-600 sm:text-2xl dark:text-indigo-400">
                  3-in-1 Tabs
                </p>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Notes • MCQs • Subjective Q&amp;A
                </p>
              </div>
              <div>
                <p className="text-xl font-extrabold text-indigo-600 sm:text-2xl dark:text-indigo-400">
                  100% Free
                </p>
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  Distraction-Free Study UI
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CLASSES GRID (CLASS 6 TO CLASS 12) */}
      <section id="classes-grid" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
              Choose Your Class
            </span>
            <h2 className="mt-1 text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
              Class 6 to Class 12 Study Dashboard
            </h2>
          </div>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Select your class to unlock subject-wise chapters, PDF notes, and Q&amp;A banks.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {classes.map((cls) => (
            <button
              key={cls.id}
              type="button"
              onClick={() => onSelectClass(cls.id)}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition-all hover:-translate-y-1 hover:border-indigo-500 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-indigo-500"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-50 px-3 py-1 text-xs font-bold text-indigo-700 dark:bg-indigo-950/90 dark:text-indigo-300">
                    <GraduationCap className="h-3.5 w-3.5" />
                    {cls.boardTag}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {cls.studentsEnrolled} students
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-extrabold text-slate-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                  {cls.name}
                </h3>
                <p className="mt-0.5 text-xs font-medium text-slate-500 dark:text-slate-400">
                  {cls.level}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cls.subjects.slice(0, 3).map((sub) => (
                    <span
                      key={sub.id}
                      className="rounded-lg bg-slate-100 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {sub.name}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-3.5 text-xs font-bold text-indigo-600 dark:border-slate-800 dark:text-indigo-400">
                <span>
                  {cls.subjects.length} Subjects • {cls.chaptersCount} Chapters
                </span>
                <span className="inline-flex items-center gap-1 transition-transform group-hover:translate-x-1">
                  Explore <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 3. FEATURES SECTION */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
            Built for High Scorers
          </span>
          <h2 className="mt-1 text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
            Everything You Need in One Distraction-Free Interface
          </h2>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              icon: FileText,
              title: '1. Chapter-Wise Revision Notes & PDFs',
              description:
                'Crisp, board-oriented revision notes with highlighted formulas, reaction sheets, theorems, and a built-in PDF viewer placeholder ready for CMS uploads.',
              badge: 'Tab 1: Notes'
            },
            {
              icon: CheckCircle,
              title: '2. Interactive Objective MCQs',
              description:
                'Practice board-pattern Multiple Choice Questions with interactive radio buttons, instant answer verification, and step-by-step explanations.',
              badge: 'Tab 2: Objective Q&A'
            },
            {
              icon: Layers,
              title: '3. Subjective Short & Long Q&A + Mock Tests',
              description:
                'Master 2-mark, 3-mark, and 5-mark subjective derivations with accordion solutions, plus full-screen timed Mock Tests with question palettes.',
              badge: 'Tab 3 + Mock Test UI'
            }
          ].map((feat, idx) => {
            const Icon = feat.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                    {feat.badge}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900 dark:text-white">
                  {feat.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. ABOUT THE FOUNDER SECTION */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FounderSection founder={siteMeta.founder} />
      </div>
    </div>
  );
}
