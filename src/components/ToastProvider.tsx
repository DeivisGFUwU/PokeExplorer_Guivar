import React, { createContext, useContext, useState, useCallback } from 'react';
import { Text, StyleSheet, Animated, Dimensions } from 'react-native';

const ToastContext = createContext({
  show: (_msg: string, _type?: 'success' | 'error' | 'info') => {},
});

export function useToast() {
  return useContext(ToastContext);
}

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState<'success' | 'error' | 'info'>('info');
  const [fadeAnim] = useState(new Animated.Value(0));

  const show = useCallback((msg: string, t: 'success' | 'error' | 'info' = 'info') => {
    setMessage(msg);
    setType(t);
    setVisible(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start(() => {
      setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }).start(() => setVisible(false));
      }, 2000);
    });
  }, [fadeAnim]);

  return (
    <ToastContext.Provider value={{ show }}>
      {children}
      {visible && (
        <Animated.View style={[styles.toast, styles[type], { opacity: fadeAnim }] }>
          <Text style={styles.text}>{message}</Text>
        </Animated.View>
      )}
    </ToastContext.Provider>
  );
};

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    bottom: 48,
    left: width * 0.1,
    width: width * 0.8,
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
    zIndex: 9999,
    elevation: 10,
  },
  text: { color: '#fff', fontWeight: '700', textAlign: 'center' },
  success: { backgroundColor: '#43a047' },
  error: { backgroundColor: '#e53935' },
  info: { backgroundColor: '#333' },
});
