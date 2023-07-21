import { Text } from "react-native";

const TextRegular = ({ children, style }) => {
  return <Text style={[style, { fontFamily: "Regular" }]}>{children}</Text>;
};

export default TextRegular;
