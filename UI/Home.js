import React, { useState, useEffect} from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import styles from '../styles/globalStyles.js';
import ArticlesCategory from './ArticlesCategories.js';
import ArticlesCard from './ArticlesCard.js';
import firestore from '@react-native-firebase/firestore';


const Home = ({ navigation }) => {
    const [searchText, setSearchText] = useState('');
    const [filteredArticles, setFilteredArticles] = useState([]);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            const articlesCollection = await firestore().collection('articles').get();
            const articlesList = articlesCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setArticles(articlesList);
        };

        fetchArticles();
    }, []);
    
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
            <View>
               <ArticlesCard articles={searchText ? filteredArticles : articles} navigation={navigation} />
            </View>
        </View>
    );
};

const Homestyles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        marginBottom: 10
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
