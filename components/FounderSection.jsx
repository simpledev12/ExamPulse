import React from 'react';
import { Award, CheckCircle2, Quote, Sparkles } from 'lucide-react';
import { FOUNDER_PHOTO_URI, FOUNDER_SIGNATURE_URI } from '../data/founderAssets';

export default function FounderSection({ founder }) {
  return (
    <section
      id="about-founder"
      className="relative overflow-hidden rounded-3xl border border-indigo-100 bg-gradient-to-br from-white via-indigo-50/40 to-blue-50/50 p-6 shadow-sm sm:p-10 lg:p-12 dark:border-slate-800 dark:from-slate-900 dark:via-slate-900 dark:to-indigo-950/30"
    >
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
        {/* Founder Profile Photo Column */}
        <div className="flex flex-col items-center lg:col-span-5">
          <div className="relative group">
            <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-indigo-600 to-blue-500 opacity-20 blur-xl transition duration-500 group-hover:opacity-35" />
            <div className="relative overflow-hidden rounded-2xl border-4 border-white bg-slate-100 shadow-xl dark:border-slate-800 dark:bg-slate-800">
              <img
                src={FOUNDER_PHOTO_URI}
                alt="Khushnoor — Founder of ExamPulse"
                className="h-80 w-64 object-cover object-top sm:h-96 sm:w-72"
              />
              <div className="bg-slate-900/90 px-4 py-2.5 text-center text-white backdrop-blur-sm">
                <p className="text-sm font-bold tracking-wide">{founder.name}</p>
                <p className="text-[11px] text-indigo-300">{founder.role}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Founder Bio & Personal Branding Column */}
        <div className="space-y-5 lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full bg-indigo-100/90 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>About The Founder</span>
          </div>

          <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
            Making Board Exam Preparation Simple, Structured &amp; Accessible for Every Student
          </h2>

          <div className="relative rounded-2xl border border-indigo-100 bg-white/90 p-5 shadow-sm dark:border-slate-800 dark:bg-slate-800/70">
            <Quote className="mb-2 h-6 w-6 text-indigo-500 opacity-60" />
            <p className="text-base leading-relaxed text-slate-700 dark:text-slate-200">
              {founder.bio}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
            {founder.highlights.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2 rounded-xl border border-slate-200/80 bg-white/80 p-3 text-xs font-semibold text-slate-700 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-300"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-600 dark:text-indigo-400" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Signature Block */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/80 pt-5 dark:border-slate-800">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Signed with commitment,
              </p>
              <div className="mt-2 inline-block rounded-xl border border-slate-200 bg-white px-4 py-2 shadow-sm dark:border-slate-700 dark:bg-white">
                <img
                  src={FOUNDER_SIGNATURE_URI}
                  alt="Khushnoor Signature"
                  className="h-12 w-auto object-contain"
                />
              </div>
              <p className="mt-1 text-xs font-bold text-slate-800 dark:text-slate-200">
                {founder.name} • Founder, ExamPulse
              </p>
            </div>

            <div className="flex items-center gap-2 rounded-2xl bg-indigo-600/10 px-4 py-3 text-indigo-700 dark:bg-indigo-950/70 dark:text-indigo-300">
              <Award className="h-5 w-5 shrink-0" />
              <div className="text-xs">
                <p className="font-bold">Student-First Architecture</p>
                <p className="opacity-80">Zero Ads • Zero Distractions • 100% Board Aligned</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
