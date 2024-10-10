import { React, useState} from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import styles from '../styles/globalStyles.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';

const articles = [

  {
    id: 1,
    articlePicture:
      'https://i.blogs.es/81640c/xiaomi-redmi-note-13-impresiones/1366_2000.jpeg',
    articleName: 'Celular',
    articleDescription: 'Es un celular',
    articleValue: 150.000,
    quantity: 1, // Cantidad por defecto
  },
  {
    id: 2,
    articlePicture:
      'https://i.blogs.es/1234/legend-of-zelda-tears/1366_2000.jpeg',
    articleName: 'Nintendo Switch Game',
    articleDescription: 'The Legend of Zelda: Tears of the Kingdom',
    articleValue: 99.999,
    quantity: 1,
  },
  {
    id: 3,
    articlePicture:
      'https://th.bing.com/th/id/OIP._ZKWuHh3gK7B8LYdzb2dZQAAAA?rs=1&pid=ImgDetMain',
    articleName: 'Nintendo Switch Game',
    articleDescription: 'The Legend of Zelda: Tears of the Kingdom',
    articleValue: 59.900,
    quantity: 1,
  },
];



const Item = ({ article, onQuantityChange }) => (
  <View style={{ backgroundColor: 'white', padding: 20 }}>
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
          <Text style={styles.price}>${article.articleValue.toLocaleString('es-CO', { style: 'currency', currency: 'COP' })}</Text>
        </View>
      </View>
    </View>
    <View style={styles.hr} />
  </View>
);
const ShoppingCar = ({ navigation }) => {
  const [items, setItems] = useState(articles);

  // Función para calcular el total
  const calculateTotal = () => {
    return items.reduce((sum, item) => sum + item.articleValue * item.quantity, 0);
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
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ height: '60%' }}>
        <FlatList
          data={items} 
          renderItem={({ item }) => (
            <Item article={item} onQuantityChange={handleQuantityChange} />
          )}
          keyExtractor={article => article.id.toString()}
        />
      </View>

      <View style={{ flex: 1, padding: 20 }}>
        <Text style={styles.title1}>Total: ${calculateTotal()}</Text> 
        <Text style={styles.title1}>Tasa de servicio</Text>
        <Text style={styles.title1}>Descuentos</Text>
      </View>

      <View style={styles.hr} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Payment')}
      >
        <Text style={styles.buttonText}>Pagar</Text>
      </TouchableOpacity>
    </View>
  );

};

export default ShoppingCar;