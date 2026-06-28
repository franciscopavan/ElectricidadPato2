import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, SubscriptionTier } from '../types';

interface AuthContextType {
  user: User | null;
  tier: SubscriptionTier;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, name: string) => Promise<void>;
  logout: () => void;
  canAccess: (requiredTier: SubscriptionTier) => boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const TIER_LEVEL: Record<SubscriptionTier, number> = {
  free: 0,
  basic: 1,
  pro: 2,
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const tier: SubscriptionTier = user?.tier ?? 'free';

  const canAccess = (requiredTier: SubscriptionTier) => {
    return TIER_LEVEL[tier] >= TIER_LEVEL[requiredTier];
  };

  const login = async (email: string, _password: string) => {
    // TODO: conectar con Supabase
    setUser({ id: '1', email, name: email.split('@')[0], tier: 'free' });
  };

  const register = async (email: string, _password: string, name: string) => {
    // TODO: conectar con Supabase
    setUser({ id: '1', email, name, tier: 'free' });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, tier, login, register, logout, canAccess }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
