// membuat object
const req = {
  body: {
    name: "Ilham Arifin",
    age: 20,
    major: "Informatics",
  },
};

// destructing object
const { name, age, major } = req.body;

// membuat array
const family = ["Agus", "Caca", "Dody"];

// destructing array
const [ayah, ibu, anak] = family;


