import { AntDesign } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RowProps } from "../_layout";

const IMAGES = [
  require("../../assets/images/ANNAS1.jpg"),
  require("../../assets/images/ANNAS2.jpg"),
  require("../../assets/images/ANNAS3.jpg"),
];

const ProfilScreen = () => {
  const [index, setIndex] = useState(0);

  const nextImage = () => setIndex((i) => (i + 1) % IMAGES.length);
  const prevImage = () => setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.name}>Biodata Mahasiswa</Text>
      <Text style={styles.subtitle}>Universitas Muhammadiyah Makassar</Text>

      {/* Carousel */}
      <View style={styles.carousel}>
        <TouchableOpacity onPress={prevImage}>
          <AntDesign name="leftcircleo" size={30} color="#555" />
        </TouchableOpacity>

        <Image source={IMAGES[index]} style={styles.image} />

        <TouchableOpacity onPress={nextImage}>
          <AntDesign name="rightcircleo" size={30} color="#555" />
        </TouchableOpacity>
      </View>

      {/* Info Card */}
      <View style={styles.infoBox}>
        <Row label="Nama" value="ANNAS URBACH NINGRUM" />
        <Row label="NIM" value="105841109022" />
        <Row label="Kelas" value="6C" />
        <Row label="Program Studi" value="Informatika" />
        <Row label="Fakultas" value="Teknik" />
      </View>
    </ScrollView>
  );
};

export default ProfilScreen;

const Row = ({ label, value }: RowProps) => (
  <View style={styles.row}>
    <Text style={styles.label}>{label}:</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  name: {
    fontWeight: "bold",
    fontSize: 26,
    marginTop: 10,
    fontFamily: "Poppins-Bold",
  },
  subtitle: {
    fontSize: 14,
    fontFamily: "Poppins-Regular",
    marginBottom: 15,
    color: "#777",
  },
  carousel: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    height: 260,
    width: 200,
    marginHorizontal: 10,
    borderRadius: 12,
  },
  infoBox: {
    width: "100%",
    borderRadius: 12,
    backgroundColor: "#f4f4f4",
    padding: 15,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  row: {
    flexDirection: "row",
    marginBottom: 8,
  },
  label: {
    width: 130,
    color: "#444",
    fontWeight: "bold",
    fontFamily: "Poppins-Medium",
  },
  value: {
    flex: 1,
    color: "#222",
    fontFamily: "Poppins-Regular",
  },
});
