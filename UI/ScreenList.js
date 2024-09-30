import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import styles from '../styles/globalStyles.js';

const ScreenList = ({navigation}) => {
  return (
    <View>
      <View>
        <Text style={styles.title}>Lista de pantallas</Text>
      </View>
        {/* <Button 
            title="Inicio de sesion" 
            onPress={() => navigation.navigate('Login')} 
        /> */}
        <Button 
            title="Registro de usuarios" 
            onPress={() => navigation.navigate('Register')} 
        />
        <Button 
            title="Sucursal de pago" 
            onPress={() => navigation.navigate('Payment')} 
        />
        <Button 
            title="Carrito de compras" 
            onPress={() => navigation.navigate('ShoppingCar')} 
        />
        <Button 
            title="Lista y busqueda de articulos" 
            onPress={() => navigation.navigate('ArticlesCard')} 
        />
        <Button 
            title="Detalle de articulos" 
            onPress={() => navigation.navigate('ArticlesDetails')} 
        />
        <Button 
            title="Categorias" 
            onPress={() => navigation.navigate('ArticlesCategories')} 
        />
        <Button 
            title="Mis compras" 
            onPress={() => navigation.navigate('MyShopping')} 
        />
        <Button 
            title="Mis favoritos" 
            onPress={() => navigation.navigate('MyFavourites')} 
        />
        <Button 
            title="Ofertas" 
            onPress={() => navigation.navigate('Offers')} 
        />
        <Button 
            title="Perfil de usuario" 
            onPress={() => navigation.navigate('Profile')} 
        />
        <Button 
            title="Soporte" 
            onPress={() => navigation.navigate('Support')} 
        />
    </View>
  );
};
export default ScreenList;
