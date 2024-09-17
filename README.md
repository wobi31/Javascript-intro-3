# Javascript-intro-3
Tugas 1:
##DEskripsi:
Program akan mengecek apakah hari ini hari bekerja Menggunakan promise js

##Fitur
Memeriksa apakah hari yang diberikan adalah hari kerja.
Mengembalikan janji yang diselesaikan dengan hari dalam seminggu jika hari tersebut adalah hari kerja.
Menolak janji dengan kesalahan jika hari tersebut bukan hari kerja.

##Rincian kode
Fungsi cekHariKerjamenerima parameter dayyang mewakili hari yang akan diperiksa.
Fungsi cekHariKerjamengembalikan objek Promise.
Objek Promisemenghentikan eksekusi selama 3 detik dengan menggunakan setTimeout.
Setelah 3 detik, kode memeriksa apakah hari yang diberikan ada dalam array dataDay.
Jika hari yang diberikan ada dalam array dataDay, fungsi resolvedipanggil dengan pesan "Hari ini adalah hari kerjaa semangtttt! cek".
Jika hari yang diberikan tidak ada dalam array dataDay, fungsi rejectdipanggil dengan pesan kesalahan "Hari ini bukan hari kerja".
Fungsi thendipanggil jika fungsi resolvedijalankan dan menampilkan hasil di konsol.
Fungsi catchdipanggil jika fungsi rejectdijalankan dan menampilkan pesan kesalahan di konsol.

Tugas2:
##Deskripsi:
Program akan mengambil data mont menggunakan promise javascript

getMonth(callback):
Fungsi ini mengambil fungsi panggilan balik sebagai argumen.
Digunakan setTimeoutuntuk mensimulasikan operasi asinkron yang membutuhkan waktu 4 detik untuk diselesaikan.
Di dalam setTimeout, ia mendefinisikan array bulan ( month) dan menggunakan mapfungsi untuk mengubah array tersebut menjadi array baru dengan tiap elemen ditambahkan spasi.
Ini menetapkan errorbendera ke false.
Jika errorbendera tersebut adalah false, ia memanggil fungsi panggilan balik dengan null(tanpa kesalahan) dan array yang ditransformasikan ( result).
Jika errorbenderanya adalah true, ia memanggil fungsi panggilan balik dengan Errorobjek baru yang berisi pesan "Maaf Data Tidak Ditemukan".
getMonth(err, data)fungsi:
Fungsi ini mengambil objek kesalahan ( err) dan data ( data) sebagai argumen.
Ia memeriksa apakah errobjek telah didefinisikan.
Jika errdidefinisikan, ia akan mencatat pesan kesalahan.
Jika errtidak didefinisikan, ia akan mencatat datanya.

##Output
output akan mencetak data month.

Tugas3:
##Deskripsi:
Menampung 2 program,
Pada program pertama menegcek waktu seusai tempat user menggunakan promise js
Program ke 2 akan menghitung luas persegi yang di inputkan user

###Program 1: Mengecek Waktu

Program ini mendefinisikan fungsi `hitungWaktu()` yang mengembalikan Promise. Fungsi ini menunda eksekusi selama 1 detik dan kemudian menyelesaikan Promise dengan string representasi waktu saat ini. 

function hitungWaktu() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const waktu = new Date().toString();
      resolve(waktu);
    }, 1000);
  });
}

hitungWaktu()
  .then(waktu => console.log(`Waktu saat ini: ${waktu}`))
  .catch(error => console.error(error));

###Program 2: Menghitung luas persegi
 Fucntion mengembalikan Promise dengan luas persegi yang dihitung.
 function hitungLuasPersegi(sisi) {
  return new Promise((resolve, reject) => {
    const luas = sisi * sisi; //rumus sisi kali sisi
    resolve(luas);
  });
}

hitungLuasPersegi(8)
  .then(luas => console.log(`Luas persegi: ${luas} cm²`))
  .catch(error => console.error(error));

##Kesimpulan
Program sederhana bagaimana menggunakan  promise JavaScript untuk menghitung waktu dan luas persegi.

Tugas4:
##Deskripsi:
Program mengambil data pengguna dari API JSON/Server dan menampilkannya ke konsol.

##Rincian kode
Fetch Data: 
di fungsikan untuk mengambil data dari API JSON Placeholder.
Handle Response:
Jika permintaan berhasil (response.ok adalah true), maka data diubah ke format JSON menggunakan response.json().
Jika permintaan gagal, error baru dilempar dengan pesan "Jaringan bermasalah".
Map Data: Data pengguna dipetakan dengan mengambil nama dari masing-masing objek pengguna.
Display Output: Nama pengguna ditampilkan di konsol.
Handle Error: Jika terjadi error, pesan kesalahan ditampilkan di konsol.

##Output
Jika program berhasil maka akan mencetak nama yang di dapat
jika error maka akan di cetak di console dengan pesan error
