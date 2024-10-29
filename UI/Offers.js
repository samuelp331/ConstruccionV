import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native';
import styles from '../styles/globalStyles.js';

const articles = [
    {
        id: 1,
        articlePicture: 'https://i.blogs.es/81640c/xiaomi-redmi-note-13-impresiones/1366_2000.jpeg',
        articleName: 'Celular',
        articleDescription: 'Es un celular',
        articleValue: 1500000,
        descuento: '5'
    },
    {
        id: 2,
        articlePicture: 'https://i.blogs.es/ed843e/superpc-ap/450_1000.jpeg',
        articleName: 'Computador',
        articleDescription: 'Es un computador',
        articleValue: 3500000,
        descuento: '20'
    },
    {
        id: 3,
        articlePicture: 'https://i.blogs.es/81640c/xiaomi-redmi-note-13-impresiones/1366_2000.jpeg',
        articleName: 'Celular',
        articleDescription: 'Es un celular',
        articleValue: 1500000,
        descuento: '35'
    },
    {
        id: 4,
        articlePicture: 'https://i.blogs.es/ed843e/superpc-ap/450_1000.jpeg',
        articleName: 'Computador',
        articleDescription: 'Es un computador',
        articleValue: 3500000,
        descuento: '60'
    }
];



const offersStyles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        flexDirection: 'row', // Arrange image and content side-by-side
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Align items horizontally
        marginBottom: 5,
    },
    title1: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333', // Adjust text color for better contrast
    },
    subtitle: {
        fontSize: 14,
        color: '#666', // Subdued color for labels
    },
    text2: {
        fontSize: 16,
        color: '#333',
    },
    containerImage: {
        width: 100,
        height: 100,
        borderRadius: 5, // Rounded image corners
        overflow: 'hidden', // Prevent image overflow
    },
    picture: {
        width: '100%',
        height: '100%',
    },
    discountContainer: {
        backgroundColor: '#f0f8ff', // Light blue background for discount
        borderRadius: 5,
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center', // Align discount text and icon vertically
    },
    discountText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#3399ff', // Blue color for discount
    },
    discountIcon: {
        fontSize: 16,
        color: '#3399ff', // Blue color for discount icon
        marginLeft: 5,
    },
});

const Item = ({ article, navigation }) => (
    <TouchableOpacity style={offersStyles.card} onPress={() => navigation.navigate('ArticlesDetails', { article })}>
        <View style={{ flex: 1 }}>
            <View style={offersStyles.row}>
                <Text style={offersStyles.title1}>{article.articleName}</Text>
            </View>
            <View style={offersStyles.row}>
                <Text style={offersStyles.subtitle}>Descripción: </Text>
                <Text style={offersStyles.text2}>{article.articleDescription.substring(0, 30) + (article.articleDescription.length > 30 ? '...' : '')}</Text>
            </View>
            <View style={offersStyles.row}>
                <Text style={offersStyles.subtitle}>Valor: </Text>
                <Text style={offersStyles.text2}>{article.articleValue}</Text>
            </View>
            {article.descuento && ( // Conditionally render discount if available
                <View style={offersStyles.discountContainer}>
                    <Text style={offersStyles.discountText}>Descuento: </Text>
                    <Text style={offersStyles.discountText}>{article.descuento}%</Text>
                    <Text style={offersStyles.discountIcon}>%</Text>
                </View>
            )}
        </View>
        <View style={offersStyles.containerImage}>
            <Image source={{ uri: article.articlePicture }} style={offersStyles.picture} />
        </View>
    </TouchableOpacity>
);

const Offers = ({ navigation }) => {
    return (
        <View>
            <FlatList
                data={articles}
                renderItem={({ item }) => <Item article={item} navigation={navigation} />}
                keyExtractor={(article) => article.id.toString()}
            />
        </View>
    );
};

export default Offers;