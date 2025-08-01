import { AntDesign, Entypo, FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function IconScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>🎨 10 Ikon Berbeda</Text>
        <Text style={styles.headerSubtitle}>Menggunakan 5 Keluarga Ikon yang Berbeda</Text>
        <Text style={styles.studentInfo}>👨‍🎓 Annas Urbach Ningrum - NIM: 105841109022</Text>
      </View>

      {/* Info Panel */}
      <View style={styles.infoPanel}>
        <Text style={styles.infoPanelTitle}>ℹ️ Daftar Keluarga Ikon:</Text>
        <Text style={styles.infoPanelText}>• Ionicons (2 ikon)</Text>
        <Text style={styles.infoPanelText}>• FontAwesome (2 ikon)</Text>
        <Text style={styles.infoPanelText}>• MaterialIcons (2 ikon)</Text>
        <Text style={styles.infoPanelText}>• AntDesign (2 ikon)</Text>
        <Text style={styles.infoPanelText}>• Entypo (2 ikon)</Text>
      </View>

      {/* Grid Ikon */}
      <View style={styles.iconGrid}>
        {/* Icon Items */}
        {[ 
          { name: 'home', family: 'Ionicons', icon: <Ionicons name="home" size={40} color="white" />, color: '#e74c3c' },
          { name: 'person', family: 'Ionicons', icon: <Ionicons name="person" size={40} color="white" />, color: '#3498db' },
          { name: 'heart', family: 'FontAwesome', icon: <FontAwesome name="heart" size={40} color="white" />, color: '#2ecc71' },
          { name: 'star', family: 'FontAwesome', icon: <FontAwesome name="star" size={40} color="white" />, color: '#f39c12' },
          { name: 'email', family: 'MaterialIcons', icon: <MaterialIcons name="email" size={40} color="white" />, color: '#9b59b6' },
          { name: 'phone', family: 'MaterialIcons', icon: <MaterialIcons name="phone" size={40} color="white" />, color: '#1abc9c' },
          { name: 'camera', family: 'AntDesign', icon: <AntDesign name="camera" size={40} color="white" />, color: '#e67e22' },
          { name: 'setting', family: 'AntDesign', icon: <AntDesign name="setting" size={40} color="white" />, color: '#8e44ad' },
          { name: 'music', family: 'Entypo', icon: <Entypo name="music" size={40} color="white" />, color: '#c0392b' },
          { name: 'location', family: 'Entypo', icon: <Entypo name="location" size={40} color="white" />, color: '#27ae60' },
        ].map((item, index) => (
          <View key={index} style={styles.iconItem}>
            <View style={[styles.iconContainer, { backgroundColor: item.color }]}> 
              {item.icon}
            </View>
            <Text style={styles.iconLabel}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
            <Text style={styles.iconFamily}>{item.family}</Text>
          </View>
        ))}
      </View>

      {/* Summary */}
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryTitle}>📊 Ringkasan Ikon:</Text>
        <Text style={styles.summaryText}>• Total ikon: <Text style={{ fontWeight: 'bold' }}>10 ikon berbeda</Text></Text>
        <Text style={styles.summaryText}>• Keluarga ikon: <Text style={{ fontWeight: 'bold' }}>5 keluarga berbeda</Text></Text>
        <Text style={styles.summaryText}>• Layout: <Text style={{ fontWeight: 'bold' }}>Grid 2 kolom dengan warna berbeda</Text></Text>
        <Text style={styles.summaryText}>• Source: <Text style={{ fontWeight: 'bold' }}>@expo/vector-icons</Text></Text>
      </View>

      {/* Detail Table */}
      <View style={styles.tableContainer}>
        <Text style={styles.tableTitle}>📋 Detail Setiap Ikon:</Text>
        <View style={styles.tableHeader}>
          <Text style={[styles.tableCell, styles.tableHeaderText, { flex: 1 }]}>No</Text>
          <Text style={[styles.tableCell, styles.tableHeaderText, { flex: 2 }]}>Nama</Text>
          <Text style={[styles.tableCell, styles.tableHeaderText, { flex: 2 }]}>Keluarga</Text>
          <Text style={[styles.tableCell, styles.tableHeaderText, { flex: 2 }]}>Warna</Text>
        </View>
        {[ 
          { no: 1, name: 'home', family: 'Ionicons', color: '#e74c3c' },
          { no: 2, name: 'person', family: 'Ionicons', color: '#3498db' },
          { no: 3, name: 'heart', family: 'FontAwesome', color: '#2ecc71' },
          { no: 4, name: 'star', family: 'FontAwesome', color: '#f39c12' },
          { no: 5, name: 'email', family: 'MaterialIcons', color: '#9b59b6' },
          { no: 6, name: 'phone', family: 'MaterialIcons', color: '#1abc9c' },
          { no: 7, name: 'camera', family: 'AntDesign', color: '#e67e22' },
          { no: 8, name: 'setting', family: 'AntDesign', color: '#8e44ad' },
          { no: 9, name: 'music', family: 'Entypo', color: '#c0392b' },
          { no: 10, name: 'location', family: 'Entypo', color: '#27ae60' },
        ].map((item, index) => (
          <View key={index} style={styles.tableRow}>
            <Text style={[styles.tableCell, { flex: 1 }]}>{item.no}</Text>
            <Text style={[styles.tableCell, { flex: 2 }]}>{item.name}</Text>
            <Text style={[styles.tableCell, { flex: 2 }]}>{item.family}</Text>
            <View style={[styles.tableCell, { flex: 2, flexDirection: 'row', alignItems: 'center' }]}> 
              <View style={[styles.colorIndicator, { backgroundColor: item.color }]} />
              <Text style={styles.colorText}>{item.color}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f6fa',
  },
  header: {
    backgroundColor: '#b01962ff',
    padding: 25,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '900',
    color: 'white',
    textAlign: 'center',
    marginBottom: 6,
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#dcdde1',
    textAlign: 'center',
    marginBottom: 8,
  },
  studentInfo: {
    fontSize: 14,
    color: '#f1c40f',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  infoPanel: {
    backgroundColor: 'white',
    margin: 16,
    padding: 16,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 3,
  },
  infoPanelTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 10,
  },
  infoPanelText: {
    fontSize: 14,
    color: '#636e72',
    marginBottom: 4,
    lineHeight: 20,
  },
  iconGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  iconItem: {
    alignItems: 'center',
    marginBottom: 20,
    width: '47%',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  iconContainer: {
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 2,
  },
  iconFamily: {
    fontSize: 12,
    color: '#95a5a6',
    fontStyle: 'italic',
  },
  summaryContainer: {
    backgroundColor: '#dff9fb',
    margin: 16,
    padding: 16,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#c7ecee',
  },
  summaryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#130f40',
    marginBottom: 10,
    textAlign: 'center',
  },
  summaryText: {
    fontSize: 14,
    color: '#30336b',
    marginBottom: 4,
    lineHeight: 20,
  },
  tableContainer: {
    backgroundColor: 'white',
    margin: 16,
    borderRadius: 14,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: 'hidden',
  },
  tableTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    padding: 12,
    textAlign: 'center',
    backgroundColor: '#dcdde1',
  },
  tableHeader: {
    flexDirection: 'row',
    backgroundColor: '#2f3640',
    paddingVertical: 10,
  },
  tableHeaderText: {
    color: 'white',
    fontWeight: 'bold',
  },
  tableRow: {
    flexDirection: 'row',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f2f6',
  },
  tableCell: {
    paddingHorizontal: 8,
    fontSize: 14,
    color: '#2c3e50',
    textAlign: 'center',
  },
  colorIndicator: {
    width: 14,
    height: 14,
    borderRadius: 7,
    marginRight: 6,
  },
  colorText: {
    fontSize: 12,
    color: '#7f8c8d',
  },
});
