# UAS_Teknologi_Web_RidhwanNaufal
# Aplikasi Inventaris Barang 

Aplikasi web full-stack untuk mengelola inventaris barang. Dibangun menggunakan HTML, CSS, JavaScript, Node.js, Express.js, dan SQLite.


| Keterangan | Data |
|------------|------|
| **Nama** | Ridhwan Naufal Syahaman |
| **NIM** | 2510120010 |
| **Mata Kuliah** | Teknologi Web |

## Alur Kerja Sistem

1. Pengguna membuka aplikasi melalui browser di `http://localhost:3000`
2. Pengguna dapat **menambah barang** dengan mengisi form (Nama, Kategori, Jumlah, Kondisi, Lokasi)
3. Data tersimpan ke database SQLite melalui REST API backend
4. Data **ditampilkan** dalam tabel di halaman utama
5. Pengguna dapat **mengedit** data dengan klik tombol "Edit"
6. Pengguna dapat **menghapus** data dengan klik tombol "Hapus"

## Teknologi yang Digunakan

| Komponen | Teknologi |
|----------|-----------|
| **Frontend** | HTML, CSS, JavaScript (Vanilla) |
| **Backend** | Node.js, Express.js |
| **Database** | SQLite3 |

## Struktur Tabel Database

| Field | Tipe Data | Keterangan |
|-------|-----------|------------|
| `id` | INTEGER | Primary Key, Auto Increment |
| `nama_barang` | TEXT | Nama barang |
| `kategori` | TEXT | Kategori barang |
| `jumlah` | INTEGER | Jumlah stok |
| `kondisi_barang` | TEXT | Kondisi: Baik/Rusak/Perbaikan |
| `lokasi` | TEXT | Lokasi penyimpanan |

### Contoh Data

| id | nama_barang | kategori | jumlah | kondisi_barang | lokasi |
|----|-------------|----------|--------|----------------|--------|
| 1 | Monitor Samsung 24" | Elektronik | 5 | Baik | Lab 1 |
| 2 | Keyboard Mechanical | Elektronik | 10 | Baik | Lab 2 |

LAMPIRAN
Link GitHub: https://github.com/ridhwannaufal15/UAS_Teknologi_Web_RidhwanNaufal.git
Link YouTube: https://youtu.be/dz_KqX4IZHs?si=kRyKxogGVvzBKdeb

##  Cara Menjalankan Aplikasi

```bash
git clone https://github.com/ridhwannaufal15/ProjekUAS_WebTech_RidhwanNaufal.git
cd ProjekUAS_WebTech_RidhwanNaufal

npm install

npm run dev

http://localhost:3000
