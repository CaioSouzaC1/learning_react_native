import React from 'react';
import FarmDetails from '../../components/FarmDetails';
import Top from '../../components/Top';
import TopImage from '../../assets/other/topo.png';
import list from '../../mocks/list.js';
import {FlatList} from 'react-native';
import ListItem from '../../components/ListItem';
import {useRoute} from '@react-navigation/native';

const ListItens = props => {
  return (
    <>
      <Top image={TopImage} />
      <FarmDetails {...props.data}></FarmDetails>
    </>
  );
};

const Single = () => {
  const route = useRoute();
  let params = route.params;

  console.log(params);

  return (
    <>
      <FlatList
        data={list.itens.lista}
        renderItem={item => <ListItem {...item} />}
        keyExtractor={item => item.nome}
        ListHeaderComponent={<ListItens {...params} />}
      />
    </>
  );
};
export default Single;
