import { Stack } from "expo-router";
import {useFonts} from "expo-font";
import * as SplashScreeen from "expo-splash-screen";
import { useEffect } from "react";


SplashScreeen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "TikTokSans-variableFont_opsz,slnt,wdth,wght":
    require("../assets/fonts/TikTokSans-VariableFont_opsz,slnt,wdth,wght.ttf"),
  });

  useEffect(() => {
    if (loaded && !error) {
      SplashScreeen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded || error) {
    return null; 
  }
  return <Stack />;
}