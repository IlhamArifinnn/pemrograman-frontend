// membuat array
const names = ["Heri", "Wawan", "Setiawan"];

// method foreach: untuk iterasi
names.forEach(function (name) {
  console.log(name);
});
console.log("\n");

// method map: transform data/mengubah data
const formatName = names.map(function (name) {
  return `Bapak/Ibu ${name}`;
});
console.log(formatName);

// membuat array of object
const users = [
  {
    name: "Budi",
    age: 21,
  },
  {
    name: "Ivan",
    age: 26,
  },
  {
    name: "Teguh",
    age: 24,
  },
];

console.log("\n");

// method find: mencari 1 data berdasarkan kondisi
const foundUser = users.find(function (user) {
  return user.age > 20;
});
console.log(foundUser);

console.log("\n");

// method filter: memfilter data berdasarkan kondisi
const filterUser = users.filter(function (user) {
  return user.age > 21;
});
console.log(filterUser);
