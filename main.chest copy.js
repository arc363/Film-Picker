// How many films do you want to pick this time?
const numberToPick = 3;

// Generate array of unique numbers

let arr5Numbers = [];
let numberOfFilms = 759;

while (arr5Numbers.length < numberToPick) {
  let r = Math.floor(Math.random() * numberOfFilms) + 1;
  if (arr5Numbers.indexOf(r) === -1) arr5Numbers.push(r);
}
console.log(arr5Numbers);

// Help from gpt

const fs = require("fs");
const csv = require("csv-parser");
var filmsArrayAll = [];

async function readCSVFile() {
  await fs
    .createReadStream("./data/chest-films.csv")
    .pipe(csv())
    .on("data", (data) => filmsArrayAll.push(data))
    .on("error", (error) => {
      throw error;
    });
}

// Usage:

async function main() {
  await readCSVFile();
  console.log(`B`, filmsArrayAll);
  console.log(`Your chosen films from the chest are:`);

  for (let i = 0; i < arr5Numbers.length; i++) {
    let film = filmsArrayAll[arr5Numbers[i]];
    if (film && film.Title);
    console.log(`     ${i + 1}. ` + film.Title);
  }
  console.log(
    `If you wish to replace any of these choices, amend "numberToPick" at the top of the page.`
  );
}

main();
console.log(`Program started`);

// console.log(filmsArrayAll[1]);
