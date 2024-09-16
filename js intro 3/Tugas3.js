//Program 1 mengecek waktu
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
//Program 2 mengghitung luas persegi  
function hitungLuasPersegi(sisi) {
  return new Promise((resolve, reject) => {
    const luas = sisi * sisi; //rumus sisi kali sisi
    resolve(luas);
  });
}

hitungLuasPersegi(8)
  .then(luas => console.log(`Luas persegi: ${luas} cm²`))
  .catch(error => console.error(error));