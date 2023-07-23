import { FlatList, ScrollView, StyleSheet, View } from "react-native";

import TextBold from "./components/TextBold";
import Topo from "./components/Topo";
import FarmDetails from "./components/FarmDetails";
import list from "../mocks/list";
import ListItem from "./components/ListItem";

const Cesta = () => {
  return (
    <>
      {list && (
        <FlatList
          data={list.itens.lista}
          renderItem={({ item }) => <ListItem {...item} />}
          keyExtractor={({ nome }) => nome}
          ListHeaderComponent={() => {
            return (
              <>
                <Topo></Topo>
                <View style={styles.cont}>
                  <TextBold style={styles.h1}>Cesta de Verduras</TextBold>
                  <FarmDetails></FarmDetails>
                  <TextBold style={{ marginVertical: 16 }}>
                    Items da Cesta
                  </TextBold>
                </View>
              </>
            );
          }}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 26,
    color: "#464646",
    lineHeight: 42,
  },
  cont: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  title: {
    fontSize: 18,
    marginBottom: 16,
  },
});

export default Cesta;
