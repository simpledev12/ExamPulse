import React from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Atom,
  BookOpen,
  Calculator,
  Clock,
  FileText,
  FlaskConical,
  Globe,
  HelpCircle,
  Layers
} from 'lucide-react';

const ICON_MAP = {
  Calculator,
  FlaskConical,
  Atom,
  Globe,
  BookOpen
};

export default function ClassDashboard({
  classes,
  selectedClassId,
  selectedSubjectId,
  onSelectClass,
  onSelectSubject,
  onSelectChapter,
  onBackToHome
}) {
  const currentClass =
    classes.find((c) => c.id === selectedClassId) || classes[3] || classes[0];
  const currentSubject =
    currentClass.subjects.find((s) => s.id === selectedSubjectId) ||
    currentClass.subjects[0];

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Top Breadcrumb & Class Switcher */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-6 dark:border-slate-800">
        <div>
          <button
            type="button"
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:underline dark:text-indigo-400"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Home
          </button>
          <h1 className="mt-1 text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
            {currentClass.name} — Subject &amp; Chapter Dashboard
          </h1>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            {currentClass.level} • {currentClass.boardTag}
          </p>
        </div>

        {/* Quick Class Pill Selector (Class 6 to 12) */}
        <div className="flex flex-wrap items-center gap-1.5">
          {classes.map((cls) => (
            <button
              key={cls.id}
              type="button"
              onClick={() => onSelectClass(cls.id)}
              className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                cls.id === currentClass.id
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'border border-slate-200 bg-white text-slate-600 hover:border-indigo-400 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300'
              }`}
            >
              {cls.name}
            </button>
          ))}
        </div>
      </div>

      {/* Step 1: Subject Cards Grid */}
      <div className="mt-8">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">
            1. Select a Subject ({currentClass.subjects.length} Available)
          </h2>
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
            Click a subject card to view its chapters below
          </span>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {currentClass.subjects.map((sub) => {
            const Icon = ICON_MAP[sub.icon] || BookOpen;
            const isSelected = currentSubject && sub.id === currentSubject.id;
            return (
              <button
                key={sub.id}
                type="button"
                onClick={() => onSelectSubject(sub.id)}
                className={`flex flex-col justify-between rounded-2xl border p-5 text-left transition-all ${
                  isSelected
                    ? 'border-indigo-600 bg-indigo-50/70 ring-2 ring-indigo-600/20 dark:border-indigo-500 dark:bg-indigo-950/40'
                    : 'border-slate-200 bg-white hover:border-indigo-300 dark:border-slate-800 dark:bg-slate-900'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${
                        isSelected
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-lg bg-slate-100 px-2.5 py-0.5 text-[11px] font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-400">
                      {sub.code}
                    </span>
                  </div>
                  <h3 className="mt-3.5 text-base font-bold text-slate-900 dark:text-white">
                    {sub.name}
                  </h3>
                  <p className="mt-1 line-clamp-2 text-xs text-slate-500 dark:text-slate-400">
                    {sub.description}
                  </p>
                </div>

                <div className="mt-4 flex items-center justify-between border-t border-slate-200/60 pt-3 text-xs font-semibold text-indigo-600 dark:border-slate-800 dark:text-indigo-400">
                  <span>{sub.chapters.length} Active Chapters</span>
                  <span>{isSelected ? 'Selected ✓' : 'Open →'}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Special BSEB Class 9 Maths Study Hub Banner */}
      {currentClass.id === 'class-9' && currentSubject?.id === 'maths-9' && (
        <div className="mt-6 rounded-2xl border-2 border-indigo-200 bg-gradient-to-r from-indigo-50 via-blue-50 to-emerald-50 p-5 shadow-sm dark:border-indigo-800/70 dark:from-slate-900 dark:via-indigo-950/40 dark:to-slate-900">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
            <div className="space-y-1.5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-indigo-600 px-3 py-0.5 text-xs font-bold text-white">
                  BSEB Class 9th Math • Complete Study Hub
                </span>
                <span className="rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                  अध्याय 1–6 एवं 12–15 + 50 HOTS प्रश्न
                </span>
              </div>
              <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
                कक्षा 9वीं गणित — 50 कठिन सब्जेक्टिव प्रश्न एवं हल (अध्याय 1–6 व 12–14) + सांख्यिकी व प्रायिकता नोट्स
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                सभी अध्यायों के नोट्स, वस्तुनिष्ठ प्रश्न (MCQs), चरणबद्ध सब्जेक्टिव हल तथा प्रिंट करने योग्य 50 HOTS प्रश्न बैंक यहाँ व्यवस्थित हैं।
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => onSelectChapter('ch-hots-50-9-bseb', 'subjective')}
                className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-indigo-700"
              >
                <span>🔥 ऐप में 50 HOTS प्रश्न व हल खोलें</span>
              </button>
              <a
                href="./class-9-math-subjective-50.html"
                className="inline-flex items-center gap-1.5 rounded-xl border border-indigo-300 bg-white px-4 py-2.5 text-xs font-bold text-indigo-700 shadow-sm hover:bg-indigo-50 dark:border-indigo-700 dark:bg-slate-800 dark:text-indigo-200"
              >
                <span>🖨️ प्रिंट / PDF पेज (50 प्रश्न) ↗</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Chapter List for Selected Subject */}
      {currentSubject && (
        <div className="mt-10">
          <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                2. Chapters in {currentClass.name} {currentSubject.name}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Click Notes, MCQs, or Subjective on any chapter to open it directly.
              </p>
            </div>
          </div>

          <div className="mt-4 space-y-3.5">
            {currentSubject.chapters.map((ch) => (
              <div
                key={ch.id}
                className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:border-indigo-500 sm:flex-row sm:items-center dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-lg bg-indigo-600 px-2.5 py-0.5 text-xs font-bold text-white">
                      Chapter {ch.number}
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-lg bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/70 dark:text-emerald-300">
                      Board Weightage: {ch.weightage}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                      <Clock className="h-3.5 w-3.5" /> {ch.duration}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    {ch.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                    <span className="inline-flex items-center gap-1">
                      <FileText className="h-3.5 w-3.5 text-indigo-500" />
                      Study Notes &amp; Formulas ({ch.notes.keyConcepts.length} Topics)
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <HelpCircle className="h-3.5 w-3.5 text-indigo-500" />
                      {ch.objectiveQuestions.length} Objective MCQs
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Layers className="h-3.5 w-3.5 text-indigo-500" />
                      {ch.subjectiveQuestions.length} Subjective Q&amp;A
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectChapter(ch.id, 'notes')}
                    className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-3.5 py-2 text-xs font-bold text-white shadow-sm transition-colors hover:bg-indigo-700"
                  >
                    <span>📄 Notes</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectChapter(ch.id, 'objective')}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-bold text-slate-700 transition-colors hover:border-indigo-400 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
                  >
                    <span>✅ MCQs ({ch.objectiveQuestions.length})</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectChapter(ch.id, 'subjective')}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-purple-200 bg-purple-50 px-3 py-2 text-xs font-bold text-purple-700 transition-colors hover:bg-purple-100 dark:border-purple-800 dark:bg-purple-950/60 dark:text-purple-300"
                  >
                    <span>📝 Subjective ({ch.subjectiveQuestions.length})</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
