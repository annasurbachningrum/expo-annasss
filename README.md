<!-- // import { Image, Text, View ,ScrollView} from "react-native";


// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         gap: 20,
//       }}
//     >
//       <ScrollView>
//       {/* SEGITIGA */}
//       <View
//         style={{
//           width: 0,
//           height: 0,
//           borderLeftWidth: 40,
//           borderRightWidth: 40,
//           borderBottomWidth: 70,
//           borderLeftColor: 'transparent',
//           borderRightColor: 'transparent',
//           borderBottomColor: 'purple',
//           marginBottom: 18,
//         }}
//       />

//       {/* PIL (TABUNG HORIZONTAL) */}
//       <View
//         style={{
//           backgroundColor: 'black',
//           paddingHorizontal: 20,
//           paddingVertical: 10,
//           borderRadius: 999, // membuat bentuk kapsul
//           marginBottom: 18,
//         }}
//       >
//         <Text style={{ color: 'pink', fontSize: 16 }}>105841109022</Text>
//       </View>

//       {/* PERSEGI PANJANG */}
//       <View
//         style={{
//           backgroundColor: 'green',
//           padding: 15,
//           borderRadius: 0,
//           width: 200,
//           alignItems: 'center',
//         }}
//       >
//         <Text
//           style={{
//             fontSize: 10,
//             fontWeight: 'bold',
//             color: 'white',
//           }}
//         >
//           ANNAS URBACH NINGRUM
//         </Text>
//       </View>
//       <Image
//         source={{ uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841109022_.jpg?1751871436" }}
//         style={{ width: 120, height: 160, marginTop: 20, borderRadius: 10 }}
//         >
//        </Image>
//        <Image
//         source={{ uri: "https://uploads-us-west-2.insided.com/figma-en/attachment/7105e9c010b3d1f0ea893ed5ca3bd58e6cec090e.gif" }}
//         style={{ width: 120, height: 160, marginTop: 20, borderRadius: 10 }}
//         >
//        </Image>
//       </ScrollView>
//     </View>
//   );
// }

// import React, { useState } from 'react';
// import { Dimensions, Image, Pressable, ScrollView, StyleSheet } from 'react-native';
// import React from "react";
// import { View, Text } from "react-native";
// import React from "react";
// import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";


// const bas69GenerateImagePairs = () => {
//   const baseNIM = '10584110';
//   const suffix = '22';
//   const baseURL = 'https://simak.unismuh.ac.id/upload/mahasiswa/';
//   const query = '_.jpg?1751871539';
//   const altURL = 'https://uploads-us-west-2.insided.com/figma-en/attachment/7105e9c010b3d1f0ea893ed5ca3bd58e6cec090e.gif';

//   const pairs = [];

//   for (let i = 90; i <= 96; i++) {
//     const nim = `${baseNIM}${i}${suffix}`;
//     const main = `${baseURL}${nim}${query}`;
//     const alt = altURL; // semua alternatif sama
//     pairs.push({ main, alt });
//   }

//   return pairs;
// };

// const bas69ImagePairs = bas69GenerateImagePairs();

// export default function Bas69GambarGrid() {
//   const [bas69States, setBas69States] = useState(
//     bas69ImagePairs.map(() => ({ scale: 1, isAlt: false }))
//   );

//   const bas69HandlePress = (index: number) => {
//     setBas69States((prev) =>
//       prev.map((item, i) => {
//         if (i !== index) return item;
//         const newScale = item.scale < 2 ? item.scale * 1.2 : 2;
//         return {
//           scale: newScale,
//           isAlt: !item.isAlt,
//         };
//       })
//     );
//   };

//   return (
//     <ScrollView contentContainerStyle={bas69Styles.grid}>
//       {bas69ImagePairs.map((pair, index) => (
//         <Pressable key={index} onPress={() => bas69HandlePress(index)}>
//           <Image
//             source={{ uri: bas69States[index].isAlt ? pair.alt : pair.main }}
//             style={[
//               bas69Styles.image,
//               {
//                 transform: [{ scale: bas69States[index].scale }],
//               },
//             ]}
//           />
//         </Pressable>
//       ))}
//     </ScrollView>
//   );
// }

// const bas69Styles = StyleSheet.create({
//   grid: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'center',
//     padding: 10,
//   },
//   image: {
//     width: Dimensions.get('window').width / 3 - 20,
//     height: Dimensions.get('window').width / 3 - 20,
//     margin: 5,
//     borderRadius: 10,
//     resizeMode: 'cover',
//     backgroundColor: '#ddd',
//     borderWidth: 1,         
//     borderColor: '#aaa',     
//   },
// });

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text
//         style={{
//           fontFamily: "TikTokSans-variableFont_opsz,slnt,wdth,wght",
//           fontWeight: "bold",
//           fontSize: 24,
//           color: "black",
//         }}
//       >
//         Hello, Expo Router!
//       </Text>
//     </View>
//   );
// }
  
// const generateGambarList = () => {
//   const nimAwal = '10584110';
//   const nimAkhir = '22';
//   const urlUtama = 'https://simak.unismuh.ac.id/upload/mahasiswa/';
//   const parameterGambar = '_.jpg?1751871539';
//   const gambarAlternatif = 'https://uploads-us-west-2.insided.com/figma-en/attachment/7105e9c010b3d1f0ea893ed5ca3bd58e6cec090e.gif';

//   const daftarGambar = [];

//   for (let i = 90; i <= 96; i++) {
//     const nim = `${nimAwal}${i}${nimAkhir}`;
//     const main = `${urlUtama}${nim}${parameterGambar}`;
//     const alt = gambarAlternatif;
//     daftarGambar.push({ main, alt });
//   }

//   return daftarGambar;
// };

// const listPasanganGambar = generateGambarList(); -->