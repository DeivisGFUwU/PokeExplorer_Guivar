import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';

type Props = { title: string; onPress: () => void; disabled?: boolean };
export default function Button({title, onPress, disabled}: Props) {
  return (
    <TouchableOpacity onPress={onPress} disabled={disabled} style={[styles.btn, disabled && {opacity: .6}]}>
      <Text style={styles.txt}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btn: {padding: 12, borderRadius: 12, alignItems: 'center', backgroundColor: '#ef5350'},
  txt: {color: 'white', fontWeight: '600'}
});
