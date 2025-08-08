import React from 'react';
import {View, ViewProps, StyleSheet} from 'react-native';
import { useThemeToggle } from '../theme/ThemeProvider';

export function Screen({style, ...rest}: ViewProps) {
  const { isDark } = useThemeToggle();
  return <View style={[isDark ? styles.dark : styles.light, style]} {...rest} />;
}

const styles = StyleSheet.create({
  dark: { flex: 1, padding: 16, backgroundColor: '#0b0b0b' },
  light: { flex: 1, padding: 16, backgroundColor: '#fff' },
});
