import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import AppRoutes from './src/routes/App';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <AppRoutes />
    </SafeAreaView>
  );
}
