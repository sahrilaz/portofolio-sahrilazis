const dataResume = {
  foto: "asset/img/riel.png",
  nama: "Sahril Azis",
  kuote:
    "saya Sahril Azis fresh graduate, miliki kemampuan programming, Javascript, HTML dan php, telah membuat beberapa project. Saya juga terbiasa mengoperasikan OS Linux,",
  education: [
    {
      jurusan: "Teknik Informatika",
      Universitas: "Pamulang",
      tahun: "2018-2023",
    },
  ],
  work: [
    {
      perusahaan: "PT SKY PARKING UTAMA",
      jabatan: "Technical Support",
      lama: "2019-2021",
    },
  ],
};

export const resume = (state = dataResume, action) => {
  return state;
};
