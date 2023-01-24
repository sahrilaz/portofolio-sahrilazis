const dataSkill = {
  code: [
    { nama: "HTML & CSS", persen: "90%" },
    { nama: "Bootstrap", persen: "85%" },
    { nama: "Python", persen: "80%" },
    { nama: "Javascript", persen: "80%" },
    { nama: "PHP", persen: "70%" },
    { nama: "ReactJS", persen: "80%" },
    { nama: "React Native", persen: "80%" },
    { nama: "ExpressJS", persen: "90%" },
  ],
  professional: [
    { nama: "Communication", persen: "80%" },
    { nama: "Leadership", persen: "80%" },
    { nama: "Comfidence", persen: "80%" },
  ],
  software: [
    { nama: "Adobe Photoshop", persen: "60%" },
    { nama: "Adobe Illustrator", persen: "60%" },
  ],
};

export const skill = (state = dataSkill, action) => {
  return state;
};
