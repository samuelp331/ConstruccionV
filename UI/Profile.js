import React from 'react';
import { View, Text, Image,StyleSheet  } from 'react-native';
//import styles from '../styles/globalStyles.js';

const Profile = () => {
    return (
        <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
        source={{ uri: 'https://images.squarespace-cdn.com/content/v1/5d77a7f8ad30356d21445262/1695000300830-5TKAFHC2EBYTTM2QUWUP/fotos-de-perfil-blanco-y-negro.jpg' }}
          style={styles.profileImage}
        />
        <Text style={styles.name}>Jhon Doe</Text>
        <Text style={styles.title}>15 de enero de 2003</Text>
      </View>

    </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    profileHeader: {
      alignItems: 'center',
      padding: 20,
    },
    profileImage: {
      width: 100,
      height: 100,
      borderRadius: 50,
      borderColor: '#000000',
      marginBottom: 10,
    },
    name: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    title: {
      fontSize: 16,
      color: '#666',
    },
    // Add more styles as needed
  });
export default Profile;