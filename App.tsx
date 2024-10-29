import React, { useContext } from "react";
import 'react-native-gesture-handler';
import { AuthProvider, AuthContext } from "./android/app/src/AuthContext.js";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";

import Login from './UI/Login.js';
import Register from './UI/Register.js';
import Payment from './UI/Payment.js';
import ShoppingCar from './UI/ShoppingCar.js';
import ArticlesDetails from './UI/ArticlesDetails.js';
import MyShopping from './UI/MyShopping.js';
import MyFavourites from './UI/MyFavourites.js';
import Offers from './UI/Offers.js';
import Profile from './UI/Profile.js';
import Support from './UI/Support.js';
import Home from "./UI/Home.js";

const Menu = createDrawerNavigator();

const App = () => {
  return (
    <AuthProvider>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
};

const DrawerNavigator = () => {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Menu.Navigator>
      <Menu.Screen name="Home" component={Home} />
      {!isAuthenticated ? (
        <>
          <Menu.Screen name="Login" component={Login} />
          <Menu.Screen name="Register" component={Register} />
        </>
      ) : (
        <>
          <Menu.Screen name="Payment" component={Payment} />
          <Menu.Screen name="ShoppingCar" component={ShoppingCar} />
          <Menu.Screen name="ArticlesDetails" component={ArticlesDetails} />
          <Menu.Screen name="MyShopping" component={MyShopping} />
          <Menu.Screen name="MyFavourites" component={MyFavourites} />
          <Menu.Screen name="Offers" component={Offers} />
          <Menu.Screen name="Profile" component={Profile} />
          <Menu.Screen name="Support" component={Support} />
        </>
      )}
    </Menu.Navigator>
  );
};

export default App;
