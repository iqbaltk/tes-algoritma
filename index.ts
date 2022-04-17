// Jawaban 1
console.log("==========Jawaban 1==========");

const value = "NEGIE1";
const splitStr = value.split("").reverse();
splitStr.push(splitStr[0]);
splitStr.shift();

const soal1 = splitStr.join("");
console.log(soal1);

// Jawaban 2
console.log("==========Jawaban 2==========");

const sentence = "Saya sangat senang mengerjakan soal algoritma".split(" ");
const jmlSentence = sentence.map((data) => {
  return data.length;
});
const soal2 = jmlSentence.sort().shift();
console.log(`Mengerjakan : ${soal2} character`);

// Jawaban 3
console.log("==========Jawaban 3==========");
const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];
const OUTPUT = [];

for (let i = 0; i < QUERY.length; i++) {
  for (let y = 0; y < INPUT.length; y++) {
    if (QUERY[i] === INPUT[y]) {
      OUTPUT.push(QUERY[i]);
    }
  }
}
console.log(`Karena kata '${OUTPUT.join()}' terdapat pada INPUT`);

// Jawaban 4
console.log("==========Jawaban 4==========");
const Matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];

const penjumlahan = (angka1: number, angka2: number, angka3: number) => {
  return angka1 + angka2 + angka3;
};

const pengurangan = (angka1: number, angka2: number) => {
  return angka1 - angka2;
};

const satu = Matrix[0][0];
const lima = Matrix[1][1];
const sembilan = Matrix[2][2];
const nol = Matrix[0][2];
const tujuh = Matrix[2][0];

const diagonalPertama = penjumlahan(satu, lima, sembilan);
const diagonalKedua = penjumlahan(nol, lima, tujuh);
const hasilnya = pengurangan(diagonalPertama, diagonalKedua);

console.log(
  `diagonal pertama = ${satu} + ${lima} + ${sembilan} = ${diagonalPertama}`
);
console.log(`diagonal kedua = ${nol} + ${lima} + ${tujuh} = ${diagonalKedua}`);
console.log(
  `maka hasilnya adalah ${diagonalPertama} - ${diagonalKedua} = ${hasilnya}`
);
