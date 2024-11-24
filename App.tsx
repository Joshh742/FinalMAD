import React from 'react';
import SplashCarrent from './carrent/pages/SplashCarrent';
import Sign from './carrent/pages/Sign';
import SignUp from './carrent/pages/SignUp';
import SignUp2 from './carrent/pages/SignUp2';
import SignIn from './carrent/pages/SignIn';
import Home from './carrent/pages/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';
import './carrent/config/Firebase';
import Transaction from './carrent/pages/Transaction';
import Order from './carrent/pages/Order';
import Information from './carrent/pages/Information';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashCarrent}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Sign"
          component={Sign}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp2"
          component={SignUp2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Transaction"
          component={Transaction}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Order"
          component={Order}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Information"
          component={Information}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
