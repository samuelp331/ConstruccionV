import { React } from 'react';
import { View, Text, Image, Button, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import styles from '../styles/globalStyles.js';
import colortheme from '../styles/colors.js';
import { color } from 'react-native-elements/dist/helpers/index.js';
import { opacity } from 'react-native-reanimated/lib/typescript/Colors.js';

const articles = [
    {
        id: 1,
        articlePicture: 'https://i.blogs.es/81640c/xiaomi-redmi-note-13-impresiones/1366_2000.jpeg',
        articleName: 'Celular',
        articleDescription: 'Es un celular',
        articleValue: 1500000,
    },
];

const Item = ({ article }) => (
    <View >
        <Image source={{ uri: article.articlePicture }} style={styles.pictureDetaile} />
        <View style={Detailtyles.container}>
            <View style={Detailtyles.row}>
                <Text style={styles.title1}>Celular</Text>
            </View>
            <View style={styles.element}>
                <Text style={styles.title}>$399.999</Text>
            </View>
            <View style={Detailtyles.row}>
                <Text style={styles.contextDetail}>Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                     quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
            </View>

            <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={() => navigation.navigate('ShoppingCar')}>
                <Text style={styles.buttonText}>Agregar carrito</Text>
            </TouchableOpacity>
        </View>
    </View>
);
const ArticlesDetails = () => {

    return (
        <View>
            <FlatList
                data={articles}
                renderItem={({ item }) => <Item article={item} />}
                keyExtractor={article => article.id.toString()}
            />

        </View>
    );
};

const Detailtyles = StyleSheet.create({
    container: {
        backgroundColor: '#fff', // Fondo blanco para simular la tarjeta
        padding: 20, // Espacio interno dentro de la tarjeta
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        height: '100'
    },
    row: {
        flexDirection: 'row', // Alineación horizontal
        justifyContent: 'space-between', // Espacio entre los elementos
        marginBottom: 20, // Espacio entre filas
    },

});

export default ArticlesDetails;