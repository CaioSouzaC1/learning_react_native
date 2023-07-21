import { StyleSheet, View } from "react-native";

import Container from "./components/Container";
import TextBold from "./components/TextBold";
import Topo from "./components/Topo";
import FarmDetails from "./components/FarmDetails";

const Cesta = () => {
  return (
    <>
      <Topo></Topo>
      <View style={styles.cont}>
        <TextBold style={styles.h1}>Cesta de Verduras</TextBold>
        <FarmDetails></FarmDetails>
      </View>
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
});

export default Cesta;
