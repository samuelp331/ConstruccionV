import React from "react";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from "@react-navigation/drawer";

import Login from './UI/Login.js';
import Register from './UI/Register.js';
import Payment from './UI/Payment.js';
import ShoppingCar from './UI/ShoppingCar.js';
import ArticlesCard from './UI/ArticlesCard.js';
import ArticlesDetails from './UI/ArticlesDetails.js';
import ArticlesCategories from './UI/ArticlesCategories.js';
import MyShopping from './UI/MyShopping.js';
import MyFavourites from './UI/MyFavourites.js';
import Offers from './UI/Offers.js';
import Profile from './UI/Profile.js';
import Support from './UI/Support.js';
import ScreenList from "./UI/ScreenList";


const Menu = createDrawerNavigator();


const App = () => {
  return (


    <NavigationContainer>
      <Menu.Navigator>
        <Menu.Screen name="ScreenList" component={ScreenList} />
        <Menu.Screen name="Login" component={Login} />
        <Menu.Screen name="Register" component={Register} />
        <Menu.Screen name="Payment" component={Payment} />
        <Menu.Screen name="ShoppingCar" component={ShoppingCar} />
        <Menu.Screen name="ArticlesCard" component={ArticlesCard} />
        <Menu.Screen name="ArticlesDetails" component={ArticlesDetails} />
        <Menu.Screen name="ArticlesCategories" component={ArticlesCategories} />
        <Menu.Screen name="MyShopping" component={MyShopping} />
        <Menu.Screen name="MyFavourites" component={MyFavourites} />
        <Menu.Screen name="Offers" component={Offers} />
        <Menu.Screen name="Profile" component={Profile} />
        <Menu.Screen name="Support" component={Support} />
      </Menu.Navigator>
    </NavigationContainer>
  )
  
}
export default App