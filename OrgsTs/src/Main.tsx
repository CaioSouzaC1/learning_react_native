import FarmDetails from "./components/FarmDetails";
import Top from "./components/Top";
import TopImage from "../assets/other/topo.png";
import list from "./mocks/list.js";
import { FlatList, ImageSourcePropType } from "react-native";
import ListItem from "./components/ListItem";

const Main = () => {
  return (
    <>
      <FlatList
        data={list.itens.lista}
        renderItem={(item) => <ListItem {...item} />}
        keyExtractor={(item) => item.nome}
        ListHeaderComponent={() => {
          return (
            <>
              <Top image={TopImage} />
              <FarmDetails {...list.detalhes}></FarmDetails>
            </>
          );
        }}
      ></FlatList>
    </>
  );
};
export default Main;
