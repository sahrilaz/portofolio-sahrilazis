const dataSkill = {
  code: [
    { nama: "HTML & CSS", persen: "90%" },
    { nama: "Bootstrap", persen: "85%" },
    // { nama: "Python", persen: "10%" },
    { nama: "Javascript", persen: "80%" },
    { nama: "PHP", persen: "70%" },
    // { nama: "ReactJS", persen: "10%" },
    // { nama: "React Native", persen: "10%" },
    // { nama: "ExpressJS", persen: "10%" },
  ],
  professional: [
    { nama: "Communication", persen: "80%" },
    { nama: "Leadership", persen: "80%" },
    { nama: "Comfidence", persen: "80%" },
  ],
  software: [
    { nama: "Adobe Photoshop", persen: "60%" },
    { nama: "Adobe Illustrator", persen: "50%" },
  ],
};

export const skill = (state = dataSkill, action) => {
  return state;
};
