import { React, useState, useEffect } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import styles from '../styles/globalStyles.js';
import firestore from '@react-native-firebase/firestore';


const Item = ({ article, navigation }) => (
    <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ArticlesDetails', { article })}>
        <View>
            <View style={styles.iconContainer}>
                <Text>❤</Text>
            </View>
            <View style={styles.containerImage}>
                <Image source={{ uri: article.articlePicture }} style={styles.picture} />
            </View>

            <View style={styles.row}>
                <Text style={styles.title1}>{article.articleName}</Text>
            </View>

            <View style={styles.row}>
                <Text style={styles.contextDetail}>{article.articleDescription}</Text>
            </View>

            <View style={styles.row}>
                <Text>{article.articleValue}</Text>
                <Text>{article.status}</Text>
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
    </TouchableOpacity>
);
const MyFavourites = ({ navigation }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const articlesCollection = await firestore().collection('favorites').get();
                const articlesList = articlesCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));

                // Log para depurar
                console.log("Articles fetched:", articlesList);

                setArticles(articlesList);
            } catch (error) {
                console.error("Error fetching articles:", error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <View>
            <FlatList
                data={articles}
                renderItem={({ item }) => <Item article={item} navigation={navigation} />}
                keyExtractor={(article) => article.id.toString()}
                contentContainerStyle={{ paddingBottom: 100 }} // Espacio adicional si es necesario
            />
        </View>
    );
};

export default MyFavourites;
