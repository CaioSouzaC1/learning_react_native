import {
  View,
  Image,
  ImageSourcePropType,
  Dimensions,
  StyleSheet,
} from "react-native";
import TextBold from "../TextBold";

interface TopI {
  image: ImageSourcePropType;
}

const { width } = Dimensions.get("window");

const Top = (props: TopI) => {
  return (
    <View>
      <Image style={styles.img} source={props.image}></Image>
      <TextBold style={styles.text}>Detalhe da cesta</TextBold>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
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
    padding: 16,
  },
});

export default Top;
