const getMonth = (callback) => { 
  setTimeout(() => {
    // Deklarasi variabel error dengan nilai default false
    let error = false;
    let month = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const result = month.map(Element => {
      return Element + " ";
    });
    if (!error) {
      callback(null, result); //pengecekan varibel error masih memilii nilai falese
    } else {
      callback(new Error("Sorry Data Not Found")); // pengecekan masih memiliki nilai true
    }
  }, 4000);
};

getMonth((err, data) => {
  if (err) {
    console.log(err.message); // Output error message
  } else {
    console.log(data); // Output berhasil menampilkan data
  }
});