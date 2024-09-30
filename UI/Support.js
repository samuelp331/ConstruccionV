import {React, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from '../styles/globalStyles.js';
import ModalSelector from 'react-native-modal-selector';

const Support = () => {
  const [selectedValue1, setSelectedValue1] = useState(null);

  const typeRequest = [
    {key: 1, label: 'Queja'},
    {key: 2, label: 'Peticion'},
    {key: 3, label: 'Recurso'},
  ];

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title1}>Selecciona el tipo de solicitud</Text>
      </View>
      <View>
        <ModalSelector
          data={typeRequest}
          initValue="tipo de solicitud"
          onChange={option => {
            setSelectedValue1(option.label);
          }}
        />
        <Text style={styles.selectedText}>Selected: {selectedValue1}</Text>

        <Text style={styles.title1}>Detalle la solicitud</Text>
        <TextInput
          style={styles.input}
          placeholder="solicitud"
          maxLength={300}
        />

        <TouchableOpacity style={styles.button} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default Support;