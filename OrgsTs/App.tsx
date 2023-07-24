import { SafeAreaView, StatusBar } from "react-native";
import Top from "./src/components/Top";
import { useFonts } from "expo-font";
import {
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import AppLoading from "expo-app-loading";
import Main from "./src/Main";
export default function App() {
  const [fontsLoaded] = useFonts({
    Regular: Montserrat_400Regular,
    Bold: Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Main />
    </SafeAreaView>
  );
}
