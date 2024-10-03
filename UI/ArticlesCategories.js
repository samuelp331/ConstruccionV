import React from 'react';
import { View, Text, Image, FlatList, ScrollView, StyleSheet } from 'react-native';

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

const Item = ({ article }) => (
    <View style={styles.itemContainer}>
        <Image source={{ uri: article.articlePicture }} style={styles.picture} />
        <Text style={styles.title1}>{article.articleName}</Text>
    </View>
);

const ArticlesCategory = ({ navigation }) => {
    return (

        <FlatList
            data={articles}
            renderItem={({ item }) => <Item article={item} />}
            keyExtractor={(article) => article.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
        />


    )
}

const styles = StyleSheet.create({
    container: {
        height: 130,
        marginTop: 20,
    },
    itemContainer: {
        width: 100, // Ancho del item
        marginRight: 10, // Espaciado entre items
        alignItems: 'center', // Centrar elementos dentro del item
    },
    picture: {
        width: 80,
        height: 80,
        borderRadius: 10,
        // Ajusta otros estilos según sea necesario
    },
    title1: {
        marginTop: 5,
        textAlign: 'center',
        // Ajusta otros estilos según sea necesario
    },
});

export default ArticlesCategory;
