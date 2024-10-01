import { React, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/globalStyles.js';

const logo = require('../assets/images/Logo.png');

const Login = ({ navigation }) => {

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
    const validatorRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?`~]/g;
    setPassword(text);
    if (text.length > 8 || !text.match(validatorRegex) || !text.match(/[0-9]|[A-Z]/g)) {
      setErrorPassword('La contraseña no es valida');
    } else {
      setErrorPassword('');
    }
  };

  return (
    <View>
        <Image source={logo} style={styles.pictureDetaile} />

      <View style={styles.Detailcontainer}>
        <View style={{ paddingBottom: -15 }} >
          <Text style={styles.title1}>¡Hola!</Text>
          <Text style={styles.title}>Inicia sesión en tu cuenta</Text>
        </View>
        <View style={styles.section}>
          <TextInput style={styles.input}
            placeholder="Usuario"
            value={user}
            onChangeText={validateUser}
          />
          <Text style={styles.validationText}>Max. 10 Caracteres </Text>
          {errorUser ? <Text style={{ color: 'red' }}>{errorUser}</Text> : null}
          <TextInput style={styles.input}
            placeholder="Contraseña"
            value={password}
            secureTextEntry={true}
            onChangeText={validatePassword}
          />
          <Text style={styles.validationText}>Max. 8 Caracteres </Text>
          <Text style={styles.validationText}>debe incluir: 1 Mayúsculas </Text>
          <Text style={styles.validationText}>debe incluir: 1 caracter especial </Text>
          <Text style={styles.validationText}>letras y números </Text>

          {errorPasword ? <Text style={{ color: 'red' }}>{errorPasword}</Text> : null}
          <TouchableOpacity style={styles.button}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Home')} >
            <Text style={styles.buttonText}>Iniciar sesion</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonInline}
            title="Registrar Usuario"
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.buttonInlineText}>Registrarse</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
};
export default Login;
