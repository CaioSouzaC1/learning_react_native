import React from 'react';
import {View} from 'react-native';
import Top from '../../components/Top';
import Productors from '../../components/Productors';

const Home = (): React.JSX.Element => {
  return (
    <>
      <View>
        <Productors top={<Top />} />
      </View>
    </>
  );
};

export default Home;
