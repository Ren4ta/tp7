import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'; 
import React, { useState } from 'react';

export default function App() { 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <StatusBar style="auto" backgroundColor='#0000ff' /> 
      <Text>Email:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu correo"
        keyboardType="email-address"
        autoCapitalize="none"
        onChangeText={setEmail}
        value={email}
      />

      <Text>Contraseña:</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresa tu contraseña"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
       <View style={styles.buttonContainer}>
        <Button title="Ingresar" onPress={handleLogin} color="#0000FF" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  input: {
    height: 40,
    width: '100%',
    borderColor: 'blue', 
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  }, 
  buttonContainer: {
    width: '100%',
    marginTop: 10,
  },
});
