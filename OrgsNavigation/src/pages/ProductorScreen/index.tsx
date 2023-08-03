import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  View,
  Text,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Image} from 'react-native-svg';

import produtores from '../../mocks/Productors';

interface ProductorScreenI {
  name: String;
  ml: String;
  stars: String;
  img: String | ImageSourcePropType;
}

interface produtoresMocksI {
  item: {
    nome: string;
    imagem: any;
    distancia: number;
    estrelas: number;
    cestas: {
      detalhes: {
        nome: string;
        descricao: string;
        preco: string;
        imagem: any;
      };
      itens: {
        nome: string;
        imagem: any;
      }[];
    }[];
  };
}

const ProductorScreen = () => {
  const route = useRoute();
  const [item, setItem] = React.useState<produtoresMocksI | boolean>(false);
  let params: ProductorScreenI = route.params;
  const navigation = useNavigation();

  useEffect(() => {
    const filteredItem = produtores.lista.find(
      produtor => produtor.nome === params.name,
    );
    if (filteredItem) {
      setItem(filteredItem);
    }
  }, [params.name]);

  return (
    <>
      {item && (
        <TouchableOpacity
          style={estilos.cesta}
          onPress={() => {
            navigation.navigate('single', {data: item.cestas[0].detalhes});
          }}>
          <View style={estilos.conteudo}>
            <Image
              source={item.cestas[0].detalhes.imagem}
              style={estilos.imagem}
            />
            <View style={estilos.textos}>
              <Text style={estilos.nome}>{item.cestas[0].detalhes.nome}</Text>
              <Text style={estilos.descricao}>
                {item.cestas[0].detalhes.descricao}
              </Text>
              <Text style={estilos.preco}>{item.cestas[0].detalhes.preco}</Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default ProductorScreen;

const estilos = StyleSheet.create({
  cesta: {
    paddingHorizontal: 16,
  },
  conteudo: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    paddingVertical: 16,
  },
  imagem: {
    width: 62,
    height: 62,
    borderRadius: 6,
  },
  textos: {
    flex: 1,
    marginLeft: 8,
  },
  nome: {
    color: '#464646',
    fontSize: 14,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  descricao: {
    color: '#A3A3A3',
    fontSize: 14,
    lineHeight: 22,
  },
  preco: {
    color: '#2A9F85',
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    marginTop: 4,
  },
});
