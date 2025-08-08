import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  message: string;
  type?: 'error' | 'empty';
  style?: object;
}

export default function InfoMessage({ message, type = 'empty', style }: Props) {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, type === 'error' ? styles.error : styles.empty]}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32,
    marginBottom: 16,
    minHeight: 40,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
  error: {
    color: '#e53935',
  },
  empty: {
    color: '#888',
  },
});
