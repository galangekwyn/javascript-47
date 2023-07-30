const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculateSquareRootOfEvenNumber(x) {
  if (x < 0) {
    return "Tidak bisa input bilangan negatif";
  } else if (x % 2 !== 0) {
    return "Tidak bisa input bilangan ganjil";
  } else {
    return Math.sqrt(x);
  }
}

rl.question("Masukkan Bilangan Genap: ", function(inputNumber) {
  const number = parseInt(inputNumber);
  const result = calculateSquareRootOfEvenNumber(number);
  console.log(result);

  rl.close();
});
