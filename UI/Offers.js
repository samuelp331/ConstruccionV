import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from '../styles/globalStyles.js';

const articles = [
    {
        id: 1,
        articlePicture: 'https://i.blogs.es/81640c/xiaomi-redmi-note-13-impresiones/1366_2000.jpeg',
        articleName: 'Celular',
        articleDescription: 'Es un celular',
        articleValue: 1500000,
        descuento: '5%'
    },
    {
        id: 2,
        articlePicture: 'https://i.blogs.es/ed843e/superpc-ap/450_1000.jpeg',
        articleName: 'Computador',
        articleDescription: 'Es un computador',
        articleValue: 3500000,
        descuento: '20%'
    },
    {
        id: 3,
        articlePicture: 'https://i.blogs.es/81640c/xiaomi-redmi-note-13-impresiones/1366_2000.jpeg',
        articleName: 'Celular',
        articleDescription: 'Es un celular',
        articleValue: 1500000,
        descuento: '35%'
    },
    {
        id: 4,
        articlePicture: 'https://i.blogs.es/ed843e/superpc-ap/450_1000.jpeg',
        articleName: 'Computador',
        articleDescription: 'Es un computador',
        articleValue: 3500000,
        descuento: '60%'
    }
];

const Item = ({ article, navigation }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ArticlesDetails', { article: article[1] })}>
        <View style={styles.row}>
            <View>
                <View style={styles.row}>
                    <Text style={styles.title1}>{article.articleName}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.subtitle}> Descripción: </Text>
                    <Text style={styles.text2}>{article.articleDescription}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.subtitle}> Valor: </Text>
                    <Text style={styles.text2}>{article.articleValue}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.subtitle}> descuento: </Text>
                    <Text style={styles.text2}>{article.descuento}</Text>
                </View>
            </View>
            <View style={styles.containerImage}>
                <Image source={{ uri: article.articlePicture }} style={styles.picture} />
            </View>
        </View>
    </TouchableOpacity >
);

const Offers = ({ navigation }) => {
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


export default Offers;
