import React, { useState } from 'react';
import { Dimensions, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

// Fungsi untuk generate image pairs menggunakan perulangan
const base = () => {
  const baseNIM = '10584110';
  const suffix = '22';
  const baseURL = 'https://simak.unismuh.ac.id/upload/mahasiswa/';
  const query = '_.jpg?1751871539';
  const altURL = 'https://uploads-us-west-2.insided.com/figma-en/attachment/7105e9c010b3d1f0ea893ed5ca3bd58e6cec090e.gif';

  const pairs = [];

  // Generate untuk NIM 85-73 (11 gambar total, mencakup 5 sebelum + NIM Anda + 5 setelah)
  for (let i = 85; i <= 95; i++) {
    const nim = `${baseNIM}${i}${suffix}`;
    const main = `${baseURL}${nim}${query}`;
    const alt = altURL; // semua alternatif sama
    pairs.push({ main, alt, nimNumber: i });
  }

  return pairs;
};

const ImagePairs= base();

// Font list sesuai persyaratan: 5 Static + 5 Variable = 10 font
const fontList = [
  // 5 Static Fonts (file terpisah untuk setiap font-weight)
  "Font1-Medium",        // Static - Medium weight
  "Font2-Cursive-Bold",  // Static - Bold weight
  "Font3-BoldItalic",    // Static - Bold Italic weight
  "Font7-Regular",       // Static - Regular weight
  "Font8-BoldItalic",    // Static - Bold Italic weight
  
  // 5 Variable Fonts (1 file mendukung banyak font-weight)
  "Font4-Variable",      // Variable - Multiple weights
  "Font5-Variable",      // Variable - Slant + Weight
  "Font6-Variable",      // Variable - Width + Weight
  "Font9-Variable",      // Variable - Multiple weights
  "Font10-Variable"      // Variable - Multiple weights
];

export default function GambarGrid() {
  const [baseannas, setbaseannas] = useState(
    ImagePairs.map(() => ({ scale: 1, isAlt: false }))
  );

  const ANNAS = (index: number) => {
    setbaseannas((prev) =>
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
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          📸 Galeri Foto Mahasiswa
        </Text>
        <Text style={styles.headerSubtitle}>
          NIM 64-73 dengan 10 Font (5 Static + 5 Variable)
        </Text>
        <Text style={styles.yourNimHighlight}>
          🎯 NIM Anda: 90 (Annas Urbach Ningrum)
        </Text>
      </View>

      {/* Info Panel */}
      <View style={styles.infoPanel}>
        <Text style={styles.infoPanelTitle}>ℹ️ Cara Penggunaan:</Text>
        <Text style={styles.infoPanelText}>
          • Tekan gambar untuk memperbesar dan mengubah ke alternatif
        </Text>
        <Text style={styles.infoPanelText}>
          • Setiap NIM menggunakan font yang berbeda
        </Text>
        <Text style={styles.infoPanelText}>
          • Gambar akan berubah dan beranimasi saat ditekan
        </Text>
      </View>

      {/* Grid Images */}
      <View style={styles.grid}>
        {ImagePairs.map((pair, index) => {
          // Assign font menggunakan perulangan modulo
          const currentFont = fontList[index % fontList.length];
          
          return (
            <View key={index} style={styles.imageContainer}>
              {/* Label NIM dengan font berbeda */}
              <View style={styles.nimLabel}>
                <Text style={[
                  styles.nimText,
                  { 
                    fontFamily: currentFont,
                    color: pair.nimNumber === 69 ? '#ff4444' : '#333'
                  }
                ]}>
                  NIM: 10584110{pair.nimNumber}22
                  {pair.nimNumber === 69 && ' 🎯'}
                </Text>
                <Text style={styles.fontLabel}>
                  Font: {currentFont}
                </Text>
              </View>

              <Pressable onPress={() => ANNAS(index)}>
                <Image
                  source={{ uri: baseannas[index].isAlt ? pair.alt : pair.main }}
                  style={[
                    styles.image,
                    {
                      transform: [{ scale: baseannas[index].scale }],
                      borderColor: pair.nimNumber === 69 ? '#ff4444' : '#ddd',
                      borderWidth: pair.nimNumber === 69 ? 3 : 1,
                    },
                  ]}
                />
              </Pressable>

              {/* Status indicator */}
              <View style={styles.statusContainer}>
                <Text style={styles.statusText}>
                  {baseannas[index].isAlt ? '🔄 Alt Image' : '📷 Original'}
                </Text>
                <Text style={styles.scaleText}>
                  Scale: {baseannas[index].scale.toFixed(1)}x
                </Text>
              </View>
            </View>
          );
        })}
      </View>

      {/* Font mapping info */}
      <View style={styles.fontMappingContainer}>
        <Text style={styles.fontMappingTitle}>
          🎨 Mapping Font untuk Setiap NIM:
        </Text>
        {ImagePairs.map((pair, index) => {
          const currentFont = fontList[index % fontList.length];
          return (
            <View key={index} style={styles.fontMappingItem}>
              <Text style={styles.fontMappingNim}>
                NIM {pair.nimNumber}:
              </Text>
              <Text style={[
                styles.fontMappingFont,
                { fontFamily: currentFont }
              ]}>
                {currentFont}
              </Text>
              {pair.nimNumber === 69 && (
                <Text style={styles.yourNimMarker}>← Anda</Text>
              )}
            </View>
          );
        })}
      </View>

      {/* Summary */}
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>📊 Ringkasan Grid:</Text>
        <Text style={styles.summaryText}>
          • Total gambar: <Text style={{ fontWeight: 'bold' }}>{ImagePairs.length} buah</Text>
        </Text>
        <Text style={styles.summaryText}>
          • Range NIM: <Text style={{ fontWeight: 'bold' }}>64-73 (11 gambar)</Text>
        </Text>
        <Text style={styles.summaryText}>
          • Font: <Text style={{ fontWeight: 'bold' }}>5 Static + 5 Variable = 10 font</Text>
        </Text>
        <Text style={styles.summaryText}>
          • Cycling: <Text style={{ fontWeight: 'bold' }}>11 gambar menggunakan 10 font (modulo)</Text>
        </Text>
        <Text style={styles.summaryText}>
          • Interaktivitas: <Text style={{ fontWeight: 'bold' }}>Scale & Image Toggle</Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#2196f3',
    padding: 20,
    alignItems: 'center',
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#e3f2fd',
    textAlign: 'center',
    marginBottom: 10,
  },
  yourNimHighlight: {
    fontSize: 14,
    color: '#ffeb3b',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoPanel: {
    backgroundColor: 'white',
    margin: 15,
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoPanelTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  infoPanelText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
    lineHeight: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: 10,
  },
  imageContainer: {
    width: Dimensions.get('window').width / 3 - 20,
    margin: 10,
    alignItems: 'center',
  },
  nimLabel: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
    marginBottom: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    width: '100%',
  },
  nimText: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 2,
  },
  fontLabel: {
    fontSize: 10,
    color: '#666',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  image: {
    width: Dimensions.get('window').width / 3 - 20,
    height: Dimensions.get('window').width / 3 - 20,
    borderRadius: 10,
    resizeMode: 'cover',
    backgroundColor: '#ddd',
  },
  statusContainer: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 6,
    borderRadius: 6,
    marginTop: 5,
    alignItems: 'center',
    width: '100%',
  },
  statusText: {
    fontSize: 10,
    color: 'white',
    textAlign: 'center',
    marginBottom: 2,
  },
  scaleText: {
    fontSize: 9,
    color: '#ccc',
    textAlign: 'center',
  },
  fontMappingContainer: {
    backgroundColor: 'white',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  fontMappingTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  fontMappingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#f8f9fa',
    borderRadius: 6,
  },
  fontMappingNim: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginRight: 10,
    minWidth: 60,
  },
  fontMappingFont: {
    fontSize: 14,
    color: '#666',
    flex: 1,
  },
  yourNimMarker: {
    fontSize: 12,
    color: '#ff4444',
    fontWeight: 'bold',
  },
  summaryContainer: {
    backgroundColor: '#e3f2fd',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#2196f3',
    marginBottom: 30,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1565c0',
    marginBottom: 12,
    textAlign: 'center',
  },
  summaryText: {
    fontSize: 14,
    color: '#1976d2',
    marginBottom: 6,
    lineHeight: 20,
  },
});
