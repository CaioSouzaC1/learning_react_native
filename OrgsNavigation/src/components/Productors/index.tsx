import React, {useEffect, useState} from 'react';
import {FlatList, ImageSourcePropType, StyleSheet, Text} from 'react-native';

import {LoadClients} from '../../Services/LoadMocks';
import ProductorItem from '../ProductorItem';

interface LoadClientsI {
  title: string;
  array: {
    name: string;
    img: String | ImageSourcePropType;
    ml: string;
    stars: number;
  }[];
}

const ProductorsTitle = ({top: Top}: {top: React.ReactNode}) => {
  return (
    <>
      {Top}
      <Text style={styles.title}>Produtores</Text>
    </>
  );
};

const Productors = ({top}: {top: React.ReactNode}) => {
  const [productorsState, SetProductorsState] = useState<LoadClientsI>({
    title: '',
    array: [],
  });

  useEffect(() => {
    SetProductorsState(LoadClients);
  }, []);

  return (
    <>
      {productorsState && (
        <FlatList
          data={productorsState.array}
          renderItem={({item: {name, img, ml, stars}}) => {
            return (
              <ProductorItem name={name} img={img} ml={ml} stars={stars} />
            );
          }}
          ListHeaderComponent={<ProductorsTitle top={top} />}
          keyExtractor={({name}) => name}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 32,
    marginHorizontal: 16,
    marginTop: 16,
    color: '#464646',
  },
});

export default Productors;
