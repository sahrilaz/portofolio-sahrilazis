const dataResume = {
  foto: "asset/img/me.png",
  nama: "Maman Sulaeman",
  kuote:
    "saya Maman Sulaeman fresh graduate, miliki kemampuan programming,python, Javascript, ReactJS, React Native, ExpressJs, HTML dan php, telah membuat beberapa project. Saya juga terbiasa mengoperasikan OS Linux,",
  education: [
    {
      jurusan: "Teknik Informatika",
      Universitas: "PancaSakti Bekasi",
      tahun: "2016-2020",
    },
  ],
  work: [
    {
      perusahaan: "PT Karya Komponen Presisi",
      jabatan: "QA",
      lama: "2018-2020",
    },
  ],
};

export const resume = (state = dataResume, action) => {
  return state;
};
