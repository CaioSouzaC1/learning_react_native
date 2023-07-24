import { Text, TextStyle } from "react-native";

interface TextBoldI {
  children: React.ReactNode;
  style?: TextStyle;
}

const TextBold = ({ children, style }: TextBoldI) => {
  const defaultStyles = { fontFamily: "Bold" };
  const combinedStyles = { ...defaultStyles, ...style };

  return <Text style={combinedStyles}>{children}</Text>;
};

export default TextBold;
