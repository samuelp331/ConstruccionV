import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from '../styles/globalStyles.js';
import ArticlesCategory from './ArticlesCategories.js';
import ArticlesCard from './ArticlesCard.js';

const Home = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');
    const [filteredArticles, setFilteredArticles] = useState([]);


    const handleNavigateToOffers = () => {
        navigation.navigate('Offers');
    };


    const handleSearch = (text) => {
        setSearchText(text);
        const filtered = articles.filter(article =>
            article.articleName.toLowerCase().includes(text.toLowerCase())
        );
        setFilteredArticles(filtered);
    };

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
            articlePicture: 'https://www.toptecnouy.com/imgs/productos/productos34_32768.jpg',
            articleName: 'Auriculares',
            articleDescription: 'auriculares inalámbricos',
            articleValue: 300000
        },
        {
            id: 4,
            articlePicture: 'https://www.bhphotovideo.com/images/images2500x2500/samsung_sm_t800ntsaxar_16gb_galaxy_tab_s_1054121.jpg',
            articleName: 'Tablet',
            articleDescription: 'Es una tablet con pantalla HD',
            articleValue: 2000000
        },
        {
            id: 5,
            articlePicture: 'https://th.bing.com/th/id/OIP.Oxnl-lHygRCFDBm2zE08IAHaHa?rs=1&pid=ImgDetMain',
            articleName: 'Altavoz Bluetooth',
            articleDescription: 'Es un altavoz con alta calidad de sonido',
            articleValue: 500000
        },
        {
            id: 6,
            articlePicture: 'https://images-na.ssl-images-amazon.com/images/I/61QXVSF6bLL._AC_SL1500_.jpg',
            articleName: 'Ratón',
            articleDescription: 'Es un ratón ergonómico',
            articleValue: 150000
        }
    ];
    

    return (
        <View style={Homestyles.container}>
            <View style={Homestyles.searchContainer}>
                <TextInput
                    style={Homestyles.input}
                    placeholder="Buscar productos"
                    value={searchText}
                    onChangeText={handleSearch} // Llama a handleSearch al cambiar el texto
                />
                <TouchableOpacity
                    style={Homestyles.button}
                    onPress={handleNavigateToOffers}
                >
                    <Text style={Homestyles.buttonText}>Ofertas</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.card}>
                <Text style={styles.title}>Categorias</Text>
                <ArticlesCategory />
            </View>
            <View style={styles.card}>

                <ArticlesCard articles={searchText ? filteredArticles : articles} navigation={navigation} />
            </View>
        </View>
    );
};

const Homestyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        backgroundColor: "#fff"
    },
    input: {
        flex: 0.75, // Ocupa el 75% del espacio
        height: 40,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginRight: 10,
    },
    button: {
        flex: 0.25,
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
