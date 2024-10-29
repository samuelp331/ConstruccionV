import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, Alert } from 'react-native';
import styles from '../styles/globalStyles.js';
import firestore from '@react-native-firebase/firestore';


const ArticlesCard = ({ articles, navigation }) => {

  const addToCar = async (article) => {
    try {
      const existingArticleQuery = await firestore()
        .collection('shopping-cart')
        .where('articleName', '==', article.articleName)
        .get();

      if (!existingArticleQuery.empty) {
        Alert.alert("Información", "Este artículo ya está en tus favoritos.");
        return;
      }

      await firestore()
        .collection('shopping-cart')
        .add({
          articleName: article.articleName,
          articleDescription: article.articleDescription,
          articleValue: article.articleValue,
          articlePicture: article.articlePicture,
          category: article.category
        });

      Alert.alert("¡Éxito!", "Artículo agregado al carrito", [{ text: "OK" }]);
    } catch (error) {
      console.error("Error al agregar el artículo al carrito:", error);
      Alert.alert("Error", "No se pudo agregar el artículo. Inténtalo nuevamente.");
    }
  };

  const Item = ({ article }) => (
    <TouchableOpacity style={styles.article} onPress={() => navigation.navigate('ArticlesDetails', { article: article })}>
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
          <Text style={styles.text}> ${article.articleValue} </Text>
        </View>
        <TouchableOpacity style={styles.button}
          activeOpacity={0.7}
          onPress={() => addToCar(article)}>
          <Text style={styles.buttonText}>Agregar</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={articles}
      renderItem={({ item }) => <Item article={item} />}
      keyExtractor={(article) => article.id.toString()}
      numColumns={2}
    />
  );
}

export default ArticlesCard;
