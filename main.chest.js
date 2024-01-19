// How many films do you want to pick this time?
const numberToPick = 5;

// Generate array of unique numbers

let arr5Numbers = [];
let numberOfFilms = 759;

while (arr5Numbers.length < numberToPick) {
  let r = Math.floor(Math.random() * numberOfFilms) + 1;
  if (arr5Numbers.indexOf(r) === -1) arr5Numbers.push(r);
}

const fs = require("fs");
const csv = require("csv-parser");

// Read list of films in chest into script
function readCSVFile() {
  return new Promise((resolve, reject) => {
    const filmsArrayAll = [];

    fs.createReadStream("./data/chest-films.csv")
      .pipe(csv())
      .on("data", (data) => filmsArrayAll.push(data))
      .on("end", () => {
        resolve(filmsArrayAll);
        // console.log(filmsArrayAll);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}

// Usage:
readCSVFile()
  .then((filmsArrayAll) => {
    console.log(`Your chosen films from the chest are:`);

    for (let i = 0; i < arr5Numbers.length; i++) {
      const film = filmsArrayAll[arr5Numbers[i]];
      if (film && film.Title);
      console.log(`     ${i + 1}. ` + film.Title);
    }
    console.log(
      `If you wish to replace any of these choices, amend "numberToPick" at the top of the page.`
    );
  })
  .catch((error) => {
    console.error("Error reading CSV file:", error);
  });

// console.log(filmsArrayAll[1]);
