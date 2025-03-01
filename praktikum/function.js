// fungsi hitung luas bungun datar

// function declaration
function hitungLuasPersegi(sisi) {
  return sisi * sisi;
}

// function expression
const hitungLuasPersegiPanjang = function (panjang, lebar) {
  return panjang * lebar;
};

// arrow function
const hitungLuasLingkaran = (jari, phi = 3.14) => {
  return jari * phi;
};

console.log(hitungLuasPersegi(4));
console.log(hitungLuasPersegiPanjang(3, 4));
console.log(hitungLuasLingkaran(10));
