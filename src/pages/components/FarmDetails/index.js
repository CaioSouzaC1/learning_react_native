import { StyleSheet, Image, View, Text } from "react-native";
import Farm from "../../../../assets/logo.png";
import TextBold from "../TextBold";
import cesta from "../../../mocks/cesta";

const FarmDetails = () => {
  return (
    <>
      <View style={styles.row}>
        <Image style={styles.logo} source={Farm}></Image>
        <Text style={styles.h2}>{cesta.farm}</Text>
      </View>
      <Text style={styles.h4}>{cesta.description}</Text>
      <TextBold style={styles.h3}>{cesta.price}</TextBold>
    </>
  );
};

const styles = StyleSheet.create({
  h2: {
    fontSize: 16,
    lineHeight: 26,
    fontFamily: "Regular",
  },
  h3: {
    color: "#2a9f85",
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
  },
  h4: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
  },
  logo: {
    width: 32,
    height: 32,
    marginRight: 12,
  },
  row: {
    flexDirection: "row",
    paddingVertical: 12,
  },
});

export default FarmDetails;
