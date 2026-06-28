import React, { createContext, useContext, useState, ReactNode } from 'react';
import { LessonProgress } from '../types';

interface ProgressContextType {
  progress: Record<string, LessonProgress>;
  markLessonRead: (lessonId: string) => void;
  saveQuizResult: (lessonId: string, score: number) => void;
  getProgress: (lessonId: string) => LessonProgress | undefined;
  totalCompleted: number;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const PASS_SCORE = 70;

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [progress, setProgress] = useState<Record<string, LessonProgress>>({});

  const markLessonRead = (lessonId: string) => {
    setProgress(prev => ({
      ...prev,
      [lessonId]: { ...prev[lessonId], lessonId, completed: true },
    }));
  };

  const saveQuizResult = (lessonId: string, score: number) => {
    setProgress(prev => ({
      ...prev,
      [lessonId]: {
        ...prev[lessonId],
        lessonId,
        completed: true,
        quizScore: score,
        quizPassed: score >= PASS_SCORE,
      },
    }));
  };

  const getProgress = (lessonId: string) => progress[lessonId];

  const totalCompleted = Object.values(progress).filter(p => p.completed).length;

  return (
    <ProgressContext.Provider value={{ progress, markLessonRead, saveQuizResult, getProgress, totalCompleted }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}
