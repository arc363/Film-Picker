// Pick randomly between shelf, chest and Curzon

const randomSource = function () {
  const randomNumber1 = Math.floor(Math.random() * 3);
  const source = [`the shelf`, `the chest`, `Curzon`];

  console.log(`Choose a film from...
    ...${source[randomNumber1]}!`);
};

randomSource();

// Generate array of unique numbers

let arr = [];
let numberOfFilms = 200;

while (arr.length < 5) {
  let r = Math.floor(Math.random() * numberOfFilms) + 1;
  if (arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);
