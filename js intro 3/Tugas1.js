//program mengecek hari kerja
const cekHariKerja = day => {
  return new Promise(function(resolve, reject) { // 2 paremeter yg di terima
    setTime out(() => { 
      const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'] 
      const cek = dataDay.find(item => item === day) 
      try { //menegcek apkh kode bermasalh
        if (cek) { 
          resolve(`Hari ini adalah hari kerjaa semangtttt! ${cek}`)
        } else {
          reject(new Error('Hari ini bukan hari kerja'))
        }
      } catch (error) {
        reject(error)
      }
    }, 3000)
  })
}
cekHariKerja('senin')
      .then((dataDay) => {
        console.log(dataDay); //Output berhasil di ambil
      })
      .catch((error) => {
        console.log(error.message); //Output gagal di ambil
      });