import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from '../styles/globalStyles.js';



const ArticlesCard = ({ articles, navigation }) => {


  const Item = ({ article }) => (
    <TouchableOpacity style={styles.article} onPress={() => navigation.navigate('ArticlesDetails', { article: article })}>
      <View>
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
          <Text style={styles.text}> ${article.articleValue} </Text>
        </View>
        <TouchableOpacity style={styles.button}
          activeOpacity={0.7}
          onPress={() => navigation.navigate('Carrito de compras')}>
          <Text style={styles.buttonText}>Agregar</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (

    <FlatList
      data={articles} // Usa los artículos filtrados
      renderItem={({ item }) => <Item article={item} />}
      keyExtractor={(article) => article.id.toString()}
      numColumns={2} // Mostrar 2 columnas
    />
  );
}

export default ArticlesCard;
