// Could only get this to create an object with one letter per line, rather than one line per line.

// Converting csv to object using csv-parser
/*

// Read CSV file into object
const csv = require("csv-parser");

const fs = require("fs");
const csvToObj = require("csv-to-js-parser").csvToObj;

const data = fs.readFileSync("./data/shelf-films.csv").toString();

const description = {
  film_title: { type: "string", group: 1 },
};

let obj = csvToObj(data, ";", description);


import { readFile } from "fs/promises";
import csvToObj from "csv-parser";

async function readAndParseCSV() {
  try {
    const csvData = await readFile("./Data/shelf-films.csv", "utf-8");
    const parsedData = csvToObj(csvData);

    console.log(parsedData);
  } catch (error) {
    console.error("Error reading and parsing CSV:", error);
  }
}

readAndParseCSV();
*/
