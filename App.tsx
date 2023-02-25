import React from "react";
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold,
} from "@expo-google-fonts/archivo";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
} from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";
import { ThemeProvider } from "styled-components";
import { Home } from "./src/screens/Home";
import theme from "./src/styles/theme";

export default function App() {
  let [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
  });
  return !fontsLoaded ? (
    <AppLoading />
  ) : (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}
