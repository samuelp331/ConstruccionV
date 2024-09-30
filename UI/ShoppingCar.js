import {React, useState} from 'react';
import {View, Text, Image, Button, TextInput, FlatList} from 'react-native';
import styles from '../styles/globalStyles.js';

const articles = [
  {
    id: 1,
    articlePicture:
      'https://i.blogs.es/81640c/xiaomi-redmi-note-13-impresiones/1366_2000.jpeg',
    articleName: 'Celular',
    articleDescription: 'Es un celular',
    articleValue: 1500000,
  },
];

const Item = ({article, navigation}) => (
  <View style={styles.card}>
    <Image source={{uri: article.articlePicture}} style={styles.picture} />
    <Text style={styles.name}> Nombre del producto: {article.articleName}</Text>
    <Text> Descripcion del producto: {article.articleDescription}</Text>
    <Text> Valor: {article.articlePrice}</Text>
  </View>
);

const ShoppingCar = ({navigation}) => {
  const [cant, setCant] = useState('');
  const [errorCant, setErrorCant] = useState('');

  const validateCant = text => {
    setCant(text);
    if (!text.match(/[0-9]/g)) {
      setErrorCant('La cantidad no es valida');
    } else {
      setErrorCant('');
    }
  };

  return (
    <View>
      <View>
        <Text style={styles.title}>Mi carrito de compras</Text>
      </View>
      <FlatList
        data={articles}
        renderItem={({item}) => <Item article={item} navigation={navigation} />}
        keyExtractor={article => article.id.toString()}
      />

      <TextInput
        placeholder="ingrese la cantidad"
        value={cant}
        maxLength={2}
        keyboardType="numeric" // Muestra el teclado numérico
        onChangeText={validateCant}
      />
      {errorCant ? <Text style={{ color: 'red' }}>{errorCant}</Text> : null}

      <Button
        title="Agregar carrito"
        onPress={() => navigation.navigate('Payment')}
      />
    </View>
  );
};
export default ShoppingCar;
