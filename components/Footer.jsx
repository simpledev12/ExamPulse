import React from 'react';
import {
  BookOpenCheck,
  Github,
  Youtube,
  Linkedin,
  Mail,
  Heart,
  ArrowUpRight
} from 'lucide-react';

export default function Footer({ onNavigate, onSelectClass }) {
  return (
    <footer className="border-t border-slate-200 bg-white text-slate-600 transition-colors dark:border-slate-800 dark:bg-slate-900 dark:text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Col 1: Brand Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white">
                <BookOpenCheck className="h-5 w-5" />
              </div>
              <span className="text-lg font-extrabold text-slate-900 dark:text-white">
                Exam<span className="text-indigo-600 dark:text-indigo-400">Pulse</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              A clean, distraction-free learning platform built for Class 6 to 12 students preparing for Board Examinations with structured Notes, Objective/Subjective Q&amp;A, and Timed Mock Tests.
            </p>
            <div className="pt-1 text-xs font-medium text-indigo-600 dark:text-indigo-400">
              Founded by Khushnoor • Accessible Education for All
            </div>
          </div>

          {/* Col 2: Quick Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Quick Links
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('home')}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Home &amp; Overview
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('classes')}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  All Classes (Class 6 to 12)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('mock-tests')}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  Live Timed Mock Tests
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('about-me')}
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  About Founder (Khushnoor)
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Popular Board Classes */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Board Exam Focus
            </h3>
            <ul className="mt-3 space-y-2 text-sm">
              {[
                { id: 'class-10', label: 'Class 10 Board Study Material' },
                { id: 'class-12', label: 'Class 12 PCM / PCB Notes & Q&A' },
                { id: 'class-9', label: 'Class 9 Foundation Notes' },
                { id: 'class-11', label: 'Class 11 Core Concepts' }
              ].map((cls) => (
                <li key={cls.id}>
                  <button
                    type="button"
                    onClick={() => onSelectClass(cls.id)}
                    className="inline-flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    <span>{cls.label}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Connect & Social Placeholders */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Connect &amp; Community
            </h3>
            <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
              Join our student community for free PDF formula sheets, board exam updates, and live doubt sessions.
            </p>
            <div className="mt-4 flex items-center gap-2.5">
              {[
                { label: 'GitHub', icon: Github, href: 'https://github.com/simpledev12/ExamPulse' },
                { label: 'YouTube Channel', icon: Youtube, href: '#youtube' },
                { label: 'LinkedIn', icon: Linkedin, href: '#linkedin' },
                { label: 'Contact Email', icon: Mail, href: 'mailto:khushnoor@exampulse.edu' }
              ].map((soc) => {
                const Icon = soc.icon;
                return (
                  <a
                    key={soc.label}
                    href={soc.href}
                    target={soc.href.startsWith('http') ? '_blank' : undefined}
                    rel={soc.href.startsWith('http') ? 'noreferrer' : undefined}
                    aria-label={soc.label}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition-colors hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200/80 pt-6 text-xs text-slate-500 sm:flex-row dark:border-slate-800">
          <p>© {new Date().getFullYear()} ExamPulse Ed-Tech. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            <span>Designed &amp; Built with</span>
            <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" />
            <span>by Khushnoor for Class 6–12 Students</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
