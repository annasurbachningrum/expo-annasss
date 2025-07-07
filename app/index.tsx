
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
          
        }}
      >
        <Text style={{ fontSize: 10, color: "black", fontWeight: "bold" }}>
          ANNAS URBACH NINGRUM
        </Text>
      </View>

    </View>
  );
}