import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const categories = [
    { id: '0', name: 'Todos' },
    { id: '1', name: 'celular' },
    { id: '2', name: 'computador' },
    { id: '3', name: 'audio' },
    { id: '4', name: 'accesorios' },
];

const ArticlesCategory = ({ onSelectCategory }) => {
    const [selectedCategory, setSelectedCategory] = useState('Todos');

    const handleCategoryPress = (category) => {
        setSelectedCategory(category);
        onSelectCategory(category === 'Todos' ? null : category);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={categories}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={[
                            styles.categoryButton,
                            selectedCategory === item.name && styles.categoryButtonSelected
                        ]}
                        onPress={() => handleCategoryPress(item.name)}
                    >
                        <Text
                            style={[
                                styles.categoryText,
                                selectedCategory === item.name && styles.categoryTextSelected
                            ]}
                        >
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                )}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 40,
        marginVertical: 10,
    },
    categoryButton: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginRight: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        alignItems: 'center',
    },
    categoryButtonSelected: {
        backgroundColor: '#007bff',
    },
    categoryText: {
        fontSize: 14,
        color: '#333',
    },
    categoryTextSelected: {
        color: '#fff',
    },
});

export default ArticlesCategory;
