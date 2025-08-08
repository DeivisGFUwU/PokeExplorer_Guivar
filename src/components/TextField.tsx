import React from 'react';
import {TextInput, TextInputProps, StyleSheet} from 'react-native';

export default function TextField(props: TextInputProps) {
  return <TextInput {...props} style={[styles.input, props.style]} placeholderTextColor="#9e9e9e" />;
}
const styles = StyleSheet.create({
  input: {borderWidth: 1, borderColor: '#ddd', borderRadius: 12, padding: 12, marginBottom: 12, color: '#111'}
});
