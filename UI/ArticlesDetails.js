import React, { useReducer, useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, StyleSheet, Platform, Alert, ScrollView } from 'react-native';
import styles from '../styles/globalStyles.js';
import Icon from 'react-native-vector-icons/FontAwesome';

const ArticlesDetails = (navigation) => {

    const receivedArticle = navigation.route.params.article;
    const article = [receivedArticle];

    const [InputAnswer, setInputAnswer] = useState('');
    const [InputComment, setInputComment] = useState('');
    const [InputCalification, setInputCalification] = useState(0);

    const [data, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'add_question':
                return {
                    ...state,
                    questions: [...state.questions, { id: state.questions.length + 1, title: action.title }],
                };
            case 'add_comment':
                return {
                    ...state,
                    comments: [...state.comments, { id: state.comments.length + 1, title: action.title, calification: action.calification }],
                };
            default:
                return state;
        }
    }, { questions: [], comments: [] });

    const submitQuestions = () => {
        if (InputAnswer.trim() !== '') {
            dispatch({
                type: 'add_question',
                title: InputAnswer,
            });
            setInputAnswer('');
            Alert.alert("¡Éxito!", "Tu pregunta ha sido enviada", [{ text: "OK" }]);
        }
    };

    const submitComments = () => {
        if (InputComment.trim() !== '' && InputCalification > 0) {
            dispatch({
                type: 'add_comment',
                title: InputComment,
                calification: InputCalification,
            });
            setInputComment('');
            setInputCalification(0);
        } else {
            Alert.alert("Error", "Por favor, ingresa un comentario y calificación válida.");
        }
    };

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

                        <View style={{ marginVertical: 10 }}>
                            <Text style={styles.title}>Preguntas</Text>
                            <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                                <TextInput
                                    style={[styles.input, { flex: 1 }]}
                                    placeholder="Pregunte"
                                    value={InputAnswer}
                                    onChangeText={setInputAnswer}
                                />
                                <TouchableOpacity style={{ marginLeft: 10 }} onPress={submitQuestions}>
                                    <Icon name="send" size={24} color="#69A148" />
                                </TouchableOpacity>
                            </View>
                            {data.questions.length > 0 ? (
                                data.questions.map((question) => (
                                    <View key={question.id} style={Detailtyles.questionContainer}>
                                        <Text style={Detailtyles.questionText}>{question.title}</Text>
                                    </View>
                                ))
                            ) : (
                                <Text style={Detailtyles.noQuestionsText}>Aún no hay preguntas</Text>
                            )}
                            <View style={styles.hr} />
                        </View>

                        <View style={{ marginVertical: 10 }}>
                            <Text style={styles.title}>Comentarios</Text>
                            <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center', gap: 5 }}>
                                <TextInput
                                    style={[styles.input, { flex: 1 }]}
                                    placeholder="Descripción"
                                    value={InputComment}
                                    onChangeText={setInputComment}
                                />
                                <TextInput
                                    style={[styles.input, { flex: 1 }]}
                                    placeholder="Calificación: 1-5"
                                    value={InputCalification}
                                    onChangeText={(value) => setInputCalification(parseInt(value))}
                                    keyboardType="numeric"
                                />
                                <TouchableOpacity style={{ marginLeft: 10 }} onPress={submitComments}>
                                    <Icon name="plus-circle" size={24} color="#69A148" />
                                </TouchableOpacity>
                            </View>
                            {data.comments.length > 0 ? (
                                data.comments.map((comment) => (
                                    <View key={comment.id} style={Detailtyles.cardContainer}>
                                        <Text style={Detailtyles.commentText}>{comment.title}</Text>
                                        <View style={Detailtyles.calificationContainer}>
                                            <Text style={Detailtyles.calificationText}>{comment.calification}</Text>
                                        </View>
                                    </View>
                                ))
                            ) : (
                                <Text style={Detailtyles.noCommentsText}>Aún no hay comentarios</Text>
                            )}

                            <View style={styles.hr} />
                        </View>
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
