// import { Text, View } from "react-native";

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>ANNAS URBACH NINGRUM</Text>
//       <Text>105841109022</Text>
//     </View>
//   );
// }
// import { Text, View } from "react-native";

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <View style={{
//         backgroundColor : "black"
//       }}>

    
//       <Text style={
//         {
//         fontSize: 20,
//         color : "white"
//       }}>105841109022</Text>
//       <Text style= {
//         {
//         color: "blue",
//         fontWeight: "bold"
//       }}
//       >ANNAS URBACH NINGRUM</Text>
//       </View>
//       <View style={{
//         width: 20,
//         height: 20,
//         backgroundColor: "green",
//         borderRadius: 100,
//       }}>

//       </View>
//     </View>
//   );
// }

// import { Image, Text, View ,ScrollView} from "react-native";

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
//         }}
//       />

//       {/* PIL (TABUNG HORIZONTAL) */}
//       <View
//         style={{
//           backgroundColor: 'black',
//           paddingHorizontal: 20,
//           paddingVertical: 10,
//           borderRadius: 999, // membuat bentuk kapsul
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

// import { Image, Text, View, ScrollView } from "react-native";

// export default function Index() {
//   return (
//     <ScrollView
//       contentContainerStyle={{
//         flexGrow: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#F5F5F5",
//         padding: 20,
//       }}
//     >
//       <ScrollView>
//       {/* Segitiga Merah */}
//       <View
//         style={{
//           width: 0,
//           height: 0,
//           borderLeftWidth: 50,
//           borderRightWidth: 50,
//           borderBottomWidth: 100,
//           borderLeftColor: "transparent",
//           borderRightColor: "transparent",
//           borderBottomColor: "red",
//           marginBottom: 20,
//         }}
//       />

//       {/* Tabung Biru (Simulasi bentuk oval dengan borderRadius) */}
//       <View
//         style={{
//           width: 120,
//           height: 50,
//           backgroundColor: "blue",
//           borderRadius: 25,
//           justifyContent: "center",
//           alignItems: "center",
//           marginBottom: 20,
//         }}
//       >
//         <Text style={{ color: "white", fontWeight: "bold" }}>
//           105841109022
//         </Text>
//       </View>

//       {/* Persegi Panjang green */}
//       <View
//         style={{
//           backgroundColor: 'green',
//           padding: 15,
//           borderRadius: 0,
//           width: 200,
//           alignItems: 'center',
//         }}
//       >
//         <Text style={{ fontSize: 10, color: "black", fontWeight: "bold" }}>
//           ANNAS URBACH NINGRUM
//         </Text>
//       </View>
      
//       <Image
//         source={{ uri: "https://simak.unismuh.ac.id/upload/mahasiswa/105841109022_.jpg?1751871436" }}
//         style={{ width: 120, height: 160, marginTop: 20, borderRadius: 10 }}
//       />

//       <Image
//         source={{ uri: "https://uploads-us-west-2.insided.com/figma-en/attachment/7105e9c010b3d1f0ea893ed5ca3bd58e6cec090e.gif" }}
//         style={{ width: 120, height: 160, marginTop: 20, borderRadius: 10 }}
//       />
//     </ScrollView>
//   );
// }

import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5F5F5", // Tambahan untuk latar belakang yang lebih soft
        padding: 20,
      }}
    >

      {/* Segitiga Merah */}
      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 50,
          borderRightWidth: 50,
          borderBottomWidth: 100,
          borderLeftColor: "transparent",
          borderRightColor: "transparent",
          borderBottomColor: "red",
          marginBottom: 20,
        }}
      />

      {/* Tabung Biru (Simulasi bentuk oval dengan borderRadius) */}
      <View
        style={{
          width: 120,
          height: 50,
          backgroundColor: "blue",
          borderRadius: 25,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 20,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>
          105841109022
        </Text>
      </View>

      {/* Persegi Panjang Oranye */}
      <View
        style={{
          width: 200,
          height: 60,
          backgroundColor: "orange",
          justifyContent: "center",
          alignItems: "center",
          // borderRadius: 10, // tambahan biar tidak terlalu kaku
        }}
      >
        <Text style={{ fontSize: 10, color: "black", fontWeight: "bold" }}>
          ANNAS URBACH NINGRUM
        </Text>
      </View>

    </View>
  );
}