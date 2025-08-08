import React, {createContext, useContext, useMemo, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useColorScheme} from 'react-native';
import {DarkAppTheme, LightAppTheme} from './themes';

type ThemeCtx = {
  isDark: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeCtx>({isDark: false, toggleTheme: () => {}});
export const useThemeToggle = () => useContext(ThemeContext);

export const AppThemeProvider: React.FC<React.PropsWithChildren> = ({children}) => {
  const system = useColorScheme();
  const [overrideDark, setOverrideDark] = useState<boolean | null>(null);

  const isDark = overrideDark ?? (system === 'dark');

  const value = useMemo(() => ({
    isDark,
    toggleTheme: () => setOverrideDark(prev => prev === null ? !isDark : !prev),
  }), [isDark]);

  return (
    <ThemeContext.Provider value={value}>
      <NavigationContainer theme={isDark ? DarkAppTheme : LightAppTheme}>
        {children}
      </NavigationContainer>
    </ThemeContext.Provider>
  );
};
