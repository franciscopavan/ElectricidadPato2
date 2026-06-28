import React from 'react';
import { AuthProvider } from './src/context/AuthContext';
import { ProgressProvider } from './src/context/ProgressContext';
import { AppNavigator } from './src/navigation/AppNavigator';
import { DisclaimerModal } from './src/components/DisclaimerModal';

export default function App() {
  return (
    <AuthProvider>
      <ProgressProvider>
        <AppNavigator />
        <DisclaimerModal />
      </ProgressProvider>
    </AuthProvider>
  );
}
