import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import { useThemeToggle } from '../theme/ThemeProvider';

type Props = { title: string; onPress: () => void; disabled?: boolean };
export default function Button({title, onPress, disabled}: Props) {
  const { isDark } = useThemeToggle();
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.btn, isDark ? styles.btnDark : styles.btnLight, disabled && styles.btnDisabled]}
    >
      <Text style={[styles.txt, isDark ? styles.txtDark : styles.txtLight]}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btn: {padding: 12, borderRadius: 12, alignItems: 'center'},
  btnLight: {backgroundColor: '#ef5350'},
  btnDark: {backgroundColor: '#ef9a9a'},
  btnDisabled: {opacity: 0.6},
  txt: {fontWeight: '600'},
  txtLight: {color: 'white'},
  txtDark: {color: '#222'},
});
