import React from 'react';
import FarmDetails from '../../components/FarmDetails';
import Top from '../../components/Top';
import TopImage from '../../assets/other/topo.png';
import list from '../../mocks/list.js';
import {FlatList} from 'react-native';
import ListItem from '../../components/ListItem';

const ListItens = () => {
  return (
    <>
      <Top image={TopImage} />
      <FarmDetails {...list.detalhes}></FarmDetails>
    </>
  );
};

const Single = () => {
  return (
    <>
      <FlatList
        data={list.itens.lista}
        renderItem={item => <ListItem {...item} />}
        keyExtractor={item => item.nome}
        ListHeaderComponent={<ListItens />}
      />
    </>
  );
};
export default Single;
