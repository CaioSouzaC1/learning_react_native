import { Image, StyleSheet, Text, Dimensions } from "react-native";
import TopoImg from "../../../../assets/topo.png";
const { width } = Dimensions.get("window");
const Topo = () => {
  return (
    <>
      <Image style={styles.topo} source={TopoImg}></Image>
      <Text style={styles.text}>Detalhes da Cesta</Text>
    </>
  );
};

const styles = StyleSheet.create({
  topo: {
    width: width,
    height: (578 / 768) * width,
  },
  text: {
    position: "absolute",
    textAlign: "center",
    width: "100%",
    fontSize: 16,
    lineHeight: 26,
    color: "#FFF",
    fontWeight: "bold",
    padding: 16,
  },
});

export default Topo;
