import React from 'react';
import {View, Text, FlatList, StyleSheet, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const articles = [
    {
        id: '01',
        status: "CANCELADO",
        products: [
            {id: 0,articlePicture: 'https://i.blogs.es/81640c/xiaomi-redmi-note-13-impresiones/1366_2000.jpeg',articleName: 'Celular',articleDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',articleValue: 1500000,},            
            {id: 1,articlePicture: 'https://i.blogs.es/81640c/xiaomi-redmi-note-13-impresiones/1366_2000.jpeg',articleName: 'Celular',articleDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',articleValue: 1500000,},
            {id: 2,articlePicture: 'https://i.blogs.es/81640c/xiaomi-redmi-note-13-impresiones/1366_2000.jpeg',articleName: 'Celular',articleDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',articleValue: 1500000,},
            {id: 3,articlePicture: 'https://i.blogs.es/81640c/xiaomi-redmi-note-13-impresiones/1366_2000.jpeg',articleName: 'Celular',articleDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',articleValue: 1500000,},
            {id: 4,articlePicture: 'https://i.blogs.es/81640c/xiaomi-redmi-note-13-impresiones/1366_2000.jpeg',articleName: 'Celular',articleDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',articleValue: 1500000,},
            {id: 5,articlePicture: 'https://i.blogs.es/81640c/xiaomi-redmi-note-13-impresiones/1366_2000.jpeg',articleName: 'Celular',articleDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',articleValue: 1500000,},
        ]
    },
    {
        id:'02',
        status: "ENVIADO",
        products: [
            {id: 1,articlePicture: 'https://i.blogs.es/ed843e/superpc-ap/450_1000.jpeg',articleName: 'Computador',articleDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',articleValue: 3500000,},
            {id: 2,articlePicture: 'https://i.blogs.es/ed843e/superpc-ap/450_1000.jpeg',articleName: 'Computador',articleDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',articleValue: 3500000,},
            {id: 3,articlePicture: 'https://i.blogs.es/ed843e/superpc-ap/450_1000.jpeg',articleName: 'Computador',articleDescription: 'Es un computador',articleValue: 3500000,},
            {id: 4,articlePicture: 'https://i.blogs.es/ed843e/superpc-ap/450_1000.jpeg',articleName: 'Computador',articleDescription: 'Es un computador',articleValue: 3500000,},
        ]
    },
    {
        id:'03',
        status: "EN TRANSITO",
        products: [
        {id: 1,articlePicture: 'https://i.blogs.es/ed843e/superpc-ap/450_1000.jpeg',articleName: 'Computador',articleDescription: 'Es un computador',articleValue: 3500000,},
        {id: 2,articlePicture: 'https://i.blogs.es/ed843e/superpc-ap/450_1000.jpeg',articleName: 'Computador',articleDescription: 'Es un computador',articleValue: 3500000,},
        {id: 3,articlePicture: 'https://i.blogs.es/ed843e/superpc-ap/450_1000.jpeg',articleName: 'Computador',articleDescription: 'Es un computador',articleValue: 3500000,},
        {id: 4,articlePicture: 'https://i.blogs.es/ed843e/superpc-ap/450_1000.jpeg',articleName: 'Computador',articleDescription: 'Es un computador',articleValue: 3500000,},
        {id: 5,articlePicture: 'https://i.blogs.es/ed843e/superpc-ap/450_1000.jpeg',articleName: 'Computador',articleDescription: 'Es un computador',articleValue: 3500000,},
        ],
    },

];
const ProductItem = ({ product }) => (
    <View style={styles.productItem}>
      <Image source={{ uri: product.articlePicture }} style={styles.productImage} />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{product.articleName}</Text>
        <Text style={styles.productDescription}>{product.articleDescription}</Text>
        <Text style={styles.totalPrice}>{product.articleValue}</Text>
      </View>
    </View>
  );

  const OrderSection = ({ item }) => (
    <View style={styles.orderSection}>
      <View style={styles.statusIndicator}>
        <Text style={styles.statusText}>{item.status}</Text>
      </View>
      <ScrollView style={styles.productList}>
        {item.products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ScrollView>
    </View>
  );
  
  const MyShoppingList = () => {
    return (
      <FlatList
        data={articles}
        renderItem={({ item }) => <OrderSection item={item} />}
        keyExtractor={(item) => item.id}
        style={styles.container}
      />
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
    },
    orderSection: {
      backgroundColor: '#ffffff',
      margin: 10,
      padding: 15,
      borderRadius: 8,
    },
    statusIndicator: {
      alignSelf: 'flex-start',
      backgroundColor: '#e0e0e0',
      paddingVertical: 5,
      paddingHorizontal: 10,
      borderRadius: 15,
      marginBottom: 10,
    },
    statusText: {
      fontWeight: 'bold',
    },
    productList: {
      height: 170, // Fixed height for scrollable area
    },
    productItem: {
      flexDirection: 'row',
      marginVertical: 10,
    },
    productImage: {
      width: 50,
      height: 50,
      marginRight: 10,
    },
    productInfo: {
      flex: 1,
    },
    productName: {
      fontWeight: 'bold',
    },
    productDescription: {
      color: '#666',
      marginVertical: 5,
    },
    totalPrice: {
      fontWeight: 'bold',
    },
  });
export default MyShoppingList;