import React, { useState } from 'react';
import {
  BookOpenCheck,
  GraduationCap,
  ClipboardCheck,
  UserCheck,
  Home,
  Sun,
  Moon,
  Sparkles,
  Menu,
  X
} from 'lucide-react';

export default function Header({
  activePage,
  onNavigate,
  darkMode,
  onToggleDarkMode,
  studyMode,
  onToggleStudyMode
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'classes', label: 'Classes (6–12)', icon: GraduationCap },
    { id: 'mock-tests', label: 'Mock Tests', icon: ClipboardCheck },
    { id: 'about-me', label: 'About Me', icon: UserCheck }
  ];

  const handleNavClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md transition-colors dark:border-slate-800 dark:bg-slate-900/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="group flex items-center gap-2.5 text-left focus:outline-none"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-blue-700 text-white shadow-md shadow-indigo-600/20 transition-transform group-hover:scale-105">
            <BookOpenCheck className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Exam<span className="text-indigo-600 dark:text-indigo-400">Pulse</span>
              </span>
              <span className="hidden rounded-full bg-indigo-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-indigo-700 sm:inline-block dark:bg-indigo-950/80 dark:text-indigo-300">
                Class 6–12
              </span>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Distraction-Free Board Prep
            </p>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main Navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                className={`flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-sm shadow-indigo-600/25'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Controls: Study Mode & Dark/Light Toggle */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleStudyMode}
            title="Toggle Distraction-Free Focus Mode"
            className={`hidden items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition-all sm:flex ${
              studyMode
                ? 'border-emerald-500/40 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                : 'border-slate-200 bg-slate-50 text-slate-600 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300'
            }`}
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>{studyMode ? 'Focus Mode: ON' : 'Study Mode'}</span>
          </button>

          <button
            type="button"
            onClick={onToggleDarkMode}
            aria-label="Toggle Dark or Light Mode"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition-colors hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
          >
            {darkMode ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open Navigation Menu"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 md:hidden dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-4 py-3 shadow-lg md:hidden dark:border-slate-800 dark:bg-slate-900">
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePage === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-left text-sm font-semibold ${
                    isActive
                      ? 'bg-indigo-600 text-white'
                      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
            <button
              type="button"
              onClick={() => {
                onToggleStudyMode();
                setMobileMenuOpen(false);
              }}
              className="mt-1 flex w-full items-center justify-between rounded-xl border border-indigo-200 bg-indigo-50/70 px-3.5 py-2.5 text-xs font-semibold text-indigo-700 dark:border-indigo-900 dark:bg-indigo-950/60 dark:text-indigo-300"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Distraction-Free Focus Mode
              </span>
              <span>{studyMode ? 'ACTIVE' : 'OFF'}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
