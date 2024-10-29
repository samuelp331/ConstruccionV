import React, { useReducer, useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../styles/globalStyles.js';

const QuestionsAndComments = ({ articleId }) => {
    const [inputAnswer, setInputAnswer] = useState('');
    const [inputComment, setInputComment] = useState('');
    const [inputCalification, setInputCalification] = useState(0);

    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'set_comments':
                return { ...state, comments: action.comments };
            case 'set_questions':
                return { ...state, questions: action.questions };
            case 'add_question':
                return { ...state, questions: [...state.questions, { id: state.questions.length + 1, title: action.title }] };
            case 'add_comment':
                return { ...state, comments: [...state.comments, { id: state.comments.length + 1, title: action.title, calification: action.calification }] };
            default:
                return state;
        }
    }, { questions: [], comments: [] });

    const { questions, comments } = state;

    const loadQuestions = async () => {
        try {
            const questionsSnapshot = await firestore()
                .collection('articles')
                .doc(articleId)
                .collection('questions')
                .get();

            const questionsData = questionsSnapshot.docs.map(doc => ({
                id: doc.id,
                title: doc.data().title,
            }));

            console.log("Preguntas cargadas:", questionsData); // Agrega esto para verificar
            dispatch({ type: 'set_questions', questions: questionsData });
        } catch (error) {
            console.error("Error al cargar las preguntas:", error);
        }
    };

    const loadComments = async () => {
        try {
            const commentsSnapshot = await firestore()
                .collection('articles')
                .doc(articleId)
                .collection('comments')
                .get();

            const commentsData = commentsSnapshot.docs.map(doc => ({
                id: doc.id,
                title: doc.data().title,
                calification: doc.data().calification,
            }));

            console.log("Comentarios cargados:", commentsData); // Agrega esto para verificar
            dispatch({ type: 'set_comments', comments: commentsData });
        } catch (error) {
            console.error("Error al cargar los comentarios", error);
        }
    };

    useEffect(() => {
        loadQuestions();
        loadComments(); 
    }, [articleId]);

    const submitQuestions = async () => {
        if (inputAnswer.trim() !== '') {
            try {
                await firestore()
                    .collection('articles')
                    .doc(articleId)
                    .collection('questions')
                    .add({ title: inputAnswer });

                dispatch({ type: 'add_question', title: inputAnswer });
                setInputAnswer('');
                Alert.alert("¡Éxito!", "Tu pregunta ha sido enviada", [{ text: "OK" }]);
            } catch (error) {
                console.error("Error al enviar la pregunta:", error);
                Alert.alert("Error", "No se pudo enviar tu pregunta. Inténtalo nuevamente.");
            }
        }
    };

    const submitComments = async () => {
        if (inputComment.trim() !== '' && inputCalification > 0) {
            try {
                await firestore()
                    .collection('articles')
                    .doc(articleId)
                    .collection('comments')
                    .add({ title: inputComment, calification: inputCalification });

                dispatch({ type: 'add_comment', title: inputComment, calification: inputCalification });
                setInputComment('');
                setInputCalification(0);
                Alert.alert("¡Éxito!", "Tu comentario ha sido enviado", [{ text: "OK" }]);
            } catch (error) {
                console.error("Error al enviar el comentario:", error);
                Alert.alert("Error", "No se pudo enviar el comentario. Inténtalo nuevamente.");
            }
        } else {
            Alert.alert("Error", "Por favor, ingresa un comentario y calificación válida.");
        }
    };

    return (
        <View style={{ marginVertical: 10 }}>
            <Text style={styles.title}>Preguntas</Text>
            <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                <TextInput
                    style={[styles.input, { flex: 1 }]}
                    placeholder="Pregunte"
                    value={inputAnswer}
                    onChangeText={setInputAnswer}
                />
                <TouchableOpacity style={{ marginLeft: 10 }} onPress={submitQuestions}>
                    <Icon name="send" size={24} color="#69A148" />
                </TouchableOpacity>
            </View>
            {questions.length > 0 ? (
                questions.map((question) => (
                    <View key={question.id} style={Detailtyles.questionContainer}>
                        <Text style={Detailtyles.questionText}>{question.title}</Text>
                    </View>
                ))
            ) : (
                <Text style={Detailtyles.noQuestionsText}>Aún no hay preguntas</Text>
            )}

            <View style={styles.hr} />

            <Text style={styles.title}>Comentarios</Text>
            <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                <TextInput
                    style={[styles.input, { flex: 1 }]}
                    placeholder="Descripción"
                    value={inputComment}
                    onChangeText={setInputComment}
                />
                <TextInput
                    style={[styles.input, { flex: 1 }]}
                    placeholder="Calificación: 1-5"
                    value={inputCalification.toString()}
                    onChangeText={(value) => setInputCalification(parseInt(value))}
                    keyboardType="numeric"
                />
                <TouchableOpacity style={{ marginLeft: 10 }} onPress={submitComments}>
                    <Icon name="plus-circle" size={24} color="#69A148" />
                </TouchableOpacity>
            </View>
            {comments.length > 0 ? (
                comments.map((comment) => (
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
        </View>
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
        backgroundColor: '#f9f9f9',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    commentText: {
        fontSize: 16,
        color: '#333',
        flex: 1,
    },
    calificationContainer: {
        backgroundColor: '#B2F2B2',
        padding: 5,
        borderRadius: 5
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


export default QuestionsAndComments;
