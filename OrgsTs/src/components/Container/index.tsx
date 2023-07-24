import { TextStyle, View } from "react-native";

interface ContainerI {
  children: React.ReactNode;
  style?: TextStyle;
}

const Container = ({ children, style }: ContainerI) => {
  const defaultStyles = { paddingHorizontal: 12, paddingVertical: 8 };
  const combinedStyles = { ...defaultStyles, ...style };

  return <View style={combinedStyles}>{children}</View>;
};

export default Container;
