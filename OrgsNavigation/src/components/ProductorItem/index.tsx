import React, {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Stars from '../Stars';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';

interface ProductorItemI {
  name: string;
  img: String | ImageSourcePropType;
  ml: string;
  stars: number;
}

const ProductorItem = (props: ProductorItemI) => {
  const [selected, invertSelected] = useState(false);
  const navigation = useNavigation();

  return (
    <>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('productor', {
            name: props.name,
            stars: props.stars,
            img: props.img,
            ml: props.ml,
          })
        }
        style={styles.card}
        disabled={false}>
        <Image
          style={styles.logo}
          accessibilityLabell={props.name}
          source={props.img}
        />
        <View style={styles.info}>
          <Text style={styles.name}>{props.name}</Text>
          <Stars editable={selected} big={selected} stars={props.stars} />
        </View>
        <Text style={styles.ml}>{props.ml}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f6f6f6',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 6,
    marginVertical: 16,
    marginLeft: 16,
  },
  info: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 8,
    marginVertical: 16,
    marginRight: 16,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#000000',
    marginVertical: 16,
    marginLeft: 8,
  },
  ml: {
    fontSize: 10,
    marginRight: 16,
  },
});

export default ProductorItem;
