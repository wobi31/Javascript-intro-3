fetch('https://jsonplaceholder.typicode.com/users')//Masuk ke data menggunkan fetch
.then(response => {
    if (!response.ok) {
      throw new Error('Jaringan bermasalah');
    }
    return response.json();//pengurain data masuk ke tahap selanjutnya
  }) 
  .then(data => { //callback
    const result = data.map(user => {
      return user.name + " "; //Memanggil setiap objek pengguna
    });
    console.log(result); //Jika Output berhasil maka akan mencetak nama
  })
  .catch(error => {
    console.error('Terjadi kesalahan:', error); //Output jika terjadi err
  });
