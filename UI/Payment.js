import { React, useState } from 'react';
import { View, Text, Image, FlatList, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/globalStyles.js';
import ModalSelector from 'react-native-modal-selector';
import Icon from 'react-native-vector-icons/FontAwesome';


const Payment = ({ navigation }) => {

  const [selectedValue1, setSelectedValue1] = useState(null);

  const paymentData = [
    { key: 1, label: 'PSE' },
    { key: 2, label: 'Tarjeta de credito' },
    { key: 3, label: 'efecty' },
  ];

  return (
    <View style={{ backgroundColor: 'white' }}>
      <View style={{ padding: 15 }}>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
          <Text style={styles.subtitulo}> Metodo de envío </Text>
          <Text>
            <Icon name="truck" style={{ transform: [{ rotateY: '180deg' }] }} size={30} color="#69A148" />
          </Text>
        </View>
        <Text> Ingrese la direccion de entrega</Text>
        <TextInput style={styles.input} placeholder="Dirección" maxLength={30} />
      </View>
      <View style={{ padding: 15 }}>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
          <Text style={styles.subtitulo}> Metodo de pago </Text>
          <Text>
         
          </Text>
        </View>
        <ModalSelector
          data={paymentData}
          initValue="Selecciona metodo de pago"
          onChange={(option) => {
            setSelectedValue1(option.label);

          }}
        />
        <Text style={styles.selectedText}>Seleccionado: {selectedValue1}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Payment')}
      >
        <Text style={styles.buttonText}>Pagar</Text>

      </TouchableOpacity>
    </View>
  );
};
export default Payment;