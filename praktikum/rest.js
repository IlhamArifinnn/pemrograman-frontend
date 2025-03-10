function sum(...input) {
  let hasil = 0;
  for (let i = 0; i < input.length; i++) {
    hasil += input[i];
  }
  return hasil;
}

console.log(sum(1, 2, 3));

// function sum(...input) {
//   let hasil = 0;
//   for (const i of input) {
//     hasil += i;
//   }
//   return hasil;
// }

// console.log(sum(1, 2, 3));
