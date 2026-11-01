import React, { useState } from 'react';
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Eye,
  EyeOff,
  FileText,
  HelpCircle,
  Layers,
  Sparkles,
  XCircle
} from 'lucide-react';

export default function ChapterView({
  currentClass,
  currentSubject,
  currentChapter,
  initialTab = 'notes',
  onBackToDashboard
}) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [revealedAnswers, setRevealedAnswers] = useState({});
  const [openSolutions, setOpenSolutions] = useState({});
  const [pdfPreviewExpanded, setPdfPreviewExpanded] = useState(false);

  if (!currentChapter) return null;

  const handleSelectOption = (qId, optionIdx) => {
    setSelectedOptions((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const toggleShowAnswer = (qId) => {
    setRevealedAnswers((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const toggleSolutionAccordion = (sqId) => {
    setOpenSolutions((prev) => ({ ...prev, [sqId]: !prev[sqId] }));
  };

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Top Navigation & Chapter Header */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
        <button
          type="button"
          onClick={onBackToDashboard}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 hover:underline dark:text-indigo-400"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to {currentClass?.name} • {currentSubject?.name}
        </button>

        <div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-lg bg-indigo-600 px-2.5 py-0.5 text-xs font-bold text-white">
                Chapter {currentChapter.number}
              </span>
              <span className="rounded-lg bg-indigo-50 px-2.5 py-0.5 text-xs font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                Weightage: {currentChapter.weightage}
              </span>
            </div>
            <h1 className="mt-2 text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
              {currentChapter.title}
            </h1>
          </div>
        </div>

        {/* 3-TAB CORE LEARNING INTERFACE */}
        <div className="mt-6 flex flex-wrap gap-2 border-t border-slate-200 pt-5 dark:border-slate-800">
          {[
            {
              id: 'notes',
              label: '1. Notes & Study Material',
              icon: FileText,
              count: `${currentChapter.notes.keyConcepts.length} Concepts`
            },
            {
              id: 'objective',
              label: '2. Objective Questions (MCQs)',
              icon: HelpCircle,
              count: `${currentChapter.objectiveQuestions.length} MCQs`
            },
            {
              id: 'subjective',
              label: '3. Subjective Questions (Q&A)',
              icon: Layers,
              count: `${currentChapter.subjectiveQuestions.length} Q&As`
            }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-1 items-center justify-center gap-2 rounded-2xl px-4 py-3 text-xs font-bold transition-all sm:text-sm ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/20'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                <span>{tab.label}</span>
                <span
                  className={`hidden rounded-full px-2 py-0.5 text-[10px] md:inline-block ${
                    isActive
                      ? 'bg-indigo-800 text-indigo-100'
                      : 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* TAB 1: NOTES & PDF VIEWER PLACEHOLDER */}
      {activeTab === 'notes' && (
        <div className="mt-6 space-y-6">
          <div className="rounded-2xl border border-indigo-200 bg-indigo-50/60 p-5 dark:border-indigo-900/60 dark:bg-indigo-950/30">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
              <div className="flex items-start gap-3.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-indigo-600 text-white shadow-sm">
                  <FileText className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                    CMS-Ready PDF Note Viewer Placeholder
                  </span>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {currentChapter.pdfFileName}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {currentChapter.pdfPages} Pages • {currentChapter.pdfSize} • Verified Board Revision Handout
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  onClick={() => setPdfPreviewExpanded(!pdfPreviewExpanded)}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-indigo-300 bg-white px-3.5 py-2 text-xs font-bold text-indigo-700 hover:bg-indigo-50 dark:border-indigo-800 dark:bg-slate-900 dark:text-indigo-300"
                >
                  <BookOpen className="h-3.5 w-3.5" />
                  <span>{pdfPreviewExpanded ? 'Hide PDF Reader' : 'Preview PDF Reader'}</span>
                </button>
              </div>
            </div>

            {pdfPreviewExpanded && (
              <div className="mt-4 rounded-xl border border-slate-300 bg-white p-6 text-slate-800 shadow-inner dark:border-slate-700 dark:bg-slate-950 dark:text-slate-200">
                <div className="mb-3 flex items-center justify-between border-b border-slate-200 pb-2 text-xs text-slate-500 dark:border-slate-800">
                  <span>PDF Reader Canvas — Page 1 of {currentChapter.pdfPages}</span>
                  <span className="font-semibold text-indigo-600">Zoom: 100%</span>
                </div>
                <p className="text-sm leading-relaxed">
                  <strong>[CMS PDF Stream Ready]:</strong> Connect your backend storage (Firebase Storage / AWS S3 / Supabase) to pass the PDF URL directly into this frame. Below are the structured HTML study notes for instant mobile reading:
                </p>
              </div>
            )}
          </div>

          {/* Chapter Executive Summary */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              Chapter Overview
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base dark:text-slate-300">
              {currentChapter.notes.summary}
            </p>

            {/* Key Concepts List */}
            <div className="mt-6 space-y-4">
              {currentChapter.notes.keyConcepts.map((concept, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200/90 bg-slate-50/80 p-5 dark:border-slate-800 dark:bg-slate-800/50"
                >
                  <h3 className="text-base font-bold text-indigo-700 dark:text-indigo-400">
                    {concept.heading}
                  </h3>
                  <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                    {concept.body}
                  </p>
                </div>
              ))}
            </div>

            {/* Formula & Reaction Cheat Sheet */}
            {currentChapter.notes.formulas && currentChapter.notes.formulas.length > 0 && (
              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50/70 p-5 dark:border-amber-900/50 dark:bg-amber-950/20">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
                  <Sparkles className="h-4 w-4" />
                  <span>Important Board Formulas, Equations &amp; Key Dates</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm font-medium text-slate-800 dark:text-slate-200">
                  {currentChapter.notes.formulas.map((form, i) => (
                    <li
                      key={i}
                      className="rounded-xl bg-white/90 px-3.5 py-2 font-mono text-xs shadow-sm sm:text-sm dark:bg-slate-900"
                    >
                      {form}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: OBJECTIVE QUESTIONS (MCQs WITH RADIO BUTTONS & SHOW ANSWER TOGGLE) */}
      {activeTab === 'objective' && (
        <div className="mt-6 space-y-5">
          <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-5 py-4 dark:border-slate-800 dark:bg-slate-900">
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Board-Pattern Objective MCQs
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Select an option using the radio buttons or click &ldquo;Show Answer&rdquo; to verify your reasoning.
              </p>
            </div>
          </div>

          {currentChapter.objectiveQuestions.map((mcq, qIdx) => {
            const chosenIdx = selectedOptions[mcq.id];
            const isRevealed = !!revealedAnswers[mcq.id];
            const isAnswered = chosenIdx !== undefined;
            const isCorrect = chosenIdx === mcq.correctIndex;

            return (
              <div
                key={mcq.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="rounded-lg bg-indigo-50 px-2.5 py-1 text-xs font-bold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                    Question {qIdx + 1}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">1 Mark • Objective MCQ</span>
                </div>

                <p className="mt-3 text-base font-bold text-slate-900 dark:text-white">
                  {mcq.question}
                </p>

                {/* Radio Options */}
                <div className="mt-4 space-y-2.5">
                  {mcq.options.map((opt, optIdx) => {
                    const isThisSelected = chosenIdx === optIdx;
                    const isThisCorrect = mcq.correctIndex === optIdx;

                    let cardStyle =
                      'border-slate-200 bg-slate-50/70 hover:border-indigo-300 dark:border-slate-800 dark:bg-slate-800/60';
                    if (isRevealed) {
                      if (isThisCorrect) {
                        cardStyle =
                          'border-emerald-500 bg-emerald-50/80 text-emerald-900 dark:border-emerald-500 dark:bg-emerald-950/50 dark:text-emerald-200';
                      } else if (isThisSelected && !isThisCorrect) {
                        cardStyle =
                          'border-rose-500 bg-rose-50/80 text-rose-900 dark:border-rose-500 dark:bg-rose-950/50 dark:text-rose-200';
                      }
                    } else if (isThisSelected) {
                      cardStyle =
                        'border-indigo-600 bg-indigo-50/80 text-indigo-950 dark:border-indigo-500 dark:bg-indigo-950/60 dark:text-white';
                    }

                    return (
                      <label
                        key={optIdx}
                        className={`flex cursor-pointer items-center justify-between rounded-xl border p-3.5 text-sm font-medium transition-all ${cardStyle}`}
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="radio"
                            name={`mcq-${mcq.id}`}
                            checked={isThisSelected}
                            onChange={() => handleSelectOption(mcq.id, optIdx)}
                            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
                          />
                          <span>
                            <strong className="mr-1.5">
                              {String.fromCharCode(65 + optIdx)}.
                            </strong>
                            {opt}
                          </span>
                        </div>

                        {isRevealed && isThisCorrect && (
                          <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                        )}
                        {isRevealed && isThisSelected && !isThisCorrect && (
                          <XCircle className="h-4 w-4 shrink-0 text-rose-600" />
                        )}
                      </label>
                    );
                  })}
                </div>

                {/* Action Bar: Instant Feedback + Show Answer Toggle */}
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4 dark:border-slate-800">
                  <div className="text-xs font-semibold">
                    {isAnswered ? (
                      isCorrect ? (
                        <span className="text-emerald-600 dark:text-emerald-400">
                          ✓ Great job! Option {String.fromCharCode(65 + chosenIdx)} is correct.
                        </span>
                      ) : (
                        <span className="text-amber-600 dark:text-amber-400">
                          Option {String.fromCharCode(65 + chosenIdx)} selected — click &ldquo;Show Answer&rdquo; to check.
                        </span>
                      )
                    ) : (
                      <span className="text-slate-400">Select an option above</span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() => toggleShowAnswer(mcq.id)}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-indigo-200 bg-indigo-50 px-3.5 py-2 text-xs font-bold text-indigo-700 transition-colors hover:bg-indigo-100 dark:border-indigo-900 dark:bg-indigo-950 dark:text-indigo-300"
                  >
                    {isRevealed ? (
                      <>
                        <EyeOff className="h-3.5 w-3.5" />
                        <span>Hide Answer</span>
                      </>
                    ) : (
                      <>
                        <Eye className="h-3.5 w-3.5" />
                        <span>Show Answer</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Revealed Explanation Box */}
                {isRevealed && (
                  <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/70 p-4 text-xs leading-relaxed text-emerald-950 sm:text-sm dark:border-emerald-900/60 dark:bg-emerald-950/30 dark:text-emerald-200">
                    <p className="font-bold">
                      Correct Option: {String.fromCharCode(65 + mcq.correctIndex)} ({mcq.options[mcq.correctIndex]})
                    </p>
                    <p className="mt-1">{mcq.explanation}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* TAB 3: SUBJECTIVE QUESTIONS (SHORT & LONG ANSWER WITH VIEW SOLUTION ACCORDION) */}
      {activeTab === 'subjective' && (
        <div className="mt-6 space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white px-5 py-4 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              Subjective Board Questions (Short &amp; Long Answer Type)
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Try framing your answer mentally first, then click &ldquo;View Solution&rdquo; to expand the step-by-step board marking scheme answer.
            </p>
          </div>

          {currentChapter.subjectiveQuestions.map((sq, idx) => {
            const isOpen = !!openSolutions[sq.id];
            return (
              <div
                key={sq.id}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <div className="p-6">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-lg bg-purple-50 px-2.5 py-1 text-xs font-bold text-purple-700 dark:bg-purple-950/80 dark:text-purple-300">
                      {sq.type}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">
                      Board Subjective Q#{idx + 1}
                    </span>
                  </div>

                  <h3 className="mt-3 text-base font-bold text-slate-900 sm:text-lg dark:text-white">
                    {sq.question}
                  </h3>

                  <div className="mt-4">
                    <button
                      type="button"
                      onClick={() => toggleSolutionAccordion(sq.id)}
                      className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-4 py-2 text-xs font-bold text-slate-700 transition-colors hover:bg-indigo-50 hover:text-indigo-600 dark:bg-slate-800 dark:text-slate-200"
                    >
                      <span>{isOpen ? 'Hide Solution' : 'View Solution'}</span>
                      {isOpen ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4" />
                      )}
                    </button>
                  </div>
                </div>

                {isOpen && (
                  <div className="border-t border-slate-200 bg-indigo-50/40 px-6 py-5 dark:border-slate-800 dark:bg-indigo-950/20">
                    <p className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">
                      Model Board Solution:
                    </p>
                    <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                      {sq.solution}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
