import { React, useState, useEffect} from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, FlatList } from 'react-native';
import styles from '../styles/globalStyles.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import firestore from '@react-native-firebase/firestore';


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
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const articlesCollection = await firestore().collection('shopping-cart').get();
      const articlesList = articlesCollection.docs.map(doc => ({ id: doc.id, ...doc.data(), quantity: 1 })); // Asegúrate de tener una cantidad inicial
      setArticles(articlesList);
    };

    fetchArticles();
  }, []);

  // Función para calcular el total
  const calculateTotal = () => {
    return articles.reduce((sum, item) => sum + item.articleValue * item.quantity, 0);
  };

  const handleQuantityChange = (id, amount) => {
    const updatedItems = articles.map(item => {
      if (item.id === id && item.quantity + amount >= 0) {
        return { ...item, quantity: item.quantity + amount };
      }
      return item;
    });
    setArticles(updatedItems);
  };

  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <View style={{ height: '60%' }}>
        <FlatList
          data={articles} 
          renderItem={({ item }) => (
            <Item article={item} onQuantityChange={handleQuantityChange} />
          )}
          keyExtractor={article => article.id.toString()}
        />
      </View>

      <View style={{ flex: 1, padding: 20 }}>
        <Text style={styles.title1}>Total: {calculateTotal()}</Text> 
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