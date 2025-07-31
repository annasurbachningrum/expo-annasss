import React, { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

// Data nama mahasiswa berdasarkan urutan stambuk (5 sebelum dan 5 setelah nim 69)
const studentData = [
  { nim: 85, name: "Fadli", major: "Informatika" },
  { nim: 86, name: "A BASO ARYA", major: "Informatika" },
  { nim: 87, name: "USRAN", major: "Informatika" },
  { nim: 88, name: "RIKA ARMAYANI", major: "Informatika" },
  { nim: 89, name: "NURUL HABIBA", major: "Informatika" },
  { nim: 90, name: "ANNAS URBACH NINGRUM", major: "Informatika" },
  { nim: 91, name: "AGUS", major: "Informatika" },
  { nim: 92, name: "BESSE TALEHA", major: "Informatika" },
  { nim: 93, name: "DINDA SAFITRI", major: "Informatika" },
  { nim: 94, name: "FAREL APTAINDRATAMA", major: "Informatika" }
];

// Array font sesuai persyaratan: 5 Static + 5 Variable
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

// Fungsi untuk generate font mapping menggunakan perulangan
const generateFontMapping = () => {
  const fontMapping: { [key: number]: string } = {};
  
  for (let i = 0; i < studentData.length; i++) {
    // Assign font menggunakan modulo untuk cycling
    fontMapping[studentData[i].nim] = fontList[i % fontList.length];
  }
  
  return fontMapping;
};

// Generate font mapping
const nimToFontMap = generateFontMapping();

export default function NamaList() {
  const [selectedStudent, setSelectedStudent] = useState<number | null>(null);
  const [animationStates, setAnimationStates] = useState(
    studentData.map(() => ({ scale: 1, isPressed: false }))
  );

  const handlePress = (index: number, nim: number) => {
    setSelectedStudent(selectedStudent === nim ? null : nim);
    
    setAnimationStates((prev) =>
      prev.map((item, i) => {
        if (i !== index) return { ...item, isPressed: false };
        return {
          scale: item.scale === 1 ? 1.05 : 1,
          isPressed: !item.isPressed,
        };
      })
    );
  };

  const getFontWeight = (fontName: string): "normal" | "bold" => {
    // Variable fonts dapat menggunakan fontWeight
    if (fontName.includes("Bold")) return "bold";
    return "normal";
  };

  return (
    <ScrollView style={annasStyles.container}>
      <View style={annasStyles.header}>
        <Text style={annasStyles.headerTitle}>
          🎓 Daftar Mahasiswa Teknik Informatika
        </Text>
        <Text style={annasStyles.headerSubtitle}>
          10 Nama dengan 10 Font Berbeda
        </Text>
        <Text style={annasStyles.yourNim}>
          📋 NIM Anda: 69 (Baso Hamzah)
        </Text>
      </View>

      <View style={annasStyles.legendContainer}>
        <Text style={annasStyles.legendTitle}>Keterangan:</Text>
        <Text style={annasStyles.legendText}>🔵 Sebelum NIM Anda (64-68)</Text>
        <Text style={annasStyles.legendText}>🔴 Setelah NIM Anda (70-73)</Text>
      </View>

      {studentData.map((student, index) => {
        const isSelected = selectedStudent === student.nim;
        const currentFont = nimToFontMap[student.nim];
        const isBeforeYou = student.nim < 69;
        
        return (
          <Pressable
            key={student.nim}
            onPress={() => handlePress(index, student.nim)}
            style={[
              annasStyles.studentCard,
              {
                transform: [{ scale: animationStates[index].scale }],
                backgroundColor: isSelected ? '#e3f2fd' : 'white',
                borderColor: isBeforeYou ? '#2196f3' : '#f44336',
                borderLeftWidth: 5,
              },
            ]}
          >
            <View style={annasStyles.studentInfo}>
              <View style={annasStyles.nimContainer}>
                <Text style={annasStyles.nimText}>
                  {isBeforeYou ? '🔵' : '🔴'} NIM: {student.nim}
                </Text>
                <Text style={annasStyles.fontInfo}>
                  Font: {currentFont}
                </Text>
              </View>
              
              <Text
                style={[
                  annasStyles.nameText,
                  {
                    fontFamily: currentFont,
                    fontWeight: getFontWeight(currentFont),
                  },
                ]}
              >
                {student.name}
              </Text>
              
              <Text style={annasStyles.majorText}>
                📚 {student.major}
              </Text>
              
              {isSelected && (
                <View style={annasStyles.detailContainer}>
                  <Text style={annasStyles.detailText}>
                    ✨ Font yang digunakan: <Text style={{ fontWeight: 'bold' }}>{currentFont}</Text>
                  </Text>
                  <Text style={annasStyles.detailText}>
                    📍 Posisi: {isBeforeYou ? 'Sebelum' : 'Setelah'} NIM Anda
                  </Text>
                  <Text style={annasStyles.detailText}>
                    🔢 Urutan: {index + 1} dari 10 mahasiswa
                  </Text>
                </View>
              )}
            </View>
          </Pressable>
        );
      })}

      <View style={annasStyles.fontListContainer}>
        <Text style={annasStyles.fontListTitle}>📝 Daftar Font yang Digunakan:</Text>
        {fontList.map((font, index) => (
          <View key={font} style={annasStyles.fontItem}>
            <Text style={annasStyles.fontNumber}>{index + 1}.</Text>
            <Text style={[annasStyles.fontName, { fontFamily: font }]}>
              {font}
            </Text>
            <Text style={annasStyles.fontType}>
              {font.includes('Variable') ? '(Variable)' : '(Static)'}
            </Text>
          </View>
        ))}
      </View>

      <View style={annasStyles.summaryContainer}>
        <Text style={annasStyles.summaryTitle}>📊 Ringkasan:</Text>
        <Text style={annasStyles.summaryText}>
          • Total mahasiswa ditampilkan: <Text style={{ fontWeight: 'bold' }}>10 orang</Text>
        </Text>
        <Text style={annasStyles.summaryText}>
          • Font berbeda digunakan: <Text style={{ fontWeight: 'bold' }}>10 font</Text>
        </Text>
        <Text style={annasStyles.summaryText}>
          • Sebelum NIM 69: <Text style={{ fontWeight: 'bold', color: '#2196f3' }}>5 orang (64-68)</Text>
        </Text>
        <Text style={annasStyles.summaryText}>
          • Setelah NIM 69: <Text style={{ fontWeight: 'bold', color: '#f44336' }}>5 orang (70-73)</Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const annasStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#1976d2',
    padding: 20,
    alignItems: 'center',
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 22,
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
  yourNim: {
    fontSize: 14,
    color: '#ffeb3b',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  legendContainer: {
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
  legendTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  legendText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  studentCard: {
    backgroundColor: 'white',
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 12,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 4,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  studentInfo: {
    flex: 1,
  },
  nimContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  nimText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  fontInfo: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
  },
  nameText: {
    fontSize: 20,
    color: '#1976d2',
    marginBottom: 8,
    lineHeight: 26,
  },
  majorText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  detailContainer: {
    backgroundColor: '#f8f9fa',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    borderLeftWidth: 3,
    borderLeftColor: '#4caf50',
  },
  detailText: {
    fontSize: 13,
    color: '#555',
    marginBottom: 4,
    lineHeight: 18,
  },
  fontListContainer: {
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
  fontListTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  fontItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  fontNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#666',
    marginRight: 10,
    width: 20,
  },
  fontName: {
    fontSize: 16,
    color: '#333',
    flex: 1,
    marginRight: 10,
  },
  fontType: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
  },
  summaryContainer: {
    backgroundColor: '#e8f5e8',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#4caf50',
    marginBottom: 30,
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 12,
    textAlign: 'center',
  },
  summaryText: {
    fontSize: 14,
    color: '#388e3c',
    marginBottom: 6,
    lineHeight: 20,
  },
});
