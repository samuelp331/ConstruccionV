import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Alert } from 'react-native';
import styles from '../styles/globalStyles.js';
import { AuthContext } from "../android/app/src/AuthContext.js";
import Users from './BdLocal.json';

const Login = ({ navigation }) => {
  const { login } = useContext(AuthContext);
  const [user, setUser] = useState('');
  const [errorUser, setErrorUser] = useState('');
  const [password, setPassword] = useState('');
  const [errorPasword, setErrorPassword] = useState('');

  const validateUser = (text) => {
    setUser(text);
    if (text.length > 10) {
      setErrorUser('El User no es válido');
    } else {
      setErrorUser('');
    }
  };
  
  const validatePassword = (text) => {
    const validatorRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g;
    setPassword(text);
    if (text.length > 8 || !text.match(validatorRegex) || !text.match(/[0-9]|[A-Z]/g)) {
      setErrorPassword('La contraseña no es válida');
    } else {
      setErrorPassword('');
    }
  };

  const handleLogin = () => {

    const userFound = Users.find(u => u.username === user && u.password === password);

    if (!errorUser && !errorPasword && user && password) {
      if (userFound) {
        login(); // Llamar a login para actualizar el estado de autenticación
        navigation.navigate('Home'); // Redirigir al usuario a la pantalla Home
      } else {
        Alert.alert('Error', 'Usuario o contraseña incorrecta');
      }
    } else {
      Alert.alert('Error', 'Por favor, completa todos los campos correctamente');
    }
  };

  return (
    <KeyboardAvoidingView behavior="height" style={{ flex: 1 }}>
      <View style={{ backgroundColor: '#69A148', flex: 1 }}>
        <View style={{height:'30%'}} />
        <View style={styles.Detailcontainer}>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.title1}>¡Hola!</Text>
            <Text style={styles.title}>Inicia sesión en tu cuenta</Text>
          </View>
          <View style={styles.section}>
            <TextInput style={styles.input} placeholder="Usuario" value={user} onChangeText={validateUser} />
            <Text style={styles.validationText}>Max. 10 Caracteres </Text>
            {errorUser ? <Text style={{ color: 'red' }}>{errorUser}</Text> : null}

            <TextInput style={styles.input} placeholder="Contraseña" value={password} secureTextEntry onChangeText={validatePassword} />
            <Text style={styles.validationText}>Max. 8 Caracteres, incluir 1 Mayúscula y 1 caracter especial</Text>
            {errorPasword ? <Text style={{ color: 'red' }}>{errorPasword}</Text> : null}

            <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={handleLogin}>
              <Text style={styles.buttonText}>Iniciar sesión</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonInline} onPress={() => navigation.navigate('Register')}>
              <Text style={styles.buttonInlineText}>Registrarse</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;  
