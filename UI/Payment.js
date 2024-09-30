import {React, useState} from 'react';
import {View, Text, Image, FlatList, TextInput} from 'react-native';
import styles from '../styles/globalStyles.js';
import ModalSelector from 'react-native-modal-selector';

const articles = [
  {
    id: 1,
    articlePicture:
      'https://i.blogs.es/81640c/xiaomi-redmi-note-13-impresiones/1366_2000.jpeg',
    articleName: 'Celular',
    articleCant: 2,
    articleValue: 1500000,
    totalValue: 3000000,
  },
];

const Item = ({article}) => (
  <View style={styles.card}>
    <Image source={{uri: article.articlePicture}} style={styles.picture} />
    <Text style={styles.name}> Nombre del producto: {article.articleName}</Text>
    <Text> Cantidad {article.articleCant}</Text>
    <Text> Valor: {article.articleValue}</Text>
    <Text> Valor total: {article.totalValue}</Text>
  </View>
);



const Payment = () => {

  const [selectedValue1, setSelectedValue1] = useState(null);

const paymentData = [
  { key: 1, label: 'PSE' },
  { key: 2, label: 'Tarjeta de credito' },
  { key: 3, label: 'efecty' },
];

  return (
    <View>
      <View>
        <Text style={styles.title}>Sucursal de pago</Text>
      </View>
      <FlatList
        data={articles}
        renderItem={({item}) => <Item article={item} />}
        keyExtractor={article => article.id.toString()}
      />

      <Text> Ingrese la direccion de entrega</Text>
      <TextInput placeholder="Dirección" maxLength={30} />

      <Text> Ingrese el metodo de pago</Text>
      <ModalSelector
        data={paymentData}
        initValue="Selecciona metodo de pago"
        onChange={(option) => {
          setSelectedValue1(option.label);
  
        }}
      />
      <Text style={styles.selectedText}>Selected: {selectedValue1}</Text>

    </View>
  );
};
export default Payment;