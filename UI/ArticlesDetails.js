import React, { useReducer, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, StyleSheet, Platform, Alert, ScrollView } from 'react-native';
import styles from '../styles/globalStyles.js';
import QuestionsAndComments from './QuestionsAndComments'; // Importa el nuevo componente

const ArticlesDetails = (navigation) => {

    const receivedArticle = navigation.route.params.article;
    const article = [receivedArticle];

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
        >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
                <View style={{ paddingBottom: 100 }}>
                    <Image source={{ uri: article[0].articlePicture }} style={styles.pictureDetaile} />

                    <View style={Detailtyles.container}>
                        <View style={Detailtyles.row}>
                            <Text style={styles.title1}>{article[0].articleName}</Text>
                        </View>
                        <View style={styles.element}>
                            <Text style={styles.title}>${article[0].articleValue}</Text>
                        </View>
                        <View style={Detailtyles.row}>
                            <Text style={styles.contextDetail}>
                                {article[0].articleDescription}
                            </Text>
                        </View>

                        <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={() => navigation.navigate('ShoppingCar')}>
                            <Text style={styles.buttonText}>Agregar carrito</Text>
                        </TouchableOpacity>

                        <QuestionsAndComments articleId={receivedArticle.id} />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const Detailtyles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        height: '100%',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    questionContainer: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 8,
    },
    questionText: {
        fontSize: 16,
        color: '#333',
    },
    noQuestionsText: {
        fontSize: 16,
        color: '#999',
        textAlign: 'center',
        marginTop: 20,
    },
    cardContainer: {
        marginTop: 10,
        padding: 15,
        backgroundColor: '#f9f9f9', // Color de fondo de la tarjeta
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        flexDirection: 'row', // Para alinear el texto y la calificación en la misma fila
        justifyContent: 'space-between', // Para separar el comentario y la calificación
        alignItems: 'center', // Alinear verticalmente
    },
    commentText: {
        fontSize: 16,
        color: '#333',
        flex: 1, // Para que el comentario ocupe el espacio disponible
    },
    calificationContainer: {
        backgroundColor: '#B2F2B2', // Color verde claro para el fondo de la calificación
        padding: 5,
        borderRadius: 5,
    },
    calificationText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#004d00', // Color verde oscuro para el número de calificación
    },
    noCommentsText: {
        fontSize: 16,
        color: '#999',
        textAlign: 'center',
        marginTop: 20,
    }
});

export default ArticlesDetails;
