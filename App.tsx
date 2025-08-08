
import React from 'react';
import { AppThemeProvider } from './src/theme/ThemeProvider';
import AppNavigator from './src/navigation/AppNavigator';
import { ToastProvider } from './src/components/ToastProvider';


export default function App() {
  return (
    <AppThemeProvider>
      <ToastProvider>
        <AppNavigator />
      </ToastProvider>
    </AppThemeProvider>
  );
}

