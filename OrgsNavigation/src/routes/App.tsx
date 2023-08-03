import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Single from '../pages/Single';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductorRoutes from './ProductorRoutes';
const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="ProductorRoutes" component={ProductorRoutes} />
        <Tab.Screen name="single" component={Single} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
