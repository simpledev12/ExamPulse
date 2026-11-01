import React, { useState, useEffect } from 'react';
import {
  Award,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Flag,
  RotateCcw,
  Send,
  XCircle
} from 'lucide-react';

export default function MockTest({ mockTests }) {
  const [selectedTestId, setSelectedTestId] = useState(mockTests[0]?.id);
  const currentTest =
    mockTests.find((t) => t.id === selectedTestId) || mockTests[0];

  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState({});
  const [markedForReview, setMarkedForReview] = useState({});
  const [timeLeft, setTimeLeft] = useState(currentTest.durationSeconds);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showResultModal, setShowResultModal] = useState(false);

  const handleSelectTest = (testId) => {
    const found = mockTests.find((t) => t.id === testId) || mockTests[0];
    setSelectedTestId(testId);
    setCurrentQuestionIdx(0);
    setAnswers({});
    setMarkedForReview({});
    setTimeLeft(found.durationSeconds);
    setIsSubmitted(false);
    setShowResultModal(false);
  };

  useEffect(() => {
    if (isSubmitted) return undefined;
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsSubmitted(true);
          setShowResultModal(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isSubmitted, selectedTestId]);

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const remSecs = secs % 60;
    return `${String(mins).padStart(2, '0')}:${String(remSecs).padStart(2, '0')}`;
  };

  const activeQuestion = currentTest.questions[currentQuestionIdx];

  const handleSelectOption = (optIdx) => {
    if (isSubmitted) return;
    setAnswers((prev) => ({ ...prev, [activeQuestion.id]: optIdx }));
  };

  const toggleMarkReview = () => {
    const qId = activeQuestion.id;
    setMarkedForReview((prev) => ({ ...prev, [qId]: !prev[qId] }));
  };

  const handleSubmitTest = () => {
    setIsSubmitted(true);
    setShowResultModal(true);
  };

  const handleResetTest = () => {
    setCurrentQuestionIdx(0);
    setAnswers({});
    setMarkedForReview({});
    setTimeLeft(currentTest.durationSeconds);
    setIsSubmitted(false);
    setShowResultModal(false);
  };

  const totalQuestions = currentTest.questions.length;
  const attemptedCount = Object.keys(answers).length;
  const correctCount = currentTest.questions.reduce((acc, q) => {
    return acc + (answers[q.id] === q.correctIndex ? 1 : 0);
  }, 0);
  const totalScore = correctCount * currentTest.marksPerCorrect;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      {/* Top Bar: Test Selector & Live Timer */}
      <div className="flex flex-col justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:flex-row lg:items-center dark:border-slate-800 dark:bg-slate-900">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            {mockTests.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => handleSelectTest(t.id)}
                className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                  t.id === currentTest.id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300'
                }`}
              >
                {t.classLabel}: {t.subject}
              </button>
            ))}
          </div>
          <h1 className="mt-2.5 text-xl font-extrabold text-slate-900 sm:text-2xl dark:text-white">
            {currentTest.title}
          </h1>
        </div>

        {/* Live Timer & Submit CTA */}
        <div className="flex flex-wrap items-center gap-3">
          <div
            className={`flex items-center gap-2 rounded-2xl border px-4 py-2.5 font-mono text-sm font-extrabold ${
              timeLeft < 120 && !isSubmitted
                ? 'border-rose-300 bg-rose-50 text-rose-700 dark:border-rose-800 dark:bg-rose-950 dark:text-rose-300'
                : 'border-indigo-200 bg-indigo-50 text-indigo-700 dark:border-indigo-900 dark:bg-indigo-950 dark:text-indigo-300'
            }`}
          >
            <Clock className="h-4 w-4" />
            <span>Time Remaining: {formatTime(timeLeft)}</span>
          </div>

          {!isSubmitted ? (
            <button
              type="button"
              onClick={handleSubmitTest}
              className="inline-flex items-center gap-2 rounded-2xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-colors hover:bg-emerald-700 sm:text-sm"
            >
              <Send className="h-4 w-4" />
              <span>Submit Test</span>
            </button>
          ) : (
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setShowResultModal(true)}
                className="inline-flex items-center gap-1.5 rounded-2xl bg-indigo-600 px-4 py-2.5 text-xs font-bold text-white"
              >
                <Award className="h-4 w-4" />
                <span>View Scorecard</span>
              </button>
              <button
                type="button"
                onClick={handleResetTest}
                className="inline-flex items-center gap-1.5 rounded-2xl border border-slate-300 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Retake</span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Main Test Grid: Question Area (8 cols) + Question Navigator Palette (4 cols) */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Left: Active Question Area */}
        <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-8 dark:border-slate-800 dark:bg-slate-900">
          <div>
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <span className="rounded-lg bg-indigo-600 px-2.5 py-1 text-xs font-bold text-white">
                  Question {currentQuestionIdx + 1} of {totalQuestions}
                </span>
                <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
                  {activeQuestion.section}
                </span>
              </div>
              <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                +{currentTest.marksPerCorrect} Marks
              </span>
            </div>

            <h2 className="mt-5 text-lg font-bold leading-snug text-slate-900 sm:text-xl dark:text-white">
              {activeQuestion.question}
            </h2>

            {/* Options List */}
            <div className="mt-6 space-y-3">
              {activeQuestion.options.map((opt, idx) => {
                const isSelected = answers[activeQuestion.id] === idx;
                const isCorrect = activeQuestion.correctIndex === idx;

                let optionClass =
                  'border-slate-200 bg-slate-50/70 hover:border-indigo-400 dark:border-slate-800 dark:bg-slate-800/60';
                if (isSubmitted) {
                  if (isCorrect) {
                    optionClass =
                      'border-emerald-500 bg-emerald-50 text-emerald-950 dark:border-emerald-500 dark:bg-emerald-950/50 dark:text-emerald-200';
                  } else if (isSelected && !isCorrect) {
                    optionClass =
                      'border-rose-500 bg-rose-50 text-rose-950 dark:border-rose-500 dark:bg-rose-950/50 dark:text-rose-200';
                  }
                } else if (isSelected) {
                  optionClass =
                    'border-indigo-600 bg-indigo-50/90 text-indigo-950 ring-2 ring-indigo-600/15 dark:border-indigo-500 dark:bg-indigo-950/60 dark:text-white';
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(idx)}
                    className={`flex w-full items-center justify-between rounded-xl border p-4 text-left text-sm font-medium transition-all ${optionClass}`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${
                          isSelected
                            ? 'bg-indigo-600 text-white'
                            : 'bg-white text-slate-700 border border-slate-200 dark:bg-slate-900 dark:text-slate-300 dark:border-slate-700'
                        }`}
                      >
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span>{opt}</span>
                    </span>

                    {isSubmitted && isCorrect && (
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-600" />
                    )}
                    {isSubmitted && isSelected && !isCorrect && (
                      <XCircle className="h-5 w-5 shrink-0 text-rose-600" />
                    )}
                  </button>
                );
              })}
            </div>

            {isSubmitted && (
              <div className="mt-5 rounded-xl border border-indigo-200 bg-indigo-50/60 p-4 text-xs leading-relaxed text-slate-800 dark:border-indigo-900 dark:bg-indigo-950/40 dark:text-slate-200">
                <p className="font-bold text-indigo-700 dark:text-indigo-300">
                  Explanation:
                </p>
                <p className="mt-1">{activeQuestion.explanation}</p>
              </div>
            )}
          </div>

          {/* Bottom Navigation Bar: Previous, Mark for Review, Next */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-5 dark:border-slate-800">
            <button
              type="button"
              disabled={currentQuestionIdx === 0}
              onClick={() => setCurrentQuestionIdx((i) => Math.max(0, i - 1))}
              className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-xs font-bold text-slate-700 disabled:opacity-40 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
            >
              <ChevronLeft className="h-4 w-4" />
              <span>Previous</span>
            </button>

            <button
              type="button"
              onClick={toggleMarkReview}
              className={`inline-flex items-center gap-1.5 rounded-xl border px-4 py-2.5 text-xs font-bold transition-colors ${
                markedForReview[activeQuestion.id]
                  ? 'border-amber-400 bg-amber-50 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                  : 'border-slate-200 bg-slate-50 text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300'
              }`}
            >
              <Flag className="h-3.5 w-3.5" />
              <span>
                {markedForReview[activeQuestion.id]
                  ? 'Marked for Review'
                  : 'Mark for Review'}
              </span>
            </button>

            <button
              type="button"
              disabled={currentQuestionIdx === totalQuestions - 1}
              onClick={() =>
                setCurrentQuestionIdx((i) => Math.min(totalQuestions - 1, i + 1))
              }
              className="inline-flex items-center gap-1.5 rounded-xl bg-indigo-600 px-5 py-2.5 text-xs font-bold text-white disabled:opacity-40"
            >
              <span>Next</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Right: Question Navigator Palette */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-4 dark:border-slate-800 dark:bg-slate-900">
          <h3 className="text-base font-bold text-slate-900 dark:text-white">
            Question Navigator Palette
          </h3>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Jump to any question directly or review your progress before submitting.
          </p>

          <div className="mt-5 grid grid-cols-5 gap-2.5">
            {currentTest.questions.map((q, idx) => {
              const isCurrent = idx === currentQuestionIdx;
              const isAnswered = answers[q.id] !== undefined;
              const isMarked = !!markedForReview[q.id];

              let btnStyle =
                'border-slate-200 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300';
              if (isCurrent) {
                btnStyle =
                  'border-indigo-600 bg-indigo-600 text-white ring-2 ring-indigo-600/30';
              } else if (isMarked) {
                btnStyle =
                  'border-amber-400 bg-amber-100 text-amber-900 dark:bg-amber-950 dark:text-amber-300';
              } else if (isAnswered) {
                btnStyle =
                  'border-emerald-500 bg-emerald-100 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-300';
              }

              return (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => setCurrentQuestionIdx(idx)}
                  className={`flex h-11 w-full items-center justify-center rounded-xl border text-xs font-extrabold transition-all ${btnStyle}`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          {/* Legend */}
          <div className="mt-6 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-600 dark:border-slate-800 dark:text-slate-400">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-emerald-500" /> Answered
              </span>
              <span className="font-bold">{attemptedCount}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-amber-400" /> Marked for Review
              </span>
              <span className="font-bold">
                {Object.values(markedForReview).filter(Boolean).length}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-slate-300 dark:bg-slate-700" /> Unvisited / Pending
              </span>
              <span className="font-bold">{totalQuestions - attemptedCount}</span>
            </div>
          </div>

          {!isSubmitted && (
            <button
              type="button"
              onClick={handleSubmitTest}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-2xl bg-indigo-600 py-3 text-sm font-bold text-white shadow-md shadow-indigo-600/20 hover:bg-indigo-700"
            >
              <Send className="h-4 w-4" />
              <span>Submit Mock Test</span>
            </button>
          )}
        </div>
      </div>

      {/* Result / Score Modal Placeholder after Submission */}
      {showResultModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm">
          <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-2xl sm:p-8 dark:border-slate-800 dark:bg-slate-900">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
              <Award className="h-9 w-9" />
            </div>

            <h3 className="mt-4 text-2xl font-extrabold text-slate-900 dark:text-white">
              Mock Test Result &amp; Scorecard
            </h3>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              {currentTest.title}
            </p>

            <div className="mt-6 rounded-2xl bg-gradient-to-br from-indigo-600 to-blue-700 p-5 text-white shadow-lg">
              <p className="text-xs font-bold uppercase tracking-wider text-indigo-200">
                Your Final Score
              </p>
              <p className="mt-1 text-4xl font-extrabold">
                {totalScore} / {currentTest.totalMarks}
              </p>
              <p className="mt-1 text-xs text-indigo-100">
                Accuracy: {Math.round((correctCount / totalQuestions) * 100)}% ({correctCount} of {totalQuestions} Correct)
              </p>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2 text-xs">
              <div className="rounded-xl bg-slate-100 p-3 dark:bg-slate-800">
                <p className="text-slate-500 dark:text-slate-400">Attempted</p>
                <p className="mt-0.5 text-base font-extrabold text-slate-900 dark:text-white">
                  {attemptedCount}
                </p>
              </div>
              <div className="rounded-xl bg-emerald-50 p-3 dark:bg-emerald-950/50">
                <p className="text-emerald-600 dark:text-emerald-400">Correct</p>
                <p className="mt-0.5 text-base font-extrabold text-emerald-700 dark:text-emerald-300">
                  {correctCount}
                </p>
              </div>
              <div className="rounded-xl bg-rose-50 p-3 dark:bg-rose-950/50">
                <p className="text-rose-600 dark:text-rose-400">Incorrect</p>
                <p className="mt-0.5 text-base font-extrabold text-rose-700 dark:text-rose-300">
                  {attemptedCount - correctCount}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row">
              <button
                type="button"
                onClick={() => setShowResultModal(false)}
                className="flex-1 rounded-xl bg-indigo-600 py-3 text-xs font-bold text-white hover:bg-indigo-700"
              >
                Review Solutions
              </button>
              <button
                type="button"
                onClick={handleResetTest}
                className="flex-1 rounded-xl border border-slate-200 bg-slate-50 py-3 text-xs font-bold text-slate-700 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                Retake Test
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
