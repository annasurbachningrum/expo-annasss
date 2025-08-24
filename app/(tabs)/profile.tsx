// import { AntDesign } from "@expo/vector-icons";
// import React, { useState } from "react";
// import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
// import { RowProps } from "../_layout";

// const IMAGES = [
//   require("../../assets/images/ANNAS1.jpg"),
//   require("../../assets/images/ANNAS2.jpg"),
//   require("../../assets/images/ANNAS3.jpg"),
// ];

// const ProfilScreen = () => {
//   const [index, setIndex] = useState(0);

//   const nextImage = () => setIndex((i) => (i + 1) % IMAGES.length);
//   const prevImage = () => setIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       <Text style={styles.name}>Biodata Mahasiswa</Text>
//       <Text style={styles.subtitle}>Universitas Muhammadiyah Makassar</Text>

//       {/* Carousel */}
//       <View style={styles.carousel}>
//         <TouchableOpacity onPress={prevImage}>
//           <AntDesign name="leftcircleo" size={30} color="#555" />
//         </TouchableOpacity>

//         <Image source={IMAGES[index]} style={styles.image} />

//         <TouchableOpacity onPress={nextImage}>
//           <AntDesign name="rightcircleo" size={30} color="#555" />
//         </TouchableOpacity>
//       </View>

//       {/* Info Card */}
//       <View style={styles.infoBox}>
//         <Row label="Nama" value="ANNAS URBACH NINGRUM" />
//         <Row label="NIM" value="105841109022" />
//         <Row label="Kelas" value="6C" />
//         <Row label="Program Studi" value="Informatika" />
//         <Row label="Fakultas" value="Teknik" />
//       </View>
//     </ScrollView>
//   );
// };

// export default ProfilScreen;

// const Row = ({ label, value }: RowProps) => (
//   <View style={styles.row}>
//     <Text style={styles.label}>{label}:</Text>
//     <Text style={styles.value}>{value}</Text>
//   </View>
// );

// const styles = StyleSheet.create({
//   container: {
//     padding: 20,
//     alignItems: "center",
//   },
//   name: {
//     fontWeight: "bold",
//     fontSize: 26,
//     marginTop: 10,
//     fontFamily: "Poppins-Bold",
//   },
//   subtitle: {
//     fontSize: 14,
//     fontFamily: "Poppins-Regular",
//     marginBottom: 15,
//     color: "#777",
//   },
//   carousel: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 20,
//   },
//   image: {
//     height: 260,
//     width: 200,
//     marginHorizontal: 10,
//     borderRadius: 12,
//   },
//   infoBox: {
//     width: "100%",
//     borderRadius: 12,
//     backgroundColor: "#f4f4f4",
//     padding: 15,
//     elevation: 3,
//     shadowColor: "#000",
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     shadowOffset: { width: 0, height: 2 },
//   },
//   row: {
//     flexDirection: "row",
//     marginBottom: 8,
//   },
//   label: {
//     width: 130,
//     color: "#444",
//     fontWeight: "bold",
//     fontFamily: "Poppins-Medium",
//   },
//   value: {
//     flex: 1,
//     color: "#222",
//     fontFamily: "Poppins-Regular",
//   },
// });

import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { getAllStudents, getRandomStudent, Student } from '../../data/students';

export default function Profile() {
  const [selectedStudent, setSelectedStudent] = useState<Student>(getAllStudents()[0]);
  const [showAllStudents, setShowAllStudents] = useState(false);
  const students = getAllStudents();

  const selectRandomStudent = () => {
    const randomStudent = getRandomStudent();
    setSelectedStudent(randomStudent);
  };

  const renderStudentItem = ({ item }: { item: Student }) => (
    <TouchableOpacity 
      style={[
        styles.studentItem,
        selectedStudent.id === item.id && styles.selectedStudentItem
      ]}
      onPress={() => {
        setSelectedStudent(item);
        setShowAllStudents(false);
      }}
    >
      <Image source={{ uri: item.foto }} style={styles.studentAvatar} />
      <View style={styles.studentInfo}>
        <Text style={styles.studentItemName}>{item.name}</Text>
        <Text style={styles.studentItemNim}>{item.nim}</Text>
      </View>
      {selectedStudent.id === item.id && (
        <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
      )}
    </TouchableOpacity>
  );

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Ionicons name="person-circle" size={24} color="#fff" />
          <Text style={styles.title}>Profil Mahasiswa</Text>
        </View>
      </View>

      {/* Student Selector */}
      <View style={styles.selectorSection}>
        <View style={styles.selectorHeader}>
          <Text style={styles.selectorTitle}>Pilih Mahasiswa</Text>
          <View style={styles.selectorButtons}>
            <TouchableOpacity 
              style={styles.randomButton}
              onPress={selectRandomStudent}
            >
              <Ionicons name="shuffle" size={16} color="#fff" />
              <Text style={styles.randomButtonText}>Random</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.listButton}
              onPress={() => setShowAllStudents(!showAllStudents)}
            >
              <Ionicons name={showAllStudents ? "chevron-up" : "chevron-down"} size={16} color="#2196F3" />
              <Text style={styles.listButtonText}>Daftar</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {showAllStudents && (
          <FlatList
            data={students}
            renderItem={renderStudentItem}
            keyExtractor={(item) => item.id}
            style={styles.studentList}
            scrollEnabled={false}
          />
        )}
      </View>

      {/* Profile Photo Section */}
      <View style={styles.photoSection}>
        <View style={styles.photoContainer}>
          <Image
            source={{ uri: selectedStudent.foto }}
            style={styles.profilePhoto}
            resizeMode="cover"
          />
        </View>
        <View style={styles.photoCaptionContainer}>
          <Ionicons name="camera" size={16} color="#666" />
          <Text style={styles.photoCaption}>Foto dari SIMAK Unismuh</Text>
        </View>
      </View>

      {/* Personal Information */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="person" size={20} color="#FF5722" />
          <Text style={styles.sectionTitle}>Data Pribadi</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Ionicons name="person-outline" size={16} color="#FF5722" style={styles.infoIcon} />
          <Text style={styles.label}>Nama:</Text>
          <Text style={styles.value}>{selectedStudent.name}</Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="id-card-outline" size={16} color="#FF5722" style={styles.infoIcon} />
          <Text style={styles.label}>NIM:</Text>
          <Text style={styles.value}>{selectedStudent.nim}</Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="people-outline" size={16} color="#FF5722" style={styles.infoIcon} />
          <Text style={styles.label}>Kelas:</Text>
          <Text style={styles.value}>{selectedStudent.kelas || 'B'}</Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="school-outline" size={16} color="#FF5722" style={styles.infoIcon} />
          <Text style={styles.label}>Universitas:</Text>
          <Text style={styles.value}>Universitas Muhammadiyah Makassar</Text>
        </View>
      </View>

      {/* Academic Information */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="school" size={20} color="#FF5722" />
          <Text style={styles.sectionTitle}>Informasi Akademik</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Ionicons name="book-outline" size={16} color="#FF5722" style={styles.infoIcon} />
          <Text style={styles.label}>Program Studi:</Text>
          <Text style={styles.value}>{selectedStudent.prodi || 'S1 Informatika'}</Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="library-outline" size={16} color="#FF5722" style={styles.infoIcon} />
          <Text style={styles.label}>Fakultas:</Text>
          <Text style={styles.value}>{selectedStudent.fakultas || 'Teknik'}</Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="time-outline" size={16} color="#FF5722" style={styles.infoIcon} />
          <Text style={styles.label}>Semester:</Text>
          <Text style={styles.value}>{selectedStudent.semester || '6'} (Enam)</Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="checkmark-circle-outline" size={16} color="#FF5722" style={styles.infoIcon} />
          <Text style={styles.label}>Status:</Text>
          <Text style={[styles.value, styles.statusActive]}>{selectedStudent.status || 'Aktif'}</Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="trophy-outline" size={16} color="#FF5722" style={styles.infoIcon} />
          <Text style={styles.label}>IPK:</Text>
          <Text style={[styles.value, styles.ipkValue]}>{selectedStudent.ipk?.toFixed(2) || '3.85'}</Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="calendar-outline" size={16} color="#FF5722" style={styles.infoIcon} />
          <Text style={styles.label}>Tahun Masuk:</Text>
          <Text style={styles.value}>{selectedStudent.tahunMasuk || '2022'}</Text>
        </View>
      </View>

      {/* Contact Information */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="call" size={20} color="#FF5722" />
          <Text style={styles.sectionTitle}>Informasi Kontak</Text>
        </View>
        
        <View style={styles.infoRow}>
          <Ionicons name="mail-outline" size={16} color="#FF5722" style={styles.infoIcon} />
          <Text style={styles.label}>Email:</Text>
          <Text style={styles.emailValue}>{selectedStudent.nim}@unismuh.ac.id</Text>
        </View>

        <View style={styles.infoRow}>
          <Ionicons name="location-outline" size={16} color="#FF5722" style={styles.infoIcon} />
          <Text style={styles.label}>Universitas:</Text>
          <Text style={styles.value}>Unismuh Makassar</Text>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Data Mahasiswa Dinamis - Aplikasi Komputasi Bergerak
        </Text>
        <Text style={styles.footerSubtext}>
          - Universitas Muhammadiyah Makassar -
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
    backgroundColor: '#FF5722',
    paddingVertical: 30,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'fontBas',
    marginLeft: 8,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectorSection: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 15,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  selectorHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  selectorTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF5722',
    fontFamily: 'fontBas',
  },
  selectorButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  randomButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF5722',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    gap: 5,
  },
  randomButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'fontBas',
  },
  listButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f8ff',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 15,
    gap: 5,
  },
  listButtonText: {
    color: '#2196F3',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: 'fontBas',
  },
  studentList: {
    maxHeight: 200,
  },
  studentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    marginBottom: 5,
    backgroundColor: '#f9f9f9',
  },
  selectedStudentItem: {
    backgroundColor: '#e3f2fd',
    borderWidth: 1,
    borderColor: '#2196F3',
  },
  studentAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  studentInfo: {
    flex: 1,
  },
  studentItemName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    fontFamily: 'fontBas',
  },
  studentItemNim: {
    fontSize: 12,
    color: '#666',
    fontFamily: 'fontBas',
  },
  photoSection: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  photoContainer: {
    width: 120,
    height: 120,
    borderRadius: 60,
    overflow: 'hidden',
    borderWidth: 4,
    borderColor: '#FF5722',
    marginBottom: 10,
  },
  profilePhoto: {
    width: '100%',
    height: '100%',
  },
  photoCaption: {
    fontSize: 14,
    color: '#666',
    fontFamily: 'fontBas',
    marginLeft: 5,
  },
  photoCaptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  section: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF5722',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'fontBas',
    marginLeft: 8,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 12,
    alignItems: 'center',
  },
  infoIcon: {
    marginRight: 8,
    width: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    width: 120,
    fontFamily: 'fontBas',
  },
  value: {
    fontSize: 14,
    color: '#666',
    flex: 1,
    fontFamily: 'fontBas',
  },
  emailValue: {
    fontSize: 14,
    color: '#2196F3',
    flex: 1,
    fontFamily: 'fontBas',
  },
  statusActive: {
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  ipkValue: {
    color: '#FF9800',
    fontWeight: 'bold',
  },
  footer: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
  },
  footerText: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#FF5722',
    textAlign: 'center',
    marginBottom: 8,
    fontFamily: 'fontBas',
  },
  footerSubtext: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    fontFamily: 'fontBas',
  },
});
