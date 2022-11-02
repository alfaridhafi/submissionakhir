const restaurants = [
  {
    nama: 'pondok kelapo',
    gambar: 'https://www.gotravelly.com/blog/wp-content/uploads/2018/06/pondok-kelapo.jpg',
    deskripsi: 'Tempat makan ini terletak di Jl. Demang Lebar Daun No. 184 Palembang. Di rumah makan ini terdapat beberapa menu atau kuliner khas Palembang yang salah satunya adalah pempek, selain itu pondok kelapo Palembang juga memberikan tempat yang sangat nyaman untuk kita bisa menikmati kuliner di Palembang ini, Di pondok kelapo ini memiliki tempat yang sederhana namun tetap memiliki kesan elegan, sehingga hal ini menjadikan pondok kelapo sebagai salah satu tempat makan yang sangat direkomendasikan saat kita sedang berburu kuliner di kota Palembang.',
  },
  {
    nama: 'RM Makan Sri Melayu',
    gambar: 'https://www.gotravelly.com/blog/wp-content/uploads/2018/06/rm-makan-sri-melayu.jpg',
    deskripsi: 'Rumah makan sri melayu adalah salah satu rumah makan yang sangat terkenal di Palembang, rumah makan in menyediakan berbagai pilihan menu yang sangat beragam. Apalagi di rumah makan tersebut kita bisa menikmati kuliner palembang dengan harga yang sangat terjangkau, dengan hanya 10 sampai 100 ribuan saja kita bisa puas menyantap hidangan di Rumah makan sri melayu ini. Salah satu masakan yang terkenal di rumah makan sri melayu adalah pindang, di sini kita akan menemui berbagai pilihan pindang dengan berbagai resep yang sangat menggugah selera. Saat kita berkunjung di Palembang tidak akan lengkap rasanya jika tidak mencoba kuliner di rumah makan sri melayu ini',
  },
  {
    nama: 'Pagi Sore',
    gambar: 'https://www.gotravelly.com/blog/wp-content/uploads/2018/06/pagi-sore-palembang.jpg',
    deskripsi: 'Pagi sore restoran adalah salah satu rumah makan yang sangat terkenal dengan olahan rendangnya, disini kita akan menemukan berbagai olahan rendang dengan cita rasa yang tidak perlu diragukan lagi. Bahkan konon katanya pagi sore restoran telah menjadi salah satu restoran dengan rasa rendang yang paling nikmat di Palembang, hal ini bukan tanpa alasan mengingat pagi sore memiliki bahan yang sangat berkualitas. Pagi sore telah berdiri sejak tahun 1973 dan sekarang telah memiliki 5 cabang yang tersebar di kota Palembang, sehingga dengan banyaknya cabang ini kita tidak akan kesusahan dalam mencari rumah makan tersebut.',
  },
  {
    nama: 'River Side restoran',
    gambar: 'https://www.gotravelly.com/blog/wp-content/uploads/2018/06/river-side-restoran.jpg',
    deskripsi: 'Seperti namanya rumah makan ini terletak di pinggir sungai musi yang memang menjadi salah satu icon kota Palembang. Menu di rumah makan ini juga sangat nikmat untuk kita nikmati, apalagi akan ditemani pemandangan yang tak biasa yaitu sungai musi. Tentunya akan menjadi kesan tersendiri jika kita makan di tempat ini, hal ini dikarenakan kita akan mendapat pemandangan yang sangat bagus serta perahu dan segala aktivitas di sungai musi kita akan bisa melihatnya dengan jelas.',
  },
  {
    nama: 'Rumah Makan Pindang Musi Rawas',
    gambar: 'https://www.gotravelly.com/blog/wp-content/uploads/2018/06/rumah-makan-pindang-musi-rawas.jpg',
    deskripsi: 'Rumah makan rekomended berikutnya adalah rumah makan pindang musi rawas, disini tentunya kita akan menemukan olahan pindang dengan cita rasa yang nikmat. Apalagi menu ini menjadi menu utama di rumah makan pindang musi rawas tersebut, sebut saja nasi pindang udang, nasi pindang tulang, hingga nasi padang pindang lele juga tersedia di rumah makan ini. Soal harga kita tidak perlu takut karena disini cukup terjangkau bagi kita, hanya dengan 5 sampai 85 ribu saja kita bisa menikmati nasi pindang khas rumah makan pindang musi rawas tersebut.',
  },
  {
    nama: 'Pempek Beringin Rajawali',
    gambar: 'https://www.gotravelly.com/blog/wp-content/uploads/2018/06/pempek-beringin-rajawali.jpg',
    deskripsi: 'Seperti namanya disini merupakan salah satu rumah makan dengan cita rasa pempek yang sangat nikmat, hal ini dibuktikan dengan banyaknya pengunjung yang singgah di rumah makan tersebut. Rumah makan ini terletak di Jl. Rajawali No.14 kota Palembang.',
  },
  {
    nama: 'Pempek Saga Sudi Mampir',
    gambar: 'https://www.gotravelly.com/blog/wp-content/uploads/2018/06/pempek-saga-sudi-mampir.jpg',
    deskripsi: 'pempek saga sudi mampir juga menjadi salah satu restoran dengan menu utama pempek dengan cita rasa yang tidak perlu diragukan lagi. Jangan khawatir soal harga karena disini pempek dengan cita rasa nikmat hanya memiliki harga 5 sampai 30 ribu saja, tentunya sangat terjangkau untuk makanan khas kota Palembang ini. Ditambah lagi dengan tersedianya banyak minuman jus, es, hingga kopi membuat kesan tersendiri saat menikmati pempek khas Palembang tersebut. Tentu saja akan sangat cocok untuk kita menghabiskan waktu sore ataupun malam hari di kota Palembang sambil menikmati pempek.',
  },
  {
    nama: 'Bebek Tepi Sawah',
    gambar: 'https://www.gotravelly.com/blog/wp-content/uploads/2018/06/pempek-saga-sudi-mampir.jpg',
    deskripsi: 'pempek saga sudi mampir juga menjadi salah satu restoran dengan menu utama pempek dengan cita rasa yang tidak perlu diragukan lagi. Jangan khawatir soal harga karena disini pempek dengan cita rasa nikmat hanya memiliki harga 5 sampai 30 ribu saja, tentunya sangat terjangkau untuk makanan khas kota Palembang ini. Ditambah lagi dengan tersedianya banyak minuman jus, es, hingga kopi membuat kesan tersendiri saat menikmati pempek khas Palembang tersebut. Tentu saja akan sangat cocok untuk kita menghabiskan waktu sore ataupun malam hari di kota Palembang sambil menikmati pempek.',
  },
];
export default restaurants;