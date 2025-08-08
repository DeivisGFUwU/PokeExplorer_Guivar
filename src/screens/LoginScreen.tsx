import React, {useState} from 'react';
import {Alert} from 'react-native';
import Screen from '../components/Screen';
import TextField from '../components/TextField';
import Button from '../components/Button';
import {useAppStore} from '../store/useAppStore';

export default function LoginScreen() {
  const login = useAppStore(s => s.login);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);

  const onSubmit = async () => {
    if (!user || !pass) {
      Alert.alert('Campos incompletos', 'Ingresa usuario y contraseña.');
      return;
    }
    setLoading(true);
    const ok = await login(user, pass);
    setLoading(false);
    if (!ok) Alert.alert('Error', 'Credenciales inválidas (usa admin / 1234).');
  };

  return (
    <Screen>
      <TextField placeholder="Usuario" autoCapitalize="none" value={user} onChangeText={setUser}/>
      <TextField placeholder="Contraseña" secureTextEntry value={pass} onChangeText={setPass}/>
      <Button title={loading ? 'Ingresando…' : 'Ingresar'} onPress={onSubmit} disabled={loading}/>
    </Screen>
  );
}
