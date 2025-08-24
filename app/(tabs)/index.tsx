

import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headingRow}>
        <AntDesign name="home" size={26} color="#2e86de" style={{ marginRight: 8 }} />
        <Text style={styles.heading}>Universitas Muhammadiyah Makassar</Text>
      </View>

      <Image
        source={require("../../assets/images/logo.jpg")}
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.section}>
        <Text style={styles.subHeading}>TENTANG UNISMUH MAKASSAR</Text>
        <Text style={styles.paragraph}>
          Universitas Muhammadiyah Makassar atau Unismuh Makassar adalah salah satu perguruan tinggi Muhammadiyah yang
          merupakan amal usaha Muhammadiyah dalam mengembangkan pendidikan khususnya pada jenjang pendidikan tinggi.{"\n\n"}
          Universitas Muhammadiyah Makassar bukan hanya menyiapkan mahasiswa dengan bekal keterampilan, melainkan juga
          dengan sikap dan karakter yang dibina khusus selama menjalani proses perkuliahan.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeading}>Visi</Text>
        <Text style={styles.paragraph}>
          “Menjadi Perguruan Tinggi Islam Terkemuka, Unggul, Terpercaya, dan Mandiri.”
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.subHeading}>Misi</Text>
        <View style={styles.listWrapper}>
          <Text style={styles.bullet}> Meningkatkan keimanan dan ketaqwaan kepada Allah SWT, melalui Pengkajian, Pembinaan, dan Pengamalan Al Islam Kemuhammadiyahan.</Text>
          <Text style={styles.bullet}> Menyelenggarakan pendidikan dan pembelajaran yang berkualitas.</Text>
          <Text style={styles.bullet}> Menyelenggarakan penelitian yang inovatif, kreatif, unggul, dan berdaya saing.</Text>
          <Text style={styles.bullet}> Menyelenggarakan pengabdian yang berdaya guna pada masyarakat.</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
  },
  headingRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  heading: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
    color: "#2e86de",
  },
  image: {
    marginBottom: 20,
    width: 120,
    height: 120,
    alignSelf: "center",
  },
  section: {
    marginBottom: 20,
  },
  subHeading: {
    fontWeight: "bold",
    marginBottom: 8,
    fontSize: 18,
  },
  paragraph: {
    textAlign: "left",
    lineHeight: 22,
    fontSize: 14,
  },
  listWrapper: {
    marginTop: 6,
  },
  bullet: {
    marginBottom: 10,
    lineHeight: 22,
    fontSize: 14,
  },
});