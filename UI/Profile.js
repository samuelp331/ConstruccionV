import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/globalStyles.js';

const Profile = () => {
    return (
        <View >
            <View>
                <Image source={{ uri: 'https://i.blogs.es/81640c/xiaomi-redmi-note-13-impresiones/1366_2000.jpeg' }} style={styles.imageDetails}></Image>
            </View>
            <View style={styles.row}>
                <Text style={styles.titleArt}> Maria Camila Mejia Pineda </Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text2}>15 de enero del 2003</Text>
            </View>
        </View>
    );
};
export default Profile;