import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductorScreen from '../pages/ProductorScreen';
import Home from '../pages/Home';

const Stack = createNativeStackNavigator();

const ProductorRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="productor" component={ProductorScreen} />
    </Stack.Navigator>
  );
};

export default ProductorRoutes;
