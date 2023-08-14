import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Single from '../pages/Single';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductorRoutes from './ProductorRoutes';
const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#2A9F85',
          tabBarInactiveTintColor: '#C4C4C4',
        }}>
        <Tab.Screen name="ProductorRoutes" component={ProductorRoutes} />
        <Tab.Screen name="single" component={Single} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
