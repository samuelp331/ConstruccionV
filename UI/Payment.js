import { React, useState } from 'react';
import { View, Text, Image, FlatList, TextInput, TouchableOpacity } from 'react-native';
import styles from '../styles/globalStyles.js';
import ModalSelector from 'react-native-modal-selector';
import Icon from 'react-native-vector-icons/FontAwesome';

const articles = [
  {
    id: 1,
    articlePicture:
      'https://i.blogs.es/81640c/xiaomi-redmi-note-13-impresiones/1366_2000.jpeg',
    articleName: 'Samsung A51',
    articleCant: 2,
    articleValue: 1500000,
    totalValue: 3000000,
  },
  {
    id: 2,
    articlePicture:
      'https://th.bing.com/th/id/OIP._ZKWuHh3gK7B8LYdzb2dZQAAAA?rs=1&pid=ImgDetMain',
    articleName: 'Nintendo Switch Game',
    articleCant: 1,
    articleValue: 1500000,
    totalValue: 3000000,
  },
];

const Item = ({ article }) => (

  <View style={{ backgroundColor: 'white', padding: 10 }}>
    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'top' }}>
      <View >
        <Image source={{ uri: article.articlePicture }} style={styles.picture} />
      </View>
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={styles.name}>{article.articleName}</Text>
        <Text> Cantidad {article.articleCant}</Text>
        <Text> Valor: ${article.articleValue}</Text>
        <Text> Valor total: ${article.totalValue}</Text>
      </View>
    </View>
    <View style={styles.hr} />
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
    <View style={{ backgroundColor: 'white' }}>
      <FlatList
        data={articles}
        renderItem={({ item }) => <Item article={item} />}
        keyExtractor={article => article.id.toString()}
      />

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
            <Icon name="card" style={{ transform: [{ rotateY: '180deg' }] }} size={30} color="#69A148" />
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