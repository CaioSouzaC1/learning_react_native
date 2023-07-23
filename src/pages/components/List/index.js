import { FlatList, StyleSheet, View } from "react-native";

import TextBold from "../TextBold";
import ListItem from "../ListItem";

const List = () => {
  return (
    <View style={styles.cont}>
      <TextBold style={styles.title}>{list.itens.titulo}</TextBold>
    </View>
  );
};

const styles = StyleSheet.create({
  cont: {
    marginTop: 16,
  },
  title: {
    fontSize: 18,
    marginBottom: 16,
  },
});

export default List;
