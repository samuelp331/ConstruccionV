import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from '../styles/globalStyles.js';

const articles = [
  {
    id: 1,
    articlePicture: 'https://i.blogs.es/81640c/xiaomi-redmi-note-13-impresiones/1366_2000.jpeg',
    articleName: 'Celular',
    articleDescription: 'Es un celular',
    articleValue: 1500000
  },
  {
    id: 2,
    articlePicture: 'https://i.blogs.es/ed843e/superpc-ap/450_1000.jpeg',
    articleName: 'Computador',
    articleDescription: 'Es un computador',
    articleValue: 3500000
  },
  {
    id: 3,
    articlePicture: 'https://i.blogs.es/81640c/xiaomi-redmi-note-13-impresiones/1366_2000.jpeg',
    articleName: 'Celular',
    articleDescription: 'Es un celular',
    articleValue: 1500000
  },
  {
    id: 4,
    articlePicture: 'https://i.blogs.es/ed843e/superpc-ap/450_1000.jpeg',
    articleName: 'Computador',
    articleDescription: 'Es un computador',
    articleValue: 3500000
  },
  {
    id: 5,
    articlePicture: 'https://i.blogs.es/81640c/xiaomi-redmi-note-13-impresiones/1366_2000.jpeg',
    articleName: 'Celular',
    articleDescription: 'Es un celular',
    articleValue: 1500000
  },
  {
    id: 6,
    articlePicture: 'https://i.blogs.es/ed843e/superpc-ap/450_1000.jpeg',
    articleName: 'Computador',
    articleDescription: 'Es un computador',
    articleValue: 3500000
  },
  {
    id: 7,
    articlePicture: 'https://i.blogs.es/81640c/xiaomi-redmi-note-13-impresiones/1366_2000.jpeg',
    articleName: 'Celular',
    articleDescription: 'Es un celular',
    articleValue: 1500000
  },
  {
    id: 8,
    articlePicture: 'https://i.blogs.es/ed843e/superpc-ap/450_1000.jpeg',
    articleName: 'Computador',
    articleDescription: 'Es un computador',
    articleValue: 3500000
  },
];

const Item = ({ article, navigation }) => (
  <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ArticlesDetails', { article: article })}>
    <View >
      <View style={styles.containerImage}>
        <Image source={{ uri: article.articlePicture }} style={styles.picture} />
      </View>
      <View style={styles.row}>
        <Text style={styles.title1}>{article.articleName}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.contextDetail}>{article.articleDescription}</Text>
      </View>
      <View style={styles.element}>
        <Text $style={styles.text}> ${article.articleValue} </Text>
      </View>
      <TouchableOpacity style={styles.button}
        activeOpacity={0.7}
        onPress={() => navigation.navigate('ShoppingCar')}>
        <Text style={styles.buttonText}>Agregar</Text>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

const ArticlesCard = ({ navigation }) => {
  return (
    <View style={styles.Detailcontainer}>
      <FlatList
        data={articles}
        renderItem={({ item }) => <Item article={item} navigation={navigation} />}
        keyExtractor={(article) => article.id.toString()}
        numColumns={2} // Mostrar 2 columnas
      />
    </View>
  )
}


export default ArticlesCard;
