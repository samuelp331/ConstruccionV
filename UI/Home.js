import React from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importa el ícono que necesites
import styles from '../styles/globalStyles.js';
import ArticlesCategory from './ArticlesCategories.js';

const Home = ({ navigation }) => {
    const handleNavigateToOffers = () => {
        navigation.navigate('Offers'); // Cambia 'Offers' por el nombre de tu ruta
    };

    return (
        <View style={Homestyles.container}>
            <View style={Homestyles.searchContainer}>
                <TextInput
                    style={Homestyles.input}
                    placeholder="Buscar productos"
                />
                <TouchableOpacity
                    style={Homestyles.button}
                    onPress={handleNavigateToOffers}
                >
                    <Text style={Homestyles.buttonText}>Ofertas</Text>
                </TouchableOpacity>
            </View>

            <ArticlesCategory />
        </View>
    );
};

const Homestyles = StyleSheet.create({
    container: {
        flex: 1, // Permitir que el contenedor ocupe todo el espacio disponible
        padding: 10, // Añadir un poco de padding
    },
    searchContainer: {
        flexDirection: 'row', // Mantener la fila solo para el buscador y el botón
        alignItems: 'center',
        marginBottom: 10, // Espacio entre el buscador y las categorías
    },
    input: {
        flex: 0.75, // Ocupa el 75% del espacio
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginRight: 10, // Espacio a la derecha del input
    },
    button: {
        flex: 0.25, // Ocupa el 25% del espacio
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#007bff',
        borderRadius: 5,
        height: 40,
    },
    buttonText: {
        color: '#fff',
        marginLeft: 5,
    },
});

export default Home;
