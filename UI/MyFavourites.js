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
        status: "Disponible"
    },
    {
        id: 2,
        articlePicture: 'https://i.blogs.es/ed843e/superpc-ap/450_1000.jpeg',
        articleName: 'Computador',
        articleDescription: 'Es un computador',
        articleValue: 3500000,
        status: "Disponible"
    },
    {
        id: 3,
        articlePicture: 'https://i.blogs.es/81640c/xiaomi-redmi-note-13-impresiones/1366_2000.jpeg',
        articleName: 'Celular',
        articleDescription: 'Es un celular',
        articleValue: 1500000,
        status: "Disponible"
    },
    {
        id: 4,
        articlePicture: 'https://i.blogs.es/ed843e/superpc-ap/450_1000.jpeg',
        articleName: 'Computador',
        articleDescription: 'Es un computador',
        articleValue: 3500000,
        status: "Disponible"
    },
    {
        id: 5,
        articlePicture: 'https://i.blogs.es/81640c/xiaomi-redmi-note-13-impresiones/1366_2000.jpeg',
        articleName: 'Celular',
        articleDescription: 'Es un celular',
        articleValue: 1500000,
        status: "No disponible"
    },
    {
        id: 6,
        articlePicture: 'https://i.blogs.es/ed843e/superpc-ap/450_1000.jpeg',
        articleName: 'Computador',
        articleDescription: 'Es un computador',
        articleValue: 3500000,
        status: "Disponible"
    },
    {
        id: 7,
        articlePicture: 'https://i.blogs.es/81640c/xiaomi-redmi-note-13-impresiones/1366_2000.jpeg',
        articleName: 'Celular',
        articleDescription: 'Es un celular',
        articleValue: 1500000,
        status: "No disponible"
    },
    {
        id: 8,
        articlePicture: 'https://i.blogs.es/ed843e/superpc-ap/450_1000.jpeg',
        articleName: 'Computador',
        articleDescription: 'Es un computador',
        articleValue: 3500000,
        status: "No disponible"
    },
];

const Item = ({ article, navigation }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ArticlesDetails', { article: article[1] })}>
        <View>
            <View style={styles.iconContainer}>
                <Text>❤</Text>
            </View>
            <View style={styles.containerImage}>


                <View style={styles.row}>
                    <Text style={styles.title1}>{article.articleName}</Text>
                </View>

                <View style={styles.row}>
                    <Text style={styles.contextDetail}>{article.articleDescription}</Text>
                </View>

                <View style={styles.row}>
                    <Text >{article.articleValue}</Text>
                    <Text >{article.status}</Text>
                </View>


                {article.status === "Disponible" && (
                    <TouchableOpacity
                        style={styles.button}
                        activeOpacity={0.7}
                        onPress={() => navigation.navigate('ShoppingCar')}
                    >
                        <Text style={styles.buttonText}>Agregar carrito</Text>
                    </TouchableOpacity>
                )}
            </View>
        </View>
    </TouchableOpacity >
);

const MyFavourites = ({ navigation }) => {
    return (
        <View>
            <FlatList
                data={articles}
                renderItem={({ item }) => <Item article={item} navigation={navigation} />}
                keyExtractor={(article) => article.id.toString()}
            />
        </View>
    )
}


export default MyFavourites;
