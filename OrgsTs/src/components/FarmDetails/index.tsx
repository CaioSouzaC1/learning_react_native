import {
  ImageSourcePropType,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import TextBold from "../TextBold";
import TextRegular from "../TextRegular";
import Container from "../Container";

interface FarmDetailsI {
  nome: String;
  nomeFazenda: String;
  preco: String;
  descricao: String;
  botao: String;
  logoFazenda: ImageSourcePropType;
}

const FarmDetails = (props: FarmDetailsI) => {
  return (
    <Container>
      <TextBold style={styles.h1}> {props.nome}</TextBold>
      <View style={styles.row}>
        <Image style={styles.logo} source={props.logoFazenda}></Image>
        <TextRegular style={styles.h2}>{props.nomeFazenda}</TextRegular>
      </View>
      <TextRegular style={styles.h4}>{props.descricao}</TextRegular>
      <TextBold style={styles.h3}> {props.preco}</TextBold>
      <TouchableOpacity style={styles.btn}>
        <TextBold style={styles.btnText}>{props.botao}</TextBold>
      </TouchableOpacity>
    </Container>
  );
};

const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    lineHeight: 34,
  },
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
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#2a9f85",
    borderRadius: 4,
    padding: 12,
    marginTop: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    color: "#FFF",
    fontSize: 16,
    lineHeight: 26,
    textTransform: "uppercase",
  },
});

export default FarmDetails;
