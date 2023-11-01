// Pick randomly between shelf, chest and Curzon

const randomSource = function () {
  const randomNumber1 = Math.floor(Math.random() * 3);
  const source = [`the shelf`, `the chest`, `Curzon`];

  console.log(`Choose a film from...
    ...${source[randomNumber1]}!`);
};

// randomSource();

// Take 2 - Generate array of unique numbers

let arr = [];
let numberOfFilms = 15;

while (arr.length < 5) {
  let r = Math.floor(Math.random() * numberOfFilms) + 1;
  if (arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);

// Read CSV file into object
const csv = require("csv-parser");
const fs = require("fs");

/*
// Create array containing all films in list
const filmsArrayAll = [];

fs.createReadStream("./data/shelf-films.csv")
  .pipe(csv())
  .on("data", (data) => filmsArrayAll.push(data))
  .on("end", () => {
    console.log(filmsArrayAll);
  });
*/

// Create array containing only five films
const filePath = `./data/shelf-films.csv`; // Replace with the path to your CSV file
const numLinesToRetrieve = 5; // Number of lines to retrieve

const selectedLineNumbers = [1, 2, 3, 4, 5];

const selectedLines = [];

const readableStream = fs.createReadStream(`./data/shelf-films.csv`);

readableStream
  .pipe(csv())
  .on("data", (row) => {
    // Increment the line number for each row
    row.lineNumber = row.lineNumber || 0;
    row.lineNumber++;

    if (selectedLineNumbers.includes(row.lineNumber)) {
      selectedLines.push(row);
    }

    if (selectedLines.length === numLinesToRetrieve) {
      // Close the file stream once we've found the desired lines
      readableStream.close();
    }
  })
  .on("end", () => {
    // Process the selected lines
    console.log("Selected Lines:", selectedLines);
  });

// Relate random numbers array to items in array
