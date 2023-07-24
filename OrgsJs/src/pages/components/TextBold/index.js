import { Text } from "react-native";

const TextBold = ({ children, style }) => {
  return <Text style={[style, { fontFamily: "Bold" }]}>{children}</Text>;
};

export default TextBold;
