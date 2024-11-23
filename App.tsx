import React from 'react';
import Home from './src/page/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AddTransaction from './src/page/AddTransaction';
import FlashMessage from 'react-native-flash-message';
import './src/config/Firebase';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddTransaction"
          component={AddTransaction}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="transaksi"
          component={AddTransaction}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
