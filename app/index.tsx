import { Link } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f0f8ff' }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 20,
          minHeight: '100%',
        }}
      >
        {/* Header dengan Font Custom */}
        <Text style={{
          fontFamily: "fontBas",
          fontSize: 28,
          fontWeight: 'bold',
          textAlign: 'center',
          marginBottom: 20,
          color: '#2c3e50',
        }}>
          Selamat Datang! 🎉
        </Text>

        {/* Profil dengan Font yang Berbeda */}
        <View style={{
          backgroundColor: 'white',
          padding: 25,
          borderRadius: 15,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 6,
          elevation: 5,
          marginBottom: 30,
        }}>
          <Text style={{
            fontFamily: "fontBas",
            fontSize: 18,
            textAlign: 'center',
            lineHeight: 28,
            color: '#34495e',
            marginBottom: 15,
          }}>
            Halo Kak, Nama Saya Baso Hamzah
          </Text>
          
          <Text style={{
            fontFamily: "SpaceMono-Regular",
            fontSize: 14,
            textAlign: 'center',
            lineHeight: 22,
            color: '#7f8c8d',
            marginBottom: 10,
          }}>
            📚 Mahasiswa Universitas Negeri Makassar
          </Text>
          
          <Text style={{
            fontFamily: "SpaceMono-Regular",
            fontSize: 14,
            textAlign: 'center',
            lineHeight: 22,
            color: '#7f8c8d',
            marginBottom: 10,
          }}>
            🏛️ Fakultas Teknik
          </Text>
          
          <Text style={{
            fontFamily: "SpaceMono-Regular",
            fontSize: 14,
            textAlign: 'center',
            lineHeight: 22,
            color: '#7f8c8d',
            marginBottom: 10,
          }}>
            💻 Jurusan Teknik Informatika
          </Text>
          
          <Text style={{
            fontFamily: "SpaceMono-Regular",
            fontSize: 14,
            textAlign: 'center',
            lineHeight: 22,
            color: '#7f8c8d',
          }}>
            🎓 Angkatan 2022
          </Text>
        </View>

        {/* Navigation Buttons */}
        <View style={{
          width: '100%',
          gap: 15,
          marginBottom: 20,
        }}>
          <Link href="/nama-list" asChild>
            <TouchableOpacity style={{
              backgroundColor: '#e74c3c',
              paddingHorizontal: 30,
              paddingVertical: 15,
              borderRadius: 25,
              shadowColor: '#e74c3c',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 6,
              elevation: 5,
            }}>
              <Text style={{
                fontFamily: "fontBas",
                fontSize: 16,
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
                📝 Lihat 10 Nama (10 Font Berbeda)
              </Text>
            </TouchableOpacity>
          </Link>

          <Link href="/gambar-grid" asChild>
            <TouchableOpacity style={{
              backgroundColor: '#2ecc71',
              paddingHorizontal: 30,
              paddingVertical: 15,
              borderRadius: 25,
              shadowColor: '#2ecc71',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 6,
              elevation: 5,
            }}>
              <Text style={{
                fontFamily: "fontBas",
                fontSize: 16,
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
                📸 Grid Gambar NIM 69-77
              </Text>
            </TouchableOpacity>
          </Link>

          <Link href="/icon-screen" asChild>
            <TouchableOpacity style={{
              backgroundColor: '#9b59b6',
              paddingHorizontal: 30,
              paddingVertical: 15,
              borderRadius: 25,
              shadowColor: '#9b59b6',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 6,
              elevation: 5,
            }}>
              <Text style={{
                fontFamily: "fontBas",
                fontSize: 16,
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
                🎨 10 Ikon Berbeda (5 Keluarga)
              </Text>
            </TouchableOpacity>
          </Link>

          <Link href="/fonts-demo" asChild>
            <TouchableOpacity style={{
              backgroundColor: '#3498db',
              paddingHorizontal: 30,
              paddingVertical: 15,
              borderRadius: 25,
              shadowColor: '#3498db',
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.3,
              shadowRadius: 6,
              elevation: 5,
            }}>
              <Text style={{
                fontFamily: "fontBas",
                fontSize: 16,
                color: 'white',
                fontWeight: 'bold',
                textAlign: 'center',
              }}>
                🎨 Demo Semua Font
              </Text>
            </TouchableOpacity>
          </Link>
        </View>

        <Text style={{
          fontFamily: "SpaceMono-Regular",
          fontSize: 12,
          color: '#95a5a6',
          marginTop: 10,
          textAlign: 'center',
        }}>
          Aplikasi ini menggunakan 12 font berbeda dengan perulangan import
        </Text>

        <View style={{
          backgroundColor: '#fff3cd',
          padding: 15,
          borderRadius: 10,
          marginTop: 20,
          borderWidth: 1,
          borderColor: '#ffeaa7',
        }}>
          <Text style={{
            fontFamily: "fontBas",
            fontSize: 14,
            color: '#856404',
            textAlign: 'center',
            marginBottom: 5,
          }}>
            🎯 NIM Anda: 69
          </Text>
          <Text style={{
            fontFamily: "SpaceMono-Regular",
            fontSize: 12,
            color: '#856404',
            textAlign: 'center',
          }}>
            5 nama sebelum dan sesudah NIM 69
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}