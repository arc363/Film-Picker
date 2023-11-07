// Take 2 - Generate array of unique numbers

let arr5Numbers = [];
let numberOfFilms = 14;

while (arr5Numbers.length < 5) {
  let r = Math.floor(Math.random() * numberOfFilms);
  if (arr5Numbers.indexOf(r) === -1) arr5Numbers.push(r);
}
// console.log(arr5Numbers);

// Help from gpt

const fs = require("fs");
const csv = require("csv-parser");

function readCSVFile() {
  return new Promise((resolve, reject) => {
    const filmsArrayAll = [];

    fs.createReadStream("./data/shelf-films.csv")
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

    for (let i = 0; i < arr5Numbers.length; i++)
      console.log(filmsArrayAll[arr5Numbers[i]]);
  })
  .catch((error) => {
    console.error("Error reading CSV file:", error);
  });