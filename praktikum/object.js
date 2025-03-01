/**
 * membuat object menggunkan {}
 * menyimpan nilai dengan format key: value
 */
const user = {
  name: "Ilham Arifin",
  age: 20,
  major: "informatics",
};

/**
 * mengakses nilai object menggunakan key.
 * cara akses bila menggunakan dot atau bracket
 */
console.log(user.name, user["major"]);

// looping object
for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
