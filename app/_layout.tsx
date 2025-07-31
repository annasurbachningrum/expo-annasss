import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();
//melarang agar tidak tertutup otomatis sebelum disuruh berhenti

export default function RootLayout() {
  const [ loaded, error ] = useFonts({
    // 5 Static Fonts (file terpisah untuk setiap font-weight)
    "Font1-Medium": require("../assets/fonts/1-Medium.ttf"),                    // Static - Medium weight
    "Font2-Cursive-Bold": require("../assets/fonts/2-Cursive-Bold.ttf"),        // Static - Bold weight  
    "Font3-BoldItalic": require("../assets/fonts/3-BoldItalic.ttf"),            // Static - Bold Italic weight
    "Font7-Regular": require("../assets/fonts/7-Regular.ttf"),                  // Static - Regular weight
    "Font8-BoldItalic": require("../assets/fonts/8-BoldItalic.ttf"),            // Static - Bold Italic weight
    
    // 5 Variable Fonts (1 file mendukung banyak font-weight)
    "Font4-Variable": require("../assets/fonts/4-VariableFont_wght.ttf"),       // Variable - Multiple weights
    "Font5-Variable": require("../assets/fonts/5-slnt,wght.ttf"),               // Variable - Slant + Weight
    "Font6-Variable": require("../assets/fonts/6-wdth,wght.ttf"),               // Variable - Width + Weight
    "Font9-Variable": require("../assets/fonts/9-VariableFont_wght.ttf"),       // Variable - Multiple weights
    "Font10-Variable": require("../assets/fonts/10-VariableFont_wght.ttf"),     // Variable - Multiple weights
    
    // Font tambahan (opsional)
    "fontAnnas": require("../assets/fonts/fontAnnas.ttf"),                          // Original font
    "SpaceMono-Regular": require("../assets/fonts/SpaceMono-Regular.ttf"),      // Original font
  });

useEffect (() =>{
  if (loaded && error == null) {
    SplashScreen.hideAsync();
  }
}, [loaded, error]);

if (!loaded && !error) {
  return null;
}


  return <Stack />;
}