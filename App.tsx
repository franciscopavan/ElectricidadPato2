import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import { ProgressProvider } from './src/context/ProgressContext';
import { AppNavigator } from './src/navigation/AppNavigator';

export default function App() {
  return (
    <AuthProvider>
      <ProgressProvider>
        <AppNavigator />
      </ProgressProvider>
    </AuthProvider>
  );
}
