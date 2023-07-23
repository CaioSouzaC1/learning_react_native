import { StatusBar, SafeAreaView } from "react-native";
import Cesta from "./src/pages/cesta";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { View } from "react-native";
import AppLoading from "expo-app-loading";
export default function App() {
  const [fontsLoaded] = useFonts({
    Regular: Montserrat_400Regular,
    Bold: Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading></AppLoading>;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Cesta />
    </SafeAreaView>
  );
}
