import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from '../screens/LandingPage';
import OrderScreen from '../screens/OrderScreen';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Order" component={OrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
