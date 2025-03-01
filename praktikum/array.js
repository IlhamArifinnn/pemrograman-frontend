// membuat variable array
const fruits = ["apple", "banana", "mango"];

/**
 * mengakses element atau nilai array
 * mengakses element berdasarkan index atau posisi
 * posisi (index) dimulai dari 0
 */
console.log(fruits[0], fruits[1]);

// looping array
const animals = ["cat", "dog", "fish", "bird"];

// looping array menggunakan for
for (let i = 0; i < animals.length; i++) {
  console.log(`hewan: ${animals[i]}`);
}

// looping array menggunakan for-of
for (const animal of animals) {
  console.log(`hewan: ${animal}`);
}
