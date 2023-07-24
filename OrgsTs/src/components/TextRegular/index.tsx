import { Text, TextStyle } from "react-native";

interface TextRegularI {
  children: React.ReactNode;
  style?: TextStyle;
}

const TextRegular = ({ children, style }: TextRegularI) => {
  const defaultStyles = { fontFamily: "Regular" };
  const combinedStyles = { ...defaultStyles, ...style };

  return <Text style={combinedStyles}>{children}</Text>;
};

export default TextRegular;
