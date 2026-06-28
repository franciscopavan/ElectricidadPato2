export type SubscriptionTier = 'free' | 'basic' | 'pro';

export interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  duration: string; // e.g. "10 min"
  tier: SubscriptionTier;
  icon: string;
  tags: string[];
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

export interface User {
  id: string;
  email: string;
  name: string;
  tier: SubscriptionTier;
}

export type RootStackParamList = {
  MainTabs: undefined;
  Lesson: { lessonId: string; moduleId: string };
  Subscription: undefined;
  Login: undefined;
  Register: undefined;
};

export type MainTabParamList = {
  Home: undefined;
  Modules: undefined;
  Profile: undefined;
};
