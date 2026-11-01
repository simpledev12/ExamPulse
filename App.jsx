import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import FounderSection from './components/FounderSection';
import Home from './pages/Home';
import ClassDashboard from './pages/ClassDashboard';
import ChapterView from './pages/ChapterView';
import MockTest from './pages/MockTest';
import mockData from './data/mockData.json';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [studyMode, setStudyMode] = useState(false);

  const [selectedClassId, setSelectedClassId] = useState('class-10');
  const [selectedSubjectId, setSelectedSubjectId] = useState('science-10');
  const [selectedChapterId, setSelectedChapterId] = useState('ch-chem-reactions-10');
  const [initialChapterTab, setInitialChapterTab] = useState('notes');

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const currentClass =
    mockData.classes.find((c) => c.id === selectedClassId) || mockData.classes[4];
  const currentSubject =
    currentClass.subjects.find((s) => s.id === selectedSubjectId) ||
    currentClass.subjects[0];
  const currentChapter =
    currentSubject?.chapters.find((ch) => ch.id === selectedChapterId) ||
    currentSubject?.chapters[0];

  const handleSelectClass = (classId) => {
    const foundClass =
      mockData.classes.find((c) => c.id === classId) || mockData.classes[0];
    setSelectedClassId(foundClass.id);
    const firstSub = foundClass.subjects[0];
    if (firstSub) {
      setSelectedSubjectId(firstSub.id);
      if (firstSub.chapters[0]) {
        setSelectedChapterId(firstSub.chapters[0].id);
      }
    }
    setActivePage('classes');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectSubject = (subjectId) => {
    setSelectedSubjectId(subjectId);
    const sub = currentClass.subjects.find((s) => s.id === subjectId);
    if (sub && sub.chapters[0]) {
      setSelectedChapterId(sub.chapters[0].id);
    }
  };

  const handleSelectChapter = (chapterId, tab = 'notes') => {
    setSelectedChapterId(chapterId);
    setInitialChapterTab(tab);
    setActivePage('chapter-view');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-slate-100">
        <Header
          activePage={activePage === 'chapter-view' ? 'classes' : activePage}
          onNavigate={handleNavigate}
          darkMode={darkMode}
          onToggleDarkMode={() => setDarkMode(!darkMode)}
          studyMode={studyMode}
          onToggleStudyMode={() => setStudyMode(!studyMode)}
        />

        {studyMode && (
          <div className="bg-emerald-600 px-4 py-1.5 text-center text-xs font-bold text-white">
            Distraction-Free Study Mode Active — Promotional banners and footer clutter are minimized so you can focus 100% on your Board Exam prep.
          </div>
        )}

        <main className="flex-1">
          {activePage === 'home' && (
            <Home
              siteMeta={mockData.siteMeta}
              classes={mockData.classes}
              onSelectClass={handleSelectClass}
              onStartMockTests={() => handleNavigate('mock-tests')}
            />
          )}

          {activePage === 'classes' && (
            <ClassDashboard
              classes={mockData.classes}
              selectedClassId={selectedClassId}
              selectedSubjectId={selectedSubjectId}
              onSelectClass={handleSelectClass}
              onSelectSubject={handleSelectSubject}
              onSelectChapter={handleSelectChapter}
              onBackToHome={() => handleNavigate('home')}
            />
          )}

          {activePage === 'chapter-view' && (
            <ChapterView
              currentClass={currentClass}
              currentSubject={currentSubject}
              currentChapter={currentChapter}
              initialTab={initialChapterTab}
              onBackToDashboard={() => handleNavigate('classes')}
            />
          )}

          {activePage === 'mock-tests' && (
            <MockTest mockTests={mockData.mockTests} />
          )}

          {activePage === 'about-me' && (
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
              <FounderSection founder={mockData.siteMeta.founder} />
            </div>
          )}
        </main>

        {!studyMode && (
          <Footer
            onNavigate={handleNavigate}
            onSelectClass={handleSelectClass}
          />
        )}
      </div>
    </div>
  );
}
