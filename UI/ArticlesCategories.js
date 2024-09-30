import React from 'react';
import { View, Text, Image, FlatList, ScrollView } from 'react-native';
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
    <View>
        <ScrollView
            horizontal={true}
        >
            <View style={styles.containerImage}>
                <Image source={{ uri: article.articlePicture }} style={styles.picture} /></View>
            <View style={styles.row}>
                <Text style={styles.title1}>{article.articleName}</Text>
            </View>
        </ScrollView>
    </View>
);


const ArticlesCategory = ({ navigation }) => {
    return (
        <View>
            <Text> App Meli</Text>
            <FlatList
                data={articles}
                renderItem={({ item }) => <Item article={item} navigation={navigation} />}
                keyExtractor={(article) => article.id.toString()}
            />
        </View>
    )
}


export default ArticlesCategory;
