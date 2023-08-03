import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../pages/Home';
import Single from '../pages/Single';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Settings" component={Single} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
