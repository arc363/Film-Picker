// Generate array of unique numbers

let arr5Numbers = [];
let numberOfFilms = 759;

while (arr5Numbers.length < 5) {
  let r = Math.floor(Math.random() * numberOfFilms) + 1;
  if (arr5Numbers.indexOf(r) === -1) arr5Numbers.push(r);
}
// console.log(arr5Numbers);

// Help from gpt

const fs = require("fs");
const csv = require("csv-parser");

function readCSVFile() {
  return new Promise((resolve, reject) => {
    const filmsArrayAll = [];

    fs.createReadStream("./data/chest-films.csv")
      .pipe(csv())
      .on("data", (data) => filmsArrayAll.push(data))
      .on("end", () => {
        resolve(filmsArrayAll);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}

// Usage:
readCSVFile()
  .then((filmsArrayAll) => {
    console.log(`Your chosen films are:`);
    console.log(filmsArrayAll[arr5Numbers[0]]);
    console.log(filmsArrayAll[arr5Numbers[1]]);
    console.log(filmsArrayAll[arr5Numbers[2]]);
    console.log(filmsArrayAll[arr5Numbers[3]]);
    console.log(filmsArrayAll[arr5Numbers[4]]);
  })
  .catch((error) => {
    console.error("Error reading CSV file:", error);
  });

// console.log(filmsArrayAll[1]);
