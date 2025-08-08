import {DefaultTheme, DarkTheme, Theme} from '@react-navigation/native';

export const LightAppTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ef5350',
    background: '#ffffff',
    card: '#ffffff',
    text: '#111111',
    border: '#e0e0e0',
    notification: '#ef5350'
  },
};

export const DarkAppTheme: Theme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#ef9a9a',
    background: '#0b0b0b',
    card: '#121212',
    text: '#f5f5f5',
    border: '#222222',
    notification: '#ef9a9a'
  },
};
