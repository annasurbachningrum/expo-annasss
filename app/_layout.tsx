// // import { Stack } from "expo-router";
// // import {useFonts} from "expo-font";
// // import * as SplashScreeen from "expo-splash-screen";
// // import { useEffect } from "react";


// // SplashScreeen.preventAutoHideAsync();

// // export default function RootLayout() {
// //   const [loaded, error] = useFonts({
// //     "TikTokSans-variableFont_opsz,slnt,wdth,wght":
// //     require("../assets/fonts/TikTokSans-VariableFont_opsz,slnt,wdth,wght.ttf"),
// //   });

// //   useEffect(() => {
// //     if (loaded && !error) {
// //       SplashScreeen.hideAsync();
// //     }
// //   }, [loaded, error]);

// //   if (!loaded || error) {
// //     return null; 
// //   }
// //   return <Stack />;
// // }

// import { Stack } from "expo-router";
// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";
// import { useEffect } from "react";
// import { Touchable, TouchableOpacity, View } from "react-native";
// import Entypo from '@expo/vector-icons/Entypo';

// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const [loaded, error] = useFonts({
//     "bigshoulders": require("../assets/fonts/BigShouldersInline-VariableFont_opsz,wght.ttf"),
//     "darkergrotesque": require("../assets/fonts/DarkerGrotesque-VariableFont_wght.ttf"),
//     "eduhand": require("../assets/fonts/EduAUVICWANTHand-VariableFont_wght.ttf"),
//     "inriasans": require("../assets/fonts/InriaSans-BoldItalic.ttf"),
//     "playwrite": require("../assets/fonts/PlaywriteNGModernGuides-Regular.ttf"),
//     "simonetta": require("../assets/fonts/Simonetta-Regular.ttf"),
//     "sourgummy": require("../assets/fonts/SourGummy-Italic-VariableFont_wdth,wght.ttf"),
//     "sunshiney": require("../assets/fonts/Sunshiney-Regular.ttf"),
//     "girlnextdoor": require("../assets/fonts/TheGirlNextDoor-Regular.ttf"),
//     "tiltprism": require("../assets/fonts/TiltPrism-Regular-VariableFont_XROT,YROT.ttf"),
//   });

//   useEffect(() => {
//     if (loaded && !error) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded, error]);

//   if (!loaded && !error) {
//     return null;
//   }

//   return <Stack screenOptions={{
//     header : ({ navigation }) => (
//       <View style={{ 
//         height: 60, 
//         backgroundColor: '#f8f8f8',
//         justifyContent: 'center',
//         alignItems: 'flex-start',
//       }}>
//         <TouchableOpacity onPress={() =>{
//           navigation.navigate('index');
//         }} style={{ 
//           width: 60,
//           marginLeft: 10,
//         }} >
//           <Entypo name="home" size={24} color="black"/>
//         </TouchableOpacity>
//         </View>
//     ),
//   }}/>;
// }
// export type RowProps = {
//     label: string;
//     value: string;
// };
