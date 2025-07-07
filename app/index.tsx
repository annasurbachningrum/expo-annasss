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

import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
      }}
    >

      {/* SEGITIGA */}
      <View
        style={{
          width: 0,
          height: 0,
          borderLeftWidth: 40,
          borderRightWidth: 40,
          borderBottomWidth: 70,
          borderLeftColor: 'transparent',
          borderRightColor: 'transparent',
          borderBottomColor: 'purple',
        }}
      />

      {/* PIL (TABUNG HORIZONTAL) */}
      <View
        style={{
          backgroundColor: 'black',
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderRadius: 999, // membuat bentuk kapsul
        }}
      >
        <Text style={{ color: 'pink', fontSize: 16 }}>105841109022</Text>
      </View>

      {/* PERSEGI PANJANG */}
      <View
        style={{
          backgroundColor: 'green',
          padding: 15,
          borderRadius: 0,
          width: 200,
          alignItems: 'center',
        }}
      >
        <Text
          style={{
            fontSize: 10,
            fontWeight: 'bold',
            color: 'white',
          }}
        >
          ANNAS URBACH NINGRUM
        </Text>
      </View>
    </View>
  );
}