import React from 'react';
import AuthNavigator from './AuthNavigator';
import MainTabs from './MainTabs';
import {useAppStore} from '../store/useAppStore';

export default function AppNavigator() {
  const isAuthenticated = useAppStore(s => s.isAuthenticated);
  return isAuthenticated ? <MainTabs/> : <AuthNavigator/>;
}
