import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getStudentById } from '../../../data/students';
export default function UserPage() {
    const { id } = useLocalSearchParams();
    const student = getStudentById(id as string);

    if (!student) {
        return (
            <View style={styles.errorContainer}>
                <Ionicons name="alert-circle" size={64} color="#ff0000" />
                <Text style={styles.errorTitle}>Mahasiswa tidak ditemukan</Text>
                <Text style={styles.errorSubtitle}>
                    ID: {id}
                </Text>
            </View>
        );
    }
    
    return (
        <ScrollView style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <TouchableOpacity 
                        style={styles.backButton}
                        onPress={() => router.back()}
                    >
                        <Ionicons name="arrow-back" size={24} color="#fff" />
                    </TouchableOpacity>
                    <View style={styles.headerTitleContainer}>
                        <Ionicons name="person-circle" size={28} color="#fff" />
                        <Text style={styles.headerTitle}>Detail Mahasiswa</Text>
                    </View>
                    <View style={styles.placeholder} />
                </View>
            </View>

            <View style={styles.content}>
                {/* Photo Section */}
                <View style={styles.photoSection}>
                    <View style={styles.photoContainer}>
                        <Image 
                            source={{ uri: student.foto }}
                            style={styles.photo}
                            resizeMode="cover"
                        />
                    </View>
                    <View style={styles.photoCaptionContainer}>
                        <Ionicons name="camera" size={16} color="#666" />
                        <Text style={styles.photoCaption}>Foto Simak Unismuh</Text>
                    </View>
                </View>
                
                {/* Personal Information */}
                <View style={styles.infoSection}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="person" size={20} color="#2196F3" />
                        <Text style={styles.sectionTitle}>Data Pribadi</Text>
                    </View>
                    
                    <View style={styles.infoRow}>
                        <Ionicons name="person-outline" size={18} color="#2196F3" style={styles.infoIcon} />
                        <Text style={styles.label}>Nama Lengkap:</Text>
                        <Text style={styles.value}>{student.name}</Text>
                    </View>
                    
                    <View style={styles.infoRow}>
                        <Ionicons name="id-card-outline" size={18} color="#2196F3" style={styles.infoIcon} />
                        <Text style={styles.label}>NIM:</Text>
                        <Text style={styles.value}>{student.nim}</Text>
                    </View>
                </View>

                {/* Academic Information */}
                <View style={styles.infoSection}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="school" size={20} color="#2196F3" />
                        <Text style={styles.sectionTitle}>Informasi Akademik</Text>
                    </View>
                    
                    <View style={styles.infoRow}>
                        <Ionicons name="laptop-outline" size={18} color="#2196F3" style={styles.infoIcon} />
                        <Text style={styles.label}>Program Studi:</Text>
                        <Text style={styles.value}>{student.prodi || 'S1 Informatika'}</Text>
                    </View>
                    
                    <View style={styles.infoRow}>
                        <Ionicons name="library-outline" size={18} color="#2196F3" style={styles.infoIcon} />
                        <Text style={styles.label}>Fakultas:</Text>
                        <Text style={styles.value}>{student.fakultas || 'Teknik'}</Text>
                    </View>
                    
                    <View style={styles.infoRow}>
                        <Ionicons name="time-outline" size={18} color="#2196F3" style={styles.infoIcon} />
                        <Text style={styles.label}>Semester:</Text>
                        <Text style={styles.value}>{student.semester || '6'}</Text>
                    </View>
                </View>

                {/* Contact Information */}
                <View style={styles.infoSection}>
                    <View style={styles.sectionHeader}>
                        <Ionicons name="call" size={20} color="#2196F3" />
                        <Text style={styles.sectionTitle}>Informasi Kontak</Text>
                    </View>
                    
                    <View style={styles.infoRow}>
                        <Ionicons name="mail-outline" size={18} color="#2196F3" style={styles.infoIcon} />
                        <Text style={styles.label}>Email Institusi:</Text>
                        <Text style={styles.emailValue}>{student.nim}@unismuh.ac.id</Text>
                    </View>
                    
                    <View style={styles.infoRow}>
                        <Ionicons name="school-outline" size={18} color="#2196F3" style={styles.infoIcon} />
                        <Text style={styles.label}>Universitas:</Text>
                        <Text style={styles.value}>Unismuh Makassar</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
    },
    header: {
        backgroundColor: '#2196F3',
        paddingVertical: 30,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    backButton: {
        padding: 8,
        borderRadius: 20,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    headerTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    placeholder: {
        width: 40, // Same width as back button for centering
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'fontBas',
        marginLeft: 8,
    },
    content: {
        padding: 0,
    },
    photoSection: {
        backgroundColor: '#fff',
        margin: 15,
        padding: 20,
        borderRadius: 12,
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
    },
    photoContainer: {
        width: 150,
        height: 150,
        borderRadius: 75,
        overflow: 'hidden',
        borderWidth: 4,
        borderColor: '#2196F3',
        marginBottom: 10,
    },
    photo: {
        width: '100%',
        height: '100%',
    },
    photoCaptionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    photoCaption: {
        fontSize: 14,
        color: '#666',
        fontFamily: 'fontBas',
        marginLeft: 5,
    },
    infoSection: {
        backgroundColor: '#fff',
        margin: 15,
        padding: 20,
        borderRadius: 12,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.84,
    },
    sectionHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2196F3',
        textAlign: 'center',
        fontFamily: 'fontBas',
        marginLeft: 8,
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
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    errorTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ff0000',
        marginTop: 20,
        textAlign: 'center',
        fontFamily: 'fontBas',
    },
    errorSubtitle: {
        fontSize: 16,
        color: '#666',
        marginTop: 10,
        textAlign: 'center',
        fontFamily: 'fontBas',
    },
});