// How many films do you want to pick this time?
const numberToPick = 1;

// Generate array of unique numbers
let arr5Numbers = [];
let numberOfFilms = 20;

while (arr5Numbers.length < numberToPick) {
  let r = Math.floor(Math.random() * numberOfFilms);
  if (arr5Numbers.indexOf(r) === -1) arr5Numbers.push(r);
}

// Read list of films on shelf into script
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
    console.log(`Your chosen films from the shelf are:`);

    for (let i = 0; i < arr5Numbers.length; i++) {
      const film = filmsArrayAll[arr5Numbers[i]];
      if (film && film.Title) console.log(`     ${i + 1}. ` + film.Title);
    }
  })
  .catch((error) => {
    console.error("Error reading CSV file:", error);
  });
