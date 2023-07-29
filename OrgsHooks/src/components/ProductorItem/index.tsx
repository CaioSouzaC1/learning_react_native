import React, {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';

interface ProductorItemI {
  name: string;
  img?: String | ImageSourcePropType;
  ml?: string;
  stars?: number;
}

const ProductorItem = (props: ProductorItemI) => {
  return (
    <>
      <View style={styles.card}>
        <Image
          style={styles.logo}
          accessibilityLabell={props.name}
          source={props.img}
        />
        <View style={styles.info}>
          <Text style={styles.name}>{props.name}</Text>
        </View>
        <Text style={styles.ml}>{props.ml}</Text>
      </View>
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
    fontSize: 8,
    marginRight: 16,
  },
});

export default ProductorItem;
