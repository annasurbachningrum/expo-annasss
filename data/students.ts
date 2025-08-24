// Interface untuk data mahasiswa
export interface Student {
    id: string;
    name: string;
    nim: string;
    foto: string;
    prodi?: string;
    semester?: number;
    fakultas?: string;
    kelas?: string;
    status?: string;
    tahunMasuk?: string;
    ipk?: number;
}

// Data mahasiswa dengan informasi tambahan
export const students: Student[] = [
    { 
        id: '1', 
        name: 'ANNAS URBACH NINGRUM', 
        nim: '105841109022',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841109022_.jpg?1751871539',
        prodi: 'S1 Informatika',
        semester: 6,
        fakultas: 'Teknik',
        kelas: 'C',
        status: 'Aktif',
        tahunMasuk: '2022',
        ipk: 3.59,
    },
    {
        id: '2',
        name: 'DINDA SAFITRI',
        nim: '105841109322',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841109322_.jpg?1751871540',
        prodi: 'S1 Informatika',
        semester: 6,
        fakultas: 'Teknik',
        kelas: 'C',
        status: 'Aktif',
        tahunMasuk: '2022',
        ipk: 3.92,
    },
    {
        id: '3',
        name: 'BESSE TALEHA',
        nim: '105841109222',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841109222_.jpg?1751871541',
        prodi: 'S1 Informatika',
        semester: 6,
        fakultas: 'Teknik',
        kelas: 'C',
        status: 'Aktif',
        tahunMasuk: '2022',
        ipk: 3.78,
    },
    {
        id: '4',
        name: 'YOGI A.AMMAH',
        nim: '105841108222',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841108222_.jpg?1751871542',
        prodi: 'S1 Informatika',
        semester: 6,
        fakultas: 'Teknik',
        kelas: 'B',
        status: 'Aktif',
        tahunMasuk: '2022',
        ipk: 3.65,
    },
    {
        id: '5',
        name: 'RIKA ARMAYANI',
        nim: '105841108822',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841108822_.jpg?1751871543',
        prodi: 'S1 Informatika',
        semester: 6,
        fakultas: 'Teknik',
        kelas: 'C',
        status: 'Aktif',
        tahunMasuk: '2022',
        ipk: 3.89,
    },
    {
        id: '6',
        name: 'SABAN',
        nim: '105841110322',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841110322_.jpg?1751871544',
        prodi: 'S1 Informatika',
        semester: 6,
        fakultas: 'Teknik',
        kelas: 'C',
        status: 'Aktif',
        tahunMasuk: '2022',
        ipk: 3.72,
    },
    {
        id: '7',
        name: 'WANANDA SULISTRIAN',
        nim: '105841110622',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841110622_.jpg?1751871545',
        prodi: 'S1 Informatika',
        semester: 6,
        fakultas: 'Teknik',
        kelas: 'C',
        status: 'Aktif',
        tahunMasuk: '2022',
        ipk: 3.94,
    },
    {
        id: '8',
        name: 'HANNA MARYAM',
        nim: '105841110922',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841110922_.jpg?1751871546',
        prodi: 'S1 Informatika',
        semester: 6,
        fakultas: 'Teknik',
        kelas: 'C',
        status: 'Aktif',
        tahunMasuk: '2022',
        ipk: 3.68,
    },
    {
        id: '9',
        name: 'DAYANG AISYAH',
        nim: '105841109822',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841109822_.jpg?1751871547',
        prodi: 'S1 Informatika',
        semester: 6,
        fakultas: 'Teknik',
        kelas: 'C',
        status: 'Aktif',
        tahunMasuk: '2022',
        ipk: 3.87,
    },
    {
        id: '10',
        name: 'USRAN',
        nim: '105841108722',
        foto: 'https://simak.unismuh.ac.id/upload/mahasiswa/105841107822_.jpg?1751871548',
        prodi: 'S1 Informatika',
        semester: 6,
        fakultas: 'Teknik',
        kelas: 'C',
        status: 'Aktif',
        tahunMasuk: '2022',
        ipk: 3.76,
    }
];

// Fungsi helper untuk mendapatkan mahasiswa berdasarkan ID
export const getStudentById = (id: string): Student | undefined => {
    return students.find(student => student.id === id);
};

// Fungsi helper untuk mendapatkan semua mahasiswa
export const getAllStudents = (): Student[] => {
    return students;
};

// Fungsi helper untuk mendapatkan mahasiswa secara random
export const getRandomStudent = (): Student => {
    const randomIndex = Math.floor(Math.random() * students.length);
    return students[randomIndex];
};
