import { Image, StyleSheet, View } from "react-native";
import TextRegular from "../TextRegular";

const ListItem = ({ nome, imagem }) => {
  return (
    <>
      <View style={styles.main}>
        <Image source={imagem} style={styles.image} />
        <TextRegular style={styles.name}>{nome}</TextRegular>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    marginBottom: 32,
    alignItems: "center",
    borderBottomColor: "#ececec",
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginHorizontal: 16,
  },
  image: {
    width: 64,
    height: 64,
    marginRight: 16,
  },
  name: {
    fontSize: 16,
  },
});

export default ListItem;
