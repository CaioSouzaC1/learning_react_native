import { Image, ImageSourcePropType, View } from "react-native";
import TextRegular from "../TextRegular";
import Container from "../Container";

interface ListItemI {
  nome: String;
  imagem: ImageSourcePropType;
}

const ListItem = ({ item }: { item: ListItemI }) => {
  return (
    <Container style={{ flexDirection: "row", alignItems: "center" }}>
      <Image
        source={item.imagem}
        style={{ width: 50, height: 50, marginRight: 16 }}
      />
      <TextRegular>{item.nome}</TextRegular>
    </Container>
  );
};

export default ListItem;
