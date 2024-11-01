import { React, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import styles from '../styles/globalStyles.js';
// import ModalSelector from '@react-native-modal-selector';

const Register = ({ navigation }) => {

  const [user, setUser] = useState('');
  const [errorUser, setErrorUser] = useState('');
  const [email, setEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorPasword, setErrorPassword] = useState('');
  const [birthDate, setBirthdate] = useState('');
  const [errorBirthDate, setErrorBirthdate] = useState('');
  const [address, setAddress] = useState('');
  const [errorAddress, setErrorAddress] = useState('');
  const [country, setCountry] = useState('');
  const [department, setDepartment] = useState('');
  const [city, setCity] = useState('');

  const validateUser = (text) => {
    setUser(text);
    if (text.length > 10) {
      setErrorUser('El User no es válido');
    } else {
      setErrorUser('');
    }
  };

  const validateEmail = (text) => {
    setEmail(text);
    if (!text.includes('@') || !text.includes('.')) {
      setErrorEmail('El Email no es válido');
    } else {
      setErrorEmail('');
    }
  };

  const validateBirthday = () => {
    const today = new Date();
    const birthDate = new Date(birthDate);
    const age = today.getFullYear() - birthDate.getFullYear();
    setBirthdate(Number)
    if (age >= 18 && age <= 50) {
      setErrorBirthdate('Error', 'No está en el rango de edad para crear la cuenta.');
    } else {
      setErrorAddress('');
    }
  };

  const validateAddress = (text) => {
    setAddress(text);
    if (text.length > 3) {
      setErrorAddress('La direccion supera los 30 caracteres');
    } else {
      setErrorAddress('');
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

  const [selectedValue1, setSelectedValue1] = useState(null);
  const [selectedValue2, setSelectedValue2] = useState(null);
  const [isSecondSelectorEnabled, setIsSecondSelectorEnabled] = useState(false);

  const data1 = [
    { key: 1, label: 'Antioquia' },
    { key: 2, label: 'Cundinamarca' },
    { key: 3, label: 'Cordoba' },
    { key: 4, label: 'Amazonas' },
    { key: 5, label: 'Santander' },
  ];

  const data2 = {
    'Antioquia': [
      { key: 1, label: 'Medellin' },
      { key: 2, label: 'Bello' },
      { key: 3, label: 'Itagüí' },
      { key: 4, label: 'Guarne' },
      { key: 5, label: 'Rionegro' },
    ],
    'Cundinamarca': [
      { key: 1, label: 'Bogotá' },
      { key: 2, label: 'Fusagasugá' },
      { key: 3, label: 'Zipaquirá' },
      { key: 4, label: 'Girardot' },
      { key: 5, label: 'Chía' },
    ],
    'Cordoba': [
      { key: 1, label: 'Montería' },
      { key: 2, label: 'Lorica' },
      { key: 3, label: 'Cereté' },
      { key: 4, label: 'Planeta Rica' },
      { key: 5, label: 'Sahagún' },
    ],
    'Amazonas': [
      { key: 1, label: 'Leticia' },
      { key: 2, label: 'Puerto Nariño' },
      { key: 3, label: 'Miriti-Parana' },
      { key: 4, label: 'Tarapacá' },
      { key: 5, label: 'La Chorrera' },
    ],
    'Santander': [
      { key: 1, label: 'Bucaramanga' },
      { key: 2, label: 'Cúcuta' },
      { key: 3, label: 'Barrancabermeja' },
      { key: 4, label: 'San Gil' },
      { key: 5, label: 'Floridablanca' },
    ],
  };

  const addToUsers = async (user) => {
    try {
        const existingUserQuery = await firestore()
            .collection('users')
            .where('email', '==', user.email) 
            .get();

        if (!existingUserQuery.empty) {
            Alert.alert("Información", "Este usuario ya está registrado.");
            return; 
        }

        await firestore()
            .collection('users')
            .add({
              password: user.password,
              user: user.user,
              email: user.email,
              birthDate: user.birthDate,
              address: user.address,
            });

        Alert.alert("¡Éxito!", "Usuario agregado ", [{ text: "OK" }]);

        //console.log(user);
    } catch (error) {
        console.error("Error al agregar el usuario:", error);
        Alert.alert("Error", "No se pudo agregar el usuario. Inténtalo nuevamente.");
    }
};

  return (
    <View style={{ backgroundColor: '#69A148', flex: 1 }}>
      <View style={{ height: '5%' }}>
      </View>
      <View style={ styles.containerCard }>

        <ScrollView >
          <View style={{ alignItems: 'center', marginBottom: 15 }} >
            <Text style={styles.title1}>Registrar usuario</Text>
            <Text style={styles.title}>Llena el formulario con tus datos</Text>
          </View>
          <View style={styles.section}>
            <TextInput style={styles.input}
              placeholder="Usuario"
              value={user}
              maxLength={10}
              onChangeText={validateUser}
            />
            <Text style={styles.validationText}>Max. 10 Caracteres </Text>
            {errorUser ? <Text style={{ color: 'red' }}>{errorUser}</Text> : null}

            <TextInput style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={validateEmail}
            />
            <Text style={styles.validationText}>Max. 10 Caracteres </Text>
            {errorEmail ? <Text style={{ color: 'red' }}>{errorEmail}</Text> : null}

            <TextInput
              placeholder="YYYY-MM-DD"
              value={birthDate}
              onChangeText={validateBirthday}
            />
            {errorBirthDate ? <Text style={{ color: 'red' }}>{errorUser}</Text> : null}

            <TextInput
              placeholder="Dirección"
              maxLength={30}
              value={address}
              onChangeText={validateAddress}
            />
            {errorAddress ? <Text style={{ color: 'red' }}>{errorAddress}</Text> : null}

            <TextInput style={styles.input}
              placeholder="Contraseña"
              value={password}
              maxLength={8}
              secureTextEntry={true}
              onChangeText={validatePassword}
            />
            <Text style={styles.validationText}>Max. 8 Caracteres </Text>
            <Text style={styles.validationText}>debe incluir: 1 Mayúsculas </Text>
            <Text style={styles.validationText}>debe incluir: 1 caracter especial </Text>
            <Text style={styles.validationText}>letras y números </Text>

            {errorPasword ? <Text style={{ color: 'red' }}>{errorPasword}</Text> : null}

            <TextInput style={styles.input}
              placeholder="Confirmar contraseña"
              value={password}
              maxLength={8}
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
              onPress={() =>  addToUsers({password, user,email,birthDate,address}) } >
              {/* onPress={() =>  navigation.navigate('Login')} > */}
              <Text style={styles.buttonText}>Registrar Usuario</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>
    </View>
  );
};
export default Register;
