import React, { useState } from 'react';
import {
  ScrollView,
  Pressable,
  Image,
  StyleSheet,
  Dimensions,
  View,
} from 'react-native';

// ===============================
// KONFIGURASI GRAFIK / DATA NIM
// ===============================

const nimAwal = '10584110';
const nimAkhir = '22';
const urlUtama = 'https://simak.unismuh.ac.id/upload/mahasiswa/';
const parameterGambar = '_.jpg?1751871539';
const gambarAlternatif =
  'https://uploads-us-west-2.insided.com/figma-en/attachment/7105e9c010b3d1f0ea893ed5ca3bd58e6cec090e.gif';

// ===============================
// FUNGSI PEMBENTUK DATA GAMBAR
// ===============================

const buatDaftarGambar = () => {
  const daftarGambar = [];

  for (let i = 82; i <= 90; i++) {
    const nim = `${nimAwal}${i}${nimAkhir}`;
    const main = `${urlUtama}${nim}${parameterGambar}`;
    daftarGambar.push({ main, alt: gambarAlternatif });
  }

  return daftarGambar;
};

// ===============================
// KOMPONEN UTAMA GRID GAMBAR
// ===============================

export default function GridGambar() {
  const dataGambar = buatDaftarGambar();

  const [statusGambar, setStatusGambar] = useState(
    dataGambar.map(() => ({ scale: 1, isAlt: false }))
  );

  const handleGambarTekan = (index: number) => {
    setStatusGambar((prev) =>
      prev.map((item, i) => {
        if (i !== index) return item;
        const newScale = item.scale < 2 ? item.scale * 1.2 : 2;
        return {
          scale: newScale,
          isAlt: !item.isAlt,
        };
      })
    );
  };

  return (
    <ScrollView contentContainerStyle={gaya.grid}>
      {dataGambar.map((gambarItem, index) => (
        <Pressable key={index} onPress={() => handleGambarTekan(index)}>
          <Image
            source={{ uri: statusGambar[index].isAlt ? gambarItem.alt : gambarItem.main }}
            style={[
              gaya.image,
              {
                transform: [{ scale: statusGambar[index].scale }],
              },
            ]}
          />
        </Pressable>
      ))}
    </ScrollView>
  );
}

// ===============================
// GAYA
// ===============================

const gaya = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: Dimensions.get('window').width / 3 - 20,
    height: Dimensions.get('window').width / 3 - 20,
    margin: 5,
    borderRadius: 10,
    resizeMode: 'cover',
    backgroundColor: '#ddd',
    borderWidth: 1,
    borderColor: '#aaa',
  },
});
