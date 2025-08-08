import React from 'react';
import {Text} from 'react-native';
import Screen from '../components/Screen';
import Button from '../components/Button';
import {useAppStore} from '../store/useAppStore';
import {useThemeToggle} from '../theme/ThemeProvider';

export default function ProfileScreen() {
  const {isDark, toggleTheme} = useThemeToggle();
  const {username, logout} = useAppStore(s => ({username: s.username, logout: s.logout}));
  return (
    <Screen>
      <Text style={{fontWeight: '700', marginBottom: 12}}>Usuario: {username ?? '—'}</Text>
      <Button title={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'} onPress={toggleTheme}/>
      <Text style={{marginVertical: 12}}/>
      <Button title="Cerrar sesión" onPress={logout}/>
    </Screen>
  );
}
