import { React } from 'react';
import { View, Text, Image, Button, TouchableOpacity, FlatList } from 'react-native';
import styles from '../styles/globalStyles.js';

const articles = [
    {
        id: 1,
        articlePicture:
            'https://i.blogs.es/81640c/xiaomi-redmi-note-13-impresiones/1366_2000.jpeg',
        articleName: 'Celular',
        articleDescription: 'Es un celular',
        articleValue: 1500000,
    },
];

const Item = ({ article }) => (
    <View >
        <View>
            <Image source={{ uri: article.articlePicture }} style={styles.imageDetails}></Image>
        </View>
        <View style={styles.row}>
            <Text style={styles.title1}>Celular</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.subtitle}> Descripción: </Text>
            <Text style={styles.text2}>'Es un celular'</Text>
        </View>
        <View style={styles.row}>
            <Text style={styles.subtitle}> Valor: </Text>
            <Text style={styles.text2}>Es un celular</Text>
        </View>
        <TouchableOpacity style={styles.button}
            activeOpacity={0.7}
            onPress={() => navigation.navigate('ShoppingCar')} >
            <Text style={styles.buttonText}>Agregar carrito</Text>
        </TouchableOpacity>
    </View>
);
const ArticlesDetails = () => {

    return (
        <View>
            <View>
                <Text style={styles.title}>Mi carrito de compras</Text>
            </View>
            <FlatList
                data={articles}
                renderItem={({ item }) => <Item article={item} />}
                keyExtractor={article => article.id.toString()}
            />

        </View>
    );
};
export default ArticlesDetails;