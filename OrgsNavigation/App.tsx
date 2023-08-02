/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import Home from './src/pages/Home';
import Single from './src/pages/Single';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <StatusBar />
      <Home />
      {/* <Single /> */}
    </SafeAreaView>
  );
}

export default App;
