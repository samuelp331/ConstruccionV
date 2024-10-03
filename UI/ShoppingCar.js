import { React, useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import styles from '../styles/globalStyles.js';
import Icon from 'react-native-vector-icons/FontAwesome';

const articles = [
  {
    id: 1,
    articlePicture:
      'https://i.blogs.es/81640c/xiaomi-redmi-note-13-impresiones/1366_2000.jpeg',
    articleName: 'Celular',
    articleDescription: 'Es un celular',
    articleValue: 1500000,
    quantity: 1, // Cantidad por defecto
  },
  {
    id: 2,
    articlePicture:
      'https://i.blogs.es/1234/legend-of-zelda-tears/1366_2000.jpeg',
    articleName: 'Nintendo Switch Game',
    articleDescription: 'The Legend of Zelda: Tears of the Kingdom',
    articleValue: 599000,
    quantity: 1,
  },
];

const Item = ({ article, onQuantityChange }) => (
  <View style={styles.card}>
    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'top' }}>
      <View >
        <Image source={{ uri: article.articlePicture }} style={styles.picture} />
      </View>
      <View style={{ flex: 1, marginLeft: 10 }}>
        <Text style={styles.name}>{article.articleName}</Text>
        <View style={{ display: 'flex', flexDirection: 'row', gap: 5 }}>
          <TouchableOpacity onPress={() => onQuantityChange(article.id, -1)}>
            <Icon name="minus-circle" size={24} color="#69A148" />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{article.quantity}</Text>
          <TouchableOpacity onPress={() => onQuantityChange(article.id, 1)}>
            <Icon name="plus-circle" size={24} color="#69A148" />
          </TouchableOpacity>
          <Text style={styles.price}>${article.articleValue}</Text>
        </View>
      </View>
    </View>

  </View>
);

const ShoppingCar = ({ navigation }) => {
  const [cant, setCant] = useState('');
  const [errorCant, setErrorCant] = useState('');
  const [items, setItems] = useState(articles);

  const validateCant = text => {
    setCant(text);
    if (!text.match(/[0-9]/g)) {
      setErrorCant('La cantidad no es valida');
    } else {
      setErrorCant('');
    }
  };

  const handleQuantityChange = (id, amount) => {
    const updatedItems = items.map(item => {
      if (item.id === id && item.quantity + amount >= 0) {
        return { ...item, quantity: item.quantity + amount };
      }
      return item;
    });
    setItems(updatedItems);
  };

  return (
    <View style={{ backgroundColor: '#ffffff38', flex: 1 }}>
      <View style={{ alignItems: 'center' }} >

      </View>
      {/* FlatList para los artículos */}
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <Item article={item} onQuantityChange={handleQuantityChange} />
        )}
        keyExtractor={article => article.id.toString()}
      />

      {/* Botón de Checkout */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Payment')}
      >
        <Text style={styles.buttonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShoppingCar;