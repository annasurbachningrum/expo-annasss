import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const AboutScreen = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <Text style={styles.heading}>Tentang Aplikasi</Text>

    <Text style={styles.paragraph}>
      Aplikasi ini dibuat sebagai bagian dari pemenuhan tugas mata kuliah pemrograman mobile. Tujuan dari aplikasi ini
      adalah untuk menampilkan informasi seputar <Text style={styles.bold}>Universitas Muhammadiyah Makassar (Unismuh Makassar)</Text> dalam bentuk digital yang sederhana namun informatif.
    </Text>

    <Text style={styles.paragraph}>Aplikasi ini memiliki tiga halaman utama, yaitu:</Text>

    <View style={styles.bulletList}>
      <Text style={styles.bullet}>
        {"\u2022"} <Text style={styles.bold}>Home</Text>: Menampilkan informasi umum tentang Unismuh Makassar, termasuk visi dan misi universitas.
      </Text>
      <Text style={styles.bullet}>
        {"\u2022"} <Text style={styles.bold}>About</Text>: Menjelaskan tujuan dibuatnya aplikasi serta fungsi dari masing-masing halaman.
      </Text>
      <Text style={styles.bullet}>
        {"\u2022"} <Text style={styles.bold}>Profil</Text>: Menyajikan tampilan visual berupa gambar/logo universitas yang dapat dilihat dengan fitur geser (carousel).
      </Text>
    </View>

    <Text style={styles.paragraph}>Fitur yang disediakan meliputi:</Text>

    <View style={styles.bulletList}>
      <Text style={styles.bullet}>{"\u2022"} Tampilan profil secara visual dan interaktif.</Text>
      <Text style={styles.bullet}>{"\u2022"} Penjelasan visi dan misi universitas secara terstruktur.</Text>
      <Text style={styles.bullet}>{"\u2022"} Navigasi antar halaman yang mudah dan responsif.</Text>
    </View>

    <Text style={styles.paragraph}>
      Aplikasi ini dikembangkan menggunakan teknologi React Native dan dirancang agar mudah digunakan oleh siapa saja
      yang ingin mengenal Unismuh Makassar.
    </Text>

    <Text style={styles.signature}>- ANNAS URBACH NINGRUM</Text>
  </ScrollView>
);

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 20,
  },
  heading: {
    textAlign: "center",
    marginBottom: 15,
    fontSize: 22,
    fontWeight: "bold",
  },
  paragraph: {
    textAlign: "justify",
    marginBottom: 12,
    fontSize: 14,
    lineHeight: 22,
  },
  bulletList: {
    marginBottom: 12,
    marginLeft: 10,
  },
  bullet: {
    marginBottom: 4,
    fontSize: 14,
    lineHeight: 22,
  },
  bold: {
    fontWeight: "bold",
  },
  signature: {
    textAlign: "right",
    fontSize: 14,
    fontStyle: "italic",
    marginTop: 10,
  },
});

