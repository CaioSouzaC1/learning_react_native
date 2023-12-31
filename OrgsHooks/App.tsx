import React from 'react';
import {SafeAreaView} from 'react-native';
import Home from './src/pages/Home';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Home />
    </SafeAreaView>
  );
}

export default App;
