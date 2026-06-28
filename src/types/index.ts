export type SubscriptionTier = 'free' | 'basic' | 'pro';

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  duration: string;
  tier: SubscriptionTier;
  icon: string;
  tags: string[];
  quiz?: QuizQuestion[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  tier: SubscriptionTier;
  lessons: Lesson[];
  color: string;
}

export interface LessonProgress {
  lessonId: string;
  completed: boolean;
  quizScore?: number;   // 0-100
  quizPassed?: boolean;
}

export interface User {
  id: string;
  email: string;
  name: string;
  tier: SubscriptionTier;
}

export type RootStackParamList = {
  MainTabs: undefined;
  Lesson: { lessonId: string; moduleId: string };
  Quiz: { lessonId: string; moduleId: string };
  Subscription: undefined;
  Login: undefined;
  Register: undefined;
  Disclaimer: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Modules: undefined;
  Profile: undefined;
};
