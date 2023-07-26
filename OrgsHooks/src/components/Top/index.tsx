import React, {useEffect, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
// @ts-ignore
import Logo from '../../assets/logo.png';
import {LoadTop} from '../../Services/LoadMocks';

const Top = (): React.JSX.Element => {
  const [TopMock, setTopMock] = useState(false);

  useEffect(() => {
    setTopMock(LoadTop());
  }, []);

  return (
    <>
      {TopMock && (
        <View style={styles.top}>
          <Image style={styles.logo} source={Logo} />
          <Text style={styles.name}>{TopMock.name}</Text>
          <Text>{TopMock.subtitle}</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#f6f6f6',
    padding: 16,
  },
  logo: {
    width: 70,
    height: 28,
  },
  name: {
    marginTop: 24,
    fontSize: 26,
    fontWeight: 'bold',
    lineHeight: 42,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 26,
    color: '#333',
  },
});

export default Top;
